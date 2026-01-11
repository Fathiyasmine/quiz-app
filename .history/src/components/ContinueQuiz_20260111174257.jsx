import { AccessTime, Article } from "@mui/icons-material";

/* Continue Quiz Section */
<div className="bg-white rounded-lg border-2 border-blue-400 p-4 mb-4 cursor-pointer hover:shadow-lg transition">
  <h3 className="font-semibold text-lg mb-3">Continue Quiz</h3>
  <div>
    <h3 className="text-blue-500 font-semibold">3D Animation</h3>
    <span className="flex items-center gap-1 text-gray-400 text-sm">
      <Article fontSize="small" />
      10 Questions
    </span>{" "}
    <Chip
      onClick={handleClick}
      onDelete={handleDelete}
      deleteIcon={<DeleteIcon />}
      variant="outlined"
      className="flex-1 items-center"
    />
    <div className="flex items-center gap-1 text-sm text-gray-600">
      <AccessTime fontSize="small" />
      {Math.floor(quiz.duration / 60)} hour {quiz.duration % 60} min
    </div>
  </div>
  <button className="flex-1 bg-gray border-2 border-blue-500 text-blue-500 py-3 rounded-xl font-semibold text-sm p-4 m-2">
    Continue Quiz
  </button>{" "}
</div>;
