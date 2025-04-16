import { useEffect } from "react";
import { useSelector } from "react-redux";

export function ThemeProvider({ children }) {
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    // Remove previous theme class if any
    document.body.classList.remove("light-theme", "dark-theme");
    // Add current theme class
    document.body.classList.add(`${theme}-theme`);
  }, [theme]);

  return children;
}
