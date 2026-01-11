/* Quiz List : creation de quizcard pour chaque quiz*/
{
  quizzes.map((quiz) => <QuizCard key={quiz.id} quiz={quiz} />);
}
