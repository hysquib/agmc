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
    title: "快速开始",
    items: [
      { text: "什么是 AGMC", link: "/guide/introduction" },
      { text: "兑奖流程", link: "/guide/redemption" },
    ],
  },
  {
    title: "奖项设置",
    items: [
      { text: "奖项等级", link: "/guide/awards" },
      { text: "奖品说明", link: "/guide/prizes" },
    ],
  },
  {
    title: "兑奖指南",
    items: [
      { text: "所需材料", link: "/guide/materials" },
      { text: "注意事项", link: "/guide/notes" },
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
