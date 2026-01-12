import { Search, Refresh, Menu, AccountCircle } from "@mui/icons-material";

const HeaderHomePage = () => (
  const []
  <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-[#FFFFFF] p-6">
    <div className="flex items-center justify-between mb-4">
      <Menu className="cursor-pointer" />
      <AccountCircle className="w-10 h-10" />
    </div>
    <h2 className="text-sm mb-1 font-dm">Hello, Mohamed</h2>
    <h1 className="text-2xl font-bold mb-4 font-ubuntu">
      Let's test your knowledge
    </h1>

    <div className="bg-white rounded-full flex items-center px-4 py-3 mb-4">
      <Search className="text-[#D4D4D4] mr-2" />
      <input
        type="text"
        placeholder="Search"
        className="flex-1 outline-none text-[#D4D4D4] font-nunito"
      />
      <Refresh className="text-blue-500 cursor-pointer" />
    </div>
  </div>
);

export default HeaderHomePage;
