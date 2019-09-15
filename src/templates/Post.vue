<template>
  <Layout :toc="true" :tocContent="$page.post.headings">
    <h1 class="text-5xl mb-6">{{ $page.post.title }}</h1>
    <div class="page-content" v-html="$page.post.content" />
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    content
    article_number
    headings{anchor, value}
  }
}
</page-query>

<script>
import Layout from "~/layouts/SidebarLayout";

export default {
  name: "PostTemplate",
  metaInfo() {
    return {
      title: this.$page.post.title
    };
  },
  components: {
    Layout
  }
};
</script>
