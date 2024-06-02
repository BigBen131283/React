import { Link } from "react-router-dom"

// <Link> Permet de créer des liens de navigation en profitant de l'intérêt de React, càd de ne pas recharger la page et seulement changer les composants affichés. 

export default function NotFound() {
  return (
    <div>
        <p
        className="text-4x1 font-semibold text-center pt-10"
        >
            Page not found 🤖
        </p>
        <div className="text-center">
            {/* <a href="/">Back to Homepage</a> */}
            <Link
             to="/"
            >
                Back to Homepage
            </Link>
        </div>
    </div>
  )
}