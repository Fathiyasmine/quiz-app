import { ArrowBack, Star } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { quizzes } from "../../data/quizData";
import { useParams } from "react-router-dom";

const Header = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const quiz = quizzes.find((q) => q.id === parseInt(id));
  if (!quiz) return <div>Quiz not found</div>;

  return (
    /* Header */
    <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-b-3xl pb-32">
      <div className="flex-1 flex justify-between items-center">
        <ArrowBack className="cursor-pointer" onClick={() => navigate("/")} />
        <h1 className="text-lg font-semibold font-ubuntu">Detail Quiz</h1>
        <div className="w-10 h-10 bg-white bg-opacity-30 rounded-full"></div>
      </div>
      <h2 className="text-2xl font-bold mb-2">{quiz.title}</h2>
      <div className="flex items-start gap-56">
        <p className="text-sm mb-4 font-nunito">GET {quiz.points} Points</p>
        <div className="flex items-start gap-1">
          <Star className="text-yellow-400" />
          <span className="text-lg font-semibold font-nunito">
            {quiz.rating}
          </span>
        </div>
      </div>
    </div>
  );
};
export default Header;
