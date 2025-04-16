import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "./themeSlice";
import "./ThemeToggle.css";

export function ThemeToggle() {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  return (
    <div className="theme-toggle">
      <button
        className={`toggle-button ${theme}`}
        onClick={() => dispatch(toggleTheme())}
      >
        {theme === "light" ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </div>
  );
}
