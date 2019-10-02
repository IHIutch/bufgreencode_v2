<template>
  <Layout :toc="true" :tocContent="$page.post.headings" :key="$route.path">
    <div class="mb-8">
      <h1 class="text-5xl mb-2">{{ $page.post.title }}</h1>
      <p v-if="$page.post.lead" class="text-gray-700 font-medium">
        {{ $page.post.lead }}
      </p>
    </div>
    <div class="page-content">
      <VueRemarkContent />
    </div>
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
  props: ["siteUrl"],
  metaInfo() {
    return {
      title: this.$page.post.title,
      script: [
        {
          innerHTML:
            `{"headline":"` +
            this.$page.post.title +
            `","dateModified":"` +
            new Date() +
            `","datePublished":"` +
            new Date() +
            `","@type":"BlogPosting","mainEntityOfPage":{"@type":"WebPage","@id":"` +
            this.siteUrl +
            this.$route.path +
            `"},"image":"` +
            this.siteUrl +
            `/meta/meta-img.png","url":"` +
            this.siteUrl +
            this.$route.path +
            `","publisher":{"@type":"Organization","logo":{"@type":"ImageObject","url":"` +
            this.siteUrl +
            `/meta/meta-img.png"},"name":"@jb_hutch"},"author":{"@type":"Person","name":"@jb_hutch"},"description":"","@context":"https://schema.org"}`,
          type: "application/ld+json"
        }
      ]
    };
  },
  components: {
    Layout
  }
};
</script>

``
