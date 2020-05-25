<template>
  <div class="m-auto w-1/2">
    <nav class="flex justify-between mb-5 h-20 items-center">
      <strong>
        <g-link class="py-1" to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="py-1 pr-4" to="/">Home</g-link>
        <g-link class="py-1 pl-4" to="/about">About</g-link>
      </nav>
    </nav>
    <slot />
  </div>
</template>

<script>
export default {
  name: "DefaultLayout",
};
</script>
