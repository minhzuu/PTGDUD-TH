import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../actions/counterActions"

function CounterRedux() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <>
      <h2>Redux Truyền Thống</h2>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </>
  );
}

export default CounterRedux;
