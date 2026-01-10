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
};
