import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import SchoolIcon from "@mui/icons-material/School";
import LockIcon from "@mui/icons-material/Lock";

const AchievementProfil = () => {
  return (
    <div className="bg-white -mt-10 rounded-t-3xl shadow-lg p-6 flex flex-col min-h-screen">
      <div className="flex justify-center mb-6">
        <div className="h-1 bg-blue-600 w-16 rounded-md" />
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 flex flex-col items-center gap-1">
          <span className="text-2xl font-extrabold text-blue-600">48</span>
          <span className="text-xs text-gray-500 font-medium uppercase">
            Quizzes
          </span>
        </div>
        <div className="bg-orange-50 border border-orange-100 rounded-2xl p-4 flex flex-col items-center gap-1">
          <span className="text-2xl font-extrabold text-orange-500">2.4k</span>
          <span className="text-xs text-gray-500 font-medium uppercase">
            Points
          </span>
        </div>
        <div className="bg-green-50 border border-green-100 rounded-2xl p-4 flex flex-col items-center gap-1">
          <span className="text-2xl font-extrabold text-green-600">85%</span>
          <span className="text-xs text-gray-500 font-medium uppercase">
            Score
          </span>
        </div>
      </div>

      {/* Achievements Header */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-2xl font-bold text-gray-900">Achievements</h2>
        <button type="button" className="text-sm text-blue-600 font-medium">
          View All
        </button>
      </div>

      {/* Achievement Badges */}
      <div className="grid grid-cols-4 gap-2">
        <div className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 rounded-full flex items-center justify-center bg-linear-to-br from-yellow-400 to-amber-500 shadow-md">
            <EmojiEventsIcon sx={{ color: "white", fontSize: 28 }} />
          </div>
          <span className="text-xs font-semibold text-center text-amber-700">
            Top 1%
          </span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 rounded-full flex items-center justify-center bg-liner-to-br from-orange-400 to-red-500 shadow-md">
            <LocalFireDepartmentIcon sx={{ color: "white", fontSize: 28 }} />
          </div>
          <span className="text-xs font-semibold text-center text-orange-700">
            7 Day Streak
          </span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 rounded-full flex items-center justify-center bg-linear-to-br from-blue-500 to-indigo-600 shadow-md">
            <SchoolIcon sx={{ color: "white", fontSize: 28 }} />
          </div>
          <span className="text-xs font-semibold text-center text-blue-700">
            Graduate
          </span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 rounded-full flex items-center justify-center bg-linear-to-br from-slate-300 to-slate-400 shadow-md opacity-50">
            <LockIcon sx={{ color: "white", fontSize: 28 }} />
          </div>
          <span className="text-xs font-semibold text-center text-slate-400">
            Elite
          </span>
        </div>
      </div>
    </div>
  );
};

export default AchievementProfil;
