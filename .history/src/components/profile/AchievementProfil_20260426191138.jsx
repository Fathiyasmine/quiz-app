import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import SchoolIcon from "@mui/icons-material/School";
import LockIcon from "@mui/icons-material/Lock";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

const AchievementProfil = ({ stats }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    navigate("/");
  };

  // formater les points
  const formatPoints = (points) => {
    if (points >= 1000) return `${(points / 1000).toFixed(1)}k`;
    return points.toString();
  };

  return (
    <div className="bg-white -mt-10 rounded-t-3xl shadow-lg p-6 flex flex-col min-h-screen">
      <div className="flex justify-center mb-6">
        <div className="h-1 bg-blue-600 w-16 rounded-md" />
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 flex flex-col items-center gap-1">
          <span className="text-2xl font-extrabold text-blue-600">
            {stats.totalQuizzes} {/* ← dynamique */}
          </span>
          <span className="text-xs text-gray-500 font-medium uppercase">
            Quizzes
          </span>
        </div>
        <div className="bg-orange-50 border border-orange-100 rounded-2xl p-4 flex flex-col items-center gap-1">
          <span className="text-2xl font-extrabold text-orange-500">
            {formatPoints(stats.totalPoints)} {/* ← dynamique */}
          </span>
          <span className="text-xs text-gray-500 font-medium uppercase">
            Points
          </span>
        </div>
        <div className="bg-green-50 border border-green-100 rounded-2xl p-4 flex flex-col items-center gap-1">
          <span className="text-2xl font-extrabold text-green-600">
            {stats.avgScore}% {/* ← dynamique */}
          </span>
          <span className="text-xs text-gray-500 font-medium uppercase">
            Score
          </span>
        </div>
      </div>

      {/* Achievements Header */}
      <div className="flex items-center justify-between mb-5 mt-5">
        <h2 className="text-2xl font-bold text-gray-900">Achievements</h2>
        <button type="button" className="text-sm text-blue-600 font-medium">
          View All
        </button>
      </div>

      {/* Achievement Badges */}
      <div className="grid grid-cols-4 gap-2">
        <div className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-yellow-400 to-amber-500 shadow-md">
            <EmojiEventsIcon sx={{ color: "white", fontSize: 28 }} />
          </div>
          <span className="text-xs font-semibold text-center text-amber-700">
            Top 1%
          </span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-orange-500 to-red-400 shadow-md">
            <LocalFireDepartmentIcon sx={{ color: "white", fontSize: 28 }} />
          </div>
          <span className="text-xs font-semibold text-center text-orange-700">
            7 Day Streak
          </span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 shadow-md">
            <SchoolIcon sx={{ color: "white", fontSize: 28 }} />
          </div>
          <span className="text-xs font-semibold text-center text-blue-700">
            Graduate
          </span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div
            className={`w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br shadow-md
            ${
              stats.totalQuizzes >= 50
                ? "from-purple-500 to-purple-700" // débloqué si 50+ quiz
                : "from-slate-300 to-slate-400 opacity-50"
            }`}
          >
            <LockIcon sx={{ color: "white", fontSize: 28 }} />
          </div>
          <span
            className={`text-xs font-semibold text-center
            ${stats.totalQuizzes >= 50 ? "text-purple-600" : "text-slate-400"}`}
          >
            Elite
          </span>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-3 mt-8">
        <div
          className="bg-blue-50 border border-blue-100 rounded-2xl p-4 flex flex-col items-center gap-1 cursor-pointer"
          onClick={() => navigate("/histo")}
        >
          <button
            type="button"
            className="text-xs text-gray-500 font-medium uppercase"
          >
            Historique
          </button>
        </div>
        <div
          className="bg-orange-50 border border-orange-100 rounded-2xl p-4 flex flex-col items-center gap-1 cursor-pointer"
          onClick={() => navigate("/result")}
        >
          <button
            type="button"
            className="text-xs text-gray-500 font-medium uppercase"
          >
            Results
          </button>
        </div>
        <div
          className="bg-green-50 border border-green-100 rounded-2xl p-4 flex flex-col items-center gap-1 cursor-pointer"
          onClick={() => navigate("/home")}
        >
          <button
            type="button"
            className="text-xs text-gray-500 font-medium uppercase"
          >
            Start Quiz
          </button>
        </div>
        <div
          className="bg-red-50 border border-red-100 rounded-2xl p-4 flex flex-col items-center gap-1 cursor-pointer"
          onClick={handleLogout}
        >
          <button
            type="button"
            className="text-xs text-red-500 font-medium uppercase flex items-center gap-2"
          >
            <LogoutIcon sx={{ fontSize: 16 }} /> Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default AchievementProfil;
