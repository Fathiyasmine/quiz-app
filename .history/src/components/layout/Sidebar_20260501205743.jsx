import { useNavigate, useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import Person2SharpIcon from "@mui/icons-material/Person2Sharp";
import HistoryIcon from "@mui/icons-material/History";
import QuizIcon from "@mui/icons-material/Quiz";
import LogoutIcon from "@mui/icons-material/Logout";
import { useSettings } from "../../context/SettingsContext";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useSettings();
  const name = localStorage.getItem("name") || "User";

  const navItems = [
    { labelKey: "quiz", icon: <HomeIcon />, path: "/home" },
    { labelKey: "profile", icon: <Person2SharpIcon />, path: "/pro" },
    { labelKey: "history", icon: <HistoryIcon />, path: "/histo" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    navigate("/");
  };

  return (
    <aside className="hidden md:flex flex-col w-64 min-h-screen bg-white dark:bg-gray-900 border-r border-gray-100 dark:border-gray-800 px-4 py-8 fixed left-0 top-0">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-10 px-2">
        <div className="w-9 h-9 bg-blue-500 rounded-xl flex items-center justify-center">
          <QuizIcon sx={{ color: "white", fontSize: 22 }} />
        </div>
        <span className="text-xl font-extrabold text-gray-800 dark:text-white">
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
                  ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                  : "text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-800 dark:hover:text-white"
              }`}
            >
              <span
                className={
                  isActive
                    ? "text-blue-500"
                    : "text-gray-400 dark:text-gray-500"
                }
              >
                {item.icon}
              </span>
              {t(item.labelKey)}
            </button>
          );
        })}
      </nav>

      {/* User + Logout */}
      <div className="border-t border-gray-100 dark:border-gray-800 pt-4 mt-4">
        <div className="flex items-center gap-3 px-2 mb-3">
          <div className="w-9 h-9 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center">
            <Person2SharpIcon sx={{ fontSize: 20, color: "#4A90E2" }} />
          </div>
          <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
            {name}
          </span>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 text-sm font-medium w-full transition cursor-pointer"
        >
          <LogoutIcon sx={{ fontSize: 18 }} />
          {t("logout")}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
