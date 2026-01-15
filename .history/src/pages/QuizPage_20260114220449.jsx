import HeaderQuiz from "../../components/quiz/Header";
import StartQuiz from "../../components/quiz/StartQuiz";
const QuizPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    currentQuiz,
    currentQuestion,
    selectedAnswers,
    selectAnswer,
    nextQuestion,
    previousQuestion,
    setCurrentQuestion,
    startQuiz,
  } = useQuiz();

  useEffect(() => {
    if (!currentQuiz) {
      const quiz = quizzes.find((q) => q.id === parseInt(id));
      if (quiz) {
        startQuiz(quiz);
      }
    }
  }, [currentQuiz, id, startQuiz]);

  if (!currentQuiz) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  const question = currentQuiz.questions[currentQuestion];

  const handleSubmit = () => {
    navigate("/");
  };
  return (
    <div>
      <HeaderQuiz />
      <StartQuiz />
    </div>
  );
};
export default QuizPage;
