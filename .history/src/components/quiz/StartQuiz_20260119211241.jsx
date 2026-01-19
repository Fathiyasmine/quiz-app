import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowForward, ArrowBack as ArrowLeft } from "@mui/icons-material";
import { useQuiz } from "../../context/QuizContext";
import { quizzes } from "../../data/quizData";

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
    navigate("/");
  };

  return (
    <div className="bg-white -mt-10 rounded-t-3xl shadow-lg p-6 flex flex-col">
      <div className="flex gap-4 mb-2 overflow-x-scroll pb-2">
        {currentQuiz.questions.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentQuestion(index)}
            className={`w-10 h-10 rounded-full flex-shrink-0 font-semibold ${
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
      <h2 className="text-lg font-semibold mb-6 mt-4">{question.question}</h2>
      <div className="flex flex-col justify-between ">
        <div className="space-y-4 mb-8">
          {question.options.map((option, index) => (
            <div
              key={index}
              onClick={() => selectAnswer(currentQuestion, index)}
              className={`w-full p-2 rounded-xl text-left flex items-center gap-3 transition ${
                selectedAnswers[currentQuestion] === index
                  ? "bg-white-500 text-[#2F96E8]"
                  : "bg-transparent hover:bg-gray-200"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-semibold ${
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
        <div className="flex gap-2 justify-between items-center w-auto mt-20">
          <button
            onClick={previousQuestion}
            disabled={currentQuestion === 0}
            className={`w-12 h-12 rounded-full flex items-center justify-center ${
              currentQuestion === 0
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            <img src="/assets/icons/left.svg" alt="" className="w-4 h-4" />
          </button>
          <button
            disabled={currentQuestion !== currentQuiz.questions.length - 1}
            onClick={handleSubmit}
            className="flex-1 bg-white border-2 border-[#2E9DEA] text-[#2E97E9] py-3 rounded-xl font-semibold hover:bg-blue-50"
          >
            Submit Quiz
          </button>
          <button
            disabled={currentQuestion === currentQuiz.questions.length - 1}
            onClick={nextQuestion}
            className="w-12 h-12 rounded-full bg-[#2F96E8] text-white flex items-center justify-center"
          >
            <img src="/assets/icons/right.svg" alt="" className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
