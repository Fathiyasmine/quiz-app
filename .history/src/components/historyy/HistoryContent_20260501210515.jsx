import { useState } from "react";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import ScienceIcon from "@mui/icons-material/Science";
import SchoolIcon from "@mui/icons-material/School";
import QuizIcon from "@mui/icons-material/Quiz";
import { useSettings } from "../../context/SettingsContext";

const HistoryContent = ({ results }) => {
  const [active, setActive] = useState("All Topics");
  const { t, darkMode } = useSettings();

  const tabs = ["All Topics"];

  // convertir secondes en "X mint"
  const formatDuration = (seconds) => {
    const m = Math.floor(seconds / 60);
    return `${m} mint`;
  };

  // formater la date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="dark:bg-gray-800 -mt-10 rounded-t-3xl shadow-lg p-6 flex flex-col min-h-screen">
      {/* tabs */}
      <div className="flex flex-row gap-3 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-4 py-2 rounded-full border-none cursor-pointer font-semibold text-sm transition-all
              ${
                active === tab
                  ? "dark:bg-gradient-to-r from-blue-400 to-blue-300 text-white shadow-md shadow-blue-200"
                  : "bg-slate-100 text-slate-500"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* liste */}
      {results.length === 0 ? (
        <div className="flex flex-col items-center justify-center flex-1 text-gray-400 gap-2">
          <QuizIcon sx={{ fontSize: 48, color: "#cbd5e1" }} />
          <p className="text-sm font-medium">
            {t("Aucun quiz complété pour l'instant")}
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {results.map((item, i) => {
            const score = item.score;
            const total = item.total;
            const percentage = Math.round((score / total) * 100);
            const passed = percentage >= 50;

            return (
              <div
                key={i}
                className="flex items-center gap-4 dark:bg-slate-50 rounded-2xl p-3 border border-slate-200"
              >
                {/* icone */}
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-md shrink-0 bg-gradient-to-br from-blue-400 to-blue-500">
                  <QuizIcon sx={{ color: "white", fontSize: 26 }} />
                </div>

                {/* info */}
                <div className="flex-1 min-w-0">
                  <p className="m-0 font-bold text-gray-900 text-sm">
                    {item.quiz?.title || "Quiz"} {/* ← titre depuis populate */}
                  </p>
                  <p className="mt-1 text-xs text-gray-400 font-medium">
                    {formatDate(item.createdAt)} ·{" "}
                    {formatDuration(item.timeTaken)}
                  </p>
                </div>

                {/* score */}
                <div className="text-right shrink-0">
                  <p className="m-0 font-bold text-sm text-gray-900">
                    {score} / {total} {/* ← score réel */}
                  </p>
                  <span
                    className={`inline-block mt-1 text-xs font-semibold px-3 py-0.5 rounded-full
                    ${passed ? "dark:bg-green-100 text-green-600" : "dark:bg-red-100 text-red-600"}`}
                  >
                    {passed ? "Passed" : "Failed"}{" "}
                    {/* ← calculé automatiquement */}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default HistoryContent;
