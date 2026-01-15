import { useParams, useNavigate } from "react-router-dom";
import { quizzes } from "../data/quizData";
import { useQuiz } from "../context/QuizContext";
import Header from "../components/detail/Header";
import DetailCard from "../components/detail/DetailCard";

const QuizDetailPage = () => {
  const { id } = useParams();

  const quiz = quizzes.find((q) => q.id === parseInt(id));

  if (!quiz) return <div>Quiz not found</div>;

  return (
    <div className="min-h-screen bg-gray-100 ">
      <Header />
      <DetailCard quiz={quiz} />
    </div>
  );
};

export default QuizDetailPage;
