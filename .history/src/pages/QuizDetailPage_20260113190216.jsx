import { useParams, useNavigate } from "react-router-dom";
import { quizzes } from "../data/quizData";
import { useQuiz } from "../context/QuizContext";
import Header from "../components/detail/Header";
import DetailCard from "../components/detail/DetailCard";

const QuizDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { startQuiz } = useQuiz();

  const quiz = quizzes.find((q) => q.id === parseInt(id));

  if (!quiz) return <div>Quiz not found</div>;

  const handleStartQuiz = () => {
    startQuiz(quiz);
    navigate(`/quiz/${id}/start`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-blue-600">
      <Header />
      <DetailCard quiz={quiz} />
      <button
        onClick={handleStartQuiz}
        className="w-full max-w-md bg-gradient-to-r from-[#3550DC] to-[#27E9F7] text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-shadow"
      >
        Start Quiz
      </button>
    </div>
  );
};

export default QuizDetailPage;
