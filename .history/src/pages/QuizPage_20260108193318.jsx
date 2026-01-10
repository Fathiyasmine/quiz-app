import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowBack,
  ArrowForward,
  ArrowBack as ArrowLeft,
} from "@mui/icons-material";
import { useQuiz } from "../context/QuizContext";
import { quizzes } from "../data/quizData";

const QuizPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    currentQuiz,
    currentQuestion,
    selectedAnswers,
    timeRemaining,
    selectAnswer,
    nextQuestion,
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

  const question = currentQuiz.questions[currentQuestion];
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

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 pb-8">
        <div className="flex items-center justify-between mb-4">
          <ArrowBack
            className="cursor-pointer"
            onClick={() => navigate(`/quiz/${id}`)}
          />
          <h1 className="text-lg font-semibold">UI UX Design Quiz</h1>
          <div className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
            {formatTime(timeRemaining)}
          </div>
        </div>
      </div>

      {/* Quiz Content */}
      <div className="bg-white mx-4 -mt-4 rounded-2xl shadow-lg p-6 min-h-[600px]">
        {/* Question Numbers */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {currentQuiz.questions.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentQuestion(index)}
              className={`w-10 h-10 rounded-full flex-shrink-0 ${
                index === currentQuestion
                  ? "bg-blue-500 text-white"
                  : selectedAnswers[index] !== undefined
                  ? "bg-blue-100 text-blue-600"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        {/* Question */}
        <h2 className="text-lg font-semibold mb-6">{question.question}</h2>

        {/* Options */}
        <div className="space-y-3 mb-8">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => selectAnswer(currentQuestion, index)}
              className={`w-full p-4 rounded-xl text-left flex items-center gap-3 transition ${
                selectedAnswers[currentQuestion] === index
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {/*pour le button rond de la reponse choisie */}
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  selectedAnswers[currentQuestion] === index
                    ? "bg-white text-blue-500"
                    : "bg-gray-300 text-gray-600"
                }`}
              >
                {String.fromCharCode(65 + index)}
              </div>
              <span>{option}</span>
            </button>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex gap-4 justify-between items-center">
          <button
            onClick={previousQuestion}
            disabled={currentQuestion === 0}
            className={`w-14 h-14 rounded-full flex items-center justify-center ${
              currentQuestion === 0
                ? "bg-gray-200 text-gray-400"
                : "bg-blue-500 text-white"
            }`}
          >
            <ArrowLeft />
          </button>

          {currentQuestion === currentQuiz.questions.length - 1 ? (
            <button
              onClick={handleSubmit}
              className="flex-1 bg-white border-2 border-blue-500 text-blue-500 py-3 rounded-xl font-semibold"
            >
              Submit Quiz
            </button>
          ) : (
            <button
              onClick={nextQuestion}
              className="w-14 h-14 rounded-full bg-gray-200 text-gray-400 flex items-center justify-center"
            >
              <ArrowForward />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
