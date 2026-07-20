import { Trophy, Medal, Award, Star, Crown, Gift } from "lucide-react";
import { awardsData } from "@/data/awards";

export function AwardsPage() {
  const getIcon = (level: string) => {
    switch (level) {
      case "特等奖":
        return Crown;
      case "一等奖":
        return Trophy;
      case "二等奖":
        return Medal;
      case "三等奖":
        return Award;
      default:
        return Star;
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 lg:py-16">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-50 dark:bg-brand-950/50 rounded-full text-brand-600 dark:text-brand-300 text-sm font-medium mb-4">
          <Trophy className="w-4 h-4" />
          <span>奖项设置</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          奖项等级说明
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          AGMC 数学竞赛设置多个奖项等级，表彰不同层次的优秀选手
        </p>
      </div>

      <div className="space-y-6 mb-12">
        {awardsData.map((award, index) => {
          const Icon = getIcon(award.level);
          return (
            <div
              key={award.level}
              className="card overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6 md:p-8">
                <div className="flex items-start gap-6">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${award.color} flex items-center justify-center flex-shrink-0 shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${award.color} text-white`}
                      >
                        {award.level}
                      </span>
                      <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                        {award.name}
                      </h2>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {award.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-3">
                      {award.prizes.map((prize, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 px-4 py-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg"
                        >
                          <Gift className="w-4 h-4 text-brand-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">
                            {prize}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="card p-6 md:p-8 bg-brand-50/50 dark:bg-brand-950/20 border-brand-200 dark:border-brand-800/50">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          评选规则说明
        </h3>
        <ul className="space-y-3 text-gray-600 dark:text-gray-300 text-sm">
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2 flex-shrink-0" />
            <span>各奖项获奖比例根据参赛总人数和成绩分布确定，具体以官方公布为准。</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2 flex-shrink-0" />
            <span>如出现成绩并列情况，将根据答题用时、难题得分等因素进行排序。</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2 flex-shrink-0" />
            <span>团体奖项另行评选，具体规则请参考竞赛章程或咨询组委会。</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2 flex-shrink-0" />
            <span>所有奖项的最终解释权归 AGMC 数学竞赛组委会所有。</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
