module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! Project: <%= pkg.name %> | Version #: <%= pkg.version %> | Created: <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'dist/<%= pkg.name %>.min.js'
            }
        },
        coveralls: {
            options: {
                debug: true,
                coverageDir: 'coverage',
                dryRun: false,
                force: true,
                recursive: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-karma-coveralls');

    // Load the grunt-contrib-uglify plugin, which exposes an "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

};
