module.exports = function (eleventyConfig) {
  // Static assets live at the repo root (unchanged) and are copied into the
  // build output as-is — nothing here is a template.
  eleventyConfig.addPassthroughCopy({
    Images: "Images",
    fonts: "fonts",
    resume: "resume",
    "styles.css": "styles.css",
    "modal.js": "modal.js",
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
    templateFormats: ["njk"],
  };
};
