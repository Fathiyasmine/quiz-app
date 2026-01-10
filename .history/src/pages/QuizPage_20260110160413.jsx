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
    selectAnswer,
    nextQuestion,
    previousQuestion,
    setCurrentQuestion,
    startQuiz,
  } = useQuiz();

  useEffect(() => {
    if (!currentQuiz) {
      const quiz = quizzes.find((q) => q.id === parseInt(id));
      if (quiz) {
        startQuiz(quiz);
      }
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

  const handleSubmit = () => {
    const score = selectedAnswers.reduce((total, answer, index) => {
      if (answer === currentQuiz.questions[index].correctAnswer) {
        return total + 10;
      }
      return total;
    }, 0);

    alert(
      `Quiz completed! Your score: ${score}/${
        currentQuiz.questions.length * 10
      }`
    );
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
          <h1 className="text-lg font-semibold">{currentQuiz.title} Quiz</h1>
          <div className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
            16:35
          </div>
        </div>
      </div>

      {/* Quiz Content */}
      <div className="bg-white mx-4 -mt-4 rounded-2xl shadow-lg p-6 min-h-[600px] flex flex-col">
        {/* Question Numbers */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {currentQuiz.questions.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentQuestion(index)}
              className={`w-10 h-10 rounded-full flex-shrink-0 font-semibold transition ${
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
        <div className="space-y-3 mb-8 flex-1">
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
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-semibold ${
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
        <div className="flex gap-4 justify-between items-center mt-auto">
          <button
            onClick={previousQuestion}
            disabled={currentQuestion === 0}
            className={`w-14 h-14 rounded-full flex items-center justify-center transition ${
              currentQuestion === 0
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            <ArrowLeft />
          </button>

          {currentQuestion === currentQuiz.questions.length - 1 ? (
            <button
              onClick={handleSubmit}
              className="flex-1 bg-white border-2 border-blue-500 text-blue-500 py-3 rounded-xl font-semibold hover:bg-blue-50 transition"
            >
              Submit Quiz
            </button>
          ) : (
            <button
              onClick={nextQuestion}
              className="w-14 h-14 rounded-full bg-blue-500 text-white flex items-center justify-center"
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
