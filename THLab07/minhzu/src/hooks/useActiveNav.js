import { useNav } from "../context/NavContext";

/**
 * A custom hook that provides information about the active navigation item
 * and functionality to change it.
 *
 * @returns {Object} An object containing:
 *   - activeNavItem: The currently active navigation item
 *   - setActive: Function to set the active navigation item
 *   - isActive: Function to check if a given navigation item is active
 */
export function useActiveNav() {
  const { activeNavItem, setActive } = useNav();

  // Function to check if a given navigation item is active
  const isActive = (itemName) => activeNavItem === itemName;

  return {
    activeNavItem,
    setActive,
    isActive,
  };
}
