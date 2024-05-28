import { useState } from "react"

const PhotoGrid = () => {
  const [openModal, setOpenModal] = useState(false)

  const handleAddClick = () => {
    setOpenModal(!openModal)
  }

  return (
    <div className="photogrid-all">
      {openModal && (
        <div className="modal-all">
          <div className="modal-inner"></div>
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
