import { Search, Refresh, Menu, AccountCircle } from "@mui/icons-material";

/* Hero Section */

const HeaderHomePage = () => (
  <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 pb-32 rounded-b-3xl">
    <div className="flex items-center justify-between mb-6">
      <Menu className="cursor-pointer" />
      <div className="w-10 h-10 bg-white bg-opacity-30 rounded-full flex items-center justify-center">
        <AccountCircle />
      </div>
    </div>

    <h2 className="text-sm mb-1 opacity-90">Hello, Mohamed</h2>
    <h1 className="text-2xl font-bold mb-6">Let's test your knowledge</h1>
    {/* Search Bar */}
    <div className="bg-white rounded-full flex items-center px-4 py-3 shadow-md">
      <Search className="text-gray-400 mr-2" />
      <input
        type="text"
        placeholder="Search"
        className="flex-1 outline-none text-gray-800 placeholder-gray-400"
      />
      <Refresh className="text-blue-500 cursor-pointer" />
    </div>
  </div>
);

export default HeaderHomePage;
