import { Link } from "react-router-dom";
import { Gift, ArrowRight } from "lucide-react";
import { prizeCatalog } from "@/data/awards";

export function PrizesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 lg:py-16">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-50 dark:bg-brand-950/50 rounded-full text-brand-600 dark:text-brand-300 text-sm font-medium mb-4">
          <Gift className="w-4 h-4" />
          <span>奖项设置</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          奖品说明
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          使用积分兑换奖品，以下是积分兑换价目表
        </p>
      </div>

      <div className="card p-6 mb-8 bg-brand-50/50 dark:bg-brand-950/20 border-brand-200 dark:border-brand-800/50">
        <p className="text-gray-700 dark:text-gray-300">
          获得的积分可以用于兑换以下奖品。在兑奖流程中，向兑奖人员告知你想要的奖品及定制要求（如图片、尺寸等）。
        </p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
        {prizeCatalog.map((prize, index) => (
          <div
            key={index}
            className="card p-5 text-center animate-slide-up"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <div className="w-12 h-12 rounded-xl bg-brand-50 dark:bg-brand-950/50 flex items-center justify-center mx-auto mb-3">
              <Gift className="w-6 h-6 text-brand-500" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              {prize.name}
            </h3>
            <div className="inline-flex items-center gap-1 px-3 py-1 bg-brand-50 dark:bg-brand-950/50 rounded-full">
              <span className="text-sm font-medium text-brand-600 dark:text-brand-300">
                {prize.points} 积分
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="card p-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          奖品发放说明
        </h2>
        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2 flex-shrink-0" />
            <span>兑奖人员会统计你想要的奖品和定制要求</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2 flex-shrink-0" />
            <span>奖品将邮寄至你所填写的地址</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2 flex-shrink-0" />
            <span>如未在报名时填写地址，可后续告知赛事组希望邮寄到的地址</span>
          </li>
        </ul>

        <div className="mt-6">
          <Link to="/guide/redemption" className="btn-primary">
            查看兑奖流程
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
