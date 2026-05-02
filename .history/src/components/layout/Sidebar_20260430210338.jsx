import { useNavigate, useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import Person2SharpIcon from "@mui/icons-material/Person2Sharp";
import HistoryIcon from "@mui/icons-material/History";
import QuizIcon from "@mui/icons-material/Quiz";
import LogoutIcon from "@mui/icons-material/Logout";

const navItems = [
  { label: "Home", icon: <HomeIcon />, path: "/home" },
  { label: "Profile", icon: <Person2SharpIcon />, path: "/pro" },
  { label: "History", icon: <HistoryIcon />, path: "/histo" },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const name = localStorage.getItem("name") || "User";

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    navigate("/");
  };

  return (
    <aside className="hidden md:flex flex-col w-64 min-h-screen bg-white border-r border-gray-100 px-4 py-8 fixed left-0 top-0">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-10 px-2">
        <div className="w-9 h-9 bg-blue-500 rounded-xl flex items-center justify-center">
          <QuizIcon sx={{ color: "white", fontSize: 22 }} />
        </div>
        <span className="text-xl font-extrabold text-gray-800">
          <span className="text-blue-500">Quiz</span>
        </span>
      </div>

      {/* Nav links */}
      <nav className="flex flex-col gap-1 flex-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all cursor-pointer ${
                isActive
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-800"
              }`}
            >
              <span className={isActive ? "text-blue-500" : "text-gray-400"}>
                {item.icon}
              </span>
              {item.label}
            </button>
          );
        })}
      </nav>

      {/* User + Logout */}
      <div className="border-t border-gray-100 pt-4 mt-4">
        <div className="flex items-center gap-3 px-2 mb-3">
          <div className="w-9 h-9 bg-blue-100 rounded-full flex items-center justify-center">
            <Person2SharpIcon sx={{ fontSize: 20, color: "#4A90E2" }} />
          </div>
          <span className="text-sm font-semibold text-gray-700">{name}</span>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-50 text-sm font-medium w-full transition cursor-pointer"
        >
          <LogoutIcon sx={{ fontSize: 18 }} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
