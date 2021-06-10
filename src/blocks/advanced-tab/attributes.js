const { __ } = wp.i18n

function addAttributes(settings) {

    if (settings.attributes) {
        settings.attributes = Object.assign(settings.attributes, {
            animationType: {
                type: 'string',
                default: "none"
            },

            animationSpeed: {
                type: "string",
                default: 'normal'
            },
            showAnimatiom: {
                type: "boolean",
                default: false
            },
            repeaterColor: {
                type: "array",
                default: [
                ]
            },
            gradAngle: {
                type: "number",
                default: -45
            },
            gradSpeed: {
                type: "number"
            },
            waveEffect: {
                type: "boolean",
                default: false
            },
            showAnimatiom: {
                type: "boolean",
                default: false
            }
        });
    }
    return settings;
}

wp.hooks.addFilter(
    'blocks.registerBlockType',
    'premium-blocks-for-gutenberg/cover-advanced-control',
    addAttributes
);