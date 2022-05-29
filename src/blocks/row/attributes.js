

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
            'Desktop': {
                top: 70,
                right: 0,
                bottom: 70,
                left: 0
            },
            'Tablet': {
                top: 70,
                right: 0,
                bottom: 70,
                left: 0
            },
            'Mobile': {
                top: 70,
                right: 0,
                bottom: 70,
                left: 0
            },
            unit: 'px',
        },
    },
    margin: {
        type: 'object',
        default: {
            Desktop: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
            Tablet: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
            Mobile: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
            unit: 'px',
        },
    },

    marginTop: {
        type: 'object',
        default: { Desktop: 0, unit: 'px' },

    },
    marginBottom: {
        type: 'object',
        default: { Desktop: 0, unit: 'px' },
    },

    rowGutter: {
        type: 'object',
        default: {
            Desktop: 30,
            Tablet: 30,
            Mobile: 30,
            unit: 'px'
        },

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
    height: {
        type: 'string',
        default: 'auto'
    },
    minHeight: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: "",
            unit: 'px'
        },

    },
    vPos: {
        type: "string",
        default: 'middle'
    },
    overflow: {
        type: "string",
        value: "default"
    },
    stretchSection: {
        type: 'boolean',
        default: false
    },
    backgroundOptions: {
        type: "object",
        default: {
            'backgroundType': '',
            'backgroundColor': '',
            'backgroundImageID': '',
            'backgroundImageURL': '',
            'backgroundPosition': '',
            'backgroundRepeat': '',
            'backgroundSize': '',
            'fixed': false,
            'gradientLocationOne': "",
            'gradientColorTwo': '',
            'gradientLocationTwo': '',
            'gradientAngle': '',
            'gradientPosition': '',
            'gradientType': '',
            'videoSource': 'local',
            'bgExternalVideo': '',
            'videoURL': '',
            'videoID': '',
            'bgVideoFallbackID': '',
            'bgVideoFallbackURL': ''
        }
    },


    border: {
        type: 'object',
        default: {
            'borderType': 'none',
            'borderColor': '',
            'borderWidth': {
                Desktop: {
                    'top': '',
                    'right': '',
                    'bottom': '',
                    'left': ''
                },
                Tablet: {
                    'top': '',
                    'right': '',
                    'bottom': '',
                    'left': ''
                },
                Mobile: {
                    'top': '',
                    'right': '',
                    'bottom': '',
                    'left': ''
                },
            },
            'borderRadius': {
                Desktop: {
                    'top': '',
                    'right': '',
                    'bottom': '',
                    'left': ''
                },
                Tablet: {
                    'top': '',
                    'right': '',
                    'bottom': '',
                    'left': ''
                },
                Mobile: {
                    'top': '',
                    'right': '',
                    'bottom': '',
                    'left': ''
                },
            }
        },

    },
    boxShadow: {
        type: "object",
        default: {
            'color': '',
            'blur': '',
            'horizontal': '',
            'vertical': '',
            'position': ''
        }
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