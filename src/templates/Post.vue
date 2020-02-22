<template>
  <Layout :toc="true" :tocContent="$page.post.headings" :activeIdx="activeIdx">
    <div class="mb-8">
      <h1 class="text-5xl mb-2 leading-tight" v-html="$page.post.title">
        {{ $page.post.title }}
      </h1>
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
    siteUrl: String
  },
  components: {
    Layout
  },
  data() {
    return {
      headings: [],
      headingOffset: 96,
      activeIdx: -1
    };
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
            wordCount: this.getPageContent()
              .trim()
              .split(/\s+/).length,
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
  watch: {
    "$route.path"() {
      this.initScrollSpy();
      this.initCopyAnchors();
    }
  },
  methods: {
    initScrollSpy() {
      setTimeout(() => {
        this.headings = [];
        this.headings = [
          ...document.querySelectorAll("h2, h3, h4, h5, h6")
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
          heading => window.scrollY >= heading.offsetTop - this.headingOffset
        ) -
        1;
      this.activeIdx = active < headings.length ? active : -1;
    },
    scrollToHash(hash) {
      location.href = this.$route.hash;
    },
    copyAnchorsToClipBoard(e) {
      setTimeout(() => {
        const textArea = document.createElement("textarea");
        textArea.value = e.path[0].baseURI;
        textArea.style.position = "fixed"; //avoid scrolling to bottom
        document.body.appendChild(textArea);
        textArea.select();
        textArea.setSelectionRange(0, 99999);

        try {
          document.execCommand("copy");
        } catch (err) {
          console.error("Oops, unable to copy", err);
        }
        document.body.removeChild(textArea);
      }, 1);
    },
    getPageContent() {
      const document = parse5.parse(this.$page.post.content);
      return document.childNodes[0].childNodes[1].childNodes.length
        ? document.childNodes[0].childNodes[1].childNodes[0].value
        : "";
    },
    initCopyAnchors() {
      let self = this;
      setTimeout(() => {
        let anchors = [];
        anchors = document.getElementsByClassName("heading-anchor");
        console.log(123, anchors);
        for (let a of anchors) {
          a.addEventListener("click", function(e) {
            self.copyAnchorsToClipBoard(e);
          });
        }
      }, 250);
    }
  },
  mounted() {
    let self = this;
    this.initScrollSpy();
    this.initCopyAnchors();
    if (this.$route.hash) {
      setTimeout(() => {
        this.scrollToHash();
      }, 1);
    }
  }
};
</script>
