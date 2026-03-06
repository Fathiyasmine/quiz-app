import { ArrowBack } from "@mui/icons-material";
import SettingsIcon from "@mui/icons-material/Settings";
import { useNavigate } from "react-router-dom";

// r = (100 - 6) / 2 = 47
// circ = 2 * π * 47 ≈ 295.3
// offset = circ - 0.85 * circ ≈ 44.3

const HeaderResults = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-linear-to-br from-blue-500 to-blue-600 text-white p-6 rounded-b-3xl pb-20">
      {/* top bar */}
      <div className="flex justify-between items-center mb-5">
        <ArrowBack
          className="cursor-pointer"
          onClick={() => navigate("/pro")}
        />
        <span className="text-xl font-bold">Quiz Results</span>
        <SettingsIcon className="cursor-pointer" />
      </div>

      {/* stats card */}
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
              strokeDasharray="295.3"
              strokeDashoffset="44.3"
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
              85%
            </text>
          </svg>
          <span className="text-white/70 text-[11px]">Great Job, James!</span>
        </div>
      </div>
    </div>
  );
};

export default HeaderResults;
