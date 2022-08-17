module.exports = function (grunt) {
    "use strict";

    const pkgInfo = grunt.file.readJSON('package.json');
    const sass = require('node-sass');
    //Grunt Configuration
    grunt.initConfig({
        pkg: pkgInfo,

        bumpup: {
            options: {
                updateProps: {
                    pkg: 'package.json'
                }
            },
            file: 'package.json'
        },
        sass: {
            options: {
                sourcemap: "false",
                implementation: sass,
            },
            dist: {
                files: [
                    {
                        src: "./assets/sass/editorpanel.scss",
                        dest: "./assets/css/editorpanel.css"
                    },
                    {
                        src: "./assets/css/sass/icon.scss",
                        dest: "./assets/css/css/icon.css"
                    },
                    {
                        src: "./assets/css/sass/dual-heading.scss",
                        dest: "./assets/css/css/dual-heading.css"
                    },
                    {
                        src: "./assets/css/sass/banner.scss",
                        dest: "./assets/css/css/banner.css"
                    },
                    {
                        src: "./assets/css/sass/pricing-table.scss",
                        dest: "./assets/css/css/pricing-table.css"
                    },
                    {
                        src: "./assets/css/sass/maps.scss",
                        dest: "./assets/css/css/maps.css"
                    },
                    {
                        src: "./assets/css/sass/testimonial.scss",
                        dest: "./assets/css/css/testimonial.css"
                    },
                    {
                        src: "./assets/css/sass/count-up.scss",
                        dest: "./assets/css/css/count-up.css"
                    },
                    {
                        src: "./assets/css/sass/button.scss",
                        dest: "./assets/css/css/button.css"
                    },
                    {
                        src: "./assets/css/sass/container.scss",
                        dest: "./assets/css/css/container.css"
                    },
                    {
                        src: "./assets/css/sass/accordion.scss",
                        dest: "./assets/css/css/accordion.css"
                    },
                    {
                        src: "./assets/css/sass/icon-box.scss",
                        dest: "./assets/css/css/icon-box.css"
                    },
                    {
                        src: "./assets/css/sass/video-box.scss",
                        dest: "./assets/css/css/video-box.css"
                    },
                    {
                        src: "./assets/css/sass/fancy-text.scss",
                        dest: "./assets/css/css/fancy-text.css"
                    },
                    {
                        src: "./assets/css/sass/lottie.scss",
                        dest: "./assets/css/css/lottie.css"
                    },
                    {
                        src: "./assets/css/sass/image-separator.scss",
                        dest: "./assets/css/css/image-separator.css"
                    },
                    {
                        src: "./assets/css/sass/person.scss",
                        dest: "./assets/css/css/person.css"
                    },
                    {
                        src: "./assets/css/sass/bullet-list.scss",
                        dest: "./assets/css/css/bullet-list.css"
                    },
                    {
                        src: "./assets/css/sass/modal.scss",
                        dest: "./assets/css/css/modal.css"
                    },
                    {
                        src: "./assets/css/sass/row.scss",
                        dest: "./assets/css/css/row.css"
                    },
                    {
                        src: "./assets/css/sass/title.scss",
                        dest: "./assets/css/css/title.css"
                    }
                ]
            }

        },
        cssmin: {
            css: {
                files: [
                    {
                        src: "./assets/css/css/icon.css",
                        dest: "./assets/css/minified/icon.min.css",
                    },
                    {
                        src: "./assets/css/css/dual-heading.css",
                        dest: "./assets/css/minified/dual-heading.min.css",
                    },
                    {
                        src: "./assets/css/css/banner.css",
                        dest: "./assets/css/minified/banner.min.css",
                    },
                    {
                        src: "./assets/css/css/pricing-table.css",
                        dest: "./assets/css/minified/pricing-table.min.css",
                    },
                    {
                        src: "./assets/css/css/maps.css",
                        dest: "./assets/css/minified/maps.min.css",
                    },
                    {
                        src: "./assets/css/css/testimonial.css",
                        dest: "./assets/css/minified/testimonial.min.css",
                    },
                    {
                        src: "./assets/css/css/count-up.css",
                        dest: "./assets/css/minified/count-up.min.css",
                    },
                    {
                        src: "./assets/css/css/button.css",
                        dest: "./assets/css/minified/button.min.css",
                    },
                    {
                        src: "./assets/css/css/container.css",
                        dest: "./assets/css/minified/container.min.css",
                    },
                    {
                        src: "./assets/css/css/accordion.css",
                        dest: "./assets/css/minified/accordion.min.css",
                    },
                    {
                        src: "./assets/css/css/icon-box.css",
                        dest: "./assets/css/minified/icon-box.min.css",
                    },
                    {
                        src: "./assets/css/css/video-box.css",
                        dest: "./assets/css/minified/video-box.min.css",
                    },
                    {
                        src: "./assets/css/css/fancy-text.css",
                        dest: "./assets/css/minified/fancy-text.min.css",
                    },
                    {
                        src: "./assets/css/css/lottie.css",
                        dest: "./assets/css/minified/lottie.min.css",
                    },
                    {
                        src: "./assets/css/css/image-separator.css",
                        dest: "./assets/css/minified/image-separator.min.css",
                    },
                    {
                        src: "./assets/css/css/person.css",
                        dest: "./assets/css/minified/person.min.css",
                    },
                    {
                        src: "./assets/css/css/bullet-list.css",
                        dest: "./assets/css/minified/bullet-list.min.css",
                    },
                    {
                        src: "./assets/css/css/modal.css",
                        dest: "./assets/css/minified/modal.min.css",
                    },
                    {
                        src: "./assets/css/css/row.css",
                        dest: "./assets/css/minified/row.min.css",
                    },
                    {
                        src: "./assets/css/css/title.css",
                        dest: "./assets/css/minified/title.min.css",
                    },
                ],
            },
        },
        copy: {
            main: {
                options: {
                    mode: true
                },
                src: [
                    "**",
                    "!nbproject/**",

                    "!vendor/**",
                    "!composer.json",
                    "!composer.lock",

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

                    "!src/**",
                ],
                dest: "premium-blocks-for-gutenberg/"
            }
        },
        compress: {
            main: {
                options: {
                    archive: "premium-blocks-for-gutenberg.zip",
                    mode: "zip"
                },
                files: [
                    {
                        src: [
                            "./premium-blocks-for-gutenberg/**"
                        ]

                    }
                ]
            }
        },
        clean: {
            main: ["premium-blocks-for-gutenberg"],
            zip: ["*.zip"],
        },
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
    grunt.loadNpmTasks('grunt-bumpup');
    grunt.loadNpmTasks('grunt-sass');

    grunt.loadNpmTasks("grunt-contrib-cssmin");

    grunt.loadNpmTasks("grunt-contrib-copy")
    grunt.loadNpmTasks("grunt-contrib-compress")
    grunt.loadNpmTasks("grunt-contrib-clean")


    // Run readme task
    grunt.registerTask("readme", ["wp_readme_to_markdown"])

    // SASS compile
    grunt.registerTask("default", ["sass", "cssmin:css"]);
    // min all
    grunt.registerTask("minify", ["cssmin:css"]);

    //Run bumpup, readme tasks
    grunt.registerTask("build", (releaseType) => {

        releaseType = releaseType ? releaseType : 'patch';

        var prevStableVersion = 'patch' === releaseType ? pkgInfo.prev_stable_version : pkgInfo.version;

        grunt.config.set('prev_stable_version', prevStableVersion);

        grunt.task.run('bumpup:' + releaseType);

        grunt.task.run('readme');

    });


    /* Run release tasks */
    grunt.registerTask("release", [
        "clean:zip",
        "copy",
        "compress",
        "clean:main",
    ]);


};