import { useLocation } from "react-router-dom"

export default function Contact() {
    const data = useLocation()
    console.log(data);

  return (
    <div>
        <p
         className="text-4x1 font-semibold text-center pt-10"
        >Contact us.</p>
        <h2
         className="text-5x1 font-bold text-center pt-10"
        >{data.state.txt}</h2>
    </div>
  )
}