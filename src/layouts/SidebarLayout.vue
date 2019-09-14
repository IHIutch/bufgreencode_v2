<template>
  <div>
    <Navbar />
    <div class="flex">
      <Sidebar
        class="hidden md:block md:w-1/6 lg:w-1/6 px-4 h-full overflow-y-scroll fixed"
      />
      <div
        class="md:ml-auto xl:mx-auto w-full md:w-5/6 xl:w-4/6 px-8 flex flex-col"
      >
        <slot />
      </div>
      <div
        v-if="toc"
        class="hidden xl:block xl:w-1/6 h-full overflow-y-scroll fixed right-0"
      >
        <div class="sticky">
          <ul>
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
