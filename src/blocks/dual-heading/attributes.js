const { __ } = wp.i18n;
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
                firstLine: '',
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
                secondLine: '',
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
    firstMarginTop: {
        type: 'number'
    },
    firstMarginRight: {
        type: 'number'
    },
    firstMarginBottom: {
        type: 'number'
    },
    firstMarginLeft: {
        type: 'number'
    },
    firstMarginTTablet: {
        type: 'number'
    },
    firstMarginRTablet: {
        type: 'number'
    },
    firstMarginBTablet: {
        type: 'number'
    },
    firstMarginLTablet: {
        type: 'number'
    },
    firstMarginTMobile: {
        type: 'number'
    },
    firstMarginRMobile: {
        type: 'number'
    },
    firstMarginBMobile: {
        type: 'number'
    },
    firstMarginLMobile: {
        type: 'number'
    },
    firstPaddingTop: {
        type: 'number'
    },
    firstPaddingRight: {
        type: 'number'
    },
    firstPaddingBottom: {
        type: 'number'
    },
    firstPaddingLeft: {
        type: 'number'
    },
    firstPaddingTTablet: {
        type: 'number'
    },
    firstPaddingRTablet: {
        type: 'number'
    },
    firstPaddingBTablet: {
        type: 'number'
    },
    firstPaddingLTablet: {
        type: 'number'
    },
    firstPaddingTMobile: {
        type: 'number'
    },
    firstPaddingRMobile: {
        type: 'number'
    },
    firstPaddingBMobile: {
        type: 'number'
    },
    firstPaddingLMobile: {
        type: 'number'
    },
    secondMarginTop: {
        type: 'number'
    },
    secondMarginRight: {
        type: 'number'
    },
    secondMarginBottom: {
        type: 'number'
    },
    secondMarginLeft: {
        type: 'number'
    },
    secondMarginTTablet: {
        type: 'number'
    },
    secondMarginRTablet: {
        type: 'number'
    },
    secondMarginBTablet: {
        type: 'number'
    },
    secondMarginLTablet: {
        type: 'number'
    },
    secondMarginTMobile: {
        type: 'number'
    },
    secondMarginRMobile: {
        type: 'number'
    },
    secondMarginBMobile: {
        type: 'number'
    },
    secondMarginLMobile: {
        type: 'number'
    },
    secondPaddingTop: {
        type: 'number'
    },
    secondPaddingRight: {
        type: 'number'
    },
    secondPaddingBottom: {
        type: 'number'
    },
    secondPaddingLeft: {
        type: 'number'
    },
    secondPaddingTTablet: {
        type: 'number'
    },
    secondPaddingRTablet: {
        type: 'number'
    },
    secondPaddingBTablet: {
        type: 'number'
    },
    secondPaddingLTablet: {
        type: 'number'
    },
    secondPaddingTMobile: {
        type: 'number'
    },
    secondPaddingRMobile: {
        type: 'number'
    },
    secondPaddingBMobile: {
        type: 'number'
    },
    secondPaddingLMobile: {
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
    },
}
export default attributes;