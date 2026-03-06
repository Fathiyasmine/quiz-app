import React, { useState } from "react";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import ScienceIcon from "@mui/icons-material/Science";
import FunctionsIcon from "@mui/icons-material/Functions";
import SchoolIcon from "@mui/icons-material/School";

const HistoryContent = () => {
  const [active, setActive] = useState("All Topics");

  const tabs = ["All Topics", "UI UX DESIGN", "Science"];

  const quizItems = [
    {
      icon: <DesignServicesIcon sx={{ color: "white", fontSize: 26 }} />,
      bg: "bg-gradient-to-br from-orange-500 to-red-500",
      title: "Graphic Design",
      date: "Feb 20, 2026",
      duration: "20 mint",
      score: "90 / 100",
      status: "Passed",
    },
    {
      icon: <SchoolIcon sx={{ color: "white", fontSize: 26 }} />,
      bg: "bg-gradient-to-br from-blue-400 to-blue-500",
      title: "UI UX DESIGN",
      date: "Feb 18, 2026",
      duration: "20 mint",
      score: "72 / 100",
      status: "Passed",
    },
    {
      icon: <ScienceIcon sx={{ color: "white", fontSize: 26 }} />,
      bg: "bg-gradient-to-br from-cyan-400 to-blue-500",
      title: "Science Quiz",
      date: "Feb 15, 2026",
      duration: "25 mint",
      score: "85 / 100",
      status: "Passed",
    },
  ];

  return (
    <div className="bg-white -mt-10 rounded-t-3xl shadow-lg p-6 flex flex-col min-h-screen">
      {/* tabs */}
      <div className="flex flex-row gap-3 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-4 py-2 rounded-full border-none cursor-pointer font-semibold text-sm transition-all
              ${
                active === tab
                  ? "bg-gradient-to-r from-blue-600 to-blue-400 text-white shadow-md shadow-blue-300"
                  : "bg-slate-100 text-slate-500"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* liste */}
      <div className="flex flex-col gap-3">
        {quizItems.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-4 bg-slate-50 rounded-2xl p-3 border border-slate-200"
          >
            {/* icone */}
            <div
              className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-md flex-shrink-0 ${item.bg}`}
            >
              {item.icon}
            </div>

            {/* info */}
            <div className="flex-1 min-w-0">
              <p className="m-0 font-bold text-gray-900 text-sm">
                {item.title}
              </p>
              <p className="mt-1 text-xs text-gray-400 font-medium">
                {item.date} · {item.duration}
              </p>
            </div>

            {/* score */}
            <div className="text-right flex-shrink-0">
              <p className="m-0 font-bold text-sm text-gray-900">
                {item.score}
              </p>
              <span
                className={`inline-block mt-1 text-xs font-semibold px-3 py-0.5 rounded-full
                  ${
                    item.status === "Passed"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
              >
                {item.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryContent;
