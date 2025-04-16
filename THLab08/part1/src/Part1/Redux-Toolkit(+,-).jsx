import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../features/counterSlice";

function CounterReduxToolkit() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <h2>Redux Toolkit</h2>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </>
  );
}

export default CounterReduxToolkit;
