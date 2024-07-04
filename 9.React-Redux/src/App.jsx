import Counter from "./pages/Counter/Counter.jsx"
import Fruity from "./pages/Fruity/Fruity.jsx"
// import FruityCart from "./pages/Fruity/FruityCart.jsx"
import Users from "./pages/Users/Users.jsx"
import Chrono from "./pages/Chrono/Chrono.jsx"

function App() {
  return (
    <div className="min-h-screen bg-slate-700 px-4">
      <div className="mx-auto max-w-3xl pt-10 pb-20">
        {/* 1. Counter App */}
        {/* <Counter/> */}

        {/* 2. Fruity App */}
        {/* <Fruity /> */}
        {/* <FruityCart /> */}

        {/* 3. Appeler une API avec le thunk middleware */}
        {/* <Users /> */}

        {/* 4. Créer un chrono */}
        <Chrono />

      </div>
    </div>
  )
}

export default App
