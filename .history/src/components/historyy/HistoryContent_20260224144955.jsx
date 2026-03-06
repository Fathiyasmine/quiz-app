import React from "react";
const HistoryContent = () => {
  return (
    <div className="bg-linear-to-br from-blue-500 to-blue-600 text-white p-6 rounded-b-3xl pb-20">
      <div className="flex justify-center flex-row items-center pt-6">
        <div className="bg-orange-50 border border-orange-100 rounded-2xl p-4 flex flex-col items-center gap-1">
          <span className="text-2xl font-extrabold text-black">All Topics</span>
        </div>
        <div className="bg-orange-50 border border-orange-100 rounded-2xl p-4 flex flex-col items-center gap-1">
          <span className="text-2xl font-extrabold text-black">Mathematic</span>
        </div>
        <div className="bg-orange-50 border border-orange-100 rounded-2xl p-4 flex flex-col items-center gap-1">
          <span className="text-2xl font-extrabold text-black">Science</span>
        </div>
      </div>
    </div>
  );
};

export default HistoryContent;
