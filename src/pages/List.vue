<template>
  <div>
    <div v-for="post in $page.allPost.edges" :key="post.node.id">
      <h1 v-html="post.node.title"></h1>
      <g-link :to="post.node.path">{{ post.node.title }}</g-link>
    </div>
  </div>
</template>

<page-query>
query {
  allPost {
    totalCount
    edges {
      node {
          id
        title
        path
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "Hello, world!"
  }
};
</script>
