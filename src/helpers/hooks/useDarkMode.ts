import { useEffect } from "react";
import { useLocalStorageState } from ".";

export function useDarkMode(initialValue = false): [boolean, () => void] {
  const [darkMode, setDarkMode] = useLocalStorageState("theme", initialValue);
  const toggleDarkMode = (): void => setDarkMode(!darkMode);

  useEffect(() => {
    if (darkMode || window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const colorSchemeQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const onOsThemeChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };

    colorSchemeQuery.addEventListener("change", onOsThemeChange);
    return () => {
      colorSchemeQuery.removeEventListener("change", onOsThemeChange);
    };
  }, []);

  return [darkMode, toggleDarkMode];
}
