// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const tailwind = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const purgecss = require("@fullhuman/postcss-purgecss");

const postcssPlugins = [tailwind(), autoprefixer()];

if (process.env.NODE_ENV === "production") postcssPlugins.push(purgecss());

module.exports = {
  siteName: "BufGreenCode",
  siteUrl: "https://gridsome.bufgreencode.com",
  icon: {
    favicon: "./assets/images/meta/favicon.png",
    touchicon: "./assets/images/meta/favicon.png"
  },
  // templates: {
  //   Post: "/:article/:title"
  // },
  plugins: [
    {
      use: "@gridsome/vue-remark",
      options: {
        typeName: "Post",
        baseDir: "./content/sections",
        route: "/:article/:title",
        template: "./src/templates/Post.vue"
      }
    },
    // {
    //   use: "@gridsome/source-filesystem",
    //   options: {
    //     typeName: "Post",
    //     path: "./content/**/*.md",
    //     route: "/:article/:title"
    //   }
    // },
    {
      use: "@gridsome/plugin-sitemap"
    },
    {
      use: "gridsome-plugin-gtm",
      options: {
        id: "GTM-KNPMJGD",
        enabled: true,
        debug: false
      }
    },
    // {
    //   use: "gridsome-plugin-algolia",
    //   options: {
    //     appId: process.env.ALGOLIA_APP_ID,
    //     apiKey: process.env.ALGOLIA_ADMIN_KEY,
    //     collections,
    //     enablePartialUpdates: true // default: false
    //   }
    // },
    {
      use: "gridsome-plugin-pwa",
      options: {
        title: "BufGreenCode",
        startUrl: "/",
        display: "standalone",
        statusBarStyle: "default",
        manifestPath: "./manifest.json",
        serviceWorkerPath: "./service-worker.js",
        shortName: "BufGreenCode",
        themeColor: "#666600",
        backgroundColor: "#ffffff",
        icon: "./assets/images/meta/favicon.png" // must be supplied!
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
