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
        default: false
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
        type: "boolean"
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
                titleSizeUnit: 'px',
                titleSize: '',
                titleSizeMobile: '',
                titleSizeTablet: '',
                titleLine: '',
                titleLetter: '',
                titleStyle: '',
                titleUpper: false,
                titleWeight: 500,
                titleColor: "#6ec1e4",
                titleBack: '',
            }
        ]
    },
    titleTextShadow: {
        type: "object",
        default: {
            'color': '',
            'blur': '',
            'horizontal': '',
            'vertical': ''
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
                slashSizeUnit: 'px',
                slashSize: 20,
                slashSizeMobile: '',
                slashSizeTablet: '',
                slashWeight: '',
                currPrice: '$',
                currColor: '',
                currSize: 20,
                currSizeUnit: 'px',
                currSizeMobile: '',
                currSizeTablet: '',
                currWeight: '',
                valPrice: '25',
                valColor: '',
                valSizeUnit: 'px',
                valSize: 50,
                valSizeMobile: '',
                valSizeTablet: '',
                valWeight: '',
                divPrice: "/",
                divColor: '',
                divSize: 20,
                divSizeUnit: 'px',
                divSizeMobile: '',
                divSizeTablet: '',
                divWeight: '',
                durPrice: 'm',
                durColor: '',
                durSizeUnit: 'px',
                durSize: 20,
                durSizeMobile: '',
                durSizeTablet: '',
                durWeight: '',
                selectedStyle: "price",
                slashV: 'center',
                currV: 'center',
                valV: "center",
                divV: 'center',
                durV: 'center',
            }
        ]
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
    featureStyles: {
        type: "array",
        default: [
            {
                listStyle: "disc",
                listColor: '',
                listSize: '',
                listSizeUnit: 'px',
                listSizeTablet: '',
                listSizeMobile: '',
                listWeight: 500,
                listItemsStyle: '',
                listLetter: '',
                listLine: '',
                listUpper: false,
                listBack: '',
            }
        ]
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
                descSize: '',
                descSizeUnit: 'px',
                descSizeTablet: '',
                descSizeMobile: '',
                descWeight: '',
                descLetter: '',
                descStyle: '',
                descLine: '',
                descColor: "#000",
                descBack: '',
                descMarginT: 0,
                descMarginB: 30,
                descPadding: '0',
            }
        ]
    },
    buttonStyles: {
        type: "array",
        default: [
            {
                btnColor: "#fff",
                btnHoverColor: '',
                btnWidth: '',
                btnSize: '',
                btnSizeUnit: 'px',
                btnSizeTablet: '',
                btnSizeMobile: '',
                btnWeight: 900,
                btnLine: '',
                btnLetter: '',
                btnStyle: '',
                btnUpper: false,
                btnBack: "#6ec1e4",
                btnHoverBack: '',
                btnTarget: true,
            }
        ]
    },
    badgeStyles: {
        type: "array",
        default: [
            {
                badgePos: "right",
                badgeBack: "#6ec1e4",
                badgeColor: '',
                badgeSize: '',
                badgeTextSize: '',
                badgeTextUnit: 'px',
                badgeSizeTablet: '',
                badgeSizeMobile: '',
                badgeTop: '',
                badgeHorizontal: '',
                badgeWidth: '',
                badgeWeight: 900,
                badgeLetter: '',
                badgeStyle: '',
                badgeUpper: false,
                badgeText: __("Popular"),
            }
        ]
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
            'blur': '',
            'horizontal': '',
            'vertical': '',
            'position': ''
        }
    },
    tableBorder: {
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
    buttonBorder: {
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