import { Mail, MessageCircle, Clock, MapPin, Send } from "lucide-react";

export function ContactPage() {
  const contacts = [
    {
      icon: Mail,
      title: "邮箱联系",
      description: "发送邮件获取详细帮助",
      value: "support@agmc.example.com",
      link: "mailto:support@agmc.example.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: MessageCircle,
      title: "在线客服",
      description: "工作日即时在线解答",
      value: "点击咨询",
      link: "#",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Clock,
      title: "工作时间",
      description: "了解我们的服务时间",
      value: "周一至周五 9:00-18:00",
      link: "#",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: MapPin,
      title: "办公地址",
      description: "欢迎莅临指导",
      value: "北京市海淀区中关村大街1号",
      link: "#",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 lg:py-16">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-50 dark:bg-brand-950/50 rounded-full text-brand-600 dark:text-brand-300 text-sm font-medium mb-4">
          <Mail className="w-4 h-4" />
          <span>关于我们</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          联系我们
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          如有任何疑问或建议，欢迎通过以下方式与我们取得联系
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 mb-12">
        {contacts.map((contact, index) => (
          <a
            key={contact.title}
            href={contact.link}
            className="card p-6 group animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div
              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${contact.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
            >
              <contact.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
              {contact.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
              {contact.description}
            </p>
            <p className="text-brand-500 font-medium text-sm">{contact.value}</p>
          </a>
        ))}
      </div>

      <div className="card p-6 md:p-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          给我们留言
        </h2>
        <form className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                姓名
              </label>
              <input
                type="text"
                placeholder="请输入您的姓名"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                邮箱
              </label>
              <input
                type="email"
                placeholder="请输入您的邮箱"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-all"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              主题
            </label>
            <input
              type="text"
              placeholder="请输入留言主题"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              留言内容
            </label>
            <textarea
              rows={4}
              placeholder="请输入您的留言内容..."
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-all resize-none"
            />
          </div>
          <button type="button" className="btn-primary w-full sm:w-auto">
            发送留言
            <Send className="w-4 h-4 ml-2" />
          </button>
        </form>
      </div>
    </div>
  );
}
