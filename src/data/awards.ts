export interface TrackAward {
  track: string;
  description: string;
  totalReward: string;
  groups: {
    name: string;
    rankings: { rank: string; prize: string; points: string }[];
  }[];
}

export const awardsData: TrackAward[] = [
  {
    track: "个人赛·初中组",
    description: "赛制结构与 AMC 12 类似，25 道单项选择题，考试时长 2 小时。",
    totalReward: "奖金与奖品总价值约 4500 元",
    groups: [
      {
        name: "监考组",
        rankings: [
          { rank: "1", prize: "¥300", points: "50" },
          { rank: "2", prize: "¥180", points: "30" },
          { rank: "3", prize: "¥120", points: "20" },
          { rank: "4", prize: "¥75", points: "10" },
          { rank: "5", prize: "¥50", points: "10" },
          { rank: "6-10", prize: "¥15-35", points: "-" },
          { rank: "11-20", prize: "¥6", points: "-" },
        ],
      },
      {
        name: "自由组",
        rankings: [
          { rank: "1", prize: "¥200", points: "40" },
          { rank: "2", prize: "¥120", points: "20" },
          { rank: "3", prize: "¥80", points: "10" },
          { rank: "4", prize: "¥50", points: "5" },
          { rank: "5", prize: "¥35", points: "5" },
          { rank: "6-10", prize: "¥10-15", points: "-" },
          { rank: "11-20", prize: "¥4", points: "-" },
        ],
      },
    ],
  },
  {
    track: "个人赛·高中组",
    description: "赛制结构与 HMMT 二月赛一致，包含代数与数论、几何、组合三个部分，每部分 10 道填空题。",
    totalReward: "奖金与奖品总价值约 7500 元",
    groups: [
      {
        name: "监考组",
        rankings: [
          { rank: "1", prize: "¥700", points: "70" },
          { rank: "2", prize: "¥340", points: "40" },
          { rank: "3", prize: "¥155", points: "30" },
          { rank: "4-5", prize: "¥90", points: "20" },
          { rank: "6-7", prize: "¥70", points: "15" },
          { rank: "8-10", prize: "¥45", points: "10" },
          { rank: "11-20", prize: "¥100（总分）", points: "10" },
          { rank: "21-30", prize: "¥50（总分）", points: "5" },
        ],
      },
      {
        name: "自由组",
        rankings: [
          { rank: "1", prize: "¥450", points: "45" },
          { rank: "2", prize: "¥225", points: "30" },
          { rank: "3", prize: "¥110", points: "20" },
          { rank: "4-5", prize: "¥70", points: "15" },
          { rank: "6-7", prize: "¥45", points: "10" },
          { rank: "8-10", prize: "¥25", points: "5" },
          { rank: "11-20", prize: "¥70（总分）", points: "7" },
          { rank: "21-30", prize: "¥40（总分）", points: "4" },
        ],
      },
    ],
  },
  {
    track: "团队赛",
    description: "赛制结构与 HMMT 二月赛一致，包含证明轮（10 道证明题）和抢答轮（36 道填空题），队伍人数上限 6 人。",
    totalReward: "奖金与奖品总价值约 6500 元",
    groups: [
      {
        name: "监考组",
        rankings: [
          { rank: "1", prize: "¥600", points: "120" },
          { rank: "2", prize: "¥300", points: "60" },
          { rank: "3", prize: "¥135", points: "30" },
          { rank: "4", prize: "¥60", points: "15" },
          { rank: "5", prize: "¥30", points: "15" },
          { rank: "6-10", prize: "¥15", points: "-" },
        ],
      },
      {
        name: "自由组",
        rankings: [
          { rank: "1", prize: "¥400", points: "80" },
          { rank: "2", prize: "¥200", points: "40" },
          { rank: "3", prize: "¥90", points: "20" },
          { rank: "4", prize: "¥40", points: "10" },
          { rank: "5", prize: "¥20", points: "10" },
          { rank: "6-10", prize: "¥10", points: "-" },
        ],
      },
    ],
  },
];

export interface PrizeItem {
  name: string;
  points: string;
}

export const prizeCatalog: PrizeItem[] = [
  { name: "定制抱枕", points: "40" },
  { name: "普通手办", points: "30-60" },
  { name: "充电宝", points: "30" },
  { name: "保温杯", points: "25" },
  { name: "大零食包", points: "20" },
  { name: "笔记本", points: "10" },
  { name: "文具", points: "5-15" },
  { name: "书签/贺卡", points: "5" },
  { name: "小份零食", points: "5" },
  { name: "定制手机壳", points: "5" },
  { name: "饭卡套", points: "5" },
  { name: "定制钥匙扣", points: "5" },
];
