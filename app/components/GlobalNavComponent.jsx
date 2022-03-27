import { Link, NavLink, useLoaderData } from "remix";
import groupBy from "lodash/groupBy";

export default function GlobalNavComponent() {
  const { articles } = useLoaderData();

  const articleData = articles.map(a => ({
    article: a.frontmatter.article,
    title: a.frontmatter.title,
    article_number: a.frontmatter.article_number,
    section_number: a.frontmatter.section_number,
    slug: a.slug,
  }))
    .sort((a, b) => { return a.article_number - b.article_number; })
    .sort((a, b) => { return a.section_number - b.section_number; });

  const groupedArticles = groupBy(articleData, "article");

  return (
    <ul className="text-sm">
      {Object.keys(groupedArticles).map((article, idx) => (
        <li key={idx} className="px-4">
          <div
            // to={groupedArticles[article][0].slug}
            className="text-gray-700 hover:text-gray-900 px-2 py-1 block"
          >
            <span>
              {groupedArticles[article][0].article_number}. {article}
            </span>

          </div>
            <ul className="pl-2">
              {groupedArticles[article].map((section, sIdx) => (
                <li key={sIdx}>
                    <NavLink
                      to={`/${section.slug}`}
                      className="text-gray-700 hover:text-gray-900 max-w-full block truncate px-2 py-1"
                  >
                    {({ isActive }) => (
                      <span
                        className={`truncate ${
                         isActive
                            ? "text-gray-900 font-medium"
                            : ""
                        }`}
                      >
                        {section.article_number}.{section.section_number} {section.title}
                      </span>
                    )}
                    </NavLink>
                </li>
              ))}
            </ul>
        </li>
      ))}
    </ul>
  );
}
