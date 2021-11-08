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
                firstFamily: '',
                firstSizeUnit: 'px',
                firstSize: '',
                firstSizeMobile: '',
                firstWeight: '500',
                firstStyle: '',
                firstLetter: '',
                firstUpper: false,
                firstColor: '',
                firstBackground: '',
                firstOpacity: '1',
                firstClipColor: "#54595f",
                firstBorderType: 'none',
                firstBorder: false,
                firstBorderWidth: '',
                firstBorderTop: '',
                firstBorderRight: '',
                firstBorderBottom: '',
                firstBorderLeft: '',
                firstBorderColor: '',
                firstBorderRadius: '0',
                firstShadowColor: '',
                firstShadowBlur: '0',
                firstShadowHorizontal: '0',
                firstShadowVertical: '0',
                firstMarginL: '0',
                firstMarginR: '0',
                firstPadding: '0',
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
                secondFamily: '',
                secondSizeUnit: 'px',
                secondSize: '20',
                secondSizeTablet: '',
                secondSizeMobile: '',
                secondWeight: '500',
                secondStyle: '',
                secondLetter: '',
                secondUpper: false,
                secondColor: "#54595f",
                secondBackground: '',
                secondOpacity: '',
                secondClipColor: "#6ec1e4",
                secondBorderType: "none",
                secondBorderWidth: '1',
                secondBorder: false,
                secondBorderTop: '',
                secondBorderRight: '',
                secondBorderBottom: '',
                secondBorderLeft: '',
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
                imageID: '',
                imageURL: '',
                backgroundPosition: "top center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "auto",
                fixed: false,
                containerBorderType: "none",
                containerBorderWidth: "1",
                containerBorder: false,
                containerBorderTop: '',
                containerBorderRight: '',
                containerBorderBottom: '',
                containerBorderLeft: '',
                containerBorderColor: '',
                containerBorderRadius: '0',
                containerBack: '',
                containerOpacity: 1,
            }
        ]
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
    }
}
export default attributes;