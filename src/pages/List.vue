<template>
  <div>
    <div v-for="page in $page.allPost.edges" :key="page.node.id"></div>
  </div>
</template>

<page-query>
query {
  allPost(sort: [{ by: "article_number", order: ASC }, { by: "section_number", order: ASC }]) {
    edges {
      node {
        id
        title
        article
        article_number
        section_number
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
