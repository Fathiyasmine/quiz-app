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
import WrongAnswersPage from "./pages/WrongAnswersPage";

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
/*
Explication complète — Connexion Frontend ↔ Backend

1. src/api.js — Le pont entre frontend et backend
jsimport axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // adresse du backend
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
C'est le fichier central — tous les autres fichiers l'importent pour parler au backend.
Sans api.js  →  chaque fichier écrit http://localhost:5000/api partout
Avec api.js  →  on écrit juste api.post("/auth/login") ✅
L'interceptor ajoute automatiquement le token à chaque requête — pas besoin de le faire manuellement partout.

2. Log.jsx — Login
Ce qui a changé :
jsimport api from "../../api"; // ← import du pont

const handleSubmit = async (e) => {
  e.preventDefault();

  // appel au backend
  const response = await api.post("/auth/login", { email, password });

  // sauvegarde du token et nom
  localStorage.setItem("token", response.data.token);
  localStorage.setItem("name", response.data.name);

  navigate("/pro"); // redirect après login
};
Flux :
User tape email + password
        ↓
api.post("/auth/login")   →  backend vérifie
        ↓
backend retourne           →  { token, name }
        ↓
localStorage.setItem()     →  token sauvegardé
        ↓
navigate("/pro")           →  redirect ✅
Pourquoi localStorage ?
localStorage  →  persiste même si tu fermes le navigateur
sessionStorage → disparaît quand tu fermes l'onglet

3. SignUp.jsx — Register
Ce qui a changé :
jsimport api from "../api";

const handleSubmit = async (e) => {
  e.preventDefault();

  if (password !== confirmPassword) {
    setError("Les mots de passe ne correspondent pas !");
    return; // stop ici, pas d'appel au backend
  }

  // appel au backend
  const response = await api.post("/auth/register", { name, email, password });

  // même chose que login
  localStorage.setItem("token", response.data.token);
  localStorage.setItem("name", response.data.name);

  navigate("/home");
};
Flux :
User remplit le formulaire
        ↓
Vérification password === confirmPassword
        ↓ oui
api.post("/auth/register")  →  backend crée le compte
        ↓
backend retourne             →  { token, name }
        ↓
localStorage.setItem()       →  token sauvegardé
        ↓
navigate("/home")            →  redirect ✅

4. HeadProfile.jsx — Afficher le nom
Ce qui a changé :
js// juste une ligne ajoutée
const name = localStorage.getItem("name") || "User";

// et dans le JSX :
<h1>{name}</h1>  // au lieu de "Mohamed"
Flux :
localStorage.getItem("name")  →  récupère "Yasmine"
        ↓
affiché dans le header ✅
Pas d'appel au backend ici — le nom est déjà dans localStorage depuis le login.

5. AchievementProfil.jsx — Logout
Ce qui a changé :
jsconst handleLogout = () => {
  localStorage.removeItem("token"); // supprime le token
  localStorage.removeItem("name");  // supprime le nom
  navigate("/");                     // redirect vers login
};
Flux :
User clique Logout
        ↓
localStorage vidé   →  token + name supprimés
        ↓
navigate("/")       →  redirect vers login ✅
Si l'user essaie d'accéder à une page protégée après → pas de token → accès refusé.

6. QuizPage.jsx — Soumettre un quiz
Ce qui a changé :
jsimport api from "../../api";

const handleSubmit = async () => {

  // 1. calculer le score localement
  let score = 0;
  currentQuiz.questions.forEach((question, index) => {
    if (selectedAnswers[index] === question.correctAnswer) {
      score++;
    }
  });

  const total = currentQuiz.questions.length;
  const timeTaken = currentQuiz.duration * 60 - timeRemaining;

  // 2. sauvegarder en DB
  await api.post("/results", {
    quiz: currentQuiz._id || currentQuiz.id,
    score,
    total,
    timeTaken,
  });

  // 3. naviguer vers /result avec les données
  clearProgress();
  navigate("/result", {
    state: { score, total, timeTaken, quizTitle: currentQuiz.title }
  });
};
Flux :
User clique Submit
        ↓
calcul score en local    →  compare selectedAnswers vs correctAnswer
        ↓
api.post("/results")     →  sauvegarde en MongoDB
        ↓
navigate("/result")      →  envoie les données à ResultPage
Pourquoi navigate("/result", { state: {...} }) ?
state  →  permet de passer des données d'une page à l'autre
         sans les mettre dans l'URL

7. ResultPage.jsx — Recevoir les données
Ce qui a changé :
jsimport { useLocation } from "react-router-dom";

const ResultPage = () => {
  const location = useLocation();
  
  // récupère les données envoyées par QuizPage
  const result = location.state || { score: 0, total: 0, timeTaken: 0 };

  return (
    <div>
      <HeaderResults result={result} />   // passe les données *
      <ResultsContent result={result} />   passe les données *
    </div>
  );
};
Flux :
QuizPage navigate("/result", { state: { score, total, timeTaken } })
        ↓
ResultPage useLocation()   →  récupère le state
        ↓
passe result aux composants enfants ✅

8. HeaderResults.jsx — Afficher le % dynamique
Ce qui a changé :
jsconst HeaderResults = ({ result }) => {  // reçoit result en props
  const name = localStorage.getItem("name") || "User";

  // calcul dynamique du pourcentage
  const percentage = Math.round((result.score / result.total) * 100);

  // calcul du cercle SVG dynamique
  const circ = 2 * Math.PI * 47;
  const offset = circ - (percentage / 100) * circ;
  //                      ↑ plus le % est élevé, plus le cercle est rempli
Flux :
result.score = 17, result.total = 20
        ↓
percentage = Math.round(17/20 * 100) = 85%
        ↓
offset = circ - 0.85 * circ  →  cercle rempli à 85% ✅

9. ResultsContent.jsx — Afficher les chiffres
Ce qui a changé :
jsconst ResultsContent = ({ result }) => {  // reçoit result en props
  const { score, total, timeTaken } = result;
  const incorrect = total - score;  // calculé automatiquement

  // convertir secondes en MM:SS
  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };
timeTaken = 765 secondes
        ↓
Math.floor(765 / 60) = 12  →  minutes
765 % 60 = 45              →  secondes
        ↓
"12:45" ✅

10. HistoPage.jsx — Afficher l'historique
C'est la dernière page à connecter. Elle doit :
jsimport { useEffect, useState } from "react";
import api from "../api";

const HistoPage = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    // au chargement de la page → récupère l'historique
    const fetchResults = async () => {
      const response = await api.get("/results/me");
      setResults(response.data);
    };
    fetchResults();
  }, []);
Flux :
Page charge
        ↓
api.get("/results/me")   →  backend retourne les résultats de l'user
        ↓
setResults(response.data) →  stocké dans le state
        ↓
affiché dans la liste ✅

Résumé visuel complet
Log.jsx          →  POST /auth/login    →  token dans localStorage
SignUp.jsx       →  POST /auth/register →  token dans localStorage
HeadProfile.jsx  →  localStorage.getItem("name")
AchievementProfil→  localStorage.removeItem() logout
QuizPage.jsx     →  POST /results       →  sauvegarde score en DB
ResultPage.jsx   →  useLocation()       →  reçoit données de QuizPage
HeaderResults    →  props result        →  % dynamique
ResultsContent   →  props result        →  chiffres dynamiques
HistoPage.jsx    →  GET /results/me     →  historique depuis DB
*/
