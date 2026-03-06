import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QuizProvider } from "./context/QuizContext";
import HomePage from "./pages/HomePage";
import QuizDetailPage from "./pages/QuizDetailPage";
import QuizPage from "./pages/QuizPage";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
import ProfilePage from "./pages/ProfilePage";
import HistoPage from "./pages/HistoPage";
import ResultPage from "./pages/ResultPage";

function App() {
  return (
    <QuizProvider>
      <BrowserRouter>
        <div className="max-w-md mx-auto bg-white h-full">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/pro" element={<ProfilePage />} />
            <Route path="/histo" element={<HistoPage />} />
            <Route path="/result" element={<ResultPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/quiz/:id" element={<QuizDetailPage />} />
            <Route path="/quiz/:id/start" element={<QuizPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </QuizProvider>
  );
}

export default App;
