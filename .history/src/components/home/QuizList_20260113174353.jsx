import React, { useState } from "react";
import QuizCard from "./QuizCard";
import { quizzes } from "../../data/quizData";
import SearchOffIcon from "@mui/icons-material/SearchOff";

/* Quiz List : creation de quizcard pour chaque quiz*/

const QuizList = () => {
  // Au début, tous les quiz sont affichés
  const [filteredQuizzes, setFilteredQuizzes] = useState(quizzes);
  return (
    <div className="p-4">
      {filteredQuizzes.length > 0 ? (
        <div className="space-y-4">
          {filteredQuizzes.map((quiz) => (
            <QuizCard key={quiz.id} quiz={quiz} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <SearchOffIcon
            className="mx-auto text-gray-400"
            style={{ fontSize: 60 }}
          />
          <p className="text-center text-gray-500 mt-4">
            Aucun quiz trouvé pour cette recherche
          </p>
        </div>
      )}
    </div>
  );
};

export default QuizList;
