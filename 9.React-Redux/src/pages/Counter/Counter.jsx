// import { useSelector } from "react-redux"
import CounterResults from "./CounterResults"
import CounterButtons from "./CounterButtons"

export default function Counter() {
//   const counter = useSelector(state => state.counter)

  return (
    <div>
        <CounterButtons />
        <CounterResults />
    </div>
  )
}