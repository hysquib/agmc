import { Sun, Moon, Menu, Github } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@/hooks/useTheme";

interface NavbarProps {
  onToggleSidebar: () => void;
}

export function Navbar({ onToggleSidebar }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const navLinks = [
    { text: "首页", link: "/" },
    { text: "兑奖流程", link: "/guide/redemption" },
    { text: "奖项设置", link: "/guide/awards" },
    { text: "常见问题", link: "/faq" },
  ];

  const isActive = (link: string) => {
    if (link === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(link.split("/").slice(0, 3).join("/"));
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 navbar-blur border-b border-gray-200/60 dark:border-gray-700/60">
      <div className="h-16 px-4 lg:px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={onToggleSidebar}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="切换侧边栏"
          >
            <Menu className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>

          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="w-9 h-9 rounded-lg gradient-bg flex items-center justify-center text-white font-bold">
              A
            </div>
            <span className="gradient-text">AGMC</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1 ml-8">
            {navLinks.map((item) => (
              <Link
                key={item.link}
                to={item.link}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive(item.link)
                    ? "text-brand-600 dark:text-brand-400"
                    : "text-gray-600 dark:text-gray-300 hover:text-brand-500 dark:hover:text-brand-400"
                }`}
              >
                {item.text}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </a>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="切换主题"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-gray-300" />
            ) : (
              <Moon className="w-5 h-5 text-gray-600" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
