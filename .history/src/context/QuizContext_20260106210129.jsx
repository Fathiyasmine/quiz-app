import { createContext, useContext, useState } from "react";

//creation du context pour rendre disponible les donnes a tout le App
const QuizContext = createContext();

//creation des state et les rendre dispo pour tout les children, Provider : Composant qui "fournit" les données à tous ses enfants

export const QuizProvider = ({ children }) => {
  // États (variables qui peuvent changer)

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
    const previousQuestion = () => {
      if (currentQuestion > 0) {
        setCurrentQuestion(currentQuestion - 1);
      }
    };
    return (
      <QuizContext.Provider
        value={{
          currentQuiz,
          currentQuestion,
          selectedAnswers,
          timeRemaining,
          quizInProgress,
          startQuiz,
          selectAnswer,
          nextQuestion,
          previousQuestion,
          setCurrentQuestion,
        }}
      ></QuizContext.Provider>
    );
  };
};
export const useQuiz = () => useContext(QuizContext);
