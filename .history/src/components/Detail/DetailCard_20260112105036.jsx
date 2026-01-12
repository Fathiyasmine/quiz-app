/* Detail Card */
import { AccessTime, Article, StarOutline } from "@mui/icons-material";

const DetailCard = ({ quiz }) => {
  return (
    <div className="bg-white -mt-24 rounded-3xl shadow-lg p-6">
      <div className="h-1 bg-blue-600 w-8 rounded-md flex justify-center"></div>
      <h3 className="font-semibold text-lg mb-4">
        Brief explanation about this quiz
      </h3>

      <div className="space-y-4 mb-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
            <Article className="text-white" />
          </div>
          <div>
            <p className="font-semibold">{quiz.totalQuestion} Question</p>
            <p className="text-sm text-gray-500">
              10 point for a correct answer
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
            <AccessTime className="text-white" />
          </div>
          <div>
            <p className="font-semibold">1 hour 15 min</p>
            <p className="text-sm text-gray-500">Total duration of the quiz</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
            <StarOutline className="text-white" />
          </div>
          <div>
            <p className="font-semibold">Win {quiz.reward} star</p>
            <p className="text-sm text-gray-500">
              Answer all questions correctly
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <p className="font-semibold mb-2">
          Please read the text below carefully so you can understand it
        </p>

        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2">
            <span>•</span>
            <span>
              10 point awarded for a correct answer and no marks for a incorrect
              answer
            </span>
          </li>
          <li className="flex gap-2">
            <span>•</span>
            <span>Tap on options to select the correct answer</span>
          </li>
          <li className="flex gap-2">
            <span>•</span>
            <span>Tap on the bookmark icon to save interesting questions</span>
          </li>
          <li className="flex gap-2">
            <span>•</span>
            <span>
              Click submit if you are sure you want to complete all the quizzes
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default DetailCard;
