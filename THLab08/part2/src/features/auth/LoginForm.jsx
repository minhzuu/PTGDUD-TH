import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./authSlice";
import "./Auth.css";

export function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Simple validation
    if (!username.trim() || !password.trim()) {
      setError("Please enter both username and password");
      return;
    }

    // In a real app, you would make an API call here
    // This is just a simple simulation
    if (password.length < 4) {
      setError("Password must be at least 4 characters");
      return;
    }

    // Simulate successful login
    dispatch(
      login({
        id: 1,
        username,
        name: username, // In a real app, these would come from the API
        email: `${username}@example.com`,
      })
    );
  };

  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        {error && <div className="auth-error">{error}</div>}

        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>

        <button type="submit" className="auth-button">
          Login
        </button>
      </form>
    </div>
  );
}
