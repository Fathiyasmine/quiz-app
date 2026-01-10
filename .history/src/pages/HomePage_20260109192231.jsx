import { useState } from "react";
import { Search, Refresh, Menu, AccountCircle } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { quizzes } from "../data/quizData";

const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState("Computer");
  const categories = ["Popular", "Science", "Mathematic", "Computer"];
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-gray-800 text-white p-4 flex items-center justify-between">
        <Menu className="cursor-pointer" />
        <h1 className="text-lg font-medium">Quiz App Design</h1>
        <div className="w-6" />
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-b-3xl">
        <div className="flex items-center justify-between mb-4">
          <Menu className="cursor-pointer" />
          <div className="w-10 h-10 bg-white bg-opacity-30 rounded-full flex items-center justify-center">
            <AccountCircle />
          </div>
        </div>

        <h2 className="text-sm mb-1">Hello, James</h2>
        <h1 className="text-2xl font-bold mb-4">Let's test your knowledge</h1>

        {/* Search Bar */}
        <div className="bg-white rounded-full flex items-center px-4 py-3 mb-4">
          <Search className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search"
            className="flex-1 outline-none text-gray-800"
          />
          <Refresh className="text-blue-500 cursor-pointer" />
        </div>
      </div>

      {/* Categories */}
      <div className="px-6 py-4">
        <div className="flex gap-4 mb-4 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
                activeCategory === cat
                  ? "text-blue-500 font-semibold"
                  : "text-gray-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Quiz List */}
        <div className="space-y-4">
          {quizzes.map((quiz) => (
            <div
              key={quiz.id}
              onClick={() => navigate(`/quiz/${quiz.id}`)}
              className="bg-white rounded-lg border-2 border-blue-400 p-4 cursor-pointer hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 bg-gray-300 rounded flex-shrink-0"></div>

                <div className="flex-1">
                  <h3 className="text-blue-500 font-semibold text-lg mb-2">
                    {quiz.title}
                  </h3>

                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-1">
                    <span>📄 {quiz.totalQuestions} Questions</span>
                    <span>⭐ {quiz.rating}</span>
                  </div>

                  <div className="text-sm text-gray-600">
                    ⏰ {Math.floor(quiz.duration / 60)} hour{" "}
                    {quiz.duration % 60} min
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Start Quiz Button */}
        <button
          onClick={() => navigate("/quiz/1")}
          className="w-full bg-blue-500 text-white py-4 rounded-xl mt-6 font-semibold hover:bg-blue-600 transition"
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default HomePage;
