module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    "assets": "assets"
  });

  return {
    pathPrefix: "/portfolio-site/",
    dir: {
      input: "content",
      includes: "../_includes",
      output: "_site"
    }
  };
};
