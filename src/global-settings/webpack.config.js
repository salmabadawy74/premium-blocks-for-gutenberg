const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const path = require('path');

module.exports = {
    ...defaultConfig,
    plugins: [
        ...defaultConfig.plugins,
    ],
    externals: {
        ...defaultConfig.externals,
        '@pbg/components': 'pbg.components',
        '@pbg/helpers': 'pbg.helpers',
        '@pbg/settings': 'pbg.settings'
    },
    module: {
        rules: [
            ...defaultConfig.module.rules,
        ],
    },
    output: {
        ...defaultConfig.output,
    },
};
