import { Search, Menu, AccountCircle } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
const HeaderHomePage = ({ onSearchChange, searchValue }) => {
  // Gestion du changement de recherche
  const handleSearchInput = (e) => {
    const value = e.target.value;
    onSearchChange(value);
  };

  // Gestion du clic sur l'icône de rafraîchissement
  const handleRefresh = () => {
    onSearchChange("");
  };
  //  Utiliser import.meta.env avec Vite
  const userName = import.meta.env.VITE_USERNAME;
  return (
    <div className="bg-linear-to-br from-blue-500 to-blue-600 text-[#FFFFFF] p-6">
      <div className="flex items-center justify-between mb-4">
        <ArrowBack className="cursor-pointer" onClick={() => navigate("/")} />

        <Menu className="cursor-pointer" />
        <AccountCircle className="w-10 h-10" />
      </div>
      <h2 className="text-sm mb-1 font-dm">Hello, {userName}</h2>
      <h1 className="text-2xl font-bold mb-4 font-ubuntu">
        Let's test your knowledge
      </h1>

      <div className="bg-white rounded-full flex items-center px-4 py-3 mb-4">
        <Search className="text-[#D4D4D4] mr-2" />
        <input
          type="text"
          placeholder="Search"
          className="flex-1 outline-none placeholder-[#D4D4D4] font-nunito text-gray-800"
          value={searchValue}
          onChange={handleSearchInput}
        />
        <CloseIcon
          className="text-blue-500 cursor-pointer hover:rotate-180 transition-transform duration-300"
          onClick={handleRefresh}
        />
      </div>
    </div>
  );
};

export default HeaderHomePage;
