import { memo } from "react";

export default memo(function Card({txt, customLog}) {
    console.log("Render");
    customLog()

    return (
    <div>
        <p>Carte</p>
        <p>{txt}</p>
    </div>
  )
})

// memo permet de ne pas mettre à jour le composant si on ne le change pas. Ici le bouton incrémenter met à jour le count. La props txt, elle, ne change pas. 
// "Render" s'affiche à la création du composant et ne se réaffiche pas
// Si on passe "count" comme props, le composant est mis à jour, render est restitué à chaque fois qu'on clique
// Est-ce qu'il faut entourer tout nos composants de "memo"? NON!
// Ce ne doit être utilisé que pour optimiser les performances

// Après avoir ajouté customLog, si on incrémente, on a des mises à jour, malgré le memo
// Pourtant txt ne change pas et customLog retourne toujours la même chose
// txt est une valeur primitive qui ne change pas
// customLog est une valeur de référence. A chaque fois que le Container est appelé c'est une nouvelle fonction qui est appelée. Entre deux appels, elle n'a plus la même référence. Le composant se met donc à jour. 

// Il existe un hook useCallback qui permet de mémoriser la fonction et de ne pas la rappeler s'il n'y a pas de mise à jour

