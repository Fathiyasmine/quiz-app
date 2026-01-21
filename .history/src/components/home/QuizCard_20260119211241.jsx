import { Star, AccessTime, Article } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const QuizCard = ({ quiz }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/quiz/${quiz.id}`)}
      className="bg-white rounded-lg border-2 border-transparent shadow-md hover:border-blue-400 p-6 mb-4 cursor-pointer hover:shadow-lg transition-all"
    >
      <div className="flex items-start gap-4">
        {/* Image placeholder */}
        <div className="w-20 h-20 bg-gray-300 rounded flex-shrink-0"></div>
        {/* Contenu principal - FLEX entre gauche et droite */}
        <div className="flex-1 flex justify-between items-center">
          {/* Titre */}
          <div className="flex flex-col gap-1">
            {/* Titre */}
            <h3 className="bg-gradient-to-r from-[#3550DC] to-[#27E9F7] bg-clip-text text-transparent font-semibold text-lg mb-1 font-ubuntu">
              {quiz.title}
            </h3>
            {/* Nombre de questions */}
            <div className="flex items-center gap-1 text-sm text-[#999999] font-nunito">
              <Article fontSize="small" />
              <span className="text-[#999999] font-nunito">
                {quiz.totalQuestion} Questions
              </span>
            </div>
            {/* Durée */}
            <div className="flex items-center gap-1 text-sm text-[#999999] font-nunito">
              <AccessTime
                fontSize="small"
                className="text-[#999999] font-nunito"
              />
              <span className="text-[#999999] font-nunito">
                {Math.floor(quiz.duration / 60)} hour {quiz.duration % 60} min
              </span>
            </div>
          </div>
          {/*rating */}
          <div className="flex items-center gap-1 text-sm ">
            <Star className="text-yellow-400" fontSize="small" />
            <span className="font-semibold bg-gradient-to-r from-[#3550DC] to-[#27E9F7] bg-clip-text text-transparent">
              {quiz.rating}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
