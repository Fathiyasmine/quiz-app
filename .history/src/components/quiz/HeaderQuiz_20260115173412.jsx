import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { quizzes } from "../../data/quizData";
import { useParams } from "react-router-dom";

const HeaderQuiz = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const quiz = quizzes.find((q) => q.id === parseInt(id));
  if (!quiz) return <div>Quiz not found</div>;

  return (
    /* Header */
    <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 pb-8">
      <div className="flex items-center justify-start mb-4">
        <ArrowBack
          className="cursor-pointer"
          onClick={() => navigate(`/quiz/${id}`)}
        />
        <h1 className="text-lg font-semibold ">UI UX Design Quiz</h1>
        <div className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
          16:35
        </div>
      </div>
    </div>
  );
};
export default HeaderQuiz;
