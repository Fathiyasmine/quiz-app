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

    <h2 className="text-sm mb-1 opacity-90">Hello, James</h2>
    <h1 className="text-2xl font-bold mb-6">Let's test your knowledge</h1>
  </div>
);

export default HeaderHomePage;
