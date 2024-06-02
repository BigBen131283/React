import { Link, NavLink } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="p-2 text-center bg-slate-300">
        {/* <Link
         to="/"
         className="mx-2 text-md text-semibold"
         >
         Home
         </Link>
         <Link
         state={{txt: "State"}}
         //  Utilise l'API history du navigateur https://developer.mozilla.org/en-US/docs/Web/API/History/state
         // peut être utile pour faire passer des id, faire des appels d'API, etc...
         to="/contact"
         className="mx-2 text-md text-semibold"
         >
         Contact
        </Link> */}
        <NavLink
         to="/"
        //  className={({isActive}) => `${isActive && "bg-amber-400 mx-2 text-md text-semibold"}`}
         className="mx-2 text-md text-semibold"
        >
            Home
        </NavLink>
        <NavLink
         state={{txt: "State"}}
         to="/contact"
         className="mx-2 text-md text-semibold"
        >
            Contact
        </NavLink>
        <NavLink
         to="/analytics"
         className="mx-2 text-md text-semibold"
        >
            Analytics
        </NavLink>
    </nav>
  )
}