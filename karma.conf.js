module.exports = function (config) {
    config.set({

        files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'src/**/*.js',
            'test/**/*.js'
        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-coverage'
        ],

        reporters: ['coverage'],

        preprocessors: {
            "src/**/*.js": "coverage"
        },

        coverageReporter: {
            type: "lcov",
            dir: "coverage/"
        }
    });
};
