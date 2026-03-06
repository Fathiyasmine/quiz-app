import React from "react";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";

const HistoryContent = () => {
  return (
    <div className="bg-white -mt-10 rounded-t-3xl shadow-lg p-6 flex flex-col min-h-screen">
      <div className="flex justify-center flex-row  items-center pt-6 space-x-4">
        <div className="bg-gray-100 border border-orange-100 rounded-2xl p-2 flex flex-col items-center gap-1">
          <span className="text-m font-medium text-gray-400">All Topics</span>
        </div>
        <div className="bg-gray-100 border border-orange-100 rounded-2xl p-2 flex flex-col items-center gap-1">
          <span className="text-m font-medium text-gray-400">Mathematic</span>
        </div>
        <div className="bg-gray-100 border border-orange-100 rounded-2xl p-2 flex flex-col items-center gap-1">
          <span className="text-m font-medium text-gray-400">Science</span>
        </div>
      </div>
      <div className="flex justify-center flex-col  items-center pt-6 space-y-4">
        <div className="bg-gray-100 border border-gray-100 rounded-2xl p-2 flex flex-row items-center justify-between w-full">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-linear-to-br from-orange-500 to-red-400 shadow-md">
            <LocalFireDepartmentIcon sx={{ color: "white", fontSize: 28 }} />
          </div>

          <div className="flex flex-col">
            <span className="text-m font-medium text-black">UI UX DESIGN</span>
            <span className="text-m font-medium text-gray-400">
              Feb 20.2026 | 20 mint
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-m font-medium text-black">90 / 100</span>
            <span className="text-m font-medium text-gray-400">Passed</span>
          </div>
        </div>
        <div className="bg-gray-100 border border-gray-100 rounded-2xl p-2 flex flex-row items-center justify-between w-full">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-linear-to-br from-orange-500 to-red-400 shadow-md">
            <LocalFireDepartmentIcon sx={{ color: "white", fontSize: 28 }} />
          </div>
          <div className="flex flex-col">
            <span className="text-m font-medium text-black">UI UX DESIGN</span>
            <span className="text-m font-medium text-gray-400">
              Feb 20.2026 | 20 mint
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-m font-medium text-black">90 / 100</span>
            <span className="text-m font-medium text-gray-400">Passed</span>
          </div>
        </div>
        <div className="bg-gray-100 border border-gray-100 rounded-2xl p-2 flex flex-row items-center justify-between w-full">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-linear-to-br from-orange-500 to-red-400 shadow-md">
            <LocalFireDepartmentIcon sx={{ color: "white", fontSize: 28 }} />
          </div>
          <div className="flex flex-col">
            <span className="text-m font-medium text-black">Science Quiz</span>
            <span className="text-m font-medium text-gray-400">
              Feb 20.2026 | 20 mint
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-m font-medium text-black">90 / 100</span>
            <span className="text-m font-medium text-gray-400">Passed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryContent;
