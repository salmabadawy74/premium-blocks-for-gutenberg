module.exports = function (grunt) {
    "use strict";

    const pkgInfo = grunt.file.readJSON("package.json");
    const sass = require("node-sass");

    const blocks = [
        "accordion",
        "banner",
        "bullet-list",
        "button",
        "content-switcher",
        "count-up",
        "dual-heading",
        "fancy-text",
        "heading",
        "icon",
        "icon-box",
        "image-separator",
        "lottie",
        "maps",
        "Modal",
        "person",
        "pricing-table",
        "container",
        "section",
        "testimonials",
        "video-box",
        "price",
        "text",
        "badge",
        "image",
        "icon-group",
        "switcher-child",
        "counter"
    ];
    const sassFiles = {};
    const minifyFiles = {};

    blocks.map(
        (block) =>
        (sassFiles[
            `./assets/css/${block}.css`
        ] = `./src/blocks/${block}/style.scss`)
    );
    blocks.map(
        (block) =>
        (minifyFiles[
            `./assets/css/minified/${block}.min.css`
        ] = `./assets/css/${block}.css`)
    );

    //Grunt Configuration
    grunt.initConfig({
        pkg: pkgInfo,

        bumpup: {
            options: {
                updateProps: {
                    pkg: "package.json",
                },
            },
            file: "package.json",
        },
        sass: {
            options: {
                sourcemap: "false",
                implementation: sass,
            },
            dist: {
                files: [
                    {
                        "./assets/css/editorpanel.css":
                            "./assets/sass/editorpanel.scss",
                    },
                    sassFiles,
                ],
            },
        },
        cssmin: {
            css: {
                files: [
                    {
                        "./assets/css/minified/editorpanel.min.css":
                            "./assets/css/editorpanel.css",
                    },
                    {
                        "./assets/css/minified/blockseditor.min.css":
                            "./assets/css/blockseditor.css",
                    },
                    {
                        "./assets/css/minified/style-blocks-rtl.min.css":
                            "./assets/css/style-blocks-rtl.css",
                    },
                    minifyFiles,
                ],
            },
        },
        copy: {
            main: {
                options: {
                    mode: true,
                },
                src: [
                    "**",
                    "!nbproject/**",
                    "!vendor/**",
                    "!composer.json",
                    "!composer.lock",
                    "!composer.phar",
                    "!.git/**",
                    "!*.sh",
                    "!*.zip",
                    "!node_modules/**",
                    "!eslintrc.json",
                    "!.editorconfig",
                    "!README.md",
                    "!Gruntfile.js",
                    "!package.json",
                    "!package-lock.json",
                    "!assets/sass/**",
                    "!.babelrc",
                    "!webpack.config.js",
                    "!.gitignore",
                    "!*.zip",
                    "!admin/includes/pb-panel/assets/js/node_modules/**",
                    "!admin/includes/pb-panel/assets/js/package-lock.json",
                    "!admin/includes/pb-panel/assets/js/package.json",
                    "!admin/includes/pb-panel/assets/js/src/**",
                    "!src/**",
                    "!assets/css/*.css",
                    "!assets/js/build/*.map",
                ],
                dest: "premium-blocks-for-gutenberg/",
            },
        },
        compress: {
            main: {
                options: {
                    archive: "premium-blocks-for-gutenberg.zip",
                    mode: "zip",
                },
                files: [
                    {
                        src: ["./premium-blocks-for-gutenberg/**"],
                    },
                ],
            },
        },
        clean: {
            main: ["premium-blocks-for-gutenberg"],
            zip: ["*.zip"],
        },
        wp_readme_to_markdown: {
            your_target: {
                files: {
                    "README.md": "readme.txt",
                },
            },
        },
        makepot: {
            target: {
                options: {
                    domainPath: "/",
                    mainFile: "premium-blocks-for-gutenberg.php",
                    potFilename: "languages/premium-blocks-for-gutenberg.pot",
                    include: [
                        "src/index.js",
                        "premium-blocks-for-gutenberg.php",
                    ],
                    exclude: ["admin/includes"],
                    potHeaders: {
                        poedit: true,
                        "x-poedit-keywordslist": true,
                    },
                    type: "wp-plugin",
                    updateTimestamp: true,
                },
            },
        },
        addtextdomain: {
            options: {
                textdomain: "premium-blocks-for-gutenberg",
                updateDomains: true,
            },
            target: {
                files: {
                    src: [
                        "*.php",
                        "**/*.php",
                        "!node_modules/**",
                        "!php-tests/**",
                        "!bin/**",
                        "!admin/includes/**",
                    ],
                },
            },
        },
    });

    /* Read File Generation task */
    grunt.loadNpmTasks("grunt-wp-readme-to-markdown");
    grunt.loadNpmTasks("grunt-bumpup");
    grunt.loadNpmTasks("grunt-sass");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-compress");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-wp-i18n");

    // Run readme task
    grunt.registerTask("readme", ["wp_readme_to_markdown"]);
    // SASS compile
    grunt.registerTask("default", ["sass", "cssmin:css"]);
    // min all
    grunt.registerTask("minify", ["cssmin:css"]);

    grunt.registerTask("i18n", ["makepot"]);

    grunt.registerTask("domain", ["addtextdomain"]);

    //Run bumpup, readme tasks
    grunt.registerTask("build", (releaseType) => {
        releaseType = releaseType ? releaseType : "patch";

        var prevStableVersion =
            "patch" === releaseType
                ? pkgInfo.prev_stable_version
                : pkgInfo.version;

        grunt.config.set("prev_stable_version", prevStableVersion);

        grunt.task.run("bumpup:" + releaseType);

        grunt.task.run("readme");
    });

    /* Run release tasks */
    grunt.registerTask("release", [
        "clean:zip",
        "copy",
        "compress",
        "clean:main",
    ]);
};
