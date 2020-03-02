// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const tailwind = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const purgecss = require("@fullhuman/postcss-purgecss");

const postcssPlugins = [tailwind, autoprefixer];

if (process.env.NODE_ENV === "production") postcssPlugins.push(purgecss());

module.exports = {
  siteName: "Buffalo Green Code",
  siteUrl: "https://bufgreencode.com",
  icon: {
    favicon: "src/favicon.png",
    touchicon: "src/assets/images/meta/favicon.png"
  },
  titleTemplate: "%s | Buffalo Green Code",
  plugins: [
    {
      use: "@gridsome/vue-remark",
      options: {
        typeName: "Post",
        baseDir: "./content/sections",
        route: "/:article/:title",
        template: "./src/templates/Post.vue",
        remark: {
          autolinkClassName: "heading-anchor"
        }
      }
    },
    {
      use: "@gridsome/plugin-sitemap"
    },
    {
      use: "gridsome-plugin-gtm",
      options: {
        id: "GTM-KNPMJGD",
        enabled: process.env.NODE_ENV === "production",
        debug: false
      }
    },
    {
      use: "gridsome-plugin-pwa",
      options: {
        title: "BufGreenCode",
        startUrl: "/",
        display: "standalone",
        statusBarStyle: "default",
        manifestPath: "manifest.json",
        serviceWorkerPath: "service-worker.js",
        shortName: "BufGreenCode",
        themeColor: "#86b142",
        backgroundColor: "#ffffff",
        purpose: "maskable",
        icon: "src/favicon.png",
        msTileImage: "src/favicon.png",
        msTileColor: "#86b142"
      }
    }
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins
      }
    }
  }
};
