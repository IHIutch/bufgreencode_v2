<template>
  <div class="m-auto w-1/2">
    <header class="flex justify-between mb-5 h-20 items-center">
      <strong>
        <g-link class="py-1" to="/">{{ $static.metaData.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="py-1 pr-4" to="/">Home</g-link>
        <g-link class="py-1 pl-4" to="/about">About</g-link>
      </nav>
    </header>
    <slot />
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
export default {
  name: "DefaultLayout"
};
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}
</style>
