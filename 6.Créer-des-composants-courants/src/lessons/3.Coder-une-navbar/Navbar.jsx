import { useState } from "react"
import hamburger from "./assets/hamburger.svg"
import close from "./assets/close.svg"

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <nav className="fixed top-0 w-full flex justify-center p-4 bg-slate-200 mb-5">
        <ul className={`${showMenu ? "flex" : "hidden"} flex-col items-center bg-slate-200 w-full absolute top-full pb-5 sm:flex sm:relative sm:flex-row sm:pb-0 sm:justify-center`}>
            <li>
                <a href="#" className="inline-block py-2 mx-4 text-lg sm:py-0">Accueil</a>
            </li>
            <li>
                <a href="#" className="inline-block py-2 mx-4 text-lg sm:py-0">Services</a>
            </li>
            <li>
                <a href="#" className="inline-block py-2 mx-4 text-lg sm:py-0">Tarifs</a>
            </li>
            <li>
                <a href="#" className="inline-block py-2 mx-4 text-lg sm:py-0">Contact</a>
            </li>
        </ul>
        <button
        onClick={() => setShowMenu(!showMenu)}
        className="ml-auto sm:hidden"
        >
            <img 
                src={showMenu ? close : hamburger} alt={showMenu ? "Cacher le menu" : "Afficher le menu"}
                className="w-4"
            />
        </button>
    </nav>
  )
}