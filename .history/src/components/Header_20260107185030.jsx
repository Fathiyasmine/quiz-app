import { Menu } from "@mui/icons-material";

const Header = ({ title = "Quiz App Design (Community)" }) => {
  return (
    <header className="bg-gray-800 text-white p-4 flex items-center justify-between">
      <Menu className="cursor-pointer" />
      <h1 className="text-lg font-medium">{title}</h1>
      <div className="w-6" />
    </header>
  );
};
export default Header;
