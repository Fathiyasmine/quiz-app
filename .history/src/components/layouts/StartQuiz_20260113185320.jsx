import { useParams, useNavigate } from "react-router-dom";
import { quizzes } from "../data/quizData";
import { useQuiz } from "../context/QuizContext";

const StartQuiz = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { startQuiz } = useQuiz();

  const quiz = quizzes.find((q) => q.id === parseInt(id));

  if (!quiz) return <div>Quiz not found</div>;

  const handleStartQuiz = () => {
    startQuiz(quiz);
    navigate(`/quiz/${id}/start`);
  };

  <button
    onClick={handleStartQuiz}
    className="w-full max-w-md bg-gradient-to-r from-[#3550DC] to-[#27E9F7] text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-shadow"
  >
    Start Quiz
  </button>;
};
export default StartQuiz;
