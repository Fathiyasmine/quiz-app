import { useState } from "react";
import HeaderHomePage from "../components/home/Header";
import Categories from "../components/home/Categories";
import CurrentQuiz from "../components/home/CurrentQuiz";
import { quizzes } from "../data/quizData";
import QuizList from "../components/home/QuizList";
import { Search } from "@mui/icons-material";

const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState("Popular");
  const [filteredQuizzes, setFilteredQuizzes] = useState(quizzes);
  const [catSearch, setCatSearch] = useState("");
  // Gérer la recherche
  const handleSearch = (searchValue) => {
    if (searchValue.trim() === "") {
      // Si la recherche est vide, afficher tous les quiz
      setFilteredQuizzes(quizzes);
    } else {
      // Filtrer les quiz par titre et description
      const filtered = quizzes.filter((quiz) =>
        quiz.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredQuizzes(filtered);
    }
    if (searchValue.trim() === quizzes.cate) {
      setCatSearch(quizzes);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header avec recherche */}
      <HeaderHomePage onSearchChange={handleSearch} />
      {/* Categories */}
      <Categories activeCategory={activeCategory} />
      {/* Liste des Quiz Cards */}
      <QuizList filteredQuizzes={filteredQuizzes} />
      <CurrentQuiz />
      {/* Start Quiz Button */}
      <div className="flex justify-center px-4 pb-6">
        <button className="w-full max-w-md bg-gradient-to-r from-[#3550DC] to-[#27E9F7] text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-shadow">
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default HomePage;
