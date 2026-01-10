import { useState } from "react";
import { Search, Refresh, Menu, AccountCircle } from "@mui/icons-material";
import Header from "../components/Header";
import QuizCard from "../components/QuizCard";
import { quizzes } from "../data/quizData";
import { AccessTime, Article } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import Chip from "@mui/material/Chip";

import quiz from "../components/QuizCard";
const handleClick = () => {
  console.info("You clicked the Chip.");
};

const handleDelete = () => {
  console.info("You clicked the delete icon.");
};

const HomePage = () => {
  //etat de la categorie active
  const [activeCategory, setActiveCategory] = useState("Computer");
  //liste des categories:
  const categories = ["Popular", "Science", "Mathematic", "Computer"];

  return (
    <div className="min-h-screen bg-gray-100">
      {/*la page commence par le  componenent header */}
      <Header />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-b-3xl">
        <div className="flex items-center justify-between mb-4">
          <Menu className="cursor-pointer" />
          <AccountCircle className="w-10 h-10" />
        </div>

        <h2 className="text-sm mb-1">Hello, Mohamed</h2>
        <h1 className="text-2xl font-bold mb-4">Let's test your knowledge</h1>

        {/* Search Bar */}
        <div className="bg-white rounded-full flex items-center px-4 py-3 mb-4">
          {/*icon de recherche*/}
          <Search className="text-gray-400 mr-2" />
          {/*input de recherche*/}
          <input
            type="text"
            placeholder="Search"
            className="flex-1 outline-none text-gray-800"
          />
          {/*icon de refresh*/}
          <Refresh className="text-blue-500 cursor-pointer" />
        </div>
      </div>

      {/* Categories */}
      <div className="px-6 py-4">
        <div className="flex gap-4 mb-4 overflow-x-auto">
          {/*creation de button pour chaque categorie */}
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
                activeCategory === cat
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Quiz List : creation de quizcard pour chaque quiz*/}
        {quizzes.map((quiz) => (
          <QuizCard key={quiz.id} quiz={quiz} />
        ))}

        {/* Continue Quiz Section */}
        <div className="mt-6">
          <h3 className="font-semibold text-lg mb-3">Continue Quiz</h3>
          <div>
            <h3>3D Animation</h3>
            <span className="flex items-center gap-1">
              <Article fontSize="small" />
              10 Questions
            </span>{" "}
            <Chip
              onClick={handleClick}
              onDelete={handleDelete}
              deleteIcon={<DeleteIcon />}
              variant="outlined"
            />
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <AccessTime fontSize="small" />
              {Math.floor(quiz.duration / 60)} hour {quiz.duration % 60} min
            </div>
          </div>
          <button className="flex-1 bg-gray border-2 border-blue-500 text-blue-500 py-3 rounded-xl font-semibold text-sm p-4">
            Continue Quiz
          </button>{" "}
        </div>

        {/* Start Quiz Button */}
        <button className="w-full bg-blue-500 text-white py-4 rounded-xl mt-6 font-semibold">
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default HomePage;
