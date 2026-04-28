import HeaderQuiz from "../components/quiz/HeaderQuiz";
import StartQuiz from "../components/quiz/StartQuiz";
import api from "../api";
import { useEffect } from "react";

const QuizPage = () => {
  // dans n'importe quel composant monté (ex: App.jsx ou QuizPage)
  useEffect(() => {
    api.get("/me/debug").then((res) => {
      console.log("✅ Utilisateur connecté :", res.data);
    });
  }, []);
  return (
    <div className="h-full">
      <HeaderQuiz />
      <StartQuiz />
    </div>
  );
};
export default QuizPage;
