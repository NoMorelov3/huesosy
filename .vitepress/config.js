export default {
  title: "Ehqador Wiki", // Название сайта
  description: "Персональная документация и заметки",
  themeConfig: {
    nav: [
      { text: "Главная", link: "/guide/123" }, // без .md
    ],
    sidebar: {
      "/guide/": [
        {
          text: "Гид",
          items: [
            { text: "Статья 123", link: "/guide/123" },
            { text: "Установка", link: "/guide/install" }
          ]
        }
      ]
    }
  }
}
