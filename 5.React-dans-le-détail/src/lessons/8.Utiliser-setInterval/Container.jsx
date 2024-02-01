import { useState, useEffect } from "react"

export default function Container() {
  const[count, setCount] = useState(0)


  // setInterval(() => {
  //   setCount(count + 1);
  // }, 1000)
  //  ça à l'air de fonctionner mais très rapidement il y a un bug graphique qui rend l'affichage bizarre

  useEffect(() => {
    
    const intervalID = setInterval(() => {
      // setCount(count +1)
      // On, voit que ça passe à 1 et plus rien ne se passe
      //  C'est un pb de closure en JS
      // Cette fonction a un environnement lexical. C'est l'entièreté des variables qui sont accessibles par cette fonction
      // Donc au lieu de passer une const à la fonction on lui passe une fonction
      setCount(state => state + 1)
    }, 1000)

    // Ce qui est bien c'est de penser à clear les intervales quand on en utilise
    // Quand le composant n'est plus utilisé on n'a pas envie d'avoir un function qui tourne à l'infini
    // La cleanup function permet de nettoyer 
    // Cette fonction va être lancée quand mon composant se fait détruire, quand je ne l'affiche plus. Si j'ai un système d'onglet je n'ai plus envie d'afficher mon composant
    // Qu'est-ce que c'est que intervalID? c'est ce que retourne la méthode setInterval. Il faut donc la mettre dans une constante "intervalID" (ligne 15)
    return () => clearInterval(intervalID)
  }, [])

  return (
    <div>
      <h1>Valeur du compteur : {count}</h1>
    </div>
  )
}
