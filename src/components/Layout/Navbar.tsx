import { Sun, Moon, Menu, ChevronDown, Maximize2, Minimize2, PanelLeftClose, PanelRightClose, LayoutGrid } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useTheme } from "@/hooks/useTheme";
import { useLayout, LayoutMode } from "@/hooks/useLayout";
import { Logo } from "@/components/Logo";

interface NavbarProps {
  onToggleSidebar: () => void;
}

const layoutModes: { mode: LayoutMode; icon: React.ElementType; label: string }[] = [
  { mode: 'full', icon: PanelLeftClose, label: '全部展开' },
  { mode: 'sidebar-only', icon: PanelRightClose, label: '侧边栏可调' },
  { mode: 'both', icon: Maximize2, label: '两者可调' },
  { mode: 'narrow', icon: LayoutGrid, label: '原始宽度' },
];

export function Navbar({ onToggleSidebar }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const { mode, setMode } = useLayout();
  const location = useLocation();
  const [awardsOpen, setAwardsOpen] = useState(false);
  const [layoutOpen, setLayoutOpen] = useState(false);
  const layoutRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (layoutRef.current && !layoutRef.current.contains(e.target as Node)) {
        setLayoutOpen(false);
      }
    };
    if (layoutOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [layoutOpen]);

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

          {/* Layout Panel */}
          <div ref={layoutRef} className="relative">
            <button
              onClick={() => setLayoutOpen(!layoutOpen)}
              className={`p-2 rounded-lg transition-all duration-150 ${
                layoutOpen
                  ? "bg-gray-100 dark:bg-gray-800"
                  : "hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
              aria-label="布局切换"
            >
              {layoutOpen ? (
                <Minimize2 className="w-5 h-5 text-brand-500" />
              ) : (
                <Maximize2 className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              )}
            </button>

            {layoutOpen && (
              <div className="absolute top-full right-0 pt-2 w-80 animate-fade-in">
                <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 p-5">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
                    布局切换
                  </h3>

                  {/* Layout mode buttons */}
                  <div className="flex gap-2 mb-5">
                    {layoutModes.map(({ mode: layoutMode, icon: Icon, label }) => (
                      <button
                        key={layoutMode}
                        onClick={() => setMode(layoutMode)}
                        className={`flex-1 flex flex-col items-center justify-center gap-1.5 p-3 rounded-lg transition-all duration-200 ${
                          mode === layoutMode
                            ? "bg-brand-500 text-white shadow-md"
                            : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
                        }`}
                        title={label}
                      >
                        <Icon className="w-4 h-4" />
                        <span className="text-[10px] font-medium">{label.slice(0, 4)}</span>
                      </button>
                    ))}
                  </div>

                  {/* Page max width slider */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-xs font-medium text-gray-500 dark:text-gray-400">页面最大宽度</label>
                    </div>
                    <input
                      type="range"
                      min={50}
                      max={100}
                      className="w-full h-1.5 rounded-full appearance-none cursor-pointer bg-gray-200 dark:bg-gray-700"
                    />
                  </div>

                  {/* Content max width slider */}
                  <div className="mb-5">
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-xs font-medium text-gray-500 dark:text-gray-400">内容最大宽度</label>
                    </div>
                    <input
                      type="range"
                      min={40}
                      max={100}
                      className="w-full h-1.5 rounded-full appearance-none cursor-pointer bg-gray-200 dark:bg-gray-700"
                    />
                  </div>

                  {/* Spotlight toggle */}
                  <div className="flex items-center justify-between py-2 border-t border-gray-100 dark:border-gray-800">
                    <div>
                      <div className="text-xs font-medium text-gray-700 dark:text-gray-300">聚光灯</div>
                      <div className="text-[10px] text-gray-400 dark:text-gray-500 mt-0.5">聚焦当前阅读区域</div>
                    </div>
                    <div className="flex gap-1">
                      <button className="px-3 py-1.5 text-xs font-medium rounded-md bg-brand-500 text-white">ON</button>
                      <button className="px-3 py-1.5 text-xs font-medium rounded-md bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400">OFF</button>
                    </div>
                  </div>

                  {/* Spotlight style */}
                  <div className="flex items-center justify-between mt-2 pt-2">
                    <div className="text-xs font-medium text-gray-500 dark:text-gray-400">聚光灯样式</div>
                    <div className="flex gap-1">
                      <button className="w-8 h-6 rounded bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600"></button>
                      <button className="w-8 h-6 rounded bg-brand-100 dark:bg-brand-950/50 border-2 border-brand-500"></button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

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
