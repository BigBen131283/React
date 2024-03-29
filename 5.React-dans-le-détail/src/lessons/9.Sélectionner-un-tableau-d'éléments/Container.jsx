import { useState, useRef, useEffect } from "react"
import DynamicRefSelection from "./DynamicRefSelection";
import StaticRefSelection from "./StaticRefSelection";


export default function Container() {
  
  const inputRef = useRef([])

  function addInputRef(el){
    if(el && !inputRef.current.includes(el)){
      inputRef.current.push(el)
    }
    console.log(inputRef);
  }
  
  return (
    <>
      <h1>Sélectionner un tableau d'éléments</h1>
      
      {/* <StaticRefSelection /> */}
      <DynamicRefSelection />

    </>
  )
} 