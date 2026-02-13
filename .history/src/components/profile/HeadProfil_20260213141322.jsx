import Face3Icon from "@mui/icons-material/Face3";
const HeaderLog = () => {
  return (
    <div className="bg-linear-to-br from-blue-500 to-blue-600 text-white p-6 rounded-b-3xl pb-20">
      <div className="flex justify-center items-center">
        <ArrowBack className="cursor-pointer" onClick={() => navigate("/")} />

        <div className="flex justify-center items-center bg-neutral-200 rounded-3xl w-20 h-20">
          <Face3Icon
            sx={{
              fontSize: 48,
            }}
          />
        </div>
      </div>
      <div className="flex justify-center flex-col items-center pt-6">
        <h1 className="text-2xl font-bold mb-4 font-ubuntu">James Roberston</h1>
        <h3 className="text-md mb-1 font-dm">Level 12 | Pro Learner</h3>
      </div>
    </div>
  );
};

export default HeaderLog;
