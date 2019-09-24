[
  {
    query: `{
      allBlogPost {
        edges {
          node {
            id
            title
            slug
            modified
          }
        }
      }
    }`,
    transformer: ({ data }) => data.allBlogPost.edges.map(({ node }) => node),
    indexName: process.env.ALGOLIA_INDEX, // Algolia index name
    itemFormatter: item => {
      return {
        objectID: item.id,
        title: item.title,
        slug: item.slug,
        modified: String(item.modified)
      };
    }, // optional
    matchFields: ["slug", "modified"] // Array<String> required with PartialUpdates
  }
];
