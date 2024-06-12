import Counter from "./pages/Counter/Counter.jsx"
import Fruity from "./pages/Fruity/Fruity.jsx"
// import FruityCart from "./pages/Fruity/FruityCart.jsx"

function App() {
  return (
    <div className="min-h-screen bg-slate-700 px-4">
      <div className="mx-auto max-w-3xl pt-10 pb-20">
        {/* 1. Counter App */}
        {/* <Counter/> */}

        {/* 2. Fruity App */}
        <Fruity />
        {/* <FruityCart /> */}

      </div>
    </div>
  )
}

export default App
