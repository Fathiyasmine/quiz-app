import HeaderHomePage from "../components/home/Header";
import Categories from "../components/home/Categories";
import QuizList from "../components/home/QuizList";
import CurrentQuiz from "../components/home/CurrentQuiz";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <HeaderHomePage />

      <div className="p-4 bg-gray-100 rounded-t-3xl -mt-6 mb-4">
        <Categories />
        <QuizList />
        <CurrentQuiz />
      </div>

      {/* Start Quiz Button - Centré */}
      <div className="flex justify-center px-4 pb-6">
        <button className="w-full max-w-md bg-gradient-to-r from-[#3550DC] to-[#27E9F7] text-white py-4 rounded-xl font-semibold hover:shadow-lg">
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default HomePage;
