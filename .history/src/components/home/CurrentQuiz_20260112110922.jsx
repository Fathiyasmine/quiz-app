import { AccessTime, Article } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import Grid from "@mui/material/Grid";
import { quizzes } from "../../data/quizData";

/* Continue Quiz Section */
const ContinueQuiz = () => {
  const quiz = quizzes[0];
  return (
    <div className="bg-white rounded-lg p-4 mb-4 cursor-pointer border-2 border-transparent hover:shadow-lg hover:border-blue-400 transition">
      <h3 className="font-semibold text-lg mb-3">Continue Quiz</h3>
      <div className="flex flex-col justify-between">
        <h3 className="text-blue-500 font-semibold">3D Animation</h3>
        <span className="flex items-center gap-1 text-gray-400 text-sm">
          <Article fontSize="small" />
          10 Questions
        </span>{" "}
        <div className="flex items-center gap-1 text-sm text-gray-600">
          <AccessTime fontSize="small" />
          {Math.floor(quiz.duration / 60)} hour {quiz.duration % 60} min
        </div>
        <div className="flex justify-end items-center mt-2">
          <Grid size={8}>
            <DeleteIcon />
          </Grid>
        </div>
      </div>
      <button className="flex bg-gray border-2 border-blue-500 text-blue-500 py-3 rounded-xl font-semibold text-sm p-4 m-2">
        Continue Quiz
      </button>{" "}
    </div>
  );
};
export default ContinueQuiz;
