import { useState } from "react";
import { AccessTime, Article } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import Chip from "@mui/material/Chip";
import QuizCard from "../components/QuizCard";
import { quizzes } from "../data/quizData";
import quiz from "../components/QuizCard";
import { useNavigate } from "react-router-dom";
import HeaderHomePage from "../components/HeaderHomePage";

{
  /*code du Chip (corbeille) */
}
const handleClick = () => {
  console.info("You clicked the Chip.");
};

const handleDelete = () => {
  console.info("You clicked the delete icon.");
};
{
  /*==code du Chip (corbeille)==*/
}

const HomePage = () => {
  const navigate = useNavigate();
<HeaderHomePage />;
  //etat de la categorie active =>uuseState
  const [activeCategory, setActiveCategory] = useState("Computer");
  //liste des categories:
  const categories = ["Popular", "Science", "Mathematic", "Computer"];

  return (
    <div
      className="min-h-screen bg-gray-100"
      onClick={() => navigate(`/quiz/${quiz.id}`)}
    >
    
        {/* Quiz List : creation de quizcard pour chaque quiz*/}
        {quizzes.map((quiz) => (
          <QuizCard key={quiz.id} quiz={quiz} />
        ))}
        {/* Continue Quiz Section */}
        <div className="bg-white rounded-lg border-2 border-blue-400 p-4 mb-4 cursor-pointer hover:shadow-lg transition">
          <h3 className="font-semibold text-lg mb-3">Continue Quiz</h3>
          <div>
            <h3 className="text-blue-500 font-semibold">3D Animation</h3>
            <span className="flex items-center gap-1 text-gray-400 text-sm">
              <Article fontSize="small" />
              10 Questions
            </span>{" "}
            <Chip
              onClick={handleClick}
              onDelete={handleDelete}
              deleteIcon={<DeleteIcon />}
              variant="outlined"
              className="flex-1 items-center"
            />
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <AccessTime fontSize="small" />
              {Math.floor(quiz.duration / 60)} hour {quiz.duration % 60} min
            </div>
          </div>
          <button className="flex-1 bg-gray border-2 border-blue-500 text-blue-500 py-3 rounded-xl font-semibold text-sm p-4 m-2">
            Continue Quiz
          </button>{" "}
        </div>
        {/* Start Quiz Button */}
        <button className="w-full bg-blue-500 text-white py-4 rounded-xl mt-6 font-semibold">
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default HomePage;
