<template>
  <div class="antialiased">
    <Navbar />
    <div class="flex">
      <Sidebar class="hidden md:block md:w-1/6 lg:w-1/6 fixed h-full pt-16" />
      <div
        class="md:ml-auto xl:mx-auto w-full md:w-5/6 xl:w-4/6 px-8 flex flex-col pt-16 mt-8"
      >
        <slot />
      </div>
      <div
        v-if="toc"
        class="hidden xl:block xl:w-1/6 h-full fixed right-0 pt-16"
      >
        <div class="sticky h-full overflow-y-scroll">
          <ul class="mt-8 pb-8">
            <li v-for="(anchor, index) in tocContent" :key="index">
              <a :href="anchor.anchor">{{ anchor.value }}</a>
            </li>
          </ul>
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
