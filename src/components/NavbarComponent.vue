<template>
  <nav
    class="flex bg-white border-b border-gray-200 fixed top-0 z-10 h-16 inset-x-0"
  >
    <div class="w-full max-w-screen-xl relative mx-auto px-6">
      <div class="flex items-center -mx-6 h-full">
        <div class="lg:w-1/4 xl:w-1/5 pl-6 pr-6 lg:pr-8 h-full">
          <div class="flex items-center h-full">
            <g-link to="/" class="block lg:mr-4 h-full"
              ><img
                src="../assets/images/meta/favicon.png"
                alt="Buffalo Green Code"
                class="h-full w-auto"
              />
            </g-link>
          </div>
        </div>
        <div class="lg:w-1/2 xl:w-3/5 px-4 h-full">
          <div class="py-2 h-full">
            <input
              id="algoliaSearch"
              class="h-full w-full rounded-lg border bg-gray-200 focus:bg-white focus:outline-none px-4 py-2"
              type="text"
              placeholder="Search the docs..."
            />
          </div>
        </div>
        <div
          class="lg:w-1/4 xl:w-1/5 px-6 h-full flex items-center justify-end text-sm font-medium"
        >
          <g-link class="py-1 pr-2 text-gray-700 hover:text-gray-900"
            >About</g-link
          >
          <g-link class="py-1 px-2 text-gray-700 hover:text-gray-900"
            >Disclaimer</g-link
          >
          <a class="py-1 px-2 text-gray-700 hover:text-gray-900" href="#"
            >Github</a
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarComponent",
  mounted() {
    import("docsearch.js").then(({ default: docsearch }) => {
      docsearch({
        indexName: "bufgreencode",
        inputSelector: "#algoliaSearch",
        apiKey: "4f17115df3fa81ec5deb4173a60a749a",
        debug: process.env.NODE_ENV === "development"
      });
    });
  }
};
</script>

<style lang="scss">
@import "~docsearch.js/dist/cdn/docsearch.min.css";
</style>
