import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowBack,
  Star,
  AccessTime,
  Article,
  StarOutline,
} from "@mui/icons-material";
import { quizzes } from "../data/quizData";
import { useQuiz } from "../context/QuizContext";

const QuizDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { startQuiz } = useQuiz();

  const quiz = quizzes.find((q) => q.id === parseInt(id));

  if (!quiz) return <div>Quiz not found</div>;

  const handleStartQuiz = () => {
    startQuiz(quiz);
    navigate(`/quiz/${id}/start`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-b-3xl pb-32">
        <div className="flex items-center justify-between mb-8">
          <ArrowBack className="cursor-pointer" onClick={() => navigate("/")} />
          <h1 className="text-xl font-semibold">Detail Quiz</h1>
          <div className="w-10 h-10 bg-white bg-opacity-30 rounded-full"></div>
        </div>
        <h2 className="text-2xl font-bold mb-2">{quiz.title}</h2>
        <div className="flex items-center gap-2">
          <p className="text-sm mb-4">GET {quiz.points} Points</p>

          <Star className="text-yellow-400" />
          <span className="text-xl font-semibold">{quiz.rating}</span>
        </div>
      </div>

      {/* Detail Card */}
      <div className="bg-white mx-6 -mt-24 rounded-2xl shadow-lg p-6">
        <h3 className="font-semibold text-lg mb-4">
          Brief explanation about this quiz
        </h3>

        <div className="space-y-4 mb-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
              <Article className="text-white" />
            </div>
            <div>
              <p className="font-semibold">{quiz.totalQuestion} Question</p>
              <p className="text-sm text-gray-500">
                10 point for a correct answer
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
              <AccessTime className="text-white" />
            </div>
            <div>
              <p className="font-semibold">1 hour 15 min</p>
              <p className="text-sm text-gray-500">
                Total duration of the quiz
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
              <StarOutline className="text-white" />
            </div>
            <div>
              <p className="font-semibold">Win {quiz.reward} star</p>
              <p className="text-sm text-gray-500">
                Answer all questions correctly
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="font-semibold mb-2">
            Please read the text below carefully so you can understand it
          </p>

          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex gap-2">
              <span>•</span>
              <span>
                10 point awarded for a correct answer and no marks for a
                incorrect answer
              </span>
            </li>
            <li className="flex gap-2">
              <span>•</span>
              <span>Tap on options to select the correct answer</span>
            </li>
            <li className="flex gap-2">
              <span>•</span>
              <span>
                Tap on the bookmark icon to save interesting questions
              </span>
            </li>
            <li className="flex gap-2">
              <span>•</span>
              <span>
                Click submit if you are sure you want to complete all the
                quizzes
              </span>
            </li>
          </ul>
        </div>

        <button
          onClick={handleStartQuiz}
          className="w-full bg-blue-500 text-white py-4 rounded-xl mt-6 font-semibold"
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default QuizDetailPage;
