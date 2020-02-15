<template>
  <Layout :toc="true" :tocContent="$page.post.headings">
    <div class="mb-8">
      <h1 class="text-5xl mb-2 leading-tight">{{ $page.post.title }}</h1>
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
    section_number
    headings{anchor, value}
  }
}
</page-query>

<script>
import Layout from "~/layouts/SidebarLayout";

export default {
  name: "PostTemplate",
  props: ["siteUrl"],
  components: {
    Layout
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
      script: [
        {
          type: "application/ld+json",
          json: {
            "@type": "BlogPosting",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${this.siteUrl}${this.$route.path}`
            },
            headline: this.$page.post.title,
            dateModified: new Date(),
            datePublished: new Date(),
            image: `${this.siteUrl}/meta/meta-img.png`,
            url: `${this.siteUrl}${this.$route.path}`,
            articleBody: this.getPageContent(),
            wordCount: this.getPageContent().match(/\S+/g).length,
            publisher: {
              "@type": "Organization",
              name: "@jb_hutch",
              logo: {
                "@type": "ImageObject",
                url: `${this.siteUrl}/meta/bufgreencode-logo.png`
              }
            },
            author: {
              "@type": "Person",
              name: "@jb_hutch"
            },
            isFamilyFriendly: "true",
            "@context": "https://schema.org"
          }
        }
      ]
    };
  },
  methods: {
    scrollToHash(hash) {
      setTimeout(() => {
        location.href = this.$route.hash;
      }, 1);
    },
    copyAnchorsToClipBoardOnClick() {
      var anchor = document.getElementsByClassName("heading-anchor");
      for (let a of anchor) {
        a.addEventListener("click", function(e) {
          var href = e.path[0].baseURI;
          var textArea = document.createElement("textarea");
          textArea.value = href;
          textArea.style.position = "fixed"; //avoid scrolling to bottom
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();

          try {
            var successful = document.execCommand("copy");
            console.log(href);
          } catch (err) {
            console.error("Oops, unable to copy", err);
          }

          document.body.removeChild(textArea);
        });
      }
    },
    getPageContent() {
      return new DOMParser().parseFromString(
        this.$page.post.content,
        "text/html"
      ).body.textContent;
    }
  },
  mounted() {
    if (this.$route.hash) {
      setTimeout(() => this.scrollToHash(this.$route.hash), 1);
    }
    this.copyAnchorsToClipBoardOnClick();
  }
};
</script>
