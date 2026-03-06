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
    <div
      style={{
        background: "white",
        borderRadius: "24px 24px 0 0",
        marginTop: -32,
        padding: "24px 16px",
        minHeight: "100vh",
        boxShadow: "0 -4px 20px rgba(0,0,0,0.08)",
      }}
    >
      {/* tabs */}
      <div
        style={{
          display: "flex",
          gap: 8,
          marginBottom: 20,
          flexDirection: "row",
          justifyContent: "flex-between",
        }}
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            style={{
              padding: "8px 18px",
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
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
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
              style={{
                width: 54,
                height: 54,
                borderRadius: 14,
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: item.gradient,
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              }}
            >
              {item.icon}
            </div>

            <div style={{ flex: 1, minWidth: 0 }}>
              <p
                style={{
                  margin: 0,
                  fontWeight: 700,
                  fontSize: 14,
                  color: "#0f172a",
                }}
              >
                {item.title}
              </p>
              <p
                style={{
                  margin: "3px 0 0",
                  fontSize: 12,
                  color: "#94a3b8",
                  fontWeight: 500,
                }}
              >
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
