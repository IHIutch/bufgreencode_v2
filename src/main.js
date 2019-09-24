// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import "./assets/scss/main.scss";

import DefaultLayout from "~/layouts/Default.vue";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  // Add a meta tag
  head.meta.push({
    property: "og:image",
    // name: "og:image",
    content: "meta/meta-img.png"
  });
}
