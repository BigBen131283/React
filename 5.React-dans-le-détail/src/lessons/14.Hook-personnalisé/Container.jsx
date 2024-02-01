import useAPICall from "./hooks/useAPICalls"
import spinner from "./spinner.svg"

export default function Container() {
  const {catData, error, loading} = useAPICall()

  let content;
  if((loading && !error)) {
    content = <img src={spinner} alt="icône de chargement" />
  }
  else if(error) {
    content = <p>Une erreur est survenue...</p>
  }
  else if(catData) {
    content = <img src={catData[0].url} alt="Photo d'un chat" />
  }
    
  return (
    <div>
      <h1>Photo de chats 🐾</h1>
      {content}

      {/* {(loading && !error) && <img src={spinner} alt="icône de chargement" />}

      {error && <p>Une erreur est survenue...</p>}

      {catData && <img src={catData[0].url} alt="Photo d'un chat" />} */}
    </div>
  )
}

//  Un hook personnalisé c'est l'extraction de fonctionnalités react d'un composant en un autre fichier qu'on peut réutiliser à plusieurs endroits
//  ça ne retourne pas du jsx, sinon c'est un composant
//  ça retourne du state, du contenu d'API, etc... 