const { __ } = wp.i18n;
const attributes = {
    block_id: {
        type: "string"
    },
    align: {
        type: "string",
        default: "left"
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
            icon_color: "#6EC1E4",
            label_color: "#6EC1E4",
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
            icon_color: "#6EC1E4",
            label_color: "#6EC1E4",
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
            icon_color: "#6EC1E4",
            label_color: "#6EC1E4",
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
            bulletListfontSize: 20,
            bulletListfontSizeType: "px",
            bulletListfontSizeMobile: 20,
            bulletListfontSizeTablet: 20,
            bulletIconHoverColor: '',
            bulletIconColor: "#6EC1E4",
            bulletIconBackgroundColor: '',
            bulletIconHoverBackgroundColor: '',
            bulletIconpaddingUnit: 'px',
            bulletIconmarginType: 'px'
        }],
    },
    titleStyles: {
        type: "array",
        default: [{
            titleLetter: 0,
            titleStyle: '',
            titleUpper: false,
            titleWeight: 500,
            titleLine: 0,
            titleSize: 20,
            titlefontSizeType: "px",
            titlefontSizeMobile: 20,
            titlefontSizeTablet: 20,
            titleFontFamily: __('Default', 'premium-blocks-for-gutenberg'),
            titleColor: "#6EC1E4",
            titleHoverColor: "",
            titleshadowColor: '',
            titleshadowBlur: 0,
            titleshadowHorizontal: 0,
            titleshadowVertical: 0,
            titlemarginType: 'px'
        }],
    },
    generalStyles: {
        type: "array",
        default: [{
            generalBackgroundColor: "",
            generalHoverBackgroundColor: '',
            generalShadowColor: '',
            generalShadowBlur: 0,
            generalShadowHorizontal: 0,
            generalShadowVertical: 0,
            generalShadowPosition: '',
            generalHoverShadowColor: '',
            generalHoverShadowBlur: '',
            generalHoverShadowHorizontal: '',
            generalHoverShadowVertical: '',
            generalHoverShadowPosition: '',
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
        type: "string",
        default: "center"
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
            dividerWidth: '0',
            dividerWidthTablet: '0',
            dividerWidthMobile: '0',
            dividerWidthType: 'px',
            dividerHeight: '0',
            dividerHeightTablet: '0',
            dividerHeightMobile: '0',
            dividerHeightType: 'px',
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
            "borderType": "",
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
            "borderType": "",
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
    }
}
export default attributes