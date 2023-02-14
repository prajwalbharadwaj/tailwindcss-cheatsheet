// vue.config.js
module.exports = {
  publicPath: "/tailwindcss-cheatsheet/",
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/assets/style/main.scss";`,
      },
    },
  },
};
