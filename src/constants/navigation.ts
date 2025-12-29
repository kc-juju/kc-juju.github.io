// 定義導覽項目的型別（如果你使用 TypeScript）
export interface NavItem {
    id: string; // 用於 key 值與邏輯辨識
    label: string; // 顯示在按鈕下方的文字
    href: string; // 點擊後跳轉的錨點 (對應 index.astro 中的 section id)
    iconPath: string; // SVG 圖示的路徑資料 (D 屬性)
}

export const navigationItems: NavItem[] = [
    {
        id: "home",
        label: "首頁",
        href: "#home",
        // Hero 圖示
        iconPath:
            "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    },
    {
        id: "story",
        label: "故事",
        href: "#story",
        // 心型圖示
        iconPath:
            "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    },
    {
        id: "location",
        label: "地點",
        href: "#location",
        // 地圖圖示
        iconPath:
            "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
    },
    {
        id: "rsvp",
        label: "回覆",
        href: "#rsvp",
        // 表單圖示
        iconPath:
            "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
    },
];
