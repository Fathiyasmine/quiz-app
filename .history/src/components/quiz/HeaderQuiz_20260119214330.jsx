import { AccessTime, ArrowBack } from "@mui/icons-material";
import { useNavigate, useParams } from "react-router-dom";
import { quizzes } from "../../data/quizData";
import { useQuiz } from "../../context/QuizContext";

const HeaderQuiz = () => {
  const { id } = useParams(); // ID du quiz depuis l'URL
  const navigate = useNavigate(); // Fonction pour naviguer
  const { timeRemaining, formatTime } = useQuiz(); // Timer et fonction depuis le Context

  // Trouver le quiz correspondant à l'ID
  const quiz = quizzes.find((q) => q.id === parseInt(id));

  if (!quiz) return <div>Quiz not found</div>;

  return (
    // Header du quiz
    <div className="bg-linear-to-br from-blue-500 to-blue-600 text-white p-6 pb-20 rounded-b-3xl">
      <div className="flex items-center justify-between mt-2">
        {/* Retourne à la page détail du quiz */}
        <div className="flex justify-start gap-4">
          <ArrowBack
            className="cursor-pointer"
            onClick={() => navigate(`/quiz/${id}`)}
          />
          {/* Titre du quiz */}
          <h1 className="text-xl font-semibold ">{quiz.title} Quiz</h1>
        </div>
        {/*  TIMER  */}
        <div
          className={`px-3 py-1 rounded-full text-sm font-semibold transition ${
            timeRemaining < 60
              ? "bg-red-500 text-white animate-pulse" // Rouge clignotant si < 1 minute
              : "bg-white text-[#2EA0EA]"
          }`}
        >
          <AccessTime className="inline-block mr-1" fontSize="small" />
          {formatTime(timeRemaining)} {/* Affiche le temps au format MM:SS */}
        </div>
      </div>
    </div>
  );
};

export default HeaderQuiz;
