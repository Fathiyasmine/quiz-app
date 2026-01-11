import HeaderHomePage from "../components/Homepagecomponents/HeaderHomePage";
import Categories from "../components/Homepagecomponents/Categories";
import QuizList from "../components/Homepagecomponents/QuizList";
import ContinueQuiz from "../components/Homepagecomponents/ContinueQuiz";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <HeaderHomePage />;
      <Categories />
      <QuizList />
      <ContinueQuiz />
      {/* Start Quiz Button */}
      <button className="w-full bg-blue-500 text-white py-4 rounded-xl mt-6 font-semibold">
        Start Quiz
      </button>
    </div>
  );
};

export default HomePage;
