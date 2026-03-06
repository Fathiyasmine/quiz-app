import QuizIcon from "@mui/icons-material/Quiz";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
const ResultsContent = () => {
  return (
    <div className="p-6 flex flex-row flex-wrap items-center gap-6 justify-center">
      <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 flex items-center gap-1 w-1/3">
        <QuizIcon sx={{ color: "#4A90E2", fontSize: 28 }} />
        <div className=" flex flex-col">
          <span className="text-2xl font-extrabold text-black-500">20</span>
          <span className="text-xs text-gray-500 font-medium uppercase">
            Questions
          </span>
        </div>
      </div>
      <div className="bg-green-50 border border-green-100 rounded-2xl p-4 flex items-center gap-1 w-1/3">
        <CheckIcon sx={{ color: "#4A90E2", fontSize: 28 }} />
        <div className=" flex flex-col">
          <span className="text-2xl font-extrabold text-black-500">17</span>
          <span className="text-xs text-gray-500 font-medium uppercase">
            Correct
          </span>
        </div>
      </div>
      <div className="bg-red-50 border border-red-100 rounded-2xl p-4 flex flex-col items-center gap-1 w-1/3">
        <ClearIcon sx={{ color: "#4A90E2", fontSize: 28 }} />
        <div className=" flex flex-col">
          <span className="text-2xl font-extrabold text-black-500">03</span>
          <span className="text-xs text-gray-500 font-medium uppercase">
            Incorrect
          </span>
        </div>
      </div>
      <div className="bg-purple-50 border border-purple-100 rounded-2xl p-4 flex flex-col items-center gap-1 w-1/3">
        <span className="text-2xl font-extrabold text-black-500">12:45</span>
        <span className="text-xs text-gray-500 font-medium uppercase">
          Time Spent
        </span>
      </div>
    </div>
  );
};
export default ResultsContent;
