<template>
  <div class="antialiased">
    <Navbar />
    <div class="flex">
      <Sidebar class="hidden md:block md:w-1/6 lg:w-1/6 fixed h-full pt-16" />
      <transition name="fade" appear>
        <div class="md:ml-auto w-full md:w-5/6 lg:w-5/6 flex">
          <div class="w-full lg:w-5/6 xl:w-9/12 lg:mr-auto px-16 pt-16">
            <div class="my-12">
              <main>
                <slot />
              </main>
            </div>
          </div>
          <aside v-if="toc" class="hidden lg:block lg:w-1/6 xl:w-3/12">
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
    Navbar
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
