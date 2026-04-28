import { useEffect, useState } from "react";
import HeadHistory from "../components/history/HeadHistory";
import HistoryContent from "../components/history/HistoryContent";
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
