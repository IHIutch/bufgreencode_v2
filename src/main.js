// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import "~/assets/scss/main.scss";
import VueGtm from "vue-gtm";

export default function(Vue, { router, head, appOptions, isClient }) {
  if (isClient) {
    Vue.use(VueGtm, {
      vueRouter: router,
      id: process.env.GOOGLE_TAG_MANAGER,
      enabled: true,
      debug: false
    });
  }
}
