const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const path = require('path');

module.exports = {
    ...defaultConfig,
    plugins: defaultConfig.plugins.map(p => {
        if (p.patterns) {
            p.patterns = p.patterns.filter(pattern => pattern.from !== '**/block.json');
        }
        return p;
    }),
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
        'floating-effect': path.resolve(__dirname, 'src/global-features/floating-effect/edit/index.js'),
        'floating-effect-front': path.resolve(__dirname, 'src/global-features/floating-effect/front/index.js'),
        'entrance-animation': path.resolve(__dirname, 'src/global-features/entrance-animation/edit/index.js'),
        'entrance-animation-front': path.resolve(__dirname, 'src/global-features/entrance-animation/front/index.js'),
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
