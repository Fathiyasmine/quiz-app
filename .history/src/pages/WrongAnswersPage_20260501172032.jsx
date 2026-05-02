import { useLocation, useNavigate } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { useSettings } from "../context/SettingsContext";

const WrongAnswersPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t, darkMode } = useSettings();
  const { questions, selectedAnswers } = location.state || {};
  console.log("state reçu:", location.state);

  // Filtrer uniquement les questions ratées
  const wrongQuestions =
    questions?.filter((q, i) => selectedAnswers[i] !== q.correctAnswer) || [];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-br from-red-400 to-red-500 text-white p-6 rounded-b-3xl">
        <div className="flex items-center gap-4">
          <ArrowBack className="cursor-pointer" onClick={() => navigate(-1)} />
          <span className="text-xl font-bold">{t("wrongAnswers")}</span>
        </div>
        <p className="text-white/70 text-sm mt-2 ml-8">
          {wrongQuestions.length} {t("questionsFailed")}
        </p>
      </div>

      {/* Liste des questions ratées */}
      <div className="p-4 flex flex-col gap-4 mt-4">
        {wrongQuestions.map((q, idx) => {
          const userAnswerIndex = questions
            ? Object.entries(selectedAnswers).find(
                ([i]) => questions[i] === q,
              )?.[0]
            : null;

          return (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-4 border border-gray-100 dark:border-gray-700"
            >
              {/* Question */}
              <p className="font-semibold text-gray-800 dark:text-gray-100 mb-3">
                {idx + 1}. {q.question}
              </p>

              {/* Options */}
              <div className="flex flex-col gap-2">
                {q.options.map((option, i) => {
                  const isCorrect = i === q.correctAnswer;
                  const isUserWrong =
                    userAnswerIndex !== null &&
                    i === selectedAnswers[userAnswerIndex];

                  return (
                    <div
                      key={i}
                      className={`flex items-center gap-3 p-3 rounded-xl text-sm font-medium transition ${
                        isCorrect
                          ? "bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400"
                          : isUserWrong
                            ? "bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400"
                            : "bg-gray-50 dark:bg-gray-700 border border-gray-100 dark:border-gray-600 text-gray-500 dark:text-gray-400"
                      }`}
                    >
                      {isCorrect ? (
                        <CheckCircleIcon
                          sx={{ fontSize: 20, color: "#72bd72" }}
                        />
                      ) : isUserWrong ? (
                        <CancelIcon sx={{ fontSize: 20, color: "#ea7474" }} />
                      ) : (
                        <span className="w-5 h-5 rounded-full bg-gray-200 dark:bg-gray-600 text-xs flex items-center justify-center text-gray-500 dark:text-gray-400 font-bold">
                          {String.fromCharCode(65 + i)}
                        </span>
                      )}
                      {option}
                      {isCorrect && (
                        <span className="ml-auto text-xs text-green-500 font-semibold">
                          {t("correctAnswer")}
                        </span>
                      )}
                      {isUserWrong && !isCorrect && (
                        <span className="ml-auto text-xs text-red-400 font-semibold">
                          {t("yourAnswer")}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WrongAnswersPage;
