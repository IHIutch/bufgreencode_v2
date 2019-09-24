// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import "./assets/scss/main.scss";

import DefaultLayout from "~/layouts/Default.vue";

const siteUrl = "https://gridsome.bufgreencode.com/";
const siteName = "Buffalo Green Code";
const metaImage = siteUrl + "meta/meta-img.png";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  // Add a meta tag
  head.meta.push({
    property: "og:type",
    href: "article"
  });
  head.meta.push({
    property: "og:url",
    href: siteUrl
  });
  head.meta.push({
    property: "og:site_name",
    href: siteName
  });
  head.meta.push({
    property: "og:image",
    href: metaImage
  });
  head.meta.push({
    name: "twitter:card",
    href: "summary"
  });
  head.meta.push({
    name: "twitter:image",
    href: metaImage
  });
  head.meta.push({
    name: "twitter:author",
    href: "@jb_hutch"
  });
}
