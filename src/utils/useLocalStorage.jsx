import { useEffect, useState } from "react";

/**
 * Custom hook: useLocalStorage
 *
 * ✅ Guarda y sincroniza el estado con localStorage.
 * ⚙️ Previene errores de parsing y soporta cambios de clave dinámica.
 */

export const useLocalStorage = (key, initialValue) => {
  const [history, setHistory] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log("Error parsing Localstorage:", error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(history));
    } catch (error) {
      console.log("Error saving localStorage key:", error);
    }
  }, [key, history]);

  return [history, setHistory];
};
