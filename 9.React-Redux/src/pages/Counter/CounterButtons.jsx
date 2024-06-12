import { useDispatch } from "react-redux";
import { increment, decrement, multiply, divide } from "../../features/counter";

export default function CounterButtons() {
  const dispatch = useDispatch();
  // console.log(increment());

  return (
    <div className="mb-4">
      <p className="text-slate-50 mb-2">Modify the Counter value</p>
      <button
        className="w-10 h-10 text-lg bg-slate-100 rounded text-slate-900 mr-2"
        onClick={() => dispatch(increment())}
      >
        +1
      </button>
      <button
        className="w-10 h-10 text-lg bg-slate-100 rounded text-slate-900 mr-2"
        onClick={() => dispatch(decrement())}
      >
        -1
      </button>
      <button
        className="w-10 h-10 text-lg bg-slate-100 rounded text-slate-900 mr-2"
        onClick={() => dispatch(multiply())}
      >
        x10
      </button>
      <button
        className="w-10 h-10 text-lg bg-slate-100 rounded text-slate-900 mr-2"
        onClick={() => dispatch(divide())}
      >
        /10
      </button>
    </div>
  );
}
