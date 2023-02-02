const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const path = require('path');

module.exports = {
    ...defaultConfig,
    plugins: [
        ...defaultConfig.plugins,
    ],
    entry: {
        index: path.resolve(__dirname, 'src/index.js'),
        pbg: {
            import: path.resolve(__dirname, './src/pbg.js'),
            library: {
                name: 'pbg',
                type: 'window',
            },
        },
        'equal-height': path.resolve(__dirname, 'src/blocks/container/view.js'),
        'floating-effect': path.resolve(__dirname, 'src/global-features/floating-effect.js'),
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
