import { useSettings } from "../../context/SettingsContext";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import TranslateIcon from "@mui/icons-material/Translate";
import CloseIcon from "@mui/icons-material/Close";

const SettingsPanel = ({ onClose }) => {
  const { darkMode, setDarkMode, language, setLanguage, t } = useSettings();

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        onClick={onClose}
      />

      {/* Panel — slide depuis le bas sur mobile, depuis la droite sur desktop */}
      <div className="fixed bottom-0 left-0 right-0 md:bottom-auto md:top-0 md:right-0 md:left-auto md:h-full md:w-80 z-50 bg-white dark:bg-gray-900 rounded-t-3xl md:rounded-none md:rounded-l-3xl shadow-2xl p-6 flex flex-col gap-6 animate-slide-up">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">
            {t("settings")}
          </h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-300 hover:bg-gray-200 transition cursor-pointer"
          >
            <CloseIcon fontSize="small" />
          </button>
        </div>

        {/* Section Apparence */}
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase mb-3">
            {t("appearance")}
          </p>

          {/* Dark mode toggle */}
          <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-800 rounded-2xl p-4">
            <div className="flex items-center gap-3">
              {darkMode ? (
                <DarkModeIcon sx={{ color: "#818cf8" }} />
              ) : (
                <LightModeIcon sx={{ color: "#f59e0b" }} />
              )}
              <span className="font-medium text-gray-700 dark:text-gray-200">
                {t("darkMode")}
              </span>
            </div>

            {/* Toggle switch */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`relative w-12 h-6 rounded-full transition-colors cursor-pointer ${
                darkMode ? "bg-blue-500" : "bg-gray-300"
              }`}
            >
              <span
                className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                  darkMode ? "translate-x-6" : "translate-x-0.5"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Section Langue */}
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase mb-3">
            {t("preferences")}
          </p>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-4">
            <div className="flex items-center gap-3 mb-3">
              <TranslateIcon sx={{ color: "#4A90E2" }} />
              <span className="font-medium text-gray-700 dark:text-gray-200">
                {t("language")}
              </span>
            </div>

            {/* Boutons langue */}
            <div className="grid grid-cols-2 gap-2">
              {[
                { code: "fr", label: "🇫🇷  Français" },
                { code: "en", label: "🇬🇧  English" },
              ].map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`py-2 px-4 rounded-xl font-semibold text-sm transition cursor-pointer ${
                    language === lang.code
                      ? "bg-blue-500 text-white"
                      : "bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsPanel;
