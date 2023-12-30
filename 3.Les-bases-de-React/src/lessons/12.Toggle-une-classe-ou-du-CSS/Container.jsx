import { useState } from "react"
import "./Container.css"

export default function Container() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div>
      <h1>Toggle une classe</h1>
    

      <div className={`full-container ${darkMode && "dark-mode"}`}>
        <h1>Bienvenue sur NotesMania</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit est ut a quasi eum atque veritatis sed, aliquid voluptatum totam accusamus eos, quas tempore repellat animi amet consequuntur eveniet repudiandae esse quibusdam? Vel necessitatibus provident sequi officiis. Officia, possimus cum.</p>

        <button 
        onClick={() => setDarkMode(!darkMode)}
        >Activer le {darkMode ? "Light mode" : "Dark mode"}</button>
      </div>
    </div>
  )
}
