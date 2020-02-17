<template>
  <div class="flex flex-col bg-gray-200 flex-grow h-full">
    <div class="flex justify-between border-b">
      <div class="flex items-center h-10 flex-grow relative">
        <transition name="fade">
          <div class="pl-6 absolute truncate w-full" :key="menuIsOpen">
            <template v-if="menuIsOpen">
              <span class="text-xl">Menu</span>
            </template>
            <template v-else>
              <div class="truncate">
                <span class="font-bold mr-2 text-green-700">&sect;</span>
                <span
                  v-html="
                    `${this.pageArticle}.${this.pageSection} ${pageTitle}`
                  "
                />
              </div>
            </template>
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
    <nav class="flex flex-grow flex-col justify-between">
      <div class="h-full overflow-auto">
        <div class="h-0">
          <GlobalNav class="my-4" />
        </div>
      </div>
      <div class="flex justify-between border-t px-6 pt-2 mb-4">
        <g-link class="p-2 text-gray-700 hover:text-gray-900">About</g-link>
        <g-link class="p-2 text-gray-700 hover:text-gray-900"
          >Disclaimer</g-link
        >
        <a
          class="flex items-center p-2 text-gray-700 hover:text-gray-900"
          href="https://github.com/IHIutch/bufgreencode_gridsome"
          target="_blank"
        >
          <span class="mr-1">Github</span>
          <span><ExternalLinkIcon size="1x"/></span>
        </a>
      </div>
    </nav>
  </div>
</template>

<script>
import GlobalNav from "~/components/GlobalNavComponent";
import Lottie from "vue-lottie";
import menuAnimation from "~/assets/animations/menu/menu-V2.json";
import { ExternalLinkIcon } from "vue-feather-icons";

export default {
  name: "SubnavComponent",
  components: { GlobalNav, Lottie, ExternalLinkIcon },
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
  watch: {
    $route() {
      this.menuIsOpen = false;
      this.reverseAnimation();
    },
    menuIsOpen() {
      this.$emit("update:menuIsOpen", this.menuIsOpen);
    }
  },
  methods: {
    handleAnimation: function(anim) {
      this.anim = anim;
    },
    toggleMenu() {
      if (this.menuIsOpen) {
        this.reverseAnimation();
        this.menuIsOpen = !this.menuIsOpen;
      } else {
        this.playAnimation();
        this.menuIsOpen = !this.menuIsOpen;
      }
    },
    playAnimation() {
      this.anim.setSpeed(1.5);
      this.anim.play();
    },
    reverseAnimation() {
      this.anim.setSpeed(-1.5);
      this.anim.play();
    }
  },
  computed: {
    pageTitle() {
      return this.$page ? this.$page.post.title : "";
    },
    pageArticle() {
      return this.$page ? this.$page.post.article_number : "";
    },
    pageSection() {
      return this.$page ? this.$page.post.section_number : "";
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
