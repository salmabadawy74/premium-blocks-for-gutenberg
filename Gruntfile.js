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
                    }
                ]
            }

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
    grunt.loadNpmTasks("grunt-contrib-copy")
    grunt.loadNpmTasks("grunt-contrib-compress")
    grunt.loadNpmTasks("grunt-contrib-clean")
    // Run readme task
    grunt.registerTask("readme", ["wp_readme_to_markdown"])
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