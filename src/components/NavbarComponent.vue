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
                src="../../assets/images/meta/favicon.png"
                alt="Buffalo Green Code"
                class="h-full w-auto"
              />
            </g-link>
          </div>
        </div>
        <div class="lg:w-1/2 xl:w-3/5 px-4 h-full">
          <div class="py-2 h-full">
            <ais-instant-search
              class="h-full"
              :search-client="searchClient"
              index-name="bufgreencode"
            >
              <ais-configure :hitsPerPage="5" />
              <ais-search-box class="h-full">
                <div
                  class="h-full"
                  slot-scope="{ currentRefinement, isSearchStalled, refine }"
                >
                  <input
                    type="search"
                    class="h-full w-full rounded-lg border bg-gray-200 focus:bg-white focus:outline-none px-4 py-2"
                    placeholder="Search the docs..."
                    v-model="currentRefinement"
                    @input="refine($event.currentTarget.value)"
                  />
                </div>
              </ais-search-box>
              <ais-hits class="bg-white border rounded mt-1">
                <ul slot-scope="{ items }">
                  <li
                    class="border-b"
                    v-for="item in items"
                    :key="item.objectID"
                  >
                    <g-link :to="item.url" class="p-2 block hover:bg-gray-100">
                      <ais-highlight
                        class="block font-medium"
                        attribute="hierarchy.lvl0"
                        :hit="item"
                      ></ais-highlight>
                      <ais-highlight
                        class="block font-medium text-sm"
                        attribute="hierarchy.lvl1"
                        :hit="item"
                      ></ais-highlight>
                      <ais-highlight
                        class="block font-medium text-sm"
                        attribute="hierarchy.lvl2"
                        :hit="item"
                      ></ais-highlight>
                      <ais-highlight
                        class="block font-medium text-sm"
                        attribute="hierarchy.lvl3"
                        :hit="item"
                      ></ais-highlight>
                      <ais-highlight
                        class="block font-medium text-sm"
                        attribute="hierarchy.lvl4"
                        :hit="item"
                      ></ais-highlight>
                      <ais-highlight
                        class="block font-medium text-sm"
                        attribute="hierarchy.lvl5"
                        :hit="item"
                      ></ais-highlight>
                      <ais-highlight
                        class="text-sm text-gray-700"
                        attribute="content"
                        :hit="item"
                      ></ais-highlight>
                    </g-link>
                  </li>
                  <li class="p-2 flex justify-end bg-gray-100">
                    <ais-powered-by />
                  </li>
                </ul>
              </ais-hits>
            </ais-instant-search>
          </div>
        </div>
        <div
          class="lg:w-1/4 xl:w-1/5 px-6 h-full flex items-center justify-end text-sm font-medium"
        >
          <g-link class="py-1 pr-2 text-gray-600 hover:text-gray-900"
            >About</g-link
          >
          <g-link class="py-1 px-2 text-gray-600 hover:text-gray-900"
            >Disclaimer</g-link
          >
          <a class="py-1 px-2 text-gray-600 hover:text-gray-900" href="#"
            >Github</a
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import algoliasearch from "algoliasearch/lite";

export default {
  name: "NavbarComponent",
  data() {
    return {
      searchClient: algoliasearch(
        "BH4D9OD16A",
        "4f17115df3fa81ec5deb4173a60a749a"
      ),
      currentRefinement: ""
    };
  }
};
</script>
