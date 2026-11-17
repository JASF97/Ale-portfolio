import { useEffect, useState, type ReactNode } from "react";
import { ThemeContext, type Theme } from "./useTheme";

const STORAGE_KEY = "theme";

// El script en línea de index.html ya dejó el tema en <html data-theme>;
// se lee de ahí para que React arranque con el mismo valor (sin parpadeo).
const getInitialTheme = (): Theme => {
  const fromDocument = document.documentElement.getAttribute("data-theme");
  if (fromDocument === "dark" || fromDocument === "light") return fromDocument;

  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "dark" || saved === "light") return saved;
  } catch {
    // localStorage puede no estar disponible (modo privado)
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // sin almacenamiento: el tema solo vive en esta visita
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
