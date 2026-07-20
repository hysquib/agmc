import { Trophy } from "lucide-react";
import { awardsData } from "@/data/awards";

export function AwardsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 lg:py-16">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-50 dark:bg-brand-950/50 rounded-full text-brand-600 dark:text-brand-300 text-sm font-medium mb-4">
          <Trophy className="w-4 h-4" />
          <span>奖项设置</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          奖金说明
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          AGMC 数学竞赛设置三条赛道，按排名发放现金奖金与奖品积分
        </p>
      </div>

      <div className="card p-6 mb-8 bg-brand-50/50 dark:bg-brand-950/20 border-brand-200 dark:border-brand-800/50">
        <div className="flex items-center gap-3">
          <Trophy className="w-6 h-6 text-brand-500 flex-shrink-0" />
          <p className="text-gray-700 dark:text-gray-300">
            总奖励价值 <span className="text-2xl font-bold gradient-text">¥18,500</span>
            <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">（¥7,500 现金奖金 + ¥11,000 奖品）</span>
          </p>
        </div>
      </div>

      <div className="space-y-8">
        {awardsData.map((track, index) => (
          <div
            key={track.track}
            className="card overflow-hidden animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="p-6 md:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {track.track}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {track.description}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {track.groups.map((group) => (
                  <div key={group.name} className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
                    <div className="bg-gray-50 dark:bg-gray-800/50 px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {group.name}
                      </h3>
                    </div>
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-gray-50/50 dark:bg-gray-800/30">
                          <th className="px-4 py-2 text-left font-medium text-gray-500 dark:text-gray-400">排名</th>
                          <th className="px-4 py-2 text-left font-medium text-gray-500 dark:text-gray-400">奖金</th>
                          <th className="px-4 py-2 text-left font-medium text-gray-500 dark:text-gray-400">积分</th>
                        </tr>
                      </thead>
                      <tbody>
                        {group.rankings.map((row, idx) => (
                          <tr
                            key={idx}
                            className="border-t border-gray-100 dark:border-gray-700/50"
                          >
                            <td className="px-4 py-2 text-gray-700 dark:text-gray-300">{row.rank}</td>
                            <td className="px-4 py-2 font-medium text-gray-900 dark:text-white">{row.prize}</td>
                            <td className="px-4 py-2 text-gray-600 dark:text-gray-400">{row.points}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 card p-6 bg-amber-50/50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800/50">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
          幸运奖
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          每条赛道还会有额外的幸运奖，约 1000 元。分数达到一定标准者均有约 10% 的概率获得 10 元幸运奖，获取方式为在雨课堂输入数字，中奖号码根据特定规则生成。
        </p>
      </div>
    </div>
  );
}
