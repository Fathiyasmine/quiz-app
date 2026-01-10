import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowBack,
  ArrowForward,
  ArrowBack as ArrowLeft,
  CurrencyBitcoin,
} from "@mui/icons-material";
import { useQuiz } from "../context/QuizContext";
import { quizzes } from "../data/quizData";

const QuizPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    currentQuiz,
    currentQuestion,
    selectedAnsewrs,
    timeRemaining,
    selectAnswer,
    nextAnswer,
    previousQuestion,
    setCurrentQuestion,
    startQuiz,
  } = useQuiz();
  useEffect(() => {
    if (!currentQuiz) {
      const quiz = quizzes.find((q) => q.id === parseInt(id));
      if (quiz) startQuiz(quiz);
    }
  }, []);
  if (!currentQuiz) return <div>Loading...</div>;

  const question = currentQuiz.question[currentQuestion];
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };
  const handleSubmit = () => {
    // Calculate score and navigate to results
    alert("Quiz completed!");
    navigate("/");
  };
  <div className="min-h-screen bg-gray-100">
    {/*header */}
    <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 pb-8">
      <div className="flex items-center justify-between mb-4">
        <ArrowBack
          className="cursor-pointer"
          onClick={() => navigate(`/quiz/${id}`)}
        />
        <h1 className="text-lg font-semibold">UI UX Design quiz</h1>
        <div className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
          {formatTime(timeRemaining)}
        </div>
      </div>
    </div>
    {/*quiz content */}
    <div className="bg-white mx-4 -mt-4 rounded-2xl shadow-lg p-6 min-h-[600px]">
      {/*nombre des qst */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {currentQuiz.question.map((_, index) => {
            <button key={index}
            onClick={()=>setCurrentQuestion(index)}
        })}
      </div>
    </div>
  </div>;
};
