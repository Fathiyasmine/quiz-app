import { useSettings } from "../../context/SettingsContext";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import CloseIcon from "@mui/icons-material/Close";

const SettingsPanel = ({ onClose }) => {
  const { darkMode, setDarkMode, language, setLanguage, t } = useSettings();

  return (
    <div
      className="fixed inset-0 z-50 flex items-end bg-black/40"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-900 w-full rounded-t-3xl p-6 pb-10 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Handle */}
        <div className="flex justify-center mb-5">
          <div className="h-1 w-10 bg-gray-200 dark:bg-gray-700 rounded-full" />
        </div>

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            {t("settings")}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Dark mode */}
        <div className="mb-6">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
            {t("appearance")}
          </p>
          <div className="flex justify-between items-center bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl p-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-900 flex items-center justify-center">
                {darkMode ? (
                  <DarkModeIcon sx={{ fontSize: 18, color: "#60a5fa" }} />
                ) : (
                  <LightModeIcon sx={{ fontSize: 18, color: "#f59e0b" }} />
                )}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800 dark:text-white">
                  {t("darkMode")}
                </p>
                <p className="text-xs text-gray-400">
                  {darkMode ? t("darkModeOn") : t("darkModeOff")}
                </p>
              </div>
            </div>
            {/* Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`relative w-11 h-6 rounded-full transition-colors duration-200 ${
                darkMode ? "bg-blue-500" : "bg-gray-300"
              }`}
            >
              <span
                className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${
                  darkMode ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Langue */}
        <div className="mb-8">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
            {t("language")}
          </p>
          <div className="grid grid-cols-2 gap-3">
            {[
              { code: "fr", flag: "🇫🇷", label: "Français" },
              { code: "en", flag: "🇬🇧", label: "English" },
            ].map(({ code, flag, label }) => (
              <button
                key={code}
                onClick={() => setLanguage(code)}
                className={`flex flex-col items-center gap-1 py-3 rounded-2xl border transition ${
                  language === code
                    ? "border-blue-500 bg-blue-50 dark:bg-blue-900"
                    : "border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
                }`}
              >
                <span className="text-2xl">{flag}</span>
                <span
                  className={`text-sm font-medium ${
                    language === code
                      ? "text-blue-600 dark:text-blue-300"
                      : "text-gray-600 dark:text-gray-300"
                  }`}
                >
                  {label}
                </span>
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-2xl transition"
        >
          {t("save")}
        </button>
      </div>
    </div>
  );
};

export default SettingsPanel;
