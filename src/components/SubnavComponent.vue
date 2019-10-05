<template>
  <div
    class="flex flex-col bg-gray-200"
    :class="menuIsOpen ? 'flex-grow h-full' : ''"
  >
    <div class="flex justify-between h-10">
      <template v-if="menuIsOpen">
        <div class="pl-6 flex items-center h-full">
          <span class="text-xl">Menu</span>
        </div>
      </template>
      <template v-else>
        <div class="flex pl-6 items-center">
          <span>Article</span>
          <span class="px-2">/</span>
          <span>Section</span>
          <span class="px-2">/</span>
          <span>Subsection</span>
        </div>
      </template>
      <div class="flex md:hidden">
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
    <nav v-if="menuIsOpen" class="flex-grow overflow-y-scroll h-full">
      <GlobalNav class="mt-2 pb-6" />
      <div class="flex justify-between border-t px-6 pt-2 mb-4">
        <g-link class="p-2 text-gray-700 hover:text-gray-900"
            >About</g-link
          >
          <g-link class="p-2 text-gray-700 hover:text-gray-900"
            >Disclaimer</g-link
          >
          <a class="p-2 text-gray-700 hover:text-gray-900" href="#"
            >Github</a
          >
      </div>
    </nav>
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
