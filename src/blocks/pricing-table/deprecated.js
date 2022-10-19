const className = "premium-pricing-table";
import { generateBlockId } from '@pbg/helpers';
import classnames from "classnames";

const { __ } = wp.i18n;
const { RichText } = wp.editor;
import hexToRgba from 'hex-to-rgba'
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
    tableBack: {
        type: "string"
    },
    borderType: {
        type: "string",
        default: "none"
    },
    borderWidth: {
        type: "number",
        default: "1"
    },
    borderRadius: {
        type: "number",
        default: "0"
    },
    borderColor: {
        type: "string"
    },
    tablePadding: {
        type: "number",
        default: "0"
    },
    tableShadowColor: {
        type: "string"
    },
    tableShadowBlur: {
        type: "number",
        default: "0"
    },
    tableShadowHorizontal: {
        type: "number",
        default: "0"
    },
    tableShadowVertical: {
        type: "number",
        default: "0"
    },
    tableShadowPosition: {
        type: "string",
        default: ""
    },
    title: {
        type: "array",
        source: "children",
        selector: ".premium-pricing-table__title",
        default: "Pricing Table"
    },
    titleTag: {
        type: "string",
        default: "H2"
    },
    titleColor: {
        type: "string",
        default: "#6ec1e4"
    },
    titleSizeUnit: {
        type: 'string',
        default: 'px'
    },
    titleSize: {
        type: "number"
    },
    titleSizeMobile: {
        type: 'number'
    },
    titleSizeTablet: {
        type: "number"
    },
    titleLine: {
        type: "number"
    },
    titleLetter: {
        type: "number"
    },
    titleStyle: {
        type: "string"
    },
    titleUpper: {
        type: "boolean"
    },
    titleWeight: {
        type: "number",
        default: 500
    },
    titleShadowColor: {
        type: "string"
    },
    titleShadowBlur: {
        type: "number",
        default: "0"
    },
    titleShadowHorizontal: {
        type: "number",
        default: "0"
    },
    titleShadowVertical: {
        type: "number",
        default: "0"
    },
    titleBack: {
        type: "string"
    },
    titleMarginB: {
        type: "number",
        default: 20
    },
    titleMarginT: {
        type: "number",
        default: 20
    },
    titlePadding: {
        type: "number",
        default: "0"
    },
    desc: {
        type: "array",
        source: "children",
        selector: ".premium-pricing-table__desc"
    },
    descColor: {
        type: "string",
        default: "#000"
    },
    descSize: {
        type: "number"
    },
    descSizeUnit: {
        type: "string",
        default: 'px'
    },
    descSizeTablet: {
        type: 'number'
    },
    descSizeMobile: {
        type: 'number'
    },
    descWeight: {
        type: "number"
    },
    descLetter: {
        type: "number"
    },
    descStyle: {
        type: "string"
    },
    descLine: {
        type: "number"
    },
    descBack: {
        type: "string"
    },
    descMarginT: {
        type: "number",
        default: "0"
    },
    descMarginB: {
        type: "number",
        default: "30"
    },
    descPadding: {
        type: "number",
        default: "0"
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
    priceBack: {
        type: "string"
    },
    priceMarginT: {
        type: "number"
    },
    priceMarginB: {
        type: "number",
        default: 10
    },
    pricePadding: {
        type: "number"
    },
    slashPrice: {
        type: "string"
    },
    slashColor: {
        type: "string"
    },
    slashSizeUnit: {
        type: "string",
        default: 'px'
    },
    slashSize: {
        type: "number",
        default: 20
    },
    slashSizeMobile: {
        type: "number"
    },
    slashSizeTablet: {
        type: "number"
    },
    slashWeight: {
        type: "number"
    },
    currPrice: {
        type: "string",
        default: "$"
    },
    currColor: {
        type: "string"
    },
    currSize: {
        type: "number",
        default: 20
    },
    currSizeUnit: {
        type: "string",
        default: 'px'
    },
    currSizeMobile: {
        type: "number"
    },
    currSizeTablet: {
        type: "number"
    },
    currWeight: {
        type: "number"
    },
    valPrice: {
        type: "string",
        default: "25"
    },
    valColor: {
        type: "string"
    },
    valSizeUnit: {
        type: "string",
        default: "px"
    },
    valSize: {
        type: "number",
        default: 50
    },
    valSizeMobile: {
        type: "number"
    },
    valSizeTablet: {
        type: "number"
    },
    valWeight: {
        type: "number"
    },
    divPrice: {
        type: "string",
        default: "/"
    },
    divColor: {
        type: "string"
    },
    divSize: {
        type: "number",
        default: 20
    },
    divSizeUnit: {
        type: "string",
        default: "px"
    },
    divSizeMobile: {
        type: "number"
    },
    divSizeTablet: {
        type: "number"
    },
    divWeight: {
        type: "number"
    },
    durPrice: {
        type: "string",
        default: "m"
    },
    durColor: {
        type: "string"
    },
    durSizeUnit: {
        type: "string",
        default: 'px'
    },
    durSize: {
        type: "number",
        default: 20
    },
    durSizeMobile: {
        type: "number"
    },
    durSizeTablet: {
        type: "number"
    },
    durWeight: {
        type: "number"
    },
    selectedStyle: {
        type: "string",
        default: "price"
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
    btnTarget: {
        type: "boolean",
        default: true
    },
    btnColor: {
        type: "string",
        default: "#fff"
    },
    btnHoverColor: {
        type: "string"
    },
    btnWidth: {
        type: "number"
    },
    btnSize: {
        type: "number"
    },
    btnSizeUnit: {
        type: 'string',
        default: 'px'
    },
    btnSizeTablet: {
        type: 'number'
    },
    btnSizeMobile: {
        type: 'number'
    },
    btnWeight: {
        type: "number",
        default: 900
    },
    btnLine: {
        type: "number"
    },
    btnLetter: {
        type: "number"
    },
    btnStyle: {
        type: "string"
    },
    btnUpper: {
        type: "boolean"
    },
    btnBack: {
        type: "string",
        default: "#6ec1e4"
    },
    btnHoverBack: {
        type: "string"
    },
    btnMarginT: {
        type: "number",
        default: "0"
    },
    btnMarginB: {
        type: "number",
        default: "0"
    },
    btnPadding: {
        type: "number",
        default: 10
    },
    btnPaddingU: {
        type: "string"
    },
    btnBorderType: {
        type: "string",
        default: "none"
    },
    btnBorderWidth: {
        type: "number",
        default: "1"
    },
    btnBorderRadius: {
        type: "number",
        default: "0"
    },
    btnBorderColor: {
        type: "string"
    },
    badgeChecked: {
        type: "boolean"
    },
    badgePos: {
        type: "string",
        default: "right"
    },
    badgeBack: {
        type: "string",
        default: "#6ec1e4"
    },
    badgeColor: {
        type: "string"
    },
    badgeTextSize: {
        type: "number"
    },
    badgeSize: {
        type: "number"
    },
    badgeTextUnit: {
        type: 'string',
        default: 'px'
    },
    badgeTextSizeTablet: {
        type: 'number'
    },
    badgeTextSizeMobile: {
        type: 'number'
    },
    badgeTop: {
        type: "number"
    },
    badgeHorizontal: {
        type: "number"
    },
    badgeWidth: {
        type: "number"
    },
    badgeWeight: {
        type: "number",
        default: 900
    },
    badgeLetter: {
        type: "number"
    },
    badgeStyle: {
        type: "string"
    },
    badgeUpper: {
        type: "boolean"
    },
    badgeText: {
        type: "string",
        default: __("Popular")
    },
    listChecked: {
        type: "boolean",
        default: true
    },
    listColor: {
        type: "string"
    },
    listSize: {
        type: "number"
    },
    listSizeUnit: {
        type: 'string',
        default: 'px'
    },
    listSizeTablet: {
        type: 'number'
    },
    listSizeMobile: {
        type: 'number'
    },
    listWeight: {
        type: "number",
        default: 500
    },
    listItemsStyle: {
        type: "string"
    },
    listLetter: {
        type: "number"
    },
    listLine: {
        type: "number"
    },
    listUpper: {
        type: "boolean"
    },
    listBack: {
        type: "string"
    },
    listItems: {
        type: "array",
        source: "children",
        selector: ".premium-pricing-table__list"
    },
    listMarginB: {
        type: "number",
        default: 20
    },
    listMarginT: {
        type: "number"
    },
    listPadding: {
        type: "number"
    },
    listStyle: {
        type: "string",
        default: "disc"
    },
    featsAlign: {
        type: "string"
    },
    slashV: {
        type: "string",
        default: "center"
    },
    currV: {
        type: "string",
        default: "center"
    },
    valV: {
        type: "string",
        default: "center"
    },
    divV: {
        type: "string",
        default: "center"
    },
    durV: {
        type: "string",
        default: "center"
    },
    block_id: {
        type: "string"
    },
    btnBorderTop: {
        type: "number"
    },
    btnBorderRight: {
        type: "number"
    },
    btnBorderBottom: {
        type: "number"
    },
    btnBorderLeft: {
        type: "number"
    },
    borderTop: {
        type: "number"
    },
    borderRight: {
        type: "number"
    },
    borderBottom: {
        type: "number"
    },
    borderLeft: {
        type: "number"
    },
    classMigrate: {
        type: 'boolean',
        default: false
    },
    tableOpacity: {
        type: "number",
        default: "1",
    },
    priceOpacity: {
        type: "number",
        default: "1"
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
    }
}

const v5Attributes = {
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
};

const deprecatedContent = [
    {
        attributes: v5Attributes,
        isEligible() {
            return true;
        },
        migrate: (attributes) => {
            let newAttributes = {
                blockId: attributes.block_id ? "premium-pricing-table-" + generateBlockId(attributes.block_id) : '',
                titleTextShadow: {
                    'color': attributes?.titleStyles[0]?.titleShadowColor || '',
                    'blur': attributes?.titleStyles[0]?.titleShadowBlur || '',
                    'horizontal': attributes?.titleStyles[0]?.titleShadowHorizontal || '',
                    'vertical': attributes?.titleStyles[0]?.titleShadowVertical || ''
                },
                tableBoxShadow: {
                    'color': attributes?.tableStyles[0]?.tableShadowColor || '',
                    'blur': attributes?.tableStyles[0]?.tableShadowBlur || '',
                    'horizontal': attributes?.tableStyles[0]?.tableShadowHorizontal || '',
                    'vertical': attributes?.tableStyles[0]?.tableShadowVertical || '',
                    'position': attributes?.tableStyles[0]?.tableShadowPosition || ''
                },
                featureAlign: {
                    Desktop: attributes?.featureStyles[0]?.featsAlign || 'center',
                    Tablet: attributes?.featureStyles[0]?.featsAlign || 'center',
                    Mobile: attributes?.featureStyles[0]?.featsAlign || 'center',
                },
                tableBorder: {
                    "borderType": attributes?.tableStyles[0]?.borderType || '',
                    "borderColor": attributes?.borderColor || '',
                    "borderWidth": {
                        Desktop: {
                            top: attributes?.borderTop || '',
                            right: attributes?.borderRight || '',
                            bottom: attributes?.borderBottom || '',
                            left: attributes?.borderLeft || ''
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
                            top: attributes?.tableStyles[0]?.borderRadius || '',
                            right: attributes?.tableStyles[0]?.borderRadius || '',
                            bottom: attributes?.tableStyles[0]?.borderRadius || '',
                            left: attributes?.tableStyles[0]?.borderRadius || ''
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
                },
                buttonBorder: {
                    "borderType": attributes?.buttonStyles[0]?.btnBorderType || '',
                    "borderColor": attributes?.buttonStyles[0]?.btnBorderColor || '',
                    "borderWidth": {
                        Desktop: {
                            top: attributes?.btnBorderTop || '',
                            right: attributes?.btnBorderRight || '',
                            bottom: attributes?.btnBorderBottom || '',
                            left: attributes?.btnBorderLeft || ''
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
                            top: attributes?.buttonStyles[0]?.btnBorderRadius || '',
                            right: attributes?.buttonStyles[0]?.btnBorderRadius || '',
                            bottom: attributes?.buttonStyles[0]?.btnBorderRadius || '',
                            left: attributes?.buttonStyles[0]?.btnBorderRadius || ''
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
                },
                tablePadding: {
                    Desktop: {
                        top: attributes?.tableStyles[0]?.tablePadding || '',
                        right: attributes?.tableStyles[0]?.tablePadding || '',
                        bottom: attributes?.tableStyles[0]?.tablePadding || '',
                        left: attributes?.tableStyles[0]?.tablePadding || ''
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
                },
                titlePadding: {
                    Desktop: {
                        top: attributes?.titleStyles[0]?.titlePadding || '',
                        right: attributes?.titleStyles[0]?.titlePadding || '',
                        bottom: attributes?.titleStyles[0]?.titlePadding || '',
                        left: attributes?.titleStyles[0]?.titlePadding || ''
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
                },
                titleMargin: {
                    Desktop: {
                        top: attributes?.titleStyles[0]?.titleMarginT || 20,
                        right: '',
                        bottom: attributes?.titleStyles[0]?.titleMarginB || 20,
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
                },
                pricePadding: {
                    Desktop: {
                        top: attributes?.priceStyles[0]?.pricePadding || '',
                        right: attributes?.priceStyles[0]?.pricePadding || '',
                        bottom: attributes?.priceStyles[0]?.pricePadding || '',
                        left: attributes?.priceStyles[0]?.pricePadding || ''
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
                },
                priceMargin: {
                    Desktop: {
                        top: attributes?.priceStyles[0]?.priceMarginT || '',
                        right: '',
                        bottom: attributes?.priceStyles[0]?.priceMarginB || 10,
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
                },
                featuresListPadding: {
                    Desktop: {
                        top: attributes?.featureStyles[0]?.listPadding || '',
                        right: attributes?.featureStyles[0]?.listPadding || '',
                        bottom: attributes?.featureStyles[0]?.listPadding || '',
                        left: attributes?.featureStyles[0]?.listPadding || ''
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
                },
                featuresListMargin: {
                    Desktop: {
                        top: attributes?.featureStyles[0]?.listMarginT || '',
                        right: '',
                        bottom: attributes?.featureStyles[0]?.listMarginB || 20,
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
                },
                descriptionPadding: {
                    Desktop: {
                        top: attributes?.descStyles[0]?.descPadding || '',
                        right: attributes?.descStyles[0]?.descPadding || '',
                        bottom: attributes?.descStyles[0]?.descPadding || '',
                        left: attributes?.descStyles[0]?.descPadding || ''
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
                },
                descriptionMargin: {
                    Desktop: {
                        top: attributes?.descStyles[0]?.descMarginT || '',
                        right: '',
                        bottom: attributes?.descStyles[0]?.descMarginB || 30,
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
                },
                buttonPadding: {
                    Desktop: {
                        top: attributes?.buttonStyles[0]?.btnPadding || 10,
                        right: attributes?.buttonStyles[0]?.btnPadding || 10,
                        bottom: attributes?.buttonStyles[0]?.btnPadding || 10,
                        left: attributes?.buttonStyles[0]?.btnPadding || 10
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
                    unit: attributes?.buttonStyles[0]?.btnPaddingU || 'px'
                },
                buttonMargin: {
                    Desktop: {
                        top: attributes?.buttonStyles[0]?.btnMarginT || '',
                        right: '',
                        bottom: attributes?.buttonStyles[0]?.btnMarginB || '',
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
                },
                titleTypography: {
                    "fontWeight": attributes?.titleStyles[0]?.titleWeight || '400',
                    'fontStyle': attributes?.titleStyles[0]?.titleStyle || '',
                    'textTransform': attributes?.titleStyles[0]?.titleUpper || '',
                    'fontFamily': 'Default',
                    letterSpacing: {
                        Desktop: attributes?.titleStyles[0]?.titleLetter || '',
                        Tablet: attributes?.titleStyles[0]?.titleLetter || '',
                        Mobile: attributes?.titleStyles[0]?.titleLetter || '',
                        unit: "px",
                    },
                    lineHeight: {
                        Desktop: attributes?.titleStyles[0]?.titleLine || '',
                        Tablet: attributes?.titleStyles[0]?.titleLine || '',
                        Mobile: attributes?.titleStyles[0]?.titleLine || '',
                        unit: "px",
                    },
                    'textDecoration': '',
                    'fontSize': {
                        'Desktop': attributes?.titleStyles[0]?.titleSize || '',
                        "Tablet": attributes?.titleStyles[0]?.titleSizeTablet || '',
                        "Mobile": attributes?.titleStyles[0]?.titleSizeMobile || '',
                        "unit": attributes?.titleStyles[0]?.titleSizeUnit || 'px'
                    }
                },
                slashTypography: {
                    "fontWeight": attributes?.priceStyles[0]?.slashWeight || '400',
                    'fontStyle': '',
                    'textTransform': '',
                    'fontFamily': 'Default',
                    'textDecoration': '',
                    letterSpacing: {
                        Desktop: '',
                        Tablet: '',
                        Mobile: '',
                        unit: "px",
                    },
                    lineHeight: {
                        Desktop: '',
                        Tablet: '',
                        Mobile: '',
                        unit: "px",
                    },
                    'fontSize': {
                        'Desktop': attributes?.priceStyles[0]?.slashSize || '',
                        "Tablet": attributes?.priceStyles[0]?.slashSizeTablet || '',
                        "Mobile": attributes?.priceStyles[0]?.slashSizeMobile || '',
                        "unit": attributes?.priceStyles[0]?.slashSizeUnit || 'px'
                    }
                },
                currTypography: {
                    "fontWeight": attributes?.priceStyles[0]?.currWeight || '400',
                    'fontStyle': '',
                    'textTransform': '',
                    'fontFamily': 'Default',
                    'textDecoration': '',
                    letterSpacing: {
                        Desktop: '',
                        Tablet: '',
                        Mobile: '',
                        unit: "px",
                    },
                    lineHeight: {
                        Desktop: '',
                        Tablet: '',
                        Mobile: '',
                        unit: "px",
                    },
                    'fontSize': {
                        'Desktop': attributes?.priceStyles[0]?.currSize || '',
                        "Tablet": attributes?.priceStyles[0]?.currSizeTablet || '',
                        "Mobile": attributes?.priceStyles[0]?.currSizeMobile || '',
                        "unit": attributes?.priceStyles[0]?.currSizeUnit || 'px'
                    }
                },
                priceTypography: {
                    "fontWeight": attributes?.priceStyles[0]?.valWeight || '400',
                    'fontStyle': '',
                    'textTransform': '',
                    'fontFamily': 'Default',
                    'textDecoration': '',
                    letterSpacing: {
                        Desktop: '',
                        Tablet: '',
                        Mobile: '',
                        unit: "px",
                    },
                    lineHeight: {
                        Desktop: '',
                        Tablet: '',
                        Mobile: '',
                        unit: "px",
                    },
                    'fontSize': {
                        'Desktop': attributes?.priceStyles[0]?.valSize || '',
                        "Tablet": attributes?.priceStyles[0]?.valSizeTablet || '',
                        "Mobile": attributes?.priceStyles[0]?.valSizeMobile || '',
                        "unit": attributes?.priceStyles[0]?.valSizeUnit || 'px'
                    }
                },
                dividerTypography: {
                    "fontWeight": attributes?.priceStyles[0]?.divWeight || '400',
                    'fontStyle': '',
                    'textTransform': '',
                    'fontFamily': 'Default',
                    'textDecoration': '',
                    letterSpacing: {
                        Desktop: '',
                        Tablet: '',
                        Mobile: '',
                        unit: "px",
                    },
                    lineHeight: {
                        Desktop: '',
                        Tablet: '',
                        Mobile: '',
                        unit: "px",
                    },
                    'fontSize': {
                        'Desktop': attributes?.priceStyles[0]?.divSize || '',
                        "Tablet": attributes?.priceStyles[0]?.divSizeTablet || '',
                        "Mobile": attributes?.priceStyles[0]?.divSizeMobile || '',
                        "unit": attributes?.priceStyles[0]?.divSizeUnit || 'px'
                    }
                },
                durationTypography: {
                    "fontWeight": attributes?.priceStyles[0]?.durWeight || '400',
                    'fontStyle': '',
                    'textTransform': '',
                    'fontFamily': 'Default',
                    'textDecoration': '',
                    letterSpacing: {
                        Desktop: '',
                        Tablet: '',
                        Mobile: '',
                        unit: "px",
                    },
                    lineHeight: {
                        Desktop: '',
                        Tablet: '',
                        Mobile: '',
                        unit: "px",
                    },
                    'fontSize': {
                        'Desktop': attributes?.priceStyles[0]?.durSize || '',
                        "Tablet": attributes?.priceStyles[0]?.durSizeTablet || '',
                        "Mobile": attributes?.priceStyles[0]?.durSizeMobile || '',
                        "unit": attributes?.priceStyles[0]?.durSizeUnit || 'px'
                    }
                },
                listTypography: {
                    "fontWeight": attributes?.featureStyles[0]?.listWeight || '400',
                    'fontStyle': attributes?.featureStyles[0]?.listItemsStyle || '',
                    'textTransform': attributes?.featureStyles[0]?.listUpper || '',
                    'fontFamily': 'Default',
                    letterSpacing: {
                        Desktop: attributes?.featureStyles[0]?.listLetter || '',
                        Tablet: attributes?.featureStyles[0]?.listLetter || '',
                        Mobile: attributes?.featureStyles[0]?.listLetter || '',
                        unit: "px",
                    },
                    lineHeight: {
                        Desktop: attributes?.featureStyles[0]?.listLine || '',
                        Tablet: attributes?.featureStyles[0]?.listLine || '',
                        Mobile: attributes?.featureStyles[0]?.listLine || '',
                        unit: "px",
                    },
                    'textDecoration': '',
                    'fontSize': {
                        'Desktop': attributes?.featureStyles[0]?.listSize || '',
                        "Tablet": attributes?.featureStyles[0]?.listSizeTablet || '',
                        "Mobile": attributes?.featureStyles[0]?.listSizeMobile || '',
                        "unit": attributes?.featureStyles[0]?.listSizeUnit || 'px'
                    }
                },
                descTypography: {
                    "fontWeight": attributes?.descStyles[0]?.descWeight || '400',
                    'fontStyle': attributes?.descStyles[0]?.descStyle || '',
                    'textTransform': '',
                    'fontFamily': 'Default',
                    'textDecoration': '',
                    letterSpacing: {
                        Desktop: attributes?.descStyles[0]?.descLetter || '',
                        Tablet: attributes?.descStyles[0]?.descLetter || '',
                        Mobile: attributes?.descStyles[0]?.descLetter || '',
                        unit: "px",
                    },
                    lineHeight: {
                        Desktop: attributes?.descStyles[0]?.descLine || '',
                        Tablet: attributes?.descStyles[0]?.descLine || '',
                        Mobile: attributes?.descStyles[0]?.descLine || '',
                        unit: "px",
                    },
                    'fontSize': {
                        'Desktop': attributes?.descStyles[0]?.descSize || '',
                        "Tablet": attributes?.descStyles[0]?.descSizeTablet || '',
                        "Mobile": attributes?.descStyles[0]?.descSizeMobile || '',
                        "unit": attributes?.descStyles[0]?.descSizeUnit || 'px'
                    }
                },
                buttonTypography: {
                    "fontWeight": attributes?.buttonStyles[0]?.btnWeight || '400',
                    'fontStyle': attributes?.buttonStyles[0]?.btnStyle || '',
                    'textTransform': attributes?.buttonStyles[0]?.btnUpper || '',
                    'fontFamily': 'Default',
                    letterSpacing: {
                        Desktop: attributes?.buttonStyles[0]?.btnLetter || '',
                        Tablet: attributes?.buttonStyles[0]?.btnLetter || '',
                        Mobile: attributes?.buttonStyles[0]?.btnLetter || '',
                        unit: "px",
                    },
                    lineHeight: {
                        Desktop: attributes?.buttonStyles[0]?.btnLine || '',
                        Tablet: attributes?.buttonStyles[0]?.btnLine || '',
                        Mobile: attributes?.buttonStyles[0]?.btnLine || '',
                        unit: "px",
                    },
                    'textDecoration': '',
                    'fontSize': {
                        'Desktop': attributes?.buttonStyles[0]?.btnSize || '',
                        "Tablet": attributes?.buttonStyles[0]?.btnSizeTablet || '',
                        "Mobile": attributes?.buttonStyles[0]?.btnSizeMobile || '',
                        "unit": attributes?.buttonStyles[0]?.btnSizeUnit || 'px'
                    }
                },
                badgeTypography: {
                    "fontWeight": attributes?.badgeStyles[0]?.badgeWeight || '400',
                    'fontStyle': attributes?.badgeStyles[0]?.badgeStyle || '',
                    'textTransform': attributes?.badgeStyles[0]?.badgeUpper || '',
                    'fontFamily': 'Default',
                    'textDecoration': '',
                    letterSpacing: {
                        Desktop: attributes?.badgeStyles[0]?.badgeLetter || '',
                        Tablet: attributes?.badgeStyles[0]?.badgeLetter || '',
                        Mobile: attributes?.badgeStyles[0]?.badgeLetter || '',
                        unit: "px",
                    },
                    lineHeight: {
                        Desktop: '',
                        Tablet: '',
                        Mobile: '',
                        unit: "px",
                    },
                    'fontSize': {
                        'Desktop': attributes?.badgeStyles[0]?.badgeTextSize || '',
                        "Tablet": attributes?.badgeStyles[0]?.badgeSizeTablet || '',
                        "Mobile": attributes?.badgeStyles[0]?.badgeSizeMobile || '',
                        "unit": attributes?.badgeStyles[0]?.badgeTextUnit || 'px'
                    }
                },
                slashVAlign: {
                    Desktop: attributes?.priceStyles[0]?.slashV || 'center',
                    Tablet: attributes?.priceStyles[0]?.slashV || 'center',
                    Mobile: attributes?.priceStyles[0]?.slashV || 'center',
                },
                currVAlign: {
                    Desktop: attributes?.priceStyles[0]?.currV || 'center',
                    Tablet: attributes?.priceStyles[0]?.currV || 'center',
                    Mobile: attributes?.priceStyles[0]?.currV || 'center',
                },
                valVAlign: {
                    Desktop: attributes?.priceStyles[0]?.valV || 'center',
                    Tablet: attributes?.priceStyles[0]?.valV || 'center',
                    Mobile: attributes?.priceStyles[0]?.valV || 'center',
                },
                divVAlign: {
                    Desktop: attributes?.priceStyles[0]?.divV || 'center',
                    Tablet: attributes?.priceStyles[0]?.divV || 'center',
                    Mobile: attributes?.priceStyles[0]?.divV || 'center',
                },
                durVAlign: {
                    Desktop: attributes?.priceStyles[0]?.durV || 'center',
                    Tablet: attributes?.priceStyles[0]?.durV || 'center',
                    Mobile: attributes?.priceStyles[0]?.durV || 'center',
                },
            }
            return Object.assign(attributes, newAttributes)
        },
        save: (props) => {
            const { className } = props;

            const {
                borderUpdated,
                btnBorderUpdated,
                contentAlign,
                borderColor,
                title,
                desc,
                titleChecked,
                descChecked,
                priceChecked,
                selectedStyle,
                btnChecked,
                btnText,
                btnLink,
                badgeChecked,
                listChecked,
                listItems,
                block_id,
                classMigrate,
                hideDesktop,
                hideTablet,
                hideMobile,
                titleStyles,
                priceStyles,
                featureStyles,
                descStyles,
                buttonStyles,
                badgeStyles,
                tableStyles,
                btnBorderTop,
                btnBorderRight,
                btnBorderBottom,
                btnBorderLeft,
                borderTop,
                borderRight,
                borderBottom,
                borderLeft,
            } = props.attributes;

            const mainClasses = classnames(className, "premium-pricing-table");

            return (
                <div
                    id={`${mainClasses}-${block_id}`}
                    className={`${mainClasses} premium-pricing-table-${block_id} ${hideDesktop} ${hideTablet} ${hideMobile}`}
                    style={{
                        textAlign: contentAlign,
                        backgroundColor: tableStyles[0].tableBack,
                        borderStyle: tableStyles[0].borderType,
                        borderWidth: borderUpdated
                            ? `${borderTop}px ${borderRight}px ${borderBottom}px ${borderLeft}px`
                            : tableStyles[0].borderWidth + "px",
                        borderRadius: tableStyles[0].borderRadius + "px",
                        borderColor: borderColor,
                        padding: tableStyles[0].tablePadding + "px",
                        boxShadow: `${tableStyles[0].tableShadowHorizontal}px ${tableStyles[0].tableShadowVertical}px ${tableStyles[0].tableShadowBlur}px ${tableStyles[0].tableShadowColor} ${tableStyles[0].tableShadowPosition}`
                    }}
                >
                    {badgeChecked && (
                        <div
                            className={`premium-pricing-table__badge_wrap premium-pricing-table__badge_${badgeStyles[0].badgePos}`}
                        >
                            <div
                                className={`premium-pricing-table__badge`}
                                style={{
                                    borderRightColor:
                                        "right" === badgeStyles[0].badgePos ? badgeStyles[0].badgeBack : "transparent",
                                    borderTopColor: "left" === badgeStyles[0].badgePos ? badgeStyles[0].badgeBack : "transparent",
                                    borderBottomWidth: badgeStyles[0].badgeSize + "px",
                                    borderRightWidth: badgeStyles[0].badgeSize + "px",
                                    borderTopWidth: "left" === badgeStyles[0].badgePos ? badgeStyles[0].badgeSize + "px" : "none",
                                    borderLeftWidth: "right" === badgeStyles[0].badgePos ? badgeStyles[0].badgeSize + "px" : "none"
                                }}
                            >
                                <span
                                    style={{
                                        color: badgeStyles[0].badgeColor,
                                        fontWeight: badgeStyles[0].badgeWeight,
                                        textTransform: badgeStyles[0].badgeUpper ? "uppercase" : "none",
                                        letterSpacing: badgeStyles[0].badgeLetter + "px",
                                        fontStyle: badgeStyles[0].badgeStyle,
                                        width: badgeStyles[0].badgeWidth + "px",
                                        top: badgeStyles[0].badgeTop + "px",
                                        left: "left" === badgeStyles[0].badgePos ? badgeStyles[0].badgeHorizontal + "px" : "auto",
                                        right: "right" === badgeStyles[0].badgePos ? badgeStyles[0].badgeHorizontal + "px" : "auto"
                                    }}
                                >
                                    {badgeStyles[0].badgeText}                       </span>
                            </div>
                        </div>
                    )}
                    {titleChecked && (
                        <div
                            className={`premium-pricing-table__title_wrap`}
                            style={{
                                marginTop: titleStyles[0].titleMarginT + "px",
                                marginBottom: titleStyles[0].titleMarginB + "px",
                                background: titleStyles[0].titleBack,
                            }}
                        >
                            <RichText.Content
                                tagName={titleStyles[0].titleTag.toLowerCase()}
                                className={`premium-pricing-table__title`}
                                value={title}
                                style={{
                                    color: titleStyles[0].titleColor,
                                    letterSpacing: titleStyles[0].titleLetter + "px",
                                    textTransform: titleStyles[0].titleUpper ? "uppercase" : "none",
                                    fontStyle: titleStyles[0].titleStyle,
                                    fontWeight: titleStyles[0].titleWeight,
                                    lineHeight: titleStyles[0].titleLine + "px",
                                    padding: titleStyles[0].titlePadding + "px",
                                    textShadow: `${titleStyles[0].titleShadowHorizontal}px ${titleStyles[0].titleShadowVertical}px ${titleStyles[0].titleShadowBlur}px ${titleStyles[0].titleShadowColor}`
                                }}
                            />
                        </div>
                    )}
                    {priceChecked && (
                        <div
                            className={`premium-pricing-table__price_wrap`}
                            style={{
                                backgroundColor: priceStyles[0].priceBack,
                                marginTop: priceStyles[0].priceMarginT + "px",
                                marginBottom: priceStyles[0].priceMarginB + "px",
                                padding: priceStyles[0].pricePadding + "px",
                                justifyContent: contentAlign
                            }}
                        >
                            {priceStyles[0].slashPrice && (
                                <strike
                                    className={`premium-pricing-table__slash`}
                                    style={{
                                        color: priceStyles[0].slashColor,
                                        fontWeight: priceStyles[0].slashWeight,
                                        alignSelf: priceStyles[0].slashV
                                    }}
                                >
                                    {priceStyles[0].slashPrice}
                                </strike>
                            )}
                            {priceStyles[0].currPrice && (
                                <span
                                    className={`premium-pricing-table__currency`}
                                    style={{
                                        color: priceStyles[0].currColor,
                                        fontWeight: priceStyles[0].currWeight,
                                        alignSelf: priceStyles[0].currV
                                    }}
                                >
                                    {priceStyles[0].currPrice}
                                </span>
                            )}
                            {priceStyles[0].valPrice && (
                                <span
                                    className={`premium-pricing-table__val`}
                                    style={{
                                        color: priceStyles[0].valColor,
                                        fontWeight: priceStyles[0].valWeight,
                                        alignSelf: priceStyles[0].valV
                                    }}
                                >
                                    {priceStyles[0].valPrice}
                                </span>
                            )}
                            {priceStyles[0].divPrice && (
                                <span
                                    className={`premium-pricing-table__divider`}
                                    style={{
                                        color: priceStyles[0].divColor,
                                        fontWeight: priceStyles[0].divWeight,
                                        alignSelf: priceStyles[0].divV
                                    }}
                                >
                                    {priceStyles[0].divPrice}
                                </span>
                            )}
                            {priceStyles[0].durPrice && (
                                <span
                                    className={`premium-pricing-table__dur`}
                                    style={{
                                        color: priceStyles[0].durColor,
                                        fontWeight: priceStyles[0].durWeight,
                                        alignSelf: priceStyles[0].durV
                                    }}
                                >
                                    {priceStyles[0].durPrice}
                                </span>
                            )}
                        </div>
                    )}
                    {listChecked && (
                        <div
                            className={`premium-pricing-table__list_wrap`}
                            style={{
                                marginTop: featureStyles[0].listMarginT + "px",
                                marginBottom: featureStyles[0].listMarginB + "px"
                            }}
                        >
                            <ul
                                className={`premium-pricing-table__list list-${featureStyles[0].listStyle}`}
                                style={{
                                    color: featureStyles[0].listColor,
                                    background: featureStyles[0].listBack,
                                    padding: featureStyles[0].listPadding + "px",
                                    listStyle: "check" !== featureStyles[0].listStyle ? featureStyles[0].listStyle : "none",
                                    listStylePosition: "inside",
                                    fontWeight: featureStyles[0].listWeight,
                                    textTransform: featureStyles[0].listUpper ? "uppercase" : "none",
                                    letterSpacing: featureStyles[0].listLetter + "px",
                                    fontStyle: featureStyles[0].listItemsStyle,
                                    lineHeight: featureStyles[0].listLine + "px",
                                    textAlign: featureStyles[0].featsAlign ? featureStyles[0].featsAlign : contentAlign
                                }}
                            >
                                {listItems}
                            </ul>
                        </div>
                    )}
                    {descChecked && (
                        <div className={`premium-pricing-table__desc_wrap`}>
                            <RichText.Content
                                tagName="p"
                                className={`premium-pricing-table__desc`}
                                value={desc}
                                style={{
                                    color: descStyles[0].descColor,
                                    background: descStyles[0].descBack,
                                    fontWeight: descStyles[0].descWeight,
                                    letterSpacing: descStyles[0].descLetter + "px",
                                    fontStyle: descStyles[0].descStyle,
                                    lineHeight: descStyles[0].descLine + "px",
                                    marginTop: descStyles[0].descMarginT + "px",
                                    marginBottom: descStyles[0].descMarginB + "px",
                                    padding: descStyles[0].descPadding + "px"
                                }}
                            />
                        </div>
                    )}
                    {btnChecked && (
                        <div
                            className={`premium-pricing-table__button`}
                            style={{
                                width: buttonStyles[0].btnWidth + "%"
                            }}
                        >
                            <a
                                class={`premium-pricing-table__button_link`}
                                href={btnLink}
                                target={buttonStyles[0].btnTarget ? "_blank" : "_self"}
                                rel="noopener noreferrer"
                                style={{
                                    color: buttonStyles[0].btnColor,
                                    background: buttonStyles[0].btnBack ? buttonStyles[0].btnBack : "transparent",
                                    fontWeight: buttonStyles[0].btnWeight,
                                    letterSpacing: buttonStyles[0].btnLetter + "px",
                                    fontStyle: buttonStyles[0].btnStyle,
                                    lineHeight: buttonStyles[0].btnLine + "px",
                                    marginTop: buttonStyles[0].btnMarginT,
                                    marginBottom: buttonStyles[0].btnMarginB,
                                    padding: buttonStyles[0].btnPadding + buttonStyles[0].btnPaddingU,
                                    borderStyle: buttonStyles[0].btnBorderType,
                                    borderWidth: btnBorderUpdated
                                        ? `${btnBorderTop}px ${btnBorderRight}px ${btnBorderBottom}px ${btnBorderLeft}px`
                                        : buttonStyles[0].btnBorderWidth + "px",
                                    borderRadius: buttonStyles[0].btnBorderRadius + "px",
                                    borderColor: buttonStyles[0].btnBorderColor
                                }}
                            >
                                <RichText.Content
                                    tagName="span"
                                    onChange={newText =>
                                        setAttributes({ btnText: newText })
                                    }
                                    value={btnText}
                                    style={{
                                        textTransform: buttonStyles[0].btnUpper ? "uppercase" : "none"
                                    }}
                                />
                            </a>
                            <style
                                dangerouslySetInnerHTML={{
                                    __html: [
                                        `#premium-pricing-table-${block_id} .premium-pricing-table__button_link:hover {`,
                                        `color: ${buttonStyles[0].btnHoverColor} !important;`,
                                        `background: ${buttonStyles[0].btnHoverBack} !important`,
                                        "}"
                                    ].join("\n")
                                }}
                            />
                        </div>
                    )}
                </div>
            );
        }
    },
    {
        attributes: attributes,
        migrate: attributes => {
            let newAttributes = {
                titleStyles: [{
                    titleTag: attributes.titleTag,
                    titleSizeUnit: attributes.titleSizeUnit,
                    titleSize: attributes.titleSize,
                    titleSizeMobile: attributes.titleSizeMobile,
                    titleSizeTablet: attributes.titleSizeTablet,
                    titleLine: attributes.titleLine,
                    titleLetter: attributes.titleLetter,
                    titleStyle: attributes.titleStyle,
                    titleUpper: attributes.titleUpper,
                    titleWeight: attributes.titleWeight,
                    titleColor: attributes.titleColor,
                    titleBack: attributes.titleBack,
                    titleShadowColor: attributes.titleShadowColor,
                    titleShadowBlur: attributes.titleShadowBlur,
                    titleShadowHorizontal: attributes.titleShadowHorizontal,
                    titleShadowVertical: attributes.titleShadowVertical,
                    titleMarginB: attributes.titleMarginB,
                    titleMarginT: attributes.titleMarginT,
                    titlePadding: attributes.titlePadding,
                }],
                priceStyles: [{
                    priceBack: attributes.priceBack,
                    priceOpacity: attributes.priceOpacity,
                    priceMarginT: attributes.priceMarginT,
                    priceMarginB: attributes.priceMarginB,
                    pricePadding: attributes.pricePadding,
                    slashPrice: attributes.slashPrice,
                    slashColor: attributes.slashColor,
                    slashSizeUnit: attributes.slashSizeUnit,
                    slashSize: attributes.slashSize,
                    slashSizeMobile: attributes.slashSizeMobile,
                    slashSizeTablet: attributes.slashSizeTablet,
                    slashWeight: attributes.slashWeight,
                    currPrice: attributes.currPrice,
                    currColor: attributes.currColor,
                    currSize: attributes.currSize,
                    currSizeUnit: attributes.currSizeUnit,
                    currSizeMobile: attributes.currSizeMobile,
                    currSizeTablet: attributes.currSizeTablet,
                    currWeight: attributes.currWeight,
                    valPrice: attributes.valPrice,
                    valColor: attributes.valColor,
                    valSizeUnit: attributes.valSizeUnit,
                    valSize: attributes.valSize,
                    valSizeMobile: attributes.valSizeMobile,
                    valSizeTablet: attributes.valSizeTablet,
                    valWeight: attributes.valWeight,
                    divPrice: attributes.divPrice,
                    divColor: attributes.divColor,
                    divSize: attributes.divSize,
                    divSizeUnit: attributes.divSizeUnit,
                    divSizeMobile: attributes.divSizeMobile,
                    divSizeTablet: attributes.divSizeTablet,
                    divWeight: attributes.divWeight,
                    durPrice: attributes.durPrice,
                    durColor: attributes.durColor,
                    durSizeUnit: attributes.durSizeUnit,
                    durSize: attributes.durSize,
                    durSizeMobile: attributes.durSizeMobile,
                    durSizeTablet: attributes.durSizeTablet,
                    durWeight: attributes.durWeight,
                    selectedStyle: attributes.selectedStyle,
                    slashV: attributes.slashV,
                    currV: attributes.currV,
                    valV: attributes.valV,
                    divV: attributes.divV,
                    durV: attributes.durV,
                }],
                featureStyles: [{
                    featsAlign: attributes.featsAlign,
                    listStyle: attributes.listStyle,
                    listColor: attributes.listColor,
                    listSize: attributes.listSize,
                    listSizeUnit: attributes.listSizeUnit,
                    listSizeTablet: attributes.listSizeTablet,
                    listSizeMobile: attributes.listSizeMobile,
                    listWeight: attributes.listWeight,
                    listItemsStyle: attributes.listItemsStyle,
                    listLetter: attributes.listLetter,
                    listLine: attributes.listLine,
                    listUpper: attributes.listUpper,
                    listBack: attributes.listBack,
                    listMarginB: attributes.listMarginB,
                    listMarginT: attributes.listMarginT,
                    listPadding: attributes.listPadding,
                }],
                descStyles: [{
                    descSize: attributes.descSize,
                    descSizeUnit: attributes.descSizeUnit,
                    descSizeTablet: attributes.descSizeTablet,
                    descSizeMobile: attributes.descSizeMobile,
                    descWeight: attributes.descWeight,
                    descLetter: attributes.descLetter,
                    descStyle: attributes.descStyle,
                    descLine: attributes.descLine,
                    descColor: attributes.descColor,
                    descBack: attributes.descBack,
                    descMarginT: attributes.descMarginT,
                    descMarginB: attributes.descMarginB,
                    descPadding: attributes.descPadding,
                }
                ],
                buttonStyles: [{
                    btnColor: attributes.btnColor,
                    btnHoverColor: attributes.btnHoverColor,
                    btnWidth: attributes.btnWidth,
                    btnSize: attributes.btnSize,
                    btnSizeUnit: attributes.btnSizeUnit,
                    btnSizeTablet: attributes.btnSizeTablet,
                    btnSizeMobile: attributes.btnSizeMobile,
                    btnWeight: attributes.btnWeight,
                    btnLine: attributes.btnLine,
                    btnLetter: attributes.btnLetter,
                    btnStyle: attributes.btnStyle,
                    btnUpper: attributes.btnUpper,
                    btnBack: attributes.btnBack,
                    btnHoverBack: attributes.btnHoverBack,
                    btnMarginT: attributes.btnMarginT,
                    btnMarginB: attributes.btnMarginB,
                    btnPadding: attributes.btnPadding,
                    btnPaddingU: attributes.btnPaddingU,
                    btnBorderType: attributes.btnBorderType,
                    btnBorderWidth: attributes.btnBorderWidth,
                    btnBorderRadius: attributes.btnBorderRadius,
                    btnBorderColor: attributes.btnBorderColor,
                    btnTarget: attributes.btnTarget,
                }],
                badgeStyles: [
                    {
                        badgePos: attributes.badgePos,
                        badgeBack: attributes.badgeBack,
                        badgeColor: attributes.badgeColor,
                        badgeSize: attributes.badgeSize,
                        badgeTextUnit: attributes.badgeTextUnit,
                        badgeSizeTablet: attributes.badgeSizeTablet,
                        badgeSizeMobile: attributes.badgeSizeMobile,
                        badgeTop: attributes.badgeTop,
                        badgeHorizontal: attributes.badgeHorizontal,
                        badgeWidth: attributes.badgeWidth,
                        badgeWeight: attributes.badgeWeight,
                        badgeLetter: attributes.badgeLetter,
                        badgeStyle: attributes.badgeStyle,
                        badgeUpper: attributes.badgeUpper,
                        badgeText: attributes.badgeText,
                    }],
                tableStyles: [{
                    tableBack: attributes.tableBack,
                    tableOpacity: attributes.tableOpacity,
                    borderType: attributes.borderType,
                    borderWidth: attributes.borderWidth,
                    borderRadius: attributes.borderRadius,
                    tableShadowColor: attributes.tableShadowColor,
                    tableShadowBlur: attributes.tableShadowBlur,
                    tableShadowHorizontal: attributes.tableShadowHorizontal,
                    tableShadowVertical: attributes.tableShadowVertical,
                    tableShadowPosition: attributes.tableShadowPosition,
                    tablePadding: attributes.tablePadding,
                }]
            }
            return Object.assign(attributes, newAttributes)
        },
        save: (props) => {
            const {
                borderUpdated,
                btnBorderUpdated,
                priceOpacity,
                tableOpacity,
                contentAlign,
                tableBack,
                borderType,
                borderWidth,
                borderRadius,
                borderColor,
                tablePadding,
                tableShadowBlur,
                tableShadowColor,
                tableShadowHorizontal,
                tableShadowVertical,
                tableShadowPosition,
                titleChecked,
                title,
                titleTag,
                titleColor,
                titleLetter,
                titleUpper,
                titleStyle,
                titleLine,
                titleWeight,
                titleBack,
                titleShadowBlur,
                titleShadowColor,
                titleShadowHorizontal,
                titleShadowVertical,
                titleMarginT,
                titleMarginB,
                titlePadding,
                descChecked,
                desc,
                descColor,
                descLine,
                descWeight,
                descStyle,
                descLetter,
                descBack,
                descMarginT,
                descMarginB,
                descPadding,
                priceChecked,
                priceBack,
                priceMarginT,
                priceMarginB,
                pricePadding,
                slashPrice,
                slashColor,
                slashWeight,
                slashV,
                currPrice,
                currColor,
                currWeight,
                currV,
                valPrice,
                valColor,
                valWeight,
                valV,
                divPrice,
                divColor,
                divWeight,
                divV,
                durPrice,
                durColor,
                durWeight,
                durV,
                btnChecked,
                btnText,
                btnLink,
                btnTarget,
                btnColor,
                btnHoverColor,
                btnWeight,
                btnLine,
                btnLetter,
                btnUpper,
                btnStyle,
                btnBack,
                btnHoverBack,
                btnMarginT,
                btnMarginB,
                btnPadding,
                btnPaddingU,
                btnWidth,
                btnBorderTop,
                btnBorderRight,
                btnBorderBottom,
                btnBorderLeft,
                borderTop,
                borderRight,
                borderBottom,
                borderLeft,
                btnBorderType,
                btnBorderWidth,
                btnBorderRadius,
                btnBorderColor,
                badgeChecked,
                badgePos,
                badgeBack,
                badgeColor,
                badgeTop,
                badgeHorizontal,
                badgeWidth,
                badgeSize,
                badgeWeight,
                badgeLetter,
                badgeStyle,
                badgeUpper,
                badgeText,
                listChecked,
                listColor,
                listWeight,
                listItemsStyle,
                listLine,
                listUpper,
                listLetter,
                listBack,
                listItems,
                listMarginB,
                listMarginT,
                listPadding,
                listStyle,
                featsAlign,
                block_id,
                hideDesktop,
                hideTablet,
                hideMobile
            } = props.attributes;


            return (
                <div
                    id={`${className}-${block_id}`}
                    className={`${className} premium-pricing-table-${block_id} ${hideDesktop} ${hideTablet} ${hideMobile}`}
                    style={{
                        textAlign: contentAlign,
                        backgroundColor: tableBack
                            ? hexToRgba(tableBack, tableOpacity)
                            : "transparent",
                        borderStyle: borderType,
                        borderWidth: borderUpdated
                            ? `${borderTop}px ${borderRight}px ${borderBottom}px ${borderLeft}px`
                            : borderWidth + "px",
                        borderRadius: borderRadius + "px",
                        borderColor: borderColor,
                        padding: tablePadding + "px",
                        boxShadow: `${tableShadowHorizontal}px ${tableShadowVertical}px ${tableShadowBlur}px ${tableShadowColor} ${tableShadowPosition}`
                    }}
                >
                    {badgeChecked && (
                        <div
                            className={`premium-pricing-table__badge_wrap premium-pricing-table__badge_${badgePos}`}
                        >
                            <div
                                className={`premium-pricing-table__badge`}
                                style={{
                                    borderRightColor:
                                        "right" === badgePos
                                            ? badgeBack
                                            : "transparent",
                                    borderTopColor:
                                        "left" === badgePos ? badgeBack : "transparent",
                                    borderBottomWidth: badgeSize + "px",
                                    borderRightWidth: badgeSize + "px",
                                    borderTopWidth:
                                        "left" === badgePos ? badgeSize + "px" : "none",
                                    borderLeftWidth:
                                        "right" === badgePos ? badgeSize + "px" : "none"
                                }}
                            >
                                <span
                                    style={{
                                        color: badgeColor,
                                        fontWeight: badgeWeight,
                                        textTransform: badgeUpper
                                            ? "uppercase"
                                            : "none",
                                        letterSpacing: badgeLetter + "px",
                                        fontStyle: badgeStyle,
                                        width: badgeWidth + "px",
                                        top: badgeTop + "px",
                                        left:
                                            "left" === badgePos
                                                ? badgeHorizontal + "px"
                                                : "auto",
                                        right:
                                            "right" === badgePos
                                                ? badgeHorizontal + "px"
                                                : "auto"
                                    }}
                                >
                                    {badgeText}
                                </span>
                            </div>
                        </div>
                    )}
                    {titleChecked && (
                        <div
                            className={`premium-pricing-table__title_wrap`}
                            style={{
                                paddingTop: titleMarginT + "px",
                                paddingBottom: titleMarginB + "px"
                            }}
                        >
                            <RichText.Content
                                tagName={titleTag.toLowerCase()}
                                className={`premium-pricing-table__title`}
                                value={title}
                                style={{
                                    color: titleColor,
                                    background: titleBack,
                                    letterSpacing: titleLetter + "px",
                                    textTransform: titleUpper ? "uppercase" : "none",
                                    fontStyle: titleStyle,
                                    fontWeight: titleWeight,
                                    lineHeight: titleLine + "px",
                                    marginBottom: titleMarginB + "px",
                                    padding: titlePadding + "px",
                                    textShadow: `${titleShadowHorizontal}px ${titleShadowVertical}px ${titleShadowBlur}px ${titleShadowColor}`
                                }}
                            />
                        </div>
                    )}
                    {priceChecked && (
                        <div
                            className={`premium-pricing-table__price_wrap`}
                            style={{
                                backgroundColor: priceBack
                                    ? hexToRgba(priceBack, priceOpacity)
                                    : "transparent",
                                marginTop: priceMarginT + "px",
                                marginBottom: priceMarginB + "px",
                                padding: pricePadding + "px",
                                justifyContent: contentAlign
                            }}
                        >
                            {slashPrice && (
                                <strike
                                    className={`premium-pricing-table__slash`}
                                    style={{
                                        color: slashColor,
                                        fontWeight: slashWeight,
                                        alignSelf: slashV
                                    }}
                                >
                                    {slashPrice}
                                </strike>
                            )}
                            {currPrice && (
                                <span
                                    className={`premium-pricing-table__currency`}
                                    style={{
                                        color: currColor,
                                        fontWeight: currWeight,
                                        alignSelf: currV
                                    }}
                                >
                                    {currPrice}
                                </span>
                            )}
                            {valPrice && (
                                <span
                                    className={`premium-pricing-table__val`}
                                    style={{
                                        color: valColor,
                                        fontWeight: valWeight,
                                        alignSelf: valV
                                    }}
                                >
                                    {valPrice}
                                </span>
                            )}
                            {divPrice && (
                                <span
                                    className={`premium-pricing-table__divider`}
                                    style={{
                                        color: divColor,
                                        fontWeight: divWeight,
                                        alignSelf: divV
                                    }}
                                >
                                    {divPrice}
                                </span>
                            )}
                            {durPrice && (
                                <span
                                    className={`premium-pricing-table__dur`}
                                    style={{
                                        color: durColor,
                                        fontWeight: durWeight,
                                        alignSelf: durV
                                    }}
                                >
                                    {durPrice}
                                </span>
                            )}
                        </div>
                    )}
                    {listChecked && (
                        <div
                            className={`premium-pricing-table__list_wrap`}
                            style={{
                                marginTop: listMarginT + "px",
                                marginBottom: listMarginB + "px"
                            }}
                        >
                            <ul
                                className={`premium-pricing-table__list list-${listStyle}`}
                                style={{
                                    color: listColor,
                                    background: listBack,
                                    padding: listPadding + "px",
                                    listStyle:
                                        "check" !== listStyle ? listStyle : "none",
                                    listStylePosition: "inside",
                                    fontWeight: listWeight,
                                    letterSpacing: listLetter + "px",
                                    textTransform: listUpper ? "uppercase" : "none",
                                    fontStyle: listItemsStyle,
                                    lineHeight: listLine + "px",
                                    textAlign: featsAlign ? featsAlign : contentAlign
                                }}
                            >
                                {listItems}
                            </ul>
                        </div>
                    )}
                    {descChecked && (
                        <div className={`premium-pricing-table__desc_wrap`}>
                            <RichText.Content
                                tagName="p"
                                className={`premium-pricing-table__desc`}
                                value={desc}
                                style={{
                                    color: descColor,
                                    background: descBack,
                                    fontWeight: descWeight,
                                    lineHeight: descLine + "px",
                                    letterSpacing: descLetter + "px",
                                    fontStyle: descStyle,
                                    marginTop: descMarginT + "px",
                                    marginBottom: descMarginB + "px",
                                    padding: descPadding + "px"
                                }}
                            />
                        </div>
                    )}
                    {btnChecked && (
                        <div
                            className={`premium-pricing-table__button`}
                            style={{
                                width: btnWidth + "%"
                            }}
                        >
                            <a
                                class={`premium-pricing-table__button_link`}
                                href={btnLink}
                                target={btnTarget ? "_blank" : "_self"}
                                rel="noopener noreferrer"
                                style={{
                                    color: btnColor,
                                    background: btnBack ? btnBack : "transparent",
                                    fontWeight: btnWeight,
                                    letterSpacing: btnLetter + "px",
                                    fontStyle: btnStyle,
                                    lineHeight: btnLine + "px",
                                    marginTop: btnMarginT,
                                    marginBottom: btnMarginB,
                                    padding: btnPadding + btnPaddingU,
                                    borderStyle: btnBorderType,
                                    borderWidth: btnBorderUpdated
                                        ? `${btnBorderTop}px ${btnBorderRight}px ${btnBorderBottom}px ${btnBorderLeft}px`
                                        : btnBorderWidth + "px",
                                    borderRadius: btnBorderRadius + "px",
                                    borderColor: btnBorderColor
                                }}
                            >
                                <RichText.Content
                                    tagName="span"
                                    onChange={newText =>
                                        setAttributes({ btnText: newText })
                                    }
                                    value={btnText}
                                    style={{
                                        textTransform: btnUpper ? "uppercase" : "none"
                                    }}
                                />
                            </a>
                            <style
                                dangerouslySetInnerHTML={{
                                    __html: [
                                        `#premium-pricing-table-${block_id} .premium-pricing-table__button_link:hover {`,
                                        `color: ${btnHoverColor} !important;`,
                                        `background: ${btnHoverBack} !important`,
                                        "}"
                                    ].join("\n")
                                }}
                            />
                        </div>
                    )}
                </div>
            );
        }
    },
    {
        attributes: attributes,
        migrate: (attributes) => {
            let newAttributes = {
                borderLeft: "",
                borderTop: "",
                borderLeft: "",
                borderRight: "",
                btnBorderRight: "",
                btnBorderTop: "",
                btnBorderBottom: "",
                btnBorderLeft: "",
                borderUpdated: "",
                btnBorderUpdated: "",
                classMigrate: false,
                block_id: '',
                titleSizeUnit: 'px',
                titleSizeMobile: '',
                titleSizeTablet: '',
                valSizeUnit: "px",
                valSizeTablet: '',
                valSizeMobile: '',
                badgeTextUnit: "px",
                badgeTextSizeTablet: '',
                badgeTextSizeMobile: '',
                btnSizeUnit: 'px',
                btnSizeMobile: '',
                btnSizeTablet: '',
                currSizeUnit: 'px',
                currSizeMobile: '',
                currSizeTablet: '',
                descSizeUnit: 'px',
                descSizeMobile: '',
                descSizeTablet: '',
                divSizeUnit: 'px',
                divSizeMobile: '',
                divSizeTablet: '',
                durSizeUnit: "px",
                durSizeTablet: '',
                durSizeMobile: '',
                listSizeUnit: 'px',
                listSizeMobile: '',
                listSizeTablet: '',
                slashSizeUnit: 'px',
                slashSizeMobile: '',
                slashSizeTablet: '',
                tableOpacity: "",
                priceOpacity: "",
                hideDesktop: false,
                hideTablet: false,
                hideMobile: false
            };
            return Object.assign(attributes, newAttributes);
        },
        save: (props) => {
            const {
                contentAlign,
                tableBack,
                borderType,
                borderWidth,
                borderRadius,
                borderColor,
                tablePadding,
                tableShadowBlur,
                tableShadowColor,
                tableShadowHorizontal,
                tableShadowVertical,
                tableShadowPosition,
                titleChecked,
                title,
                titleTag,
                titleColor,
                titleSize,
                titleLetter,
                titleUpper,
                titleStyle,
                titleLine,
                titleWeight,
                titleBack,
                titleShadowBlur,
                titleShadowColor,
                titleShadowHorizontal,
                titleShadowVertical,
                titleMarginT,
                titleMarginB,
                titlePadding,
                descChecked,
                desc,
                descColor,
                descSize,
                descLine,
                descWeight,
                descStyle,
                descLetter,
                descBack,
                descMarginT,
                descMarginB,
                descPadding,
                priceChecked,
                priceBack,
                priceMarginT,
                priceMarginB,
                pricePadding,
                slashPrice,
                slashColor,
                slashSize,
                slashWeight,
                slashV,
                currPrice,
                currColor,
                currSize,
                currWeight,
                currV,
                valPrice,
                valColor,
                valSize,
                valWeight,
                valV,
                divPrice,
                divColor,
                divSize,
                divWeight,
                divV,
                durPrice,
                durColor,
                durSize,
                durWeight,
                durV,
                btnChecked,
                btnText,
                btnLink,
                btnTarget,
                btnColor,
                btnHoverColor,
                btnSize,
                btnWeight,
                btnLine,
                btnLetter,
                btnUpper,
                btnStyle,
                btnBack,
                btnHoverBack,
                btnMarginT,
                btnMarginB,
                btnPadding,
                btnPaddingU,
                btnWidth,
                btnBorderType,
                btnBorderWidth,
                btnBorderRadius,
                btnBorderColor,
                badgeChecked,
                badgePos,
                badgeBack,
                badgeColor,
                badgeTop,
                badgeHorizontal,
                badgeWidth,
                badgeSize,
                badgeTextSize,
                badgeWeight,
                badgeLetter,
                badgeStyle,
                badgeUpper,
                badgeText,
                listChecked,
                listColor,
                listWeight,
                listSize,
                listItemsStyle,
                listLine,
                listUpper,
                listLetter,
                listBack,
                listItems,
                listMarginB,
                listMarginT,
                listPadding,
                listStyle,
                featsAlign,
                id,
            } = props.attributes;
            return (
                <div
                    id={`${className}-${id}`}
                    className={`${className}`}
                    style={{
                        textAlign: contentAlign,
                        background: tableBack,
                        border: borderType,
                        borderWidth: borderWidth + "px",
                        borderRadius: borderRadius + "px",
                        borderColor: borderColor,
                        padding: tablePadding + "px",
                        boxShadow: `${tableShadowHorizontal}px ${tableShadowVertical}px ${tableShadowBlur}px ${tableShadowColor} ${tableShadowPosition}`,
                    }}
                >
                    {badgeChecked && (
                        <div
                            className={`premium-pricing-table__badge_wrap premium-pricing-table__badge_${badgePos}`}
                        >
                            <div
                                className={`premium-pricing-table__badge`}
                                style={{
                                    borderRightColor:
                                        "right" === badgePos ? badgeBack : "transparent",
                                    borderTopColor:
                                        "left" === badgePos ? badgeBack : "transparent",
                                    borderBottomWidth: badgeSize + "px",
                                    borderRightWidth: badgeSize + "px",
                                    borderTopWidth:
                                        "left" === badgePos ? badgeSize + "px" : "none",
                                    borderLeftWidth:
                                        "right" === badgePos ? badgeSize + "px" : "none",
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: badgeTextSize + "px",
                                        color: badgeColor,
                                        fontWeight: badgeWeight,
                                        textTransform: badgeUpper ? "uppercase" : "none",
                                        letterSpacing: badgeLetter + "px",
                                        fontStyle: badgeStyle,
                                        width: badgeWidth + "px",
                                        top: badgeTop + "px",
                                        left: "left" === badgePos ? badgeHorizontal + "px" : "auto",
                                        right:
                                            "right" === badgePos ? badgeHorizontal + "px" : "auto",
                                    }}
                                >
                                    {badgeText}
                                </span>
                            </div>
                        </div>
                    )}
                    {titleChecked && (
                        <div
                            className={`premium-pricing-table__title_wrap`}
                            style={{
                                paddingTop: titleMarginT + "px",
                                paddingBottom: titleMarginB + "px",
                            }}
                        >
                            <RichText.Content
                                tagName={titleTag.toLowerCase()}
                                className={`premium-pricing-table__title`}
                                value={title}
                                style={{
                                    color: titleColor,
                                    background: titleBack,
                                    fontSize: titleSize + "px",
                                    letterSpacing: titleLetter + "px",
                                    textTransform: titleUpper ? "uppercase" : "none",
                                    fontStyle: titleStyle,
                                    fontWeight: titleWeight,
                                    lineHeight: titleLine + "px",
                                    marginBottom: titleMarginB + "px",
                                    padding: titlePadding + "px",
                                    textShadow: `${titleShadowHorizontal}px ${titleShadowVertical}px ${titleShadowBlur}px ${titleShadowColor}`,
                                }}
                            />
                        </div>
                    )}
                    {priceChecked && (
                        <div
                            className={`premium-pricing-table__price_wrap`}
                            style={{
                                background: priceBack,
                                marginTop: priceMarginT + "px",
                                marginBottom: priceMarginB + "px",
                                padding: pricePadding + "px",
                                justifyContent: contentAlign,
                            }}
                        >
                            {slashPrice && (
                                <strike
                                    className={`premium-pricing-table__slash`}
                                    style={{
                                        color: slashColor,
                                        fontSize: slashSize + "px",
                                        fontWeight: slashWeight,
                                        alignSelf: slashV,
                                    }}
                                >
                                    {slashPrice}
                                </strike>
                            )}
                            {currPrice && (
                                <span
                                    className={`premium-pricing-table__currency`}
                                    style={{
                                        color: currColor,
                                        fontSize: currSize + "px",
                                        fontWeight: currWeight,
                                        alignSelf: currV,
                                    }}
                                >
                                    {currPrice}
                                </span>
                            )}
                            {valPrice && (
                                <span
                                    className={`premium-pricing-table__val`}
                                    style={{
                                        color: valColor,
                                        fontSize: valSize + "px",
                                        fontWeight: valWeight,
                                        alignSelf: valV,
                                    }}
                                >
                                    {valPrice}
                                </span>
                            )}
                            {divPrice && (
                                <span
                                    className={`premium-pricing-table__divider`}
                                    style={{
                                        color: divColor,
                                        fontSize: divSize + "px",
                                        fontWeight: divWeight,
                                        alignSelf: divV,
                                    }}
                                >
                                    {divPrice}
                                </span>
                            )}
                            {durPrice && (
                                <span
                                    className={`premium-pricing-table__dur`}
                                    style={{
                                        color: durColor,
                                        fontSize: durSize + "px",
                                        fontWeight: durWeight,
                                        alignSelf: durV,
                                    }}
                                >
                                    {durPrice}
                                </span>
                            )}
                        </div>
                    )}
                    {listChecked && (
                        <div
                            className={`premium-pricing-table__list_wrap`}
                            style={{
                                marginTop: listMarginT + "px",
                                marginBottom: listMarginB + "px",
                            }}
                        >
                            <ul
                                className={`premium-pricing-table__list list-${listStyle}`}
                                style={{
                                    color: listColor,
                                    fontSize: listSize + "px",
                                    background: listBack,
                                    padding: listPadding + "px",
                                    listStyle: "check" !== listStyle ? listStyle : "none",
                                    listStylePosition: "inside",
                                    fontWeight: listWeight,
                                    letterSpacing: listLetter + "px",
                                    textTransform: listUpper ? "uppercase" : "none",
                                    fontStyle: listItemsStyle,
                                    lineHeight: listLine + "px",
                                    textAlign: featsAlign ? featsAlign : contentAlign,
                                }}
                            >
                                {listItems}
                            </ul>
                        </div>
                    )}
                    {descChecked && (
                        <div className={`premium-pricing-table__desc_wrap`}>
                            <RichText.Content
                                tagName="p"
                                className={`premium-pricing-table__desc`}
                                value={desc}
                                style={{
                                    color: descColor,
                                    background: descBack,
                                    fontSize: descSize + "px",
                                    fontWeight: descWeight,
                                    lineHeight: descLine + "px",
                                    letterSpacing: descLetter + "px",
                                    fontStyle: descStyle,
                                    marginTop: descMarginT + "px",
                                    marginBottom: descMarginB + "px",
                                    padding: descPadding + "px",
                                }}
                            />
                        </div>
                    )}
                    {btnChecked && (
                        <div
                            className={`premium-pricing-table__button`}
                            style={{
                                width: btnWidth + "%",
                            }}
                        >
                            <a
                                class={`premium-pricing-table__button_link`}
                                href={btnLink}
                                target={btnTarget ? "_blank" : "_self"}
                                rel="noopener noreferrer"
                                style={{
                                    color: btnColor,
                                    background: btnBack ? btnBack : "transparent",
                                    fontSize: btnSize + "px",
                                    fontWeight: btnWeight,
                                    letterSpacing: btnLetter + "px",
                                    fontStyle: btnStyle,
                                    lineHeight: btnLine + "px",
                                    marginTop: btnMarginT,
                                    marginBottom: btnMarginB,
                                    padding: btnPadding + btnPaddingU,
                                    border: btnBorderType,
                                    borderWidth: btnBorderWidth + "px",
                                    borderRadius: btnBorderRadius + "px",
                                    borderColor: btnBorderColor,
                                }}
                            >
                                <RichText.Content
                                    tagName="span"
                                    onChange={(newText) => setAttributes({ btnText: newText })}
                                    value={btnText}
                                    style={{
                                        textTransform: btnUpper ? "uppercase" : "none",
                                    }}
                                />
                            </a>
                            <style
                                dangerouslySetInnerHTML={{
                                    __html: [
                                        `#premium-pricing-table-${id} .premium-pricing-table__button_link:hover {`,
                                        `color: ${btnHoverColor} !important;`,
                                        `background: ${btnHoverBack} !important`,
                                        "}",
                                    ].join("\n"),
                                }}
                            />
                        </div>
                    )}
                </div>
            );
        },
    },
    {
        attributes: attributes,
        migrate: (attributes) => {
            return Object.assign(attributes, { featsAlign: "" });
        },
        save: (props) => {
            const {
                contentAlign,
                tableBack,
                borderType,
                borderWidth,
                borderRadius,
                borderColor,
                tablePadding,
                tableShadowBlur,
                tableShadowColor,
                tableShadowHorizontal,
                tableShadowVertical,
                tableShadowPosition,
                titleChecked,
                title,
                titleTag,
                titleColor,
                titleSize,
                titleLetter,
                titleUpper,
                titleStyle,
                titleLine,
                titleWeight,
                titleBack,
                titleShadowBlur,
                titleShadowColor,
                titleShadowHorizontal,
                titleShadowVertical,
                titleMarginT,
                titleMarginB,
                titlePadding,
                descChecked,
                desc,
                descColor,
                descSize,
                descLine,
                descWeight,
                descStyle,
                descLetter,
                descBack,
                descMarginT,
                descMarginB,
                descPadding,
                priceChecked,
                priceBack,
                priceMarginT,
                priceMarginB,
                pricePadding,
                slashPrice,
                slashColor,
                slashSize,
                slashWeight,
                slashV,
                currPrice,
                currColor,
                currSize,
                currWeight,
                currV,
                valPrice,
                valColor,
                valSize,
                valWeight,
                valV,
                divPrice,
                divColor,
                divSize,
                divWeight,
                divV,
                durPrice,
                durColor,
                durSize,
                durWeight,
                durV,
                btnChecked,
                btnText,
                btnLink,
                btnTarget,
                btnColor,
                btnHoverColor,
                btnSize,
                btnWeight,
                btnLine,
                btnLetter,
                btnUpper,
                btnStyle,
                btnBack,
                btnHoverBack,
                btnMarginT,
                btnMarginB,
                btnPadding,
                btnPaddingU,
                btnWidth,
                btnBorderType,
                btnBorderWidth,
                btnBorderRadius,
                btnBorderColor,
                badgeChecked,
                badgePos,
                badgeBack,
                badgeColor,
                badgeTop,
                badgeHorizontal,
                badgeWidth,
                badgeSize,
                badgeTextSize,
                badgeWeight,
                badgeLetter,
                badgeStyle,
                badgeUpper,
                badgeText,
                listChecked,
                listColor,
                listWeight,
                listSize,
                listItemsStyle,
                listLine,
                listUpper,
                listLetter,
                listBack,
                listItems,
                listMarginB,
                listMarginT,
                listPadding,
                listStyle,
                id,
            } = props.attributes;
            return (
                <div
                    id={`${className}-${id}`}
                    className={`${className}`}
                    style={{
                        textAlign: contentAlign,
                        background: tableBack,
                        border: borderType,
                        borderWidth: borderWidth + "px",
                        borderRadius: borderRadius + "px",
                        borderColor: borderColor,
                        padding: tablePadding + "px",
                        boxShadow: `${tableShadowHorizontal}px ${tableShadowVertical}px ${tableShadowBlur}px ${tableShadowColor} ${tableShadowPosition}`,
                    }}
                >
                    {badgeChecked && (
                        <div
                            className={`${className}__badge_wrap ${className}__badge_${badgePos}`}
                        >
                            <div
                                className={`${className}__badge`}
                                style={{
                                    borderRightColor:
                                        "right" === badgePos ? badgeBack : "transparent",
                                    borderTopColor:
                                        "left" === badgePos ? badgeBack : "transparent",
                                    borderBottomWidth: badgeSize + "px",
                                    borderRightWidth: badgeSize + "px",
                                    borderTopWidth:
                                        "left" === badgePos ? badgeSize + "px" : "none",
                                    borderLeftWidth:
                                        "right" === badgePos ? badgeSize + "px" : "none",
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: badgeTextSize + "px",
                                        color: badgeColor,
                                        fontWeight: badgeWeight,
                                        textTransform: badgeUpper ? "uppercase" : "none",
                                        letterSpacing: badgeLetter + "px",
                                        fontStyle: badgeStyle,
                                        width: badgeWidth + "px",
                                        top: badgeTop + "px",
                                        left: "left" === badgePos ? badgeHorizontal + "px" : "auto",
                                        right:
                                            "right" === badgePos ? badgeHorizontal + "px" : "auto",
                                    }}
                                >
                                    {badgeText}
                                </span>
                            </div>
                        </div>
                    )}
                    {titleChecked && (
                        <div
                            className={`${className}__title_wrap`}
                            style={{
                                paddingTop: titleMarginT + "px",
                                paddingBottom: titleMarginB + "px",
                            }}
                        >
                            <RichText.Content
                                tagName={titleTag.toLowerCase()}
                                className={`${className}__title`}
                                value={title}
                                style={{
                                    color: titleColor,
                                    background: titleBack,
                                    fontSize: titleSize + "px",
                                    letterSpacing: titleLetter + "px",
                                    textTransform: titleUpper ? "uppercase" : "none",
                                    fontStyle: titleStyle,
                                    fontWeight: titleWeight,
                                    lineHeight: titleLine + "px",
                                    marginBottom: titleMarginB + "px",
                                    padding: titlePadding + "px",
                                    textShadow: `${titleShadowHorizontal}px ${titleShadowVertical}px ${titleShadowBlur}px ${titleShadowColor}`,
                                }}
                            />
                        </div>
                    )}
                    {priceChecked && (
                        <div
                            className={`${className}__price_wrap`}
                            style={{
                                background: priceBack,
                                marginTop: priceMarginT + "px",
                                marginBottom: priceMarginB + "px",
                                padding: pricePadding + "px",
                                justifyContent: contentAlign,
                            }}
                        >
                            {slashPrice && (
                                <strike
                                    className={`${className}__slash`}
                                    style={{
                                        color: slashColor,
                                        fontSize: slashSize + "px",
                                        fontWeight: slashWeight,
                                        alignSelf: slashV,
                                    }}
                                >
                                    {slashPrice}
                                </strike>
                            )}
                            {currPrice && (
                                <span
                                    className={`${className}__currency`}
                                    style={{
                                        color: currColor,
                                        fontSize: currSize + "px",
                                        fontWeight: currWeight,
                                        alignSelf: currV,
                                    }}
                                >
                                    {currPrice}
                                </span>
                            )}
                            {valPrice && (
                                <span
                                    className={`${className}__val`}
                                    style={{
                                        color: valColor,
                                        fontSize: valSize + "px",
                                        fontWeight: valWeight,
                                        alignSelf: valV,
                                    }}
                                >
                                    {valPrice}
                                </span>
                            )}
                            {divPrice && (
                                <span
                                    className={`${className}__divider`}
                                    style={{
                                        color: divColor,
                                        fontSize: divSize + "px",
                                        fontWeight: divWeight,
                                        alignSelf: divV,
                                    }}
                                >
                                    {divPrice}
                                </span>
                            )}
                            {durPrice && (
                                <span
                                    className={`${className}__dur`}
                                    style={{
                                        color: durColor,
                                        fontSize: durSize + "px",
                                        fontWeight: durWeight,
                                        alignSelf: durV,
                                    }}
                                >
                                    {durPrice}
                                </span>
                            )}
                        </div>
                    )}
                    {listChecked && (
                        <div
                            className={`${className}__list_wrap`}
                            style={{
                                marginTop: listMarginT + "px",
                                marginBottom: listMarginB + "px",
                            }}
                        >
                            <ul
                                className={`${className}__list list-${listStyle}`}
                                style={{
                                    color: listColor,
                                    fontSize: listSize + "px",
                                    background: listBack,
                                    padding: listPadding + "px",
                                    listStyle: "check" !== listStyle ? listStyle : "none",
                                    listStylePosition: "inside",
                                    fontWeight: listWeight,
                                    letterSpacing: listLetter + "px",
                                    textTransform: listUpper ? "uppercase" : "none",
                                    fontStyle: listItemsStyle,
                                    lineHeight: listLine + "px",
                                }}
                            >
                                {listItems}
                            </ul>
                        </div>
                    )}
                    {descChecked && (
                        <div className={`${className}__desc_wrap`}>
                            <RichText.Content
                                tagName="p"
                                className={`${className}__desc`}
                                value={desc}
                                style={{
                                    color: descColor,
                                    background: descBack,
                                    fontSize: descSize + "px",
                                    fontWeight: descWeight,
                                    lineHeight: descLine + "px",
                                    letterSpacing: descLetter + "px",
                                    fontStyle: descStyle,
                                    marginTop: descMarginT + "px",
                                    marginBottom: descMarginB + "px",
                                    padding: descPadding + "px",
                                }}
                            />
                        </div>
                    )}
                    {btnChecked && (
                        <div
                            className={`${className}__button`}
                            style={{
                                width: btnWidth + "%",
                            }}
                        >
                            <a
                                class={`${className}__button_link`}
                                href={btnLink}
                                target={btnTarget ? "_blank" : "_self"}
                                rel="noopener noreferrer"
                                style={{
                                    color: btnColor,
                                    background: btnBack ? btnBack : "transparent",
                                    fontSize: btnSize + "px",
                                    fontWeight: btnWeight,
                                    letterSpacing: btnLetter + "px",
                                    fontStyle: btnStyle,
                                    lineHeight: btnLine + "px",
                                    marginTop: btnMarginT,
                                    marginBottom: btnMarginB,
                                    padding: btnPadding + btnPaddingU,
                                    border: btnBorderType,
                                    borderWidth: btnBorderWidth + "px",
                                    borderRadius: btnBorderRadius + "px",
                                    borderColor: btnBorderColor,
                                }}
                            >
                                <RichText.Content
                                    tagName="span"
                                    onChange={(newText) => setAttributes({ btnText: newText })}
                                    value={btnText}
                                    style={{
                                        textTransform: btnUpper ? "uppercase" : "none",
                                    }}
                                />
                            </a>
                            <style
                                dangerouslySetInnerHTML={{
                                    __html: [
                                        `#premium-pricing-table-${id} .premium-pricing-table__button_link:hover {`,
                                        `color: ${btnHoverColor} !important;`,
                                        `background: ${btnHoverBack} !important`,
                                        "}",
                                    ].join("\n"),
                                }}
                            />
                        </div>
                    )}
                </div>
            );
        },
    },
    {
        attributes: attributes,
        migrate: (attributes) => {
            return Object.assign(attributes, { btnPaddingU: "" });
        },
        save: (props) => {
            const {
                contentAlign,
                tableBack,
                borderType,
                borderWidth,
                borderRadius,
                borderColor,
                tablePadding,
                titleChecked,
                title,
                titleTag,
                titleColor,
                titleSize,
                titleLetter,
                titleUpper,
                titleStyle,
                titleLine,
                titleWeight,
                titleBack,
                titleShadowBlur,
                titleShadowColor,
                titleShadowHorizontal,
                titleShadowVertical,
                titleMarginT,
                titleMarginB,
                titlePadding,
                descChecked,
                desc,
                descColor,
                descSize,
                descLine,
                descWeight,
                descStyle,
                descLetter,
                descBack,
                descMarginT,
                descMarginB,
                descPadding,
                priceChecked,
                priceBack,
                priceMarginT,
                priceMarginB,
                pricePadding,
                slashPrice,
                slashColor,
                slashSize,
                slashWeight,
                slashV,
                currPrice,
                currColor,
                currSize,
                currWeight,
                currV,
                valPrice,
                valColor,
                valSize,
                valWeight,
                valV,
                divPrice,
                divColor,
                divSize,
                divWeight,
                divV,
                durPrice,
                durColor,
                durSize,
                durWeight,
                durV,
                btnChecked,
                btnText,
                btnLink,
                btnTarget,
                btnColor,
                btnHoverColor,
                btnSize,
                btnWeight,
                btnLine,
                btnLetter,
                btnUpper,
                btnStyle,
                btnBack,
                btnHoverBack,
                btnMarginT,
                btnMarginB,
                btnPadding,
                btnWidth,
                btnBorderType,
                btnBorderWidth,
                btnBorderRadius,
                btnBorderColor,
                badgeChecked,
                badgePos,
                badgeBack,
                badgeColor,
                badgeTop,
                badgeHorizontal,
                badgeWidth,
                badgeSize,
                badgeTextSize,
                badgeWeight,
                badgeLetter,
                badgeStyle,
                badgeUpper,
                badgeText,
                listChecked,
                listColor,
                listWeight,
                listSize,
                listItemsStyle,
                listLine,
                listUpper,
                listLetter,
                listBack,
                listItems,
                listMarginB,
                listMarginT,
                listPadding,
                listStyle,
                id,
            } = props.attributes;
            return (
                <div
                    id={`${className}-${id}`}
                    className={`${className}`}
                    style={{
                        textAlign: contentAlign,
                        background: tableBack,
                        border: borderType,
                        borderWidth: borderWidth + "px",
                        borderRadius: borderRadius + "px",
                        borderColor: borderColor,
                        padding: tablePadding + "px",
                    }}
                >
                    {badgeChecked && (
                        <div
                            className={`${className}__badge_wrap ${className}__badge_${badgePos}`}
                        >
                            <div
                                className={`${className}__badge`}
                                style={{
                                    borderRightColor:
                                        "right" === badgePos ? badgeBack : "transparent",
                                    borderTopColor:
                                        "left" === badgePos ? badgeBack : "transparent",
                                    borderBottomWidth: badgeSize + "px",
                                    borderRightWidth: badgeSize + "px",
                                    borderTopWidth:
                                        "left" === badgePos ? badgeSize + "px" : "none",
                                    borderLeftWidth:
                                        "right" === badgePos ? badgeSize + "px" : "none",
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: badgeTextSize + "px",
                                        color: badgeColor,
                                        fontWeight: badgeWeight,
                                        textTransform: badgeUpper ? "uppercase" : "none",
                                        letterSpacing: badgeLetter + "px",
                                        fontStyle: badgeStyle,
                                        width: badgeWidth + "px",
                                        top: badgeTop + "px",
                                        left: "left" === badgePos ? badgeHorizontal + "px" : "auto",
                                        right:
                                            "right" === badgePos ? badgeHorizontal + "px" : "auto",
                                    }}
                                >
                                    {badgeText}
                                </span>
                            </div>
                        </div>
                    )}
                    {titleChecked && (
                        <div
                            className={`${className}__title_wrap`}
                            style={{
                                paddingTop: titleMarginT + "px",
                                paddingBottom: titleMarginB + "px",
                            }}
                        >
                            <RichText.Content
                                tagName={titleTag.toLowerCase()}
                                className={`${className}__title`}
                                value={title}
                                style={{
                                    color: titleColor,
                                    background: titleBack,
                                    fontSize: titleSize + "px",
                                    letterSpacing: titleLetter + "px",
                                    textTransform: titleUpper ? "uppercase" : "none",
                                    fontStyle: titleStyle,
                                    fontWeight: titleWeight,
                                    lineHeight: titleLine + "px",
                                    marginBottom: titleMarginB + "px",
                                    padding: titlePadding + "px",
                                    textShadow: `${titleShadowHorizontal}px ${titleShadowVertical}px ${titleShadowBlur}px ${titleShadowColor}`,
                                }}
                            />
                        </div>
                    )}
                    {priceChecked && (
                        <div
                            className={`${className}__price_wrap`}
                            style={{
                                background: priceBack,
                                marginTop: priceMarginT + "px",
                                marginBottom: priceMarginB + "px",
                                padding: pricePadding + "px",
                                justifyContent: contentAlign,
                            }}
                        >
                            {slashPrice && (
                                <strike
                                    className={`${className}__slash`}
                                    style={{
                                        color: slashColor,
                                        fontSize: slashSize + "px",
                                        fontWeight: slashWeight,
                                        alignSelf: slashV,
                                    }}
                                >
                                    {slashPrice}
                                </strike>
                            )}
                            {currPrice && (
                                <span
                                    className={`${className}__currency`}
                                    style={{
                                        color: currColor,
                                        fontSize: currSize + "px",
                                        fontWeight: currWeight,
                                        alignSelf: currV,
                                    }}
                                >
                                    {currPrice}
                                </span>
                            )}
                            {valPrice && (
                                <span
                                    className={`${className}__val`}
                                    style={{
                                        color: valColor,
                                        fontSize: valSize + "px",
                                        fontWeight: valWeight,
                                        alignSelf: valV,
                                    }}
                                >
                                    {valPrice}
                                </span>
                            )}
                            {divPrice && (
                                <span
                                    className={`${className}__divider`}
                                    style={{
                                        color: divColor,
                                        fontSize: divSize + "px",
                                        fontWeight: divWeight,
                                        alignSelf: divV,
                                    }}
                                >
                                    {divPrice}
                                </span>
                            )}
                            {durPrice && (
                                <span
                                    className={`${className}__dur`}
                                    style={{
                                        color: durColor,
                                        fontSize: durSize + "px",
                                        fontWeight: durWeight,
                                        alignSelf: durV,
                                    }}
                                >
                                    {durPrice}
                                </span>
                            )}
                        </div>
                    )}
                    {listChecked && (
                        <div
                            className={`${className}__list_wrap`}
                            style={{
                                marginTop: listMarginT + "px",
                                marginBottom: listMarginB + "px",
                            }}
                        >
                            <ul
                                className={`${className}__list list-${listStyle}`}
                                style={{
                                    color: listColor,
                                    fontSize: listSize + "px",
                                    background: listBack,
                                    padding: listPadding + "px",
                                    listStyle: "check" !== listStyle ? listStyle : "none",
                                    listStylePosition: "inside",
                                    fontWeight: listWeight,
                                    letterSpacing: listLetter + "px",
                                    textTransform: listUpper ? "uppercase" : "none",
                                    fontStyle: listItemsStyle,
                                    lineHeight: listLine + "px",
                                }}
                            >
                                {listItems}
                            </ul>
                        </div>
                    )}
                    {descChecked && (
                        <div className={`${className}__desc_wrap`}>
                            <RichText.Content
                                tagName="p"
                                className={`${className}__desc`}
                                value={desc}
                                style={{
                                    color: descColor,
                                    background: descBack,
                                    fontSize: descSize + "px",
                                    fontWeight: descWeight,
                                    lineHeight: descLine + "px",
                                    letterSpacing: descLetter + "px",
                                    fontStyle: descStyle,
                                    marginTop: descMarginT + "px",
                                    marginBottom: descMarginB + "px",
                                    padding: descPadding + "px",
                                }}
                            />
                        </div>
                    )}
                    {btnChecked && (
                        <div
                            className={`${className}__button`}
                            style={{
                                width: btnWidth + "%",
                            }}
                        >
                            <a
                                class={`${className}__button_link`}
                                href={btnLink}
                                target={btnTarget ? "_blank" : "_self"}
                                style={{
                                    color: btnColor,
                                    background: btnBack ? btnBack : "transparent",
                                    fontSize: btnSize + "px",
                                    fontWeight: btnWeight,
                                    letterSpacing: btnLetter + "px",
                                    fontStyle: btnStyle,
                                    lineHeight: btnLine + "px",
                                    marginTop: btnMarginT,
                                    marginBottom: btnMarginB,
                                    padding: btnPadding,
                                    border: btnBorderType,
                                    borderWidth: btnBorderWidth + "px",
                                    borderRadius: btnBorderRadius + "px",
                                    borderColor: btnBorderColor,
                                }}
                            >
                                <RichText.Content
                                    tagName="span"
                                    onChange={(newText) => setAttributes({ btnText: newText })}
                                    value={btnText}
                                    style={{
                                        textTransform: btnUpper ? "uppercase" : "none",
                                    }}
                                />
                            </a>
                            <style
                                dangerouslySetInnerHTML={{
                                    __html: [
                                        `#premium-pricing-table-${id} .premium-pricing-table__button_link:hover {`,
                                        `color: ${btnHoverColor} !important;`,
                                        `background: ${btnHoverBack} !important`,
                                        "}",
                                    ].join("\n"),
                                }}
                            />
                        </div>
                    )}
                </div>
            );
        },
    },
];

export default deprecatedContent;