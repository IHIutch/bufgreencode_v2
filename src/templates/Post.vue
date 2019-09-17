<template>
  <Layout :toc="true" :tocContent="$page.post.headings" :key="$route.path">
    <div class="mb-8">
      <h1 class="text-5xl mb-2">{{ $page.post.title }}</h1>
      <p v-if="$page.post.lead" class="text-gray-600 font-medium">
        {{ $page.post.lead }}
      </p>
    </div>
    <div class="page-content" v-html="$page.post.content" />
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    lead
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
