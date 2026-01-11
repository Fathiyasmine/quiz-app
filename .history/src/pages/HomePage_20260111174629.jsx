import { useState } from "react";
import QuizCard from "../components/QuizCard";
import { quizzes } from "../data/quizData";
import { useNavigate } from "react-router-dom";
import HeaderHomePage from "../components/HeaderHomePage";
import Categories from "../components/Categories";
import QuizList from "../components/QuizList";
import ContinueQuiz from "../components/ContinueQuiz";

const HomePage = () => {
  const navigate = useNavigate();
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
