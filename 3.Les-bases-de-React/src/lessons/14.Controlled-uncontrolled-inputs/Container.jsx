import { useState, useRef } from "react"

import "./Container.css"

export default function Container() {
  const [state, setState] = useState("")
  
  function handleInput(e) {
    setState(e.target.value)
  }

  const emailRef = useRef()

  function handleSubmit(e){
    e.preventDefault()

    console.log(state);
    console.log(emailRef.current.value);
  }
  return (
    <div>
      <h1>Composants "controlled" et "uncontrolled"</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="pseudo">Votre pseudo</label>
        <input 
        // Pour avoir un input contrôlé il faut faire ce qu'on appelle du "2 ways data binding"
        // c'est à dire lier notre input au state et que le state soit lié à notre input
        value={state}
        onChange={handleInput}
        type="text" 
        id="pseudo" 
        />
        {!state && <p>Veuillez remplir ce champ</p>}
        
        {/* Il n'est pas recommandé d'utiliser des uncontrolled input car on ne profite pas de React et des mises à jour du composant */}
        {/* on lie l'input grâce à ref (penser à définir la const) */}
        <label htmlFor="email">Votre email</label>
        <input 
        ref={emailRef}
        type="email" 
        id="email" 
        />

        <button>Envoyer</button>
      </form>
      <p>Votre pseudo : {state}</p>
    </div>
  )
}
