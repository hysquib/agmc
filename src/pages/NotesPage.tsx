import { AlertTriangle, Clock, ShieldCheck, Package, UserX } from "lucide-react";

export function NotesPage() {
  const notes = [
    {
      icon: Clock,
      title: "兑奖期限",
      items: [
        "兑奖有效期为获奖名单公布之日起 30 天内",
        "逾期未申请视为自动放弃获奖资格",
        "特殊情况可申请延期，需提前联系组委会",
      ],
      color: "amber",
    },
    {
      icon: ShieldCheck,
      title: "信息安全",
      items: [
        "所有提交的个人信息仅用于兑奖审核和奖品发放",
        "我们严格保护您的个人隐私，不会向第三方泄露",
        "请通过官方渠道提交申请，谨防诈骗",
      ],
      color: "blue",
    },
    {
      icon: Package,
      title: "奖品发放",
      items: [
        "审核通过后 7-15 个工作日内安排发放",
        "实物奖品默认使用顺丰快递，偏远地区可能延迟",
        "奖学金将转账至您提供的银行账户",
        "奖品一经签收，非质量问题不予退换",
      ],
      color: "green",
    },
    {
      icon: UserX,
      title: "取消资格情形",
      items: [
        "经查实存在作弊、抄袭等违规行为",
        "提供虚假个人信息或证明材料",
        "严重违反竞赛章程和相关规定",
        "其他影响竞赛公平性的行为",
      ],
      color: "red",
    },
  ];

  const colorMap: Record<string, { bg: string; text: string; border: string }> = {
    amber: {
      bg: "bg-amber-100 dark:bg-amber-900/50",
      text: "text-amber-600 dark:text-amber-400",
      border: "border-amber-200 dark:border-amber-800/50",
    },
    blue: {
      bg: "bg-blue-100 dark:bg-blue-900/50",
      text: "text-blue-600 dark:text-blue-400",
      border: "border-blue-200 dark:border-blue-800/50",
    },
    green: {
      bg: "bg-green-100 dark:bg-green-900/50",
      text: "text-green-600 dark:text-green-400",
      border: "border-green-200 dark:border-green-800/50",
    },
    red: {
      bg: "bg-red-100 dark:bg-red-900/50",
      text: "text-red-600 dark:text-red-400",
      border: "border-red-200 dark:border-red-800/50",
    },
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 lg:py-16">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 dark:bg-amber-950/30 rounded-full text-amber-600 dark:text-amber-400 text-sm font-medium mb-4">
          <AlertTriangle className="w-4 h-4" />
          <span>重要提醒</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          注意事项
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          兑奖前请仔细阅读以下注意事项，确保兑奖顺利进行
        </p>
      </div>

      <div className="space-y-6">
        {notes.map((note, index) => {
          const colors = colorMap[note.color];
          return (
            <div
              key={note.title}
              className={`card p-6 border ${colors.border} animate-slide-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center flex-shrink-0`}>
                  <note.icon className={`w-6 h-6 ${colors.text}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {note.title}
                  </h3>
                  <ul className="space-y-2">
                    {note.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300"
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${colors.text.replace("text-", "bg-")} mt-2 flex-shrink-0`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
