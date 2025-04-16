import React, { useReducer } from "react";
const initialState = { count: 0 };
function Reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
}
function Counter() {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <div>
      <div>
        <p>Count : {state.count}</p>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          INCREMENT
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          DECREMENT
        </button>
      </div>
    </div>
  );
}

export default Counter;
