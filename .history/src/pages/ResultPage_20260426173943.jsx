import { useLocation } from "react-router-dom";
import HeaderResults from "../components/results/HeaderResults";
import ResultsContent from "../components/results/ResultsContent";

const ResultPage = () => {
  const location = useLocation();
  const result = location.state || {
    score: 0,
    total: 0,
    timeTaken: 0,
    quizTitle: "",
  };

  return (
    <div>
      <HeaderResults result={result} />
      <ResultsContent result={result} />
    </div>
  );
};

export default ResultPage;
