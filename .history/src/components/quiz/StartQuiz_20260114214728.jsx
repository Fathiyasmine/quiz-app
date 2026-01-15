import { AccessTime, Article, StarOutline } from "@mui/icons-material";

const StartQuiz = () => {
  return (
    <div className="bg-white min-h-[600px] -mt-24 rounded-3xl p-6 pb-24 relative">
      <div className="h-1 bg-blue-600 w-16 rounded-md"></div>
       <div className="min-h-screen bg-gray-100">
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 pb-8">
        <div className="flex items-center justify-between mb-4">
          <ArrowBack 
            className="cursor-pointer" 
            onClick={() => navigate(`/quiz/${id}`)}
          />
          <h1 className="text-lg font-semibold">UI UX Design Quiz</h1>
          <div className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
            16:35
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartQuiz;
