import { ArrowBack } from "@mui/icons-material";
import SettingsIcon from "@mui/icons-material/Settings";
import { useNavigate } from "react-router-dom";

const HeaderResults = () => {
  const navigate = useNavigate();

  const size = 72;
  const stroke = 6;
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (85 / 100) * circ;

  return (
    <div className="bg-linear-to-br from-blue-500 to-blue-600 text-white p-6 rounded-b-3xl pb-20">
      {/* top bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <ArrowBack
          style={{ color: "white", cursor: "pointer" }}
          onClick={() => navigate("/pro")}
        />
        <span style={{ color: "white", fontSize: 20, fontWeight: 700 }}>
          Quiz History
        </span>
        <SettingsIcon style={{ color: "white", cursor: "pointer" }} />
      </div>

      {/* stats card */}
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
        {/* cercle simple */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 6,
          }}
        >
          <svg
            width={size}
            height={size}
            style={{ transform: "rotate(-90deg)" }}
          >
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
              85%
            </text>
          </svg>
          <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 11 }}>
            Accuracy
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeaderResults;
