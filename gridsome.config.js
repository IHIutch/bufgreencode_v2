// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const tailwind = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const purgecss = require("@fullhuman/postcss-purgecss");

const postcssPlugins = [tailwind(), autoprefixer()];

const collections = [
  {
    query: `{
      allPost {
        edges {
            node {
                id
                title
                path
                headings{depth, value}
                }
            }
        }
    }`,
    transformer: ({ data }) => data.allPost.edges.map(({ node }) => node),
    indexName: process.env.ALGOLIA_INDEX,
    itemFormatter: item => {
      return {
        objectID: item.id,
        title: item.title,
        url: item.path,
        type: "document"
      };
    }
  }
];

if (process.env.NODE_ENV === "production") postcssPlugins.push(purgecss());

module.exports = {
  siteName: "Buffalo Green Code",
  siteUrl: "https://gridsome.bufgreencode.com",
  icon: {
    favicon: "./src/assets/images/meta/favicon.png",
    touchicon: "./src/assets/images/meta/favicon.png"
  },
  titleTemplate: "%s | Buffalo Green Code",
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
    {
      use: "gridsome-plugin-algolia",
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        collections,
        enablePartialUpdates: false // default: false
      }
    },
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
