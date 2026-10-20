module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    "assets": "assets"
  });

  return {
    pathPrefix: "/THIS IS THE CONFIGFILEportfolio-site/",
    dir: {
      input: "content",
      includes: "../_includes",
      output: "_site"
    }
  };
};
