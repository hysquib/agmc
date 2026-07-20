import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { useEffect } from "react";

export function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Navbar onToggleSidebar={toggleSidebar} />

      {!isHomePage && <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />}

      <main
        className={`pt-16 min-h-screen transition-all duration-300
          ${!isHomePage ? "lg:pl-64" : ""}`}
      >
        <div className="animate-fade-in">
          <Outlet />
        </div>
      </main>

      <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
        <div
          className={`max-w-6xl mx-auto px-4 py-8 text-center text-sm text-gray-500 dark:text-gray-400
            ${!isHomePage ? "lg:pl-64" : ""}`}
        >
          <p>© 2025 AGMC 数学竞赛组委会. 保留所有权利.</p>
          <p className="mt-2">
            如有疑问，请联系{" "}
            <a
              href="mailto:support@agmc.example.com"
              className="text-brand-500 hover:text-brand-600 transition-colors"
            >
              support@agmc.example.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
