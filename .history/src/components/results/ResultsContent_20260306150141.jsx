const ResultsContent = () => {
  return (
    <div>
      <div className="bg-orange-50 border border-orange-100 rounded-2xl p-4 flex flex-col items-center gap-1">
        <span className="text-2xl font-extrabold text-orange-500">20</span>
        <span className="text-xs text-gray-500 font-medium uppercase">
          Questions
        </span>
      </div>
      <div className="bg-orange-50 border border-orange-100 rounded-2xl p-4 flex flex-col items-center gap-1">
        <span className="text-2xl font-extrabold text-orange-500">17</span>
        <span className="text-xs text-gray-500 font-medium uppercase">
          Correct
        </span>
      </div>
      <div className="bg-orange-50 border border-orange-100 rounded-2xl p-4 flex flex-col items-center gap-1">
        <span className="text-2xl font-extrabold text-orange-500">03</span>
        <span className="text-xs text-gray-500 font-medium uppercase">
          Incorrect
        </span>
      </div>
      <div className="bg-orange-50 border border-orange-100 rounded-2xl p-4 flex flex-col items-center gap-1">
        <span className="text-2xl font-extrabold text-orange-500">12:45</span>
        <span className="text-xs text-gray-500 font-medium uppercase">
          Time Spent
        </span>
      </div>
    </div>
  );
};
export default ResultsContent;
