const attributes = {
    colWidth: {
        type: 'object',
        default: {
            desktop: 50,
            tablet: 50,
            mobile: 100,
            unit: '%',
            device: 'desktop'
        },
    },
    padding: {
        type: 'object',
        default: {
            desktop: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
            unit: 'px',
        },
    },
    margin: {
        type: 'object',
        default: {
            desktop: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
            unit: 'px',
        },
    },
    colBg: {
        type: 'object',
        default: {},
    },
    colBorder: {
        type: 'object',
        default: {},
    },
    colShadow: {
        type: 'object',
        default: {},
    },
    borderRadius: {
        type: 'object',
        default: {},
    },
    hideTablet: {
        type: 'boolean',
        default: false,
    },
    hideMobile: {
        type: 'boolean',
        default: false,
    },
    colZindex: {
        type: 'number',
        default: '',
    },
    colCss: {
        type: 'string',
        default: '',
    },
};

export default attributes;
