module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/site/assets/css/landing-page.css");

  return {
    dir: {
      input: "src/site",
      output: "public",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data"
    }
  }
}
