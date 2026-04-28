import { useEffect, useState } from "react";
import HeadHistory from "../components/historyy/HeadHistory";
import HistoryContent from "../components/historyy/HistoryContent";
import api from "../api";

const HistoPage = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await api.get("/results/me");
        setResults(response.data);
      } catch (error) {
        console.error("Erreur historique:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchResults();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-400">Chargement...</p>
      </div>
    );
  }

  return (
    <div>
      <HeadHistory results={results} /> {/* ← reçoit les résultats */}
      <HistoryContent results={results} /> {/* ← reçoit les résultats */}
    </div>
  );
};

export default HistoPage;
/*
HistoPage charge
      ↓
api.get("/results/me")     →  backend retourne les résultats de l'user
      ↓
setResults(response.data)  →  stocké dans le state
      ↓
passé en props aux enfants →  results={results}
      ↓
HeadHistory   →  calcule totalQuizzes + avgAccuracy dynamiquement
HistoryContent →  affiche chaque résultat avec titre, date, score ✅
*/
