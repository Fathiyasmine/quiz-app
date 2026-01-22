import { useState } from "react";
import HeaderHomePage from "../components/home/Header";
import Categories from "../components/home/Categories";
import CurrentQuiz from "../components/home/CurrentQuiz";
import { quizzes } from "../data/quizData";
import QuizList from "../components/home/QuizList";

const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState("Computer");
  const [searchValue, setSearchValue] = useState("");

  //on commence avec tous les quiz
  const getFilteredQuizzes = () => {
    let filtered = quizzes;

    //1. si la catégorie active n'est pas "Popular", filtrer par catégorie
    if (activeCategory !== "Popular") {
      filtered = filtered.filter((quiz) =>
        quiz.category.includes(activeCategory),
      );
    }
    // 2. Filtrer par recherche
    if (searchValue.trim() !== "") {
      filtered = filtered.filter((quiz) =>
        quiz.title.toLowerCase().includes(searchValue.toLowerCase()),
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
      {/* Header*/}
      <div className="pb-24">
        <HeaderHomePage
          onSearchChange={handleSearch}
          searchValue={searchValue}
        />
      </div>
      <div className="-mt-28 pb-8">
        <div className="bg-gray-50 rounded-3xl shadow-xl min-h-screen">
          <div className="flex justify-center mb-2">
            <div className="h-1 bg-blue-600 w-16 rounded-md mt-3"></div>
          </div>
          <Categories
            activeCategory={activeCategory}
            setActiveCategory={handleCategoryChange}
          />
          <QuizList filteredQuizzes={filteredQuizzes} />
          <CurrentQuiz />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
