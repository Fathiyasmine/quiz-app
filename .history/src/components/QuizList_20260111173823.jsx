import React from "react";
import QuizCard from "./QuizCard";
import { quizzes } from "../data/quizData";

/* Quiz List : creation de quizcard pour chaque quiz*/

 const QuizList = () => {
return (
    <div>    { quizzes.map((quiz) => <QuizCard key={quiz.id} quiz={quiz} />)} 
</div>

}

export default QuizList;