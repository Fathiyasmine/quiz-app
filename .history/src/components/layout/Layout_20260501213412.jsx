import { useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import BottomNav from "./BottomNav";

const NO_NAV_ROUTES = ["/", "/signup"];

const Layout = ({ children }) => {
  const location = useLocation();
  const hideNav = NO_NAV_ROUTES.includes(location.pathname);

  if (hideNav) return <>{children}</>;

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main
        className="flex-1 md:ml-64 min-h-screen"
        style={{ background: "red", height: "100vh" }}
      >
        {children}
      </main>
      <BottomNav />
    </div>
  );
};

export default Layout;
