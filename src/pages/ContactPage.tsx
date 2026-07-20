import { Mail, MessageCircle } from "lucide-react";

export function ContactPage() {
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
        <a
          href="mailto:hysquib@iCloud.com"
          className="card p-6 group animate-slide-up"
        >
          <div
            className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
          >
            <Mail className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
            邮箱联系
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
            发送邮件获取详细帮助
          </p>
          <p className="text-brand-500 font-medium text-sm">hysquib@iCloud.com</p>
        </a>

        <a
          href="#"
          className="card p-6 group animate-slide-up"
          style={{ animationDelay: "0.1s" }}
        >
          <div
            className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
          >
            <MessageCircle className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
            QQ 联系
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
            添加 QQ 获取即时帮助
          </p>
          <p className="text-brand-500 font-medium text-sm">3596521659</p>
        </a>
      </div>

      <div className="card p-6 md:p-8 text-center">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          企业微信
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          扫描下方二维码，添加企业微信客服
        </p>
        <div className="flex justify-center">
          <img
            src="/agmc/qrcode.jpg"
            alt="企业微信二维码"
            className="w-48 h-48 rounded-lg border border-gray-200 dark:border-gray-700"
          />
        </div>
      </div>
    </div>
  );
}
