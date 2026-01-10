import { Star, AccessTime, Article } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const QuizCard = ({ quiz }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/quiz/${quiz.id}`)}
      className="bg-white rounded-lg border-2 border-blue-400 p-4 mb-4 cursor-pointer hover:shadow-lg transition"
    >
      <div className="flex items-start gap-4">
        <div className="w-20 h-20 bg-gray-300 rounded"></div>

        <div className="flex-1">
          <h3 className="text-blue-500 font-semibold text-lg mb-2">
            {quiz.title}
          </h3>

          <div className="flex items-center gap-4 text-sm text-gray-600 mb-1">
            <span className="flex items-center gap-1">
              <Article fontSize="small" />
              {quiz.questions} Question
            </span>
            <span className="flex items-center gap-1">
              <Star className="text-yellow-400" fontSize="small" />
              {quiz.rating}
            </span>
          </div>

          <div className="flex items-center gap-1 text-sm text-gray-600">
            <AccessTime fontSize="small" />
            {Math.floor(quiz.duration / 60)} hour {quiz.duration % 60} min
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
