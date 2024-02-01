import { useMemo, useState } from "react"

export default function Calculation() {
  const [temperature, setTemperature] = useState("")

  function celsiusToFarenheit(degree) {
    return degree ? degree * 1.8 +32 : "Entrez une valeur"
  }

//   const expensiveCalculation = celsiusToFarenheit(temperature)

  const expensiveCalculation = useMemo(() => {
    console.log("Render depuis useMemo")
    return celsiusToFarenheit(temperature)
  }, [temperature])
  console.log("Render");

  return (
    <div>
        <input 
        type="number" 
        value={temperature}
        onChange={e => setTemperature(e.target.value)}
        />
        <h1>Valeur de {temperature} degré(s) Celsius en degré(s) Farenheit : {expensiveCalculation}</h1>
    </div>
  )
}