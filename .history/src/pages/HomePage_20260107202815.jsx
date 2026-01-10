import { useState } from "react";
import { Search, Refresh, Menu, AccountCircle } from "@mui/icons-material";
import Header from "../components/Header";
import QuizCard from "../components/QuizCard";
import { quizzes } from "../data/quizData";
const HomePage = () => {
  const [activteCategory, setActiveCategory] = useState("Computer");
  const categories = ["Popular", "Science", "Math", "Computer"];
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-b-3xl">
        <div className="flex items-center justify-between mb-4"></div>
        <Menu className="cursor-pointer" />
        <AccountCircle className="w-10 h-10" />
      </div>
      <h2 className="text-sm mb-1">Hello, Mohamed</h2>
      <h1 className="text-2xl font-bold mb-4">Let's test your knowledge</h1>
      {/*search */}
      <div className="bg-white rounded-full flex items-center px-4 py-3 mb-4">
        <Search className="text-gray-400 mr-2" />
      <input type="text" placeholder="Search" className=""
      </div>
    </div>
  );
};
