class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:\\/]+/g);
  }
}

module.exports = {
  content: ["src/**/*.vue"],
  extractors: [
    {
      extractor: TailwindExtractor,
      extensions: ["vue"]
    }
  ],
  whitelist: [
    "body",
    "html",
    "img",
    "a",
    "g-image",
    "g-image--lazy",
    "g-image--loaded",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "table",
    "tr",
    "td",
    "th",
    "tbody",
    "thead",
    "ul",
    "ol",
    "li"
  ]
};
