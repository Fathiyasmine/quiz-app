import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowBack,
  ArrowForward,
  ArrowBack as ArrowLeft,
} from "@mui/icons-material";
import { useQuiz } from "../context/QuizContext";
import { quizzes } from "../data/quizData";
