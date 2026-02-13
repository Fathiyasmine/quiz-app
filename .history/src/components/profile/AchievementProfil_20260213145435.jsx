import { useState } from "react";

const AchievementProfil = () => {
  const [hoveredBadge, setHoveredBadge] = useState(null);

  const stats = [
    {
      id: 1,
      value: "48",
      label: "Quizzes",
      gradient: "from-blue-500 to-blue-600",
      bg: "bg-blue-50",
      text: "text-blue-600",
      border: "border-blue-100",
    },
    {
      id: 2,
      value: "2.4k",
      label: "Points",

      gradient: "from-orange-400 to-orange-500",
      bg: "bg-orange-50",
      text: "text-orange-500",
      border: "border-orange-100",
    },
    {
      id: 3,
      value: "85%",
      label: "Score",
      gradient: "from-green-500 to-green-600",
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
      glow: "shadow-amber-200",
      ring: "ring-amber-300",
      bgLight: "bg-amber-50",
      textColor: "text-amber-700",
      unlocked: true,
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-7 h-7 text-white drop-shadow"
        >
          <path d="M6 9V2l.5.5 1 1L9 2l1.5 1.5L12 2l1.5 1.5L15 2l1.5 1.5.5-.5v7c0 3.31-2.69 6-6 6S6 12.31 6 9zm3 10h6v2H9v-2z" />
          <path
            d="M5 2l1.5 1.5.5-.5V9c0 2.97 1.69 5.53 4.16 6.8C9.41 16.46 7.5 15.22 7 13H3v2c0 1.1.9 2 2 2h2v2H5c-1.65 0-3-1.35-3-3v-3h3V2H5z"
            opacity=".3"
          />
        </svg>
      ),
    },
    {
      id: 2,
      label: "7 Day Streak",
      color: "from-orange-400 to-red-500",
      glow: "shadow-orange-200",
      ring: "ring-orange-300",
      bgLight: "bg-orange-50",
      textColor: "text-orange-700",
      unlocked: true,
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-7 h-7 text-white drop-shadow"
        >
          <path d="M13.5 0.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z" />
        </svg>
      ),
    },
    {
      id: 3,
      label: "Graduate",
      color: "from-blue-500 to-indigo-600",
      glow: "shadow-blue-200",
      ring: "ring-blue-300",
      bgLight: "bg-blue-50",
      textColor: "text-blue-700",
      unlocked: true,
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-7 h-7 text-white drop-shadow"
        >
          <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
          <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
        </svg>
      ),
    },
    {
      id: 4,
      label: "Elite",
      color: "from-slate-400 to-slate-500",
      glow: "shadow-slate-200",
      ring: "ring-slate-300",
      bgLight: "bg-slate-50",
      textColor: "text-slate-500",
      unlocked: false,
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-7 h-7 text-white/70 drop-shadow"
        >
          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-white -mt-10 rounded-t-3xl shadow-lg p-6 flex flex-col min-h-screen">
      {/* Handle bar */}
      <div className="flex justify-center mb-6">
        <div className="h-1 bg-blue-600 w-16 rounded-md"></div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className={`${stat.bg} border ${stat.border} rounded-2xl p-4 flex flex-col items-center gap-1 transition-transform duration-200 active:scale-95`}
          >
            <div className={`${stat.text} mb-1`}>{stat.icon}</div>
            <span
              className={`text-2xl font-extrabold ${stat.text} leading-none`}
            >
              {stat.value}
            </span>
            <span className="text-xs text-gray-500 font-medium tracking-wide uppercase">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {/* Achievements Section */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-2xl font-bold text-gray-900">Achievements</h2>
        <button
          type="button"
          className="text-sm text-blue-600 hover:underline font-medium"
        >
          View All
        </button>
      </div>

      {/* Achievement Badges */}
      <div className="grid grid-cols-4 gap-2">
        {achievements.map((badge) => (
          <div
            key={badge.id}
            className="flex flex-col items-center gap-2"
            onMouseEnter={() => setHoveredBadge(badge.id)}
            onMouseLeave={() => setHoveredBadge(null)}
          >
            {/* Circle badge */}
            <div
              className={`
                relative w-16 h-16 rounded-full flex items-center justify-center
                bg-gradient-to-br ${badge.unlocked ? badge.color : "from-slate-300 to-slate-400"}
                shadow-lg ${badge.glow}
                ring-2 ${badge.unlocked ? badge.ring : "ring-slate-200"}
                transition-transform duration-200
                ${hoveredBadge === badge.id && badge.unlocked ? "scale-110" : "scale-100"}
                ${!badge.unlocked ? "opacity-60 grayscale" : ""}
              `}
            >
              {badge.icon}

              {/* Lock overlay for locked badges */}
              {!badge.unlocked && (
                <div className="absolute inset-0 rounded-full bg-slate-800/20 flex items-end justify-end p-1">
                  <div className="bg-white rounded-full w-4 h-4 flex items-center justify-center shadow">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-2.5 h-2.5 text-slate-500"
                    >
                      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                    </svg>
                  </div>
                </div>
              )}
            </div>

            {/* Label */}
            <span
              className={`text-xs font-semibold text-center leading-tight ${
                badge.unlocked ? badge.textColor : "text-slate-400"
              }`}
            >
              {badge.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementProfil;
