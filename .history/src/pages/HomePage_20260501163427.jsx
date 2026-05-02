import { useState } from "react";
import HeaderHomePage from "../components/home/Header";
import Categories from "../components/home/Categories";
import CurrentQuiz from "../components/home/CurrentQuiz";
import { quizzes } from "../data/quizData";
import QuizList from "../components/home/QuizList";
import { useQuiz } from "../context/QuizContext";

const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState("Computer");
  const [searchValue, setSearchValue] = useState("");
  const { loadProgress } = useQuiz();

  // Vérifie si un quiz est en cours
  const hasSavedProgress = !!loadProgress();

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

      <div className="p-4 md:p-8">
        {/* Layout : 1 col si pas de quiz en cours, 2 cols sinon */}
        <div
          className={`grid grid-cols-1 gap-6 ${hasSavedProgress ? "md:grid-cols-3" : ""}`}
        >
          {/* Colonne principale — catégories + liste */}
          <div
            className={`bg-white rounded-3xl shadow-sm p-4 md:p-6 ${hasSavedProgress ? "md:col-span-2" : ""}`}
          >
            <Categories
              activeCategory={activeCategory}
              setActiveCategory={(c) => setActiveCategory(c)}
            />
            <QuizList filteredQuizzes={filteredQuizzes} />
          </div>

          {/* Colonne droite — quiz en cours (affichée seulement si nécessaire) */}
          {hasSavedProgress && (
            <div className="bg-white rounded-3xl shadow-sm p-4 md:p-6 h-fit">
              <CurrentQuiz />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
