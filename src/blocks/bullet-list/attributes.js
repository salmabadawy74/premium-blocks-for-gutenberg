const { __ } = wp.i18n;
const attributes = {
    blockId: {
        type: "string"
    },
    align: {
        type: "object",
        default: {
            Desktop: 'left',
            Tablet: 'left',
            Mobile: 'left',
        }
    },
    repeaterBulletList: {
        type: "array",
        default: [{
            id: 1,
            label: "Title #" + 1,
            image_icon: "icon",
            icon: "fa fa-arrow-circle-right",
            imageURL: "",
            imageID: '',
            icon_color: "",
            label_color: "",
            icon_hover_color: "",
            label_hover_color: "",
            icon_bg_color: "",
            icon_bg_hover_color: "",
            item_bg_color: "",
            item_bg_hover_color: "",
            link: "#",
            target: false,
            disableLink: false,
            showContent: false,
            showBulletIcon: true,
            linkTarget: false
        },
        {
            id: 2,
            label: "Title #" + 2,
            image_icon: "icon",
            icon: "fa fa-arrow-circle-right",
            imageURL: "",
            imageID: '',
            icon_color: "",
            label_color: "",
            icon_hover_color: "",
            label_hover_color: "",
            icon_bg_color: "",
            icon_bg_hover_color: "",
            item_bg_color: "",
            item_bg_hover_color: "",
            link: "#",
            target: false,
            disableLink: false,
            showContent: false,
            showBulletIcon: true,
            linkTarget: false
        },
        {
            id: 3,
            label: "Title #" + 3,
            image_icon: "icon",
            icon: "fa fa-arrow-circle-right",
            imageURL: "",
            imageID: '',
            icon_color: "",
            label_color: "",
            icon_hover_color: "",
            label_hover_color: "",
            icon_bg_color: "",
            icon_bg_hover_color: "",
            item_bg_color: "",
            item_bg_hover_color: "",
            link: "#",
            target: false,
            disableLink: false,
            showContent: false,
            showBulletIcon: true,
            linkTarget: false
        }
        ],
    },
    bulletIconStyles: {
        type: "array",
        default: [{
            bulletIconHoverColor: '',
            bulletIconColor: "",
            bulletIconBackgroundColor: '',
            bulletIconHoverBackgroundColor: '',
            bulletIconpaddingUnit: 'px',
            bulletIconmarginType: 'px'
        }],
    },
    titleStyles: {
        type: "array",
        default: [{
            titleColor: "",
            titleHoverColor: "",
            titlemarginType: 'px'
        }],
    },
    generalStyles: {
        type: "array",
        default: [{
            generalBackgroundColor: "",
            generalHoverBackgroundColor: '',
            generalpaddingUnit: 'px',
            generalmarginType: 'px'
        }],
    },
    classMigrate: {
        type: "boolean",
        default: false
    },
    layoutPos: {
        type: "string",
        default: "block"
    },
    iconPosition: {
        type: "string",
        default: "before"
    },
    bulletAlign: {
        type: "object",
        default: {
            Desktop: 'center',
            Tablet: 'center',
            Mobile: 'center',
        }
    },
    titleFont: {
        type: "string"
    },
    divider: {
        type: "boolean",
        default: false
    },
    dividerStyle: {
        type: "string",
        default: "solid"
    },
    dividerStyles: {
        type: "array",
        default: [{
            dividerColor: '#ddd'
        }]
    },
    generalmargin: {
        type: "object",
        default: {
            Desktop: {
                top: '',
                right: '',
                bottom: '',
                left: ''
            },
            Tablet: {
                top: '',
                right: '',
                bottom: '',
                left: ''
            },
            Mobile: {
                top: '',
                right: '',
                bottom: '',
                left: ''
            },
            unit: 'px'
        }
    },
    bulletIconmargin: {
        type: "object",
        default: {
            Desktop: {
                top: '',
                right: '',
                bottom: '',
                left: ''
            },
            Tablet: {
                top: '',
                right: '',
                bottom: '',
                left: ''
            },
            Mobile: {
                top: '',
                right: '',
                bottom: '',
                left: ''
            },
            unit: 'px'
        }
    },
    titlemargin: {
        type: "object",
        default: {
            Desktop: {
                top: '',
                right: '',
                bottom: '',
                left: ''
            },
            Tablet: {
                top: '',
                right: '',
                bottom: '',
                left: ''
            },
            Mobile: {
                top: '',
                right: '',
                bottom: '',
                left: ''
            },
            unit: 'px'
        }
    },
    generalpadding: {
        type: "object",
        default: {
            Desktop: {
                top: '',
                right: '',
                bottom: '',
                left: ''
            },
            Tablet: {
                top: '',
                right: '',
                bottom: '',
                left: ''
            },
            Mobile: {
                top: '',
                right: '',
                bottom: '',
                left: ''
            },
            unit: 'px'
        }
    },
    bulletIconpadding: {
        type: "object",
        default: {
            Desktop: {
                top: '',
                right: '',
                bottom: '',
                left: ''
            },
            Tablet: {
                top: '',
                right: '',
                bottom: '',
                left: ''
            },
            Mobile: {
                top: '',
                right: '',
                bottom: '',
                left: ''
            },
            unit: 'px'
        }
    },
    generalBorder: {
        type: "object",
        default: {
            "borderType": "none",
            "borderColor": "",
            "borderWidth": {
                Desktop: {
                    top: '',
                    right: '',
                    bottom: '',
                    left: ''
                },
                Tablet: {
                    top: '',
                    right: '',
                    bottom: '',
                    left: ''
                },
                Mobile: {
                    top: '',
                    right: '',
                    bottom: '',
                    left: ''
                }
            },
            "borderRadius": {
                Desktop: {
                    top: '',
                    right: '',
                    bottom: '',
                    left: ''
                },
                Tablet: {
                    top: '',
                    right: '',
                    bottom: '',
                    left: ''
                },
                Mobile: {
                    top: '',
                    right: '',
                    bottom: '',
                    left: ''
                }
            }
        }
    },
    bulletIconBorder: {
        type: "object",
        default: {
            "borderType": "none",
            "borderColor": "",
            "borderWidth": {
                Desktop: {
                    top: '',
                    right: '',
                    bottom: '',
                    left: ''
                },
                Tablet: {
                    top: '',
                    right: '',
                    bottom: '',
                    left: ''
                },
                Mobile: {
                    top: '',
                    right: '',
                    bottom: '',
                    left: ''
                }
            },
            "borderRadius": {
                Desktop: {
                    top: '',
                    right: '',
                    bottom: '',
                    left: ''
                },
                Tablet: {
                    top: '',
                    right: '',
                    bottom: '',
                    left: ''
                },
                Mobile: {
                    top: '',
                    right: '',
                    bottom: '',
                    left: ''
                }
            }
        }
    },
    titleTypography: {
        type: "object",
        default: {
            fontWeight: "400",
            fontStyle: "",

            letterSpacing: {
                Desktop: "",
                Tablet: "",
                Mobile: "",
                unit: "px",
            },
            fontFamily: "Default",
            lineHeight: {
                Desktop: "",
                Tablet: "",
                Mobile: "",
                unit: "px",
            },
            textDecoration: "",
            textTransform: "",
            fontSize: {
                Desktop: "",
                Tablet: "",
                Mobile: "",
                unit: "px",
            },
        },
    },
    titlesTextShadow: {
        type: "object",
        default: {
            color: "undefined",
            blur: "10",
            horizontal: "0",
            vertical: "0",
        }
    },
    boxShadow: {
        type: "object",
        default: {
            color: "undefined",
            blur: "10",
            horizontal: "0",
            vertical: "0",
            'position': ' '
        }
    },
    hoverBoxShadow: {
        type: "object",
        default: {
            color: "undefined",
            blur: "10",
            horizontal: "0",
            vertical: "0",
            'position': ' '
        }
    },
    bulletIconFontSize: {
        type: "object",
        default: {
            'Desktop': 20,
            'Tablet': 20,
            'Mobile': 20,
            'unit': 'px'
        }
    },
    dividerWidth: {
        type: "object",
        default: {
            'Desktop': '',
            'Tablet': '',
            'Mobile': '',
            'unit': 'px'
        }
    },
    dividerHeight: {
        type: "object",
        default: {
            'Desktop': '',
            'Tablet': '',
            'Mobile': '',
            'unit': 'px'
        }
    },
    hideDesktop: {
        type: "boolean",
    },
    hideTablet: {
        type: "boolean",
    },
    hideMobile: {
        type: "boolean",
    },
}
export default attributes