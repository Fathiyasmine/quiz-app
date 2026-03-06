import React, { useState } from "react";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import { ArrowBack } from "@mui/icons-material";
import SettingsIcon from "@mui/icons-material/Settings";
import ScienceIcon from "@mui/icons-material/Science";
import FunctionsIcon from "@mui/icons-material/Functions";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import PsychologyIcon from "@mui/icons-material/Psychology";

// ── circular progress ──────────────────────────────────────────────────────
const CircularProgress = ({ value = 85, size = 72, stroke = 6 }) => {
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (value / 100) * circ;
  return (
    <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke="rgba(255,255,255,0.2)"
        strokeWidth={stroke}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke="white"
        strokeWidth={stroke}
        strokeDasharray={circ}
        strokeDashoffset={offset}
        strokeLinecap="round"
        style={{ transition: "stroke-dashoffset 1s ease" }}
      />
      <text
        x="50%"
        y="50%"
        fill="white"
        style={{
          transform: "rotate(90deg)",
          transformOrigin: "50% 50%",
          fontSize: 14,
          fontWeight: 700,
          dominantBaseline: "middle",
          textAnchor: "middle",
        }}
      >
        {value}%
      </text>
    </svg>
  );
};

// ── topic icon map ─────────────────────────────────────────────────────────
const topicConfig = {
  "UI UX DESIGN": {
    icon: <DesignServicesIcon sx={{ color: "white", fontSize: 26 }} />,
    gradient: "linear-gradient(135deg,#f97316,#ef4444)",
  },
  "Science Quiz": {
    icon: <ScienceIcon sx={{ color: "white", fontSize: 26 }} />,
    gradient: "linear-gradient(135deg,#06b6d4,#3b82f6)",
  },
  "Math Quiz": {
    icon: <FunctionsIcon sx={{ color: "white", fontSize: 26 }} />,
    gradient: "linear-gradient(135deg,#8b5cf6,#6366f1)",
  },
  default: {
    icon: <PsychologyIcon sx={{ color: "white", fontSize: 26 }} />,
    gradient: "linear-gradient(135deg,#10b981,#059669)",
  },
};

const quizItems = [
  {
    title: "UI UX DESIGN",
    date: "Feb 20, 2026",
    duration: "20 mint",
    score: "90 / 100",
    status: "Passed",
  },
  {
    title: "UI UX DESIGN",
    date: "Feb 18, 2026",
    duration: "20 mint",
    score: "72 / 100",
    status: "Passed",
  },
  {
    title: "Science Quiz",
    date: "Feb 15, 2026",
    duration: "25 mint",
    score: "85 / 100",
    status: "Passed",
  },
];

const tabs = ["All Topics", "Mathematic", "Science"];

// ── HEAD ───────────────────────────────────────────────────────────────────
const HeadHistory = () => (
  <div
    style={{
      background:
        "linear-gradient(135deg, #1e40af 0%, #2563eb 60%, #3b82f6 100%)",
      padding: "24px 20px 72px",
      borderRadius: "0 0 28px 28px",
      position: "relative",
      overflow: "hidden",
    }}
  >
    <div
      style={{
        position: "absolute",
        top: -40,
        right: -40,
        width: 160,
        height: 160,
        borderRadius: "50%",
        background: "rgba(255,255,255,0.07)",
        pointerEvents: "none",
      }}
    />
    <div
      style={{
        position: "absolute",
        bottom: -20,
        left: -30,
        width: 120,
        height: 120,
        borderRadius: "50%",
        background: "rgba(255,255,255,0.05)",
        pointerEvents: "none",
      }}
    />

    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
      }}
    >
      <ArrowBack style={{ color: "white", cursor: "pointer" }} />
      <span style={{ color: "white", fontSize: 20, fontWeight: 700 }}>
        Quiz History
      </span>
      <SettingsIcon style={{ color: "white", cursor: "pointer" }} />
    </div>

    <div
      style={{
        background: "rgba(255,255,255,0.12)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.22)",
        borderRadius: 20,
        padding: "16px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <div>
          <p
            style={{
              color: "rgba(255,255,255,0.65)",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: 1.2,
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            Total Quizzes
          </p>
          <p
            style={{
              color: "white",
              fontSize: 28,
              fontWeight: 800,
              margin: "2px 0 0",
            }}
          >
            48
          </p>
        </div>
        <div>
          <p
            style={{
              color: "rgba(255,255,255,0.65)",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: 1.2,
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            Avg. Accuracy
          </p>
          <p
            style={{
              color: "white",
              fontSize: 22,
              fontWeight: 700,
              margin: "2px 0 0",
            }}
          >
            85%
          </p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
        }}
      >
        <CircularProgress value={85} />
        <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 11 }}>
          Accuracy
        </span>
      </div>
    </div>
  </div>
);

// ── CONTENT ────────────────────────────────────────────────────────────────
const HistoryContent = () => {
  const [active, setActive] = useState("All Topics");

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
      <div
        style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}
      >
        {tabs.map((tab) => {
          const isActive = tab === active;
          return (
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
                transition: "all 0.2s",
                background: isActive
                  ? "linear-gradient(135deg,#2563eb,#3b82f6)"
                  : "#f1f5f9",
                color: isActive ? "white" : "#64748b",
                boxShadow: isActive
                  ? "0 4px 12px rgba(37,99,235,0.35)"
                  : "none",
              }}
            >
              {tab}
            </button>
          );
        })}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {quizItems.map((item, i) => {
          const cfg = topicConfig[item.title] || topicConfig.default;
          const passed = item.status === "Passed";
          return (
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
                transition: "box-shadow 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 4px 16px rgba(0,0,0,0.08)")
              }
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
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
                  background: cfg.gradient,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                }}
              >
                {cfg.icon}
              </div>

              <div style={{ flex: 1, minWidth: 0 }}>
                <p
                  style={{
                    margin: 0,
                    fontWeight: 700,
                    fontSize: 14,
                    color: "#0f172a",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
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
                    background: passed ? "#dcfce7" : "#fee2e2",
                    color: passed ? "#16a34a" : "#dc2626",
                  }}
                >
                  {item.status}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { HeadHistory, HistoryContent };
