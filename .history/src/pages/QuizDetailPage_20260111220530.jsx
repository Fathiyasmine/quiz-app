import { useParams, useNavigate } from "react-router-dom";
import { quizzes } from "../data/quizData";
import { useQuiz } from "../context/QuizContext";
import DetailHeader from "../components/detail/Header";
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
    <div className="min-h-screen bg-gray-100">
      <DetailHeader />
      <DetailCard quiz={quiz} />
      <button
        onClick={handleStartQuiz}
        className="w-full bg-blue-500 text-white py-4 rounded-xl mt-6 font-semibold"
      >
        Start Quiz
      </button>
    </div>
  );
};

export default QuizDetailPage;
