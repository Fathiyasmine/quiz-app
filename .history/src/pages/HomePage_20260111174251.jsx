import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Chip from "@mui/material/Chip";
import QuizCard from "../components/QuizCard";
import { quizzes } from "../data/quizData";
import quiz from "../components/QuizCard";
import { useNavigate } from "react-router-dom";
import HeaderHomePage from "../components/HeaderHomePage";
import Categories from "../components/Categories";
import  QuizList from "../components/QuizList";

{
  /*code du Chip (corbeille) */
}
const handleClick = () => {
  console.info("You clicked the Chip.");
};

const handleDelete = () => {
  console.info("You clicked the delete icon.");
};
{
  /*==code du Chip (corbeille)==*/
}

const HomePage = () => {
  const navigate = useNavigate();
  <HeaderHomePage />;
  return (
    <div
      className="min-h-screen bg-gray-100"
      onClick={() => navigate(`/quiz/${quiz.id}`)}
    >
  <Categories />
       <QuizList />
      
        {/* Start Quiz Button */}
        <button className="w-full bg-blue-500 text-white py-4 rounded-xl mt-6 font-semibold">
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default HomePage;
