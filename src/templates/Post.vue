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
const xml = require("xml-parse");

import Layout from "~/layouts/SidebarLayout";

export default {
  name: "PostTemplate",
  props: ["siteUrl"],
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
            // articleBody: this.getPageContent(),
            // wordCount: this.getPageContent()
            //   .trim()
            //   .split(/\s+/).length,
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
    initScrollSpy() {
      setTimeout(() => {
        this.headings = [];
        this.headings = [
          ...document.querySelectorAll("h2, h3, h4, h5, h6")
        ].reverse();
        let page = document.getElementById("app");
        let self = this;
        page.addEventListener("scroll", function() {
          self.scrollSpy();
        });
        this.scrollSpy();
      }, 250);
    },
    scrollSpy() {
      let page = document.getElementById("app");
      let headings = this.headings;
      let active =
        headings.length -
        headings.findIndex(
          heading => page.scrollTop >= heading.offsetTop - this.headingOffset
        ) -
        1;
      this.activeIdx = active < headings.length ? active : 0;
    },
    scrollToHash() {
      setTimeout(() => {
        let page = document.getElementById("app");
        let id = this.$route.hash.substr(1);
        let headingPosition = document.getElementById(id).offsetTop;
        page.scrollTop = headingPosition;
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
    }
    // getPageContent() {
    //   var dom = new xml.DOM(xml.parse(this.$page.post.content));
    //   return dom.document ? dom.document.childNodes[0].text : "";
    // }
  },
  mounted() {
    if (this.$route.hash) {
      this.scrollToHash();
    }
    this.copyAnchorsToClipBoardOnClick();
    this.initScrollSpy();
  },
  updated() {
    this.initScrollSpy();
  }
};
</script>
