import { useState } from "react";
import HeaderHomePage from "../components/home/Header";
import Categories from "../components/home/Categories";
import CurrentQuiz from "../components/home/CurrentQuiz";
import { quizzes } from "../data/quizData";
import QuizList from "../components/home/QuizList";

const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState("Computer");
  const [searchValue, setSearchValue] = useState("");

  const getFilteredQuizzes = () => {
    let filtered = quizzes;
    if (activeCategory !== "Popular") {
      filtered = filtered.filter((quiz) =>
        quiz.category.includes(activeCategory),
      );
    }
    if (searchValue.trim() !== "") {
      filtered = filtered.filter((quiz) =>
        quiz.title.toLowerCase().includes(searchValue.toLowerCase()),
      );
    }
    return filtered;
  };

  const filteredQuizzes = getFilteredQuizzes();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header pleine largeur */}
      <HeaderHomePage
        onSearchChange={(v) => setSearchValue(v)}
        searchValue={searchValue}
      />

      {/* Contenu — 1 colonne mobile, 2 colonnes desktop */}
      <div className="p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Colonne gauche — catégories + quiz */}
          <div className="md:col-span-2 bg-white rounded-3xl shadow-sm p-6">
            <Categories
              activeCategory={activeCategory}
              setActiveCategory={(c) => setActiveCategory(c)}
            />
            <QuizList filteredQuizzes={filteredQuizzes} />
          </div>

          {/* Colonne droite — quiz en cours */}
          <div className="bg-white rounded-3xl shadow-sm p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4">En cours</h2>
            <CurrentQuiz />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
