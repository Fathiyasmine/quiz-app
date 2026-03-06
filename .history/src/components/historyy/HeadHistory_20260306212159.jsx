import { ArrowBack } from "@mui/icons-material";
import SettingsIcon from "@mui/icons-material/Settings";
import { useNavigate } from "react-router-dom";

const HeadHistory = () => {
  const navigate = useNavigate();

  const circ = 2 * Math.PI * 33; // r = (72-6)/2 = 33
  //C'est a formule du périmètre d'un cercle : 2 × π × r
  const offset = circ - 0.85 * circ;

  return (
    <div className="bg-linear-to-br from-blue-500 to-blue-600 text-white p-6 rounded-b-3xl pb-20">
      {/* top bar */}
      <div className="flex justify-between items-center mb-5">
        <ArrowBack
          className="cursor-pointer text-white"
          onClick={() => navigate("/pro")}
        />
        <span className="text-xl font-bold text-white">Quiz History</span>
        <SettingsIcon className="cursor-pointer text-white" />
      </div>

      {/* stats card */}
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-4 flex items-center justify-between">
        {/* chiffres */}
        <div className="flex flex-col gap-3">
          <div>
            <p className="text-white/65 text-[11px] font-semibold tracking-widest uppercase m-0">
              Total Quizzes
            </p>
            <p className="text-white text-[28px] font-extrabold mt-0.5">48</p>
          </div>
          <div>
            <p className="text-white/65 text-[11px] font-semibold tracking-widest uppercase m-0">
              Avg. Accuracy
            </p>
            <p className="text-white text-[22px] font-bold mt-0.5">85%</p>
          </div>
        </div>

        {/* cercle */}
        <div className="flex flex-col items-center gap-1.5">
          <svg width="72" height="72" className="-rotate-90">
            <circle
              cx="36"
              cy="36"
              r="33"
              fill="none"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="6"
            />
            <circle
              cx="36"
              cy="36"
              r="33"
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
              className="text-sm font-bold"
              dominantBaseline="middle"
              textAnchor="middle"
            >
              85%
            </text>
          </svg>
          <span className="text-white/70 text-[11px]">Accuracy</span>
        </div>
      </div>
    </div>
  );
};

export default HeadHistory;
