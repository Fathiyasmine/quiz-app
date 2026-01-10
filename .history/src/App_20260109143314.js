import { QuizProvider } from "./context/QuizContext";

function App() {
  return (
    <QuizProvider>
      <div className="min-h-screen bg-blue-500 flex items-center justify-center">
        <h1 className="text-white text-4xl">✅ Context fonctionne !</h1>
      </div>
    </QuizProvider>
  );
}

export default App;
