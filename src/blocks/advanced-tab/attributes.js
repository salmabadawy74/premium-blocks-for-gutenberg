
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