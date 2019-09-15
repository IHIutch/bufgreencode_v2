<template>
  <div class="antialiased">
    <Navbar />
    <div class="flex">
      <Sidebar class="hidden md:block md:w-1/6 lg:w-1/6 fixed h-full pt-16" />
      <div class="md:ml-auto w-full md:w-5/6 lg:w-5/6 flex">
        <div class="w-full lg:w-5/6 xl:w-9/12 lg:mr-auto px-16 pt-16">
          <div class="my-12">
            <slot />
          </div>
        </div>
        <div v-if="toc" class="hidden lg:block lg:w-1/6 xl:w-3/12 relative">
          <div class="fixed top-0 pt-16">
            <div class="sticky h-full overflow-y-scroll">
              <div class="mt-8 pb-8">
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
                    class="text-sm font-medium text-gray-600 hover:text-gray-900"
                  >
                    <a :href="anchor.anchor" class="py-1 block">
                      {{ anchor.value }}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  metaData {
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
