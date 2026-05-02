import { ArrowBack } from "@mui/icons-material";
import SettingsIcon from "@mui/icons-material/Settings";
import { useNavigate } from "react-router-dom";

const HeadHistory = ({ results }) => {
  const navigate = useNavigate();

  // calcul dynamique depuis les vrais résultats
  const totalQuizzes = results.length;
  const avgAccuracy =
    totalQuizzes === 0
      ? 0
      : Math.round(
          results.reduce((sum, r) => sum + (r.score / r.total) * 100, 0) /
            totalQuizzes,
        );

  const circ = 2 * Math.PI * 33;
  const offset = circ - (avgAccuracy / 100) * circ; // dynamique

  return (
    <div className="bg-gradient-to-br from-blue-500 to-blue-600 dark:bg-gradient-to-br from-blue-700 to-blue-900 text-white p-6 rounded-b-3xl pb-20">
      <div className="flex items-center mb-5">
        <ArrowBack
          className="cursor-pointer"
          onClick={() => navigate("/pro")}
        />
      </div>

      <span className="text-xl font-bold flex justify-center align-top mb-4">
        Quiz History
      </span>

      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-4 flex items-center justify-between">
        <div className="flex flex-col gap-3">
          <div>
            <p className="text-white/65 text-[11px] font-semibold tracking-widest uppercase m-0">
              Total Quizzes
            </p>
            <p className="text-white text-[28px] font-extrabold mt-0.5">
              {totalQuizzes} {/* ← dynamique */}
            </p>
          </div>
          <div>
            <p className="text-white/65 text-[11px] font-semibold tracking-widest uppercase m-0">
              Avg. Accuracy
            </p>
            <p className="text-white text-[22px] font-bold mt-0.5">
              {avgAccuracy}% {/* ← dynamique */}
            </p>
          </div>
        </div>

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
              strokeDashoffset={offset} // ← dynamique
              strokeLinecap="round"
            />
            <text
              x="50%"
              y="50%"
              fill="white"
              style={{ transform: "rotate(90deg)", transformOrigin: "50% 50%" }}
              fontSize="12"
              fontWeight="700"
              dominantBaseline="middle"
              textAnchor="middle"
            >
              {avgAccuracy}% {/* ← dynamique */}
            </text>
          </svg>
          <span className="text-white/70 text-[11px]">Accuracy</span>
        </div>
      </div>
    </div>
  );
};

export default HeadHistory;
