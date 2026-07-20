import { Link } from "react-router-dom";
import { Trophy, ArrowRight, BookOpen, Award, Calendar, Users } from "lucide-react";

export function IntroductionPage() {
  const info = [
    { label: "官方网站", value: "https://agmc-k.com/" },
    { label: "官方交流群", value: "一群：470103005；二群：1031885678；三群：1039059322" },
    { label: "考试组别", value: "监考组 / 自由组" },
    { label: "报名费用", value: "无" },
    { label: "奖金与奖品", value: "7500 元现金奖金 + 总价值 11000 元奖品 = 总价值 18500 元奖励" },
  ];

  const schedule = [
    { track: "个人赛·初中组", time: "2026 年 7 月 30 日 13:00—15:00" },
    { track: "个人赛·高中组", time: "2026 年 8 月 2 日 13:00—16:30（中场休息 1 小时）" },
    { track: "团队赛", time: "2026 年 8 月 4 日 13:00—16:30（中场休息 1 小时）" },
  ];

  const tracks = [
    {
      name: "个人赛·初中组",
      desc: "赛制结构与 AMC 12 类似，难度略高于 AMC 12。共 25 道单项选择题，考试时长 2 小时。",
    },
    {
      name: "个人赛·高中组",
      desc: "赛制结构与 HMMT 二月赛一致。包含代数与数论、几何、组合三个部分，每部分 10 道填空题，每部分 50 分钟。",
    },
    {
      name: "团队赛",
      desc: "赛制结构与 HMMT 二月赛一致。包含证明轮（10 道证明题）和抢答轮（36 道填空题），队伍人数上限 6 人。",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 lg:py-16">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-50 dark:bg-brand-950/50 rounded-full text-brand-600 dark:text-brand-300 text-sm font-medium mb-4">
          <Trophy className="w-4 h-4" />
          <span>快速开始</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          什么是 AGMC
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          第六届 AGMC 数学竞赛 · 2026.7.30—8.4
        </p>
      </div>

      <div className="prose-custom mb-12">
        <h2>竞赛简介</h2>
        <p>
          AGMC 是一项面向中学生的公益数学竞赛，从 2024 年寒假开始举办第一届，之后每隔半年举办一届，目前已经是第六届了！我们热忱欢迎所有热爱数学的同学参与，旨在帮助大家领略数学的独特魅力。
        </p>
      </div>

      <div className="card p-6 mb-8">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">基本信息</h2>
        <dl className="space-y-3">
          {info.map((item) => (
            <div key={item.label} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 sm:w-32 flex-shrink-0">
                {item.label}
              </dt>
              <dd className="text-sm text-gray-700 dark:text-gray-300">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="card p-6 mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="w-5 h-5 text-brand-500" />
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">赛事时间</h2>
        </div>
        <div className="space-y-3">
          {schedule.map((item) => (
            <div key={item.track} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
              <span className="text-sm font-medium text-gray-900 dark:text-white sm:w-32 flex-shrink-0">
                {item.track}
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-300">{item.time}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Users className="w-5 h-5 text-brand-500" />
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">赛制结构</h2>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          AGMC 数学竞赛第六届采用美式竞赛的赛制，一共包含三条赛道，可以同时报名，且奖金和奖品可以叠加。
        </p>
        <div className="space-y-4">
          {tracks.map((track) => (
            <div key={track.name} className="card p-5">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{track.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{track.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Link to="/guide/awards" className="card p-6 group">
          <div className="w-12 h-12 rounded-xl bg-brand-50 dark:bg-brand-950/50 flex items-center justify-center mb-4 group-hover:bg-brand-100 dark:group-hover:bg-brand-900/30 transition-colors">
            <Award className="w-6 h-6 text-brand-500" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-brand-500 transition-colors">
            查看奖金说明
          </h3>
          <span className="inline-flex items-center text-brand-500 text-sm font-medium">
            了解详情
            <ArrowRight className="w-4 h-4 ml-1" />
          </span>
        </Link>

        <Link to="/guide/redemption" className="card p-6 group">
          <div className="w-12 h-12 rounded-xl bg-brand-50 dark:bg-brand-950/50 flex items-center justify-center mb-4 group-hover:bg-brand-100 dark:group-hover:bg-brand-900/30 transition-colors">
            <BookOpen className="w-6 h-6 text-brand-500" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-brand-500 transition-colors">
            兑奖流程指南
          </h3>
          <span className="inline-flex items-center text-brand-500 text-sm font-medium">
            了解详情
            <ArrowRight className="w-4 h-4 ml-1" />
          </span>
        </Link>
      </div>
    </div>
  );
}
