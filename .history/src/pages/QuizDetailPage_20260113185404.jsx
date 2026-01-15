import Header from "../components/detail/Header";
import DetailCard from "../components/detail/DetailCard";

const QuizDetailPage = () => {
  const quiz = quizzes.find((q) => q.id === parseInt(id));

  return (
    <div className="min-h-screen bg-gray-100 ">
      <Header />
      <DetailCard quiz={quiz} />
    </div>
  );
};

export default QuizDetailPage;
