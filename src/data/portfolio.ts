import type {
  FooterContent,
  HeroContent,
  IntroData,
  NavItem,
  SectionData,
  WorkItem,
} from "../types";

const resolveAssetPath = (assetPath: string) =>
  `${import.meta.env.BASE_URL}${assetPath.replace(/^\/+/, "")}`;

const resolveWorkItemAssets = (item: WorkItem): WorkItem => ({
  ...item,
  images: item.images?.map(resolveAssetPath),
  video: item.video ? resolveAssetPath(item.video) : undefined,
});

export const navItems: NavItem[] = [
  {
    href: "#about",
    label: "About",
  },
  {
    href: "#Else",
    label: "Visual / Animation",
  },
  {
    href: "#webUIUX",
    label: "Web UI/UX",
  },
  {
    href: "#gameUI",
    label: "Game UI",
  },
  {
    href: "#frontend",
    label: "Web Development",
  },
];

export const intro: IntroData = {
  description: {
    zh: "",
    en: "",
  },
};

export const heroContent: HeroContent = {
  title: {
    zh: "UI/UX Design, 2D Illustration, 3D Visuals",
    en: "Designing UI/UX and visual systems with AI-assisted workflows",
  },
  description: {
    zh: "專注於網站、App 與互動頁面的 UI/UX 與視覺設計，具備 2D 視覺設計與前端協作背景，能整合介面規劃、視覺風格與設計交付。",
    en: "Focused on UI/UX and visual design for websites, apps, and interactive experiences, with a background in 2D visual design and front-end collaboration, connecting interface planning, visual direction, and design delivery.",
  },
  sectionLabel: {
    zh: "About",
    en: "About",
  },
  primarySkillsLabel: {
    zh: "Design",
    en: "Design",
  },
  secondarySkillsLabel: {
    zh: "Workflow",
    en: "Workflow",
  },
  skills: [
    "UI/UX Design",
    "Wireframe / User Flow",
    "Visual Design",
    "2D Illustration",
    "Figma",
    "Photoshop",
    "Illustrator",
    "Design System",
    "Responsive Design",
  ],
  workflow: [
    "AI-assisted Design Workflow",
    "Style Guide",
    "Design Handoff",
    "Cross-team Collaboration",
  ],
};

export const footerContent: FooterContent = {
  copyright: "© 2026 All rights reserved.",
};

