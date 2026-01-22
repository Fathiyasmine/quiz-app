import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QuizProvider } from "./context/QuizContext";
import HomePage from "./pages/HomePage";
import QuizDetailPage from "./pages/QuizDetailPage";
import QuizPage from "./pages/QuizPage";

function App() {
  return (
    <QuizProvider>
      <BrowserRouter>
        <div className="max-w-md mx-auto bg-white min-h-screen">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/quiz/:id" element={<QuizDetailPage />} />
            <Route path="/quiz/:id/start" element={<QuizPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </QuizProvider>
  );
}

export default App;
