export default {
  title: "Моя Вики", // Название сайта
  description: "Персональная документация и заметки", 
  themeConfig: {
    nav: [
      { text: "Главная", link: "/" },
      { text: "Раздел 1", link: "/guide/" },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "Гид",
          items: [
            { text: "Введение", link: "/guide/" },
            { text: "Как использовать", link: "/guide/usage" },
          ]
        }
      ]
    }
  }
}
