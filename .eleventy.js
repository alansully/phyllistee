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

  // Case-study pages not yet migrated to templates (batch 2). Pass them
  // through unchanged so the build output stays a complete, correct mirror
  // of the live site during the migration. Remove each entry here as its
  // page gets migrated.
  eleventyConfig.addPassthroughCopy({
    "p1_psoriasis_management.html": "p1_psoriasis_management.html",
    "p2_hiring_solutions.html": "p2_hiring_solutions.html",
    "p3_global_sports.html": "p3_global_sports.html",
    "p4_web-redesign.html": "p4_web-redesign.html",
    "p5_account-portal.html": "p5_account-portal.html",
    "p6_blog-writing.html": "p6_blog-writing.html",
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
