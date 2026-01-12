import { AccessTime, Article } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import { quizzes } from "../../data/quizData";

const ContinueQuiz = () => {
  const quiz = quizzes[0];
  return (
    <div className="p-4">
      <h3 className="font-semibold text-lg mb-3">Continue Quiz</h3>
      <div className="bg-white rounded-lg p-4 mb-4 border-2 border-transparent hover:shadow-lg hover:border-blue-400 transition">
        {/* Container horizontal : Box grise à gauche, contenu à droite */}
        <div className="flex gap-4">
          {/* Box grise à gauche */}
          <div className="w-24 h-24 bg-gray-300 rounded flex-shrink-0"></div>

          {/* Contenu à droite (vertical) */}
          <div className="flex flex-col justify-between flex-1">
            {/* Top section : Titre + infos + icône corbeille */}
            <div className="flex justify-between items-start mb-3">
              {/* Infos du quiz */}
              <div className="flex flex-col gap-2 flex-1">
                <h3 className="bg-gradient-to-r from-[#3550DC] to-[#27E9F7] bg-clip-text text-transparent font-semibold text-lg">
                  3D Animation
                </h3>
                <div className="flex items-center gap-1 text-[#999999] text-sm">
                  <Article fontSize="small" />
                  <span>8/10 Questions</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-[#999999]">
                  <AccessTime fontSize="small" />
                  <span>35 min</span>
                </div>
              </div>

              {/* Icône Corbeille */}
              <button className="text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full p-2 transition">
                <DeleteIcon fontSize="small" />
              </button>
            </div>

            {/* Bouton Continue en bas */}
            <div className="flex justify-center">
              <button className="px-6 bg-[#333333] text-white py-3 rounded-xl font-semibold hover:bg-[#444444] transition">
                Continue Quiz
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContinueQuiz;
