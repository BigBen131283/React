import { useReducer } from "react"

export default function Container() {
  const [count, dispatch] = useReducer(reducer, 0)

  // count, c'est le state, il commence avec le second argument. Ici, 0
  // le reducer c'est une fonction qui sert à modifier du state en fonction d'une action
  // dispatch correspond à tous les cas qu'on va pouvoir avoir, toutes les actions qu'on va pouvoir envoyer. dispatch va être une fonction qui va permettre d'envoyer une action à notre reducer

  function reducer(state, action) {
    switch(action.type) {
      case "increment":
        // console.log(action) // C'est un objet
        return state + 1
      case "decrement":
        return state - 1
      case "multiply":
        return state * action.payload
      case "divide":
        return state / action.payload
    }
  }

  return <div>
    <h1>Valeur du compteur : {count}</h1>
    <button
      onClick={() => dispatch({type: "increment", payload: 5})}
    >Incrémenter</button>
    <button
      onClick={() => dispatch({type: "decrement", payload: 5})}
    >Décrémenter</button>
    <button
      onClick={() => dispatch({type: "multiply", payload: 5})}
    >Multiplier</button>
    <button
      onClick={() => dispatch({type: "divide", payload: 5})}
    >Diviser</button>
  </div>
}
