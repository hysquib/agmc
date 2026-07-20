import { Link } from "react-router-dom";
import { Gift, ArrowRight } from "lucide-react";
import { awardsData } from "@/data/awards";

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
          各奖项对应的具体奖品明细和领取说明
        </p>
      </div>

      <div className="prose-custom mb-12">
        <h2>奖品一览</h2>
        <p>
          AGMC 数学竞赛为各等级获奖者准备了丰富的奖品，以下是各奖项包含的具体内容：
        </p>
      </div>

      <div className="space-y-6 mb-12">
        {awardsData.map((award, index) => (
          <div key={award.level} className="card p-6">
            <div className="flex items-center gap-4 mb-4">
              <span
                className={`px-4 py-1.5 rounded-full text-sm font-bold bg-gradient-to-r ${award.color} text-white`}
              >
                {award.level}
              </span>
              <span className="text-lg font-semibold text-gray-900 dark:text-white">
                {award.name}
              </span>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
              {award.prizes.map((prize, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-4 py-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg"
                >
                  <Gift className="w-4 h-4 text-brand-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {prize}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="prose-custom">
        <h2>奖品说明</h2>
        <ul>
          <li>所有奖品图片仅供参考，具体以实物为准</li>
          <li>奖学金为税前金额，个人所得税由获奖者承担</li>
          <li>夏令营等活动类奖品具体时间另行通知</li>
          <li>如遇奖品缺货，组委会有权更换为同等价值的其他奖品</li>
          <li>电子证书将发送至获奖选手注册时使用的邮箱</li>
        </ul>

        <h2>奖品发放</h2>
        <p>
          兑奖申请审核通过后，我们将在 7-15 个工作日内安排奖品发放。
          你可以通过申请编号在官网查询奖品发放进度。
        </p>

        <div className="mt-8">
          <Link to="/guide/redemption" className="btn-primary">
            查看兑奖流程
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
