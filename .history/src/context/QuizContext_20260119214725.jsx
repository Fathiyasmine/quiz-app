import { createContext, useContext, useState, useEffect } from "react";

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [quizInProgress, setQuizInProgress] = useState(false);
  const [startTime, setStartTime] = useState(null);

  // Timer avec sauvegarde automatique
  useEffect(() => {
    if (!quizInProgress || timeRemaining <= 0) return;

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          setQuizInProgress(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [quizInProgress, timeRemaining]);

  // Fonction pour sauvgarder la progression
  const saveProgress = () => {
    if (!currentQuiz) return;

    const progress = {
      quizId: currentQuiz.id,
      quizTitle: currentQuiz.title,
      currentQuestion: currentQuestion,
      selectedAnswers: selectedAnswers,
      timeRemaining: timeRemaining,
      totalQuestions: currentQuiz.questions.length,
      //pour filtrer seulement les qst avec reponse selectionnes
      questionsAnswered: selectedAnswers.filter((a) => a !== undefined).length,
      startTime: startTime,
      lastUpdated: new Date().toISOString(),
    };

    localStorage.setItem("quizInProgress", JSON.stringify(progress));
  };

  // Sauvegarder automatiquement la progression
  useEffect(() => {
    if (currentQuiz && quizInProgress) {
      saveProgress();
    }
  }, [currentQuiz, currentQuestion, selectedAnswers, timeRemaining]);

  // Fonction pour charger la progression
  const loadProgress = () => {
    const saved = localStorage.getItem("quizInProgress");
    if (saved) {
      return JSON.parse(saved);
    }
    return null;
  };

  // Fonction pour supprimer la progression
  const clearProgress = () => {
    localStorage.removeItem("quizInProgress");
  };

  // Fonction pour DÉMARRER un quiz
  const startQuiz = (quiz) => {
    setCurrentQuiz(quiz);
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setTimeRemaining(quiz.duration * 60);
    setQuizInProgress(true);
    setStartTime(new Date().toISOString());
  };

  // Fonction pour continuer un quiz sauvegardé
  const continueQuiz = (quiz, savedProgress) => {
    setCurrentQuiz(quiz);
    setCurrentQuestion(savedProgress.currentQuestion);
    setSelectedAnswers(savedProgress.selectedAnswers);
    setTimeRemaining(savedProgress.timeRemaining);
    setQuizInProgress(true);
    setStartTime(savedProgress.startTime);
  };

  const selectAnswer = (questionIndex, answerIndex) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[questionIndex] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

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

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
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
        continueQuiz,
        selectAnswer,
        nextQuestion,
        previousQuestion,
        setCurrentQuestion,
        formatTime,
        saveProgress,
        loadProgress,
        clearProgress,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => useContext(QuizContext);
