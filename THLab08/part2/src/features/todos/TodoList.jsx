import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo, removeTodo } from "./todosSlice";
import "./TodoList.css";

export function TodoList() {
  const [newTodo, setNewTodo] = useState("");
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo.trim()));
      setNewTodo("");
    }
  };

  return (
    <div className="todo-container">
      <h2>To-do List</h2>

      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task..."
          className="todo-input"
        />
        <button type="submit" className="add-button">
          Add
        </button>
      </form>

      <ul className="todo-list">
        {todos.length === 0 ? (
          <li className="empty-message">No tasks yet. Add one above!</li>
        ) : (
          todos.map((todo) => (
            <li key={todo.id} className="todo-item">
              <span
                className={`todo-text ${todo.completed ? "completed" : ""}`}
                onClick={() => dispatch(toggleTodo(todo.id))}
              >
                {todo.text}
              </span>
              <button
                className="delete-button"
                onClick={() => dispatch(removeTodo(todo.id))}
              >
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
