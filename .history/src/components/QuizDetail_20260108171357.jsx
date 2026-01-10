import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowBack,
  Star,
  AccessTime,
  Article,
  StarOutline,
} from "@mui/icons-material";
import { quizzes } from "../data/quizData";
import { useQuiz } from "../context/QuizContext";

const QuizDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { startQuiz } = useQuiz();
};

const quiz = quizzes.find((q) => q.id === parseInt(id));
if (!quiz) return <div>Quiz not found</div>;

const handleStartQuiz = () => {
  startQuiz(quiz);
  navigate(`/quiz/${id}/start`);
};
return (
  <div className="min-h-screen bg-gray-100">
    {/*header */}
    <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-b-3xl pb-32">
      <div className="flex items-center justify-between mb-8">
        <ArrowBack className="cursor-pointer" onClick={() => navigate("/")} />
        <h1 className="text-xl font-semibold">Detail Quiz</h1>
        <div className="w-10 h-10 bg-white bg-opacity-30 rounded-full"></div>
      </div>
    </div>
    <h2 className="text-2xl font-bold mb-2">{quiz.title}</h2>
  </div>
);
