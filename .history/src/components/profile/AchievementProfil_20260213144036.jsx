import Box from "@mui/material/Box";

const AchievementProfil = () => {
  return (
    <div className="bg-white -mt-10 rounded-t-3xl shadow-lg p-6 flex flex-col min-h-screen">
      <div className="flex justify-center mb-4">
        <div className="h-1 bg-blue-600 w-16 rounded-md"></div>
      </div>
      <Box
        className="flex flex-col gap-4"
        sx={{
          width: 100,
          height: 100,
          borderRadius: 1,
          bgcolor: "blue-100",
          "&:hover": {
            bgcolor: "blue-200",
          },
        }}
       />
      <Box
        className="flex flex-col gap-4"
        sx={{
          width: 100,
          height: 100,
          borderRadius: 1,
          bgcolor: "orange-100",
          "&:hover": {
            bgcolor: "orange-200",
          },
        }}
      />
      <Box
        className="flex flex-col gap-4"
        sx={{
          width: 100,
          height: 100,
          borderRadius: 1,
          bgcolor: "green-100",
          "&:hover": {
            bgcolor: "green-200",
          },
        }}
      />
      <div>
        <h2 className="text-2xl font-bold mb-4 font-ubuntu">Achievements</h2>
        <p>View All</p>
      </div>
    </div>
  );
};

export default AchievementProfil;
