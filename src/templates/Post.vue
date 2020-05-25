<template>
  <Layout :toc="true" :tocContent="$page.post.headings" :activeIdx="activeIdx">
    <div class="mb-8">
      <h1 class="text-5xl mb-2 leading-tight" v-html="$page.post.title"></h1>
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
    headings{anchor, value}
    article_number
    section_number
  }
}
</page-query>

<script>
const parse5 = require("parse5");

import Layout from "~/layouts/SidebarLayout";

export default {
  name: "PostTemplate",
  props: {
    siteUrl: String,
    siteName: String,
  },
  components: {
    Layout,
  },
  data() {
    return {
      headings: [],
      headingOffset: 96,
      activeIdx: -1,
    };
  },
  metaInfo() {
    let pageTitle = `${this.$page.post.article_number}.${
      this.$page.post.section_number
    } ${this.$page.post.title}`;
    return {
      title: pageTitle,
      meta: [
        {
          key: "title",
          name: "title",
          content: `${pageTitle} · ${this.siteName}`,
        },
        {
          key: "og:title",
          property: "og:title",
          content: `${pageTitle} · ${this.siteName}`,
        },
        {
          key: "og:url",
          property: "og:url",
          content: `${this.siteUrl}${this.$route.path}`,
        },
        {
          key: "twitter:title",
          property: "twitter:title",
          content: `${pageTitle} · ${this.siteName}`,
        },
        {
          key: "twitter:url",
          property: "twitter:url",
          content: `${this.siteUrl}${this.$route.path}`,
        },
      ],
      script: [
        {
          type: "application/ld+json",
          json: {
            "@type": "BlogPosting",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${this.siteUrl}${this.$route.path}`,
            },
            headline: this.$page.post.title,
            dateModified: new Date(),
            datePublished: new Date(),
            image: `${this.siteUrl}/meta/meta-img.png`,
            url: `${this.siteUrl}${this.$route.path}`,
            articleBody: this.getPageContent(),
            wordCount: this.getPageContent()
              .trim()
              .split(/\s+/).length,
            publisher: {
              "@type": "Organization",
              name: "@jb_hutch",
              logo: {
                "@type": "ImageObject",
                url: `${this.siteUrl}/meta/bufgreencode-logo.png`,
              },
            },
            author: {
              "@type": "Person",
              name: "@jb_hutch",
            },
            isFamilyFriendly: "true",
            "@context": "https://schema.org",
          },
        },
      ],
    };
  },
  methods: {
    initScrollSpy() {
      setTimeout(() => {
        this.headings = [];
        this.headings = [
          ...document.querySelectorAll("h2, h3, h4, h5, h6"),
        ].reverse();
        let self = this;
        window.addEventListener("scroll", function() {
          self.scrollSpy();
        });
        this.scrollSpy();
      }, 250);
    },
    scrollSpy() {
      var headings = this.headings;
      var active =
        headings.length -
        headings.findIndex(
          (heading) => window.scrollY >= heading.offsetTop - this.headingOffset
        ) -
        1;
      this.activeIdx = active < headings.length ? active : -1;
    },
    scrollToHash(hash) {
      location.href = this.$route.hash;
    },
    getPageContent() {
      const document = parse5.parse(this.$page.post.content);
      return document.childNodes[0].childNodes[1].childNodes.length
        ? document.childNodes[0].childNodes[1].childNodes[0].value
        : "";
    },
  },
  mounted() {
    let self = this;
    this.initScrollSpy();
    if (this.$route.hash) {
      setTimeout(() => {
        this.scrollToHash();
      }, 1);
    }
  },
  updated() {
    this.initScrollSpy();
  },
};
</script>
