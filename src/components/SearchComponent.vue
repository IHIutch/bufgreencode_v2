<template>
  <ais-instant-search
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
          type="search"
          class="h-full w-full rounded-lg border bg-gray-200 focus:bg-white focus:outline-none px-4 py-2"
          placeholder="Search the docs..."
          v-model="searchValue"
          @input="refine($event.currentTarget.value)"
          @focus="isFocused = true"
          @blur="isFocused = false"
        />
      </div>
    </ais-search-box>
    <ais-hits
      v-if="searchValue && isFocused"
      class="bg-white border rounded mt-1"
    >
      <ul slot-scope="{ items }">
        <li class="border-b" v-for="item in items" :key="item.objectID">
          <g-link :to="item.url" class="p-2 block hover:bg-gray-100">
            <div>
              <ais-highlight
                class="font-medium"
                attribute="hierarchy.lvl0"
                :hit="item"
                highlightedTagName="span"
                :class-names="{
                  'ais-Highlight-highlighted': 'bg-gray-400 rounded-sm'
                }"
              ></ais-highlight>
              <template v-if="item.hierarchy.lvl1">
                <span class="px-1 font-medium">/</span>
                <ais-highlight
                  class="font-medium"
                  attribute="hierarchy.lvl1"
                  :hit="item"
                  highlightedTagName="span"
                  :class-names="{
                    'ais-Highlight-highlighted': 'bg-gray-400 rounded-sm'
                  }"
                ></ais-highlight>
              </template>
              <template v-if="item.hierarchy.lvl2">
                <span class="px-1 font-medium">/</span>
                <ais-highlight
                  class="font-medium"
                  attribute="hierarchy.lvl2"
                  :hit="item"
                  highlightedTagName="span"
                  :class-names="{
                    'ais-Highlight-highlighted': 'bg-gray-400 rounded-sm'
                  }"
                ></ais-highlight>
              </template>
              <template v-if="item.hierarchy.lvl3">
                <span class="px-1 font-medium">/</span>
                <ais-highlight
                  class="font-medium"
                  attribute="hierarchy.lvl3"
                  :hit="item"
                  highlightedTagName="span"
                  :class-names="{
                    'ais-Highlight-highlighted': 'bg-gray-400 rounded-sm'
                  }"
                ></ais-highlight>
              </template>
              <template v-if="item.hierarchy.lvl4">
                <span class="px-1 font-medium">/</span>
                <ais-highlight
                  class="font-medium"
                  attribute="hierarchy.lvl4"
                  :hit="item"
                  highlightedTagName="span"
                  :class-names="{
                    'ais-Highlight-highlighted': 'bg-gray-400 rounded-sm'
                  }"
                ></ais-highlight>
              </template>
              <template v-if="item.hierarchy.lvl5">
                <span class="px-1 font-medium">/</span>
                <ais-highlight
                  class="font-medium"
                  attribute="hierarchy.lvl5"
                  :hit="item"
                  highlightedTagName="span"
                  :class-names="{
                    'ais-Highlight-highlighted': 'bg-gray-400 rounded-sm'
                  }"
                ></ais-highlight>
              </template>
            </div>
            <ais-snippet
              class="text-sm text-gray-700"
              attribute="content"
              :hit="item"
              highlightedTagName="span"
            ></ais-snippet>
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

export default {
  name: "SearchComponent",
  data() {
    return {
      searchClient: algoliasearch(
        "BH4D9OD16A",
        "4f17115df3fa81ec5deb4173a60a749a"
      ),
      searchValue: "",
      isFocused: false
    };
  }
};
</script>
