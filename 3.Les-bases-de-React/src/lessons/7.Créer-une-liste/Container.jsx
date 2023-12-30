export default function Container() {
  
  const data = [
    {
      id: 1,
      name: "Marie"
    },
    {
      id: 2,
      name: "Paul"
    },
    {
      id: 3,
      name: "Louise"
    }
  ]
  
  return (
    <div>
      <h1>Créer une liste d'éléments avec React</h1>
      <ul>
        {data.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
        {/* On utilise l'attribut key pour identifier chaque élément de la liste. Dans le cas où la liste est fixe et non modifiable on peut utiliser le paramètre "index" de la fonction map */}
        {data.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
        {/* Sans l'attribut key on a une erreur dans la console */}

        {/* Equivaut à : */}
          {/* {[
              <li>{data[0].name}</li>,
              <li>{data[1].name}</li>,
              <li>{data[2].name}</li>
          ]} */}
        
      </ul>
    </div>
  )
}