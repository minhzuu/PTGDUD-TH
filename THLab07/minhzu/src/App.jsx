import Home from "./components/Home";
import { NavProvider } from "./context/NavContext";

function App() {
  return (
    <NavProvider>
      <div>
        <Home />
      </div>
    </NavProvider>
  );
}

export default App;
