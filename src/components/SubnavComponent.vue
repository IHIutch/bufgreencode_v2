<template>
  <div class="bg-gray-200">
    <div class="flex justify-between">
      <div v-if="menuIsOpen" class="px-2">
        <div class="flex items-center px-6 h-12">
          <span class="text-xl">Menu</span>
        </div>
        <GlobalNav class="mt-2 pb-6" />
      </div>
      <div v-else class="flex pl-6 items-center h-10">
        <span>Article</span>
        <span class="px-2">/</span>
        <span>Section</span>
        <span class="px-2">/</span>
        <span>Subsection</span>
      </div>
      <div class="flex md:hidden h-10">
        <button
          type="button"
          @click="menuIsOpen = !menuIsOpen"
          class="flex px-6 h-full lg:hidden text-gray-700 focus:outline-none focus:text-gray-700"
        >
          <svg
            class="fill-current w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import GlobalNav from "~/components/GlobalNavComponent";

export default {
  name: "SubnavComponent",
  components: { GlobalNav },
  data() {
    return {
      menuIsOpen: false
    };
  }
};
</script>
