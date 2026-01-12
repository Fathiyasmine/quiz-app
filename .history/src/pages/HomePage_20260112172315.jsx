
import { useState } from "react";
import HeaderHomePage from "../components/home/Header";
import QuizCard from "../components/home/QuizCard";
import { quizzes } from "../data/quizData";

const HomePage = () => {
  //au debut, tous les quiz sont affichés
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
        <Categories />
      {/* Start Quiz Button - Centré */}
      <div className="flex justify-center px-4 pb-6">
        <button className="w-full max-w-md bg-gradient-to-r from-[#3550DC] to-[#27E9F7] text-white py-4 rounded-xl font-semibold hover:shadow-lg">
          Start Quiz
        </button>
      <div className="p-4">
        {filteredQuizzes.length > 0 ? (
          filteredQuizzes.map((quiz) => <QuizCard key={quiz.id} quiz={quiz} />)
        ) : (
          <p className="text-center text-gray-500 mt-8">
            Aucun quiz trouvé pour cette recherche
          </p>
        )}
      </div>
       <QuizList />
        <CurrentQuiz />
    </div>
  );
};

export default HomePage;




      