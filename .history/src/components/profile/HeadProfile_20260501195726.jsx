import { useState } from "react";
import Person2SharpIcon from "@mui/icons-material/Person2Sharp";
import SettingsIcon from "@mui/icons-material/Settings";
import { useSettings } from "../../context/SettingsContext";
import SettingsPanel from "./SettingsPanel";

const HeadProfile = ({ stats }) => {
  const { t } = useSettings();
  const [showSettings, setShowSettings] = useState(false);
  const name = localStorage.getItem("name") || "User";

  const getLevel = (totalQuizzes) => {
    if (totalQuizzes >= 50) return { level: 10, title: "Master" };
    if (totalQuizzes >= 30) return { level: 7, title: "Expert" };
    if (totalQuizzes >= 15) return { level: 5, title: "Advanced" };
    if (totalQuizzes >= 5) return { level: 3, title: "Pro Learner" };
    return { level: 1, title: "Beginner" };
  };

  const { level, title } = getLevel(stats.totalQuizzes);
  console.log("showSettings value:", showSettings); // Pour déboguer

  return (
    <>
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-b-3xl pb-20">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">{t("myProfile")}</h2>
          <button
            onClick={() => {
              alert("Button clicked!");
              setShowSettings(true);
            }}
            className="cursor-pointer hover:opacity-80 transition"
          >
            <SettingsIcon />
          </button>
        </div>
        <div className="flex justify-center items-center mt-4">
          <div className="flex justify-center items-center bg-neutral-200 rounded-3xl w-20 h-20">
            <Person2SharpIcon sx={{ fontSize: 48, color: "#4A90E2" }} />
          </div>
        </div>
        <div className="flex justify-center flex-col items-center pt-6">
          <h1 className="text-2xl font-bold mb-4">{name}</h1>
          <h3 className="text-md mb-1 rounded-2xl bg-gray-50 px-3 py-1 text-gray-600">
            Level {level} | {title}
          </h3>
        </div>
      </div>

      {/* Panel settings - affiché conditionnellement */}
      {showSettings && <SettingsPanel onClose={() => setShowSettings(false)} />}
    </>
  );
};

export default HeadProfile;
