import "./Container.css"

export default function Container() {

  const bgColor = "#333"

  return (
    <div>
      <h1 style={{color: "crimson", backgroundColor: "#333"}}>Utiliser du CSS</h1>
      <h1 style={{color: "crimson", backgroundColor: bgColor}}>Utiliser du CSS</h1>

      <p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, facilis!</p>
    </div>
  )
}
