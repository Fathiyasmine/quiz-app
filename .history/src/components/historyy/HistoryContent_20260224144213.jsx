const HistoryContent = () => {
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
      <div className="flex justify-center flex-col items-center pt-6">
        <div className="text-md mb-1 font-dm rounded-2xl bg-gray-50 px-3 py-1 text-gray-600">
          TOTAL QUIZZES <span>48</span>
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
export default HistoryContent;
