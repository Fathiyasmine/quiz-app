import Person2SharpIcon from "@mui/icons-material/Person2Sharp";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";

const HeadProfile = ({ stats }) => {
  const navigate = useNavigate();
  const name = localStorage.getItem("name") || "User";

  // calcul du level selon nombre de quiz
  const getLevel = (totalQuizzes) => {
    if (totalQuizzes >= 50) return { level: 10, title: "Master" };
    if (totalQuizzes >= 30) return { level: 7, title: "Expert" };
    if (totalQuizzes >= 15) return { level: 5, title: "Advanced" };
    if (totalQuizzes >= 5) return { level: 3, title: "Pro Learner" };
    return { level: 1, title: "Beginner" };
  };

  const { level, title } = getLevel(stats.totalQuizzes);

  return (
    <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-b-3xl pb-20">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold mb-4 font-ubuntu flex align-center gap-2">
          My Profile
        </h2>
        <SettingsIcon className="cursor-pointer" />
      </div>
      <div className="flex justify-center items-center mt-4">
        <div className="flex justify-center items-center bg-neutral-200 rounded-3xl w-20 h-20">
          <Person2SharpIcon sx={{ fontSize: 48, color: "#4A90E2" }} />
        </div>
      </div>
      <div className="flex justify-center flex-col items-center pt-6">
        <h1 className="text-2xl font-bold mb-4 font-ubuntu">{name}</h1>
        <h3 className="text-md mb-1 font-dm rounded-2xl bg-gray-50 px-3 py-1 text-gray-600">
          Level {level} | {title} {/* ← dynamique */}
        </h3>
      </div>
    </div>
  );
};

export default HeadProfile;
