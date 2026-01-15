import { useState } from "react";
import HeaderHomePage from "../components/home/Header";
import Categories from "../components/home/Categories";
import QuizCard from "../components/home/QuizCard";
import CurrentQuiz from "../components/home/CurrentQuiz";
import { quizzes } from "../data/quizData";
import SearchOffIcon from "@mui/icons-material/SearchOff";

const HomePage = () => {
  // Au début, tous les quiz sont affichés
  const [filteredQuizzes, setFilteredQuizzes] = useState(quizzes);
  const [activeCategory, setActiveCategory] = useState("Popular");

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
  };
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header avec recherche */}
      <HeaderHomePage onSearchChange={handleSearch} />
      {/* Categories */}
      <Categories activeCategory={activeCategory} />
      {/* Liste des Quiz Cards */}
      <div className="p-4">
        {filteredQuizzes.length > 0 ? (
          <div className="space-y-4">
            {filteredQuizzes.map((quiz) => (
              <QuizCard key={quiz.id} quiz={quiz} />
            ))}
          </div>
        ) : (
          <div>
            <SearchOffIcon
              className="mx-auto text-gray-400"
              style={{ fontSize: 60 }}
            />
            <p className="text-center text-gray-500 mt-8">
              Aucun quiz trouvé pour cette recherche
            </p>
          </div>
        )}
      </div>
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
