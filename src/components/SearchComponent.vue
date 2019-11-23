<template>
  <ais-instant-search
    id="algoliaSearch"
    v-if="isMounted"
    class="h-full"
    :search-client="searchClient"
    index-name="bufgreencode"
  >
    <ais-configure
      :attributesToSnippet="['content']"
      snippetEllipsisText="…"
      :hitsPerPage="5"
    />
    <ais-search-box class="h-full">
      <div class="h-full" slot-scope="{ refine }">
        <input
          title="Search Input"
          type="search"
          class="h-full w-full rounded-lg border bg-gray-200 focus:bg-white focus:outline-none px-4 py-2"
          placeholder="Search the docs..."
          v-model="searchValue"
          @input="refine($event.currentTarget.value)"
          @focus="showResults = true"
        />
      </div>
    </ais-search-box>
    <ais-hits
      v-if="searchValue && showResults"
      class="bg-white border rounded mt-1"
    >
      <ul slot-scope="{ items }">
        <li class="border-b" v-for="item in items" :key="item.objectID">
          <g-link
            :to="relUrl(item.url)"
            class="p-2 block hover:bg-gray-100"
            tabindex="0"
          >
            <div>
              <ais-highlight
                class="font-medium"
                attribute="hierarchy.lvl0"
                :hit="item"
                highlightedTagName="span"
                :class-names="{
                  'ais-Highlight-highlighted':
                    'font-bold border-b-2 border-green-600'
                }"
              />
              <template v-if="item.hierarchy.lvl1">
                <span class="px-1 font-medium">/</span>
                <ais-highlight
                  class="font-medium"
                  attribute="hierarchy.lvl1"
                  :hit="item"
                  highlightedTagName="span"
                  :class-names="{
                    'ais-Highlight-highlighted':
                      'font-bold border-b-2 border-green-600'
                  }"
                />
              </template>
              <template v-if="item.hierarchy.lvl2">
                <span class="px-1 font-medium">/</span>
                <ais-highlight
                  class="font-medium"
                  attribute="hierarchy.lvl2"
                  :hit="item"
                  highlightedTagName="span"
                  :class-names="{
                    'ais-Highlight-highlighted':
                      'font-bold border-b-2 border-green-600'
                  }"
                />
              </template>
              <template v-if="item.hierarchy.lvl3">
                <span class="px-1 font-medium">/</span>
                <ais-highlight
                  class="font-medium"
                  attribute="hierarchy.lvl3"
                  :hit="item"
                  highlightedTagName="span"
                  :class-names="{
                    'ais-Highlight-highlighted':
                      'font-bold border-b-2 border-green-600'
                  }"
                />
              </template>
              <template v-if="item.hierarchy.lvl4">
                <span class="px-1 font-medium">/</span>
                <ais-highlight
                  class="font-medium"
                  attribute="hierarchy.lvl4"
                  :hit="item"
                  highlightedTagName="span"
                  :class-names="{
                    'ais-Highlight-highlighted':
                      'font-bold border-b-2 border-green-600'
                  }"
                />
              </template>
              <template v-if="item.hierarchy.lvl5">
                <span class="px-1 font-medium">/</span>
                <ais-highlight
                  class="font-medium"
                  attribute="hierarchy.lvl5"
                  :hit="item"
                  highlightedTagName="span"
                  :class-names="{
                    'ais-Highlight-highlighted':
                      'font-bold border-b-2 border-green-600'
                  }"
                />
              </template>
            </div>
            <ais-snippet
              class="text-sm text-gray-700"
              attribute="content"
              :hit="item"
              highlightedTagName="span"
              :class-names="{
                'ais-Snippet-highlighted':
                  'font-bold text-gray-900 border-b-2 border-green-600'
              }"
            />
          </g-link>
        </li>
        <li class="p-2 flex justify-end bg-gray-100">
          <ais-powered-by />
        </li>
      </ul>
    </ais-hits>
  </ais-instant-search>
</template>

<script>
import algoliasearch from "algoliasearch/lite";
import _ from "lodash";

export default {
  name: "SearchComponent",
  data() {
    return {
      searchClient: algoliasearch(
        "BH4D9OD16A",
        "4f17115df3fa81ec5deb4173a60a749a"
      ),
      searchValue: "",
      showResults: false,
      isMounted: false
    };
  },
  async mounted() {
    this.isMounted = await true; // Prevents the need for Algolia SSR
    let self = this;
    document.addEventListener("click", function(event) {
      self.setFocus(event);
    });
  },
  watch: {
    $route() {
      this.searchValue = "";
    }
  },
  methods: {
    relUrl(url) {
      return url.replace("https://gridsome.bufgreencode.com/", "/");
    },
    setFocus(event) {
      if (event && event.target) {
        let searchObject = document
          .getElementById("algoliaSearch")
          .contains(event.target);
        if (!searchObject) {
          this.showResults = false;
        }
      }
    }
  },
  beforeDestroy() {
    let self = this;
    document.addEventListener("click", function(event) {
      self.setFocus(event);
    });
  }
};
</script>
