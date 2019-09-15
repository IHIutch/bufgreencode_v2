<template>
  <div>
    <div class="h-full overflow-y-scroll px-4 sticky">
      <ul class="mt-8 pb-8">
        <li
          v-for="(article, index) in articles"
          :key="index"
          class="text-red-500"
        >
          <span
            :class="{
              'text-green-500': $page.post.article_number == article.article
            }"
            >{{ article.article }}. {{ article.title }}</span
          >
          <ul v-if="$page.post.article_number == article.article">
            <li v-for="(page, index) in $static.allPost.edges" :key="index">
              <g-link
                :to="page.node.path"
                v-if="page.node.article_number == article.article"
                class="text-blue-500 max-w-full block truncate"
              >
                <span
                  class="truncate"
                  v-html="
                    article.article +
                      '-' +
                      page.node.section_number +
                      '. ' +
                      page.node.title
                  "
                />
              </g-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
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
  }
};
</script>
