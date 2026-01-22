import { AccessTime, Article } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useQuiz } from "../../context/QuizContext";
import { useNavigate } from "react-router-dom";
import { quizzes } from "../../data/quizData";

const CurrentQuiz = () => {
  const { loadProgress, clearProgress, continueQuiz } = useQuiz();
  const navigate = useNavigate();

  // Charger la progression depuis localStorage
  const savedProgress = loadProgress();

  // Si aucune progression sauvegardée, ne rien afficher
  if (!savedProgress) {
    return null;
  }

  // Trouver le quiz correspondant
  const quiz = quizzes.find((q) => q.id === savedProgress.quizId);

  if (!quiz) {
    return null;
  }

  // Calculer le temps écoulé
  //const timeSpent = quiz.duration * 60 - savedProgress.timeRemaining;
  //const timeSpentMinutes = Math.floor(timeSpent / 60);

  // Fonction pour continuer le quiz
  const handleContinue = () => {
    continueQuiz(quiz, savedProgress);
    navigate(`/quiz/${quiz.id}/start`);
  };

  // Fonction pour supprimer la progression
  const handleDelete = () => {
    if (
      window.confirm("Êtes-vous sûr de vouloir supprimer cette progression ?")
    ) {
      clearProgress();
      window.location.reload(); // Recharger la page
    }
  };

  return (
    <div className="p-4">
      <h3 className="font-semibold text-lg mb-2">Continue Quiz</h3>

      <div className="bg-white rounded-lg p-6 mb-2 shadow-md border-2 border-transparent hover:shadow-lg hover:border-blue-400 transition ">
        <div className="flex gap-4">
          {/* Image placeholder */}
          <div className="w-38 h-38 bg-gray-300 rounded shrink-0"></div>

          {/* Contenu */}
          <div className="flex flex-col justify-between flex-1">
            {/* Informations du quiz */}
            <div className="flex justify-between items-start mb-3">
              <div className="flex flex-col gap-1 flex-1 relative">
                {/* Titre du quiz */}
                <h3 className="bg-linear-to-r from-[#3550DC] to-[#27E9F7] bg-clip-text text-transparent font-semibold text-lg">
                  {savedProgress.quizTitle}
                </h3>

                {/* Progression des questions */}
                <div className="flex items-center gap-1 text-[#999999] text-sm">
                  <Article fontSize="small" />
                  <span>
                    {savedProgress.questionsAnswered}/
                    {savedProgress.totalQuestions} Questions
                  </span>
                </div>

                {/* Temps restant */}
                <div className="flex items-center gap-1 text-sm text-[#999999]">
                  <AccessTime fontSize="small" />
                  <span>
                    {Math.floor(savedProgress.timeRemaining / 60)} min restantes
                  </span>
                </div>

                {/* Barre de progression */}
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div
                    className="bg-linear-to-r from-[#3550DC] to-[#27E9F7] h-2 rounded-full transition-all"
                    style={{
                      width: `${(savedProgress.questionsAnswered / savedProgress.totalQuestions) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>

              {/* Bouton Supprimer */}
              <div className="absolute right-22">
                <button
                  onClick={handleDelete}
                  className="text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full p-2 transition "
                >
                  <DeleteIcon />
                </button>
              </div>
            </div>

            {/* Bouton Continue */}
            <div className="flex justify-center align-center">
              <button
                onClick={handleContinue}
                className="w-auto h-auto  p-4 bg-[#333333] text-white rounded-xl font-semibold hover:bg-[#444444] transition"
              >
                Continue Quiz
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentQuiz;
