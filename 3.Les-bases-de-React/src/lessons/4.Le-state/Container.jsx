import { useState } from "react"

export default function Container() {

  const [count, setCount] = useState(0);
  console.log("Mise à jour !");

  function handleClick() {
    // setCount(count + 1);
    setCount(count => count + 1)
    setCount(count => count + 1)
    setCount(count => count + 1)
  }

  return (
    <div>
      <h1>Le state</h1>

      {/* Le state représente des données qui vont pouvoir être mises à jour */}
      {/* Quand elles sont mises à jour, le composant est mis à jour */}
      {/*  on utilise un HOOK useState qu'on importe */}

      <p>{count}</p>
      <button onClick={handleClick}>Incrémenter</button>

    </div>
  )
}
