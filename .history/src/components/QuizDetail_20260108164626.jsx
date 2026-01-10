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
