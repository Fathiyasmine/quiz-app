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

  const formatPoints = (points) => {
    if (points >= 1000) return `${(points / 1000).toFixed(1)}k`;
    return points.toString();
  };

  return (
    <div className="bg-white dark:bg-gray-800 md:rounded-3xl shadow-sm p-6 md:p-10">
      {/* Barre déco — cachée sur desktop */}
      <div className="flex justify-center mb-6 md:hidden">
        <div className="h-1 bg-blue-600 w-16 rounded-md" />
      </div>

      {/* Stats — 3 cols mobile, 6 cols desktop */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-10">
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 flex flex-col items-center gap-1 md:col-span-2">
          <span className="text-2xl font-extrabold text-blue-600">
            {stats.totalQuizzes}
          </span>
          <span className="text-xs text-gray-500 font-medium uppercase">
            Quizzes
          </span>
        </div>
        <div className="bg-orange-50 border border-orange-100 rounded-2xl p-4 flex flex-col items-center gap-1 md:col-span-2">
          <span className="text-2xl font-extrabold text-orange-500">
            {formatPoints(stats.totalPoints)}
          </span>
          <span className="text-xs text-gray-500 font-medium uppercase">
            Points
          </span>
        </div>
        <div className="bg-green-50 border border-green-100 rounded-2xl p-4 flex flex-col items-center gap-1 md:col-span-2">
          <span className="text-2xl font-extrabold text-green-600">
            {stats.avgScore}%
          </span>
          <span className="text-xs text-gray-500 font-medium uppercase">
            Score
          </span>
        </div>
      </div>

      {/* Achievements + Badges — layout 2 col sur desktop */}
      <div className="md:grid md:grid-cols-2 md:gap-10">
        {/* Badges */}
        <div>
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-2xl font-bold text-gray-900">Achievements</h2>
            <button type="button" className="text-sm text-blue-600 font-medium">
              View All
            </button>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[
              {
                icon: <EmojiEventsIcon sx={{ color: "white", fontSize: 28 }} />,
                gradient: "from-yellow-400 to-amber-500",
                label: "Top 1%",
                labelColor: "text-amber-700",
                unlocked: true,
              },
              {
                icon: (
                  <LocalFireDepartmentIcon
                    sx={{ color: "white", fontSize: 28 }}
                  />
                ),
                gradient: "from-orange-500 to-red-400",
                label: "7 Day Streak",
                labelColor: "text-orange-700",
                unlocked: true,
              },
              {
                icon: <SchoolIcon sx={{ color: "white", fontSize: 28 }} />,
                gradient: "from-blue-500 to-indigo-600",
                label: "Graduate",
                labelColor: "text-blue-700",
                unlocked: true,
              },
              {
                icon: <LockIcon sx={{ color: "white", fontSize: 28 }} />,
                gradient:
                  stats.totalQuizzes >= 50
                    ? "from-purple-500 to-purple-700"
                    : "from-slate-300 to-slate-400 opacity-50",
                label: "Elite",
                labelColor:
                  stats.totalQuizzes >= 50
                    ? "text-purple-600"
                    : "text-slate-400",
                unlocked: stats.totalQuizzes >= 50,
              },
            ].map((badge, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br shadow-md ${badge.gradient}`}
                >
                  {badge.icon}
                </div>
                <span
                  className={`text-xs font-semibold text-center ${badge.labelColor}`}
                >
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Actions</h2>
          <div className="grid grid-cols-1 gap-3">
            <div
              className="bg-blue-50 border border-blue-100 rounded-2xl p-4 flex justify-center cursor-pointer hover:bg-blue-100 transition"
              onClick={() => navigate("/histo")}
            >
              <span className="text-xs text-gray-500 font-medium uppercase">
                Historique
              </span>
            </div>
            <div
              className="bg-green-50 border border-green-100 rounded-2xl p-4 flex justify-center cursor-pointer hover:bg-green-100 transition"
              onClick={() => navigate("/home")}
            >
              <span className="text-xs text-gray-500  dark:text-gray-800 font-medium uppercase">
                Start Quiz
              </span>
            </div>
            <div
              className="bg-red-50 border border-red-100 rounded-2xl p-4 flex justify-center cursor-pointer hover:bg-red-100 transition"
              onClick={handleLogout}
            >
              <span className="text-xs text-red-500 font-medium uppercase flex items-center gap-2">
                <LogoutIcon sx={{ fontSize: 16 }} /> Logout
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementProfil;
