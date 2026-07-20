export interface AwardItem {
  level: string;
  name: string;
  description: string;
  prizes: string[];
  color: string;
}

export const awardsData: AwardItem[] = [
  {
    level: "特等奖",
    name: "全球杰出奖",
    description: "授予在竞赛中表现最为卓越的选手",
    prizes: ["金奖杯一座", "获奖证书", "奖学金 ¥50,000", "名校夏令营资格"],
    color: "from-yellow-400 to-amber-500",
  },
  {
    level: "一等奖",
    name: "金奖",
    description: "授予成绩优异的选手",
    prizes: ["金质奖章", "获奖证书", "奖学金 ¥10,000", "数学培优课程"],
    color: "from-amber-400 to-yellow-500",
  },
  {
    level: "二等奖",
    name: "银奖",
    description: "授予成绩优秀的选手",
    prizes: ["银质奖章", "获奖证书", "奖学金 ¥3,000", "在线学习会员"],
    color: "from-gray-300 to-gray-400",
  },
  {
    level: "三等奖",
    name: "铜奖",
    description: "授予成绩良好的选手",
    prizes: ["铜质奖章", "获奖证书", "数学图书礼盒", "在线学习会员"],
    color: "from-orange-400 to-amber-600",
  },
  {
    level: "优秀奖",
    name: "荣誉奖",
    description: "授予表现突出的选手",
    prizes: ["荣誉证书", "定制纪念奖牌", "学习资料包"],
    color: "from-brand-400 to-brand-500",
  },
];
