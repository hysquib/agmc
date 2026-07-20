import { Link } from "react-router-dom";
import {
  Gift,
  Clock,
  ShieldCheck,
  ArrowRight,
  Trophy,
  HelpCircle,
  Mail,
  BookOpen,
} from "lucide-react";

export function HomePage() {
  const features = [
    {
      icon: Gift,
      title: "丰厚奖品",
      description: "多个奖项等级，奖牌、证书、奖学金等你来拿",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Clock,
      title: "快速到账",
      description: "审核通过后7-15个工作日内安排奖品发放",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: ShieldCheck,
      title: "安全可靠",
      description: "官方认证渠道，信息安全有保障",
      color: "from-emerald-500 to-green-500",
    },
  ];

  const quickLinks = [
    {
      icon: BookOpen,
      title: "兑奖流程",
      description: "了解完整的兑奖步骤",
      link: "/guide/redemption",
    },
    {
      icon: Trophy,
      title: "奖项设置",
      description: "查看各等级奖项详情",
      link: "/guide/awards",
    },
    {
      icon: HelpCircle,
      title: "常见问题",
      description: "解答你的疑惑",
      link: "/faq",
    },
    {
      icon: Mail,
      title: "联系我们",
      description: "获取帮助与支持",
      link: "/about/contact",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 hero-glow pointer-events-none" />
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-brand-200/30 rounded-full blur-3xl dark:bg-brand-700/20" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl dark:bg-purple-900/20" />

        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-50 dark:bg-brand-950/50 rounded-full text-brand-600 dark:text-brand-300 text-sm font-medium mb-8">
              <Trophy className="w-4 h-4" />
              <span>2025 年度兑奖通道已开启</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              AGMC 数学竞赛
              <br />
              <span className="gradient-text">兑奖服务中心</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              恭喜你在 AGMC 数学竞赛中取得优异成绩！
              <br className="hidden md:block" />
              在这里，你可以快速了解兑奖流程，领取属于你的荣誉与奖励。
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/guide/redemption" className="btn-primary text-base">
                开始兑奖
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/guide/awards" className="btn-secondary text-base">
                查看奖项
              </Link>
            </div>
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto mt-16 lg:mt-24 px-4">
          <div className="card p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">5</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">奖项等级</div>
              </div>
              <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">30天</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">兑奖有效期</div>
              </div>
              <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">7-15</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">工作日发放</div>
              </div>
              <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">24h</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">客服响应</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              为什么选择我们
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              我们致力于为每一位获奖选手提供优质的兑奖体验
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="card p-8 text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              快速入口
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              找到你需要的信息，快速完成兑奖
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((item, index) => (
              <Link
                key={item.title}
                to={item.link}
                className="card p-6 group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-brand-50 dark:bg-brand-950/50 flex items-center justify-center mb-4 group-hover:bg-brand-100 dark:group-hover:bg-brand-900/30 transition-colors">
                  <item.icon className="w-6 h-6 text-brand-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-brand-500 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  {item.description}
                </p>
                <span className="inline-flex items-center text-brand-500 text-sm font-medium group-hover:gap-2 gap-1 transition-all">
                  了解更多
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="card p-8 md:p-12 text-center gradient-bg text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              准备好领取你的奖励了吗？
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              按照兑奖流程指引，只需简单几步即可完成申请，让你的努力收获应有的回报。
            </p>
            <Link
              to="/guide/redemption"
              className="inline-flex items-center px-8 py-3 bg-white text-brand-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              立即开始兑奖
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
