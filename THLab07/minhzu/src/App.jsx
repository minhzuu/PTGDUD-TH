import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import { NavProvider } from "./context/NavContext";

function App() {
  return (
    <Router>
      <NavProvider>
        <div>
          <Home />
        </div>
      </NavProvider>
    </Router>
  );
}

export default App;
