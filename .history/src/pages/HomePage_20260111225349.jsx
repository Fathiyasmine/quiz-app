import HeaderHomePage from "../components/home/Header";
import Categories from "../components/home/Categories";
import QuizList from "../components/home/QuizList";
import CurrentQuiz from "../components/home/CurrentQuiz";
const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 ">
      <HeaderHomePage />
      <div className="p-4 bg-gray-100 rounded-t-3xl -mt-6 mb-4">
        <Categories />
        <QuizList />
        <CurrentQuiz />
      </div>
      {/* Start Quiz Button */}
      <button className=" flex justify-center bg-blue-500 text-white py-4 rounded-xl mt-6 font-semibold">
        Start Quiz
      </button>
    </div>
  );
};

export default HomePage;
