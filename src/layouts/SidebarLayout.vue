<template>
  <div class="antialiased">
    <div class="fixed top-0 z-10">
      <Navbar />
      <Subnav class="md:hidden" />
    </div>
    <div class="flex">
      <Sidebar
        class="hidden md:block md:w-1/4 lg:w-1/6 fixed h-full pt-16 flex-shrink-0"
      />
      <transition name="fade" appear>
        <div class="flex pt-20 md:pt-16 px-6 md:px-8 lg:px-16">
          <div class="my-12 flex-grow lg:pr-16">
            <main>
              <slot />
            </main>
          </div>
          <aside v-if="toc" class="hidden lg:block lg:w-1/4 flex-shrink-0">
            <div class="sticky h-screen overflow-y-scroll top-0 pt-16">
              <div class="mt-8 pb-8 pr-6">
                <div class="mb-2">
                  <span
                    class="uppercase font-bold text-gray-500 text-sm tracking-wider"
                    >On this Page</span
                  >
                </div>
                <ul>
                  <li
                    v-for="(anchor, index) in tocContent"
                    :key="index"
                    class="text-sm font-medium text-gray-700 hover:text-gray-900"
                  >
                    <a :href="anchor.anchor" class="py-1 block">
                      {{ anchor.value }}
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
  components: {
    Sidebar,
    Navbar,
    Subnav
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
