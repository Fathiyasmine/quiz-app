import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import SchoolIcon from "@mui/icons-material/School";
import LockIcon from "@mui/icons-material/Lock";

const stats = [
  {
    id: 1,
    value: "48",
    label: "Quizzes",
    bg: "bg-blue-50",
    text: "text-blue-600",
    border: "border-blue-100",
  },
  {
    id: 2,
    value: "2.4k",
    label: "Points",
    bg: "bg-orange-50",
    text: "text-orange-500",
    border: "border-orange-100",
  },
  {
    id: 3,
    value: "85%",
    label: "Score",
    bg: "bg-green-50",
    text: "text-green-600",
    border: "border-green-100",
  },
];

const achievements = [
  {
    id: 1,
    label: "Top 1%",
    color: "from-yellow-400 to-amber-500",
    textColor: "text-amber-700",
    unlocked: true,
    Icon: EmojiEventsIcon,
  },
  {
    id: 2,
    label: "7 Day Streak",
    color: "from-orange-400 to-red-500",
    textColor: "text-orange-700",
    unlocked: true,
    Icon: LocalFireDepartmentIcon,
  },
  {
    id: 3,
    label: "Graduate",
    color: "from-blue-500 to-indigo-600",
    textColor: "text-blue-700",
    unlocked: true,
    Icon: SchoolIcon,
  },
  {
    id: 4,
    label: "Elite",
    color: "from-slate-300 to-slate-400",
    textColor: "text-slate-400",
    unlocked: false,
    Icon: LockIcon,
  },
];

const AchievementProfil = () => {
  return (
    <div className="bg-white -mt-10 rounded-t-3xl shadow-lg p-6 flex flex-col min-h-screen">
      {/* Handle bar */}
      <div className="flex justify-center mb-6">
        <div className="h-1 bg-blue-600 w-16 rounded-md" />
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className={`${stat.bg} border ${stat.border} rounded-2xl p-4 flex flex-col items-center gap-1`}
          >
            <span
              className={`text-2xl font-extrabold ${stat.text} leading-none`}
            >
              {stat.value}
            </span>
            <span className="text-xs text-gray-500 font-medium uppercase">
              {stat.label}
            </span>
          </div>
        ))}
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
        {achievements.map(({ id, label, color, textColor, unlocked }) => (
          <div key={id} className="flex flex-col items-center gap-2">
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br ${color} shadow-md ${!unlocked ? "opacity-50" : ""}`}
            >
              <Icon sx={{ color: "white", fontSize: 28 }} />
            </div>
            <span
              className={`text-xs font-semibold text-center leading-tight ${textColor}`}
            >
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementProfil;
