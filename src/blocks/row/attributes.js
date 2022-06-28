const attributes = {
    block_id: {
        type: 'string',
    },
    align: {
        type: "string",
        default: 'alignfull'
    },
    columns: {
        type: 'number',
        default: ''
    },
    variationSelected: {
        type: 'boolean',
        default: false,
    },
    isBlockRootParent: {
        type: 'boolean',
        default: false,
    },
    blockDescendants: {
        type: 'array',
        default: []
    },
    colWidth: {
        type: 'object',
        default: { 'Desktop': 100, 'Tablet': 100, 'Mobile': 100, unit: '%' }

    },
    // Dimension
    padding: {
        type: 'object',
        default: {
            'Desktop': {
                top: '',
                right: '',
                bottom: '',
                left: ''
            },
            'Tablet': {
                top: '',
                right: '',
                bottom: '',
                left: ''
            },
            'Mobile': {
                top: '',
                right: '',
                bottom: '',
                left: ''
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

    overflow: {
        type: "string",
        value: "default"
    },

    backgroundOptions: {
        type: "object",
        default: {
            'backgroundType': '',
            'backgroundColor': '',
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
    backgroundOverlay: {
        type: "object",
        default: {
            'backgroundType': '',
            'backgroundColor': '',
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

        }
    },
    backgroundOverlayHover: {
        type: "object",
        default: {
            'backgroundType': '',
            'backgroundColor': '',
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
    innerWidthType: {
        type: "string",
        default: 'boxed'
    },
    innerWidth: {
        type: "number",
        default: 1200
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
    rowGutter: {
        type: 'object',
        default: {
            Desktop: 30,
            Tablet: 30,
            Mobile: 30,
            unit: 'px'
        }
    },
    direction: {
        type: 'object',
        default: {
            'Desktop': '',
            'Tablet': '',
            'Mobile': ''
        }

    },
    alignItems: {
        type: 'object',
        default: {
            'Desktop': '',
            'Tablet': '',
            'Mobile': ''
        }
    },
    justifyItems: {
        type: 'object',
        default: {
            'Desktop': '',
            'Tablet': '',
            'Mobile': ''
        }
    },
    wrapItems: {
        type: 'object',
        default: {
            'Desktop': '',
            'Tablet': '',
            'Mobile': ''
        }
    },
    alignContent: {
        type: 'object',
        default: {
            'Desktop': '',
            'Tablet': '',
            'Mobile': ''
        }
    },
    containerTag: {
        type: 'string',
        default: 'div'
    },
    blend: {
        type: 'string',
        default: '',
    },
    overlayOpacity: {
        type: 'number'
    },
    overlayFilter: {
        type: 'object',
        default: {
            'contrast': '100',
            'blur': '0',
            'bright': '100',
            'saturation': '100',
            'hue': '0'
        }
    },
    hoverOverlayOpacity: {
        type: 'number'
    },
    hoverOverlayFilter: {
        type: 'object',
        default: {
            'contrast': '100',
            'blur': '0',
            'bright': '100',
            'saturation': '100',
            'hue': '0'
        },
    },
    blend: {
        type: 'string'
    },
    transition: {
        type: 'number'
    }

};

export default attributes;