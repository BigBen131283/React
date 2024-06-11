import "./Content.css"

import { useContext } from "react"
import { ThemeContext } from "../../Context/ThemeProvider"

export default function Content() {

    const {darkMode} = useContext(ThemeContext)

  return (
    <div className="container">
        <h1>You are in {darkMode ? "Dark" : "Light"} mode.</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo id impedit doloremque, unde aliquid quo nesciunt officia voluptatem, tempore deleniti sint eius obcaecati tenetur accusantium sequi, rem atque dolores. Quam illo quis quisquam animi voluptas magni distinctio quos! Suscipit, quo labore doloremque nobis at sed exercitationem. Illo ullam voluptate, fugiat assumenda unde eaque aliquid odio, sequi, non obcaecati iste praesentium delectus ipsa laboriosam ducimus vel libero molestias inventore ea porro necessitatibus! Excepturi libero aspernatur dicta voluptatum facilis voluptatem quam optio possimus harum molestias modi ipsum obcaecati culpa delectus expedita placeat, enim magni maxime id. Voluptas aperiam sint eum. Enim, tenetur.</p>
    </div>
  )
}