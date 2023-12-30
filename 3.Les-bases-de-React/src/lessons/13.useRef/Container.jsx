import { useRef, useState } from "react"

// useRef peut servir à deux choses
// 1. isoler une valeur parmi les mises à jour
// Le composant n'est pas mis à jour
// 2. sélectionner un élément dans un environnement React

export default function Container() {

  const [state, setState] = useState(0)
  const countRef = useRef(0)
  console.log(countRef);

  function handleCountRef() {
    countRef.current++
    console.log(countRef.current);
    console.log(txtRef);
  }
  console.log("Mise à jour");

  const txtRef = useRef()
  console.log(txtRef);

  return (
    <div>
      <h1>Comprendre les refs</h1>

      {/* 1 */}

      <p>Valeur du state : {state}</p>
      <p>Valeur de la ref : {countRef.current}</p>
      <button onClick={handleCountRef}>Incrémenter la référence</button><br />
      {/* la ref ne met pas à jour l'élément et continue d'être incrémentée. */}
      <button onClick={() => setState(state + 1)}>Incrémenter le state</button> 
      {/* le state se met à jour et met à jour l'élément, affichant ainsi la valeur de la ref (puisqu'il y mise à jour) */}


      {/* 2 */}
      <p ref={txtRef}>Lorem ipsum dolor sit amet.</p>

    </div>
  )
}
