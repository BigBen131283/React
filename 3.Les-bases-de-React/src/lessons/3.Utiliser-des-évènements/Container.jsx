export default function Container() {

  function handleClick(){
    return console.log("Good practice :) !")
  }
  // Si on en a besoin on peut rajouter l'objet d'événement "e" on le rajoute en paramètre

  function handleClickWithId(id){
    console.log(id);
  }

  function handleClickWithIdAndEventObject(id, e){
    console.log(e,id);
  }

  return (
    <div>
      <h1>Utiliser des évènements</h1>
      {/* On peut ajouter un évènement directement dans le JSX avec une fonction anonyme, mais ce n'est pas pratique s'il y a beaucoup de code */}
      <button onClick={() => console.log("clic !")}>Click</button>

      {/* Mauvaise pratique, peu maintenable */}
      <button onClick={() => {
        console.log("Clic :( !")
        console.log("Clic :( !")
        console.log("Clic :( !")
        console.log("Clic :( !")
        console.log("Clic :( !")
        console.log("Clic :( !")
      }}>Bad Paractice</button>

      {/* On lui préfère en général ceci */}
      <button onClick={handleClick}>Good Practice</button>


      {/* Attention, si on veut passer un argument, il faut obligatoirement utiliser une fonction anonyme */}
      <button onClick={() => handleClickWithId(464891)}>Avec un argument</button>

      {/* Si on veut l'objet d'évènement ET passer un ou des arguments, on code ceci */}
      <button onClick={e => handleClickWithIdAndEventObject(464891, e)}>Avec un argument et l'objet d'événement</button>

    </div>
  )
}
