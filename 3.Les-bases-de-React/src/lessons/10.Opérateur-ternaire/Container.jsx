import { useState } from "react"
import "./Container.css"

export default function Container() {
  
  const [validation, setValidation] = useState(false)
  
  return (
    <div>
      <h1>Opération ternaire</h1>
      <form>
        <label htmlFor="consent">Acceptez-vous ?</label>
        <input 
        onClick={()=>setValidation(!validation)}
        type="checkbox" name="" id="" />
        <p
          className={`${validation ? "validated" : "pending"}`}
          // style={{color: `${validation ? "lightgreen" : "red"}`}}
        >
          {validation ? "Bravo, vous pouvez envoyer le formulaire" : "Vous devez accepter nos conditions"}
        </p>
        {validation ? <p>True</p> : <p>False</p>}
      </form>
    </div>
  )
}
