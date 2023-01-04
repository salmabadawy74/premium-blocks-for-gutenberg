const className = "premium-icon-box";
const { __ } = wp.i18n;
const { RichText } = wp.editor;
import hexToRgba from 'hex-to-rgba'
import classnames from 'classnames'

const attributes = {
    block_id: {
        type: "string"
    },
    borderIconBox: {
        type: "boolean",
        default: false
    },
    btnBorderIconBox: {
        type: "boolean",
        default: false
    },
    align: {
        type: "string",
        default: "center"
    },
    iconImage: {
        type: "string",
        default: "icon"
    },
    iconImgId: {
        type: "string"
    },
    iconImgUrl: {
        type: "string"
    },
    hoverEffect: {
        type: "string",
        default: "none"
    },
    iconChecked: {
        type: "boolean",
        default: true
    },
    iconPos: {
        type: "string",
        default: "block"
    },
    iconHPos: {
        type: "string",
        default: "before"
    },
    iconVPos: {
        type: "string",
        default: "center"
    },
    iconSize: {
        type: "number"
    },
    iconRadius: {
        type: "number"
    },
    iconColor: {
        type: "string"
    },
    iconBackColor: {
        type: "string"
    },
    selectedIcon: {
        type: "string",
        default: "dashicons dashicons-admin-site"
    },
    titleChecked: {
        type: "boolean",
        default: true
    },
    titleText: {
        type: "array",
        source: "children",
        selector: ".premium-icon-box__title",
        default: __("Awesome Title")
    },
    titleTag: {
        type: "string",
        default: "H2"
    },
    titleFont: {
        type: "string"
    },
    titleColor: {
        type: "string"
    },
    titleSize: {
        type: "number",
        default: '20'
    },
    titleSizeUnit: {
        type: 'string',
        default: 'px'
    },
    titleSizeTablet: {
        type: 'number',
        default: '20'
    },
    titleSizeMobile: {
        type: 'number',
        default: '20'
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
    titleMarginT: {
        type: "number"
    },
    titleMarginB: {
        type: "number"
    },
    descText: {
        type: "array",
        source: "children",
        selector: ".premium-icon-box__desc",
        default:
            "Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec id elit non mi porta gravida at eget metus."
    },
    descChecked: {
        type: "boolean",
        default: true
    },
    descFont: {
        type: "string"
    },
    descColor: {
        type: "string"
    },
    descSize: {
        type: "number",
        default: '20'
    },
    descSizeUnit: {
        type: "string",
        default: 'px'
    },
    descSizeTablet: {
        type: "number",
        default: '20'
    },
    descSizeMobile: {
        type: "number",
        default: '20'
    },
    descLine: {
        type: "number"
    },
    descWeight: {
        type: "number",
        default: 500
    },
    descMarginT: {
        type: "number"
    },
    descMarginB: {
        type: "number"
    },
    btnChecked: {
        type: "boolean",
        default: true
    },
    btnEffect: {
        type: "string",
        default: "none"
    },
    effectDir: {
        type: "string",
        default: "top"
    },
    btnTarget: {
        type: "boolean",
        default: false
    },
    btnText: {
        type: "array",
        source: "children",
        selector: ".premium-icon-box__btn",
        default: __("Click Here")
    },
    btnLink: {
        type: "string",
        source: "attribute",
        attribute: "href",
        selector: ".premium-icon-box__btn"
    },
    btnColor: {
        type: "string"
    },
    btnHoverColor: {
        type: "string"
    },
    btnBack: {
        type: "string"
    },
    btnHoverBack: {
        type: "string"
    },
    btnHoverBorder: {
        type: "string"
    },
    btnSize: {
        type: "number",
        default: '20'
    },
    btnSizeUnit: {
        type: "string",
        default: "px"
    },
    btnSizeTablet: {
        type: "number",
        default: '20'
    },
    btnSizeMobile: {
        type: "number",
        default: '20'
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
    btnWeight: {
        type: "number",
        default: 500
    },
    btnBorderType: {
        type: "string",
        default: "none"
    },
    btnBorderWidth: {
        type: "number",
        default: "1"
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
    btnBorderRadius: {
        type: "number"
    },
    btnBorderColor: {
        type: "string"
    },
    btnPadding: {
        type: "number"
    },
    btnPaddingU: {
        type: "string"
    },
    btnMarginT: {
        type: "number"
    },
    btnMarginB: {
        type: "number"
    },
    btnShadowColor: {
        type: "string"
    },
    btnShadowBlur: {
        type: "number",
        default: "0"
    },
    btnShadowHorizontal: {
        type: "number",
        default: "0"
    },
    btnShadowVertical: {
        type: "number",
        default: "0"
    },
    btnShadowPosition: {
        type: "string",
        default: ""
    },
    imageID: {
        type: "string"
    },
    imageURL: {
        type: "string"
    },
    backColor: {
        type: "string"
    },
    backgroundRepeat: {
        type: "string",
        default: "no-repeat"
    },
    backgroundPosition: {
        type: "string",
        default: "top center"
    },
    backgroundSize: {
        type: "string",
        default: "auto"
    },
    fixed: {
        type: "boolean",
        default: false
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
        type: "number"
    },
    borderColor: {
        type: "string"
    },
    marginT: {
        type: "number"
    },
    marginR: {
        type: "number"
    },
    marginB: {
        type: "number"
    },
    marginL: {
        type: "number"
    },
    paddingT: {
        type: "number"
    },
    paddingR: {
        type: "number"
    },
    paddingB: {
        type: "number"
    },
    paddingL: {
        type: "number"
    },
    paddingU: {
        type: "string"
    },
    shadowColor: {
        type: "string"
    },
    shadowBlur: {
        type: "number",
        default: "0"
    },
    shadowHorizontal: {
        type: "number",
        default: "0"
    },
    shadowVertical: {
        type: "number",
        default: "0"
    },
    shadowPosition: {
        type: "string",
        default: ""
    },
    hoverShadowColor: {
        type: "string"
    },
    hoverShadowBlur: {
        type: "number"
    },
    hoverShadowHorizontal: {
        type: "number"
    },
    hoverShadowVertical: {
        type: "number"
    },
    hoverShadowPosition: {
        type: "string"
    },
    classMigrate: {
        type: "boolean",
        default: false
    },
    hideDesktop: {
        type: 'boolean',
        default: false
    },
    hideTablet: {
        type: 'boolean',
        default: false
    },
    hideMobile: {
        type: 'boolean',
        default: false
    },
    backOpacity: {
        type: "number",
        default: "1",
    },
    iconOpacity: {
        type: "number",
        default: "1"
    },
    btnOpacity: {
        type: "number",
        default: "1"
    },
}

const new_attributes = {
    titleStyles: {
        type: "array",
        default: [
            {
                titleTag: "H2",
                titleFont: __('Default', 'premium-blocks-for-gutenberg'),
                titleColor: '',
                titleSize: 20,
                titleSizeUnit: 'px',
                titleSizeTablet: 20,
                titleSizeMobile: 20,
                titleLine: '',
                titleLetter: '',
                titleStyle: '',
                titleUpper: false,
                titleWeight: '',
                titleShadowColor: '',
                titleShadowBlur: '0',
                titleShadowHorizontal: '0',
                titleShadowVertical: '0',
                titleMarginT: '',
                titleMarginB: '',
            }
        ]
    },
    descStyles: {
        type: "array",
        default: [
            {
                descFont: __('Default', 'premium-blocks-for-gutenberg'),
                descColor: '',
                descSize: 20,
                descSizeUnit: 'px',
                descSizeTablet: 20,
                descSizeMobile: 20,
                descLine: '',
                descWeight: '',
                descMarginT: '',
                descMarginB: '',
            }
        ]
    },
    btnStyles: {
        type: 'array',
        default: [
            {
                btnSize: 20,
                btnSizeUnit: 'px',
                btnSizeTablet: 20,
                btnSizeMobile: 20,
                btnLine: '',
                btnLetter: '',
                btnStyle: '',
                btnUpper: false,
                btnWeight: '',
                btnBorderType: 'none',
                btnBorderWidth: 1,
                btnBorderTop: '',
                btnBorderRight: '',
                btnBorderBottom: '',
                btnBorderLeft: '',
                btnBorderRadius: '',
                btnBorderColor: '',
                btnPadding: '',
                btnPaddingU: 'px',
                btnMarginT: '',
                btnMarginB: '',
                btnShadowColor: '',
                btnShadowBlur: '',
                btnShadowHorizontal: '0',
                btnShadowVertical: '0',
                btnShadowPosition: '',
                btnColor: '',
                btnHoverColor: '',
                btnBack: '',
                btnHoverBack: '',
                btnOpacity: 1,
            }
        ]
    },
    containerStyles: {
        type: "array",
        default: [
            {
                backOpacity: 1,
                backColor: '',
                imageID: '',
                imageURL: '',
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top center",
                backgroundSize: "auto",
                fixed: false,
                borderType: "none",
                borderWidth: 1,
                borderRadius: '',
                borderColor: '',
                borderTop: '',
                borderRight: '',
                borderBottom: '',
                borderLeft: '',
                shadowColor: '',
                shadowBlur: '',
                shadowHorizontal: '',
                shadowVertical: '',
                shadowPosition: '',
                hoverShadowColor: '',
                hoverShadowBlur: '',
                hoverShadowHorizontal: '',
                hoverShadowVertical: '',
                hoverShadowPosition: '',
                marginT: '',
                marginR: '',
                marginB: '',
                marginL: '',
                paddingT: '',
                paddingR: '',
                paddingB: '',
                paddingL: '',
                paddingU: 'px',
                gradientColorOne: '',
                gradientLocationOne: '0',
                gradientColorTwo: '',
                gradientLocationTwo: '100',
                gradientType: 'linear',
                gradientAngle: '180',
                gradientPosition: 'center center'

            }
        ]
    },
}

const v10Attributes = {
    "blockId": {
        "type": "string"
    },
    "hideDesktop": {
        "type": "boolean",
        "default": ""
    },
    "hideTablet": {
        "type": "boolean",
        "default": ""
    },
    "hideMobile": {
        "type": "boolean",
        "default": ""
    },
    "containerMargin": {
        "type": "object",
        "default": {
            "Desktop": {
                "top": "",
                "right": "",
                "bottom": "",
                "left": ""
            },
            "Tablet": {
                "top": "",
                "right": "",
                "bottom": "",
                "left": ""
            },
            "Mobile": {
                "top": "",
                "right": "",
                "bottom": "",
                "left": ""
            },
            "unit": "px"
        }
    },
    "containerPadding": {
        "type": "object",
        "default": {
            "Desktop": {
                "top": "",
                "right": "",
                "bottom": "",
                "left": ""
            },
            "Tablet": {
                "top": "",
                "right": "",
                "bottom": "",
                "left": ""
            },
            "Mobile": {
                "top": "",
                "right": "",
                "bottom": "",
                "left": ""
            },
            "unit": "px"
        }
    },
    "containerBorder": {
        "type": "object",
        "default": {
            "borderColor": "",
            "borderType": "none",
            "borderRadius": {
                "Desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "Tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "Mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                }
            },
            "borderWidth": {
                "Desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "Tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "Mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                }
            }
        }
    },
    "containerBackground": {
        "type": "object",
        "default": {
            "backgroundType": "",
            "backgroundColor": "",
            "backgroundImageID": "",
            "backgroundImageURL": "",
            "backgroundPosition": "",
            "backgroundRepeat": "",
            "backgroundSize": "",
            "fixed": false,
            "gradientLocationOne": "0",
            "gradientColorTwo": "",
            "gradientLocationTwo": "100",
            "gradientAngle": "180",
            "gradientPosition": "center center",
            "gradientType": "linear"
        }
    },
    "containerShadow": {
        "type": "object",
        "default": {
            "color": "undefined",
            "blur": "10",
            "horizontal": "0",
            "vertical": "0",
            "position": ""
        }
    },
    "containerHoverShadow": {
        "type": "object",
        "default": {
            "color": "undefined",
            "blur": "10",
            "horizontal": "0",
            "vertical": "0",
            "position": ""
        }
    },
    "variation": {
        "type": "object",
        "default": {}
    },
    "showVariation": {
        "type": "boolean",
        "default": true
    }
}

const deprecated_attributes = Object.assign(attributes, new_attributes);

const deprecatedContent = [
    {
        attributes: Object.assign(attributes, v10Attributes),
        migrate: (attributes) => {
            let newAttributes = {
                variation: {},
                showVariation: true
            };
            return Object.assign(attributes, newAttributes)
        },
        save: (props) => {
            const { className } = props;

            const {
                blockId,
                hideDesktop,
                hideTablet,
                hideMobile,
                containerBorder,
                containerBackground,
                containerShadow,
                containerHoverShadow,
            } = props.attributes;

            const loadStyles = () => {
                const styles = {};
                styles[`.${blockId}:hover`] = {
                    'box-shadow': `${containerHoverShadow.horizontal}px ${containerHoverShadow.vertical}px ${containerHoverShadow.blur}px ${containerHoverShadow.color} ${containerHoverShadow.position} !important`,
                };
                return generateCss(styles);

            }

            return (
                <div
                    {...useBlockProps.save({
                        className: classnames(
                            className,
                            blockId,
                            'premium-icon-box',
                            {
                                " premium-desktop-hidden": hideDesktop,
                                " premium-tablet-hidden": hideTablet,
                                " premium-mobile-hidden": hideMobile,
                            }
                        ),
                    })}
                    style={filterJsCss({
                        borderStyle: containerBorder.borderType,
                        borderColor: containerBorder.borderColor,
                        boxShadow: `${containerShadow.horizontal}px ${containerShadow.vertical}px ${containerShadow.blur}px ${containerShadow.color} ${containerShadow.position}`,
                        ...gradientBackground(containerBackground),
                    })}
                >
                    <InnerBlocks.Content />
                    <style>{loadStyles()}</style>
                </div>
            );
        },
    },
    {
        attributes: deprecated_attributes,
        migrate: (attributes) => {
            let newAttributes = {
                blockId: attributes.block_id ? `premium-icon-box-${attributes.block_id.split('-')[6]}` : '',
                titleTag: attributes.titleStyles[0].titleTag || "h2",
                align: {
                    "Desktop": attributes.align || 'center',
                    "Tablet": attributes.align || 'center',
                    "Mobile": attributes.align || 'center',
                },
                iconSize: {
                    'Desktop': attributes.iconSize || '40',
                    'Tablet': attributes.iconSize || '40',
                    'Mobile': attributes.iconSize || '40',
                    'unit': "px"
                },
                containerMargin: {
                    "Desktop": {
                        top: attributes.marginT || '',
                        right: attributes.marginR || '',
                        bottom: attributes.marginB || '',
                        left: attributes.marginL || ''
                    },
                    "Tablet": {
                        top: attributes.marginTTablet || '',
                        right: attributes.marginRTablet || '',
                        bottom: attributes.marginBTablet || '',
                        left: attributes.marginLTablet || ''
                    },
                    "Mobile": {
                        top: attributes.marginTMobile || '',
                        right: attributes.marginRMobile || '',
                        bottom: attributes.marginBMobile || '',
                        left: attributes.marginLMobile || ''
                    },
                    "unit": "px"
                },
                containerPadding: {
                    "Desktop": {
                        top: attributes.paddingT || '',
                        right: attributes.paddingR || '',
                        bottom: attributes.paddingB || '',
                        left: attributes.paddingL || ''
                    },
                    "Tablet": {
                        top: attributes.paddingTTablet || '',
                        right: attributes.paddingRTablet || '',
                        bottom: attributes.paddingBTablet || '',
                        left: attributes.paddingLTablet || ''
                    },
                    "Mobile": {
                        top: attributes.paddingTMobile || '',
                        right: attributes.paddingRMobile || '',
                        bottom: attributes.paddingBMobile || '',
                        left: attributes.paddingLMobile || ''
                    },
                    "unit": attributes.containerStyles[0].paddingU || 'px'
                },
                titleMargin: {
                    "Desktop": {
                        top: attributes.titleMarginT || '',
                        right: "",
                        bottom: attributes.titleMarginB || '',
                        left: ""
                    },
                    "Tablet": {
                        top: "",
                        right: "",
                        bottom: "",
                        left: ""
                    },
                    "Mobile": {
                        top: "",
                        right: "",
                        bottom: "",
                        left: ""
                    },
                    'unit': "px"
                },
                descMargin: {
                    "Desktop": {
                        top: attributes.descMarginT || '',
                        right: "",
                        bottom: attributes.descMarginB || '',
                        left: ""
                    },
                    "Tablet": {
                        top: "",
                        right: "",
                        bottom: "",
                        left: ""
                    },
                    "Mobile": {
                        top: "",
                        right: "",
                        bottom: "",
                        left: ""
                    },
                    'unit': "px"
                },
                btnMargin: {
                    "Desktop": {
                        top: attributes.btnMarginT || '',
                        right: "",
                        bottom: attributes.btnMarginB || '',
                        left: ""
                    },
                    "Tablet": {
                        top: "",
                        right: "",
                        bottom: "",
                        left: ""
                    },
                    "Mobile": {
                        top: "",
                        right: "",
                        bottom: "",
                        left: ""
                    },
                    unit: "px"
                },
                btnPadding: {
                    "Desktop": {
                        top: attributes.btnStyles[0].btnPadding || '',
                        right: attributes.btnStyles[0].btnPadding || '',
                        bottom: attributes.btnStyles[0].btnPadding || '',
                        left: attributes.btnStyles[0].btnPadding || ''
                    },
                    "Tablet": {
                        top: "",
                        right: "",
                        bottom: "",
                        left: ""
                    },
                    "Mobile": {
                        top: "",
                        right: "",
                        bottom: "",
                        left: ""
                    },
                    'unit': attributes.btnStyles[0].btnPaddingU || 'px'
                },
                btnBorder: {
                    borderColor: attributes.btnStyles[0].btnBorderColor,
                    borderType: attributes.btnStyles[0].btnBorderType || 'none',
                    borderRadius: {
                        "Desktop": {
                            top: attributes.btnStyles[0].btnBorderRadius || '',
                            right: attributes.btnStyles[0].btnBorderRadius || '',
                            bottom: attributes.btnStyles[0].btnBorderRadius || '',
                            left: attributes.btnStyles[0].btnBorderRadius || '',
                        },
                        "Tablet": {
                            top: "",
                            right: "",
                            bottom: "",
                            left: ""
                        },
                        "Mobile": {
                            top: "",
                            right: "",
                            bottom: "",
                            left: ""
                        },
                    },
                    borderWidth: {
                        "Desktop": {
                            top: attributes.btnStyles[0].btnBorderTop || '',
                            right: attributes.btnStyles[0].btnBorderRight || '',
                            bottom: attributes.btnStyles[0].btnBorderBottom || '',
                            left: attributes.btnStyles[0].btnBorderLeft || ''
                        },
                        "Tablet": {
                            top: "",
                            right: "",
                            bottom: "",
                            left: ""
                        },
                        "Mobile": {
                            top: "",
                            right: "",
                            bottom: "",
                            left: ""
                        },
                    }
                },
                containerBorder: {
                    borderColor: attributes.containerStyles[0].borderColor,
                    borderType: attributes.containerStyles[0].borderType || 'none',
                    borderRadius: {
                        "Desktop": {
                            top: attributes.containerStyles[0].borderRadius || '',
                            right: attributes.containerStyles[0].borderRadius || '',
                            bottom: attributes.containerStyles[0].borderRadius || '',
                            left: attributes.containerStyles[0].borderRadius || '',
                        },
                        "Tablet": {
                            top: "",
                            right: "",
                            bottom: "",
                            left: ""
                        },
                        "Mobile": {
                            top: "",
                            right: "",
                            bottom: "",
                            left: ""
                        },
                    },
                    borderWidth: {
                        "Desktop": {
                            top: attributes.containerStyles[0].borderTop || '',
                            right: attributes.containerStyles[0].borderRight || '',
                            bottom: attributes.containerStyles[0].borderBottom || '',
                            left: attributes.containerStyles[0].borderLeft || ''
                        },
                        "Tablet": {
                            top: "",
                            right: "",
                            bottom: "",
                            left: ""
                        },
                        "Mobile": {
                            top: "",
                            right: "",
                            bottom: "",
                            left: ""
                        },
                    }
                },
                containerBackground: {
                    'backgroundType': "",
                    'backgroundColor': attributes.containerStyles[0].backColor,
                    'backgroundImageID': attributes.containerStyles[0].imageID,
                    'backgroundImageURL': attributes.containerStyles[0].imageURL,
                    'backgroundPosition': attributes.containerStyles[0].backgroundPosition,
                    'backgroundRepeat': attributes.containerStyles[0].backgroundRepeat,
                    'backgroundSize': attributes.containerStyles[0].backgroundSize,
                    'fixed': attributes.containerStyles[0].fixed,
                    'gradientLocationOne': attributes.containerStyles[0].gradientLocationOne || '0',
                    'gradientColorTwo': attributes.containerStyles[0].gradientColorTwo,
                    'gradientLocationTwo': attributes.containerStyles[0].gradientLocationTwo || '100',
                    'gradientAngle': attributes.containerStyles[0].gradientAngle || '180',
                    'gradientPosition': attributes.containerStyles[0].gradientPosition || 'center center',
                    'gradientType': attributes.containerStyles[0].gradientType || 'linear',
                },
                titleShadow: {
                    'color': attributes.titleStyles[0].titleShadowColor,
                    'blur': attributes.titleStyles[0].titleShadowBlur,
                    'horizontal': attributes.titleStyles[0].titleShadowHorizontal,
                    'vertical': attributes.titleStyles[0].titleShadowVertical
                },
                btnShadow: {
                    'color': attributes.btnStyles[0].btnShadowColor,
                    'blur': attributes.btnStyles[0].btnShadowBlur,
                    'horizontal': attributes.btnStyles[0].btnShadowHorizontal,
                    'vertical': attributes.btnStyles[0].btnShadowVertical,
                    'position': attributes.btnStyles[0].btnShadowPosition
                },
                containerShadow: {
                    'color': attributes.containerStyles[0].shadowColor,
                    'blur': attributes.containerStyles[0].shadowBlur,
                    'horizontal': attributes.containerStyles[0].shadowHorizontal,
                    'vertical': attributes.containerStyles[0].shadowVertical,
                    'position': attributes.containerStyles[0].shadowPosition
                },
                containerHoverShadow: {
                    'color': attributes.containerStyles[0].hoverShadowColor,
                    'blur': attributes.containerStyles[0].hoverShadowBlur,
                    'horizontal': attributes.containerStyles[0].hoverShadowHorizontal,
                    'vertical': attributes.containerStyles[0].hoverShadowVertical,
                    'position': attributes.containerStyles[0].hoverShadowPosition
                },
                titleTypography: {
                    'fontWeight': attributes.titleStyles[0].titleWeight || "Default",
                    'fontStyle': attributes.titleStyles[0].titleStyle,
                    'textTransform': attributes.titleStyles[0].titleUpper,
                    'letterSpacing': {
                        'Desktop': attributes.titleStyles[0].titleLetter,
                        "Tablet": attributes.titleStyles[0].titleLetter,
                        "Mobile": attributes.titleStyles[0].titleLetter,
                        'unit': 'px',
                    },
                    'fontFamily': attributes.titleStyles[0].titleFont || "Default",
                    'lineHeight': {
                        'Desktop': attributes.titleStyles[0].titleLine,
                        "Tablet": attributes.titleStyles[0].titleLine,
                        "Mobile": attributes.titleStyles[0].titleLine,
                        'unit': 'px',
                    },
                    'fontSize': {
                        'Desktop': attributes.titleStyles[0].titleSize,
                        "Tablet": attributes.titleStyles[0].titleSizeTablet,
                        "Mobile": attributes.titleStyles[0].titleSizeMobile,
                        'unit': attributes.titleStyles[0].titleSizeUnit,
                    }
                },
                descTypography: {
                    'fontWeight': attributes.descStyles[0].descWeight || "Default",
                    'fontStyle': '',
                    'textTransform': '',
                    'letterSpacing': {
                        'Desktop': '',
                        "Tablet": '',
                        "Mobile": '',
                        'unit': 'px',
                    },
                    'fontFamily': attributes.descStyles[0].descFont || "Default",
                    'lineHeight': {
                        'Desktop': attributes.descStyles[0].descLine,
                        "Tablet": attributes.descStyles[0].descLine,
                        "Mobile": attributes.descStyles[0].descLine,
                        'unit': 'px',
                    },
                    'fontSize': {
                        'Desktop': attributes.descStyles[0].descSize,
                        "Tablet": attributes.descStyles[0].descSizeTablet,
                        "Mobile": attributes.descStyles[0].descSizeMobile,
                        'unit': attributes.descStyles[0].descSizeUnit,
                    }
                },
                btnTypography: {
                    'fontWeight': attributes.btnStyles[0].btnWeight || "Default",
                    'fontStyle': attributes.btnStyles[0].btnStyle,
                    'textTransform': attributes.btnStyles[0].btnUpper,
                    'letterSpacing': {
                        'Desktop': attributes.btnStyles[0].btnLetter,
                        "Tablet": attributes.btnStyles[0].btnLetter,
                        "Mobile": attributes.btnStyles[0].btnLetter,
                        'unit': 'px',
                    },
                    'fontFamily': "Default",
                    'lineHeight': {
                        'Desktop': '',
                        "Tablet": '',
                        "Mobile": '',
                        'unit': 'px',
                    },
                    'fontSize': {
                        'Desktop': attributes.btnStyles[0].btnSize,
                        "Tablet": attributes.btnStyles[0].btnSizeTablet,
                        "Mobile": attributes.btnStyles[0].btnSizeMobile,
                        'unit': attributes.btnStyles[0].btnSizeUnit,
                    }
                }
            };
            return Object.assign(attributes, newAttributes)
        },
        save: (props) => {
            const {
                block_id,
                borderIconBox,
                btnBorderIconBox,
                align,
                iconImage,
                iconImgUrl,
                hoverEffect,
                iconChecked,
                iconPos,
                iconHPos,
                iconVPos,
                iconSize,
                iconRadius,
                iconColor,
                iconBackColor,
                selectedIcon,
                titleChecked,
                titleText,
                descText,
                descChecked,
                btnChecked,
                btnEffect,
                effectDir,
                btnTarget,
                btnText,
                btnLink,
                btnHoverBorder,
                hideDesktop,
                hideTablet,
                hideMobile,
                titleStyles,
                descStyles,
                btnStyles,
                containerStyles,
                btnBorderTop,
                btnBorderRight,
                btnBorderBottom,
                btnBorderLeft,
                borderTop,
                borderRight,
                borderBottom,
                borderLeft
            } = props.attributes;

            const mainClasses = classnames(className, 'premium-icon-box');
            return (
                <div
                    id={`premium-icon-box-${block_id}`}
                    className={`${mainClasses} premium-icon-box-${iconPos} premium-icon-box-${iconHPos} premium-icon-box-${block_id} ${hideDesktop} ${hideTablet} ${hideMobile}`}
                    style={{
                        textAlign: align,
                        borderStyle: containerStyles[0].borderType,
                        borderWidth: borderIconBox
                            ? `${borderTop}px ${borderRight}px ${borderBottom}px ${borderLeft}px`
                            : containerStyles[0].borderWidth + "px",
                        borderRadius: containerStyles[0].borderRadius + "px",
                        borderColor: containerStyles[0].borderColor,
                        boxShadow: `${containerStyles[0].shadowHorizontal}px ${containerStyles[0].shadowVertical}px ${containerStyles[0].shadowBlur}px ${containerStyles[0].shadowColor} ${containerStyles[0].shadowPosition}`,
                        backgroundColor: containerStyles[0].backColor,
                        backgroundImage: containerStyles[0].imageURL ? `url('${containerStyles[0].imageURL}')` : 'none',
                        backgroundRepeat: containerStyles[0].backgroundRepeat,
                        backgroundPosition: containerStyles[0].backgroundPosition,
                        backgroundSize: containerStyles[0].backgroundSize,
                        backgroundAttachment: containerStyles[0].fixed ? "fixed" : "unset"
                    }}
                >
                    {btnChecked && btnText && (
                        <style
                            dangerouslySetInnerHTML={{
                                __html: [
                                    `#premium-icon-box-${block_id}:hover {`,
                                    `box-shadow: ${containerStyles[0].hoverShadowHorizontal}px ${containerStyles[0].hoverShadowVertical}px ${containerStyles[0].hoverShadowBlur}px ${containerStyles[0].hoverShadowColor} ${containerStyles[0].hoverShadowPosition} !important`,
                                    "}",
                                    `#premium-icon-box-${block_id} .premium-icon-box__btn:hover {`,
                                    `color: ${btnStyles[0].btnHoverColor} !important;`,
                                    `border-color: ${btnHoverBorder} !important;`,
                                    "}",
                                    `#premium-icon-box-${block_id} .premium-button__none .premium-icon-box__btn:hover {`,
                                    `background-color: ${btnStyles[0].btnHoverBack} !important;`,
                                    "}",
                                    `#premium-icon-box-${block_id} .premium-button__slide .premium-button::before {`,
                                    `background-color: ${btnStyles[0].btnHoverBack} !important;`,
                                    "}"
                                ].join("\n")
                            }}
                        />
                    )}
                    {iconChecked && (
                        <div
                            className={`premium-icon-box__icon_wrap premium-icon-box__icon_${iconVPos}`}
                        >
                            {"icon" === iconImage && selectedIcon && (
                                <i
                                    className={`${selectedIcon} premium-icon-box__icon premium-icon__${hoverEffect}`}
                                    style={{
                                        color: iconColor,
                                        backgroundColor: iconBackColor,
                                        fontSize: iconSize
                                    }}
                                />
                            )}
                            {"image" === iconImage && iconImgUrl && (
                                <img
                                    className={`premium-icon-box__icon premium-icon__${hoverEffect}`}
                                    src={`${iconImgUrl}`}
                                    alt="Image Icon"
                                    style={{
                                        width: iconSize + "px",
                                        height: iconSize + "px",
                                        borderRadius: iconRadius + "px"
                                    }}
                                />
                            )}
                        </div>
                    )}
                    <div className={`premium-icon-box__content_wrap`}>
                        {titleChecked && titleText && (
                            <div
                                className={`premium-icon-box__title_wrap`}
                            >
                                <RichText.Content
                                    tagName={titleStyles[0].titleTag.toLowerCase()}
                                    className={`premium-icon-box__title`}
                                    value={titleText}
                                    style={{
                                        color: titleStyles[0].titleColor,
                                        fontFamily: titleStyles[0].titleFont,
                                        letterSpacing: titleStyles[0].titleLetter + "px",
                                        textTransform: titleStyles[0].titleUpper ? "uppercase" : "none",
                                        fontStyle: titleStyles[0].titleStyle,
                                        fontWeight: titleStyles[0].titleWeight,
                                        textShadow: `${titleStyles[0].titleShadowHorizontal}px ${titleStyles[0].titleShadowVertical}px ${titleStyles[0].titleShadowBlur}px ${titleStyles[0].titleShadowColor}`,
                                        lineHeight: titleStyles[0].titleLine + "px"
                                    }}
                                />
                            </div>
                        )}
                        {descChecked && descText && (
                            <div
                                className={`premium-icon-box__desc_wrap`}
                            >
                                <RichText.Content
                                    tagName="p"
                                    className={`premium-icon-box__desc`}
                                    value={descText}
                                    style={{
                                        color: descStyles[0].descColor,
                                        fontFamily: descStyles[0].descFont,
                                        lineHeight: descStyles[0].descLine + "px",
                                        fontWeight: descStyles[0].descWeight
                                    }}
                                />
                            </div>
                        )}
                        {btnChecked && btnText && (
                            <div
                                className={`premium-icon-box__btn_wrap premium-button__${btnEffect} premium-button__${effectDir}`}
                            >
                                <RichText.Content
                                    tagName="a"
                                    className={`premium-icon-box__btn premium-button`}
                                    href={btnLink}
                                    rel="noopener noreferrer"
                                    target={btnTarget ? "_blank" : "_self"}
                                    value={btnText}
                                    style={{
                                        color: btnStyles[0].btnColor,
                                        backgroundColor: btnStyles[0].btnBack,
                                        letterSpacing: btnStyles[0].btnLetter + "px",
                                        textTransform: btnStyles[0].btnUpper ? "uppercase" : "none",
                                        fontStyle: btnStyles[0].btnStyle,
                                        fontWeight: btnStyles[0].btnWeight,
                                        borderStyle: btnStyles[0].btnBorderType,
                                        borderWidth: btnBorderIconBox
                                            ? `${btnBorderTop}px ${btnBorderRight}px ${btnBorderBottom}px ${btnBorderLeft}px`
                                            : btnStyles[0].btnBorderWidth + "px",
                                        borderRadius: btnStyles[0].btnBorderRadius + "px",
                                        borderColor: btnStyles[0].btnBorderColor,
                                        padding: btnStyles[0].btnPadding + btnStyles[0].btnPaddingU,
                                        boxShadow: `${btnStyles[0].btnShadowHorizontal}px ${btnStyles[0].btnShadowVertical}px ${btnStyles[0].btnShadowBlur}px ${btnStyles[0].btnShadowColor} ${btnStyles[0].btnShadowPosition}`
                                    }}
                                />
                            </div>
                        )}
                    </div>
                </div>
            );
        },
    },
    {
        attributes: attributes,
        migrate: attributes => {
            let newAttributes = {
                titleStyles: [
                    {
                        titleTag: attributes.titleTag,
                        titleFont: attributes.titleFont,
                        titleColor: attributes.titleColor,
                        titleSize: attributes.titleSize,
                        titleSizeUnit: attributes.titleSize,
                        titleSizeTablet: attributes.titleSizeTablet,
                        titleSizeMobile: attributes.titleSizeMobile,
                        titleLine: attributes.titleLine,
                        titleLetter: attributes.titleLetter,
                        titleStyle: attributes.titleStyle,
                        titleUpper: attributes.titleUpper,
                        titleWeight: attributes.titleWeight,
                        titleShadowColor: attributes.titleShadowColor,
                        titleShadowBlur: attributes.titleShadowBlur,
                        titleShadowHorizontal: attributes.titleShadowHorizontal,
                        titleShadowVertical: attributes.titleShadowVertical,
                        titleMarginT: attributes.titleMarginT,
                        titleMarginB: attributes.titleMarginB,
                    }
                ],
                descStyles: [
                    {
                        descFont: attributes.descFont,
                        descColor: attributes.descColor,
                        descSize: attributes.descSize,
                        descSizeUnit: attributes.descSizeUnit,
                        descSizeTablet: attributes.descSizeTablet,
                        descSizeMobile: attributes.descSizeMobile,
                        descLine: attributes.descLine,
                        descWeight: attributes.descWeight,
                        descMarginT: attributes.descMarginT,
                        descMarginB: attributes.descMarginB,
                    }
                ],
                btnStyles: [
                    {
                        btnSize: attributes.btnSize,
                        btnSizeUnit: attributes.btnSizeUnit,
                        btnSizeTablet: attributes.btnSizeTablet,
                        btnSizeMobile: attributes.btnSizeMobile,
                        btnLine: attributes.btnLine,
                        btnLetter: attributes.btnLetter,
                        btnStyle: attributes.btnStyle,
                        btnUpper: attributes.btnUpper,
                        btnWeight: attributes.btnWeight,
                        btnBorderType: attributes.btnBorderType,
                        btnBorderWidth: attributes.btnBorderWidth,
                        btnBorderTop: attributes.btnBorderTop,
                        btnBorderRight: attributes.btnBorderRight,
                        btnBorderBottom: attributes.btnBorderBottom,
                        btnBorderLeft: attributes.btnBorderLeft,
                        btnBorderRadius: attributes.btnBorderRadius,
                        btnBorderColor: attributes.btnBorderColor,
                        btnPadding: attributes.btnPadding,
                        btnPaddingU: attributes.btnPaddingU,
                        btnMarginT: attributes.btnMarginT,
                        btnMarginB: attributes.btnMarginB,
                        btnShadowColor: attributes.btnShadowColor,
                        btnShadowBlur: attributes.btnShadowBlur,
                        btnShadowHorizontal: attributes.btnShadowHorizontal,
                        btnShadowVertical: attributes.btnShadowVertical,
                        btnShadowPosition: attributes.btnShadowPosition,
                        btnColor: attributes.btnColor,
                        btnHoverColor: attributes.btnHoverColor,
                        btnBack: attributes.btnBack,
                        btnHoverBack: attributes.btnHoverBack,
                        btnOpacity: attributes.btnOpacity,
                    }
                ],
                containerStyles: [
                    {
                        backOpacity: attributes.backOpacity,
                        backColor: attributes.backColor,
                        imageID: attributes.imageID,
                        imageURL: attributes.imageURL,
                        backgroundRepeat: attributes.backgroundRepeat,
                        backgroundPosition: attributes.backgroundPosition,
                        backgroundSize: attributes.backgroundSize,
                        fixed: attributes.fixed,
                        borderType: attributes.borderType,
                        borderWidth: attributes.borderWidth,
                        borderRadius: attributes.borderRadius,
                        borderColor: attributes.borderColor,
                        borderTop: attributes.borderTop,
                        borderRight: attributes.borderRight,
                        borderBottom: attributes.borderBottom,
                        borderLeft: attributes.borderLeft,
                        shadowColor: attributes.shadowColor,
                        shadowBlur: attributes.shadowBlur,
                        shadowHorizontal: attributes.shadowHorizontal,
                        shadowVertical: attributes.shadowVertical,
                        shadowPosition: attributes.shadowPosition,
                        hoverShadowColor: attributes.hoverShadowColor,
                        hoverShadowBlur: attributes.hoverShadowBlur,
                        hoverShadowHorizontal: attributes.hoverShadowHorizontal,
                        hoverShadowVertical: attributes.hoverShadowVertical,
                        hoverShadowPosition: attributes.hoverShadowPosition,
                        marginT: attributes.marginT,
                        marginR: attributes.marginR,
                        marginB: attributes.marginB,
                        marginL: attributes.marginL,
                        paddingT: attributes.paddingT,
                        paddingR: attributes.paddingR,
                        paddingB: attributes.paddingB,
                        paddingL: attributes.paddingL,
                        paddingU: attributes.paddingU,
                        gradientColorOne: '',
                        gradientLocationOne: '0',
                        gradientColorTwo: '',
                        gradientLocationTwo: '100',
                        gradientType: 'linear',
                        gradientAngle: '180',
                        gradientPosition: 'center center'
                    }
                ],
                marginTTablet: '',
                marginRTablet: '',
                marginBTablet: '',
                marginLTablet: '',
                marginTMobile: '',
                marginRMobile: '',
                marginBMobile: '',
                marginLMobile: '',
                paddingTTablet: '',
                paddingRTablet: '',
                paddingBTablet: '',
                paddingLTablet: '',
                paddingTMobile: '',
                paddingRMobile: '',
                paddingBMobile: '',
                paddingLMobile: '',
                btnMarginTTablet: '',
                btnMarginBTablet: '',
                btnMarginTMobile: '',
                btnMarginBMobile: '',
                titleMarginTTablet: '',
                titleMarginBTablet: '',
                titleMarginTMobile: '',
                titleMarginBMobile: '',
                descMarginTTablet: '',
                descMarginBTablet: '',
                descMarginTMobile: '',
                descMarginBMobile: '',
            }

            return Object.assign(attributes, newAttributes)
        },
        save: props => {
            const {
                block_id,
                borderIconBox,
                btnBorderIconBox,
                align,
                iconImage,
                iconImgUrl,
                iconRadius,
                selectedIcon,
                iconChecked,
                hoverEffect,
                iconPos,
                iconHPos,
                iconVPos,
                iconSize,
                iconColor,
                iconBackColor,
                titleChecked,
                titleText,
                titleTag,
                titleColor,
                titleFont,
                titleLine,
                titleLetter,
                titleStyle,
                titleUpper,
                titleWeight,
                titleShadowBlur,
                titleShadowColor,
                titleShadowHorizontal,
                titleShadowVertical,
                titleMarginT,
                titleMarginB,
                descChecked,
                descText,
                descColor,
                descFont,
                descLine,
                descWeight,
                descMarginT,
                descMarginB,
                btnChecked,
                btnEffect,
                effectDir,
                btnText,
                btnTarget,
                btnLink,
                btnStyle,
                btnUpper,
                btnWeight,
                btnLetter,
                btnColor,
                btnHoverColor,
                btnHoverBorder,
                btnBack,
                btnHoverBack,
                btnBorderWidth,
                btnBorderTop,
                btnBorderRight,
                btnBorderBottom,
                btnBorderLeft,
                borderTop,
                borderRight,
                borderBottom,
                borderLeft,
                btnBorderRadius,
                btnBorderColor,
                btnBorderType,
                btnPadding,
                btnPaddingU,
                btnMarginT,
                btnMarginB,
                btnShadowBlur,
                btnShadowColor,
                btnShadowHorizontal,
                btnShadowVertical,
                btnShadowPosition,
                backColor,
                imageURL,
                fixed,
                backgroundRepeat,
                backgroundPosition,
                backgroundSize,
                borderType,
                borderWidth,
                borderRadius,
                borderColor,
                marginT,
                marginR,
                marginB,
                marginL,
                paddingT,
                paddingR,
                paddingB,
                paddingL,
                paddingU,
                shadowBlur,
                shadowColor,
                shadowHorizontal,
                shadowVertical,
                shadowPosition,
                hoverShadowBlur,
                hoverShadowColor,
                hoverShadowHorizontal,
                hoverShadowVertical,
                hoverShadowPosition,
                iconOpacity,
                btnOpacity,
                backOpacity,
                hideDesktop,
                hideTablet,
                hideMobile
            } = props.attributes;
            return (
                <div
                    id={`premium-icon-box-${block_id}`}
                    className={`${className} premium-icon-box-${iconPos} premium-icon-box-${iconHPos} premium-icon-box-${block_id} ${hideDesktop} ${hideTablet} ${hideMobile}`}
                    style={{
                        textAlign: align,
                        borderStyle: borderType,
                        borderWidth: borderIconBox
                            ? `${borderTop}px ${borderRight}px ${borderBottom}px ${borderLeft}px`
                            : borderWidth + "px",
                        borderRadius: borderRadius + "px",
                        borderColor: borderColor,
                        marginTop: marginT,
                        marginRight: marginR,
                        marginBottom: marginB,
                        marginLeft: marginL,
                        paddingTop: paddingT + paddingU,
                        paddingRight: paddingR + paddingU,
                        paddingBottom: paddingB + paddingU,
                        paddingLeft: paddingL + paddingU,
                        boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`,
                        backgroundColor: backColor
                            ? hexToRgba(backColor, backOpacity)
                            : "transparent",
                        backgroundImage: `url('${imageURL}')`,
                        backgroundRepeat: backgroundRepeat,
                        backgroundPosition: backgroundPosition,
                        backgroundSize: backgroundSize,
                        backgroundAttachment: fixed ? "fixed" : "unset"
                    }}
                >
                    {btnChecked && btnText && (
                        <style
                            dangerouslySetInnerHTML={{
                                __html: [
                                    `#premium-icon-box-${block_id}:hover {`,
                                    `box-shadow: ${hoverShadowHorizontal}px ${hoverShadowVertical}px ${hoverShadowBlur}px ${hoverShadowColor} ${hoverShadowPosition} !important`,
                                    "}",
                                    `#premium-icon-box-${block_id} .premium-icon-box__btn:hover {`,
                                    `color: ${btnHoverColor} !important;`,
                                    `border-color: ${btnHoverBorder} !important;`,
                                    "}",
                                    `#premium-icon-box-${block_id} .premium-button__none .premium-icon-box__btn:hover {`,
                                    `background-color: ${btnHoverBack} !important;`,
                                    "}",
                                    `#premium-icon-box-${block_id} .premium-button__slide .premium-button::before {`,
                                    `background-color: ${btnHoverBack} !important;`,
                                    "}"
                                ].join("\n")
                            }}
                        />
                    )}
                    {iconChecked && (
                        <div
                            className={`premium-icon-box__icon_wrap premium-icon-box__icon_${iconVPos}`}
                        >
                            {"icon" === iconImage && selectedIcon && (
                                <i
                                    className={`${selectedIcon} premium-icon-box__icon premium-icon__${hoverEffect}`}
                                    style={{
                                        color: iconColor,
                                        backgroundColor: iconBackColor
                                            ? hexToRgba(iconBackColor, iconOpacity)
                                            : "transparent",
                                        fontSize: iconSize,
                                    }}
                                />
                            )}
                            {"image" === iconImage && iconImgUrl && (
                                <img
                                    className={`premium-icon-box__icon premium-icon__${hoverEffect}`}
                                    src={`${iconImgUrl}`}
                                    alt="Image Icon"
                                    style={{
                                        width: iconSize + "px",
                                        height: iconSize + "px",
                                        borderRadius: iconRadius + "px"
                                    }}
                                />
                            )}
                        </div>
                    )}
                    <div className={`premium-icon-box__content_wrap`}>
                        {titleChecked && titleText && (
                            <div
                                className={`premium-icon-box__title_wrap`}
                                style={{
                                    marginTop: titleMarginT,
                                    marginBottom: titleMarginB
                                }}
                            >
                                <RichText.Content
                                    tagName={titleTag.toLowerCase()}
                                    className={`premium-icon-box__title`}
                                    value={titleText}
                                    style={{
                                        color: titleColor,
                                        fontFamily: titleFont,
                                        letterSpacing: titleLetter + "px",
                                        textTransform: titleUpper ? "uppercase" : "none",
                                        fontStyle: titleStyle,
                                        fontWeight: titleWeight,
                                        textShadow: `${titleShadowHorizontal}px ${titleShadowVertical}px ${titleShadowBlur}px ${titleShadowColor}`,
                                        lineHeight: titleLine + "px"
                                    }}
                                />
                            </div>
                        )}
                        {descChecked && descText && (
                            <div
                                className={`premium-icon-box__desc_wrap`}
                                style={{
                                    marginTop: descMarginT,
                                    marginBottom: descMarginB
                                }}
                            >
                                <RichText.Content
                                    tagName="p"
                                    className={`premium-icon-box__desc`}
                                    value={descText}
                                    style={{
                                        color: descColor,
                                        fontFamily: descFont,
                                        lineHeight: descLine + "px",
                                        fontWeight: descWeight
                                    }}
                                />
                            </div>
                        )}
                        {btnChecked && btnText && (
                            <div
                                className={`premium-icon-box__btn_wrap premium-button__${btnEffect} premium-button__${effectDir}`}
                                style={{
                                    marginTop: btnMarginT,
                                    marginBottom: btnMarginB
                                }}
                            >
                                <RichText.Content
                                    tagName="a"
                                    className={`premium-icon-box__btn premium-button`}
                                    href={btnLink}
                                    rel="noopener noreferrer"
                                    target={btnTarget ? "_blank" : "_self"}
                                    value={btnText}
                                    style={{
                                        color: btnColor,
                                        backgroundColor: btnBack
                                            ? hexToRgba(btnBack, btnOpacity)
                                            : "transparent",
                                        letterSpacing: btnLetter + "px",
                                        textTransform: btnUpper ? "uppercase" : "none",
                                        fontStyle: btnStyle,
                                        fontWeight: btnWeight,
                                        borderStyle: btnBorderType,
                                        borderWidth: btnBorderIconBox
                                            ? `${btnBorderTop}px ${btnBorderRight}px ${btnBorderBottom}px ${btnBorderLeft}px`
                                            : btnBorderWidth + "px",
                                        borderRadius: btnBorderRadius + "px",
                                        borderColor: btnBorderColor,
                                        padding: btnPadding + btnPaddingU,
                                        boxShadow: `${btnShadowHorizontal}px ${btnShadowVertical}px ${btnShadowBlur}px ${btnShadowColor} ${btnShadowPosition}`
                                    }}
                                />
                            </div>
                        )}
                    </div>
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
                borderRight: "",
                borderBottom: "",
                btnBorderBottom: "",
                btnBorderLeft: "",
                btnBorderTop: "",
                btnBorderRight: "",
                borderIconBox: "",
                btnBorderIconBox: "",
                classMigrate: false,
                block_id: '',
                titleSizeUnit: "px",
                titleSizeTablet: '',
                titleSizeMobile: '',
                descSizeUnit: 'px',
                descSizeTablet: '',
                descSizeMobile: '',
                btnSizeUnit: 'px',
                btnSizeTablet: '',
                btnSizeMobile: '',
                btnOpacity: "",
                iconOpacity: "",
                backOpacity: "",
                hideDesktop: false,
                hideTablet: false,
                hideMobile: false
            };
            return Object.assign(attributes, newAttributes);
        },
        save: (props) => {
            const {
                id,
                align,
                iconImage,
                iconImgUrl,
                iconRadius,
                selectedIcon,
                iconChecked,
                hoverEffect,
                iconPos,
                iconHPos,
                iconVPos,
                iconSize,
                iconColor,
                iconBackColor,
                titleChecked,
                titleText,
                titleTag,
                titleColor,
                titleFont,
                titleSize,
                titleLine,
                titleLetter,
                titleStyle,
                titleUpper,
                titleWeight,
                titleShadowBlur,
                titleShadowColor,
                titleShadowHorizontal,
                titleShadowVertical,
                titleMarginT,
                titleMarginB,
                descChecked,
                descText,
                descColor,
                descFont,
                descSize,
                descLine,
                descWeight,
                descMarginT,
                descMarginB,
                btnChecked,
                btnEffect,
                effectDir,
                btnText,
                btnTarget,
                btnLink,
                btnSize,
                btnStyle,
                btnUpper,
                btnWeight,
                btnLetter,
                btnColor,
                btnHoverColor,
                btnHoverBorder,
                btnBack,
                btnHoverBack,
                btnBorderWidth,
                btnBorderRadius,
                btnBorderColor,
                btnBorderType,
                btnPadding,
                btnPaddingU,
                btnMarginT,
                btnMarginB,
                btnShadowBlur,
                btnShadowColor,
                btnShadowHorizontal,
                btnShadowVertical,
                btnShadowPosition,
                backColor,
                imageURL,
                fixed,
                backgroundRepeat,
                backgroundPosition,
                backgroundSize,
                borderType,
                borderWidth,
                borderRadius,
                borderColor,
                marginT,
                marginR,
                marginB,
                marginL,
                paddingT,
                paddingR,
                paddingB,
                paddingL,
                paddingU,
                shadowBlur,
                shadowColor,
                shadowHorizontal,
                shadowVertical,
                shadowPosition,
                hoverShadowBlur,
                hoverShadowColor,
                hoverShadowHorizontal,
                hoverShadowVertical,
                hoverShadowPosition,
            } = props.attributes;

            return (
                <div
                    id={`premium-icon-box-${id}`}
                    className={`${className} premium-icon-box-${iconPos} premium-icon-box-${iconHPos}`}
                    style={{
                        textAlign: align,
                        border: borderType,
                        borderWidth: borderWidth + "px",
                        borderRadius: borderRadius + "px",
                        borderColor: borderColor,
                        marginTop: marginT,
                        marginRight: marginR,
                        marginBottom: marginB,
                        marginLeft: marginL,
                        paddingTop: paddingT + paddingU,
                        paddingRight: paddingR + paddingU,
                        paddingBottom: paddingB + paddingU,
                        paddingLeft: paddingL + paddingU,
                        boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`,
                        backgroundColor: backColor,
                        backgroundImage: `url('${imageURL}')`,
                        backgroundRepeat: backgroundRepeat,
                        backgroundPosition: backgroundPosition,
                        backgroundSize: backgroundSize,
                        backgroundAttachment: fixed ? "fixed" : "unset",
                    }}
                >
                    {btnChecked && btnText && (
                        <style
                            dangerouslySetInnerHTML={{
                                __html: [
                                    `#premium-icon-box-${id}:hover {`,
                                    `box-shadow: ${hoverShadowHorizontal}px ${hoverShadowVertical}px ${hoverShadowBlur}px ${hoverShadowColor} ${hoverShadowPosition} !important`,
                                    "}",
                                    `#premium-icon-box-${id} .premium-icon-box__btn:hover {`,
                                    `color: ${btnHoverColor} !important;`,
                                    `border-color: ${btnHoverBorder} !important;`,
                                    "}",
                                    `#premium-icon-box-${id} .premium-button__none .premium-icon-box__btn:hover {`,
                                    `background-color: ${btnHoverBack} !important;`,
                                    "}",
                                    `#premium-icon-box-${id} .premium-button__slide .premium-button::before {`,
                                    `background-color: ${btnHoverBack} !important;`,
                                    "}",
                                ].join("\n"),
                            }}
                        />
                    )}
                    {iconChecked && (
                        <div
                            className={`premium-icon-box__icon_wrap premium-icon-box__icon_${iconVPos}`}
                        >
                            {"icon" === iconImage && selectedIcon && (
                                <i
                                    className={`${selectedIcon} premium-icon-box__icon premium-icon__${hoverEffect}`}
                                    style={{
                                        color: iconColor,
                                        backgroundColor: iconBackColor,
                                        fontSize: iconSize,
                                    }}
                                />
                            )}
                            {"image" === iconImage && iconImgUrl && (
                                <img
                                    className={`premium-icon-box__icon premium-icon__${hoverEffect}`}
                                    src={`${iconImgUrl}`}
                                    alt="Image Icon"
                                    style={{
                                        width: iconSize + "px",
                                        height: iconSize + "px",
                                        borderRadius: iconRadius + "px",
                                    }}
                                />
                            )}
                        </div>
                    )}
                    <div className={`premium-icon-box__content_wrap`}>
                        {titleChecked && titleText && (
                            <div
                                className={`premium-icon-box__title_wrap`}
                                style={{
                                    marginTop: titleMarginT,
                                    marginBottom: titleMarginB,
                                }}
                            >
                                <RichText.Content
                                    tagName={titleTag.toLowerCase()}
                                    className={`premium-icon-box__title`}
                                    value={titleText}
                                    style={{
                                        color: titleColor,
                                        fontSize: titleSize + "px",
                                        fontFamily: titleFont,
                                        letterSpacing: titleLetter + "px",
                                        textTransform: titleUpper ? "uppercase" : "none",
                                        fontStyle: titleStyle,
                                        fontWeight: titleWeight,
                                        textShadow: `${titleShadowHorizontal}px ${titleShadowVertical}px ${titleShadowBlur}px ${titleShadowColor}`,
                                        lineHeight: titleLine + "px",
                                    }}
                                />
                            </div>
                        )}
                        {descChecked && descText && (
                            <div
                                className={`premium-icon-box__desc_wrap`}
                                style={{
                                    marginTop: descMarginT,
                                    marginBottom: descMarginB,
                                }}
                            >
                                <RichText.Content
                                    tagName="p"
                                    className={`premium-icon-box__desc`}
                                    value={descText}
                                    style={{
                                        color: descColor,
                                        fontSize: descSize + "px",
                                        fontFamily: descFont,
                                        lineHeight: descLine + "px",
                                        fontWeight: descWeight,
                                    }}
                                />
                            </div>
                        )}
                        {btnChecked && btnText && (
                            <div
                                className={`premium-icon-box__btn_wrap premium-button__${btnEffect} premium-button__${effectDir}`}
                                style={{
                                    marginTop: btnMarginT,
                                    marginBottom: btnMarginB,
                                }}
                            >
                                <RichText.Content
                                    tagName="a"
                                    className={`premium-icon-box__btn premium-button`}
                                    href={btnLink}
                                    rel="noopener noreferrer"
                                    target={btnTarget ? "_blank" : "_self"}
                                    value={btnText}
                                    style={{
                                        color: btnColor,
                                        backgroundColor: btnBack,
                                        fontSize: btnSize + "px",
                                        letterSpacing: btnLetter + "px",
                                        textTransform: btnUpper ? "uppercase" : "none",
                                        fontStyle: btnStyle,
                                        fontWeight: btnWeight,
                                        border: btnBorderType,
                                        borderWidth: btnBorderWidth + "px",
                                        borderRadius: btnBorderRadius + "px",
                                        borderColor: btnBorderColor,
                                        padding: btnPadding + btnPaddingU,
                                        boxShadow: `${btnShadowHorizontal}px ${btnShadowVertical}px ${btnShadowBlur}px ${btnShadowColor} ${btnShadowPosition}`,
                                    }}
                                />
                            </div>
                        )}
                    </div>
                </div>
            );
        },
    },
    {
        attributes: attributes,
        migrate: (attributes) => {
            let newAttributes = {
                iconPos: "block",
                iconHPos: "before",
                iconVPos: "center",
            };
            return Object.assign(attributes, newAttributes);
        },
        save: (props) => {
            const {
                id,
                align,
                iconImage,
                iconImgUrl,
                iconRadius,
                selectedIcon,
                iconChecked,
                hoverEffect,
                iconSize,
                iconColor,
                iconBackColor,
                titleChecked,
                titleText,
                titleTag,
                titleColor,
                titleFont,
                titleSize,
                titleLine,
                titleLetter,
                titleStyle,
                titleUpper,
                titleWeight,
                titleShadowBlur,
                titleShadowColor,
                titleShadowHorizontal,
                titleShadowVertical,
                titleMarginT,
                titleMarginB,
                descChecked,
                descText,
                descColor,
                descFont,
                descSize,
                descLine,
                descWeight,
                descMarginT,
                descMarginB,
                btnChecked,
                btnEffect,
                effectDir,
                btnText,
                btnTarget,
                btnLink,
                btnSize,
                btnStyle,
                btnUpper,
                btnWeight,
                btnLetter,
                btnColor,
                btnHoverColor,
                btnHoverBorder,
                btnBack,
                btnHoverBack,
                btnBorderWidth,
                btnBorderRadius,
                btnBorderColor,
                btnBorderType,
                btnPadding,
                btnPaddingU,
                btnMarginT,
                btnMarginB,
                btnShadowBlur,
                btnShadowColor,
                btnShadowHorizontal,
                btnShadowVertical,
                btnShadowPosition,
                backColor,
                imageURL,
                fixed,
                backgroundRepeat,
                backgroundPosition,
                backgroundSize,
                borderType,
                borderWidth,
                borderRadius,
                borderColor,
                marginT,
                marginR,
                marginB,
                marginL,
                paddingT,
                paddingR,
                paddingB,
                paddingL,
                paddingU,
                shadowBlur,
                shadowColor,
                shadowHorizontal,
                shadowVertical,
                shadowPosition,
                hoverShadowBlur,
                hoverShadowColor,
                hoverShadowHorizontal,
                hoverShadowVertical,
                hoverShadowPosition,
            } = props.attributes;

            return (
                <div
                    id={`${className}-${id}`}
                    className={`${className}`}
                    style={{
                        textAlign: align,
                        border: borderType,
                        borderWidth: borderWidth + "px",
                        borderRadius: borderRadius + "px",
                        borderColor: borderColor,
                        marginTop: marginT,
                        marginRight: marginR,
                        marginBottom: marginB,
                        marginLeft: marginL,
                        paddingTop: paddingT + paddingU,
                        paddingRight: paddingR + paddingU,
                        paddingBottom: paddingB + paddingU,
                        paddingLeft: paddingL + paddingU,
                        boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`,
                        backgroundColor: backColor,
                        backgroundImage: `url('${imageURL}')`,
                        backgroundRepeat: backgroundRepeat,
                        backgroundPosition: backgroundPosition,
                        backgroundSize: backgroundSize,
                        backgroundAttachment: fixed ? "fixed" : "unset",
                    }}
                >
                    {btnChecked && btnText && (
                        <style
                            dangerouslySetInnerHTML={{
                                __html: [
                                    `#premium-icon-box-${id}:hover {`,
                                    `box-shadow: ${hoverShadowHorizontal}px ${hoverShadowVertical}px ${hoverShadowBlur}px ${hoverShadowColor} ${hoverShadowPosition} !important`,
                                    "}",
                                    `#premium-icon-box-${id} .premium-icon-box__btn:hover {`,
                                    `color: ${btnHoverColor} !important;`,
                                    `border-color: ${btnHoverBorder} !important;`,
                                    "}",
                                    `#premium-icon-box-${id} .premium-button__none .premium-icon-box__btn:hover {`,
                                    `background-color: ${btnHoverBack} !important;`,
                                    "}",
                                    `#premium-icon-box-${id} .premium-button__slide .premium-button::before {`,
                                    `background-color: ${btnHoverBack} !important;`,
                                    "}",
                                ].join("\n"),
                            }}
                        />
                    )}
                    {iconChecked && (
                        <div className={`${className}__icon_wrap`}>
                            {"icon" === iconImage && selectedIcon && (
                                <i
                                    className={`${selectedIcon} ${className}__icon premium-icon__${hoverEffect}`}
                                    style={{
                                        color: iconColor,
                                        backgroundColor: iconBackColor,
                                        fontSize: iconSize,
                                    }}
                                />
                            )}
                            {"image" === iconImage && iconImgUrl && (
                                <img
                                    className={`${className}__icon premium-icon__${hoverEffect}`}
                                    src={`${iconImgUrl}`}
                                    alt="Image Icon"
                                    style={{
                                        width: iconSize + "px",
                                        height: iconSize + "px",
                                        borderRadius: iconRadius + "px",
                                    }}
                                />
                            )}
                        </div>
                    )}
                    {titleChecked && titleText && (
                        <div
                            className={`${className}__title_wrap`}
                            style={{
                                marginTop: titleMarginT,
                                marginBottom: titleMarginB,
                            }}
                        >
                            <RichText.Content
                                tagName={titleTag.toLowerCase()}
                                className={`${className}__title`}
                                value={titleText}
                                style={{
                                    color: titleColor,
                                    fontSize: titleSize + "px",
                                    fontFamily: titleFont,
                                    letterSpacing: titleLetter + "px",
                                    textTransform: titleUpper ? "uppercase" : "none",
                                    fontStyle: titleStyle,
                                    fontWeight: titleWeight,
                                    textShadow: `${titleShadowHorizontal}px ${titleShadowVertical}px ${titleShadowBlur}px ${titleShadowColor}`,
                                    lineHeight: titleLine + "px",
                                }}
                            />
                        </div>
                    )}
                    {descChecked && descText && (
                        <div
                            className={`${className}__desc_wrap`}
                            style={{
                                marginTop: descMarginT,
                                marginBottom: descMarginB,
                            }}
                        >
                            <RichText.Content
                                tagName="p"
                                className={`${className}__desc`}
                                value={descText}
                                style={{
                                    color: descColor,
                                    fontSize: descSize + "px",
                                    fontFamily: descFont,
                                    lineHeight: descLine + "px",
                                    fontWeight: descWeight,
                                }}
                            />
                        </div>
                    )}
                    {btnChecked && btnText && (
                        <div
                            className={`${className}__btn_wrap premium-button__${btnEffect} premium-button__${effectDir}`}
                            style={{
                                marginTop: btnMarginT,
                                marginBottom: btnMarginB,
                            }}
                        >
                            <RichText.Content
                                tagName="a"
                                className={`${className}__btn premium-button`}
                                href={btnLink}
                                rel="noopener noreferrer"
                                target={btnTarget ? "_blank" : "_self"}
                                value={btnText}
                                style={{
                                    color: btnColor,
                                    backgroundColor: btnBack,
                                    fontSize: btnSize + "px",
                                    letterSpacing: btnLetter + "px",
                                    textTransform: btnUpper ? "uppercase" : "none",
                                    fontStyle: btnStyle,
                                    fontWeight: btnWeight,
                                    border: btnBorderType,
                                    borderWidth: btnBorderWidth + "px",
                                    borderRadius: btnBorderRadius + "px",
                                    borderColor: btnBorderColor,
                                    padding: btnPadding + btnPaddingU,
                                    boxShadow: `${btnShadowHorizontal}px ${btnShadowVertical}px ${btnShadowBlur}px ${btnShadowColor} ${btnShadowPosition}`,
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
            let newAttributes = {
                paddingU: "",
                btnPaddingU: "",
            };
            return Object.assign(attributes, newAttributes);
        },
        save: (props) => {
            const {
                id,
                align,
                iconImage,
                iconImgUrl,
                iconRadius,
                selectedIcon,
                iconChecked,
                hoverEffect,
                iconSize,
                iconColor,
                iconBackColor,
                titleChecked,
                titleText,
                titleTag,
                titleColor,
                titleFont,
                titleSize,
                titleLine,
                titleLetter,
                titleStyle,
                titleUpper,
                titleWeight,
                titleShadowBlur,
                titleShadowColor,
                titleShadowHorizontal,
                titleShadowVertical,
                titleMarginT,
                titleMarginB,
                descChecked,
                descText,
                descColor,
                descFont,
                descSize,
                descLine,
                descWeight,
                descMarginT,
                descMarginB,
                btnChecked,
                btnEffect,
                effectDir,
                btnText,
                btnTarget,
                btnLink,
                btnSize,
                btnStyle,
                btnUpper,
                btnWeight,
                btnLetter,
                btnColor,
                btnHoverColor,
                btnHoverBorder,
                btnBack,
                btnHoverBack,
                btnBorderWidth,
                btnBorderRadius,
                btnBorderColor,
                btnBorderType,
                btnPadding,
                btnMarginT,
                btnMarginB,
                btnShadowBlur,
                btnShadowColor,
                btnShadowHorizontal,
                btnShadowVertical,
                btnShadowPosition,
                backColor,
                imageURL,
                fixed,
                backgroundRepeat,
                backgroundPosition,
                backgroundSize,
                borderType,
                borderWidth,
                borderRadius,
                borderColor,
                marginT,
                marginR,
                marginB,
                marginL,
                paddingT,
                paddingR,
                paddingB,
                paddingL,
                shadowBlur,
                shadowColor,
                shadowHorizontal,
                shadowVertical,
                shadowPosition,
                hoverShadowBlur,
                hoverShadowColor,
                hoverShadowHorizontal,
                hoverShadowVertical,
                hoverShadowPosition,
            } = props.attributes;

            return (
                <div
                    id={`${className}-${id}`}
                    className={`${className}`}
                    style={{
                        textAlign: align,
                        border: borderType,
                        borderWidth: borderWidth + "px",
                        borderRadius: borderRadius + "px",
                        borderColor: borderColor,
                        marginTop: marginT,
                        marginRight: marginR,
                        marginBottom: marginB,
                        marginLeft: marginL,
                        paddingTop: paddingT,
                        paddingRight: paddingR,
                        paddingBottom: paddingB,
                        paddingLeft: paddingL,
                        boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`,
                        backgroundColor: backColor,
                        backgroundImage: `url('${imageURL}')`,
                        backgroundRepeat: backgroundRepeat,
                        backgroundPosition: backgroundPosition,
                        backgroundSize: backgroundSize,
                        backgroundAttachment: fixed ? "fixed" : "unset",
                    }}
                >
                    {btnChecked && btnText && (
                        <style
                            dangerouslySetInnerHTML={{
                                __html: [
                                    `#premium-icon-box-${id}:hover {`,
                                    `box-shadow: ${hoverShadowHorizontal}px ${hoverShadowVertical}px ${hoverShadowBlur}px ${hoverShadowColor} ${hoverShadowPosition} !important`,
                                    "}",
                                    `#premium-icon-box-${id} .premium-icon-box__btn:hover {`,
                                    `color: ${btnHoverColor} !important;`,
                                    `border-color: ${btnHoverBorder} !important;`,
                                    "}",
                                    `#premium-icon-box-${id} .premium-button__none .premium-icon-box__btn:hover {`,
                                    `background-color: ${btnHoverBack} !important;`,
                                    "}",
                                    `#premium-icon-box-${id} .premium-button__slide .premium-button::before {`,
                                    `background-color: ${btnHoverBack} !important;`,
                                    "}",
                                ].join("\n"),
                            }}
                        />
                    )}
                    {iconChecked && (
                        <div className={`${className}__icon_wrap`}>
                            {"icon" === iconImage && selectedIcon && (
                                <i
                                    className={`${selectedIcon} ${className}__icon premium-icon__${hoverEffect}`}
                                    style={{
                                        color: iconColor,
                                        backgroundColor: iconBackColor,
                                        fontSize: iconSize,
                                    }}
                                />
                            )}
                            {"image" === iconImage && iconImgUrl && (
                                <img
                                    className={`${className}__icon premium-icon__${hoverEffect}`}
                                    src={`${iconImgUrl}`}
                                    alt="Image Icon"
                                    style={{
                                        width: iconSize + "px",
                                        height: iconSize + "px",
                                        borderRadius: iconRadius + "px",
                                    }}
                                />
                            )}
                        </div>
                    )}
                    {titleChecked && titleText && (
                        <div
                            className={`${className}__title_wrap`}
                            style={{
                                marginTop: titleMarginT,
                                marginBottom: titleMarginB,
                            }}
                        >
                            <RichText.Content
                                tagName={titleTag.toLowerCase()}
                                className={`${className}__title`}
                                value={titleText}
                                style={{
                                    color: titleColor,
                                    fontSize: titleSize + "px",
                                    fontFamily: titleFont,
                                    letterSpacing: titleLetter + "px",
                                    textTransform: titleUpper ? "uppercase" : "none",
                                    fontStyle: titleStyle,
                                    fontWeight: titleWeight,
                                    textShadow: `${titleShadowHorizontal}px ${titleShadowVertical}px ${titleShadowBlur}px ${titleShadowColor}`,
                                    lineHeight: titleLine + "px",
                                }}
                            />
                        </div>
                    )}
                    {descChecked && descText && (
                        <div
                            className={`${className}__desc_wrap`}
                            style={{
                                marginTop: descMarginT,
                                marginBottom: descMarginB,
                            }}
                        >
                            <RichText.Content
                                tagName="p"
                                className={`${className}__desc`}
                                value={descText}
                                style={{
                                    color: descColor,
                                    fontSize: descSize + "px",
                                    fontFamily: descFont,
                                    lineHeight: descLine + "px",
                                    fontWeight: descWeight,
                                }}
                            />
                        </div>
                    )}
                    {btnChecked && btnText && (
                        <div
                            className={`${className}__btn_wrap premium-button__${btnEffect} premium-button__${effectDir}`}
                            style={{
                                marginTop: btnMarginT,
                                marginBottom: btnMarginB,
                            }}
                        >
                            <RichText.Content
                                tagName="a"
                                className={`${className}__btn premium-button`}
                                href={btnLink}
                                rel="noopener noreferrer"
                                target={btnTarget ? "_blank" : "_self"}
                                value={btnText}
                                style={{
                                    color: btnColor,
                                    backgroundColor: btnBack,
                                    fontSize: btnSize + "px",
                                    letterSpacing: btnLetter + "px",
                                    textTransform: btnUpper ? "uppercase" : "none",
                                    fontStyle: btnStyle,
                                    fontWeight: btnWeight,
                                    border: btnBorderType,
                                    borderWidth: btnBorderWidth + "px",
                                    borderRadius: btnBorderRadius + "px",
                                    borderColor: btnBorderColor,
                                    padding: btnPadding + "px",
                                    boxShadow: `${btnShadowHorizontal}px ${btnShadowVertical}px ${btnShadowBlur}px ${btnShadowColor} ${btnShadowPosition}`,
                                }}
                            />
                        </div>
                    )}
                </div>
            );
        },
    },
    {
        attribute: attributes,
        migrate: (attributes) => {
            let newAttributes = {
                titleFont: "",
                descFont: "",
            };
            return Object.assign(attributes, newAttributes);
        },
        save: (props) => {
            const {
                id,
                align,
                iconImage,
                iconImgUrl,
                iconRadius,
                selectedIcon,
                iconChecked,
                hoverEffect,
                iconSize,
                iconColor,
                iconBackColor,
                titleChecked,
                titleText,
                titleTag,
                titleColor,
                titleSize,
                titleLine,
                titleLetter,
                titleStyle,
                titleUpper,
                titleWeight,
                titleShadowBlur,
                titleShadowColor,
                titleShadowHorizontal,
                titleShadowVertical,
                titleMarginT,
                titleMarginB,
                descChecked,
                descText,
                descColor,
                descSize,
                descLine,
                descWeight,
                descMarginT,
                descMarginB,
                btnChecked,
                btnEffect,
                effectDir,
                btnText,
                btnTarget,
                btnLink,
                btnSize,
                btnStyle,
                btnUpper,
                btnWeight,
                btnLetter,
                btnColor,
                btnHoverColor,
                btnHoverBorder,
                btnBack,
                btnHoverBack,
                btnBorderWidth,
                btnBorderRadius,
                btnBorderColor,
                btnBorderType,
                btnPadding,
                btnMarginT,
                btnMarginB,
                btnShadowBlur,
                btnShadowColor,
                btnShadowHorizontal,
                btnShadowVertical,
                btnShadowPosition,
                backColor,
                imageURL,
                fixed,
                backgroundRepeat,
                backgroundPosition,
                backgroundSize,
                borderType,
                borderWidth,
                borderRadius,
                borderColor,
                marginT,
                marginR,
                marginB,
                marginL,
                paddingT,
                paddingR,
                paddingB,
                paddingL,
                shadowBlur,
                shadowColor,
                shadowHorizontal,
                shadowVertical,
                shadowPosition,
                hoverShadowBlur,
                hoverShadowColor,
                hoverShadowHorizontal,
                hoverShadowVertical,
                hoverShadowPosition,
            } = props.attributes;

            return (
                <div
                    id={`${className}-${id}`}
                    className={`${className}`}
                    style={{
                        textAlign: align,
                        border: borderType,
                        borderWidth: borderWidth + "px",
                        borderRadius: borderRadius + "px",
                        borderColor: borderColor,
                        marginTop: marginT,
                        marginRight: marginR,
                        marginBottom: marginB,
                        marginLeft: marginL,
                        paddingTop: paddingT,
                        paddingRight: paddingR,
                        paddingBottom: paddingB,
                        paddingLeft: paddingL,
                        boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`,
                        backgroundColor: backColor,
                        backgroundImage: `url('${imageURL}')`,
                        backgroundRepeat: backgroundRepeat,
                        backgroundPosition: backgroundPosition,
                        backgroundSize: backgroundSize,
                        backgroundAttachment: fixed ? "fixed" : "unset",
                    }}
                >
                    {btnChecked && btnText && (
                        <style
                            dangerouslySetInnerHTML={{
                                __html: [
                                    `#premium-icon-box-${id}:hover {`,
                                    `box-shadow: ${hoverShadowHorizontal}px ${hoverShadowVertical}px ${hoverShadowBlur}px ${hoverShadowColor} ${hoverShadowPosition} !important`,
                                    "}",
                                    `#premium-icon-box-${id} .premium-icon-box__btn:hover {`,
                                    `color: ${btnHoverColor} !important;`,
                                    `border-color: ${btnHoverBorder} !important;`,
                                    "}",
                                    `#premium-icon-box-${id} .premium-button__none .premium-icon-box__btn:hover {`,
                                    `background-color: ${btnHoverBack} !important;`,
                                    "}",
                                    `#premium-icon-box-${id} .premium-button__slide .premium-button::before {`,
                                    `background-color: ${btnHoverBack} !important;`,
                                    "}",
                                ].join("\n"),
                            }}
                        />
                    )}
                    {iconChecked && (
                        <div className={`${className}__icon_wrap`}>
                            {"icon" === iconImage && selectedIcon && (
                                <i
                                    className={`${selectedIcon} ${className}__icon premium-icon__${hoverEffect}`}
                                    style={{
                                        color: iconColor,
                                        backgroundColor: iconBackColor,
                                        fontSize: iconSize,
                                    }}
                                />
                            )}
                            {"image" === iconImage && iconImgUrl && (
                                <img
                                    className={`${className}__icon premium-icon__${hoverEffect}`}
                                    src={`${iconImgUrl}`}
                                    alt="Image Icon"
                                    style={{
                                        width: iconSize + "px",
                                        height: iconSize + "px",
                                        borderRadius: iconRadius + "px",
                                    }}
                                />
                            )}
                        </div>
                    )}
                    {titleChecked && titleText && (
                        <div
                            className={`${className}__title_wrap`}
                            style={{
                                marginTop: titleMarginT,
                                marginBottom: titleMarginB,
                            }}
                        >
                            <RichText.Content
                                tagName={titleTag.toLowerCase()}
                                className={`${className}__title`}
                                value={titleText}
                                style={{
                                    color: titleColor,
                                    fontSize: titleSize + "px",
                                    letterSpacing: titleLetter + "px",
                                    textTransform: titleUpper ? "uppercase" : "none",
                                    fontStyle: titleStyle,
                                    fontWeight: titleWeight,
                                    textShadow: `${titleShadowHorizontal}px ${titleShadowVertical}px ${titleShadowBlur}px ${titleShadowColor}`,
                                    lineHeight: titleLine + "px",
                                }}
                            />
                        </div>
                    )}
                    {descChecked && descText && (
                        <div
                            className={`${className}__desc_wrap`}
                            style={{
                                marginTop: descMarginT,
                                marginBottom: descMarginB,
                            }}
                        >
                            <RichText.Content
                                tagName="p"
                                className={`${className}__desc`}
                                value={descText}
                                style={{
                                    color: descColor,
                                    fontSize: descSize + "px",
                                    lineHeight: descLine + "px",
                                    fontWeight: descWeight,
                                }}
                            />
                        </div>
                    )}
                    {btnChecked && btnText && (
                        <div
                            className={`${className}__btn_wrap premium-button__${btnEffect} premium-button__${effectDir}`}
                            style={{
                                marginTop: btnMarginT,
                                marginBottom: btnMarginB,
                            }}
                        >
                            <RichText.Content
                                tagName="a"
                                className={`${className}__btn premium-button`}
                                href={btnLink}
                                rel="noopener noreferrer"
                                target={btnTarget ? "_blank" : "_self"}
                                value={btnText}
                                style={{
                                    color: btnColor,
                                    backgroundColor: btnBack,
                                    fontSize: btnSize + "px",
                                    letterSpacing: btnLetter + "px",
                                    textTransform: btnUpper ? "uppercase" : "none",
                                    fontStyle: btnStyle,
                                    fontWeight: btnWeight,
                                    border: btnBorderType,
                                    borderWidth: btnBorderWidth + "px",
                                    borderRadius: btnBorderRadius + "px",
                                    borderColor: btnBorderColor,
                                    padding: btnPadding + "px",
                                    boxShadow: `${btnShadowHorizontal}px ${btnShadowVertical}px ${btnShadowBlur}px ${btnShadowColor} ${btnShadowPosition}`,
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
            let newAttributes = {
                iconBackColor: "",
            };
            return Object.assign(attributes, newAttributes);
        },
        save: (props) => {
            const {
                id,
                align,
                iconImage,
                iconImgUrl,
                iconRadius,
                selectedIcon,
                iconChecked,
                hoverEffect,
                iconSize,
                iconColor,
                titleChecked,
                titleText,
                titleTag,
                titleColor,
                titleSize,
                titleLine,
                titleLetter,
                titleStyle,
                titleUpper,
                titleWeight,
                titleShadowBlur,
                titleShadowColor,
                titleShadowHorizontal,
                titleShadowVertical,
                titleMarginT,
                titleMarginB,
                descChecked,
                descText,
                descColor,
                descSize,
                descLine,
                descWeight,
                descMarginT,
                descMarginB,
                btnChecked,
                btnEffect,
                effectDir,
                btnText,
                btnTarget,
                btnLink,
                btnSize,
                btnStyle,
                btnUpper,
                btnWeight,
                btnLetter,
                btnColor,
                btnHoverColor,
                btnHoverBorder,
                btnBack,
                btnHoverBack,
                btnBorderWidth,
                btnBorderRadius,
                btnBorderColor,
                btnBorderType,
                btnPadding,
                btnMarginT,
                btnMarginB,
                btnShadowBlur,
                btnShadowColor,
                btnShadowHorizontal,
                btnShadowVertical,
                btnShadowPosition,
                backColor,
                imageURL,
                fixed,
                backgroundRepeat,
                backgroundPosition,
                backgroundSize,
                borderType,
                borderWidth,
                borderRadius,
                borderColor,
                marginT,
                marginR,
                marginB,
                marginL,
                paddingT,
                paddingR,
                paddingB,
                paddingL,
                shadowBlur,
                shadowColor,
                shadowHorizontal,
                shadowVertical,
                shadowPosition,
                hoverShadowBlur,
                hoverShadowColor,
                hoverShadowHorizontal,
                hoverShadowVertical,
                hoverShadowPosition,
            } = props.attributes;

            return (
                <div
                    id={`${className}-${id}`}
                    className={`${className}`}
                    style={{
                        textAlign: align,
                        border: borderType,
                        borderWidth: borderWidth + "px",
                        borderRadius: borderRadius + "px",
                        borderColor: borderColor,
                        marginTop: marginT,
                        marginRight: marginR,
                        marginBottom: marginB,
                        marginLeft: marginL,
                        paddingTop: paddingT,
                        paddingRight: paddingR,
                        paddingBottom: paddingB,
                        paddingLeft: paddingL,
                        boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`,
                        backgroundColor: backColor,
                        backgroundImage: `url('${imageURL}')`,
                        backgroundRepeat: backgroundRepeat,
                        backgroundPosition: backgroundPosition,
                        backgroundSize: backgroundSize,
                        backgroundAttachment: fixed ? "fixed" : "unset",
                    }}
                >
                    {btnChecked && btnText && (
                        <style
                            dangerouslySetInnerHTML={{
                                __html: [
                                    `#premium-icon-box-${id}:hover {`,
                                    `box-shadow: ${hoverShadowHorizontal}px ${hoverShadowVertical}px ${hoverShadowBlur}px ${hoverShadowColor} ${hoverShadowPosition} !important`,
                                    "}",
                                    `#premium-icon-box-${id} .premium-icon-box__btn:hover {`,
                                    `color: ${btnHoverColor} !important;`,
                                    `border-color: ${btnHoverBorder} !important;`,
                                    "}",
                                    `#premium-icon-box-${id} .premium-button__none .premium-icon-box__btn:hover {`,
                                    `background-color: ${btnHoverBack} !important;`,
                                    "}",
                                    `#premium-icon-box-${id} .premium-button__slide .premium-button::before {`,
                                    `background-color: ${btnHoverBack} !important;`,
                                    "}",
                                ].join("\n"),
                            }}
                        />
                    )}
                    {iconChecked && (
                        <div className={`${className}__icon_wrap`}>
                            {"icon" === iconImage && selectedIcon && (
                                <i
                                    className={`${selectedIcon} ${className}__icon premium-icon__${hoverEffect}`}
                                    style={{
                                        color: iconColor,
                                        fontSize: iconSize,
                                    }}
                                />
                            )}
                            {"image" === iconImage && iconImgUrl && (
                                <img
                                    className={`${className}__icon premium-icon__${hoverEffect}`}
                                    src={`${iconImgUrl}`}
                                    alt="Image Icon"
                                    style={{
                                        width: iconSize + "px",
                                        height: iconSize + "px",
                                        borderRadius: iconRadius + "px",
                                    }}
                                />
                            )}
                        </div>
                    )}
                    {titleChecked && titleText && (
                        <div
                            className={`${className}__title_wrap`}
                            style={{
                                marginTop: titleMarginT,
                                marginBottom: titleMarginB,
                            }}
                        >
                            <RichText.Content
                                tagName={titleTag.toLowerCase()}
                                className={`${className}__title`}
                                value={titleText}
                                style={{
                                    color: titleColor,
                                    fontSize: titleSize + "px",
                                    letterSpacing: titleLetter + "px",
                                    textTransform: titleUpper ? "uppercase" : "none",
                                    fontStyle: titleStyle,
                                    fontWeight: titleWeight,
                                    textShadow: `${titleShadowHorizontal}px ${titleShadowVertical}px ${titleShadowBlur}px ${titleShadowColor}`,
                                    lineHeight: titleLine + "px",
                                }}
                            />
                        </div>
                    )}
                    {descChecked && descText && (
                        <div
                            className={`${className}__desc_wrap`}
                            style={{
                                marginTop: descMarginT,
                                marginBottom: descMarginB,
                            }}
                        >
                            <RichText.Content
                                tagName="p"
                                className={`${className}__desc`}
                                value={descText}
                                style={{
                                    color: descColor,
                                    fontSize: descSize + "px",
                                    lineHeight: descLine + "px",
                                    fontWeight: descWeight,
                                }}
                            />
                        </div>
                    )}
                    {btnChecked && btnText && (
                        <div
                            className={`${className}__btn_wrap premium-button__${btnEffect} premium-button__${effectDir}`}
                            style={{
                                marginTop: btnMarginT,
                                marginBottom: btnMarginB,
                            }}
                        >
                            <RichText.Content
                                tagName="a"
                                className={`${className}__btn premium-button`}
                                href={btnLink}
                                target={btnTarget ? "_blank" : "_self"}
                                value={btnText}
                                style={{
                                    color: btnColor,
                                    backgroundColor: btnBack,
                                    fontSize: btnSize + "px",
                                    letterSpacing: btnLetter + "px",
                                    textTransform: btnUpper ? "uppercase" : "none",
                                    fontStyle: btnStyle,
                                    fontWeight: btnWeight,
                                    border: btnBorderType,
                                    borderWidth: btnBorderWidth + "px",
                                    borderRadius: btnBorderRadius + "px",
                                    borderColor: btnBorderColor,
                                    padding: btnPadding + "px",
                                    boxShadow: `${btnShadowHorizontal}px ${btnShadowVertical}px ${btnShadowBlur}px ${btnShadowColor} ${btnShadowPosition}`,
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
            let newAttributes = {
                hoverShadowColor: "",
                hoverShadowBlur: "",
                hoverShadowHorizontal: "",
                hoverShadowVertical: "",
                hoverShadowPosition: "",
            };
            return Object.assign(attributes, newAttributes);
        },
        save: (props) => {
            const {
                id,
                align,
                iconImage,
                iconImgUrl,
                iconRadius,
                selectedIcon,
                iconChecked,
                hoverEffect,
                iconSize,
                iconColor,
                titleChecked,
                titleText,
                titleTag,
                titleColor,
                titleSize,
                titleLine,
                titleLetter,
                titleStyle,
                titleUpper,
                titleWeight,
                titleShadowBlur,
                titleShadowColor,
                titleShadowHorizontal,
                titleShadowVertical,
                titleMarginT,
                titleMarginB,
                descChecked,
                descText,
                descColor,
                descSize,
                descLine,
                descWeight,
                descMarginT,
                descMarginB,
                btnChecked,
                btnEffect,
                effectDir,
                btnText,
                btnTarget,
                btnLink,
                btnSize,
                btnStyle,
                btnUpper,
                btnWeight,
                btnLetter,
                btnColor,
                btnHoverColor,
                btnHoverBorder,
                btnBack,
                btnHoverBack,
                btnBorderWidth,
                btnBorderRadius,
                btnBorderColor,
                btnBorderType,
                btnPadding,
                btnMarginT,
                btnMarginB,
                btnShadowBlur,
                btnShadowColor,
                btnShadowHorizontal,
                btnShadowVertical,
                btnShadowPosition,
                backColor,
                imageURL,
                fixed,
                backgroundRepeat,
                backgroundPosition,
                backgroundSize,
                borderType,
                borderWidth,
                borderRadius,
                borderColor,
                marginT,
                marginR,
                marginB,
                marginL,
                paddingT,
                paddingR,
                paddingB,
                paddingL,
                shadowBlur,
                shadowColor,
                shadowHorizontal,
                shadowVertical,
                shadowPosition,
            } = props.attributes;

            return (
                <div
                    id={`${className}-${id}`}
                    className={`${className}`}
                    style={{
                        textAlign: align,
                        border: borderType,
                        borderWidth: borderWidth + "px",
                        borderRadius: borderRadius + "px",
                        borderColor: borderColor,
                        marginTop: marginT,
                        marginRight: marginR,
                        marginBottom: marginB,
                        marginLeft: marginL,
                        paddingTop: paddingT,
                        paddingRight: paddingR,
                        paddingBottom: paddingB,
                        paddingLeft: paddingL,
                        boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`,
                        backgroundColor: backColor,
                        backgroundImage: `url('${imageURL}')`,
                        backgroundRepeat: backgroundRepeat,
                        backgroundPosition: backgroundPosition,
                        backgroundSize: backgroundSize,
                        backgroundAttachment: fixed ? "fixed" : "unset",
                    }}
                >
                    {btnChecked && btnText && (
                        <style
                            dangerouslySetInnerHTML={{
                                __html: [
                                    `#premium-icon-box-${id} .premium-icon-box__btn:hover {`,
                                    `color: ${btnHoverColor} !important;`,
                                    `border-color: ${btnHoverBorder} !important;`,
                                    "}",
                                    `#premium-icon-box-${id} .premium-button__none .premium-icon-box__btn:hover {`,
                                    `background-color: ${btnHoverBack} !important;`,
                                    "}",
                                    `#premium-icon-box-${id} .premium-button__slide .premium-button::before {`,
                                    `background-color: ${btnHoverBack} !important;`,
                                    "}",
                                ].join("\n"),
                            }}
                        />
                    )}
                    {iconChecked && (
                        <div className={`${className}__icon_wrap`}>
                            {"icon" === iconImage && selectedIcon && (
                                <i
                                    className={`${selectedIcon} ${className}__icon premium-icon__${hoverEffect}`}
                                    style={{
                                        color: iconColor,
                                        fontSize: iconSize,
                                    }}
                                />
                            )}
                            {"image" === iconImage && iconImgUrl && (
                                <img
                                    className={`${className}__icon premium-icon__${hoverEffect}`}
                                    src={`${iconImgUrl}`}
                                    alt="Image Icon"
                                    style={{
                                        width: iconSize + "px",
                                        height: iconSize + "px",
                                        borderRadius: iconRadius + "px",
                                    }}
                                />
                            )}
                        </div>
                    )}
                    {titleChecked && titleText && (
                        <div
                            className={`${className}__title_wrap`}
                            style={{
                                marginTop: titleMarginT,
                                marginBottom: titleMarginB,
                            }}
                        >
                            <RichText.Content
                                tagName={titleTag.toLowerCase()}
                                className={`${className}__title`}
                                value={titleText}
                                style={{
                                    color: titleColor,
                                    fontSize: titleSize + "px",
                                    letterSpacing: titleLetter + "px",
                                    textTransform: titleUpper ? "uppercase" : "none",
                                    fontStyle: titleStyle,
                                    fontWeight: titleWeight,
                                    textShadow: `${titleShadowHorizontal}px ${titleShadowVertical}px ${titleShadowBlur}px ${titleShadowColor}`,
                                    lineHeight: titleLine + "px",
                                }}
                            />
                        </div>
                    )}
                    {descChecked && descText && (
                        <div
                            className={`${className}__desc_wrap`}
                            style={{
                                marginTop: descMarginT,
                                marginBottom: descMarginB,
                            }}
                        >
                            <RichText.Content
                                tagName="p"
                                className={`${className}__desc`}
                                value={descText}
                                style={{
                                    color: descColor,
                                    fontSize: descSize + "px",
                                    lineHeight: descLine + "px",
                                    fontWeight: descWeight,
                                }}
                            />
                        </div>
                    )}
                    {btnChecked && btnText && (
                        <div
                            className={`${className}__btn_wrap premium-button__${btnEffect} premium-button__${effectDir}`}
                            style={{
                                marginTop: btnMarginT,
                                marginBottom: btnMarginB,
                            }}
                        >
                            <RichText.Content
                                tagName="a"
                                className={`${className}__btn premium-button`}
                                href={btnLink}
                                target={btnTarget ? "_blank" : "_self"}
                                value={btnText}
                                style={{
                                    color: btnColor,
                                    backgroundColor: btnBack,
                                    fontSize: btnSize + "px",
                                    letterSpacing: btnLetter + "px",
                                    textTransform: btnUpper ? "uppercase" : "none",
                                    fontStyle: btnStyle,
                                    fontWeight: btnWeight,
                                    border: btnBorderType,
                                    borderWidth: btnBorderWidth + "px",
                                    borderRadius: btnBorderRadius + "px",
                                    borderColor: btnBorderColor,
                                    padding: btnPadding + "px",
                                    boxShadow: `${btnShadowHorizontal}px ${btnShadowVertical}px ${btnShadowBlur}px ${btnShadowColor} ${btnShadowPosition}`,
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
            return {
                iconSize: attributes.iconSize,
            };
        },
        save: (props) => {
            const {
                id,
                align,
                iconType,
                iconImage,
                iconImgUrl,
                iconRadius,
                selectedIcon,
                iconChecked,
                hoverEffect,
                iconSize,
                iconColor,
                titleChecked,
                titleText,
                titleTag,
                titleColor,
                titleSize,
                titleLine,
                titleLetter,
                titleStyle,
                titleUpper,
                titleWeight,
                titleShadowBlur,
                titleShadowColor,
                titleShadowHorizontal,
                titleShadowVertical,
                titleMarginT,
                titleMarginB,
                descChecked,
                descText,
                descColor,
                descSize,
                descLine,
                descWeight,
                descMarginT,
                descMarginB,
                btnChecked,
                btnText,
                btnTarget,
                btnLink,
                btnSize,
                btnStyle,
                btnUpper,
                btnWeight,
                btnLetter,
                btnColor,
                btnHoverColor,
                btnHoverBorder,
                btnBack,
                btnHoverBack,
                btnBorderWidth,
                btnBorderRadius,
                btnBorderColor,
                btnBorderType,
                btnPadding,
                btnMarginT,
                btnMarginB,
                btnShadowBlur,
                btnShadowColor,
                btnShadowHorizontal,
                btnShadowVertical,
                btnShadowPosition,
                backColor,
                imageURL,
                fixed,
                backgroundRepeat,
                backgroundPosition,
                backgroundSize,
                borderType,
                borderWidth,
                borderRadius,
                borderColor,
                marginT,
                marginR,
                marginB,
                marginL,
                paddingT,
                paddingR,
                paddingB,
                paddingL,
                shadowBlur,
                shadowColor,
                shadowHorizontal,
                shadowVertical,
                shadowPosition,
            } = props.attributes;

            return (
                <div
                    id={`${className}-${id}`}
                    className={`${className}`}
                    style={{
                        textAlign: align,
                        border: borderType,
                        borderWidth: borderWidth + "px",
                        borderRadius: borderRadius + "px",
                        borderColor: borderColor,
                        marginTop: marginT,
                        marginRight: marginR,
                        marginBottom: marginB,
                        marginLeft: marginL,
                        paddingTop: paddingT,
                        paddingRight: paddingR,
                        paddingBottom: paddingB,
                        paddingLeft: paddingL,
                        boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`,
                        backgroundColor: backColor,
                        backgroundImage: `url('${imageURL}')`,
                        backgroundRepeat: backgroundRepeat,
                        backgroundPosition: backgroundPosition,
                        backgroundSize: backgroundSize,
                        backgroundAttachment: fixed ? "fixed" : "unset",
                    }}
                >
                    {btnChecked && btnText && (
                        <style
                            dangerouslySetInnerHTML={{
                                __html: [
                                    `#premium-icon-box-${id} .premium-icon-box__btn:hover {`,
                                    `color: ${btnHoverColor} !important;`,
                                    `background-color: ${btnHoverBack} !important;`,
                                    `border-color: ${btnHoverBorder} !important;`,
                                    "}",
                                ].join("\n"),
                            }}
                        />
                    )}
                    {iconChecked && (
                        <div className={`${className}__icon_wrap`}>
                            {"icon" === iconImage && selectedIcon && (
                                <i
                                    className={`${selectedIcon} ${className}__icon premium-icon__${hoverEffect}`}
                                    style={{
                                        color: iconColor,
                                        fontSize: iconSize,
                                    }}
                                />
                            )}
                            {"image" === iconImage && iconImgUrl && (
                                <img
                                    className={`${className}__icon premium-icon__${hoverEffect}`}
                                    src={`${iconImgUrl}`}
                                    alt="Image Icon"
                                    style={{
                                        width: iconSize + "px",
                                        height: iconSize + "px",
                                        borderRadius: iconRadius + "px",
                                    }}
                                />
                            )}
                        </div>
                    )}
                    {titleChecked && titleText && (
                        <div
                            className={`${className}__title_wrap`}
                            style={{
                                marginTop: titleMarginT,
                                marginBottom: titleMarginB,
                            }}
                        >
                            <RichText.Content
                                tagName={titleTag.toLowerCase()}
                                className={`${className}__title`}
                                value={titleText}
                                style={{
                                    color: titleColor,
                                    fontSize: titleSize + "px",
                                    letterSpacing: titleLetter + "px",
                                    textTransform: titleUpper ? "uppercase" : "none",
                                    fontStyle: titleStyle,
                                    fontWeight: titleWeight,
                                    textShadow: `${titleShadowHorizontal}px ${titleShadowVertical}px ${titleShadowBlur}px ${titleShadowColor}`,
                                    lineHeight: titleLine + "px",
                                }}
                            />
                        </div>
                    )}
                    {descChecked && descText && (
                        <div
                            className={`${className}__desc_wrap`}
                            style={{
                                marginTop: descMarginT,
                                marginBottom: descMarginB,
                            }}
                        >
                            <RichText.Content
                                tagName="p"
                                className={`${className}__desc`}
                                value={descText}
                                style={{
                                    color: descColor,
                                    fontSize: descSize + "px",
                                    lineHeight: descLine + "px",
                                    fontWeight: descWeight,
                                }}
                            />
                        </div>
                    )}
                    {btnChecked && btnText && (
                        <div
                            className={`${className}__btn_wrap`}
                            style={{
                                marginTop: btnMarginT,
                                marginBottom: btnMarginB,
                            }}
                        >
                            <RichText.Content
                                tagName="a"
                                className={`${className}__btn`}
                                href={btnLink}
                                target={btnTarget ? "_blank" : "_self"}
                                value={btnText}
                                style={{
                                    color: btnColor,
                                    backgroundColor: btnBack,
                                    fontSize: btnSize + "px",
                                    letterSpacing: btnLetter + "px",
                                    textTransform: btnUpper ? "uppercase" : "none",
                                    fontStyle: btnStyle,
                                    fontWeight: btnWeight,
                                    border: btnBorderType,
                                    borderWidth: btnBorderWidth + "px",
                                    borderRadius: btnBorderRadius + "px",
                                    borderColor: btnBorderColor,
                                    padding: btnPadding + "px",
                                    boxShadow: `${btnShadowHorizontal}px ${btnShadowVertical}px ${btnShadowBlur}px ${btnShadowColor} ${btnShadowPosition}`,
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