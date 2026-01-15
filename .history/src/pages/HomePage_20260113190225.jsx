import { useState } from "react";
import HeaderHomePage from "../components/home/Header";
import Categories from "../components/home/Categories";
import CurrentQuiz from "../components/home/CurrentQuiz";
import { quizzes } from "../data/quizData";
import QuizList from "../components/home/QuizList";

const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState("Popular");
  const [filteredQuizzes, setFilteredQuizzes] = useState(quizzes);
  const [searchValue, setSearchValue] = useState("");

  // Fonction pour filtrer les quiz
  const filterQuizzes = (search, category) => {
    let filtered = quizzes;

    // Filtrer par recherche (titre)
    if (search.trim() !== "") {
      filtered = filtered.filter((quiz) =>
        quiz.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Filtrer par catégorie (sauf "Popular" qui affiche tout)
    if (category !== "Popular") {
      filtered = filtered.filter((quiz) => quiz.category.includes(category));
    }

    setFilteredQuizzes(filtered);
  };

  // Gérer la recherche
  const handleSearch = (search) => {
    setSearchValue(search);
    filterQuizzes(search, activeCategory);
  };

  // Gérer le changement de catégorie
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    filterQuizzes(searchValue, category);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-blue-600">
      {/* Header avec recherche */}
      <HeaderHomePage onSearchChange={handleSearch} />
      {/* Categories */}
      <Categories
        activeCategory={activeCategory}
        setActiveCategory={handleCategoryChange}
      />
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
