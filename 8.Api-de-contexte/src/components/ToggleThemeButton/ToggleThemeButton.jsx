import sun from "../../assets/sun.svg"
import moon from "../../assets/moon.svg"

import "./ToggleThemeButton.css"

import { ThemeContext } from "../../Context/ThemeProvider"
import { useContext } from "react"

export default function ToggleTheme() {

  const {ToggleTheme, darkMode} = useContext(ThemeContext)

  return (
    <button
    className="toggle-theme-btn"
    onClick={ToggleTheme}
    >
        <span>Go {darkMode ? "Light" : "Dark"}</span>
        <img src={darkMode ? sun : moon} alt="toggle icon" />
    </button>
  )
}