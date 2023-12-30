export default function Container() {

  // const isLogged = false
  const isLogged = true

  return (
    <div>
      <h1>Bienvenue sur BooksParadise</h1>

      {/* Pratique si on souhaite afficher quelque chose seulement si la valeur est "true" */}
      {isLogged &&  <button>Afficher votre collection</button>}

      {/* l'opérant && court circuite si l'une des valeurs est fausse (false, null, "")  */}
      {/* 44 && 99 retourne 99 (44 n'est pas falsy) */}
      {/* "" && 99 retourne '' */}
      {/* false && 44 retourne false */}
      {/* null && 77 retourne null */}
      {/* 99 && undefined  retourne undefined*/}

      {/* plus rapide que l'opération ternaire */}
      {isLogged ? <button>Afficher votre collection (ternaire method)</button> : ""}
    </div>
  )
}
