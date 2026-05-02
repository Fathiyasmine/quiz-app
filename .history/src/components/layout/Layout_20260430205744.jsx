import { useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import BottomNav from "./BottomNav";

// Pages sans navigation (login, signup)
const NO_NAV_ROUTES = ["/", "/signup"];

const Layout = ({ children }) => {
  const location = useLocation();
  const hideNav = NO_NAV_ROUTES.includes(location.pathname);

  if (hideNav) {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar — visible uniquement desktop */}
      <Sidebar />

      {/* Contenu principal */}
      <main className="flex-1 md:ml-64">
        <div className="max-w-lg mx-auto bg-white min-h-screen md:shadow-xl">
          {children}
        </div>
      </main>

      {/* Bottom nav — visible uniquement mobile */}
      <BottomNav />
    </div>
  );
};

export default Layout;
