<template>
  <nav class="h-full overflow-y-scroll sticky border-r">
    <GlobalNav class="mt-8 pb-8" />
  </nav>
</template>

<script>
import GlobalNav from "~/components/GlobalNavComponent";

export default {
  name: "SidebarComponent",
  components: { GlobalNav }
};
</script>
