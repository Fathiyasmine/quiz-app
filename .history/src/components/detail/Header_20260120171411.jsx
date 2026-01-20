import { ArrowBack, Star } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { quizzes } from "../../data/quizData";
import { useParams } from "react-router-dom";
import { AccountCircle } from "@mui/icons-material";

const Header = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const quiz = quizzes.find((q) => q.id === parseInt(id));
  if (!quiz) return <div>Quiz not found</div>;

  return (
    /* Header */
    <div className="bg-linear-to-br from-blue-500 to-blue-600 text-white p-6 rounded-b-3xl pb-24">
      <div className="flex-1 flex justify-between items-center pb-5">
        <div className="flex flex-row justify-start gap-2 ">
          <ArrowBack className="cursor-pointer" onClick={() => navigate("/")} />
          <h1 className="text-xl font-semibold font-ubuntu ml-1">
            Detail Quiz
          </h1>
        </div>
        <AccountCircle className="w-10 h-10" />
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col items-start ">
          <h2 className="text-2xl font-semibold mb-2">{quiz.title} Quiz</h2>
          <p className="text-sm mb-4 mt-2 font-nunito">
            GET {quiz.points} Points
          </p>
        </div>
        <div className="flex items-center gap-1 justify-end">
          <Star className="text-yellow-400 items-center" />
          <span className="text-lg font-semibold font-nunito">
            {quiz.rating}
          </span>
        </div>
      </div>
    </div>
  );
};
export default Header;
