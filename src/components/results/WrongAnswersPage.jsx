import { useLocation, useNavigate } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

const WrongAnswersPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { questions, selectedAnswers } = location.state || {};

  // Filtrer uniquement les questions ratées
  const wrongQuestions =
    questions?.filter((q, i) => selectedAnswers[i] !== q.correctAnswer) || [];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-red-400 to-red-500 text-white p-6 rounded-b-3xl">
        <div className="flex items-center gap-4">
          <ArrowBack className="cursor-pointer" onClick={() => navigate(-1)} />
          <span className="text-xl font-bold">Réponses incorrectes</span>
        </div>
        <p className="text-white/70 text-sm mt-2 ml-8">
          {wrongQuestions.length} question{wrongQuestions.length > 1 ? "s" : ""}{" "}
          ratée{wrongQuestions.length > 1 ? "s" : ""}
        </p>
      </div>

      {/* Liste des questions ratées */}
      <div className="p-4 flex flex-col gap-4 mt-4">
        {wrongQuestions.map((q, idx) => {
          const userAnswerIndex = questions
            ? Object.entries(selectedAnswers).find(
                ([i]) => questions[i] === q,
              )?.[0]
            : null;

          return (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-sm p-4 border border-gray-100"
            >
              {/* Question */}
              <p className="font-semibold text-gray-800 mb-3">
                {idx + 1}. {q.question}
              </p>

              {/* Options */}
              <div className="flex flex-col gap-2">
                {q.options.map((option, i) => {
                  const isCorrect = i === q.correctAnswer;
                  const isUserWrong =
                    userAnswerIndex !== null &&
                    i === selectedAnswers[userAnswerIndex];

                  return (
                    <div
                      key={i}
                      className={`flex items-center gap-3 p-3 rounded-xl text-sm font-medium transition ${
                        isCorrect
                          ? "bg-green-50 border border-green-200 text-green-700"
                          : isUserWrong
                            ? "bg-red-50 border border-red-200 text-red-600"
                            : "bg-gray-50 border border-gray-100 text-gray-500"
                      }`}
                    >
                      {isCorrect ? (
                        <CheckCircleIcon
                          sx={{ fontSize: 20, color: "#72bd72" }}
                        />
                      ) : isUserWrong ? (
                        <CancelIcon sx={{ fontSize: 20, color: "#ea7474" }} />
                      ) : (
                        <span className="w-5 h-5 rounded-full bg-gray-200 text-xs flex items-center justify-center text-gray-500 font-bold">
                          {String.fromCharCode(65 + i)}
                        </span>
                      )}
                      {option}
                      {isCorrect && (
                        <span className="ml-auto text-xs text-green-500 font-semibold">
                          Bonne réponse
                        </span>
                      )}
                      {isUserWrong && !isCorrect && (
                        <span className="ml-auto text-xs text-red-400 font-semibold">
                          Ta réponse
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WrongAnswersPage;

/*
Explication de WrongAnswersPage pas à pas
Récupération des données
jsxconst { questions, selectedAnswers } = location.state || {};
On récupère ce qu'on a passé depuis ResultsContent via navigate("/result/wrong-answers", { state: ... }). selectedAnswers c'est un objet genre { 0: 2, 1: 0, 2: 3 ... } — la clé c'est l'index de la question, la valeur c'est l'index de l'option choisie.

Filtrer seulement les questions ratées
jsxconst wrongQuestions = questions?.filter(
  (q, i) => selectedAnswers[i] !== q.correctAnswer
);
On compare la réponse de l'utilisateur (selectedAnswers[i]) avec la bonne réponse (q.correctAnswer). Si elles sont différentes → la question est ratée → on la garde.

Retrouver la réponse de l'utilisateur pour chaque question ratée
jsxconst userAnswerIndex = questions
  ? Object.entries(selectedAnswers).find(
      ([i]) => questions[i] === q
    )?.[0]
  : null;
Comme wrongQuestions est un nouveau tableau filtré, on a perdu les index originaux. Ce code retrouve l'index original de la question q dans le tableau questions pour pouvoir récupérer selectedAnswers[index].

Colorier chaque option
jsxconst isCorrect = i === q.correctAnswer;
const isUserWrong = i === selectedAnswers[userAnswerIndex];
Pour chaque option affichée :

isCorrect → fond vert + icône ✅ + label "Bonne réponse"
isUserWrong → fond rouge + icône ❌ + label "Ta réponse"
les autres → fond gris neutre
*/
