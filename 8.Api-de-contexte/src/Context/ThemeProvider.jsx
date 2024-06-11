import { createContext, useState } from "react";

export const ThemeContext = createContext()

export default function ThemeProvider(props){
    
    const [darkMode, setDarkMode] = useState(false)

    function ToggleTheme(){
        setDarkMode(!darkMode)
    }

    if(darkMode) document.body.classList.add("dark")
    else document.body.classList.remove("dark")

    return (
        <ThemeContext.Provider value={{ToggleTheme, darkMode}}>
            {props.children}
        </ThemeContext.Provider>
    )
}