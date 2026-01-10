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
        <input
          type="text"
          placeholder="Search"
          className="flex-1 outline-none text-gray-800"
        />
        <Refresh className="text-blue-500 cursor-pointer" />
      </div>
    </div>
    <div className="px-6 py-4">
      <div className="flex gap-4 mb-4 overflow-x-auto">
        {categories.map(cat=>(<button key={cat} onClick={()=>setActiveCategory(cat)}  className={`px-4 py-2 rounded-full whitespace-nowrap ${
                activteCategory === cat 
                  ? 'text-blue-500 border-b-2 border-blue-500' 
                  : 'text-gray-600'
              }`}>{cat}</button>))}
      </div>
    </div>

  );
};

            