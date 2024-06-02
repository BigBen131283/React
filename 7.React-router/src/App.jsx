// ligne de commande npm i react-router-dom
// il faut ensuite importer les éléments suivants : 

import {BrowserRouter, Routes, Route} from "react-router-dom"

// puis il faut créer le router, en général dans le composant racine. 
// On créé le <BrowserRouter> qui va prendre en compte la localisation (location) dans l'URL, l'adresse qui va changer etc... et va le fournir à ses enfants =>
// => notamment aux <Routes /> qui contiennent toutes les <Route />

import Home from "./components/Home"
import Contact from "./components/Contact"
import UserProfile from "./components/UserProfile"
import NotFound from "./components/NotFound"
import Navbar from "./components/Navbar"
import Analytics from "./pages/Analytics/Analytics"
import Development from "./pages/Analytics/Development"
import CyberSecurity from "./pages/Analytics/CyberSecurity"
import UIUX from "./pages/Analytics/UIUX"


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* En plaçant la navbar ici, on y a accès dans toute l'application */}
        <Routes>
          <Route path="/" element={<Home />}/>
          {/* En fonction du path, on montre un élément */}
          {/* C'est comme dans le cours 5.React-dans-le-détail\src\lessons\10.Comprendre-props-children */}
          <Route path="/contact" element={<Contact />}/>
          <Route path="/profile/:id" element={<UserProfile />}/>
          <Route path="/analytics" element={<Analytics />}>
            <Route path="/analytics/development" element={<Development />}/>
            <Route path="/analytics/cybersecurity" element={<CyberSecurity />}/>
            <Route path="/analytics/uiux" element={<UIUX />}/>
          </Route>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
