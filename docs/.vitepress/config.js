export default {
  title: "Ehqador Wiki", // Название сайта
  description: "Персональная документация и заметки",
  base: "/", // Базовый путь, если сайт размещен в подкаталоге
  themeConfig: {
    nav: [
      { text: "Главная", link: "index" }, // без .md
    ],
    sidebar: {
      "/guide/": [
        {
          text: "Гид",
          items: [
            { text: "Статья 123", link: "123" },
            { text: "Установка", link: "install" }
          ]
        }
      ]
    }
  }
}
