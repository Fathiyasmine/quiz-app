// SettingsContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import translations from "../data/translations";

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  // Initialisation avec localStorage + suppression immédiate de la classe si nécessaire
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode") === "true";
    // Applique la classe DÈS LE DÉPART pour éviter tout décalage
    if (saved) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    return saved;
  });

  const [language, setLanguage] = useState(
    () => localStorage.getItem("language") || "fr",
  );

  // Synchronisation à chaque changement
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const t = (key) => translations[language]?.[key] || key;

  return (
    <SettingsContext.Provider
      value={{ darkMode, setDarkMode, language, setLanguage, t }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);
