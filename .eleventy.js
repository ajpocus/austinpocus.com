module.exports = function(eleventyConfig) {
    eleventyConfig.setTemplateFormats([
        "css" // css is not yet a recognized template extension in Eleventy
    ]);
    
    // Output directory: _site

    // Copy `static/` to `_site/static`
    // If you use a subdirectory, it’ll copy using the same directory structure.
    eleventyConfig.addPassthroughCopy("static");
};
