const { __ } = wp.i18n;
const videoBoxAttrs = {
    blockId: {
        type: 'string'
    },
    borderBoxUpdated: {
        type: "boolean",
        default: false
    },
    videoBoxId: {
        type: "string"
    },
    videoType: {
        type: "string",
        default: "youtube"
    },
    videoURL: {
        type: "string",
    },
    videoID: {
        type: "string"
    },
    autoPlay: {
        type: "boolean",
        default: false
    },
    loop: {
        type: "boolean",
        default: false
    },
    controls: {
        type: "boolean",
        default: true
    },
    relatedVideos: {
        type: "boolean",
        default: false
    },
    mute: {
        type: "boolean",
        default: false
    },
    overlay: {
        type: "boolean",
        default: false
    },
    videoDesc: {
        type: "boolean"
    },
    playIcon: {
        type: "boolean",
        default: true
    },
    // Old props
    playLeft: {
        type: "number"
    },
    classMigrate: {
        type: 'boolean',
        default: false
    },
    hideDesktop: {
        type: 'boolean',
        default: ''
    },
    hideTablet: {
        type: 'boolean',
        default: ''
    },
    hideMobile: {
        type: 'boolean',
        default: ''
    },
    ratioValue: {
        type: "string",
        default: '169'
    },
    overlayStyles: {
        type: 'array',
        default: [
            {
                overlayImgID: '',
                overlayImgURL: ''
            }
        ]
    },
    playStyles: {
        type: 'array',
        default: [
            {
                playTop: '',
                playSize: '',
                playColor: '',
                playBack: '',
                playOpacity: 1,
                playHoverColor: '',
                playHoverBackColor: ''
            }
        ]

    },
    descStyles: {
        type: 'array',
        default: [
            {
                videoDescText: '',
                videoDescBorderRadius: '',
                descLeft: '',
                descTop: '',
                videoDescColor: '',
                videoDescBack: '',
                videoDescOpacity: 1,
            }
        ]
    },
    videoDescTypography: {
        type: "object",
        default: {
            "fontWeight": 500,
            'fontStyle': '',
            'textTransform': '',
            "textDecoration": "",
            "letterSpacing": {
                "Desktop": "",
                "Tablet": "",
                "Mobile": "",
                "unit": "px"
            },
            "lineHeight": {
                "Desktop": "",
                "Tablet": "",
                "Mobile": "",
                "unit": "px"
            },
            'fontFamily': __('Default', 'premium - blocks -for-gutenberg'),
            'fontSize': {
                'Desktop': "",
                "Tablet": "",
                "Mobile": "",
                unit: 'px'
            }
        }
    },
    playBorder: {
        type: "object",
        default: {
            borderColor: "",
            borderType: "none",
            borderRadius: {
                Desktop: {
                    top: "100",
                    right: "100",
                    bottom: "100",
                    left: "100"
                },
                Tablet: {
                    top: "100",
                    right: "100",
                    bottom: "100",
                    left: "100"
                },
                Mobile: {
                    top: "100",
                    right: "100",
                    bottom: "100",
                    left: "100"
                }
            },
            borderWidth: {
                Desktop: {
                    top: "",
                    right: "",
                    bottom: "",
                    left: ""
                },
                Tablet: {
                    top: "",
                    right: "",
                    bottom: "",
                    left: ""
                },
                Mobile: {
                    top: "",
                    right: "",
                    bottom: "",
                    left: ""
                }
            }
        }
    },
    boxBorder: {
        type: "object",
        default: {
            borderColor: "",
            borderType: "none",
            borderRadius: {
                Desktop: {
                    top: "",
                    right: "",
                    bottom: "",
                    left: ""
                },
                Tablet: {
                    top: "",
                    right: "",
                    bottom: "",
                    left: ""
                },
                Mobile: {
                    top: "",
                    right: "",
                    bottom: "",
                    left: ""
                }
            },
            borderWidth: {
                Desktop: {
                    top: "",
                    right: "",
                    bottom: "",
                    left: ""
                },
                Tablet: {
                    top: "",
                    right: "",
                    bottom: "",
                    left: ""
                },
                Mobile: {
                    top: "",
                    right: "",
                    bottom: "",
                    left: ""
                }
            }
        }
    },
    playPadding: {
        type: "object",
        default: {
            Desktop: {
                top: "",
                right: "",
                bottom: "",
                left: ""
            },
            Tablet: {
                top: "",
                right: "",
                bottom: "",
                left: ""
            },
            Mobile: {
                top: "",
                right: "",
                bottom: "",
                left: ""
            },
            unit: "px"
        }
    },
    descPadding: {
        type: "object",
        default: {
            Desktop: {
                top: "",
                right: "",
                bottom: "",
                left: ""
            },
            Tablet: {
                top: "",
                right: "",
                bottom: "",
                left: ""
            },
            Mobile: {
                top: "",
                right: "",
                bottom: "",
                left: ""
            },
            unit: "px"
        }
    },
    descShadow: {
        type: "object",
        default: {
            'color': '',
            'blur': '',
            'horizontal': '',
            'vertical': ''
        }
    },
    boxShadow: {
        type: "object",
        default: {
            'color': '',
            'blur': '',
            'horizontal': '',
            'vertical': '',
            'position': ' '
        }
    },
    overlayFilter: {
        type: "object",
        default: {
            'contrast': '100',
            'blur': '0',
            'bright': '100',
            'saturation': '100',
            'hue': '0'
        }
    },
};
export default videoBoxAttrs;