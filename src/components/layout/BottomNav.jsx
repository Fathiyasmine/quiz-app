import { useNavigate, useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import Person2SharpIcon from "@mui/icons-material/Person2Sharp";
import HistoryIcon from "@mui/icons-material/History";

const navItems = [
  { label: "Home", icon: <HomeIcon />, path: "/home" },
  { label: "Profile", icon: <Person2SharpIcon />, path: "/pro" },
  { label: "History", icon: <HistoryIcon />, path: "/histo" },
];

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 flex justify-around items-center h-16 z-50 shadow-lg">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`flex flex-col items-center gap-0.5 px-6 py-1 transition cursor-pointer ${
              isActive ? "text-blue-500" : "text-gray-400"
            }`}
          >
            {item.icon}
            <span className="text-[10px] font-semibold">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default BottomNav;
