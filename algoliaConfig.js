[
  {
    query: `{
      allPost {
        edges {
            node {
                id
                title
                path
                content
                headings{depth, value}
                }
            }
        }
    }`,
    transformer: ({ data }) => data.allPost.edges.map(({ node }) => node),
    indexName: process.env.ALGOLIA_INDEX,
    itemFormatter: item => {
      return {
        objectID: item.id,
        title: item.title,
        slug: item.slug,
        path: item.path,
        content: item.content,
        type: "document"
      };
    },
    matchFields: ["slug"] // Array<String> required with PartialUpdates
  }
];
