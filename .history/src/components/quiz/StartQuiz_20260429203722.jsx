import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuiz } from "../../context/QuizContext";
import api from "../../api";

const QuizPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    currentQuiz,
    currentQuestion,
    selectedAnswers,
    selectAnswer,
    nextQuestion,
    previousQuestion,
    setCurrentQuestion,
    startQuiz,
    clearProgress,
    areAllQuestionsAnswered,
    timeRemaining,
  } = useQuiz();

  useEffect(() => {
    if (!currentQuiz) {
      api
        .get(`/quizzes/local/${id}`)
        .then((res) => startQuiz(res.data))
        .catch((err) => console.error("Erreur:", err));
    }
  }, [currentQuiz, id, startQuiz]);

  if (!currentQuiz) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  const question = currentQuiz.questions[currentQuestion];

  // Remplace le handleSubmit existant par :
  const handleSubmit = async () => {
    // 1. Calculer le score
    let score = 0;
    currentQuiz.questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        score++;
      }
    });

    const total = currentQuiz.questions.length;
    const timeTaken = currentQuiz.duration * 60 - timeRemaining; // secondes utilisées
    // 2. Sauvegarder en DB
    try {
      await api.post("/results", {
        quiz: currentQuiz._id || undefined, // MongoDB id si dispo
        quizLocalId: currentQuiz.id || undefined, // id local sinon
        score,
        total,
        timeTaken,
      });
    } catch (error) {
      console.error("Erreur sauvegarde résultat:", error);
    }

    // 3. Nettoyer et naviguer vers /result avec les données
    navigate("/result", {
      state: { score, total, timeTaken, quizTitle: currentQuiz.title },
    });
    clearProgress();
  };
  return (
    <div className="bg-white -mt-10 rounded-t-3xl shadow-lg p-6 flex flex-col min-h-fit">
      {/* Numéros des questions */}
      <div className="flex gap-4 mb-2 overflow-x-scroll pb-2">
        {currentQuiz.questions.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentQuestion(index)}
            className={`w-10 h-10 rounded-full shrink-0 font-semibold ${
              index === currentQuestion
                ? "bg-[#2F96E8] text-white"
                : selectedAnswers[index] !== undefined
                  ? "bg-blue-100 text-blue-600"
                  : "bg-gray-300 text-white"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Question */}
      <h2 className="text-lg font-semibold mb-6 mt-4">{question.question}</h2>

      {/* Options */}
      <div className="flex flex-col justify-between flex-1 min-h-screen">
        <div className="space-y-4 mb-18">
          {question.options.map((option, index) => (
            <div
              key={index}
              onClick={() => selectAnswer(currentQuestion, index)}
              className={`w-full p-2 rounded-xl text-left flex items-center gap-3 transition cursor-pointer ${
                selectedAnswers[currentQuestion] === index
                  ? "bg-blue-50 text-[#2F96E8]"
                  : "bg-transparent hover:bg-gray-200"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-semibold ${
                  selectedAnswers[currentQuestion] === index
                    ? "bg-[#2F96E8] text-white"
                    : "bg-gray-300 text-white"
                }`}
              >
                {String.fromCharCode(65 + index)}
              </div>
              <span>{option}</span>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex gap-2 justify-between items-center mt-auto">
          {/* Bouton Précédent */}
          <button
            onClick={previousQuestion}
            disabled={currentQuestion === 0}
            className={`w-12 h-12 rounded-full flex items-center justify-center ${
              currentQuestion === 0
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-[#2F96E8] text-white hover:bg-blue-700"
            }`}
          >
            <img src="/assets/gauche.svg" alt="Previous" className="w-4 h-4" />
          </button>

          {/* Bouton Submit */}
          <button
            disabled={!areAllQuestionsAnswered()}
            onClick={handleSubmit}
            className={`flex-1 border-2 py-3 rounded-xl font-semibold transition ${
              areAllQuestionsAnswered()
                ? "bg-white border-[#2E9DEA] text-[#2E97E9] hover:bg-blue-50 cursor-pointer"
                : "bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed"
            }`}
          >
            Submit Quiz
          </button>

          {/* Bouton Suivant */}
          <button
            disabled={currentQuestion === currentQuiz.questions.length - 1}
            onClick={nextQuestion}
            className={`w-12 h-12 rounded-full flex items-center justify-center ${
              currentQuestion === currentQuiz.questions.length - 1
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-[#2F96E8] text-white hover:bg-blue-700"
            }`}
          >
            <img src="/assets/right.svg" alt="Next" className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
