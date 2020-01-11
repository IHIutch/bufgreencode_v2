<template>
  <div class="antialiased">
    <div
      class="fixed top-0 z-10 w-full max-h-screen h-full md:h-auto flex flex-col"
    >
      <Navbar />
      <Subnav class="md:hidden" />
    </div>
    <div class="flex">
      <div
        class="hidden md:block md:w-1/4 lg:w-1/6 fixed top-0 h-full pt-16 flex-shrink-0"
      >
        <Sidebar />
      </div>
      <div
        class="pt-20 md:pt-16 px-6 md:px-8 lg:px-16 md:w-3/4 lg:w-5/6 md:ml-auto"
      >
        <transition name="fade" appear>
          <div class="flex" :key="$route.path">
            <div class="my-12 flex-grow lg:pr-16 lg:w-3/4">
              <main class="w-full">
                <slot />
              </main>
            </div>
            <aside v-if="toc" class="hidden lg:block lg:w-1/4 flex-shrink-0">
              <div class="sticky h-screen overflow-y-scroll top-0 pt-16">
                <div class="mt-8 pb-8">
                  <div class="mb-2">
                    <span
                      class="uppercase font-bold text-gray-500 text-sm tracking-wider"
                      >On this Page</span
                    >
                  </div>
                  <ul ref="toc">
                    <li
                      v-for="(anchor, index) in tocContent"
                      :key="index"
                      class="text-sm font-medium text-gray-700 hover:text-gray-900"
                    >
                      <a :href="anchor.anchor" class="py-1 pl-0 block">
                        <span
                          class="block border-l-2 transition-fast"
                          :class="
                            isActive(index)
                              ? 'text-gray-900 pl-2 border-gray-900'
                              : 'pl-0 border-transparent'
                          "
                          >{{ anchor.value }}
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Sidebar from "~/components/SidebarComponent";
import Navbar from "~/components/NavbarComponent";
import Subnav from "~/components/SubnavComponent";

export default {
  name: "SidebarLayout",
  props: {
    toc: {
      type: Boolean,
      default: false
    },
    tocContent: {
      type: Array
    }
  },
  data() {
    return {
      activeIdx: -1,
      headingOffset: 96,
      headings: []
    };
  },
  components: {
    Sidebar,
    Navbar,
    Subnav
  },
  watch: {
    $route() {
      if (this.$refs.toc) {
        setTimeout(() => {
          this.initScrollSpy();
        }, 250);
      }
    }
  },
  methods: {
    initScrollSpy() {
      this.activeIdx = -1;
      this.headings = [];
      this.headings = [
        ...document.querySelectorAll("h2, h3, h4, h5, h6")
      ].reverse();
      let self = this;
      window.addEventListener("scroll", function() {
        self.scrollSpy();
      });
      this.scrollSpy();
    },
    scrollSpy() {
      var headings = this.headings;
      var active =
        headings.length -
        headings.findIndex(
          heading => window.scrollY >= heading.offsetTop - this.headingOffset
        ) -
        1;
      this.activeIdx = active < headings.length ? active : 0;
    },
    isActive(idx) {
      return idx === this.activeIdx;
    }
  },
  mounted() {
    if (this.$refs.toc) {
      setTimeout(() => {
        this.initScrollSpy();
      }, 1);
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
