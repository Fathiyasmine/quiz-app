import SchoolIcon from "@mui/icons-material/School";

const Headerlog = () => {
  return (
    <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-b-3xl pb-24">
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center bg-blue-50 rounded-3xl w-20 h-20">
          <SchoolIcon
            sx={{
              fontSize: 48, // Taille de l'icône
            }}
          />
        </div>
      </div>
      <h1 className="text-sm mb-1 font-dm">Quiz Master</h1>
      <h3 className="text-2xl font-bold mb-4 font-ubuntu">
        Test your knowledge today
      </h3>
    </div>
  );
};

export default Headerlog;
