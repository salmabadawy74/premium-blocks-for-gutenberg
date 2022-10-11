import classnames from "classnames";
const { __ } = wp.i18n;
const className = "premium-dheading-block";
import hexToRgba from 'hex-to-rgba'

const attributes = {
    block_id: {
        type: "string"
    },
    contentAlign: {
        type: "string",
        default: "center"
    },
    firstHeading: {
        type: "array",
        source: "children",
        default: "Premium ",
        selector: ".premium-dheading-block__first"
    },
    secondHeading: {
        type: "array",
        source: "children",
        default: "Blocks",
        selector: ".premium-dheading-block__second"
    },
    titleTag: {
        type: "string",
        default: "h1"
    },
    display: {
        type: "string",
        default: "inline"
    },
    firstColor: {
        type: "string",
        default: "#6ec1e4"
    },
    firstSize: {
        type: "number",
        default: "20"
    },
    firstSizeUnit: {
        type: "string",
        default: 'px'
    },
    firstSizeTablet: {
        type: "number"
    },
    firstSizeMobile: {
        type: "number"
    },
    firstFamily: {
        type: "string"
    },
    firstLetter: {
        type: "number"
    },
    firstStyle: {
        type: "string"
    },
    firstUpper: {
        type: "boolean"
    },
    firstWeight: {
        type: "number",
        default: 500
    },
    firstBackground: {
        type: "string"
    },
    firstOpacity: {
        type: "number",
        default: "1"
    },
    firstBorderType: {
        type: "string",
        default: "none"
    },
    firstBorderWidth: {
        type: "number",
        default: "1"
    },
    firstBorder: {
        type: "boolean",
        default: false
    },
    firstBorderTop: {
        type: "number"
    },
    firstBorderRight: {
        type: "number"
    },
    firstBorderBottom: {
        type: "number"
    },
    firstBorderLeft: {
        type: "number"
    },
    firstBorderRadius: {
        type: "number",
        default: "0"
    },
    firstBorderColor: {
        type: "string"
    },
    firstMarginR: {
        type: "number",
        default: "0"
    },
    firstMarginL: {
        type: "number",
        default: "0"
    },
    firstPadding: {
        type: "number",
        default: "0"
    },
    firstClip: {
        type: "boolean",
        default: false
    },
    firstAnim: {
        type: "boolean",
        default: false
    },
    firstStroke: {
        type: "boolean",
        default: false
    },
    firstClipColor: {
        type: "string",
        default: "#54595f"
    },
    firstShadowColor: {
        type: "string"
    },
    firstShadowBlur: {
        type: "number",
        default: "0"
    },
    firstShadowHorizontal: {
        type: "number",
        default: "0"
    },
    firstShadowVertical: {
        type: "number",
        default: "0"
    },
    secondColor: {
        type: "string",
        default: "#54595f"
    },
    secondSize: {
        type: "number",
        default: "20"
    },
    secondSizeUnit: {
        type: "string",
        default: 'px'
    },
    secondSizeTablet: {
        type: "number"
    },
    secondSizeMobile: {
        type: "number"
    },
    secondFamily: {
        type: "string"
    },
    secondLetter: {
        type: "number"
    },
    secondStyle: {
        type: "string"
    },
    secondUpper: {
        type: "boolean"
    },
    secondWeight: {
        type: "number",
        default: 500
    },
    secondBackground: {
        type: "string"
    },
    secondOpacity: {
        type: "number",
        default: "1"
    },
    secondBorderType: {
        type: "string",
        default: "none"
    },
    secondBorderWidth: {
        type: "number",
        default: "1"
    },
    secondBorder: {
        type: "boolean",
        default: false
    },
    secondBorderTop: {
        type: "number"
    },
    secondBorderRight: {
        type: "number"
    },
    secondBorderBottom: {
        type: "number"
    },
    secondBorderLeft: {
        type: "number"
    },
    secondBorderRadius: {
        type: "number",
        default: "0"
    },
    secondBorderColor: {
        type: "string"
    },
    secondMarginR: {
        type: "number",
        default: "0"
    },
    secondMarginL: {
        type: "number",
        default: "0"
    },
    secondPadding: {
        type: "number",
        default: "0"
    },
    secondClip: {
        type: "boolean",
        default: false
    },
    secondStroke: {
        type: "boolean",
        default: false
    },
    secondShadowColor: {
        type: "string"
    },
    secondShadowBlur: {
        type: "number",
        default: "0"
    },
    secondShadowHorizontal: {
        type: "number",
        default: "0"
    },
    secondShadowVertical: {
        type: "number",
        default: "0"
    },
    secondAnim: {
        type: "boolean",
        default: false
    },
    secondClipColor: {
        type: "string",
        default: "#6ec1e4"
    },
    link: {
        type: "boolean",
        default: false
    },
    target: {
        type: "boolean",
        default: false
    },
    headingURL: {
        type: "string"
    },
    containerBack: {
        type: "string"
    },
    containerOpacity: {
        type: "number",
        default: "1"
    },
    imageID: {
        type: "string"
    },
    imageURL: {
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
    containerBorderType: {
        type: "string",
        default: "none"
    },
    containerBorderWidth: {
        type: "number",
        default: "1"
    },
    containerBorder: {
        type: "boolean",
        default: false
    },
    containerBorderTop: {
        type: "number"
    },
    containerBorderRight: {
        type: "number"
    },
    containerBorderBottom: {
        type: "number",
    },
    containerBorderLeft: {
        type: "number"
    },
    containerBorderRadius: {
        type: "number",
        default: "0"
    },
    containerBorderColor: {
        type: "string"
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
    }
}
const new_attributes = {
    firstStyles: {
        type: "array",
        default: [
            {
                firstClip: false,
                firstAnim: false,
                firstStroke: false,
                firstFamily: __('Default', 'premium-blocks-for-gutenebrg'),
                firstSizeUnit: 'px',
                firstSize: '',
                firstSizeMobile: '',
                firstWeight: '',
                firstStyle: '',
                firstLetter: '',
                firstUpper: false,
                firstColor: '',
                firstBackground: '',
                firstOpacity: '1',
                firstClipColor: "#54595f",
                firstBorderType: 'none',
                firstBorderWidth: '',
                firstBorderColor: '',
                firstBorderRadius: 0,
                firstShadowColor: '',
                firstShadowBlur: 0,
                firstShadowHorizontal: 0,
                firstShadowVertical: 0,
                firstMarginL: 0,
                firstMarginR: 0,
                firstPadding: 0,
            }
        ]
    },
    secondStyles: {
        type: "array",
        default: [
            {
                secondClip: false,
                secondAnim: false,
                secondStroke: false,
                secondFamily: __('Default', 'premium-blocks-for-gutenberg'),
                secondSizeUnit: 'px',
                secondSize: '20',
                secondSizeTablet: '',
                secondSizeMobile: '',
                secondWeight: '',
                secondStyle: '',
                secondLetter: '',
                secondUpper: false,
                secondColor: "#54595f",
                secondBackground: '',
                secondOpacity: '',
                secondClipColor: "#6ec1e4",
                secondBorderType: "none",
                secondBorderWidth: '1',
                secondBorderColor: '',
                secondBorderRadius: '0',
                secondShadowColor: '',
                secondShadowBlur: '0',
                secondShadowHorizontal: '0',
                secondShadowVertical: '0',
                secondMarginL: '0',
                secondMarginR: '0',
                secondPadding: '0',

            }
        ]
    },
    containerStyles: {
        type: 'array',
        default: [
            {
                backgroundImageID: '',
                backgroundImageURL: '',
                backgroundRepeat: 'no-reapet',
                backgroundPosition: 'top center',
                backgroundSize: 'auto',
                fixed: false,
                containerBorderType: "none",
                containerBorderWidth: "1",
                containerBorderColor: '',
                containerBorderRadius: '0',
                containerBack: '',
                containerOpacity: 1,
                gradientLocationOne: '0',
                gradientColorTwo: '',
                gradientLocationTwo: '100',
                gradientType: 'linear',
                gradientAngle: '180',
                gradientPosition: 'center center'
            }
        ]
    },
    backgroundType: {
        type: "string",
        default: ""
    },
}
const deprecated_attributes = Object.assign(attributes, new_attributes)

const v8Attriutes = {
    block_id: {
        type: "string"
    },
    contentAlign: {
        type: "string",
        default: "center"
    },
    firstHeading: {
        type: "array",
        source: "children",
        default: "Premium ",
        selector: ".premium-dheading-block__first"
    },
    secondHeading: {
        type: "array",
        source: "children",
        default: "Blocks",
        selector: ".premium-dheading-block__second"
    },
    titleTag: {
        type: "string",
        default: "h1"
    },
    display: {
        type: "string",
        default: "inline"
    },
    firstStyles: {
        type: "array",
        default: [
            {
                firstClip: false,
                firstAnim: false,
                firstStroke: false,
                firstFamily: __('Default', 'premium-blocks-for-gutenebrg'),
                firstSizeUnit: 'px',
                firstSize: '',
                firstSizeMobile: '',
                firstWeight: '',
                firstStyle: '',
                firstLetter: '',
                firstUpper: false,
                firstColor: '',
                firstBackground: '',
                firstOpacity: '1',
                firstClipColor: "#54595f",
                firstBorderType: 'none',
                firstBorderWidth: '',
                firstBorderColor: '',
                firstBorderRadius: 0,
                firstShadowColor: '',
                firstShadowBlur: 0,
                firstShadowHorizontal: 0,
                firstShadowVertical: 0,
                firstMarginL: 0,
                firstMarginR: 0,
                firstPadding: 0,
            }
        ]
    },
    secondStyles: {
        type: "array",
        default: [
            {
                secondClip: false,
                secondAnim: false,
                secondStroke: false,
                secondFamily: __('Default', 'premium-blocks-for-gutenberg'),
                secondSizeUnit: 'px',
                secondSize: '20',
                secondSizeTablet: '',
                secondSizeMobile: '',
                secondWeight: '',
                secondStyle: '',
                secondLetter: '',
                secondUpper: false,
                secondColor: "#54595f",
                secondBackground: '',
                secondOpacity: '',
                secondClipColor: "#6ec1e4",
                secondBorderType: "none",
                secondBorderWidth: '1',
                secondBorderColor: '',
                secondBorderRadius: '0',
                secondShadowColor: '',
                secondShadowBlur: '0',
                secondShadowHorizontal: '0',
                secondShadowVertical: '0',
                secondMarginL: '0',
                secondMarginR: '0',
                secondPadding: '0',

            }
        ]
    },
    containerStyles: {
        type: 'array',
        default: [
            {
                backgroundImageID: '',
                backgroundImageURL: '',
                backgroundRepeat: 'no-reapet',
                backgroundPosition: 'top center',
                backgroundSize: 'auto',
                fixed: false,
                containerBorderType: "none",
                containerBorderWidth: "1",
                containerBorderColor: '',
                containerBorderRadius: '0',
                containerBack: '',
                containerOpacity: 1,
                gradientLocationOne: '0',
                gradientColorTwo: '',
                gradientLocationTwo: '100',
                gradientType: 'linear',
                gradientAngle: '180',
                gradientPosition: 'center center'
            }
        ]
    },
    containerBorder: {
        type: 'boolean',
        default: false
    },
    firstBorder: {
        type: 'boolean',
        default: false
    },
    secondBorder: {
        type: 'boolean',
        default: false
    },
    containerBorderTop: {
        type: 'number'
    },
    containerBorderRight: {
        type: 'number'
    },
    containerBorderBottom: {
        type: 'number'
    },
    containerBorderLeft: {
        type: 'number'
    },
    firstBorderTop: {
        type: 'number'
    },
    firstBorderRight: {
        type: 'number'
    },
    firstBorderBottom: {
        type: 'number'
    },
    firstBorderLeft: {
        type: 'number'
    },
    secondBorderTop: {
        type: 'number'
    },
    secondBorderRight: {
        type: 'number'
    },
    secondBorderBottom: {
        type: 'number'
    },
    secondBorderLeft: {
        type: 'number'
    },
    link: {
        type: "boolean",
        default: false
    },
    target: {
        type: "boolean",
        default: false
    },
    headingURL: {
        type: "string"
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
    secondBorder: {
        type: 'boolean',
        default: false
    },
    backgroundType: {
        type: "string",
        default: ""
    }
}

const deprecatedContent = [
    {
        attributes: v8Attriutes,
        migrate: attributes => {
            let newAttributes = {
                blockId: attributes.accordionId ? `premium-dual-heading-${attributes.accordionId.split('-')[2]}` : '',
                align: {
                    Desktop: attributes?.contentAlign || "center",
                    Tablet: attributes?.contentAlign || "center",
                    Mobile: attributes?.contentAlign || "center"
                },
                firstBorder: {
                    "borderType": attributes?.firstStyles?.[0]?.firstBorderType || '',
                    "borderColor": attributes?.firstStyles?.[0]?.firstBorderColor || '',
                    "borderWidth": {
                        Desktop: {
                            top: attributes?.firstBorderTop || '',
                            right: attributes?.firstBorderRight || '',
                            bottom: attributes?.firstBorderBottom || '',
                            left: attributes?.firstBorderLeft || ''
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
                            top: attributes?.firstStyles?.[0]?.firstBorderRadius || '',
                            right: attributes?.firstStyles?.[0]?.firstBorderRadius || '',
                            bottom: attributes?.firstStyles?.[0]?.firstBorderRadius || '',
                            left: attributes?.firstStyles?.[0]?.firstBorderRadius || ''
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
                secondBorder: {
                    "borderType": attributes?.secondStyles?.[0]?.secondBorderType || '',
                    "borderColor": attributes?.secondStyles?.[0]?.secondBorderColor || '',
                    "borderWidth": {
                        Desktop: {
                            top: attributes?.secondBorderTop || '',
                            right: attributes?.secondBorderRight || '',
                            bottom: attributes?.secondBorderBottom || '',
                            left: attributes?.secondBorderLeft || ''
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
                            top: attributes?.secondStyles?.[0]?.secondBorderRadius || '',
                            right: attributes?.secondStyles?.[0]?.secondBorderRadius || '',
                            bottom: attributes?.secondStyles?.[0]?.secondBorderRadius || '',
                            left: attributes?.secondStyles?.[0]?.secondBorderRadius || ''
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
                containerBorder: {
                    "borderType": attributes?.containerStyles?.[0]?.containerBorderType || '',
                    "borderColor": attributes?.containerStyles?.[0]?.containerBorderColor || '',
                    "borderWidth": {
                        Desktop: {
                            top: attributes?.containerBorderTop || '',
                            right: attributes?.containerBorderRight || '',
                            bottom: attributes?.containerBorderBottom || '',
                            left: attributes?.containerBorderLeft || ''
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
                            top: attributes?.containerStyles?.[0]?.containerBorderRadius || '',
                            right: attributes?.containerStyles?.[0]?.containerBorderRadius || '',
                            bottom: attributes?.containerStyles?.[0]?.containerBorderRadius || '',
                            left: attributes?.containerStyles?.[0]?.containerBorderRadius || ''
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
                firstTypography: {
                    "fontWeight": attributes?.firstStyles?.[0]?.firstWeight || '',
                    'fontStyle': attributes?.firstStyles?.[0]?.firstStyle || '',
                    'textTransform': attributes?.firstStyles?.[0]?.firstUpper || '',
                    'fontFamily': attributes?.firstStyles?.[0]?.firstFamily || '',
                    'textDecoration': '',
                    'lineHeight': {
                        'Desktop': '',
                        "Tablet": '',
                        "Mobile": '',
                        "unit": 'px'
                    },
                    'letterSpacing': {
                        'Desktop': attributes?.firstStyles?.[0]?.firstLetter || '',
                        "Tablet": attributes?.firstStyles?.[0]?.firstLetter || '',
                        "Mobile": attributes?.firstStyles?.[0]?.firstLetter || '',
                        "unit": 'px'
                    },
                    'fontSize': {
                        'Desktop': attributes?.firstStyles?.[0]?.firstSize || '',
                        "Tablet": attributes?.firstStyles?.[0]?.firstSizeTablet || '',
                        "Mobile": attributes?.firstStyles?.[0]?.firstSizeMobile || '',
                        "unit": attributes?.firstStyles?.[0]?.firstSizeUnit || 'px'
                    }
                },
                secondTypography: {
                    "fontWeight": attributes?.secondStyles?.[0]?.secondWeight || '',
                    'fontStyle': attributes?.secondStyles?.[0]?.secondStyle || '',
                    'textTransform': attributes?.secondStyles?.[0]?.secondUpper || '',
                    'fontFamily': attributes?.secondStyles?.[0]?.secondFamily || '',
                    'lineHeight': {
                        'Desktop': '',
                        "Tablet": '',
                        "Mobile": '',
                        "unit": 'px'
                    },
                    'letterSpacing': {
                        'Desktop': attributes?.secondStyles?.[0]?.secondLetter || '',
                        "Tablet": attributes?.secondStyles?.[0]?.secondLetter || '',
                        "Mobile": attributes?.secondStyles?.[0]?.secondLetter || '',
                        "unit": 'px'
                    },
                    'textDecoration': '',
                    'fontSize': {
                        'Desktop': attributes?.secondStyles?.[0]?.secondSize || '20',
                        "Tablet": attributes?.secondStyles?.[0]?.secondSizeTablet || '',
                        "Mobile": attributes?.secondStyles?.[0]?.secondSizeMobile || '',
                        "unit": attributes?.secondStyles?.[0]?.secondSizeUnit || 'px'
                    }
                },
                background: {
                    'backgroundType': attributes?.backgroundType || '',
                    'backgroundColor': attributes?.containerStyles?.[0]?.containerBack || '',
                    'backgroundImageID': attributes?.containerStyles?.[0]?.backgroundImageID || '',
                    'backgroundImageURL': attributes?.containerStyles?.[0]?.backgroundImageURL || '',
                    'backgroundPosition': attributes?.containerStyles?.[0]?.backgroundPosition || '',
                    'backgroundRepeat': attributes?.containerStyles?.[0]?.backgroundRepeat || '',
                    'backgroundSize': attributes?.containerStyles?.[0]?.backgroundSize || '',
                    'fixed': attributes?.containerStyles?.[0]?.fixed || '',
                    'gradientLocationOne': attributes?.containerStyles?.[0]?.gradientLocationOne || '',
                    'gradientColorTwo': attributes?.containerStyles?.[0]?.gradientColorTwo || '',
                    'gradientLocationTwo': attributes?.containerStyles?.[0]?.gradientLocationTwo || '',
                    'gradientAngle': attributes?.containerStyles?.[0]?.gradientAngle || '',
                    'gradientPosition': attributes?.containerStyles?.[0]?.gradientPosition || '',
                    'gradientType': attributes?.containerStyles?.[0]?.gradientType || ''
                },
                firstShadow: {
                    'color': attributes?.firstStyles?.[0]?.firstShadowColor || '',
                    'blur': attributes?.firstStyles?.[0]?.firstShadowBlur || '',
                    'horizontal': attributes?.firstStyles?.[0]?.firstShadowHorizontal || '',
                    'vertical': attributes?.firstStyles?.[0]?.firstShadowVertical || '',
                },
                secondShadow: {
                    'color': attributes?.secondStyles?.[0]?.secondShadowColor || '',
                    'blur': attributes?.secondStyles?.[0]?.secondShadowBlur || '',
                    'horizontal': attributes?.secondStyles?.[0]?.secondShadowHorizontal || '',
                    'vertical': attributes?.secondStyles?.[0]?.secondShadowVertical || '',
                },
                firstPadding: {
                    Desktop: {
                        top: attributes?.firstStyles?.[0]?.firstPadding || '',
                        right: attributes?.firstStyles?.[0]?.firstPadding || '',
                        bottom: attributes?.firstStyles?.[0]?.firstPadding || '',
                        left: attributes?.firstStyles?.[0]?.firstPadding || ''
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
                firstMargin: {
                    Desktop: {
                        top: '',
                        right: attributes?.firstStyles?.[0]?.firstMarginR || '',
                        bottom: '',
                        left: attributes?.firstStyles?.[0]?.firstMarginL || ''
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
                secondPadding: {
                    Desktop: {
                        top: attributes?.secondStyles?.[0]?.secondPadding || '',
                        right: attributes?.secondStyles?.[0]?.secondPadding || '',
                        bottom: attributes?.secondStyles?.[0]?.secondPadding || '',
                        left: attributes?.secondStyles?.[0]?.secondPadding || ''
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
                secondMargin: {
                    Desktop: {
                        top: '',
                        right: attributes?.secondStyles?.[0]?.secondMarginR || '',
                        bottom: '',
                        left: attributes?.secondStyles?.[0]?.secondMarginL || ''
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
            }
            return Object.assign(attributes, newAttributes)
        },
        save: props => {
            const { className } = props;

            const {
                block_id,
                contentAlign,
                firstHeading,
                secondHeading,
                display,
                firstStyles,
                secondStyles,
                containerStyles,
                link,
                target,
                headingURL,
                hideDesktop,
                hideTablet,
                hideMobile,
                containerBorderTop,
                containerBorderRight,
                containerBorderBottom,
                containerBorderLeft,
                firstBorderTop,
                firstBorderRight,
                firstBorderBottom,
                firstBorderLeft,
                secondBorderTop,
                secondBorderRight,
                secondBorderBottom,
                secondBorderLeft,
                firstBorder,
                secondBorder,
                containerBorder,
                backgroundType
            } = props.attributes;

            const mainClasses = classnames(
                className,
                "premium-dheading-block__container"
            );
            let btnGrad, btnGrad2, btnbg;
            if (undefined !== backgroundType && 'gradient' === backgroundType) {
                btnGrad = ('transparent' === containerStyles[0].containerBack || undefined === containerStyles[0].containerBack ? 'rgba(255,255,255,0)' : containerStyles[0].containerBack);
                btnGrad2 = (undefined !== containerStyles[0].gradientColorTwo && undefined !== containerStyles[0].gradientColorTwo && '' !== containerStyles[0].gradientColorTwo ? containerStyles[0].gradientColorTwo : '#777');
                if ('radial' === containerStyles[0].gradientType) {
                    btnbg = `radial-gradient(at ${containerStyles[0].gradientPosition}, ${btnGrad} ${containerStyles[0].gradientLocationOne}%, ${btnGrad2} ${containerStyles[0].gradientLocationTwo}%)`;
                } else if ('radial' !== containerStyles[0].gradientType) {
                    btnbg = `linear-gradient(${containerStyles[0].gradientAngle}deg, ${btnGrad} ${containerStyles[0].gradientLocationOne}%, ${btnGrad2} ${containerStyles[0].gradientLocationTwo}%)`;
                }
            } else {
                btnbg = containerStyles[0].backgroundImageURL ? `url('${containerStyles[0].backgroundImageURL}')` : ''
            }

            return (
                <div
                    id={`premium-dheading-block-${block_id}`}
                    className={classnames(className,
                        "premium-dheading-block__container", `premium-dheading-${block_id} ${hideDesktop} ${hideTablet} ${hideMobile}`)}
                    style={{
                        textAlign: contentAlign,
                        backgroundColor: backgroundType === "solid" ? containerStyles[0].containerBack : "transparent",
                        backgroundImage: btnbg,
                        backgroundRepeat: containerStyles[0].backgroundRepeat,
                        backgroundPosition: containerStyles[0].backgroundPosition,
                        backgroundSize: containerStyles[0].backgroundSize,
                        backgroundAttachment: containerStyles[0].fixed ? "fixed" : "unset",
                        borderStyle: containerStyles[0].containerBorderType,
                        borderWidth: containerBorder
                            ? `${containerBorderTop}px ${containerBorderRight}px ${containerBorderBottom}px ${containerBorderLeft}px`
                            : containerStyles[0].containerBorderWidth + "px",
                        borderRadius: containerStyles[0].containerBorderRadius + "px",
                        borderColor: containerStyles[0].containerBorderColor
                    }}
                >
                    <div className={`premium-dheading-block__wrap`}>
                        <h2 className={`premium-dheading-block__title`}>
                            <span
                                className={`premium-dheading-block__first premium-headingc-${firstStyles[0].firstClip} premium-headinga-${firstStyles[0].firstAnim} premium-headings-${firstStyles[0].firstStroke}`}
                                style={{
                                    display: display,
                                    color: firstStyles[0].firstColor,
                                    backgroundColor: firstStyles[0].firstClip ? "none" : firstStyles[0].firstBackground,
                                    backgroundImage: firstStyles[0].firstClip
                                        ? `linear-gradient(to left, ${firstStyles[0].firstColor}, ${firstStyles[0].firstClipColor})`
                                        : "none",
                                    fontFamily: firstStyles[0].firstFamily,
                                    letterSpacing: firstStyles[0].firstLetter + "px",
                                    textTransform: firstStyles[0].firstUpper ? "uppercase" : "none",
                                    fontStyle: firstStyles[0].firstStyle,
                                    fontWeight: firstStyles[0].firstWeight,
                                    borderStyle: firstStyles[0].firstBorderType,
                                    borderWidth: firstBorder
                                        ? `${firstBorderTop}px ${firstBorderRight}px ${firstBorderBottom}px ${firstBorderLeft}px`
                                        : firstStyles[0].firstBorderWidth + "px",
                                    borderRadius: firstStyles[0].firstBorderRadius + "px",
                                    borderColor: firstStyles[0].firstBorderColor,
                                    padding: firstStyles[0].firstPadding + "px",
                                    marginLeft: firstStyles[0].firstMarginL + "px",
                                    marginRight: firstStyles[0].firstMarginR + "px",
                                    textShadow: `${firstStyles[0].firstShadowHorizontal}px ${firstStyles[0].firstShadowVertical}px ${firstStyles[0].firstShadowBlur}px ${firstStyles[0].firstShadowColor}`
                                }}
                            >
                                {firstHeading}
                            </span>
                            <span
                                className={`premium-dheading-block__second premium-headingc-${secondStyles[0].secondClip} premium-headinga-${secondStyles[0].secondAnim} premium-headings-${secondStyles[0].secondStroke}`}
                                style={{
                                    display: display,
                                    color: secondStyles[0].secondColor,
                                    backgroundColor: secondStyles[0].secondClip ? "none" : secondStyles[0].secondBackground,
                                    backgroundImage: secondStyles[0].secondClip
                                        ? `linear-gradient(to left, ${secondStyles[0].secondColor}, ${secondStyles[0].secondClipColor})`
                                        : "none",
                                    fontFamily: secondStyles[0].secondFamily,
                                    letterSpacing: secondStyles[0].secondLetter + "px",
                                    textTransform: secondStyles[0].secondUpper ? "uppercase" : "none",
                                    fontStyle: secondStyles[0].secondStyle,
                                    fontWeight: secondStyles[0].secondWeight,
                                    borderStyle: secondStyles[0].secondBorderType,
                                    borderWidth: secondBorder
                                        ? `${secondBorderTop}px ${secondBorderRight}px ${secondBorderBottom}px ${secondBorderLeft}px`
                                        : secondStyles[0].secondBorderWidth + "px",
                                    borderRadius: secondStyles[0].secondBorderRadius + "px",
                                    borderColor: secondStyles[0].secondBorderColor,
                                    padding: secondStyles[0].secondPadding + "px",
                                    marginLeft: secondStyles[0].secondMarginL + "px",
                                    marginRight: secondStyles[0].secondMarginR + "px",
                                    textShadow: `${secondStyles[0].secondShadowHorizontal}px ${secondStyles[0].secondShadowVertical}px ${secondStyles[0].secondShadowBlur}px ${secondStyles[0].secondShadowColor}`
                                }}
                            >
                                {secondHeading}
                            </span>
                        </h2>
                        {link && headingURL && (
                            <a
                                className={`premium-dheading-block__link`}
                                href={link && headingURL}
                                target={target && "_blank"}
                                rel='noopener noreferrer'
                            />
                        )}
                    </div>
                </div>
            );
        }
    }
    , {
        attributes: deprecated_attributes,
        migrate: attributes => {
            let newAttributes = {
                firstStyles: [
                    {
                        firstClip: attributes.firstClip,
                        firstAnim: attributes.firstAnim,
                        firstStroke: attributes.firstStroke,
                        firstFamily: attributes.firstFamily,
                        firstSizeUnit: attributes.firstSizeUnit,
                        firstSize: attributes.firstSize,
                        firstSizeMobile: attributes.firstSizeMobile,
                        firstWeight: attributes.firstWeight,
                        firstStyle: attributes.firstStyle,
                        firstLetter: attributes.firstLetter,
                        firstUpper: attributes.firstUpper,
                        firstColor: attributes.firstColor,
                        firstBackground: attributes.firstBackground,
                        firstOpacity: attributes.firstOpacity,
                        firstClipColor: attributes.firstClipColor,
                        firstBorderType: attributes.firstBorderType,
                        firstBorderWidth: attributes.firstBorderWidth,
                        firstBorderColor: attributes.firstBorderColor,
                        firstBorderRadius: attributes.firstBorderRadius,
                        firstShadowColor: attributes.firstShadowColor,
                        firstShadowBlur: attributes.firstShadowBlur,
                        firstShadowHorizontal: attributes.firstShadowHorizontal,
                        firstShadowVertical: attributes.firstShadowVertical,
                        firstMarginL: attributes.firstMarginL,
                        firstMarginR: attributes.firstMarginR,
                        firstPadding: attributes.firstPadding,
                    }
                ],
                secondStyles: [
                    {
                        secondClip: attributes.secondClip,
                        secondAnim: attributes.secondAnim,
                        secondStroke: attributes.secondStroke,
                        secondFamily: attributes.secondFamily,
                        secondSizeUnit: attributes.secondSizeUnit,
                        secondSize: attributes.secondSize,
                        secondSizeTablet: attributes.secondSizeTablet,
                        secondSizeMobile: attributes.secondSizeMobile,
                        secondWeight: attributes.secondWeight,
                        secondStyle: attributes.secondStyle,
                        secondLetter: attributes.secondLetter,
                        secondUpper: attributes.secondUpper,
                        secondColor: attributes.secondColor,
                        secondBackground: attributes.secondBackground,
                        secondOpacity: attributes.secondOpacity,
                        secondClipColor: attributes.secondClipColor,
                        secondBorderType: attributes.secondBorderType,
                        secondBorderWidth: attributes.secondBorderWidth,
                        secondBorderColor: attributes.secondBorderColor,
                        secondBorderRadius: attributes.secondBorderRadius,
                        secondShadowColor: attributes.secondShadowColor,
                        secondShadowBlur: attributes.secondShadowBlur,
                        secondShadowHorizontal: attributes.secondShadowHorizontal,
                        secondShadowVertical: attributes.secondShadowVertical,
                        secondMarginL: attributes.secondMarginL,
                        secondMarginR: attributes.secondMarginR,
                        secondPadding: attributes.secondPadding,

                    }
                ],
                containerStyles: [
                    {
                        backgroundImageID: attributes.imageID,
                        backgroundImageURL: attributes.imageURL,
                        backgroundRepeat: attributes.backgroundRepeat,
                        backgroundPosition: attributes.backgroundPosition,
                        backgroundSize: attributes.backgroundSize,
                        fixed: attributes.fixed,
                        containerBorderType: attributes.containerBorderType,
                        containerBorderWidth: attributes.containerBorderWidth,
                        containerBorderColor: attributes.containerBorderColor,
                        containerBorderRadius: attributes.containerBorderRadius,
                        containerBack: attributes.containerBack,
                        containerOpacity: attributes.containerOpacity,
                        gradientLocationOne: '0',
                        gradientColorTwo: '',
                        gradientLocationTwo: '100',
                        gradientType: 'linear',
                        gradientAngle: '180',
                        gradientPosition: 'center center'
                    }
                ],
                backgroundType: ''
            }
            return Object.assign(attributes, newAttributes)
        },
        save: props => {
            const { className } = props;
            const {
                block_id,
                contentAlign,
                firstHeading,
                secondHeading,
                display,
                firstColor,
                firstBackground,
                firstFamily,
                firstStyle,
                firstUpper,
                firstLetter,
                firstWeight,
                firstBorderType,
                firstBorderWidth,
                firstBorderTop,
                firstBorderRight,
                firstBorderBottom,
                firstBorderLeft,
                firstBorderRadius,
                firstBorderColor,
                firstPadding,
                firstMargin,
                firstClip,
                firstAnim,
                firstStroke,
                firstClipColor,
                firstShadowBlur,
                firstShadowColor,
                firstShadowHorizontal,
                firstShadowVertical,
                secondColor,
                secondBackground,
                secondFamily,
                secondLetter,
                secondUpper,
                secondWeight,
                secondStyle,
                secondBorderType,
                secondBorderWidth,
                secondBorderTop,
                secondBorderRight,
                secondBorderBottom,
                secondBorderLeft,
                secondBorderRadius,
                secondBorderColor,
                secondPadding,
                secondMargin,
                secondClip,
                secondStroke,
                secondAnim,
                secondClipColor,
                secondShadowBlur,
                secondShadowColor,
                secondShadowHorizontal,
                secondShadowVertical,
                link,
                target,
                headingURL,
                containerBack,
                imageURL,
                fixed,
                backgroundRepeat,
                backgroundPosition,
                backgroundSize,
                containerBorderType,
                containerBorderWidth,
                containerBorderTop,
                containerBorderRight,
                containerBorderBottom,
                containerBorderLeft,
                containerBorderRadius,
                containerBorderColor,
                firstBorder,
                secondBorder,
                containerBorder,
                firstOpacity,
                secondOpacity,
                containerOpacity,
                hideDesktop,
                hideTablet,
                hideMobile
            } = props.attributes;

            const mainClasses = classnames(
                className,
                "premium-dheading-block__container"
            );

            return (
                <div
                    id={`premium-dheading-block-${block_id}`}
                    className={`${mainClasses} premium-dheading-${block_id} ${hideDesktop} ${hideTablet} ${hideMobile}`}
                    style={{
                        textAlign: contentAlign,
                        backgroundColor: containerBack
                            ? hexToRgba(containerBack, containerOpacity)
                            : "transparent",
                        backgroundImage: `url('${imageURL}')`,
                        backgroundRepeat: backgroundRepeat,
                        backgroundPosition: backgroundPosition,
                        backgroundSize: backgroundSize,
                        backgroundAttachment: fixed ? "fixed" : "unset",
                        borderStyle: containerBorderType,
                        borderWidth: containerBorder
                            ? `${containerBorderTop}px ${containerBorderRight}px ${containerBorderBottom}px ${containerBorderLeft}px`
                            : containerBorderWidth + "px",
                        borderRadius: containerBorderRadius + "px",
                        borderColor: containerBorderColor
                    }}
                >
                    <div className={`premium-dheading-block__wrap`}>
                        <h2 className={`premium-dheading-block__title`}>
                            <span
                                className={`premium-dheading-block__first premium-headingc-${firstClip} premium-headinga-${firstAnim} premium-headings-${firstStroke}`}
                                style={{
                                    display: display,
                                    color: firstColor,
                                    backgroundColor: firstClip
                                        ? "none"
                                        : firstBackground
                                            ? hexToRgba(firstBackground, firstOpacity)
                                            : "transparent",
                                    backgroundImage: firstClip
                                        ? `linear-gradient(to left, ${firstColor}, ${firstClipColor})`
                                        : "none",
                                    fontFamily: firstFamily,
                                    letterSpacing: firstLetter + "px",
                                    textTransform: firstUpper ? "uppercase" : "none",
                                    fontStyle: firstStyle,
                                    fontWeight: firstWeight,
                                    borderStyle: firstBorderType,
                                    borderWidth: firstBorder
                                        ? `${firstBorderTop}px ${firstBorderRight}px ${firstBorderBottom}px ${firstBorderLeft}px`
                                        : firstBorderWidth + "px",
                                    borderRadius: firstBorderRadius + "px",
                                    borderColor: firstBorderColor,
                                    padding: firstPadding + "px",
                                    margin: firstMargin + "px",
                                    textShadow: `${firstShadowHorizontal}px ${firstShadowVertical}px ${firstShadowBlur}px ${firstShadowColor}`
                                }}
                            >
                                {firstHeading}
                            </span>
                            <span
                                className={`premium-dheading-block__second premium-headingc-${secondClip} premium-headinga-${secondAnim} premium-headings-${secondStroke}`}
                                style={{
                                    display: display,
                                    color: secondColor,
                                    backgroundColor: secondClip
                                        ? "none"
                                        : secondBackground
                                            ? hexToRgba(secondBackground, secondOpacity)
                                            : "transparent",
                                    backgroundImage: secondClip
                                        ? `linear-gradient(to left, ${secondColor}, ${secondClipColor})`
                                        : "none",
                                    fontFamily: secondFamily,
                                    letterSpacing: secondLetter + "px",
                                    textTransform: secondUpper ? "uppercase" : "none",
                                    fontStyle: secondStyle,
                                    fontWeight: secondWeight,
                                    borderStyle: secondBorderType,
                                    borderWidth: secondBorder
                                        ? `${secondBorderTop}px ${secondBorderRight}px ${secondBorderBottom}px ${secondBorderLeft}px`
                                        : secondBorderWidth + "px",
                                    borderRadius: secondBorderRadius + "px",
                                    borderColor: secondBorderColor,
                                    padding: secondPadding + "px",
                                    margin: secondMargin + "px",
                                    textShadow: `${secondShadowHorizontal}px ${secondShadowVertical}px ${secondShadowBlur}px ${secondShadowColor}`
                                }}
                            >
                                {secondHeading}
                            </span>
                        </h2>
                        {link && headingURL && (
                            <a
                                className={`premium-dheading-block__link`}
                                href={link && headingURL}
                                target={target && "_blank"}
                            />
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
                firstBorder: attributes.firstBorder,
                secondBorder: attributes.secondBorder,
                containerBorder: attributes.containerBorder,
                containerBorderTop: "",
                containerBorderRight: "",
                containerBorderBottom: "",
                containerBorderLeft: "",
                firstBorderTop: "",
                firstBorderRight: "",
                firstBorderBottom: "",
                firstBorderLeft: "",
                secondBorderTop: "",
                secondBorderRight: "",
                secondBorderBottom: "",
                secondBorderLeft: "",
                classMigrate: false,
                block_id: '',
                secondSizeUnit: 'px',
                secondSizeTablet: '',
                secondSizeMobile: '',
                firstSizeUnit: 'px',
                firstSizeTablet: '',
                firstSizeMobile: '',
                firstOpacity: "",
                secondOpacity: "",
                containerOpacity: "",
                hideDesktop: false,
                hideTablet: false,
                hideMobile: false
            };
            return Object.assign(attributes, newAttributes);
        },
        save: (props) => {
            const { className } = props;
            const {
                contentAlign,
                firstHeading,
                secondHeading,
                display,
                firstColor,
                firstBackground,
                firstSize,
                firstFamily,
                firstStyle,
                firstUpper,
                firstLetter,
                firstWeight,
                firstBorderType,
                firstBorderWidth,
                firstBorderRadius,
                firstBorderColor,
                firstPadding,
                firstMargin,
                firstClip,
                firstAnim,
                firstStroke,
                firstClipColor,
                firstShadowBlur,
                firstShadowColor,
                firstShadowHorizontal,
                firstShadowVertical,
                secondColor,
                secondBackground,
                secondSize,
                secondFamily,
                secondLetter,
                secondUpper,
                secondWeight,
                secondStyle,
                secondBorderType,
                secondBorderWidth,
                secondBorderRadius,
                secondBorderColor,
                secondPadding,
                secondMargin,
                secondClip,
                secondStroke,
                secondAnim,
                secondClipColor,
                secondShadowBlur,
                secondShadowColor,
                secondShadowHorizontal,
                secondShadowVertical,
                link,
                target,
                headingURL,
                containerBack,
                imageURL,
                fixed,
                backgroundRepeat,
                backgroundPosition,
                backgroundSize,
                containerBorderType,
                containerBorderWidth,
                containerBorderRadius,
                containerBorderColor,
            } = props.attributes;

            const mainClasses = classnames(
                className,
                "premium-dheading-block__container"
            );

            return (
                <div
                    className={`${mainClasses}`}
                    style={{
                        textAlign: contentAlign,
                        backgroundColor: containerBack,
                        backgroundImage: `url('${imageURL}')`,
                        backgroundRepeat: backgroundRepeat,
                        backgroundPosition: backgroundPosition,
                        backgroundSize: backgroundSize,
                        backgroundAttachment: fixed ? "fixed" : "unset",
                        border: containerBorderType,
                        borderWidth: containerBorderWidth + "px",
                        borderRadius: containerBorderRadius + "px",
                        borderColor: containerBorderColor,
                    }}
                >
                    <div className={`premium-dheading-block__wrap`}>
                        <h2 className={`premium-dheading-block__title`}>
                            <span
                                className={`premium-dheading-block__first premium-headingc-${firstClip} premium-headinga-${firstAnim} premium-headings-${firstStroke}`}
                                style={{
                                    display: display,
                                    color: firstColor,
                                    backgroundColor: firstClip ? "none" : firstBackground,
                                    backgroundImage: firstClip
                                        ? `linear-gradient(to left, ${firstColor}, ${firstClipColor})`
                                        : "none",
                                    fontSize: firstSize + "px",
                                    fontFamily: firstFamily,
                                    letterSpacing: firstLetter + "px",
                                    textTransform: firstUpper ? "uppercase" : "none",
                                    fontStyle: firstStyle,
                                    fontWeight: firstWeight,
                                    border: firstBorderType,
                                    borderWidth: firstBorderWidth + "px",
                                    borderRadius: firstBorderRadius + "px",
                                    borderColor: firstBorderColor,
                                    padding: firstPadding + "px",
                                    margin: firstMargin + "px",
                                    textShadow: `${firstShadowHorizontal}px ${firstShadowVertical}px ${firstShadowBlur}px ${firstShadowColor}`,
                                }}
                            >
                                {firstHeading}
                            </span>
                            <span
                                className={`premium-dheading-block__second premium-headingc-${secondClip} premium-headinga-${secondAnim} premium-headings-${secondStroke}`}
                                style={{
                                    display: display,
                                    color: secondColor,
                                    backgroundColor: secondClip ? "none" : secondBackground,
                                    backgroundImage: secondClip
                                        ? `linear-gradient(to left, ${secondColor}, ${secondClipColor})`
                                        : "none",
                                    fontSize: secondSize + "px",
                                    fontFamily: secondFamily,
                                    letterSpacing: secondLetter + "px",
                                    textTransform: secondUpper ? "uppercase" : "none",
                                    fontStyle: secondStyle,
                                    fontWeight: secondWeight,
                                    border: secondBorderType,
                                    borderWidth: secondBorderWidth + "px",
                                    borderRadius: secondBorderRadius + "px",
                                    borderColor: secondBorderColor,
                                    padding: secondPadding + "px",
                                    margin: secondMargin + "px",
                                    textShadow: `${secondShadowHorizontal}px ${secondShadowVertical}px ${secondShadowBlur}px ${secondShadowColor}`,
                                }}
                            >
                                {secondHeading}
                            </span>
                        </h2>
                        {link && headingURL && (
                            <a
                                className={`premium-dheading-block__link`}
                                href={link && headingURL}
                                target={target && "_blank"}
                            />
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
                firstStroke: false,
                secondStroke: false,
            };
            return Object.assign(attributes, newAttributes);
        },
        save: (props) => {
            const { className } = props;

            const {
                contentAlign,
                firstHeading,
                secondHeading,
                display,
                firstColor,
                firstBackground,
                firstSize,
                firstFamily,
                firstStyle,
                firstUpper,
                firstLetter,
                firstWeight,
                firstBorderType,
                firstBorderWidth,
                firstBorderRadius,
                firstBorderColor,
                firstPadding,
                firstMargin,
                firstClip,
                firstAnim,
                firstClipColor,
                firstShadowBlur,
                firstShadowColor,
                firstShadowHorizontal,
                firstShadowVertical,
                secondColor,
                secondBackground,
                secondSize,
                secondFamily,
                secondLetter,
                secondUpper,
                secondWeight,
                secondStyle,
                secondBorderType,
                secondBorderWidth,
                secondBorderRadius,
                secondBorderColor,
                secondPadding,
                secondMargin,
                secondClip,
                secondAnim,
                secondClipColor,
                secondShadowBlur,
                secondShadowColor,
                secondShadowHorizontal,
                secondShadowVertical,
                link,
                target,
                headingURL,
                containerBack,
                imageURL,
                fixed,
                backgroundRepeat,
                backgroundPosition,
                backgroundSize,
                containerBorderType,
                containerBorderWidth,
                containerBorderRadius,
                containerBorderColor,
            } = props.attributes;

            const mainClasses = classnames(
                className,
                "premium-dheading-block__container"
            );

            return (
                <div
                    className={`${mainClasses}`}
                    style={{
                        textAlign: contentAlign,
                        backgroundColor: containerBack,
                        backgroundImage: `url('${imageURL}')`,
                        backgroundRepeat: backgroundRepeat,
                        backgroundPosition: backgroundPosition,
                        backgroundSize: backgroundSize,
                        backgroundAttachment: fixed ? "fixed" : "unset",
                        border: containerBorderType,
                        borderWidth: containerBorderWidth + "px",
                        borderRadius: containerBorderRadius + "px",
                        borderColor: containerBorderColor,
                    }}
                >
                    <div className={`premium-dheading-block__wrap`}>
                        <h2 className={`premium-dheading-block__title`}>
                            <span
                                className={`premium-dheading-block__first premium-headingc-${firstClip} premium-headinga-${firstAnim}`}
                                style={{
                                    display: display,
                                    color: firstColor,
                                    backgroundColor: firstClip ? "none" : firstBackground,
                                    backgroundImage: firstClip
                                        ? `linear-gradient(to left, ${firstColor}, ${firstClipColor})`
                                        : "none",
                                    fontSize: firstSize + "px",
                                    fontFamily: firstFamily,
                                    letterSpacing: firstLetter + "px",
                                    textTransform: firstUpper ? "uppercase" : "none",
                                    fontStyle: firstStyle,
                                    fontWeight: firstWeight,
                                    border: firstBorderType,
                                    borderWidth: firstBorderWidth + "px",
                                    borderRadius: firstBorderRadius + "px",
                                    borderColor: firstBorderColor,
                                    padding: firstPadding + "px",
                                    margin: firstMargin + "px",
                                    textShadow: `${firstShadowHorizontal}px ${firstShadowVertical}px ${firstShadowBlur}px ${firstShadowColor}`,
                                }}
                            >
                                {firstHeading}
                            </span>
                            <span
                                className={`premium-dheading-block__second premium-headingc-${secondClip} premium-headinga-${secondAnim}`}
                                style={{
                                    display: display,
                                    color: secondColor,
                                    backgroundColor: secondClip ? "none" : secondBackground,
                                    backgroundImage: secondClip
                                        ? `linear-gradient(to left, ${secondColor}, ${secondClipColor})`
                                        : "none",
                                    fontSize: secondSize + "px",
                                    fontFamily: secondFamily,
                                    letterSpacing: secondLetter + "px",
                                    textTransform: secondUpper ? "uppercase" : "none",
                                    fontStyle: secondStyle,
                                    fontWeight: secondWeight,
                                    border: secondBorderType,
                                    borderWidth: secondBorderWidth + "px",
                                    borderRadius: secondBorderRadius + "px",
                                    borderColor: secondBorderColor,
                                    padding: secondPadding + "px",
                                    margin: secondMargin + "px",
                                    textShadow: `${secondShadowHorizontal}px ${secondShadowVertical}px ${secondShadowBlur}px ${secondShadowColor}`,
                                }}
                            >
                                {secondHeading}
                            </span>
                        </h2>
                        {link && headingURL && (
                            <a
                                className={`premium-dheading-block__link`}
                                href={link && headingURL}
                                target={target && "_blank"}
                            />
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
                containerBorderType: "none",
                containerBorderWidth: "1",
                containerBorderRadius: "0",
                containerBorderColor: "",
            };
            return Object.assign(attributes, newAttributes);
        },
        save: (props) => {
            const {
                contentAlign,
                firstHeading,
                secondHeading,
                display,
                firstColor,
                firstBackground,
                firstSize,
                firstFamily,
                firstStyle,
                firstUpper,
                firstLetter,
                firstWeight,
                firstBorderType,
                firstBorderWidth,
                firstBorderRadius,
                firstBorderColor,
                firstPadding,
                firstMargin,
                firstClip,
                firstAnim,
                firstClipColor,
                firstShadowBlur,
                firstShadowColor,
                firstShadowHorizontal,
                firstShadowVertical,
                secondColor,
                secondBackground,
                secondSize,
                secondFamily,
                secondLetter,
                secondUpper,
                secondWeight,
                secondStyle,
                secondBorderType,
                secondBorderWidth,
                secondBorderRadius,
                secondBorderColor,
                secondPadding,
                secondMargin,
                secondClip,
                secondAnim,
                secondClipColor,
                secondShadowBlur,
                secondShadowColor,
                secondShadowHorizontal,
                secondShadowVertical,
                link,
                target,
                headingURL,
                containerBack,
                imageURL,
                fixed,
                backgroundRepeat,
                backgroundPosition,
                backgroundSize,
            } = props.attributes;

            return (
                <div
                    className={`${className}__container`}
                    style={{
                        textAlign: contentAlign,
                        backgroundColor: containerBack,
                        backgroundImage: `url('${imageURL}')`,
                        backgroundRepeat: backgroundRepeat,
                        backgroundPosition: backgroundPosition,
                        backgroundSize: backgroundSize,
                        backgroundAttachment: fixed ? "fixed" : "unset",
                    }}
                >
                    <div className={`${className}__wrap`}>
                        <h2 className={`${className}__title`}>
                            <span
                                className={`${className}__first premium-headingc-${firstClip} premium-headinga-${firstAnim}`}
                                style={{
                                    display: display,
                                    color: firstColor,
                                    backgroundColor: firstClip ? "none" : firstBackground,
                                    backgroundImage: firstClip
                                        ? `linear-gradient(to left, ${firstColor}, ${firstClipColor})`
                                        : "none",
                                    fontSize: firstSize + "px",
                                    fontFamily: firstFamily,
                                    letterSpacing: firstLetter + "px",
                                    textTransform: firstUpper ? "uppercase" : "none",
                                    fontStyle: firstStyle,
                                    fontWeight: firstWeight,
                                    border: firstBorderType,
                                    borderWidth: firstBorderWidth + "px",
                                    borderRadius: firstBorderRadius + "px",
                                    borderColor: firstBorderColor,
                                    padding: firstPadding + "px",
                                    margin: firstMargin + "px",
                                    textShadow: `${firstShadowHorizontal}px ${firstShadowVertical}px ${firstShadowBlur}px ${firstShadowColor}`,
                                }}
                            >
                                {firstHeading}
                            </span>
                            <span
                                className={`${className}__second premium-headingc-${secondClip} premium-headinga-${secondAnim}`}
                                style={{
                                    display: display,
                                    color: secondColor,
                                    backgroundColor: secondClip ? "none" : secondBackground,
                                    backgroundImage: secondClip
                                        ? `linear-gradient(to left, ${secondColor}, ${secondClipColor})`
                                        : "none",
                                    fontSize: secondSize + "px",
                                    fontFamily: secondFamily,
                                    letterSpacing: secondLetter + "px",
                                    textTransform: secondUpper ? "uppercase" : "none",
                                    fontStyle: secondStyle,
                                    fontWeight: secondWeight,
                                    border: secondBorderType,
                                    borderWidth: secondBorderWidth + "px",
                                    borderRadius: secondBorderRadius + "px",
                                    borderColor: secondBorderColor,
                                    padding: secondPadding + "px",
                                    margin: secondMargin + "px",
                                    textShadow: `${secondShadowHorizontal}px ${secondShadowVertical}px ${secondShadowBlur}px ${secondShadowColor}`,
                                }}
                            >
                                {secondHeading}
                            </span>
                        </h2>
                        {link && headingURL && (
                            <a
                                className={`${className}__link`}
                                href={link && headingURL}
                                target={target && "_blank"}
                            />
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
                firstFamily: "",
                secondFamily: "",
            };
            return Object.assign(attributes, newAttributes);
        },
        save: (props) => {
            const {
                contentAlign,
                firstHeading,
                secondHeading,
                display,
                firstColor,
                firstBackground,
                firstSize,
                firstStyle,
                firstUpper,
                firstLetter,
                firstWeight,
                firstBorderType,
                firstBorderWidth,
                firstBorderRadius,
                firstBorderColor,
                firstPadding,
                firstMargin,
                firstClip,
                firstAnim,
                firstClipColor,
                firstShadowBlur,
                firstShadowColor,
                firstShadowHorizontal,
                firstShadowVertical,
                secondColor,
                secondBackground,
                secondSize,
                secondLetter,
                secondUpper,
                secondWeight,
                secondStyle,
                secondBorderType,
                secondBorderWidth,
                secondBorderRadius,
                secondBorderColor,
                secondPadding,
                secondMargin,
                secondClip,
                secondAnim,
                secondClipColor,
                secondShadowBlur,
                secondShadowColor,
                secondShadowHorizontal,
                secondShadowVertical,
                link,
                target,
                headingURL,
                containerBack,
                imageURL,
                fixed,
                backgroundRepeat,
                backgroundPosition,
                backgroundSize,
            } = props.attributes;

            return (
                <div
                    className={`${className}__container`}
                    style={{
                        textAlign: contentAlign,
                        backgroundColor: containerBack,
                        backgroundImage: `url('${imageURL}')`,
                        backgroundRepeat: backgroundRepeat,
                        backgroundPosition: backgroundPosition,
                        backgroundSize: backgroundSize,
                        backgroundAttachment: fixed ? "fixed" : "unset",
                    }}
                >
                    <div className={`${className}__wrap`}>
                        <h2 className={`${className}__title`}>
                            <span
                                className={`${className}__first premium-headingc-${firstClip} premium-headinga-${firstAnim}`}
                                style={{
                                    display: display,
                                    color: firstColor,
                                    backgroundColor: firstClip ? "none" : firstBackground,
                                    backgroundImage: firstClip
                                        ? `linear-gradient(to left, ${firstColor}, ${firstClipColor})`
                                        : "none",
                                    fontSize: firstSize + "px",
                                    letterSpacing: firstLetter + "px",
                                    textTransform: firstUpper ? "uppercase" : "none",
                                    fontStyle: firstStyle,
                                    fontWeight: firstWeight,
                                    border: firstBorderType,
                                    borderWidth: firstBorderWidth + "px",
                                    borderRadius: firstBorderRadius + "px",
                                    borderColor: firstBorderColor,
                                    padding: firstPadding + "px",
                                    margin: firstMargin + "px",
                                    textShadow: `${firstShadowHorizontal}px ${firstShadowVertical}px ${firstShadowBlur}px ${firstShadowColor}`,
                                }}
                            >
                                {firstHeading}
                            </span>
                            <span
                                className={`${className}__second premium-headingc-${secondClip} premium-headinga-${secondAnim}`}
                                style={{
                                    display: display,
                                    color: secondColor,
                                    backgroundColor: secondClip ? "none" : secondBackground,
                                    backgroundImage: secondClip
                                        ? `linear-gradient(to left, ${secondColor}, ${secondClipColor})`
                                        : "none",
                                    fontSize: secondSize + "px",
                                    letterSpacing: secondLetter + "px",
                                    textTransform: secondUpper ? "uppercase" : "none",
                                    fontStyle: secondStyle,
                                    fontWeight: secondWeight,
                                    border: secondBorderType,
                                    borderWidth: secondBorderWidth + "px",
                                    borderRadius: secondBorderRadius + "px",
                                    borderColor: secondBorderColor,
                                    padding: secondPadding + "px",
                                    margin: secondMargin + "px",
                                    textShadow: `${secondShadowHorizontal}px ${secondShadowVertical}px ${secondShadowBlur}px ${secondShadowColor}`,
                                }}
                            >
                                {secondHeading}
                            </span>
                        </h2>
                        {link && headingURL && (
                            <a
                                className={`${className}__link`}
                                href={link && headingURL}
                                target={target && "_blank"}
                            />
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
                imageID: "",
                imageURL: "",
                fixed: false,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top center",
                backgroundSize: "auto",
            };
            return Object.assign(attributes, newAttributes);
        },
        save: (props) => {
            const {
                contentAlign,
                firstHeading,
                secondHeading,
                display,
                firstColor,
                firstBackground,
                firstSize,
                firstStyle,
                firstUpper,
                firstLetter,
                firstWeight,
                firstBorderType,
                firstBorderWidth,
                firstBorderRadius,
                firstBorderColor,
                firstPadding,
                firstMargin,
                firstClip,
                firstAnim,
                firstClipColor,
                firstShadowBlur,
                firstShadowColor,
                firstShadowHorizontal,
                firstShadowVertical,
                secondColor,
                secondBackground,
                secondSize,
                secondLetter,
                secondUpper,
                secondWeight,
                secondStyle,
                secondBorderType,
                secondBorderWidth,
                secondBorderRadius,
                secondBorderColor,
                secondPadding,
                secondMargin,
                secondClip,
                secondAnim,
                secondClipColor,
                secondShadowBlur,
                secondShadowColor,
                secondShadowHorizontal,
                secondShadowVertical,
                link,
                target,
                headingURL,
                containerBack,
            } = props.attributes;

            return (
                <div
                    className={`${className}__container`}
                    style={{
                        textAlign: contentAlign,
                        backgroundColor: containerBack,
                    }}
                >
                    <div className={`${className}__wrap`}>
                        <h2 className={`${className}__title`}>
                            <span
                                className={`${className}__first premium-headingc-${firstClip} premium-headinga-${firstAnim}`}
                                style={{
                                    display: display,
                                    color: firstColor,
                                    backgroundColor: firstClip ? "none" : firstBackground,
                                    backgroundImage: firstClip
                                        ? `linear-gradient(to left, ${firstColor}, ${firstClipColor})`
                                        : "none",
                                    fontSize: firstSize + "px",
                                    letterSpacing: firstLetter + "px",
                                    textTransform: firstUpper ? "uppercase" : "none",
                                    fontStyle: firstStyle,
                                    fontWeight: firstWeight,
                                    border: firstBorderType,
                                    borderWidth: firstBorderWidth + "px",
                                    borderRadius: firstBorderRadius + "px",
                                    borderColor: firstBorderColor,
                                    padding: firstPadding + "px",
                                    margin: firstMargin + "px",
                                    textShadow: `${firstShadowHorizontal}px ${firstShadowVertical}px ${firstShadowBlur}px ${firstShadowColor}`,
                                }}
                            >
                                {firstHeading}
                            </span>
                            <span
                                className={`${className}__second premium-headingc-${secondClip} premium-headinga-${secondAnim}`}
                                style={{
                                    display: display,
                                    color: secondColor,
                                    backgroundColor: secondClip ? "none" : secondBackground,
                                    backgroundImage: secondClip
                                        ? `linear-gradient(to left, ${secondColor}, ${secondClipColor})`
                                        : "none",
                                    fontSize: secondSize + "px",
                                    letterSpacing: secondLetter + "px",
                                    textTransform: secondUpper ? "uppercase" : "none",
                                    fontStyle: secondStyle,
                                    fontWeight: secondWeight,
                                    border: secondBorderType,
                                    borderWidth: secondBorderWidth + "px",
                                    borderRadius: secondBorderRadius + "px",
                                    borderColor: secondBorderColor,
                                    padding: secondPadding + "px",
                                    margin: secondMargin + "px",
                                    textShadow: `${secondShadowHorizontal}px ${secondShadowVertical}px ${secondShadowBlur}px ${secondShadowColor}`,
                                }}
                            >
                                {secondHeading}
                            </span>
                        </h2>
                        {link && headingURL && (
                            <a
                                className={`${className}__link`}
                                href={link && headingURL}
                                target={target && "_blank"}
                            />
                        )}
                    </div>
                </div>
            );
        },
    },
    {
        attributes: attributes,
        save: (props) => {
            {
                const {
                    contentAlign,
                    firstHeading,
                    secondHeading,
                    display,
                    firstColor,
                    firstBackground,
                    firstSize,
                    firstStyle,
                    firstUpper,
                    firstLetter,
                    firstWeight,
                    firstBorderType,
                    firstBorderWidth,
                    firstBorderRadius,
                    firstBorderColor,
                    firstPadding,
                    firstMargin,
                    firstClip,
                    firstAnim,
                    firstClipColor,
                    firstShadowBlur,
                    firstShadowColor,
                    firstShadowHorizontal,
                    firstShadowVertical,
                    secondColor,
                    secondBackground,
                    secondSize,
                    secondLetter,
                    secondUpper,
                    secondWeight,
                    secondStyle,
                    secondBorderType,
                    secondBorderWidth,
                    secondBorderRadius,
                    secondBorderColor,
                    secondPadding,
                    secondMargin,
                    secondClip,
                    secondAnim,
                    secondClipColor,
                    secondShadowBlur,
                    secondShadowColor,
                    secondShadowHorizontal,
                    secondShadowVertical,
                    link,
                    target,
                    headingURL,
                    containerBack,
                } = props.attributes;

                return (
                    <a
                        className={`${className}__link`}
                        href={link && headingURL}
                        target={target && "_blank"}
                    >
                        <div
                            className={`${className}__container`}
                            style={{
                                textAlign: contentAlign,
                                backgroundColor: containerBack,
                            }}
                        >
                            <h2 className={`${className}__title`}>
                                <span
                                    className={`${className}__first premium-headingc-${firstClip} premium-headinga-${firstAnim}`}
                                    style={{
                                        display: display,
                                        color: firstColor,
                                        backgroundColor: firstClip ? "none" : firstBackground,
                                        backgroundImage: firstClip
                                            ? `linear-gradient(to left, ${firstColor}, ${firstClipColor})`
                                            : "none",
                                        fontSize: firstSize + "px",
                                        letterSpacing: firstLetter + "px",
                                        textTransform: firstUpper ? "uppercase" : "none",
                                        fontStyle: firstStyle,
                                        fontWeight: firstWeight,
                                        border: firstBorderType,
                                        borderWidth: firstBorderWidth + "px",
                                        borderRadius: firstBorderRadius + "px",
                                        borderColor: firstBorderColor,
                                        padding: firstPadding + "px",
                                        margin: firstMargin + "px",
                                        textShadow: `${firstShadowHorizontal}px ${firstShadowVertical}px ${firstShadowBlur}px ${firstShadowColor}`,
                                    }}
                                >
                                    {firstHeading}
                                </span>
                                <span
                                    className={`${className}__second premium-headingc-${secondClip} premium-headinga-${secondAnim}`}
                                    style={{
                                        display: display,
                                        color: secondColor,
                                        backgroundColor: secondClip ? "none" : secondBackground,
                                        backgroundImage: secondClip
                                            ? `linear-gradient(to left, ${secondColor}, ${secondClipColor})`
                                            : "none",
                                        fontSize: secondSize + "px",
                                        letterSpacing: secondLetter + "px",
                                        textTransform: secondUpper ? "uppercase" : "none",
                                        fontStyle: secondStyle,
                                        fontWeight: secondWeight,
                                        border: secondBorderType,
                                        borderWidth: secondBorderWidth + "px",
                                        borderRadius: secondBorderRadius + "px",
                                        borderColor: secondBorderColor,
                                        padding: secondPadding + "px",
                                        margin: secondMargin + "px",
                                        textShadow: `${secondShadowHorizontal}px ${secondShadowVertical}px ${secondShadowBlur}px ${secondShadowColor}`,
                                    }}
                                >
                                    {secondHeading}
                                </span>
                            </h2>
                        </div>
                    </a>
                );
            }
        },
    },
];

export default deprecatedContent;