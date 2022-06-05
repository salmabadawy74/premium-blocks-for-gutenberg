const attributes = {
    uniqueId: {
        type: 'string'
    },
    colWidth: {
        type: 'object',

    },
    columnPadding: {
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
            'unit': 'px',
        },
    },
    columnMargin: {
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
    columnAnimation: {
        type: "object",
        default: {}
    },
    columnBackground: {
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
    columnBorder: {
        type: "object",
        default: {
            'borderType': 'none',
            'borderColor': '',
            'borderWidth': {
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
            },
            'borderRadius': {
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
            }
        }
    },
    ColumnAnimation: {
        type: "object",
        default: {}
    }
};

export default attributes;
