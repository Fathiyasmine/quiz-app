import { useState } from "react";
import HeaderHomePage from "../components/home/Header";
import Categories from "../components/home/Categories";
import CurrentQuiz from "../components/home/CurrentQuiz";
import { quizzes } from "../data/quizData";
import QuizList from "../components/home/QuizList";

const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState("");
  const [searchValue, setSearchValue] = useState("");

  // On commence avec tous les quiz
  const getFilteredQuizzes = () => {
    let filtered = quizzes;

    // 1. Si la catégorie active n'est pas "Popular", filtrer par catégorie
    if (activeCategory !== "Popular") {
      filtered = filtered.filter((quiz) =>
        quiz.category.includes(activeCategory)
      );
    }

    // 2. Filtrer par recherche
    if (searchValue.trim() !== "") {
      filtered = filtered.filter((quiz) =>
        quiz.title.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    return filtered;
  };

  const filteredQuizzes = getFilteredQuizzes();

  // Gérer la recherche
  const handleSearch = (search) => {
    setSearchValue(search);
  };

  // Gérer le changement de catégorie
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* ═══════════════════════════════════════════════════════
          Header avec fond bleu et padding bottom plus grand
      ═══════════════════════════════════════════════════════ */}
      <div className="pb-20">
        <HeaderHomePage
          onSearchChange={handleSearch}
          searchValue={searchValue}
        />
      </div>

      {/* ═══════════════════════════════════════════════════════
          Container qui REMONTE sur le header avec margin négatif
      ═══════════════════════════════════════════════════════ */}
      <div className="-mt-16">
        {/* Card blanche arrondie qui englobe tout le contenu */}
        <div className="bg-white rounded-3xl shadow-lg p-6 ">
          {/* Categories */}
          <Categories
            activeCategory={activeCategory}
            setActiveCategory={handleCategoryChange}
          />

          {/* Liste des Quiz Cards */}
          <QuizList filteredQuizzes={filteredQuizzes} />

          {/* Continue Quiz Section */}
          <CurrentQuiz />
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════
          Start Quiz Button - En dehors de la card
      ═══════════════════════════════════════════════════════ */}
      <div className="flex justify-center px-4 py-6">
        <button className="w-full max-w-md bg-gradient-to-r from-[#3550DC] to-[#27E9F7] text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-shadow">
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default HomePage;
