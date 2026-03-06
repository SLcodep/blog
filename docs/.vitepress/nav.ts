// .vitepress/navConfig.ts
import type { DefaultTheme } from "vitepress";

// 定义导航配置（复用 VitePress 内置类型，保证类型提示）
export const nav: DefaultTheme.NavItem[] = [
  { text: "首页", link: "/" },
  {
    text: "前端基础",
    items: [
      { text: "javascript", link: "/javascipt/javascript" },
      { text: "css", link: "/css/01" },
      { text: "计算机网络", link: "/nwtwork/01" },
    ],
  },
  {
    text: "Vue",
    link: "/vue/start",
    activeMatch: "/10.Vue/",
  },
  {
    text: "浏览器原理",
    link: "/浏览器原理/01",
    activeMatch: "/40.性能优化与浏览器原理/",
  },
  {
    text: "React",
    link: "/react/jsx",
    activeMatch: "/15.React/",
  },
  {
    text: "功能页",
    items: [
      { text: "归档页", link: "/archives" },
      { text: "清单页", link: "/articleOverview" },
      { text: "登录页", link: "/login" },
      {
        text: "风险链接提示页",
        link: "/risk-link?target=https://vp.teek.top",
      },
    ],
  },
];
