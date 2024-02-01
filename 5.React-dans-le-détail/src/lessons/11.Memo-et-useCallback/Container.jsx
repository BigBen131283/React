import { useState, useCallback } from "react"
import Card from "./Card"

export default function Container() {

  const [count, setCount] = useState(0)

  const customLog = useCallback(() => console.log("Bonjour"), []) // on passe également le tableau des dépendances pour n'exécuter la callback qu'une fois

  // function customLog() {
  //   console.log("Bonjour");
  // }

  return (
    <div>
      <h1>Memo et useCallback</h1>
      <Card txt={"test"} customLog={customLog} />
      <button onClick={() => setCount(count + 1)}>Incrémenter</button>
    </div>
  )
}
