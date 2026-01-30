const Log = () => {
  return (
    <div className="bg-white -mt-24 rounded-t-3xl p-6 pb-24 relative min-h-full shadow-md">
      <div className="flex justify-center mb-4">
        <div className="h-1 bg-blue-600 w-16 rounded-md"></div>
      </div>
      <h2 className="font-semibold text-lg mb-4 font-nunito">Welcome Back!</h2>
      <div className="space-y-4 mb-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
            <Article className="text-white" />
          </div>
          <div>
            <p className="font-semibold font-ubuntu">
              {quiz.totalQuestion} Question
            </p>
            <p className="text-sm text-gray-500 font-nunito">
              10 point for a correct answer
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
            <AccessTime className="text-white" />
          </div>
          <div>
            <p className="font-semibold font-ubuntu">16 min</p>
            <p className="text-sm text-gray-500 font-nunito">
              Total duration of the quiz
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
            <StarOutline className="text-white" />
          </div>
          <div>
            <p className="font-semibold font-ubuntu">Win {quiz.reward} star</p>
            <p className="text-sm text-gray-500 font-nunito">
              Answer all questions correctly
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-4 mb-14">
        <p className="font-semibold mb-2 font-nunito">
          Please read the text below carefully so you can understand it
        </p>

        <ul className="space-y-2 text-sm text-gray-700 font-nunito">
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

      {/* Bouton Start Quiz */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-5/6">
        <button
          onClick={onStartQuiz}
          className="w-full bg-gradient-to-r from-[#3550DC] to-[#27E9F7] text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-shadow"
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default Log;
