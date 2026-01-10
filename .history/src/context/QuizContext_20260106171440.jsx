import { createContext, use, useContext, useState } from "react";

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnsewers] = useState([]);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [quizInProgress, setQuizInProgress] = useState(false);

  const startQuiz = (quiz) => {
    setCurrentQuiz(quiz);
    setCurrentQuestion(0);
    setSelectedAnsewers([]);
    setTimeRemaining(quiz.duration * 60);
    setQuizInProgress(true);
  };
  const selectAnswer = (questionIndex, answerIndex) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[questionIndex] = answerIndex;
    setSelectedAnsewers(newAnswers);

    const nextQuestion = () => {
      if (currentQuestion < currentQuiz.questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      }
    };
  };
};
