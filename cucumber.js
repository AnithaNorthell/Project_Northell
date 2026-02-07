module.exports = {
    default: {
        require: [
            'features/step_definitions/**/*.js',
            'features/support/**/*.js'
        ],
        format: [
            'progress-bar',
            'html:reports/index.html',
            'json:reports/cucumber-report.json'
        ],
        formatOptions: {
            snippetInterface: 'async-await'
        }
    }
};
