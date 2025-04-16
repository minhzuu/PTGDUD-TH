import { Counter } from "./features/counter/Counter";
import { TodoList } from "./features/todos/TodoList";
import { ThemeToggle } from "./features/theme/ThemeToggle";
import { ShoppingCart } from "./features/cart/ShoppingCart";
import { Auth } from "./features/auth/Auth";
import "./App.css";

function App() {
  return (
    <div className="app">
      <ThemeToggle />
      <h1>Redux Toolkit Examples</h1>

      <div className="app-section">
        <h2>Basic Examples</h2>
        <div className="app-container">
          <Counter />
          <TodoList />
        </div>
      </div>

      <div className="app-section">
        <h2>Auth Example</h2>
        <Auth />
      </div>

      <div className="app-section">
        <ShoppingCart />
      </div>
    </div>
  );
}

export default App;
