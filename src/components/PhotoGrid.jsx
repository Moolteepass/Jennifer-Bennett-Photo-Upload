import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import artworkList from "./artworkList"

const PhotoGrid = () => {
  const [openModal, setOpenModal] = useState(false)
  const [name, setName] = useState("")
  const [uid, setUid] = useState("")
  const [image, setImage] = useState(null)
  const [uidNotFound, setUidNotFound] = useState(false)

  const handleAddClick = () => {
    setOpenModal(!openModal)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log("Name:", name)
    console.log("UID:", uid)
    console.log("Image:", image)

    if (artworkList[uid]) {
      setUidNotFound(false)
      console.log("It was found")
    } else {
      setUidNotFound(true)
    }
  }

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
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </div>
              {uidNotFound ? (
                <p className="error-message">
                  UID not found. Please try again.
                </p>
              ) : (
                <p className="success-message">Thanks for the submission!</p>
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
        <img src="https://picsum.photos/id/101/300/300" alt="" />
        <img src="https://picsum.photos/id/102/300/300" alt="" />
        <img src="https://picsum.photos/id/103/300/300" alt="" />
        <img src="https://picsum.photos/id/104/300/300" alt="" />
        <img src="https://picsum.photos/id/203/300/300" alt="" />
        <img src="https://picsum.photos/id/106/300/300" alt="" />
        <img src="https://picsum.photos/id/107/300/300" alt="" />
        <img src="https://picsum.photos/id/108/300/300" alt="" />
        <img src="https://picsum.photos/id/109/300/300" alt="" />
        <img src="https://picsum.photos/id/110/300/300" alt="" />
        <img src="https://picsum.photos/id/111/300/300" alt="" />
        <img src="https://picsum.photos/id/112/300/300" alt="" />
        <img src="https://picsum.photos/id/113/300/300" alt="" />
        <img src="https://picsum.photos/id/114/300/300" alt="" />
        <img src="https://picsum.photos/id/115/300/300" alt="" />
        <img src="https://picsum.photos/id/116/300/300" alt="" />
        <img src="https://picsum.photos/id/117/300/300" alt="" />
        <img src="https://picsum.photos/id/118/300/300" alt="" />
        <img src="https://picsum.photos/id/119/300/300" alt="" />
        <img src="https://picsum.photos/id/120/300/300" alt="" />
        <img src="https://picsum.photos/id/121/300/300" alt="" />
        <img src="https://picsum.photos/id/122/300/300" alt="" />
        <img src="https://picsum.photos/id/123/300/300" alt="" />
        <img src="https://picsum.photos/id/124/300/300" alt="" />
        <img src="https://picsum.photos/id/125/300/300" alt="" />
        <img src="https://picsum.photos/id/126/300/300" alt="" />
        <img src="https://picsum.photos/id/127/300/300" alt="" />
        <img src="https://picsum.photos/id/128/300/300" alt="" />
        <img src="https://picsum.photos/id/129/300/300" alt="" />
        <img src="https://picsum.photos/id/130/300/300" alt="" />
        <img src="https://picsum.photos/id/131/300/300" alt="" />
        <img src="https://picsum.photos/id/132/300/300" alt="" />
        <img src="https://picsum.photos/id/133/300/300" alt="" />
        <img src="https://picsum.photos/id/134/300/300" alt="" />
        <img src="https://picsum.photos/id/135/300/300" alt="" />
        <img src="https://picsum.photos/id/136/300/300" alt="" />
        <img src="https://picsum.photos/id/137/300/300" alt="" />
        <img src="https://picsum.photos/id/198/300/300" alt="" />
        <img src="https://picsum.photos/id/139/300/300" alt="" />
        <img src="https://picsum.photos/id/240/300/300" alt="" />
        <img src="https://picsum.photos/id/141/300/300" alt="" />
        <img src="https://picsum.photos/id/142/300/300" alt="" />
        <img src="https://picsum.photos/id/143/300/300" alt="" />
        <img src="https://picsum.photos/id/144/300/300" alt="" />
        <img src="https://picsum.photos/id/145/300/300" alt="" />
        <img src="https://picsum.photos/id/146/300/300" alt="" />
        <img src="https://picsum.photos/id/247/300/300" alt="" />
        <img src="https://picsum.photos/id/287/300/300" alt="" />
        <img src="https://picsum.photos/id/149/300/300" alt="" />
        <img src="https://picsum.photos/id/301/300/300" alt="" />
        <img src="https://picsum.photos/id/151/300/300" alt="" />
        <img src="https://picsum.photos/id/152/300/300" alt="" />
        <img src="https://picsum.photos/id/153/300/300" alt="" />
        <img src="https://picsum.photos/id/154/300/300" alt="" />
        <img src="https://picsum.photos/id/155/300/300" alt="" />
        <img src="https://picsum.photos/id/156/300/300" alt="" />
        <img src="https://picsum.photos/id/157/300/300" alt="" />
        <img src="https://picsum.photos/id/158/300/300" alt="" />
        <img src="https://picsum.photos/id/159/300/300" alt="" />
        <img src="https://picsum.photos/id/160/300/300" alt="" />
      </div>
    </div>
  )
}

export default PhotoGrid
