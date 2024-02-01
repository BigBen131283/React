import Card from "./Card"
import { useState } from "react"

export default function Container() {
  const [showCard, setShowCard] = useState(false)

  return (
    <div>
      <h1>Cleanup function</h1>

      <button onClick={() => setShowCard(!showCard)}>Afficher / Masquer</button>

      {showCard && <Card />}
    </div>
  )
}
