import { ArrowBack } from "@mui/icons-material";
import SettingsIcon from "@mui/icons-material/Settings";
import { useNavigate } from "react-router-dom";

const HeaderResults = ({ result }) => {
  const navigate = useNavigate();
  const name = localStorage.getItem("name") || "User";

  const percentage =
    result.total > 0 ? Math.round((result.score / result.total) * 100) : 0;

  // calcul du cercle SVG
  const circ = 2 * Math.PI * 47; // ≈ 295.3
  const offset = circ - (percentage / 100) * circ;

  return (
    <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-b-3xl pb-20">
      <div className="flex justify-between items-center mb-5">
        <ArrowBack
          className="cursor-pointer"
          onClick={() => navigate("/pro")}
        />
        <span className="text-xl font-bold">Quiz Results</span>
        <SettingsIcon className="cursor-pointer" />
      </div>

      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-4 flex items-center justify-center">
        <div className="flex flex-col items-center gap-1.5">
          <svg width="100" height="100" className="-rotate-90">
            <circle
              cx="50"
              cy="50"
              r="47"
              fill="none"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="6"
            />
            <circle
              cx="50"
              cy="50"
              r="47"
              fill="none"
              stroke="white"
              strokeWidth="6"
              strokeDasharray={circ}
              strokeDashoffset={offset}
              strokeLinecap="round"
            />
            <text
              x="50%"
              y="50%"
              fill="white"
              style={{ transform: "rotate(90deg)", transformOrigin: "50% 50%" }}
              fontSize="14"
              fontWeight="700"
              dominantBaseline="middle"
              textAnchor="middle"
            >
              {percentage}%
            </text>
          </svg>
          <span className="text-white/70 text-[11px]">Great Job, {name}!</span>
        </div>
      </div>
    </div>
  );
};

export default HeaderResults;
