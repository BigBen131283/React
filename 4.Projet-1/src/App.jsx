import { useState } from "react"
import { nanoid } from "nanoid" // npm i nanoid
import ListItem from "./components/ListItem";

function App() {
  
  const [toDoList, setToDoList] = useState([
    // {
    //   id: nanoid(8), // on créé un id et on appelle la méthode nanoid(), on précise en paramètre la longuer de l'id souhaitée
    //   content: "item1"
    // },
    // {
    //   id: nanoid(8),
    //   content: "item2"
    // },
    // {
    //   id: nanoid(8),
    //   content: "item3"
    // }
  ])

  console.log(toDoList);

  const [todo, setTodo] = useState("")

  const [showValidation, setShowValidation] = useState(false)

  function deleteToDo(id) {
    setToDoList(toDoList.filter(todo => todo.id !== id))
  }

  function handleSubmit(e) {
    e.preventDefault()

    if(todo === ""){
      setShowValidation(true)
      return
    }

    setToDoList([...toDoList, {id: nanoid(8), content: todo}]) // ici on créé un nouveau tableau, il faut que le state soit nouveau
    setTodo("") // reset la valeur de todo pour vider le champ de saisie
    setShowValidation(false) // s'assure que le message de validation ne s'affiche pas en cas de succès
  }
  // console.log(toDoList);
  
  return (
    <div className="h-screen">
      <div className="pt-20 px-6 mx-auto max-w-4xl">
        <h1 className="text-3xl text-slate-100 mb-4">La To-do liste</h1>

        <form onSubmit={handleSubmit} className="mb-10">
          <label htmlFor="todo-item"
          className='text-slate-50'>Ajouter une chose à faire</label>
          <input 
          value={todo}
          onChange={e => setTodo(e.target.value)}
          type="text" className="mt-1 block w-full rounded"/>
          {showValidation && (
            <p className=" text-red-400">Ajouter d'abord une chose à faire !</p>
          )}
          <button className=" mt-4 py-2 px-2 bg-slate-50 rounded min-w-[115px]">Ajouter</button>
        </form>

        <ul>
          {/* Short circuit, utilisé pour afficher par exemple un loader */}
          {/* Si la todolist est vide :  */}
          {toDoList.length === 0 && (
            <li className=" text-slate-50 text-sm">Rien à faire en ce moment...</li>
          )}
          {/* Si la todolist contient au moins un élément */}
          {toDoList.length > 0 && 
          toDoList.map(item => (
            <ListItem key={item.id} itemData={item} deleteToDo={deleteToDo}/>
          ))}
        </ul>

      </div>
    </div>
  )
}

export default App
