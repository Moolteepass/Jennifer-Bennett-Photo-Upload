import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import artworkList from "./artworkList"
import Airtable from "airtable"

const PhotoGrid = () => {
  const [openModal, setOpenModal] = useState(false)
  const [name, setName] = useState("")
  const [uid, setUid] = useState("")
  const [image, setImage] = useState(null)
  const [uidFound, setUidFound] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [data, setData] = useState([])

  const handleAddClick = () => {
    setOpenModal(!openModal)
  }

  const handleSubmit = (e) => {
    const AIRTABLE_API_KEY = import.meta.env.VITE_AIRTABLE_API_KEY

    var base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(
      "appZwHtNztU5Pb76D"
    )
    e.preventDefault()
    // Handle form submission
    console.log("Name:", name)
    console.log("UID:", uid)
    console.log("Image:", image)

    setFormSubmitted(true)

    if (artworkList[uid]) {
      setUidFound(true)
      console.log("It was found")

      base("Paintings").update([
        {
          id: "recKHu9d9s906H3JY",
          fields: {
            uid: "VOT57",
            Name: "Journalist",
          },
        },
      ])

      window.location.reload()
    } else {
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
              allRecords.push(record.fields)
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

  const handleImageChange = (e) => {
    setImage(e.target.files[0])
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
                  capture="environment"
                  accept="image/jpeg, image/png, image/heic"
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
