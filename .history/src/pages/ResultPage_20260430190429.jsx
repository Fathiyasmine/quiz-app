import { useLocation, useNavigate } from "react-router-dom";
import HeaderResults from "../components/results/HeaderResults";
import ResultsContent from "../components/results/ResultsContent";

const ResultPage = () => {
  const location = useLocation();
  //  const navigate = useNavigate();
  const result = location.state;
  return (
    <div>
      <HeaderResults result={result} />
      <ResultsContent result={result} />
    </div>
  );
};

export default ResultPage;
