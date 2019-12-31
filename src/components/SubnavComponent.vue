<template>
  <div
    class="flex flex-col bg-gray-200 transition-md"
    :class="menuIsOpen ? 'flex-grow h-full' : 'h-10'"
  >
    <div class="flex justify-between border-b">
      <div class="flex pl-6 items-center h-10">
        <transition name="fade">
          <div class="absolute" :key="menuIsOpen">
            <div v-if="menuIsOpen">
              <span class="text-xl">Menu</span>
            </div>
            <div v-else>
              <span>Article</span>
              <span class="px-2">/</span>
              <span>Section</span>
              <span class="px-2">/</span>
              <span>Subsection</span>
            </div>
          </div>
        </transition>
      </div>
      <div class="flex md:hidden">
        <button
          type="button"
          aria-label="Mobile Menu"
          @click="toggleMenu()"
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
    <nav id="mobileMenu" class="flex-grow overflow-y-scroll transition-md">
      <GlobalNav class="mt-2 pb-6" />
      <div class="flex justify-between border-t px-6 pt-2 mb-4">
        <g-link class="p-2 text-gray-700 hover:text-gray-900">About</g-link>
        <g-link class="p-2 text-gray-700 hover:text-gray-900"
          >Disclaimer</g-link
        >
        <a class="p-2 text-gray-700 hover:text-gray-900" href="#">Github</a>
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
  },
  methods: {
    toggleMenu() {
      let container = document.getElementById("mobileMenu");

      if (this.menuIsOpen) {
        this.menuIsOpen = false;

        // container.style.height = "0px";

        // container.addEventListener(
        //   "transitionend",
        //   function() {
        //     container.style.display = "none";
        //   },
        //   {
        //     once: true
        //   }
        // );
      } else {
        this.menuIsOpen = true;
        // container.style.display = "block";
        // container.style.height = "auto";

        // let height = container.clientHeight + "px";

        // container.style.height = "0px";

        // setTimeout(function() {
        //   container.style.height = height;
        // }, 0);
      }
    }
  }
};
</script>

<style>
.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-enter {
  opacity: 0;
}
</style>
