<template>
  <nav
    class="flex bg-white border-b border-gray-200 h-16 inset-x-0 flex-shrink-0"
  >
    <div class="w-full max-w-screen-xl relative mx-auto px-6">
      <div class="flex items-center -mx-6 h-full px-6">
        <div class="md:w-1/4 lg:w-1/6 pr-6 lg:pr-8 h-full flex-shrink-0">
          <div class="flex items-center h-full">
            <g-link to="/" class="block lg:mr-4 h-full"
              ><img
                src="../assets/images/meta/bufgreencode-logo.svg"
                alt="Buffalo Green Code"
                class="h-full w-auto py-1"
              />
            </g-link>
          </div>
        </div>
        <div class="md:block flex-grow md:px-4 h-full pl-4 md:pr-2">
          <div class="py-2 h-full">
            <SearchComponent />
          </div>
        </div>
        <div
          class="px-6 h-full hidden md:flex items-center justify-end text-sm font-medium flex-shrink-0"
        >
          <g-link class="py-1 pr-2 text-gray-700 hover:text-gray-900"
            >About</g-link
          >
          <g-link class="py-1 px-2 text-gray-700 hover:text-gray-900"
            >Disclaimer</g-link
          >
          <a
            class="flex items-center py-1 px-2 text-gray-700 hover:text-gray-900"
            href="https://github.com/IHIutch/bufgreencode_v2"
            target="_blank"
            rel="noreferrer"
            ><span class="mr-1">Github</span>
            <span><ExternalLinkIcon size="1x"/></span>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import SearchComponent from "@/components/SearchComponent";
import { ExternalLinkIcon } from "vue-feather-icons";

export default {
  name: "NavbarComponent",
  components: { SearchComponent, ExternalLinkIcon }
};
</script>
