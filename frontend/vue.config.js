const { defineConfig } = require("@vue/cli-service");
const webpack = require("webpack");

module.exports = defineConfig({
  // Ustaw publicPath dla GitHub Pages
  // Dla repozytorium <username>.github.io użyj '/'
  // Dla innych repozytoriów użyj '/<nazwa-repo>/'
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/" // Zmień na '/nazwa-twojego-repo/' jeśli to nie jest główne repo github.io
      : "/",

  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __VUE_OPTIONS_API__: true,
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(false),
      }),
    ],
  },
});
