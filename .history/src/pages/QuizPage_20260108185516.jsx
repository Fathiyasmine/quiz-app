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
  <div className="min-h-screen bg-gray-100"></div>;
};
