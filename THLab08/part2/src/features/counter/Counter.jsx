import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";
import "./Counter.css";

export function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="counter">
      <h2>Counter App</h2>
      <div className="counter-value">{count}</div>
      <div className="buttons">
        <button
          className="button decrement"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <button
          className="button increment"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
    </div>
  );
}
