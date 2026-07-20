import { Sun, Moon, Menu, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useTheme } from "@/hooks/useTheme";
import { Logo } from "@/components/Logo";

interface NavbarProps {
  onToggleSidebar: () => void;
}

export function Navbar({ onToggleSidebar }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [awardsOpen, setAwardsOpen] = useState(false);

  const navLinks = [
    { text: "首页", link: "/" },
    { text: "兑奖流程", link: "/guide/redemption" },
    { text: "常见问题", link: "/faq" },
  ];

  const awardsDropdown = [
    { text: "奖金", link: "/guide/awards" },
    { text: "奖品", link: "/guide/prizes" },
  ];

  const isActive = (link: string) => {
    if (link === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(link.split("/").slice(0, 3).join("/"));
  };

  const isAwardsActive = awardsDropdown.some(item => isActive(item.link));

  return (
    <header className="fixed top-0 left-0 right-0 z-50 navbar-blur border-b border-gray-200/60 dark:border-gray-700/60">
      <div className="h-16 px-4 lg:px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={onToggleSidebar}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-150"
            aria-label="切换侧边栏"
          >
            <Menu className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>

          <Link to="/" className="flex items-center gap-2.5 font-bold text-xl group">
            <Logo size={36} className="group-hover:scale-105 transition-transform" />
            <span className="gradient-text">AGMC</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1 ml-8">
            {navLinks.map((item) => (
              <Link
                key={item.link}
                to={item.link}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-150 ${
                  isActive(item.link)
                    ? "text-brand-600 dark:text-brand-400"
                    : "text-gray-600 dark:text-gray-300 hover:text-brand-500 dark:hover:text-brand-400"
                }`}
              >
                {item.text}
              </Link>
            ))}
            <div
              className="relative"
              onMouseEnter={() => setAwardsOpen(true)}
              onMouseLeave={() => setAwardsOpen(false)}
            >
              <button
                className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-150 ${
                  isAwardsActive
                    ? "text-brand-600 dark:text-brand-400"
                    : "text-gray-600 dark:text-gray-300 hover:text-brand-500 dark:hover:text-brand-400"
                }`}
              >
                奖项设置
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${awardsOpen ? "rotate-180" : ""}`} />
              </button>
              {awardsOpen && (
                <div className="absolute top-full left-0 pt-2 min-w-[120px]">
                  <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1 animate-fade-in">
                    {awardsDropdown.map((item) => (
                      <Link
                        key={item.link}
                        to={item.link}
                        onClick={() => setAwardsOpen(false)}
                        className={`block px-4 py-2 text-sm transition-colors duration-150 ${
                          isActive(item.link)
                            ? "text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/30"
                            : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                        }`}
                      >
                        {item.text}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://agmc-k.com"
            className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-brand-500 dark:hover:text-brand-400 rounded-lg transition-colors duration-150"
          >
            官网
          </a>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-150"
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
