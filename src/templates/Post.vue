<template>
  <Layout :toc="true" :tocContent="$page.post.headings" :key="$route.path">
    <div class="mb-8">
      <h1 class="text-5xl mb-2">{{ $page.post.title }}</h1>
      <p v-if="$page.post.lead" class="text-gray-600 font-medium">
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
            `{
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id":
                "` +
            this.siteUrl +
            this.$route.path +
            `"
            },
            headline: "` +
            this.$page.post.title +
            `",
            description:
              "",
            image: {
              "@type": "ImageObject",
              url: "` +
            this.siteUrl +
            `/meta/meta-img.png",
              width: "",
              height: ""
            },
            author: {
              "@type": "Person",
              name: "@jb_hutch"
            },
            publisher: {
              "@type": "Organization",
              name: "",
              logo: {
                "@type": "ImageObject",
                url: "",
                width: "",
                height: ""
              }
            },
            datePublished: "` +
            new Date() +
            `",
            dateModified: "` +
            new Date() +
            `"
          }`,
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
