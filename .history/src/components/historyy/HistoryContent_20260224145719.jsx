import React from "react";
const HistoryContent = () => {
  return (
    <div className="bg-linear-to-br from-blue-500 to-blue-600 text-white p-6 rounded-b-3xl pb-20">
      <div className="flex justify-center flex-row  items-center pt-6 gap-4">
        <div className="bg-gray-100 border border-orange-100 rounded-2xl p-2 flex flex-col items-center gap-1">
          <span className="text-m font-medium text-gray-400">All Topics</span>
        </div>
        <div className="bg-orange-50 border border-orange-100 rounded-2xl p-2 flex flex-col items-center gap-1">
          <span className="text-m font-medium text-gray-400">Mathematic</span>
        </div>
        <div className="bg-orange-50 border border-orange-100 rounded-2xl p-2 flex flex-col items-center gap-1">
          <span className="text-m font-medium text-gray-400">Science</span>
        </div>
      </div>
    </div>
  );
};

export default HistoryContent;
