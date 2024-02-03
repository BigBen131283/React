import { useState } from "react"
import { createPortal } from "react-dom"
import ModalContent from "./ModalContent"

export default function ModalButton() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
        <button
        onClick={() => setShowModal(true)}
        className="block mx-auto bg-slate-200 text-slate-900 p-2 rounded m-10">
            Open the modal
        </button>
        {showModal && createPortal(<ModalContent closeModal = {() => setShowModal(false)}/>, document.body)}
        {/* closeModal est une props, c'est une fonction qui permet de changer le state du parent */}
        {/* createPortal permet de rajouter un composant quelque part */}
    </>
  )
}