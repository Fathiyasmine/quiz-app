import { useState } from "react";
import HeaderHomePage from "../components/home/Header";
import Categories from "../components/home/Categories";
import CurrentQuiz from "../components/home/CurrentQuiz";
import { quizzes } from "../data/quizData";
import QuizList from "../components/home/QuizList";
import StartQuiz from "../components/layouts/StartQuiz";

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
    <div className="min-h-screen bg-gray-50">
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
      <StartQuiz />
    </div>
  );
};

export default HomePage;
