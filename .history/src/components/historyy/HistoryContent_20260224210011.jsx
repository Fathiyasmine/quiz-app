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
      gradient: "linear-gradient(135deg,#f97316,#ef4444)",
      title: "Graphic Design",
      date: "Feb 20, 2026",
      duration: "20 mint",
      score: "90 / 100",
      status: "Passed",
    },
    {
      icon: <SchoolIcon sx={{ color: "white", fontSize: 26 }} />,
      gradient: "linear-gradient(135deg,#3b81f0,#3b82f6)",
      title: "UI UX DESIGN",
      date: "Feb 18, 2026",
      duration: "20 mint",
      score: "72 / 100",
      status: "Passed",
    },
    {
      icon: <ScienceIcon sx={{ color: "white", fontSize: 26 }} />,
      gradient: "linear-gradient(135deg,#06b6d4,#3b82f6)",
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
      <div className="flex gap-8 mb-6 flex-row ">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            style={{
              padding: "8px 18px",
              display: "flex",
              justifyContent: "space-between",
              borderRadius: 50,
              border: "none",
              cursor: "pointer",
              fontWeight: 600,
              fontSize: 13,
              background:
                active === tab
                  ? "linear-gradient(135deg,#2563eb,#3b82f6)"
                  : "#f1f5f9",
              color: active === tab ? "white" : "#64748b",
              boxShadow:
                active === tab ? "0 4px 12px rgba(37,99,235,0.35)" : "none",
            }}
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
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              background: "#f8fafc",
              borderRadius: 18,
              padding: "12px 14px",
              border: "1px solid #e2e8f0",
            }}
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center bg-amber-100 boxShadow-md"
              style={{ background: item.gradient }}
            >
              {item.icon}
            </div>

            <div style={{ flex: 1, minWidth: 0 }}>
              <p className="m-0 font-bold text-gray-900 ">{item.title}</p>
              <p className="mt-1 text-xs text-gray-500 font-medium">
                {item.date} · {item.duration}
              </p>
            </div>

            <div style={{ textAlign: "right", flexShrink: 0 }}>
              <p
                style={{
                  margin: 0,
                  fontWeight: 700,
                  fontSize: 15,
                  color: "#0f172a",
                }}
              >
                {item.score}
              </p>
              <span
                style={{
                  display: "inline-block",
                  marginTop: 4,
                  fontSize: 11,
                  fontWeight: 600,
                  padding: "2px 10px",
                  borderRadius: 20,
                  background: item.status === "Passed" ? "#dcfce7" : "#fee2e2",
                  color: item.status === "Passed" ? "#16a34a" : "#dc2626",
                }}
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
