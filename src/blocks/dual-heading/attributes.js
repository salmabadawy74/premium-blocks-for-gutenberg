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
export default attributes;