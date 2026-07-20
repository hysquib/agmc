export interface SidebarItem {
  text: string;
  link: string;
}

export interface SidebarGroup {
  title: string;
  items: SidebarItem[];
}

export const sidebarData: SidebarGroup[] = [
  {
    title: "兑奖流程",
    items: [
      { text: "个人赛", link: "/guide/redemption?tab=individual" },
      { text: "团队赛", link: "/guide/redemption?tab=team" },
    ],
  },
  {
    title: "奖项设置",
    items: [
      { text: "奖金", link: "/guide/awards" },
      { text: "奖品", link: "/guide/prizes" },
    ],
  },
  {
    title: "帮助与支持",
    items: [
      { text: "常见问题", link: "/faq" },
      { text: "联系我们", link: "/about/contact" },
    ],
  },
];
