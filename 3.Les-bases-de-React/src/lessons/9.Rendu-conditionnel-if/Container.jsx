import { useState } from "react";

export default function Container() {
  let [isLogged, setLogged] = useState(false)

  let content
  let btnText

  if(isLogged) {
    content = "Bienvenue sur votre contenu privé"
    btnText = "Logout"
  }
  else {
    content = "Veuillez vous connecter"
    btnText = "Login"
  }

  return (
    <div>
      <h1>Rendu conditionnel avec if (Méthode 2)</h1>
      <p>{content}</p>
      <button onClick={() => setLogged(isLogged = !isLogged)}>{btnText}</button>
    </div>
  )
}

// Méthode 1
// export default function Container() {
  
//   const isLogged = false;
  
//   if(isLogged) {
//     return (
//       <div>
//         <h1>Rendu conditionnel avec if</h1>
//         <p>Vous êtes connecté</p>
//       </div>
//     )
//   }
//   else {
//     return (
//       <div>
//         <h1>Rendu conditionnel avec if</h1>
//         <p>Vous n'êtes pas connecté</p>
//       </div>
//     )
//   }
// }
