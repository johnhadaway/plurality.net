const pluginTOC = require('eleventy-plugin-toc')

module.exports = function(eleventyConfig) {
  eleventyConfig.setLibrary(
    'md',
    markdownIt = require('markdown-it')({
      html: true
    }).use(require('markdown-it-anchor')
  ));

  eleventyConfig.addPlugin(pluginTOC, {
    tags: ['h1', 'h2', 'h3'],
    wrapper: 'div'
  });

  eleventyConfig.addPassthroughCopy({
    "src/site/_includes/css/*.css" : "assets/css",
    "src/site/_includes/js/*.js" : "assets/js"
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


