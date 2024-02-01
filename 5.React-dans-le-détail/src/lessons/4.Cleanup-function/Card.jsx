import { useEffect, useState } from "react"
import "./Card.css"

export default function Card() {
  const [state,setState] = useState(0)

  useEffect(() => {
    console.log("Effet");
    return () => console.log("Fonction de nettoyage");
  })

// Bien comprendre le Component Life Cycle

// Création (Mounting) : 
// 1. render 2. Maj du DOM 3. Painting du navigateur 4. Effects

// Mise à jour (Update) : 
// 1. render 2. Maj du DOM 3. Painting du navigateur 4. Cleanup effects 5. Effects

// Destruction (Unmount) :
// 1. Cleanup effects 2. Destruction

// Quand on affiche la carte : "Effet"
// Quand on met à jour le state de la carte (incrémentation) : "Fonction de nettoyage" puis "Effet"
// Quand on masque la carte : "Fonction de nettoyage"

  return (
    <div className="card">
        <p>Voici la carte et son state : {state}</p>
        <button onClick={() => setState(state + 1)}>Incrémentation</button>
    </div>
  )
}