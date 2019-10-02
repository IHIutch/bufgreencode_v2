<template>
  <figure class="mb-4">
    <div class="border rounded inline-flex p-1">
      <slot></slot>
    </div>
    <template v-if="caption">
      <figcaption class="mt-1 text-sm text-gray-700">
        {{ caption }}
      </figcaption>
    </template>
  </figure>
</template>

<script>
export default {
  name: "FigureImg",
  props: ["caption"]
};
</script>
