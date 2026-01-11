import HeaderHomePage from "../components/Home/HeaderHomePage";
import Categories from "../components/Home/Categories";
import QuizList from "../components/Home/QuizList";
import CurrentQuiz from "../components/Home/CurrentQuiz";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <HeaderHomePage />;
      <Categories />
      <QuizList />
      <CurrentQuiz />
      {/* Start Quiz Button */}
      <button className="w-full bg-blue-500 text-white py-4 rounded-xl mt-6 font-semibold">
        Start Quiz
      </button>
    </div>
  );
};

export default HomePage;
