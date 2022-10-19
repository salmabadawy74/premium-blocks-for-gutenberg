const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const path = require('path');

module.exports = {
    ...defaultConfig,
    plugins: [
        ...defaultConfig.plugins,
    ],
    entry: {
        index: path.resolve(__dirname, 'src/index.js'),
        components: {
            import: path.resolve(__dirname, './src/components.js'),
            library: {
                name: 'pbg',
                type: 'window',
            },
        },
    },
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
