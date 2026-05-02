import { AccessTime, Article } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useQuiz } from "../../context/QuizContext";
import { useNavigate } from "react-router-dom";
import { quizzes } from "../../data/quizData";

const CurrentQuiz = () => {
  const { loadProgress, clearProgress, continueQuiz } = useQuiz();
  const navigate = useNavigate();

  const savedProgress = loadProgress();
  if (!savedProgress) return null;

  const quiz = quizzes.find((q) => q.id === savedProgress.quizId);
  if (!quiz) return null;

  const handleContinue = () => {
    continueQuiz(quiz, savedProgress);
    navigate(`/quiz/${quiz.id}/start`);
  };

  const handleDelete = () => {
    if (window.confirm("Supprimer cette progression ?")) {
      clearProgress();
      window.location.reload();
    }
  };

  const progressPercent =
    (savedProgress.questionsAnswered / savedProgress.totalQuestions) * 100;

  return (
    <div>
      <h3 className="font-bold text-lg mb-3 text-gray-800">Continue Quiz</h3>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-300 transition p-4 flex flex-col gap-4">
        {/* Image */}
        <div className="w-full h-32 bg-gray-200 rounded-xl" />

        {/* Titre + supprimer */}
        <div className="flex items-start justify-between gap-2">
          <h4 className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#3550DC] to-[#27E9F7] text-base leading-tight">
            {savedProgress.quizTitle}
          </h4>
          <button
            onClick={handleDelete}
            className="text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full p-0.5 transition shrink-0"
          >
            <DeleteIcon fontSize="small" />
          </button>
        </div>

        {/* Infos */}
        <div className="flex flex-col gap-1 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Article fontSize="small" />
            <span>
              {savedProgress.questionsAnswered}/{savedProgress.totalQuestions}{" "}
              Questions
            </span>
          </div>
          <div className="flex items-center gap-1">
            <AccessTime fontSize="small" />
            <span>
              {Math.floor(savedProgress.timeRemaining / 60)} min restantes
            </span>
          </div>
        </div>

        {/* Barre de progression */}
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-[#3550DC] to-[#27E9F7] h-2 rounded-full transition-all"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Bouton */}
        <button
          onClick={handleContinue}
          className="w-full py-3 bg-gray-800 text-white rounded-xl font-semibold hover:bg-gray-700 transition"
        >
          Continue Quiz
        </button>
      </div>
    </div>
  );
};

export default CurrentQuiz;
