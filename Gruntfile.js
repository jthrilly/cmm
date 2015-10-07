/*jshint camelcase: false*/

module.exports = function (grunt) {
    'use strict';

    // load all grunt tasks
    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    // configurable paths
    var config = {
        app: 'www',
    };

    grunt.initConfig({
        postcss: {
            options: {
                map: false, // inline sourcemaps
                processors: [
                    // require('autoprefixer-core')(), // add vendor prefixes
                    require('cssnano')() // minify the result
                ]
            },
            dist: {
                src: '<%= config.app %>/css/style.css'
            }
        },
        notify_hooks: {
            options: {
                enabled: true,
                max_jshint_notifications: 5, // maximum number of notifications from jshint output // defaults to the name in package.json, or will use project directory's name
                success: true, // whether successful grunt executions should be notified automatically
                duration: 3 // the duration of notification in seconds, for `notify-send only
            }
        },
        bower_concat: {
            all: {
                dest: '<%= config.app %>/js/_bower.js'
                // exclude: ['bootstrap']
            }
        },
        concat: {
            js: {
                options: {
                    separator: ';'
                },
                src: [
                    'js/*.js'
                ],
                dest: '<%= config.app %>/js/main.min.js'
            },
        },
        uglify: {
            options: {
                // mangle: false,
                // sourceMap: false,
            },
            js: {
                files: {
                    '<%= config.app %>/js/main.min.js': ['<%= config.app %>/js/main.min.js']
                }
            },
            bower: {
                files: {
                    '<%= config.app %>/js/_bower.js': ['<%= config.app %>/js/_bower.js']
                }
            }
        },
        less: {
            style: {
                files: {
                    "<%= config.app %>/css/style.css": "less/style.less"
                }
            }
        },
        watch: {
            js: {
                files: ['js/*.js'],
                tasks: ['jshint','concat:js', 'uglify:js'],
                options: {
                    livereload: true,
                }
            },
            css: {
                files: ['less/*.less'],
                tasks: ['less:style','postcss:dist'],
                options: {
                    livereload: true,
                }
            }
        },
        config: config,
        jshint: {
            files: ['js/*.js']
        }
    });


    grunt.registerTask('watch', [ 'watch' ]);

    grunt.registerTask('check', [
        'jshint'
    ]);

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-bower-concat');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-notify');

    // This is required if you use any options.
    grunt.task.run('notify_hooks');


};
