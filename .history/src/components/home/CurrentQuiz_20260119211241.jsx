import { AccessTime, Article } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";

const ContinueQuiz = () => {
  return (
    <div className="p-4">
      <h3 className="font-semibold text-lg mb-2">Continue Quiz</h3>
      <div className="bg-white rounded-lg p-6 mb-2  shadow-md border-2 border-transparent hover:shadow-lg hover:border-blue-400 transition relative">
        <div className="flex gap-4">
          <div className="w-36 h-36 bg-gray-300 rounded flex-shrink-0"></div>
          <div className="flex flex-col justify-between flex-1">
            <div className="flex justify-between items-start mb-3">
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
              <div className="absolute top-6 right-1">
                <button className="text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition">
                  <DeleteIcon />
                </button>
              </div>
            </div>
            <div className="flex justify-center align-center">
              <button className="w-auto h-auto px-12 py-2 bg-[#333333] text-white rounded-xl font-semibold hover:bg-[#444444] transition">
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
