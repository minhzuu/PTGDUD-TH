import Counter from "./Part1/UseReducer(+,-)";
import { Provider } from "react-redux";
// import {store} from "./store";
import { store } from "./app/store";
import CounterRedux from "./Part1/Redux(+,-)";
import CounterReduxToolkit from "./Part1/Redux-Toolkit(+,-)";

function App() {
  return (
    <>
      {/* <Counter /> */}

      {/* <Provider store={store}>
        <CounterRedux />
      </Provider> */}

      <Provider store={store}>
        <CounterReduxToolkit />
      </Provider>
    </>
  );
}

export default App;
