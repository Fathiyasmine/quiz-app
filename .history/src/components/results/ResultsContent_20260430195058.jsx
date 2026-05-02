import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuizIcon from "@mui/icons-material/Quiz";
import CheckIcon from "@mui/icons-material/Check";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

const ResultsContent = ({ result }) => {
  const { score, total, timeTaken, questions, selectedAnswers } = result;
  const incorrect = total - score;
  const navigate = useNavigate();
  const [showCongrats, setShowCongrats] = useState(false);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  // Afficher le gif si score >= 5
  useEffect(() => {
    if (score >= 5) {
      setShowCongrats(true);
      const timer = setTimeout(() => setShowCongrats(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [score]);

  const handleWrongAnswers = () => {
    navigate("/results/wrong-answers", {
      state: { questions, selectedAnswers },
    });
  };

  return (
    <div className="p-6 bg-white rounded-t-3xl shadow-lg min-h-screen relative">
      {/* ---- Overlay félicitations ---- */}
      {showCongrats && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm"
          onClick={() => setShowCongrats(false)}
        >
          <img
            src="/assets/congrats.gif"
            alt="Félicitations"
            className="w-64 h-64 object-contain"
          />
          <p className="text-white text-2xl font-extrabold mt-4 drop-shadow-lg">
            🎉 Félicitations !
          </p>
          <p className="text-white/80 text-sm mt-1">Appuie pour continuer</p>
        </div>
      )}

      {/* ---- Cartes stats ---- */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 flex items-center gap-2">
          <QuizIcon sx={{ color: "#4A90E2", fontSize: 28 }} />
          <div className="flex flex-col">
            <span className="text-2xl font-extrabold text-black">{total}</span>
            <span className="text-xs text-gray-500 font-medium uppercase">
              Questions
            </span>
          </div>
        </div>

        <div className="bg-green-50 border border-green-100 rounded-2xl p-4 flex items-center gap-2">
          <CheckIcon sx={{ color: "#72bd72", fontSize: 28 }} />
          <div className="flex flex-col">
            <span className="text-2xl font-extrabold text-black">{score}</span>
            <span className="text-xs text-gray-500 font-medium uppercase">
              Correct
            </span>
          </div>
        </div>

        {/* ---- Bouton Incorrect cliquable ---- */}
        <div
          onClick={incorrect > 0 ? handleWrongAnswers : undefined}
          className={`bg-red-50 border border-red-100 rounded-2xl p-4 flex items-center gap-2 ${
            incorrect > 0 ? "cursor-pointer active:scale-95 transition" : ""
          }`}
        >
          <DisabledByDefaultIcon sx={{ color: "#ea7474", fontSize: 28 }} />
          <div className="flex flex-col">
            <span className="text-2xl font-extrabold text-black">
              {incorrect}
            </span>
            <span className="text-xs text-gray-500 font-medium uppercase">
              Incorrect
            </span>
            {incorrect > 0 && (
              <span className="text-[10px] text-red-400 font-semibold mt-0.5">
                Voir les erreurs →
              </span>
            )}
          </div>
        </div>

        <div className="bg-purple-50 border border-purple-100 rounded-2xl p-4 flex items-center gap-2">
          <AccessAlarmIcon sx={{ color: "#b77db7", fontSize: 28 }} />
          <div className="flex flex-col">
            <span className="text-2xl font-extrabold text-black">
              {formatTime(timeTaken)}
            </span>
            <span className="text-xs text-gray-500 font-medium uppercase">
              Time Spent
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsContent;
