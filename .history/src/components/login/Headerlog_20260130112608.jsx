import SchoolIcon from "@mui/icons-material/School";
const Headerlog = () => {
  return (
    <div className="bg-linear-to-br from-blue-500 to-blue-600 text-[#FFFFFF] p-6">
      <div className="flex justify-center w-3xl align-middle">
        <SchoolIcon />
      </div>
      <h1 className="text-sm mb-1 font-dm">Quiz Master</h1>
      <h3 className="text-2xl font-bold mb-4 font-ubuntu">
        Test your knowledge today
      </h3>
    </div>
  );
};

export default Headerlog;
