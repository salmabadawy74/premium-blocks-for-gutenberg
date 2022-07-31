const { __ } = wp.i18n;
const attributes = {
    borderUpdated: {
        type: "boolean",
        default: false
    },
    btnBorderUpdated: {
        type: "boolean",
        default: false
    },
    contentAlign: {
        type: "string",
        default: "center"
    },
    title: {
        type: "array",
        source: "children",
        selector: ".premium-pricing-table__title",
        default: "Pricing Table"
    },
    desc: {
        type: "array",
        source: "children",
        selector: ".premium-pricing-table__desc"
    },

    titleChecked: {
        type: "boolean",
        default: true
    },
    descChecked: {
        type: "boolean",
        default: true
    },
    priceChecked: {
        type: "boolean",
        default: true
    },


    btnChecked: {
        type: "boolean",
        default: true
    },
    btnText: {
        type: "string",
        default: "Get Started"
    },
    btnLink: {
        type: "string",
        source: "attribute",
        attribute: "href",
        selector: ".premium-pricing-table__button_link"
    },
    badgeChecked: {
        type: "boolean",
        default: true
    },

    listChecked: {
        type: "boolean",
        default: true
    },
    listItems: {
        type: "array",
        source: "children",
        selector: ".premium-pricing-table__list"
    },
    blockId: {
        type: "string"
    },
    classMigrate: {
        type: 'boolean',
        default: false
    },
    hideDesktop: {
        type: "boolean",
        default: false
    },
    hideTablet: {
        type: "boolean",
        default: false
    },
    hideMobile: {
        type: 'boolean',
        default: false
    },
    titleStyles: {
        type: "array",
        default: [
            {
                titleTag: 'H2',
                titleColor: "#6ec1e4",
                titleBack: '',
            }
        ]
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
        }
    },
    titleTextShadow: {
        type: "object",
        default: {
            'color': '',
            'blur': '10',
            'horizontal': '0',
            'vertical': '0'
        }
    },
    priceStyles: {
        type: "array",
        default: [
            {
                priceBack: '',
                priceOpacity: 1,
                slashPrice: '',
                slashColor: '',
                currPrice: '$',
                currColor: '',
                valPrice: '25',
                valColor: '',
                divPrice: "/",
                divColor: '',
                durPrice: 'm',
                durColor: '',
                selectedStyle: "price",
            }
        ]
    },
    slashTypography: {
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
        }
    },
    currTypography: {
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
        }
    },
    priceTypography: {
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
        }
    },
    dividerTypography: {
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
        }
    },
    durationTypography: {
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
        }
    },
    slashVAlign: {
        type: "object",
        default: {
            Desktop: 'center',
            Tablet: 'center',
            Mobile: 'center',
        }
    },
    currVAlign: {
        type: "object",
        default: {
            Desktop: 'center',
            Tablet: 'center',
            Mobile: 'center',
        }
    },
    valVAlign: {
        type: "object",
        default: {
            Desktop: 'center',
            Tablet: 'center',
            Mobile: 'center',
        }
    },
    divVAlign: {
        type: "object",
        default: {
            Desktop: 'center',
            Tablet: 'center',
            Mobile: 'center',
        }
    },
    durVAlign: {
        type: "object",
        default: {
            Desktop: 'center',
            Tablet: 'center',
            Mobile: 'center',
        }
    },
    featureStyles: {
        type: "array",
        default: [
            {
                listStyle: "disc",
                listColor: '',
                listItemsStyle: '',
                listBack: '',
            }
        ]
    },
    listTypography: {
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
        }
    },
    featureAlign: {
        type: "object",
        default: {
            Desktop: 'center',
            Tablet: 'center',
            Mobile: 'center',
        }
    },
    descStyles: {
        type: "array",
        default: [
            {
                descColor: "#000",
                descBack: '',
                descMarginT: 0,
                descMarginB: 30,
                descPadding: '0',
            }
        ]
    },
    descTypography: {
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
        }
    },
    buttonStyles: {
        type: "array",
        default: [
            {
                btnColor: "#fff",
                btnHoverColor: '',
                btnWidth: '',
                btnBack: "#6ec1e4",
                btnHoverBack: '',
                btnTarget: true,
            }
        ]
    },
    buttonTypography: {
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
        }
    },
    badgeStyles: {
        type: "array",
        default: [
            {
                badgePos: "right",
                badgeBack: "#6ec1e4",
                badgeColor: '',
                badgeTop: '',
                badgeHorizontal: '',
                badgeWidth: '',
                badgeText: __("Popular"),
            }
        ]
    },
    badgeTypography: {
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
        }
    },
    tableStyles: {
        type: "array",
        default: [
            {
                tableBack: '',
                tableOpacity: 1,
            }
        ]
    },
    tableBoxShadow: {
        type: "object",
        default: {
            'color': '',
            'blur': '10',
            'horizontal': '0',
            'vertical': '0',
            'position': ''
        }
    },
    tableBorder: {
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
    buttonBorder: {
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
    tablePadding: {
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
    titlePadding: {
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
    titleMargin: {
        type: "object",
        default: {
            Desktop: {
                top: 20,
                right: '',
                bottom: 20,
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
    pricePadding: {
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
    priceMargin: {
        type: "object",
        default: {
            Desktop: {
                top: '',
                right: '',
                bottom: 10,
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
    featuresListPadding: {
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
    featuresListMargin: {
        type: "object",
        default: {
            Desktop: {
                top: '',
                right: '',
                bottom: 20,
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
    descriptionPadding: {
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
    descriptionMargin: {
        type: "object",
        default: {
            Desktop: {
                top: '',
                right: '',
                bottom: 30,
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
    buttonPadding: {
        type: "object",
        default: {
            Desktop: {
                top: 10,
                right: 10,
                bottom: 10,
                left: 10
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
    buttonMargin: {
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
}
export default attributes