import { createContext, useContext, useEffect, useState } from "react";
import translations from "../data/translations";

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("darkMode") === "true",
  );
  const [language, setLanguage] = useState(
    () => localStorage.getItem("language") || "fr",
  );

  // Applique/retire la classe dark sur <html>
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

  // Fonction de traduction : t("home") → "Accueil" ou "Home"
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
