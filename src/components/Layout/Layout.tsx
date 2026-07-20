import { useState, useEffect, useCallback } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";

export function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // 卡片级聚光灯效果：全局鼠标跟踪
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      const rect = (card as HTMLElement).getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      (card as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
      (card as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
    });
  }, []);

  useEffect(() => {
    let rafId: number;
    const onMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => handleMouseMove(e));
    };
    document.addEventListener("mousemove", onMouseMove);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, [handleMouseMove]);

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
        <div className="page-max animate-fade-in">
          <Outlet />
        </div>
      </main>

      <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
        <div
          className={`max-w-6xl mx-auto px-4 py-8 text-center text-sm text-gray-500 dark:text-gray-400
            ${!isHomePage ? "lg:pl-64" : ""}`}
        >
          <p>© 2026 AGMC-兑换. 保留所有权利.</p>
          <p className="mt-2">
            如有疑问，请联系{" "}
            <a
              href="mailto:hysquib@iCloud.com"
              className="text-brand-500 hover:text-brand-600 transition-colors"
            >
              hysquib@iCloud.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
