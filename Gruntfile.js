module.exports = function (grunt) {

    grunt.initConfig({
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
};
