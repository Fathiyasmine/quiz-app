import { createContext, useContext, useState } from "react";

// Création du context pour rendre disponible les données à tout le App
const QuizContext = createContext();

// Provider : Composant qui "fournit" les données à tous ses enfants
export const QuizProvider = ({ children }) => {
  // États (variables qui peuvent changer)
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [quizInProgress, setQuizInProgress] = useState(false);

  // Fonction appelée pour démarrer un quiz
  const startQuiz = (quiz) => {
    setCurrentQuiz(quiz);
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setTimeRemaining(quiz.duration * 60);
    setQuizInProgress(true);
  };

  // Fonction pour répondre à une question
  const selectAnswer = (questionIndex, answerIndex) => {
    const newAnswers = [...selectedAnswers]; // Copie avec spread operator
    newAnswers[questionIndex] = answerIndex; // Enregistre la réponse
    setSelectedAnswers(newAnswers); // Mise à jour de l'état
  };

  // Fonction pour aller à la question suivante
  const nextQuestion = () => {
    if (currentQuestion < currentQuiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  // Fonction pour revenir à la question précédente
  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  // Fournir toutes les données et fonctions aux composants enfants
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
    >
      {children}
    </QuizContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte facilement
export const useQuiz = () => useContext(QuizContext);
