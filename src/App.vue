<template>
  <router-view />
</template>

<static-query>
query App {
  metadata {
    siteName
    siteDescription
    siteUrl
  }
}
</static-query>

<script>
export default {
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
                ` +
            this.$static.metadata.siteUrl +
            this.$route.path +
            `
            },
            headline: ` +
            this.$page.post.title +
            `,
            description:"",
            image: {
              "@type": "ImageObject",
              url: "https://gridsome.bufgreencode.com/meta/meta-img.png",
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
            datePublished: ` +
            new Date() +
            `,
            dateModified: ` +
            new Date() +
            `
          }`,
          type: "application/ld+json"
        }
      ]
    };
  }
};
</script>
