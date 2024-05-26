import ModalButton from "./lessons/1.Créer-une-fenêtre-modale-avec-un-portal/ModalButton"
import Tabs from "./lessons/2.Coder-des-onglets/Tabs"
import Navbar from "./lessons/3.Coder-une-navbar/Navbar"
import Validation from "./lessons/4.Validation/Validation"

function App() {

  return (
    <div className="min-h-screen bg-slate-700 pt-10">
      <Navbar />
      <ModalButton />
      <Validation />
      <Tabs />
    </div>
  )
}

export default App
