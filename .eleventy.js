module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy({
    "src/site/_includes/css/*.css" : "assets/css",
  });

  return {
    dir: {
      input: "src/site",
      output: "dist",
      includes: "_includes",
      layouts: "_includes/layouts",
      data: "_data"
    }
  }
}


