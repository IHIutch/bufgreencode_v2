<template>
  <div>
    <nav class="h-full overflow-y-scroll sticky border-r">
      <ul class="mt-8 pb-8 text-sm">
        <li
          v-for="(article, index) in articles"
          :key="index"
          class="px-4"
          :class="{
            'my-2 py-4 bg-gray-200':
              $page && $page.post.article_number == article.article
          }"
        >
          <g-link
            :to="sectionStarts[article.article].path"
            class="text-gray-600 hover:text-gray-900 px-2 py-1 block"
          >
            <span
              :class="{
                'text-gray-900 font-medium':
                  $page && $page.post.article_number == article.article
              }"
              >{{ article.article }}. {{ article.title }}</span
            >
          </g-link>
          <ul
            v-if="$page && $page.post.article_number == article.article"
            class="pl-2"
          >
            <li v-for="(section, index) in $static.allPost.edges" :key="index">
              <g-link
                :to="section.node.path"
                v-if="section.node.article_number == article.article"
                class="text-gray-600 hover:text-gray-900 max-w-full block truncate px-2 py-1"
              >
                <span
                  class="truncate"
                  :class="{
                    'text-gray-900 font-medium':
                      $page && $page.post.title == section.node.title
                  }"
                  v-html="
                    article.article +
                      '-' +
                      section.node.section_number +
                      '. ' +
                      section.node.title
                  "
                />
              </g-link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>

<static-query>
query{
  allPost(sort: [{ by: "article_number", order: ASC }, { by: "section_number", order: ASC }]) {
    edges {
      node {
        title
        article
        article_number
        section_number
        path
      }
    }
  }
}
</static-query>

<script>
import articleList from "~/data/articles.json";

export default {
  name: "SidebarComponent",
  data() {
    return {
      articles: articleList
    };
  },
  computed: {
    sectionStarts() {
      let obj = {};
      this.$static.allPost.edges.forEach(page => {
        if (page.node.section_number == 1) {
          obj[page.node.article_number] = page.node;
        }
      });
      return obj;
    }
  }
};
</script>
