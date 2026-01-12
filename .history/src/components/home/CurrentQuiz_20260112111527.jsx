import { AccessTime, Article } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import { quizzes } from "../../data/quizData";

const ContinueQuiz = () => {
  const quiz = quizzes[0];

  return (
    <div className="bg-white rounded-lg p-4 mb-4 cursor-pointer border-2 border-transparent hover:shadow-lg hover:border-blue-400 transition">
      <h3 className="font-semibold text-lg mb-3">Continue Quiz</h3>

      {/* Flex container pour séparer gauche/droite */}
      <div className="flex justify-between items-start mb-4">
        {/* GAUCHE : Infos du quiz */}
        <div className="flex flex-col gap-2 flex-1 mr-4">
          <h3 className="text-blue-500 font-semibold text-lg">3D Animation</h3>

          <div className="flex items-center gap-1 text-gray-600 text-sm">
            <Article fontSize="small" />
          </div>

          <div className="flex items-center gap-1 text-sm text-gray-600">
            <AccessTime fontSize="small" />
            <span>35 min</span>
          </div>
        </div>

        {/* DROITE : Icône Corbeille */}
        <button className="text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full p-2 transition">
          <DeleteIcon fontSize="small" />
        </button>
      </div>

      {/* Bouton Continue */}
      <button className="w-full bg-white border-2 border-blue-500 text-blue-500 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">
        Continue Quiz
      </button>
    </div>
  );
};

export default ContinueQuiz;
