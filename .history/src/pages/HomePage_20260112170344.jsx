import { useState } from "react";
import HeaderHomePage from "./HeaderHomePage";
import QuizCard from "./QuizCard";
import { quizzes } from "../../data/quizData";

const HomePage = () => {
  const [filteredQuizzes, setFilteredQuizzes] = useState(quizzes);

  const handleSearch = (searchValue) => {
    if (searchValue.trim() === "") {
      // Si la recherche est vide, afficher tous les quiz
      setFilteredQuizzes(quizzes);
    } else {
      // Filtrer les quiz par titre
      const filtered = quizzes.filter((quiz) =>
        quiz.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredQuizzes(filtered);
    }
  };

  return (
    <div>
      <HeaderHomePage onSearchChange={handleSearch} />

      <div className="p-4">
        {filteredQuizzes.length > 0 ? (
          filteredQuizzes.map((quiz) => <QuizCard key={quiz.id} quiz={quiz} />)
        ) : (
          <p className="text-center text-gray-500 mt-8">
            Aucun quiz trouvé pour cette recherche
          </p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
