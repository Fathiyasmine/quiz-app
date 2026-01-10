import { useState } from "react";
import { Search, Refresh } from "@mui/icons-material";
import Header from "../components/Header";
import QuizCard from "../components/QuizCard";
import { quizzes } from "../data/quizData";

const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState("Computer");
  const categories = ["Popular", "Science", "Mathematic", "Computer"];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-b-3xl">
        <div className="flex items-center justify-between mb-4">
          <Menu className="cursor-pointer" />
          <AccountCircle className="w-10 h-10" />
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
        <div className="flex gap-4 mb-4 overflow-x-auto">
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

        {/* Quiz List */}
        {quizzes.map((quiz) => (
          <QuizCard key={quiz.id} quiz={quiz} />
        ))}

        {/* Continue Quiz Section */}
        <div className="mt-6">
          <h3 className="font-semibold text-lg mb-3">Continue Quiz</h3>
          {/* Add continue quiz card here if needed */}
        </div>

        {/* Start Quiz Button */}
      </div>
    </div>
  );
};

export default HomePage;
