import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import {store} from "./store.js"
import {Provider} from "react-redux"

ReactDOM.createRoot(document.getElementById("root")).render(
// ça ressemble à ce qu'on fait pour les API de contexte
<Provider store={store}>
    <App />
</Provider>

);
