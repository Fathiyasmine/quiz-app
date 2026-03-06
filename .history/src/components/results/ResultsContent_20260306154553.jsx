import QuizIcon from "@mui/icons-material/Quiz";
import CheckIcon from "@mui/icons-material/Check";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

const ResultsContent = () => {
  return (
    <div className="p-6 grid grid-cols-2 gap-4 bg-white rounded-t-3xl shadow-lg">
      <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 flex items-center gap-2">
        <QuizIcon sx={{ color: "#4A90E2", fontSize: 28 }} />
        <div className="flex flex-col">
          <span className="text-2xl font-extrabold text-black">20</span>
          <span className="text-xs text-gray-500 font-medium uppercase">Questions</span>
        </div>
      </div>

      <div className="bg-green-50 border border-green-100 rounded-2xl p-4 flex items-center gap-2">
        <CheckIcon sx={{ color: "#72bd72", fontSize: 28 }} />
        <div className="flex flex-col">
          <span className="text-2xl font-extrabold text-black">17</span>
          <span className="text-xs text-gray-500 font-medium uppercase">Correct</span>
        </div>
      </div>

      <div className="bg-red-50 border border-red-100 rounded-2xl p-4 flex items-center gap-2">
        <DisabledByDefaultIcon sx={{ color: "#ea7474", fontSize: 28 }} />
        <div className="flex flex-col">
          <span className="text-2xl font-extrabold text-black">03</span>
          <span className="text-xs text-gray-500 font-medium uppercase">Incorrect</span>
        </div>
      </div>

      <div className="bg-purple-50 border border-purple-100 rounded-2xl p-4 flex items-center gap-2">
        <AccessAlarmIcon sx={{ color: "#b77db7", fontSize: 28 }} />
        <div className="flex flex-col">
          <span className="text-2xl font-extrabold text-black">12:45</span>
          <span className="text-xs text-gray-500 font-medium uppercase">Time Spent</span>
        </div>
      </div>
    </div>
  );
};

export default ResultsContent;