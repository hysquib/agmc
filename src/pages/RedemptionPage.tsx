import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {
  FileCheck,
  CheckCircle2,
  Search,
  Gift,
  Users,
  ArrowRight,
  Smartphone,
  CreditCard,
  Banknote,
  MessageCircle,
  ExternalLink,
  QrCode,
  Send,
} from "lucide-react";

type TabType = "individual" | "team";

interface PaymentMethod {
  icon: React.ElementType;
  name: string;
  bgColor: string;
  iconBg: string;
  fields: string[];
}

export function RedemptionPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabFromUrl = searchParams.get("tab");
  const [activeTab, setActiveTab] = useState<TabType>(
    tabFromUrl === "team" ? "team" : "individual"
  );

  useEffect(() => {
    setActiveTab(tabFromUrl === "team" ? "team" : "individual");
  }, [tabFromUrl]);

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    setSearchParams({ tab });
  };

  const paymentMethods: PaymentMethod[] = [
    {
      icon: MessageCircle,
      name: "微信",
      bgColor: "bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800/50",
      iconBg: "bg-green-500",
      fields: ["微信号"],
    },
    {
      icon: Smartphone,
      name: "支付宝",
      bgColor: "bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800/50",
      iconBg: "bg-blue-500",
      fields: ["支付宝账户实名认证人的姓名", "对应的手机号"],
    },
    {
      icon: Banknote,
      name: "银行卡",
      bgColor: "bg-orange-50 dark:bg-orange-950/30 border-orange-200 dark:border-orange-800/50",
      iconBg: "bg-orange-500",
      fields: ["银行卡发卡行", "银行卡卡号", "银行卡持卡人姓名"],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 lg:py-16">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-50 dark:bg-brand-950/50 rounded-full text-brand-600 dark:text-brand-300 text-sm font-medium mb-4">
          <FileCheck className="w-4 h-4" />
          <span>兑奖指南</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          兑奖流程
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          按照以下步骤操作，即可顺利完成兑奖。需在所有赛道的成绩均公布后才能兑换。
        </p>
      </div>

      {/* 标签页切换 */}
      <div className="flex gap-2 mb-8 border-b border-gray-200 dark:border-gray-700">
        <button
          onClick={() => handleTabChange("individual")}
          className={`px-6 py-3 text-sm font-medium transition-colors duration-200 border-b-2 ${
            activeTab === "individual"
              ? "text-brand-600 dark:text-brand-400 border-brand-500"
              : "text-gray-500 dark:text-gray-400 border-transparent hover:text-gray-700 dark:hover:text-gray-300"
          }`}
        >
          个人赛
        </button>
        <button
          onClick={() => handleTabChange("team")}
          className={`px-6 py-3 text-sm font-medium transition-colors duration-200 border-b-2 ${
            activeTab === "team"
              ? "text-brand-600 dark:text-brand-400 border-brand-500"
              : "text-gray-500 dark:text-gray-400 border-transparent hover:text-gray-700 dark:hover:text-gray-300"
          }`}
        >
          团队赛
        </button>
      </div>

      {/* 个人赛内容 */}
      {activeTab === "individual" && (
        <div className="animate-fade-in">
          {/* 步骤1：查询成绩 */}
          <div className="relative pl-16 pb-12">
            <div className="absolute left-[30px] top-16 bottom-0 w-0.5 bg-gradient-to-b from-brand-200 to-transparent dark:from-brand-800" />
            <div className="absolute left-0 top-0 w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center shadow-lg shadow-brand-500/30">
              <span className="absolute -top-2 -right-2 w-6 h-6 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center text-xs font-bold text-brand-500 border-2 border-brand-500">
                1
              </span>
              <Search className="w-7 h-7 text-white" />
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                查询成绩
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                打开总奖金与总积分查询网址，输入参赛号与手机号，按照提示收取验证码并点击查询，然后将得到的页面截屏保存。
              </p>
              <a
                href="https://www.kdocs.cn/etapps/query/q/8RiHn0e2/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-brand-50 dark:bg-brand-950/50 text-brand-600 dark:text-brand-300 rounded-lg text-sm font-medium hover:bg-brand-100 dark:hover:bg-brand-900/30 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                打开查询网址
              </a>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-3">
                注意：该网址在兑奖开放前不可使用。如果有积分，在第一步查询的结果中寻找填写链接。
              </p>
              <div className="mt-4 flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                <Gift className="w-5 h-5 text-brand-500 flex-shrink-0" />
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  如有积分需要兑换奖品，可点击下方按钮查看奖品价目表
                </span>
                <Link
                  to="/guide/prizes"
                  className="ml-auto inline-flex items-center gap-1 px-3 py-1.5 bg-brand-500 text-white rounded-lg text-xs font-medium hover:bg-brand-600 transition-colors"
                >
                  查看奖品
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>

          {/* 步骤2：添加企业微信客服 */}
          <div className="relative pl-16 pb-12">
            <div className="absolute left-[30px] top-16 bottom-0 w-0.5 bg-gradient-to-b from-brand-200 to-transparent dark:from-brand-800" />
            <div className="absolute left-0 top-0 w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center shadow-lg shadow-brand-500/30">
              <span className="absolute -top-2 -right-2 w-6 h-6 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center text-xs font-bold text-brand-500 border-2 border-brand-500">
                2
              </span>
              <QrCode className="w-7 h-7 text-white" />
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                添加企业微信客服
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                添加兑奖人员的企业微信客服，扫描下方二维码添加。
              </p>
              <div className="flex justify-center">
                <img
                  src="/agmc/qrcode.jpg"
                  alt="企业微信客服二维码"
                  className="w-40 h-40 rounded-lg border border-gray-200 dark:border-gray-700"
                />
              </div>
            </div>
          </div>

          {/* 步骤3：发送截图 */}
          <div className="relative pl-16 pb-12">
            <div className="absolute left-[30px] top-16 bottom-0 w-0.5 bg-gradient-to-b from-brand-200 to-transparent dark:from-brand-800" />
            <div className="absolute left-0 top-0 w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center shadow-lg shadow-brand-500/30">
              <span className="absolute -top-2 -right-2 w-6 h-6 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center text-xs font-bold text-brand-500 border-2 border-brand-500">
                3
              </span>
              <Send className="w-7 h-7 text-white" />
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                发送截图
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                将之前的查询页面截图发送给兑奖人员，兑奖人员会进行核对。
              </p>
            </div>
          </div>

          {/* 步骤4：选择奖金到账方式 */}
          <div className="relative pl-16 pb-12">
            <div className="absolute left-[30px] top-16 bottom-0 w-0.5 bg-gradient-to-b from-brand-200 to-transparent dark:from-brand-800" />
            <div className="absolute left-0 top-0 w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center shadow-lg shadow-brand-500/30">
              <span className="absolute -top-2 -right-2 w-6 h-6 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center text-xs font-bold text-brand-500 border-2 border-brand-500">
                4
              </span>
              <CreditCard className="w-7 h-7 text-white" />
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                选择奖金到账方式
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                描述奖金到账方式，请选择一种并填写所需信息：
              </p>

              <div className="space-y-4">
                {paymentMethods.map((method) => (
                  <div
                    key={method.name}
                    className={`rounded-xl border p-5 ${method.bgColor}`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-14 h-14 rounded-xl ${method.iconBg} flex items-center justify-center flex-shrink-0`}
                      >
                        <method.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          {method.name}
                        </h4>
                        <ul className="space-y-2">
                          {method.fields.map((field, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                            >
                              <CheckCircle2 className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
                              <span>{field}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 步骤5：积分兑换奖品 */}
          <div className="relative pl-16 pb-12">
            <div className="absolute left-[30px] top-16 bottom-0 w-0.5 bg-gradient-to-b from-brand-200 to-transparent dark:from-brand-800" />
            <div className="absolute left-0 top-0 w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center shadow-lg shadow-brand-500/30">
              <span className="absolute -top-2 -right-2 w-6 h-6 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center text-xs font-bold text-brand-500 border-2 border-brand-500">
                5
              </span>
              <Gift className="w-7 h-7 text-white" />
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                积分兑换奖品
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                如果你有积分并需要兑换奖品：发送完查询页面截图后，等待兑奖人员发送奖品兑换链接，填写对应的收件信息以及要兑换的奖品。
              </p>
              <Link
                to="/guide/prizes"
                className="inline-flex items-center gap-2 text-brand-500 hover:text-brand-600 text-sm font-medium"
              >
                查看奖品价目表
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* 步骤6：等待到账 */}
          <div className="relative pl-16">
            <div className="absolute left-0 top-0 w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center shadow-lg shadow-brand-500/30">
              <span className="absolute -top-2 -right-2 w-6 h-6 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center text-xs font-bold text-brand-500 border-2 border-brand-500">
                6
              </span>
              <CheckCircle2 className="w-7 h-7 text-white" />
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                等待到账
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                等待奖金到账与奖品送达。
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 团队赛内容 */}
      {activeTab === "team" && (
        <div className="animate-fade-in">
          <div className="relative pl-16">
            <div className="absolute left-0 top-0 w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center shadow-lg shadow-brand-500/30">
              <span className="absolute -top-2 -right-2 w-6 h-6 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center text-xs font-bold text-brand-500 border-2 border-brand-500">
                1
              </span>
              <Users className="w-7 h-7 text-white" />
            </div>

            <div className="card p-6 md:p-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                等待加入团队群
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                负责人会把客服拉到有奖金和积分的队伍的 QQ 群。
              </p>
              <div className="flex items-start gap-3 p-4 bg-brand-50 dark:bg-brand-950/30 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  只需要等待拉进群就行，别的不用管。
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
