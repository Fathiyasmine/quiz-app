import Header from "../components/detail/Header";
import DetailCard from "../components/detail/DetailCard";
import { quizzes } from "../data/quizData";
import { useParams } from "react-router-dom";
import StartQuiz from "../components/layouts/StartQuiz";

const QuizDetailPage = () => {
  const { id } = useParams();
  const quiz = quizzes.find((q) => q.id === parseInt(id));

  return (
    <div className="min-h-screen bg-gray-100 ">
      <Header />
      <DetailCard quiz={quiz} />
      <StartQuiz />
    </div>
  );
};

export default QuizDetailPage;
