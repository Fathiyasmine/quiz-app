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
          bgcolor: "primary.main",
          "&:hover": {
            bgcolor: "primary.dark",
          },
        }}
      />
      <Box className="flex flex-col gap-4" />
      <Box className="flex flex-col gap-4" />
    </div>
  );
};

export default AchievementProfil;
