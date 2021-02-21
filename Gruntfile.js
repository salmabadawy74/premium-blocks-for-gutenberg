module.exports = function (grunt) {
    "use strict";

    const pkgInfo = grunt.file.readJSON('package.json');

    //Grunt Configuration
    grunt.initConfig({
        pkg: pkgInfo,
        wp_readme_to_markdown: {
            your_target: {
                files: {
                    "README.md": "readme.txt"
                }
            },
        },
    });


    /* Read File Generation task */
    grunt.loadNpmTasks("grunt-wp-readme-to-markdown")


    // Run readme task
    grunt.registerTask("readme", ["wp_readme_to_markdown"])

};