const { __ } = wp.i18n;
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
        default: "10"
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
        default: "10"
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
        default: "10"
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
export default attributes