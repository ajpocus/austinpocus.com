const pluginSass = require("eleventy-plugin-sass");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginSass);
  eleventyConfig.addPassthroughCopy("css/**/*.css");
  eleventyConfig.addPassthroughCopy("js/**/*.js");
  eleventyConfig.addPassthroughCopy("img");

  return {
    passthroughFileCopy: true
  }
}
