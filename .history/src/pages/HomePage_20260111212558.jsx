import HeaderHomePage from "../components/home/Header";
import Categories from "../components/home/Categories";
import QuizList from "../components/home/QuizList";
import CurrentQuiz from "../components/home/CurrentQuiz";
const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 -mt-4">
      <HeaderHomePage />
      <div className="p-4 bg-white rounded-t-3xl mt- mb-4">
        <Categories />
        <QuizList />
        <CurrentQuiz />
      </div>
      {/* Start Quiz Button */}
      <button className="w-full bg-blue-500 text-white py-4 rounded-xl mt-6 font-semibold">
        Start Quiz
      </button>
    </div>
  );
};

export default HomePage;
