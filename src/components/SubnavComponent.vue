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
          aria-label="Menu Toggle"
          @click="toggleMenu"
          class="flex px-6 h-full lg:hidden text-gray-700 focus:outline-none focus:text-gray-700"
        >
          <Lottie
            :options="defaultOptions"
            :height="20"
            :width="20"
            @animCreated="handleAnimation"
          />
        </button>
      </div>
    </div>
    <nav class="flex-grow overflow-y-scroll transition-md">
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
// import lottie from "lottie-web";
import Lottie from "vue-lottie";
import menuAnimation from "~/assets/animations/menu/menu-V2.json";

export default {
  name: "SubnavComponent",
  components: { GlobalNav, Lottie },
  data() {
    return {
      defaultOptions: {
        animationData: menuAnimation,
        loop: false,
        autoplay: false
      },
      menuIsOpen: false
    };
  },
  methods: {
    handleAnimation: function(anim) {
      this.anim = anim;
    },
    toggleMenu() {
      if (this.menuIsOpen) {
        this.anim.setSpeed(-1.5);
        this.anim.play();
        this.menuIsOpen = !this.menuIsOpen;
      } else {
        this.anim.setSpeed(1.5);
        this.anim.play();
        this.menuIsOpen = !this.menuIsOpen;
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
