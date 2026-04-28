import { useLocation, useNavigate } from "react-router-dom";
import HeaderResults from "../components/results/HeaderResults";
import ResultsContent from "../components/results/ResultsContent";

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const result = location.state;

  // si pas de données → redirect vers historique
  if (!result) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-gray-400 text-sm">Aucun résultat à afficher</p>
        <button
          onClick={() => navigate("/histo")}
          className="bg-blue-500 text-white px-6 py-2 rounded-xl font-semibold"
        >
          Voir l'historique
        </button>
      </div>
    );
  }

  return (
    <div>
      <HeaderResults result={result} />
      <ResultsContent result={result} />
    </div>
  );
};

export default ResultPage;
