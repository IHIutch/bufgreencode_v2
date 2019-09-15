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
  transformers: {
    remark: {}
  },
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Post",
        path: "content/**/*.md",
        route: "/:article/:slug"
      }
    },
    {
      use: "@gridsome/plugin-sitemap"
    },
    // {
    //   use: "@gridsome/plugin-google-analytics",
    //   options: {
    //     id: process.env.GOOGLE_ANALYTICS
    //   }
    // },
    // {
    //   use: "gridsome-plugin-gtm",
    //   options: {
    //     id: process.env.GOOGLE_TAG_MANAGER,
    //     enabled: true,
    //     debug: true
    //   }
    // },
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
        manifestPath: "manifest.json",
        serviceWorkerPath: "service-worker.js",
        shortName: "Gridsome",
        themeColor: "#666600",
        backgroundColor: "#ffffff",
        icon: "" // must be supplied!
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
