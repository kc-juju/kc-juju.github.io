// 這裡存放全站共用的 Tailwind Class 組合
export const styles = {
    mainContainer: "min-h-screen pb-24",

    // 區塊容器
    sectionWrapper: "py-24 px-6 max-w-4xl mx-auto text-center",

    // 文字樣式
    sectionTitle:
        "text-3xl mb-8 border-b border-gray-200 pb-4 inline-block px-10 font-medium text-stone-800",
    paragraph: "text-lg leading-loose text-gray-600",
    footerText:
        "py-16 text-center text-gray-400 text-sm tracking-[0.2em] uppercase font-light",

    // 組件樣式
    primaryBtn:
        "inline-block bg-stone-800 text-white px-12 py-4 rounded-full hover:bg-stone-900 transition-all shadow-lg active:scale-95",

    // 資訊卡片專屬 Token
    infoCard: {
        container:
            "bg-white p-8 rounded-2xl shadow-sm border border-stone-100 transition-all hover:shadow-md",
        label: "text-stone-400 mb-4 uppercase tracking-[0.2em] text-xs font-bold",
        title: "text-xl font-medium text-stone-800",
        subtitle: "mt-2 text-gray-500 text-sm leading-relaxed",
        link: "text-amber-700 underline text-sm mt-4 block font-medium hover:text-amber-900 transition-colors",
    },

    // 底部導覽列專屬 Token
    tabBar: {
        nav: "fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md animate-slide-up",
        container:
            "bg-white/70 backdrop-blur-lg border border-white/30 shadow-2xl rounded-2xl flex justify-around items-center py-3 px-2",
        item: "flex flex-col items-center gap-1 group transition-all duration-300",
        iconBox:
            "p-2 rounded-xl group-hover:bg-amber-100 group-active:scale-90 transition-all",
        svg: "w-6 h-6 stroke-gray-600 group-hover:stroke-amber-700",
        label: "text-[10px] font-medium text-gray-500 group-hover:text-amber-800 uppercase tracking-widest",
    },

    // RSVP 區塊專屬 Token
    rsvp: {
        section: "py-24 bg-stone-100 px-6 text-center",
        container: "max-w-2xl mx-auto",
        title: "text-3xl mb-6 font-medium text-stone-800",
        description: "mb-10 text-gray-600",
        deadlineHighlight: "text-amber-800 font-medium",
        primaryBtn:
            "inline-block bg-stone-800 text-white px-12 py-4 rounded-full hover:bg-stone-900 transition-all shadow-lg active:scale-95",
    },
};
