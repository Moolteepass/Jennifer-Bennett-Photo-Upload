import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import artworkList from "./artworkList"
import Airtable from "airtable"
import axios from "axios"

const PhotoGrid = () => {
  const [openModal, setOpenModal] = useState(false)
  const [name, setName] = useState("")
  const [uid, setUid] = useState("")
  const [uidFound, setUidFound] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [data, setData] = useState([])

  const handleAddClick = () => {
    setOpenModal(!openModal)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
    /* If we've found the UID */
    if (artworkList[uid]) {
      /* const AIRTABLE_API_KEY = import.meta.env.VITE_AIRTABLE_API_KEY
      var base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(
        "appZwHtNztU5Pb76D"
      )
      const recordId = artworkList[uid].id */

      setUidFound(true)

      const selectedFile = new FormData()
      selectedFile.append("image", sendImage)

      for (const entry of selectedFile.entries()) {
        console.log(entry)
      }

      axios
        .post("https://api.imgur.com/3/image", selectedFile, {
          headers: {
            Authorization: "Client-ID e2577e08f1d74e5",
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    } else {
      console.log("Not found")
      setUidFound(false)
    }
  }

  useEffect(() => {
    const AIRTABLE_API_KEY = import.meta.env.VITE_AIRTABLE_API_KEY

    // Function to fetch data
    const fetchData = async () => {
      var base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(
        "appZwHtNztU5Pb76D"
      )

      let allRecords = []

      base("Paintings")
        .select({
          fields: [
            "order",
            "uid",
            "name",
            "templateImage",
            "foundImage",
            "foundBy",
          ],
          sort: [{ field: "order", direction: "asc" }],
        })
        .eachPage(
          function page(records, fetchNextPage) {
            records.forEach(function (record) {
              allRecords.push({
                id: record.id,
                ...record.fields,
              })
            })
            fetchNextPage()
          },
          function done(err) {
            if (err) {
              console.error(err)
              return
            }
            setData(allRecords)
            localStorage.setItem("cachedData", JSON.stringify(allRecords))
            console.log("fetchResult", allRecords)
          }
        )
    }

    // Load data from localStorage or fetch it
    if (localStorage.getItem("cachedData") !== null) {
      console.log("cachedData exists, loading now")
      setData(JSON.parse(localStorage.getItem("cachedData")))
    }
    fetchData()
  }, [])

  const handleImageChange = async (e) => {
    const file = e.target.files[0]
    console.log(file)

    try {
      const formData = new FormData()
      formData.append("file", file)
      formData.append("upload_preset", "nmszaghq")

      const cloudName = "drwp7yods" // Replace 'your_cloud_name' with your actual Cloudinary cloud name

      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        formData
      )

      console.log("Image uploaded successfully:", response.data)
      // Handle the response here, response.data.secure_url contains the URL of the uploaded image
    } catch (error) {
      console.error("Error uploading image to Cloudinary:", error)
      // Handle the error here
    }
  }

  return (
    <div className="photogrid-all">
      {openModal && (
        <div className="modal-all">
          <FontAwesomeIcon
            className="modal-close"
            onClick={handleAddClick}
            icon={faXmark}
          />
          <div className="modal-inner">
            <form className="modal-form" onSubmit={handleSubmit}>
              <div className="modal-name-wrap">
                <div className="modal-name">
                  <label htmlFor="name">FIRST NAME</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => {
                      const input = e.target.value
                      if (/^[A-Za-z]*$/.test(input) || input === "") {
                        // Only update the name state if the input contains only letters or is empty
                        setName(input)
                      }
                    }}
                    required
                    placeholder="Jane"
                    maxLength={20}
                  />
                </div>
                <div className="modal-uid">
                  <label htmlFor="uid">UID</label>
                  <input
                    type="text"
                    id="uid"
                    value={uid}
                    onChange={(e) => setUid(e.target.value.toUpperCase())}
                    required
                    placeholder="XXXXX"
                    maxLength={5}
                  />
                </div>
              </div>
              <div className="modal-image">
                <label className="modal-image-name" htmlFor="image">
                  IMAGE
                </label>
                <input
                  type="file"
                  id="image"
                  accept="image/jpeg, image/png"
                  size="15728640"
                  onChange={handleImageChange}
                />
              </div>
              {formSubmitted && !uidFound && (
                <p className="error-message">Error: UID not found</p>
              )}
              {formSubmitted && uidFound && (
                <p className="success-message">
                  Thanks! Enjoy your new artwork!
                </p>
              )}
              <button className="modal-submit-button" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
      <h1 className="photogrid-title">Art found so far!</h1>
      <button onClick={handleAddClick} className="photogrid-newart">
        I found some art!
      </button>
      <div className="photogrid-image-container">
        {data.map((item, index) => {
          const imgUrl =
            (item.foundImage && item.foundImage[0].url) ||
            (item.templateImage && item.templateImage[0].url)
          return <img key={index} src={imgUrl} alt="" />
        })}
      </div>
    </div>
  )
}

export default PhotoGrid
