// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import "@/assets/scss/main.scss";

import DefaultLayout from "~/layouts/Default.vue";
import InstantSearch from "vue-instantsearch";

const siteUrl = "https://bufgreencode.com/";
const siteName = "Buffalo Green Code";
const siteDesc = "Buffalo Green Code Unified Development Ordinance";
const metaImage = siteUrl + "meta/meta-img.png";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  Vue.use(InstantSearch);
  // Add a meta tag
  head.meta.push({
    property: "og:type",
    content: "website",
  });
  head.meta.push({
    property: "og:title",
    content: siteName,
  });
  head.meta.push({
    property: "og:site_name",
    content: siteName,
  });
  head.meta.push({
    property: "og:url",
    content: siteUrl,
  });
  head.meta.push({
    property: "og:description",
    content: siteDesc,
  });
  head.meta.push({
    property: "og:image",
    content: metaImage,
  });
  head.meta.push({
    name: "twitter:creator",
    content: "@jb_hutch",
  });
  head.meta.push({
    name: "twitter:card",
    content: "summary",
  });
  head.meta.push({
    name: "twitter:title",
    content: siteName,
  });
  head.meta.push({
    name: "twitter:url",
    content: siteUrl,
  });
  head.meta.push({
    name: "twitter:description",
    content: siteDesc,
  });
  head.meta.push({
    name: "twitter:image",
    content: metaImage,
  });
  // Google Search Console
  head.meta.push({
    name: "google-site-verification",
    content: "2uJ6hXsUDukLmTfNK7Y7jCmnaqyiLptsVDmZ2Ct7Zzk",
  });
}
