import { useState } from "react"
import Card from "./Card"

// ON NE PASSE DES PROPS QUE DU PARENT A L'ENFANT POUR DES QUESTIONS DE MAINTENABILITE DU CODE ! 

export default function Container() {
  
  const [state, setState] = useState("Hello world")

  const id = 4125

  return (
    <div>
      <h1>Les props</h1>
      <p>State du container : {state}</p>
      <Card id={id} state={state} changeState={setState} />
      {/* Equivaut à : */}
      {/* {Card({id: id})} */}
      
      {/* Déstructurer les props */}
      {/* <Card /> */}
    </div>
  )
}
