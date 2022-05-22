

const attributes = {
    uniqueId: {
        type: 'string',
        default: ''
    },
    columns: {
        type: 'number',
        default: ''
    },
    childRow: {
        type: 'boolean',
        default: false
    },
    evenColumnHeight: {
        type: 'boolean',
        default: false,

    },
    // Dimension
    padding: {
        type: 'object',
        default: {
            desktop: {
                top: 70,
                right: 0,
                bottom: 70,
                left: 0
            },
            unit: 'px',
        },
    },

    marginTop: {
        type: 'object',
        default: { desktop: 0, unit: 'px' },

    },
    marginBottom: {
        type: 'object',
        default: { desktop: 0, unit: 'px' },
    },

    rowGutter: {
        type: 'object',
        default: { desktop: 30, tablet: 30, mobile: 30, unit: 'px' },

    },

    rowContainerWidth: {
        type: 'string',
        default: 'boxed'
    },

    rowContainer: {
        type: 'number',
        default: 0,

    },
    position: {
        type: 'string',
        default: '',
    },

    // Background
    rowBg: {
        type: 'object',
        default: {
            bgimgPosition: 'center center',
            bgimgSize: 'cover',
            bgimgRepeat: 'no-repeat',
            bgDefaultColor: '#f5f5f5',
            bgimageSource: 'local',
            externalImageUrl: {}
        },
    },
    heightOptions: {
        type: 'string',
        default: 'auto'
    },
    rowHeight: {
        type: 'object', default: {},

    },

    borderRadius: {
        type: 'object', default: {},

    },

    rowShadow: {
        type: 'object', default: {},
    },
    border: {
        type: 'object', default: {},

    },

    // Overlay
    enableRowOverlay: { type: 'boolean', default: false },
    rowOverlay: {
        type: 'object',
        default: {},

    },
    rowBlend: {
        type: 'string',
        default: '',
    },
    rowOpacity: {
        type: 'number',
        default: '.8',
    },

    // Divider
    shapeTop: {
        type: 'object',
        default: {
            openShape: 0,
            color: '#006fbf',
            shapeType: 'top',
            width: { unit: '%' },
            height: { unit: 'px' },
        },
    },
    shapeBottom: {
        type: 'object',
        default: {
            openShape: 0,
            color: '#006fbf',
            shapeType: 'bottom',
            width: { unit: '%' },
            height: { unit: 'px' }
        },
    },

    // Responsive
    hideTablet: {
        type: 'boolean', default: false,
    },
    hideMobile: {
        type: 'boolean', default: false,
    },

    // Advanced Settings
    rowId: { type: 'string', default: '' },
    rowZindex: {
        type: 'number', default: '',
    },
    rowReverse: {
        type: 'object',
        default: { openRowReverse: false, values: {} },
    },

    rowCss: { type: 'string', default: '', },
    innerWidthType: {
        type: "string",
        default: 'boxed'
    },
    innerWidth: {
        type: "number"
    },
    columnGutter: {
        type: 'object',
        default: {
            "Desktop": '',
            "Tablet": '',
            "Mobile": '',
            unit: 'px'
        }
    },
    height: {
        type: "string",
        default: 'auto'
    }
};

export default attributes;