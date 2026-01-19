import { createContext, useContext, useState, useEffect } from "react";

// Création du contexte (la "boîte" qui contiendra toutes les données)
const QuizContext = createContext();

// Provider : Le composant qui partage les données avec tous les enfants
export const QuizProvider = ({ children }) => {
  // ÉTATS (Variables qui peuvent changer)

  const [currentQuiz, setCurrentQuiz] = useState(null); // Le quiz en cours
  const [currentQuestion, setCurrentQuestion] = useState(0); // Numéro de la question actuelle
  const [selectedAnswers, setSelectedAnswers] = useState([]); // Les réponses sélectionnées
  const [timeRemaining, setTimeRemaining] = useState(0); // Temps restant en SECONDES
  const [quizInProgress, setQuizInProgress] = useState(false); // Le quiz est démarré ou non

  //  LE TIMER 
  useEffect(() => {
    // 1️- Vérifier si le timer doit tourner
    // Si le quiz n'est pas démarré OU s'il ne reste plus de temps → on arrête
    if (!quizInProgress || timeRemaining <= 0) return;

    // 2️- Créer une "alarme" qui sonne toutes les secondes
    const timer = setInterval(() => {
      // 3️- Diminuer le temps de 1 seconde
      setTimeRemaining((prev) => {
        // 4️- Si le temps est écoulé (≤ 1 seconde)
        if (prev <= 1) {
          setQuizInProgress(false); // Arrêter le quiz
          return 0; // Mettre le temps à 0
        }

        // 5️- Sinon, enlever 1 seconde
        return prev - 1;
      });
    }, 1000); // 1000 millisecondes = 1 seconde

    // 6️- IMPORTANT : Nettoyer l'alarme quand le composant disparaît
    // Sinon, l'alarme continuera à sonner même si on quitte la page !
    return () => clearInterval(timer);
  }, [quizInProgress, timeRemaining]);
  // ↑ Ce useEffect se relance quand ces valeurs changent

  // Fonction pour DÉMARRER un quiz
  const startQuiz = (quiz) => {
    setCurrentQuiz(quiz); // Enregistrer le quiz
    setCurrentQuestion(0); // Commencer à la question 0
    setSelectedAnswers([]); // Réinitialiser les réponses
    setTimeRemaining(quiz.duration * 60); // Convertir minutes en secondes
    setQuizInProgress(true); // Marquer le quiz comme démarré
  };

  // Fonction pour RÉPONDRE à une question
  const selectAnswer = (questionIndex, answerIndex) => {
    const newAnswers = [...selectedAnswers]; // Copier le tableau des réponses
    newAnswers[questionIndex] = answerIndex; // Enregistrer la réponse
    setSelectedAnswers(newAnswers); // Mettre à jour l'état
  };

  // Fonction pour aller à la QUESTION SUIVANTE
  const nextQuestion = () => {
    // Vérifier qu'on n'est pas déjà à la dernière question
    if (currentQuestion < currentQuiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  // Fonction pour revenir à la QUESTION PRÉCÉDENTE
  const previousQuestion = () => {
    // Vérifier qu'on n'est pas déjà à la première question
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };
  // Fonction pour AFFICHER le temps au format MM:SS

  const formatTime = (seconds) => {
    // Exemple : seconds = 95

    // 1. Calculer les minutes (partie entière de la division)
    const mins = Math.floor(seconds / 60);
    // 95 / 60 = 1.58... → Math.floor = 1 minute
    // 2. Calculer les secondes restantes (reste de la division)
    const secs = seconds % 60;
    // 95 % 60 = 35 secondes
    // 3. Formater avec un 0 devant si les secondes < 10
    return `${mins}:${secs.toString().padStart(2, "0")}`;
    // toString() : convertit le nombre en texte
    // padStart(2, "0") : ajoute un 0 devant si c'est 1 chiffre
    // Exemples : 5 → "05", 35 → "35"
  };
  // FOURNIR toutes les données et fonctions aux composants enfants
  return (
    <QuizContext.Provider
      value={{
        // États
        currentQuiz,
        currentQuestion,
        selectedAnswers,
        timeRemaining, // Le temps restant en secondes
        quizInProgress,

        // Fonctions
        startQuiz,
        selectAnswer,
        nextQuestion,
        previousQuestion,
        setCurrentQuestion,
        formatTime, // La fonction pour afficher MM:SS
      }}
    >
      {children} {/* Tous les composants enfants */}
    </QuizContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte facilement
export const useQuiz = () => useContext(QuizContext);
