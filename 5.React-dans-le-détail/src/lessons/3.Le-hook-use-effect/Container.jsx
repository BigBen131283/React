import "./Container.css"
import { useEffect, useState } from "react"

export default function Container() {
  const [count, setCount] = useState(0)
  console.log("Mise à jour");

  // Quand le vrai DOM a été mis à jour on peut lancer notre effet secondaire
  // Premier argument : Une fonction callback
  // Second argument :  una tableau des dépendances
  useEffect(() => {
    console.log("Après première création et après chaque mise à jour du DOM");
  }, [])

  //  même si on place le useEffect en premier dans le code, c'est le console log "Mise à jour" qui est exécuté en premier
  //  peut être utilisé dans des cas comme intersection observer ou des appels vers les API

  // le tableau des dépendances :
  // un tableau vide signifie que le use effect ne s'exécute seulement qu'après la première création. Dans la console on a les 2 console.log à la création. A chaque appel du useState on n'a que le console.log "Mise à jour"
  // Si on ne met pas de tableau, le useState et le useEffect s'exécute à chaque fois que le DOM est mis à jour
  // le tableau vide peut être utile si par exemple on ne veut faire qu'un seul appel vers une API

  return (
    <div>
      <h1>Le hook useEffect</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <p>{count}</p>
    </div>
  )
}