const sectionData: SectionData[] = [
  {
    id: "Else",
    title: {
      zh: "Visual / Animation",
      en: "Visual / Animation",
    },
    items: [
      {
        id: "visual-1",
        title: {
          zh: "2D 繪畫",
          en: "2D Illustration",
        },
        year: "2021-2025",
        description: {
          zh: "角色與場景的 2D 繪圖創作。",
          en: "A selection of 2D illustration work centered on character and scene.",
        },
        tags: {
          zh: ["2D Illustration", "角色與場景", "Photoshop", "procreate"],
          en: [
            "2D Illustration",
            "Character Design",
            "Scene Illustration",
            "Photoshop",
            "procreate",
          ],
        },
        images: [
          "/imgs/2d-illustration-1.PNG",
          "/imgs/2d-illustration-2.PNG",
          "/imgs/2d-illustration-3.PNG",
          "/imgs/2d-illustration-4.png",
          "/imgs/2d-illustration-5.png",
        ],
        links: [
          {
            label: { zh: "查看更多 Instagram", en: "More on Instagram" },
            url: "https://www.instagram.com/daburu.tw/",
          },
        ],
      },
      {
        id: "visual-2",
        title: {
          zh: "繪本創作",
          en: "Illustrated Book Project",
        },
        year: "2020",
        description: {
          zh: "以台南司法博物館為靈感延伸的繪本創作，著重角色、場景與敘事氛圍的視覺表現。",
          en: "An illustrated book project inspired by the Tainan Judicial Museum, focused on character, scene, and narrative atmosphere.",
        },
        tags: {
          zh: ["繪本創作", "角色與場景", "敘事視覺", "Photoshop"],
          en: [
            "Illustrated Book",
            "Character Design",
            "Scene Illustration",
            "Visual Storytelling",
          ],
        },
        images: ["/imgs/2d-1.webp", "/imgs/2d-2.webp", "/imgs/2d-3.webp"],
      },
      {
        id: "visual-3",
        title: {
          zh: "3D 動畫片段",
          en: "3D Animation Clips",
        },
        year: "2021",
        description: {
          zh: "3D 動畫片段製作，包含角色綁定、動態表演、剪輯與後期特效整合。",
          en: "A selection of 3D animation clips covering rigging, performance, editing, and post-production effects.",
        },
        tags: {
          zh: ["3D Animation", "Blender", "After Effects", "動態剪輯"],
          en: ["3D Animation", "Blender", "After Effects", "Animation Editing"],
        },
        video: "/videos/file.mp4",
      },
    ],
  },
  {
    id: "webUIUX",
    title: {
      zh: "Web UI/UX",
      en: "Web UI/UX",
    },
    items: [
      {
        id: "web-4",
        title: {
          zh: "企業形象網站設計",
          en: "Corporate Website Design",
        },
        year: "2025",
        description: {
          zh: "規劃專業且一致的網站視覺風格，設計具備延展性與易於開發整合的 UI 結構。",
          en: "Designed a polished corporate website with a consistent visual direction and a scalable UI structure that supports smoother development handoff.",
        },
        tags: {
          zh: ["設計系統", "元件規範", "版面規則", "介面一致性", "響應式設計"],
          en: [
            "Web Design",
            "Design System",
            "Component Guidelines",
            "Layout Planning",
            "Interface Consistency",
            "Responsive Design",
          ],
        },
        images: ["/imgs/ui-1-1.png", "/imgs/ui-1-2.png", "/imgs/ui-1-3.png"],
        links: [
          {
            label: { zh: "查看網站", en: "View Site" },
            url: "https://www.chengfeng.com.tw/",
          },
        ],
      },
      {
        id: "web-5",
        title: {
          zh: "學術單位官網設計",
          en: "Academic Website UI Concept",
        },
        year: "2025",
        description: {
          zh: "規劃官網視覺風格，設計簡潔與具備延展性的 UI 結構。",
          en: "Created a clean website concept for an academic institution with a flexible UI structure and a clear visual hierarchy.",
        },
        tags: {
          zh: ["資訊架構", "內容層級", "頁面規劃", "響應式設計"],
          en: [
            "Information Architecture",
            "Content Hierarchy",
            "Website UI",
            "Responsive Design",
            "Visual Hierarchy",
          ],
        },
        images: [
          "/imgs/ui-2-pc-1.png",
          "/imgs/ui-2-pc-2.png",
          "/imgs/ui-2-pc-3.png",
          "/imgs/ui-2-mobile-1.png",
          "/imgs/ui-2-mobile-2.png",
          "/imgs/ui-2-mobile-3.png",
        ],
      },
      {
        id: "web-6",
        title: {
          zh: "一頁式網站設計",
          en: "Landing Page Design",
        },
        year: "2025",
        description: {
          zh: "整理一頁式網站的資訊節奏、段落切換與視覺風格，讓內容傳達更集中明確。",
          en: "Designed a landing page with focused information flow, section rhythm, and a cohesive visual direction.",
        },
        tags: {
          zh: ["Landing Page", "視覺介面", "頁面流程", "資訊架構"],
          en: [
            "Landing Page",
            "Visual Interface",
            "Page Flow",
            "Information Architecture",
          ],
        },
        images: ["/imgs/ui-3-1.png"],
      },
    ],
  },
  {
    id: "gameUI",
    title: {
      zh: "Game UI",
      en: "Game UI",
    },
    items: [
      {
        id: "game-1",
        title: {
          zh: "手機遊戲 UI 練習",
          en: "Mobile Game UI Concepts",
        },
        year: "2024",
        description: {
          zh: "以外星、節奏與 RPG 世界觀為主題，探索手機遊戲介面在視覺節奏、資訊層級與操作感受上的平衡。",
          en: "A set of mobile game UI concepts exploring the balance of visual rhythm, information hierarchy, and interaction across sci-fi, rhythm, and RPG themes.",
        },
        tags: {
          zh: ["Game UI", "HUD 設計", "資訊層級", "介面風格", "視覺節奏"],
          en: [
            "Game UI",
            "HUD Design",
            "Information Hierarchy",
            "Interface Style",
            "Visual Rhythm",
          ],
        },
        images: [
          "/imgs/game-ui-1.JPG",
          "/imgs/game-ui-2.JPG",
          "/imgs/game-ui-3.JPG",
          "/imgs/game-ui-4.JPG",
          "/imgs/game-ui-5.JPG",
        ],
      },
    ],
  },
  {
    id: "frontend",
    title: {
      zh: "Web Development",
      en: "Web Development",
    },
    items: [
      {
        id: "web-1",
        title: {
          zh: "台灣鑄造學會官網",
          en: "Taiwan Foundry Society Website",
        },
        year: "2025",
        description: {
          zh: "負責網站介面規劃，整合購物車、結帳、會員與多語系內容需求，建立更完整的瀏覽與轉換流程。",
          en: "Planned the website interface around cart, checkout, membership, and multilingual content, shaping a clearer browsing and conversion flow.",
        },
        tags: {
          zh: ["網站 UI 設計", "購物流程", "會員體驗", "多語系介面", "RWD"],
          en: [
            "Website UI Design",
            "Purchase Flow",
            "Member Experience",
            "Multilingual Interface",
            "Responsive Design",
          ],
        },
        images: ["/imgs/dev-2.png"],
        links: [
          {
            label: { zh: "查看網站", en: "View Site" },
            url: "https://www.foundry.org.tw/",
          },
        ],
      },
      {
        id: "web-2",
        title: {
          zh: "石化產業媒合平台",
          en: "Petrochemical Industry Matching Platform",
        },
        year: "2025",
        description: {
          zh: "優化平台互動體驗與操作流暢度，補強無障礙與鍵盤操作細節，提升整體可用性。",
          en: "Refined the platform interaction flow and usability, including accessibility and keyboard-navigation improvements.",
        },
        tags: {
          zh: ["UX 優化", "無障礙設計", "鍵盤操作", "可用性改善"],
          en: [
            "UX Enhancements",
            "Accessibility",
            "Keyboard Navigation",
            "Usability Improvements",
          ],
        },
        images: ["/imgs/dev-3.png"],
        links: [
          {
            label: { zh: "查看網站", en: "View Site" },
            url: "https://sps.isafe.org.tw/",
          },
        ],
      },
      {
        id: "web-3",
        title: {
          zh: "承鋒鑄造型錄網站",
          en: "Cheng Feng Casting Catalog Website",
        },
        year: "2025",
        description: {
          zh: "規劃型錄網站的版面、元件與內容呈現方式，讓產品資訊與多語系瀏覽更清楚一致。",
          en: "Handled layout planning, component design, and multilingual content presentation for a catalog-style website.",
        },
        tags: {
          zh: [
            "型錄網站",
            "版型規劃",
            "元件設計",
            "內容展示",
            "多語系介面",
            "響應式設計",
          ],
          en: [
            "Catalog Website",
            "Layout Planning",
            "Component Design",
            "Content Presentation",
            "Multilingual Interface",
            "Responsive Design",
          ],
        },
        images: ["/imgs/dev-1.png"],
        links: [
          {
            label: { zh: "查看網站", en: "View Site" },
            url: "https://www.chengfeng.com.tw/",
          },
        ],
      },
    ],
  },
];

export const sections: SectionData[] = sectionData.map((section) => ({
  ...section,
  items: section.items.map(resolveWorkItemAssets),
}));
