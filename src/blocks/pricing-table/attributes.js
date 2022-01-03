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
    borderColor: {
        type: "string"
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
    block_id: {
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
                titleShadowColor: '',
                titleShadowBlur: '0',
                titleShadowHorizontal: '0',
                titleShadowVertical: '0',
                titleMarginB: 20,
                titleMarginT: 20,
                titlePadding: 0,
            }
        ]
    },
    priceStyles: {
        type: "array",
        default: [
            {
                priceBack: '',
                priceOpacity: 1,
                priceMarginT: '',
                priceMarginB: 10,
                pricePadding: '',
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
    featureStyles: {
        type: "array",
        default: [
            {
                featsAlign: '',
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
                listMarginB: 20,
                listMarginT: '',
                listPadding: '',
            }
        ]
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
                btnMarginT: 0,
                btnMarginB: 0,
                btnPadding: 10,
                btnPaddingU: 'px',
                btnBorderType: 'none',
                btnBorderWidth: 1,
                btnBorderRadius: 0,
                btnBorderColor: '',
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
                borderType: 'none',
                borderWidth: 1,
                borderRadius: 0,
                tableShadowColor: '',
                tableShadowBlur: '0',
                tableShadowHorizontal: '0',
                tableShadowVertical: '0',
                tableShadowPosition: '',
                tablePadding: "0",
            }
        ]
    },
    btnBorderTop: {
        type: 'number'
    },
    btnBorderRight: {
        type: 'number'
    },
    btnBorderBottom: {
        type: 'number'
    },
    btnBorderLeft: {
        type: 'number'
    },
    borderTop: {
        type: 'number'
    },
    borderRight: {
        type: 'number'
    },
    borderBottom: {
        type: 'number'
    },
    borderLeft: {
        type: 'number'
    },
}
export default attributes