import { Search, Refresh, Menu, AccountCircle } from "@mui/icons-material";

/* Hero Section */

const HeaderHomePage = () => (
  <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-[#FFFFFF] p-6 ">
    <div className="flex items-center justify-between mb-4">
      {/*Menu === humberger */}
      <Menu className="cursor-pointer" />
      {/*le cercle du compte dutilisateur */}
      <AccountCircle className="w-10 h-10" />
    </div>
    <h2 className="text-sm mb-1">Hello, Mohamed</h2>
    <h1 className="text-2xl font-bold mb-4">Let's test your knowledge</h1>
    <div className="bg-white rounded-full flex items-center px-4 py-3 mb-4 ">
      {/*icon de recherche*/}
      <Search className="text-gray-400 mr-2" />
      {/*input de recherche*/}
      <input
        type="text"
        placeholder="Search"
        className="flex-1 outline-none text-gray-800"
      />
      {/*icon de refresh*/}
      <Refresh className="text-blue-500 cursor-pointer" />
    </div>
  </div>
);

export default HeaderHomePage;
