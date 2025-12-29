import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
    // 1. 部署設定：Repo 名稱是個人主頁，所以 base 是 '/'
    site: "https://kc-juju.github.io",
    base: "/",

    // 2. 整合設定：只留這行，把之前的 tailwindcss from @tailwindcss/vite 刪掉
    integrations: [tailwind()],

    // 3. 靜態輸出
    output: "static",
});
