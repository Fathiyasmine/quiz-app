import { useState } from "react";
import { Search, Refresh } from "@mui/icons-material";
import Header from "../components/Header";
import QuizCard from "../components/QuizCard";
import { quizzes } from "../data/quizData";
const HomePage = () => {
  const [activteCategory, setActiveCategory] = useState("Computer");
  const categories = ["Popular", "Science", "Math", "Computer"];
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-b-3xl"></div>
    </div>
  );
};
