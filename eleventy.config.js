module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");

  return {
    dir: {
      input: "content",
      includes: "../_includes",
      output: "_site"
    }
  };
};