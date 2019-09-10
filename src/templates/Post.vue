<template>
  <Layout>
    <h1 class="text-5xl mb-6">{{ $page.post.title }}</h1>
    <div class="page-content" v-html="$page.post.content" />
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    content
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title
    };
  }
};
</script>
