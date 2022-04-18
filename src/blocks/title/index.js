import {
    title
} from "../../../assets/js/settings";

import save from "./save";
import edit from "./edit";
import PbgIcon from "../icons";

const {
    __
} = wp.i18n;

const {
    registerBlockType
} = wp.blocks;

const titleAttrs = {
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
    stroke: {
        type: 'boolean',
        default: false
    },
    strokeColor: {
        type: "value",

    },
    strokeFull: {
        type: "number",
        default: 0
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
    horizontalText: {
        type: "number",
        default: '0'
    },
    verticalText: {
        type: "number",
        default: '0'
    },
    rotateText: {
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
    stripeWidth: {
        type: "number",
        default: 120
    },
    stripeHeight: {
        type: "number",
        default: 5
    },
    stripeTopSpacing: {
        type: "number",
        default: 0
    },
    stripeBottomSpacing: {
        type: "number",
        default: 0
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
    // titleColor: {
    //     type: "string",
    //     default: "#6ec1e4"
    // },
    // titleLetter: {
    //     type: "number",
    //     default: 0
    // },
    // titleStyle: {
    //     type: "string",
    //     default: "normal"
    // },
    // titleUpper: {
    //     type: "boolean",
    //     default: false
    // },
    // titleWeight: {
    //     type: "number",
    //     default: 600
    // },
    // titlefontSize: {
    //     type: "number",

    // },
    // titlefontSizeType: {
    //     type: "string",
    //     default: "px"
    // },
    // titlefontSizeMobile: {
    //     type: "number"
    // },
    // titlefontSizeTablet: {
    //     type: "number"
    // },
    // titleshadowColor: {
    //     type: "string"
    // },
    // titleshadowBlur: {
    //     type: "number",
    //     default: "0"
    // },
    // titleshadowHorizontal: {
    //     type: "number",
    //     default: "0"
    // },
    // titleshadowVertical: {
    //     type: "number",
    //     default: "0"
    // },
    // stripeColor: {
    //     type: "string",
    //     default: "#6ec1e4"
    // },
    // titleborderType: {
    //     type: "string",
    //     default: "none"
    // },
    // titleBorderTop: {
    //     type: "number",
    //     default: "0"
    // },
    // titleBorderRight: {
    //     type: "number",
    //     default: "0"
    // },
    // titleBorderBottom: {
    //     type: "number",
    //     default: "0"
    // },
    // titleBorderLeft: {
    //     type: "number",
    //     default: "0"
    // },
    // titleborderRadius: {
    //     type: "number",
    //     default: 1
    // },
    // titleborderColor: {
    //     type: "string"
    // },
    // BGColor: {
    //     type: "string",
    //     default: "#54595f"
    // },
    // lineColor: {
    //     type: "string",
    //     default: "#6ec1e4"
    // },
    // triangleColor: {
    //     type: "string",
    //     default: "#6ec1e4"
    // },
    stripeAlign: {
        type: "string",
        default: "center"
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
        }]
    },
    iconStyles: {
        type: "array",
        default: [{
            iconColor: "#6ec1e4",
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
            iconSize: '20',
            iconSizeTablet: '20',
            iconSizeMobile: '20',
            iconSizeType: "px",
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
    backgroundType: {
        type: "string",
        default: ""
    },
    // iconColor: {
    //     type: "string",
    //     default: "#6ec1e4"
    // },
    // iconSize: {
    //     type: "number",
    //     default: 40
    // },
    // iconSizeType: {
    //     type: "string",
    //     default: "px"
    // },
    // iconSizeMobile: {
    //     type: "number",
    //     default: 30
    // },
    // iconSizeTablet: {
    //     type: "number",
    //     default: 30
    // },
    // iconborderType: {
    //     type: "string",
    //     default: "none"
    // },
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
    // iconborderRadius: {
    //     type: "number",
    //     default: 0
    // },
    // iconborderColor: {
    //     type: "string"
    // },
    // iconshadowColor: {
    //     type: "string"
    // },
    // iconshadowBlur: {
    //     type: "number",
    //     default: "0"
    // },
    // iconshadowHorizontal: {
    //     type: "number",
    //     default: "0"
    // },
    // iconshadowVertical: {
    //     type: "number",
    //     default: "0"
    // },
    titleMarginT: {
        type: "number",
        default: "0"
    },
    titleMarginR: {
        type: "number",
        default: "0"
    },
    titleMarginB: {
        type: "number",
        default: "0"
    },
    titleMarginL: {
        type: "number",
        default: "0"
    },
    titleMarginTTablet: {
        type: "number",
        default: "0"
    },
    titleMarginRTablet: {
        type: "number",
        default: "0"
    },
    titleMarginBTablet: {
        type: "number",
        default: "0"
    },
    titleMarginLTablet: {
        type: "number",
        default: "0"
    },
    titleMarginTMobile: {
        type: "number",
        default: "0"
    },
    titleMarginRMobile: {
        type: "number",
        default: "0"
    },
    titleMarginBMobile: {
        type: "number",
        default: "0"
    },
    titleMarginLMobile: {
        type: "number",
        default: "0"
    },
    // titleMarginType: {
    //     type: "string",
    //     default: "px"
    // },

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

    // titlePaddingType: {
    //     type: "string",
    //     default: "px"
    // },

    iconBGColor: {
        type: "string"
    },
    iconPaddingT: {
        type: "number",
        default: "0"
    },
    iconPaddingR: {
        type: "number",
        default: "0"
    },
    iconPaddingB: {
        type: "number",
        default: "0"
    },
    iconPaddingL: {
        type: "number",
        default: "0"
    },
    iconPaddingTTablet: {
        type: "number",
        default: "0"
    },
    iconPaddingRTablet: {
        type: "number",
        default: "0"
    },
    iconPaddingBTablet: {
        type: "number",
        default: "0"
    },
    iconPaddingLTablet: {
        type: "number",
        default: "0"
    },
    iconPaddingTMobile: {
        type: "number",
        default: "0"
    },
    iconPaddingRMobile: {
        type: "number",
        default: "0"
    },
    iconPaddingBMobile: {
        type: "number",
        default: "0"
    },
    iconPaddingLMobile: {
        type: "number",
        default: "0"
    },

    // iconPaddingType: {
    //     type: "string",
    //     default: "px"
    // },
    iconMarginT: {
        type: "number",
        default: "10"
    },
    iconMarginR: {
        type: "number",
        default: "10"
    },
    iconMarginB: {
        type: "number",
        default: "10"
    },
    iconMarginL: {
        type: "number",
        default: "10"
    },
    iconMarginTTablet: {
        type: "number",
        default: "10"
    },
    iconMarginRTablet: {
        type: "number",
        default: "10"
    },
    iconMarginBTablet: {
        type: "number",
        default: "10"
    },
    iconMarginLTablet: {
        type: "number",
        default: "10"
    },
    iconMarginTMobile: {
        type: "number",
        default: "10"
    },
    iconMarginRMobile: {
        type: "number",
        default: "10"
    },
    iconMarginBMobile: {
        type: "number",
        default: "10"
    },
    iconMarginLMobile: {
        type: "number",
        default: "10"
    },
    // iconMarginType: {
    //     type: "string",
    //     default: "px"
    // },
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
    // textBackColor: {
    //     type: "string",
    //     default: "#6ec1e4"
    // },
    // textBackfontSize: {
    //     type: "number"
    // },
    // textBackfontSizeType: {
    //     type: "string",
    //     default: "px"
    // },
    // textBackWeight: {
    //     type: "number"
    // },
    // textBackStyle: {
    //     type: "string"
    // },
    // textBackUpper: {
    //     type: "boolean",
    //     default: false
    // },
    // textBackLetter: {
    //     type: "number"
    // },
    // textBackshadowHorizontal: {
    //     type: "number"
    // },
    // textBackshadowVertical: {
    //     type: "number"
    // },
    // textBackshadowBlur: {
    //     type: "number"
    // },
    // textBackshadowColor: {
    //     type: "number"
    // },
    blend: {
        type: "string"
    },
    zIndex: {
        type: "number"
    },
    horizontalU: {
        type: "string",
        default: "px"
    },
    verticalU: {
        type: "string",
        default: "px"
    },
    titleTag: {
        type: "string",
        default: "h2"
    },
    // shinyColor: {
    //     type: "string",
    //     default: '#fff'
    // },
    // blurColor: {
    //     type: "string",
    //     default: "#000"
    // },
    // blurShadow: {
    //     type: "number",
    //     default: "120"
    // },
    // animateDelay: {
    //     type: "number",
    //     default: "11"
    // },
    // animateduration: {
    //     type: "number",
    //     default: "1"
    // },


};

registerBlockType("premium/title", {
    title: __("Title"),
    icon: < PbgIcon icon="title" />,
    category: "premium-blocks",
    attributes: titleAttrs,
    supports: {
        inserter: title
    },
    edit: edit,
    save: save
});