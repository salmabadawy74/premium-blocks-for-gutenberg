import { generateBlockId } from '../../../components/HelperFunction';
const { __ } = wp.i18n;
const { RichText } = wp.editor

const { Fragment } = wp.element

const attributes = {
    block_id: {
        type: "string"
    },
    classMigrate: {
        type: "boolean",
        default: false
    },
    align: {
        type: "string",
        default: "left"
    },
    style: {
        type: "string",
        default: "style1"
    },
    title: {
        type: "string",
        default: "Premium Title"
    },
    iconValue: {
        type: "boolean",
        default: false
    },
    iconType: {
        type: "string",
        default: "icon"
    },
    icon: {
        type: "string",
        default: "fa fa-bars"
    },
    iconPosition: {
        type: "string",
        default: "before"
    },
    imageID: {
        type: "number"
    },
    imageURL: {
        type: "string",
        source: "attribute",
        attribute: "src",
        selector: ".premium-title-icon"
    },
    link: {
        type: "boolean",
        default: false
    },
    backgroundText: {
        type: "boolean",
        default: false
    },
    BackText: {
        type: "string",
        default: 'Awesome Title'
    },
    textWidth: {
        type: "number",
    },
    url: {
        type: "string",
        default: "#"
    },
    iconAlign: {
        type: "string",
        default: "center"
    },
    stripePosition: {
        type: "string",
        default: "top"
    },
    titleStyles: {
        type: "array",
        default: [{
            titleColor: "#6ec1e4",
            shinyColor: '#fff',
            blurColor: "#000",
            titleLetter: 0,
            titleLine: 0,
            titleStyle: 'normal',
            titleUpper: false,
            titleWeight: 600,
            titlefontSize: '',
            titlefontSizeType: "px",
            titlefontSizeMobile: '',
            titlefontSizeTablet: '',
            titleFontFamily: __('Default', 'premium-blocks-for-gutenberg'),
            titleborderType: "solid",
            titleborderRadius: 0,
            titleborderColor: '#6ec1e4',
            titleShadowColor: '',
            titleShadowBlur: '0',
            titleShadowHorizontal: '0',
            titleShadowVertical: '0',
            titleMarginType: 'px',
            titlePaddingType: 'px',
            BGColor: '#54595f',
            lineColor: "#6ec1e4",
            triangleColor: "#6ec1e4",
            stripeColor: "#6ec1e4",
            blurShadow: '120',
            animateDelay: '2',
            animateduration: '1',
        }]
    },
    titleBorderTop: {
        type: "number",
        default: "0"
    },
    titleBorderRight: {
        type: "number",
        default: "0"
    },
    titleBorderBottom: {
        type: "number",
        default: "3"
    },
    titleBorderLeft: {
        type: "number",
        default: 3
    },
    titleBorderUpdated: {
        type: "boolean",
        default: false
    },
    titleBorderWidth: {
        type: "number",
        default: "0"
    },
    stripeAlign: {
        type: "string",
        default: "center"
    },
    stripeStyles: {
        type: "array",
        default: [{
            stripeWidth: 120,
            stripeWidthTablet: 120,
            stripeWidthMobile: 120,
            stripeWidthType: "px",
            stripeHeight: 5,
            stripeHeightTablet: 5,
            stripeHeightMobile: 5,
            stripeHeightType: "px",
            stripeTopSpacing: 0,
            stripeTopSpacingTablet: 0,
            stripeTopSpacingMobile: 0,
            stripeTopSpacingType: "px",
            stripeBottomSpacing: 0,
            stripeBottomSpacingTablet: 0,
            stripeBottomSpacingMobile: 0,
            stripeBottomSpacingType: "px"
        }]
    },
    textStyles: {
        type: "array",
        default: [{
            textBackColor: "#6ec1e4",
            textBackfontSizeType: 'px',
            textBackLetter: 0,
            textBackLine: 0,
            textBackStyle: 'normal',
            textBackUpper: false,
            textBackWeight: 600,
            textBackfontSize: '',
            textBackfontSizeMobile: '',
            textBackfontSizeTablet: '',
            textBackFontFamily: __('Default', 'premium-blocks-for-gutenberg'),
            textBackshadowColor: '',
            textBackshadowBlur: '0',
            textBackshadowHorizontal: '0',
            textBackshadowVertical: '0',
            horizontalText: 0,
            horizontalTextTablet: 0,
            horizontalTextMobile: 0,
            horizontalTextType: "px",
            verticalText: 0,
            verticalTextTablet: 0,
            verticalTextMobile: 0,
            verticalTextType: "px",
            rotateText: 0,
            rotateTextTablet: 0,
            rotateTextMobile: 0
        }]
    },
    iconStyles: {
        type: "array",
        default: [{
            iconColor: "#6ec1e4",
            iconSize: "40",
            iconSizeTablet: "40",
            iconSizeMobile: "40",
            iconSizeType: "px",
            containerBack: '',
            backgroundImageID: '',
            backgroundImageURL: '',
            backgroundRepeat: 'no-reapet',
            backgroundPosition: 'top center',
            backgroundSize: 'auto',
            fixed: false,
            gradientLocationOne: '0',
            gradientColorTwo: '',
            gradientLocationTwo: '100',
            gradientType: 'linear',
            gradientAngle: '180',
            gradientPosition: 'center center',
            iconborderType: "none",
            iconborderRadius: 0,
            iconborderColor: '#6ec1e4',
            iconPaddingType: 'px',
            iconMarginType: 'px',
            iconshadowColor: '',
            iconshadowBlur: '0',
            iconshadowHorizontal: '0',
            iconshadowVertical: '0',
        }]
    },
    strokeStyles: {
        type: "array",
        default: [{
            stroke: false,
            strokeColor: "",
            strokeFull: 0,
            strokeFullTablet: 0,
            strokeFullMobile: 0
        }]
    },
    backgroundType: {
        type: "string",
        default: ""
    },
    iconBorderTop: {
        type: "number",
        default: "1"
    },
    iconBorderRight: {
        type: "number",
        default: "1"
    },
    iconBorderBottom: {
        type: "number",
        default: "1"
    },
    iconBorderLeft: {
        type: "number",
        default: "1"
    },
    iconBorderUpdated: {
        type: "boolean",
        default: false
    },
    iconBorderWidth: {
        type: "number",
        default: "1"
    },
    titleMarginT: {
        type: "number"
    },
    titleMarginR: {
        type: "number"
    },
    titleMarginB: {
        type: "number"
    },
    titleMarginL: {
        type: "number"
    },
    titleMarginTTablet: {
        type: "number"
    },
    titleMarginRTablet: {
        type: "number"
    },
    titleMarginBTablet: {
        type: "number"
    },
    titleMarginLTablet: {
        type: "number"
    },
    titleMarginTMobile: {
        type: "number"
    },
    titleMarginRMobile: {
        type: "number"
    },
    titleMarginBMobile: {
        type: "number"
    },
    titleMarginLMobile: {
        type: "number"
    },
    titlePaddingT: {
        type: "number",
        default: "0"
    },
    titlePaddingR: {
        type: "number",
        default: "0"
    },
    titlePaddingB: {
        type: "number",
        default: "0"
    },
    titlePaddingL: {
        type: "number",
        default: "0"
    },
    titlePaddingTTablet: {
        type: "number",
        default: "0"
    },
    titlePaddingRTablet: {
        type: "number",
        default: "0"
    },
    titlePaddingBTablet: {
        type: "number",
        default: "0"
    },
    titlePaddingLTablet: {
        type: "number",
        default: "0"
    },
    titlePaddingTMobile: {
        type: "number",
        default: "0"
    },
    titlePaddingRMobile: {
        type: "number",
        default: "0"
    },
    titlePaddingBMobile: {
        type: "number",
        default: "0"
    },
    titlePaddingLMobile: {
        type: "number",
        default: "0"
    },
    iconBGColor: {
        type: "string"
    },
    iconPaddingT: {
        type: "number",
        default: ""
    },
    iconPaddingR: {
        type: "number",
        default: ""
    },
    iconPaddingB: {
        type: "number",
        default: ""
    },
    iconPaddingL: {
        type: "number",
        default: ""
    },
    iconPaddingTTablet: {
        type: "number",
        default: ""
    },
    iconPaddingRTablet: {
        type: "number",
        default: ""
    },
    iconPaddingBTablet: {
        type: "number",
        default: ""
    },
    iconPaddingLTablet: {
        type: "number",
        default: ""
    },
    iconPaddingTMobile: {
        type: "number",
        default: ""
    },
    iconPaddingRMobile: {
        type: "number",
        default: ""
    },
    iconPaddingBMobile: {
        type: "number",
        default: ""
    },
    iconPaddingLMobile: {
        type: "number",
        default: ""
    },
    iconMarginT: {
        type: "number",
        default: ""
    },
    iconMarginR: {
        type: "number",
        default: ""
    },
    iconMarginB: {
        type: "number",
        default: ""
    },
    iconMarginL: {
        type: "number",
        default: ""
    },
    iconMarginTTablet: {
        type: "number",
        default: ""
    },
    iconMarginRTablet: {
        type: "number",
        default: ""
    },
    iconMarginBTablet: {
        type: "number",
        default: ""
    },
    iconMarginLTablet: {
        type: "number",
        default: ""
    },
    iconMarginTMobile: {
        type: "number",
        default: ""
    },
    iconMarginRMobile: {
        type: "number",
        default: ""
    },
    iconMarginBMobile: {
        type: "number",
        default: ""
    },
    iconMarginLMobile: {
        type: "number",
        default: ""
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
    z_index: {
        type: "number"
    },
    blend: {
        type: 'string'
    },
    lottieURl: {
        type: 'string'
    },
    loop: {
        type: 'boolean',
        default: true
    },
    reversedir: {
        type: 'boolean',
        default: false
    },
    target: {
        type: 'boolean',
        default: false
    },
    blend: {
        type: "string"
    },
    zIndex: {
        type: "number"
    },
    titleTag: {
        type: "string",
        default: "h2"
    },
}

const deprecated = {
    attributes: attributes,
    isEligible() {
        return true;
    },
    migrate: (attributes) => {
        let newAttributes = {
            blockId: attributes.block_id ? "premium-heading-" + generateBlockId(attributes.block_id) : '',
            titleMargin: {
                "Desktop": {
                    top: attributes?.titleMarginT || '',
                    right: attributes?.titleMarginR || '',
                    bottom: attributes?.titleMarginB || '',
                    left: attributes?.titleMarginL || ''
                },
                "Tablet": {
                    top: attributes?.titleMarginTTablet || '',
                    right: attributes?.titleMarginRTablet || '',
                    bottom: attributes?.titleMarginBTablet || '',
                    left: attributes?.titleMarginLTablet || ''
                },
                "Mobile": {
                    top: attributes?.titleMarginTMobile || '',
                    right: attributes?.titleMarginRMobile || '',
                    bottom: attributes?.titleMarginBMobile || '',
                    left: attributes?.titleMarginLMobile || ''
                },
                "unit": "px"
            },
            iconMargin: {
                "Desktop": {
                    top: attributes?.iconMarginT || '',
                    right: attributes?.iconMarginR || '',
                    bottom: attributes?.iconMarginB || '',
                    left: attributes?.iconMarginL || ''
                },
                "Tablet": {
                    top: attributes?.iconMarginTTablet || '',
                    right: attributes?.iconMarginRTablet || '',
                    bottom: attributes?.iconMarginBTablet || '',
                    left: attributes?.iconMarginLTablet || ''
                },
                "Mobile": {
                    top: attributes?.iconMarginTMobile || '',
                    right: attributes?.iconMarginRMobile || '',
                    bottom: attributes?.iconMarginBMobile || '',
                    left: attributes?.iconMarginLMobile || ''
                },
                "unit": "px"
            },
            titlePadding: {
                "Desktop": {
                    top: attributes?.titlePaddingT || '',
                    right: attributes?.titlePaddingR || '',
                    bottom: attributes?.titlePaddingB || '',
                    left: attributes?.titlePaddingL || ''
                },
                "Tablet": {
                    top: attributes?.titlePaddingTTablet || '',
                    right: attributes?.titlePaddingRTablet || '',
                    bottom: attributes?.titlePaddingBTablet || '',
                    left: attributes?.titlePaddingLTablet || ''
                },
                "Mobile": {
                    top: attributes?.titlePaddingTMobile || '',
                    right: attributes?.titlePaddingRMobile || '',
                    bottom: attributes?.titlePaddingBMobile || '',
                    left: attributes?.titlePaddingLMobile || ''
                },
                "unit": "px"
            },
            iconPadding: {
                "Desktop": {
                    top: attributes?.iconPaddingT || '',
                    right: attributes?.iconPaddingR || '',
                    bottom: attributes?.iconPaddingB || '',
                    left: attributes?.iconPaddingL || ''
                },
                "Tablet": {
                    top: attributes?.iconPaddingTTablet || '',
                    right: attributes?.iconPaddingRTablet || '',
                    bottom: attributes?.iconPaddingBTablet || '',
                    left: attributes?.iconPaddingLTablet || ''
                },
                "Mobile": {
                    top: attributes?.iconPaddingTMobile || '',
                    right: attributes?.iconPaddingRMobile || '',
                    bottom: attributes?.iconPaddingBMobile || '',
                    left: attributes?.iconPaddingLMobile || ''
                },
                "unit": "px"
            },
            titleBorder: {
                "borderType": attributes?.titleStyles?.[0]?.titleborderType || '',
                "borderColor": attributes?.titleStyles?.[0]?.titleborderColor || '',
                "borderWidth": {
                    Desktop: {
                        top: attributes?.titleBorderTop || '',
                        right: attributes?.titleBorderRight || '',
                        bottom: attributes?.titleBorderBottom || '',
                        left: attributes?.titleBorderLeft || ''
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
                        top: attributes?.titleStyles?.[0]?.titleborderRadius || '',
                        right: attributes?.titleStyles?.[0]?.titleborderRadius || '',
                        bottom: attributes?.titleStyles?.[0]?.titleborderRadius || '',
                        left: attributes?.titleStyles?.[0]?.titleborderRadius || ''
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
            titleShadow: {
                'color': attributes?.titleStyles?.[0]?.titleShadowColor || '',
                'blur': attributes?.titleStyles?.[0]?.titleShadowBlur || '',
                'horizontal': attributes?.titleStyles?.[0]?.titleShadowHorizontal || '',
                'vertical': attributes?.titleStyles?.[0]?.titleShadowVertical || ''
            },
            titleTypography: {
                "fontWeight": attributes?.titleStyles?.[0]?.titleWeight || '',
                'fontStyle': attributes?.titleStyles?.[0]?.titleStyle || '',
                'textTransform': attributes?.titleStyles?.[0]?.titleUpper || '',
                'letterSpacing': attributes?.titleStyles?.[0]?.titleLetter || '',
                'fontFamily': attributes?.titleStyles?.[0]?.titleFontFamily || '',
                'lineHeight': attributes?.titleStyles?.[0]?.titleLine || '',
                'textDecoration': '',
                'fontSize': {
                    'Desktop': attributes?.titleStyles?.[0]?.titlefontSize || '',
                    "Tablet": attributes?.titleStyles?.[0]?.titlefontSizeTablet || '',
                    "Mobile": attributes?.titleStyles?.[0]?.titlefontSizeMobile || '',
                    "unit": attributes?.titleStyles?.[0]?.titlefontSizeType || 'px'
                }
            },
            stripeWidth: {
                'Desktop': attributes?.stripeStyles?.[0]?.stripeWidth || 120,
                'Tablet': attributes?.stripeStyles?.[0]?.stripeWidthTablet || 120,
                'Mobile': attributes?.stripeStyles?.[0]?.stripeWidthMobile || 120,
                'unit': attributes?.stripeStyles?.[0]?.stripeWidthType || 'px'
            },
            stripeHeight: {
                'Desktop': attributes?.stripeStyles?.[0]?.stripeHeight || 5,
                'Tablet': attributes?.stripeStyles?.[0]?.stripeHeightTablet || 5,
                'Mobile': attributes?.stripeStyles?.[0]?.stripeHeightMobile || 5,
                'unit': attributes?.stripeStyles?.[0]?.stripeHeightType || 'px'
            },
            stripeTopSpacing: {
                'Desktop': attributes?.stripeStyles?.[0]?.stripeTopSpacing || 0,
                'Tablet': attributes?.stripeStyles?.[0]?.stripeTopSpacingTablet || 0,
                'Mobile': attributes?.stripeStyles?.[0]?.stripeTopSpacingMobile || 0,
                'unit': attributes?.stripeStyles?.[0]?.stripeTopSpacingType || 'px'
            },
            stripeBottomSpacing: {
                'Desktop': attributes?.stripeStyles?.[0]?.stripeBottomSpacing || 0,
                'Tablet': attributes?.stripeStyles?.[0]?.stripeBottomSpacingTablet || 0,
                'Mobile': attributes?.stripeStyles?.[0]?.stripeBottomSpacingMobile || 0,
                'unit': attributes?.stripeStyles?.[0]?.stripeBottomSpacingType || 'px'
            },
            textTypography: {
                "fontWeight": attributes?.textStyles?.[0]?.textBackWeight || '',
                'fontStyle': attributes?.textStyles?.[0]?.textBackStyle || '',
                'textTransform': attributes?.textStyles?.[0]?.textBackUpper || '',
                'letterSpacing': attributes?.textStyles?.[0]?.textBackLetter || '',
                'fontFamily': attributes?.textStyles?.[0]?.textBackFontFamily || '',
                'lineHeight': attributes?.textStyles?.[0]?.textBackLine || '',
                'textDecoration': '',
                'fontSize': {
                    'Desktop': attributes?.textStyles?.[0]?.textBackfontSize || '',
                    "Tablet": attributes?.textStyles?.[0]?.textBackfontSizeTablet || '',
                    "Mobile": attributes?.textStyles?.[0]?.textBackfontSizeMobile || '',
                    "unit": attributes?.textStyles?.[0]?.textBackfontSizeType || 'px'
                }
            },
            textBackshadow: {
                'color': attributes?.textStyles?.[0]?.textBackshadowColor || '',
                'blur': attributes?.textStyles?.[0]?.textBackshadowBlur || '',
                'horizontal': attributes?.textStyles?.[0]?.textBackshadowHorizontal || '',
                'vertical': attributes?.textStyles?.[0]?.textBackshadowVertical || '',
            },
            horizontalText: {
                'Desktop': attributes?.textStyles?.[0]?.horizontalText || 0,
                'Tablet': attributes?.textStyles?.[0]?.horizontalTextTablet || 0,
                'Mobile': attributes?.textStyles?.[0]?.horizontalTextMobile || 0,
                'unit': attributes?.textStyles?.[0]?.horizontalTextType || 'px'
            },
            verticalText: {
                'Desktop': attributes?.textStyles?.[0]?.verticalText || 0,
                'Tablet': attributes?.textStyles?.[0]?.verticalTextTablet || 0,
                'Mobile': attributes?.textStyles?.[0]?.verticalTextMobile || 0,
                'unit': attributes?.textStyles?.[0]?.verticalTextType || 'px'
            },
            rotateText: {
                'Desktop': attributes?.textStyles?.[0]?.rotateText || 0,
                'Tablet': attributes?.textStyles?.[0]?.rotateTextTablet || 0,
                'Mobile': attributes?.textStyles?.[0]?.rotateTextMobile || 0
            },
            iconshadow: {
                'color': attributes?.iconStyles?.[0]?.iconshadowColor || '',
                'blur': attributes?.iconStyles?.[0]?.iconshadowBlur || '',
                'horizontal': attributes?.iconStyles?.[0]?.iconshadowHorizontal || '',
                'vertical': attributes?.iconStyles?.[0]?.iconshadowVertical || '',
            },
            iconBackground: {
                'backgroundType': attributes?.backgroundType || '',
                'backgroundColor': attributes?.iconStyles?.[0]?.containerBack || '',
                'backgroundImageID': attributes?.iconStyles?.[0]?.backgroundImageID || '',
                'backgroundImageURL': attributes?.iconStyles?.[0]?.backgroundImageURL || '',
                'backgroundPosition': attributes?.iconStyles?.[0]?.backgroundPosition || '',
                'backgroundRepeat': attributes?.iconStyles?.[0]?.backgroundRepeat || '',
                'backgroundSize': attributes?.iconStyles?.[0]?.backgroundSize || '',
                'fixed': attributes?.iconStyles?.[0]?.fixed || false,
                'gradientLocationOne': attributes?.iconStyles?.[0]?.gradientLocationOne || "",
                'gradientColorTwo': attributes?.iconStyles?.[0]?.gradientColorTwo || '',
                'gradientLocationTwo': attributes?.iconStyles?.[0]?.gradientLocationTwo || '',
                'gradientAngle': attributes?.iconStyles?.[0]?.gradientAngle || '',
                'gradientPosition': attributes?.iconStyles?.[0]?.gradientPosition || '',
                'gradientType': attributes?.iconStyles?.[0]?.gradientType || ''
            },
            iconSize: {
                'Desktop': attributes?.iconStyles?.[0]?.iconSize || 40,
                'Tablet': attributes?.iconStyles?.[0]?.iconSizeTablet || 40,
                'Mobile': attributes?.iconStyles?.[0]?.iconSizeMobile || 40,
                'unit': attributes?.iconStyles?.[0]?.iconSizeType || 'px'
            },
            iconBorder: {
                "borderType": attributes?.iconStyles?.[0]?.iconborderType || '',
                "borderColor": attributes?.iconStyles?.[0]?.iconborderColor || '',
                "borderWidth": {
                    Desktop: {
                        top: attributes?.iconBorderTop || '',
                        right: attributes?.iconBorderRight || '',
                        bottom: attributes?.iconBorderBottom || '',
                        left: attributes?.iconBorderLeft || ''
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
                        top: attributes?.iconStyles?.[0]?.iconborderRadius || '',
                        right: attributes?.iconStyles?.[0]?.iconborderRadius || '',
                        bottom: attributes?.iconStyles?.[0]?.iconborderRadius || '',
                        left: attributes?.iconStyles?.[0]?.iconborderRadius || ''
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
            strokeFull: {
                'Desktop': attributes?.strokeStyles?.[0]?.strokeFull || 40,
                'Tablet': attributes?.strokeStyles?.[0]?.strokeFullTablet || 40,
                'Mobile': attributes?.strokeStyles?.[0]?.strokeFullMobile || 40,
            },
            iconAlign: {
                Desktop: attributes?.iconAlign || "center",
                Tablet: attributes?.iconAlign || "center",
                Mobile: attributes?.iconAlign || "center"
            },
            align: {
                Desktop: attributes?.align || "left",
                Tablet: attributes?.align || "left",
                Mobile: attributes?.align || "left"
            },
            stripeAlign: {
                Desktop: attributes?.stripeAlign || "center",
                Tablet: attributes?.stripeAlign || "center",
                Mobile: attributes?.stripeAlign || "center"
            }
        }
        return Object.assign(attributes, newAttributes)
    },
    save: props => {
        const { attributes } = props

        const {
            block_id,
            align,
            titleTag,
            style,
            title,
            iconValue,
            iconType,
            icon,
            lottieURl,
            loop,
            reversedir,
            iconPosition,
            imageURL,
            link,
            url,
            target,
            iconAlign,
            stripePosition,
            stripeStyles,
            strokeStyles,
            titleStyles,
            titleBorderTop,
            titleBorderRight,
            titleBorderBottom,
            titleBorderLeft,
            titleBorderUpdated,
            titleBorderWidth,
            iconStyles,
            backgroundType,
            iconBorderWidth,
            iconBorderUpdated,
            textStyles,
            stripeAlign,
            iconBorderTop,
            iconBorderRight,
            iconBorderBottom,
            iconBorderLeft,
            backgroundText,
            BackText,
            textWidth,
            blend,
            zIndex,
            hideDesktop,
            hideTablet,
            hideMobile,
        } = attributes;

        const styleContainer = title.split("").map(letter => {
            return (
                <RichText.Content
                    tagName='span'
                    className={`premium-title-style9-letter`}
                    value={letter}
                    style={{
                        color: titleStyles?.[0]?.titleColor
                    }}
                />
            )
        });

        let btnGrad, btnGrad2, btnbg;

        if (undefined !== backgroundType && 'gradient' === backgroundType) {
            btnGrad = ('transparent' === iconStyles?.[0]?.containerBack || undefined === iconStyles?.[0]?.containerBack ? 'rgba(255,255,255,0)' : iconStyles?.[0]?.containerBack);
            btnGrad2 = (undefined !== iconStyles?.[0]?.gradientColorTwo && undefined !== iconStyles?.[0]?.gradientColorTwo && '' !== iconStyles?.[0]?.gradientColorTwo ? iconStyles?.[0]?.gradientColorTwo : '#777');
            if ('radial' === iconStyles?.[0]?.gradientType) {
                btnbg = `radial-gradient(at ${iconStyles?.[0]?.gradientPosition}, ${btnGrad} ${iconStyles?.[0]?.gradientLocationOne}%, ${btnGrad2} ${iconStyles?.[0]?.gradientLocationTwo}%)`;
            } else if ('radial' !== iconStyles?.[0]?.gradientType) {
                btnbg = `linear-gradient(${iconStyles?.[0]?.gradientAngle}deg, ${btnGrad} ${iconStyles?.[0]?.gradientLocationOne}%, ${btnGrad2} ${iconStyles?.[0]?.gradientLocationTwo}%)`;
            }
        } else {
            btnbg = iconStyles?.[0]?.backgroundImageURL ? `url('${iconStyles?.[0]?.backgroundImageURL}')` : ''
        }

        const renderCss = (
            <style>
                {`
                        #premium-title-${block_id} .premium-title-style8__wrap .premium-title-text-title[data-animation='shiny'] {
                            --base-color: ${titleStyles?.[0]?.titleColor} !important;
                            --shiny-color: ${titleStyles?.[0]?.shinyColor} !important;
                            --animation-speed: ${titleStyles?.[0]?.animateduration}s !important;
                        }
                        #premium-title-${block_id} .premium-title-header {
                            --shadow-color: ${titleStyles?.[0]?.blurColor} !important;
                            --shadow-value: ${titleStyles?.[0]?.blurShadow}px !important;
                            color: ${titleStyles?.[0]?.titleColor} !important;
                        }
                        #premium-title-${block_id} .premium-title .style1 .premium-title-header {
                            border-style: ${titleStyles?.[0]?.titleborderType} !important;
                            border-width: ${titleBorderUpdated
                        ? `${titleBorderTop}px ${titleBorderRight}px ${titleBorderBottom}px ${titleBorderLeft}px`
                        : titleBorderWidth + "px"} !important;
                            border-radius: ${titleStyles?.[0]?.titleborderRadius || 0}px !important;
                            border-color: ${titleStyles?.[0]?.titleborderColor} !important;
                            border-left: ${titleBorderLeft >= "1" ? `${titleBorderLeft}px ${titleStyles?.[0]?.titleborderType} ${titleStyles?.[0]?.titleborderColor}` : ""} !important;
                        }
                        #premium-title-${block_id} .premium-title .style2{
                            border-style: ${titleStyles?.[0]?.titleborderType} !important;
                            border-width: ${titleBorderUpdated
                        ? `${titleBorderTop}px ${titleBorderRight}px ${titleBorderBottom}px ${titleBorderLeft}px`
                        : titleBorderWidth + "px"}!important;
                            border-radius: ${titleStyles?.[0]?.titleborderRadius || 0}px !important;
                            border-color: ${titleStyles?.[0]?.titleborderColor}!important;
                            border-bottom: ${titleBorderBottom >= "0" ? `${titleBorderBottom}px ${titleStyles?.[0]?.titleborderType} ${titleStyles?.[0]?.titleborderColor} !important` : ""};
                        }
                        #premium-title-${block_id} .premium-title .style4{
                            border-style: ${titleStyles?.[0]?.titleborderType} !important;
                            border-width: ${titleBorderUpdated
                        ? `${titleBorderTop}px ${titleBorderRight}px ${titleBorderBottom}px ${titleBorderLeft}px`
                        : titleBorderWidth + "px"} !important;
                            border-radius: ${titleStyles?.[0]?.titleborderRadius || 0}px !important;
                            border-color: ${titleStyles?.[0]?.titleborderColor} !important;
                            border-bottom: ${titleBorderBottom >= "0" ? `${titleBorderBottom}px ${titleStyles?.[0]?.titleborderType} ${titleStyles?.[0]?.titleborderColor} !important` : ""};
                        }
                        #premium-title-${block_id} .premium-title .style5{
                            border-style: ${titleStyles?.[0]?.titleborderType} !important;
                            border-width: ${titleBorderUpdated
                        ? `${titleBorderTop}px ${titleBorderRight}px ${titleBorderBottom}px ${titleBorderLeft}px`
                        : titleBorderWidth + "px"} !important;
                            border-radius: ${titleStyles?.[0]?.titleborderRadius || 0}px !important;
                            border-color: ${titleStyles?.[0]?.titleborderColor} !important;
                            border-bottom: ${titleBorderBottom >= "0" ? `${titleBorderBottom}px ${titleStyles?.[0]?.titleborderType} ${titleStyles?.[0]?.titleborderColor} !important` : ""};
                        }
                        #premium-title-${block_id} .premium-title .style6{
                            border-style: ${titleStyles?.[0]?.titleborderType} !important;
                            border-width: ${titleBorderUpdated
                        ? `${titleBorderTop}px ${titleBorderRight}px ${titleBorderBottom}px ${titleBorderLeft}px`
                        : titleBorderWidth + "px"} !important;
                            border-radius: ${titleStyles?.[0]?.titleborderRadius || 0}px !important;
                            border-color: ${titleStyles?.[0]?.titleborderColor} !important;
                            border-bottom: ${titleBorderBottom >= "0" ? `${titleBorderBottom}px ${titleStyles?.[0]?.titleborderType} ${titleStyles?.[0]?.titleborderColor} !important` : ""};
                        }
                        #premium-title-${block_id} .premium-title-style2__wrap {
                            background-color: ${titleStyles?.[0]?.BGColor} !important;
                        }
                        #premium-title-${block_id} .premium-title-style3__wrap {
                            background-color: ${titleStyles?.[0]?.BGColor} !important;
                        }
                        #premium-title-${block_id} .premium-title-style5__wrap {
                            border-bottom: 2px solid ${titleStyles?.[0]?.lineColor} !important;
                        }
                        #premium-title-${block_id} .premium-title-style6__wrap {
                            border-bottom: 2px solid ${titleStyles?.[0]?.lineColor} !important;
                        }
                        #premium-title-${block_id} .premium-title-style6__wrap:before {
                            border-bottom-color: ${titleStyles?.[0]?.triangleColor} !important;
                        }
                        #premium-title-${block_id} .premium-title-icon {
                            color: ${iconStyles?.[0]?.iconColor} !important;
                            background-color: ${backgroundType === "solid" ? iconStyles?.[0]?.containerBack : "transparent"} !important;
                            background-image: ${btnbg} !important;
                            background-repeat: ${iconStyles?.[0]?.backgroundRepeat} !important;
                            background-position: ${iconStyles?.[0]?.backgroundPosition} !important;
                            background-size: ${iconStyles?.[0]?.backgroundSize} !important;
                            background-attachment: ${iconStyles?.[0]?.fixed ? "fixed" : "unset"} !important;
                            border-style: ${iconStyles?.[0]?.iconborderType} !important;
                            border-width: ${iconBorderUpdated
                        ? `${iconBorderTop}px ${iconBorderRight}px ${iconBorderBottom}px ${iconBorderLeft}px`
                        : iconBorderWidth + "px"} !important;
                            border-radius: ${iconStyles?.[0]?.iconborderRadius || 0}px !important;
                            border-color: ${iconStyles?.[0]?.iconborderColor} !important;
                            text-shadow: ${iconStyles?.[0]?.iconshadowHorizontal}px ${iconStyles?.[0]?.iconshadowVertical}px ${iconStyles?.[0]?.iconshadowBlur}px ${iconStyles?.[0]?.iconshadowColor} !important;
                        }
                        #premium-title-${block_id} .premium-title-bg-text:before {
                            content: ${BackText};
                            width: ${textWidth};
                            color: ${textStyles?.[0]?.textBackColor} !important;
                            font-weight: ${textStyles?.[0]?.textBackWeight} !important;
                            letter-spacing: ${textStyles?.[0]?.textBackLetter}px !important;
                            line-height: ${textStyles?.[0]?.textBackLine}px !important;
                            font-style: ${textStyles?.[0]?.textBackStyle} !important;
                            text-transform: ${textStyles?.[0]?.textBackUpper ? "uppercase" : "none"} !important;
                            font-family: ${textStyles?.[0]?.textBackFontFamily} !important;
                            text-shadow: ${textStyles?.[0]?.textBackshadowHorizontal}px ${textStyles?.[0]?.textBackshadowVertical}px ${textStyles?.[0]?.textBackshadowBlur}px ${textStyles?.[0]?.textBackshadowColor} !important;
                            mix-blend-mode: ${blend} !important;
                            z-index: ${zIndex} !important;
                            -webkit-text-stroke-color: ${strokeStyles?.[0]?.strokeColor} !important;
                        }
                        #premium-title-${block_id} .premium-title-style7-stripe-span {
                            background-color: ${titleStyles?.[0]?.stripeColor} !important;
                        }
                        #premium-title-${block_id} .premium-title-style9__wrap .premium-letters-container .premium-title-style9-letter {
                            font-weight: ${titleStyles?.[0]?.titleWeight} !important;
                            letter-spacing: ${titleStyles?.[0]?.titleLetter}px !important;
                            line-height: ${titleStyles?.[0]?.titleLine ? titleStyles?.[0]?.titleLine : ''}px !important;
                            font-style: ${titleStyles?.[0]?.titleStyle} !important;
                            text-transform: ${titleStyles?.[0]?.titleUpper ? "uppercase" : "none"} !important;
                            font-family: ${titleStyles?.[0]?.titleFontFamily} !important;
                            text-shadow: ${titleStyles?.[0]?.titleShadowHorizontal}px ${titleStyles?.[0]?.titleShadowVertical}px ${titleStyles?.[0]?.titleShadowBlur}px ${titleStyles?.[0]?.titleShadowColor} !important;
                        }
                    `}
            </style>
        );

        return (
            <div
                id={`premium-title-${block_id}`}
                className={`premium-block-${block_id} ${hideDesktop} ${hideTablet} ${hideMobile}`}
                style={{
                    textAlign: align,
                }}>
                {renderCss}
                <div className={`premium-title   ${backgroundText ? 'premium-title-bg-text' : ""}`} style={{
                    textAlign: align,
                }} data-backgroundText={BackText}>
                    <div className={`premium-title-container ${style} ${style}-${align}`} data-blur-delay={titleStyles?.[0]?.animateDelay} data-shiny-dur={titleStyles?.[0]?.animateduration}>
                        {React.createElement(titleTag,
                            {
                                className: `premium-title-header premium-title-${style}__wrap ${align} ${iconValue ? iconPosition : ""} ${iconPosition == 'top' ? `premium-title-${iconAlign}` : ""}`,
                                'data-blur-delay': `${titleStyles?.[0]?.animateDelay}`,
                                'data-shiny-dur': `${titleStyles?.[0]?.animateduration}`,
                                style: {
                                    color: titleStyles?.[0]?.titleColor,
                                    fontWeight: titleStyles?.[0]?.titleWeight,
                                    letterSpacing: titleStyles?.[0]?.titleLetter + "px",
                                    lineHeight: (titleStyles?.[0]?.titleLine ? titleStyles?.[0]?.titleLine : "") + "px",
                                    fontStyle: titleStyles?.[0]?.titleStyle,
                                    textTransform: titleStyles?.[0]?.titleUpper ? "uppercase" : "none",
                                    fontFamily: titleStyles?.[0]?.titleFontFamily,
                                    textShadow: `${titleStyles?.[0]?.titleShadowHorizontal}px ${titleStyles?.[0]?.titleShadowVertical}px ${titleStyles?.[0]?.titleShadowBlur}px ${titleStyles?.[0]?.titleShadowColor}`,
                                }
                            },
                            [
                                <Fragment>
                                    {style === 'style7' ?
                                        <Fragment>
                                            {
                                                iconPosition != 'top' && iconValue &&
                                                <span className={`premium-title-style7-stripe__wrap premium-stripe-${stripePosition} premium-stripe-${stripeAlign}`}>
                                                    <span className={`premium-title-style7-stripe-span`}></span>
                                                </span>
                                            }
                                            {
                                                !iconValue &&
                                                <span className={`premium-title-style7-stripe__wrap premium-stripe-${stripePosition} premium-stripe-${stripeAlign}`}>
                                                    <span className={`premium-title-style7-stripe-span`}></span>
                                                </span>
                                            }
                                            <div className={`premium-title-style7-inner-title`}>
                                                {
                                                    iconValue && iconType == 'icon' && <i className={`premium-title-icon ${icon}`} />
                                                }
                                                {
                                                    iconValue && iconType == 'image' && < img className={`premium-title-icon`} src={imageURL} />
                                                }
                                                {
                                                    iconValue && iconType == 'lottie' &&
                                                    <div
                                                        className="premium-title-icon premium-lottie-animation"
                                                        data-loop={loop}
                                                        data-lottieurl={`${lottieURl}`}
                                                        data-reverse={reversedir}
                                                        data-trigger={"none"}
                                                    >

                                                    </div>
                                                }

                                                {
                                                    iconPosition === 'top' &&
                                                    <span className={`premium-title-style7-stripe__wrap premium-stripe-${stripePosition} premium-stripe-${stripeAlign}`}>
                                                        <span className={`premium-title-style7-stripe-span`}></span>
                                                    </span>
                                                }
                                                <RichText.Content
                                                    tagName='span'
                                                    className={`premium-title-text-title`}
                                                    value={title}
                                                    style={{
                                                        color: titleStyles?.[0]?.titleColor,
                                                    }}
                                                />
                                            </div>
                                        </Fragment>
                                        : style === "style9" ? <Fragment>
                                            {
                                                iconValue && iconType == 'icon' && <i className={`premium-title-icon ${icon}`} />
                                            }
                                            {
                                                iconValue && iconType == 'image' && < img className={`premium-title-icon`} src={imageURL} />
                                            }
                                            {
                                                iconValue && iconType == 'lottie' &&
                                                <div
                                                    className="premium-title-icon premium-lottie-animation"
                                                    data-loop={loop}
                                                    data-lottieurl={`${lottieURl}`}
                                                    data-reverse={reversedir}
                                                    data-trigger={"none"}
                                                >

                                                </div>
                                            }
                                            <span
                                                className={`premium-letters-container`}
                                                style={{
                                                    color: titleStyles?.[0]?.titleColor
                                                }}
                                            >
                                                {styleContainer}
                                            </span>

                                        </Fragment> : <Fragment>
                                            {
                                                iconValue && iconType == 'icon' && <i className={`premium-title-icon ${icon}`} />
                                            }
                                            {
                                                iconValue && iconType == 'image' && < img className={`premium-title-icon`} src={imageURL} />
                                            }
                                            {
                                                iconValue && iconType == 'lottie' &&
                                                <div
                                                    className="premium-title-icon premium-lottie-animation"
                                                    data-loop={loop}
                                                    data-lottieurl={`${lottieURl}`}
                                                    data-reverse={reversedir}
                                                    data-trigger={"none"}
                                                >

                                                </div>
                                            }
                                            <RichText.Content
                                                tagName='span'
                                                className={`premium-title-text-title`}
                                                value={title}
                                                style={{
                                                    minHeight: '15px',
                                                    margin: 'revert'
                                                }}
                                            />
                                        </Fragment>}
                                    {link && url !== ' ' && <a rel="noopener noreferrer" target={"_self"} href={`${url}`} ></a>}
                                </Fragment>
                            ])}
                    </div>
                </div>
            </div >
        )
    }
};

export default deprecated