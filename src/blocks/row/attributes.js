const attributes = {
    uniqueId: {
        type: 'string',
        default: ''
    },
    columns: {
        type: 'number',
        default: ''
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
            'Desktop': {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
            'Tablet': {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
            'Mobile': {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
            unit: 'px',
        },
    },
    rowContainer: {
        type: 'number',
        default: 0,
    },
    // Background
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

    backgroundOptions: {
        type: "object",
        default: {
            'backgroundType': '',
            'backgroundColor': '#f5f5f5',
            'backgroundImageID': '',
            'backgroundImageURL': '',
            'backgroundPosition': 'center center',
            'backgroundRepeat': 'no-repeat',
            'backgroundSize': 'cover',
            'fixed': false,
            'gradientLocationOne': '0',
            'gradientColorTwo': '',
            'gradientLocationTwo': '100',
            'gradientType': 'linear',
            'gradientAngle': '180',
            'gradientPosition': 'center center',
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
    enableRowOverlay: {
        type: 'boolean',
        default: false
    },
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
            width: {
                'Desktop': '',
                'Tablet': '',
                'Mobile': '',
                unit: '%'
            },
            height: {
                'Desktop': '',
                'Tablet': '',
                'Mobile': '',
                unit: 'px'
            },

        },
    },
    shapeBottom: {
        type: 'object',
        default: {
            openShape: 0,
            color: '#006fbf',
            shapeType: 'bottom',
            width: {
                'Desktop': '',
                'Tablet': '',
                'Mobile': '',
                unit: '%'
            },
            height: {
                'Desktop': '',
                'Tablet': '',
                'Mobile': '',
                unit: 'px'
            }
        },
    },
    // Animation
    animation: {
        type: "object",
        default: {}
    },
    // Responsive
    hideTablet: {
        type: 'boolean',
        default: false,
    },
    hideMobile: {
        type: 'boolean',
        default: false,
    },
    // Advanced Settings
    rowId: {
        type: 'string',
        default: ''
    },
    rowZindex: {
        type: 'number', default: '',
    },
    rowReverse: {
        type: 'object',
        default: {
            openRowReverse: false,
            values: {}
        },
    },
    rowCss: {
        type: 'string',
        default: '',
    },
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
            Desktop: 30,
            Tablet: 30,
            Mobile: 30,
            unit: 'px'
        }
    },
    height: {
        type: "string",
        default: 'auto'
    },
    direction: {
        type: 'object',
        default: {
            'Desktop': '',
            'Tablet': '',
            'Mobile': ''
        }

    }
};

export default attributes;