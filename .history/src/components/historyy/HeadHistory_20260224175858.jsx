import Face3Icon from "@mui/icons-material/Face3";
import { ArrowBack } from "@mui/icons-material";
import { Navigate, useNavigate } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";
const HeadHistory = () => {
  const navigate = useNavigate("/");
  return (
    <div className="bg-linear-to-br from-blue-500 to-blue-600 text-white p-6 rounded-b-3xl pb-20">
      <div className="flex justify-between items-center">
        <ArrowBack
          className="cursor-pointer"
          onClick={() => navigate("/pro")}
        />
        <h2 className="text-2xl font-bold mb-4 font-ubuntu">Quiz History</h2>
        <SettingsIcon className="cursor-pointer" />
      </div>
      <div className="bg-gray-50 border border-gray-100 rounded-2xl p-2 flex flex-col items-start justify-between w-full">
        <div className="text-md mb-1 font-dm rounded-2xl bg-gray-50 px-3 py-1 text-gray-600">
          TOTAL QUIZZES
        </div>
        <div>
          <span className=" text-gray-600">48</span>
        </div>
        <div>
          <p>
            AVG.ACCURACY <span>85%</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeadHistory;
