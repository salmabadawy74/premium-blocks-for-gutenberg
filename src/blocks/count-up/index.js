import { countUp } from "../../../assets/js/settings";
import edit from "./edit";
import save from "./save";
import PbgIcon from "../icons";
import deprecatedContent from "./deprecated";

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;

const counterAttrs = {
    block_id: {
        type: "string"
    },
    borderCount: {
        type: "boolean",
        default: false
    },
    increment: {
        type: "string",
        default: 500
    },
    time: {
        type: "string",
        default: 1000
    },
    delay: {
        type: "string",
        default: 10
    },
    align: {
        type: "string",
        default: "center"
    },
    flexDir: {
        type: "string",
        default: "column"
    },
    numberSizeUnit: {
        type: "string",
        default: "px"
    },
    numberSize: {
        type: "number",
        default: 30
    },
    numberSizeTablet: {
        type: "number"
    },
    numberSizeMobile: {
        type: "number"
    },
    numberColor: {
        type: "string",
        default: "#6ec1e4"
    },
    numberWeight: {
        type: "number",
        default: 900
    },
    prefix: {
        type: "boolean",
        default: true
    },
    prefixTxt: {
        type: "string",
        default: "Prefix"
    },
    prefixSize: {
        type: "number",
        default: 20
    },
    prefixSizeUnit: {
        type: 'string',
        default: 'px'
    },
    prefixSizeTablet: {
        type: "number"
    },
    prefixSizeMobile: {
        type: "number"
    },
    prefixColor: {
        type: "string"
    },
    prefixWeight: {
        type: "number"
    },
    prefixGap: {
        type: "number",
        default: 2
    },
    suffix: {
        type: "boolean",
        default: true
    },
    suffixTxt: {
        type: "string",
        default: "Suffix"
    },
    suffixSizeUnit: {
        type: "string",
        default: 'px'
    },
    suffixSize: {
        type: "number",
        default: 20
    },
    suffixSizeTablet: {
        type: "number"
    },
    suffixSizeMobile: {
        type: 'number'
    },
    suffixColor: {
        type: "string"
    },
    suffixWeight: {
        type: "number"
    },
    suffixGap: {
        type: "number",
        default: 2
    },
    icon: {
        type: "string",
        default: "icon"
    },
    iconSpacing: {
        type: "number",
        default: 10
    },
    imageID: {
        type: "string"
    },
    imageURL: {
        type: "string"
    },
    iconType: {
        type: "string",
        default: "dash"
    },
    iconCheck: {
        type: "boolean",
        default: true
    },
    iconSize: {
        type: "number",
        default: 40
    },
    iconColor: {
        type: "string",
        default: "#6ec1e4"
    },
    selfAlign: {
        type: "string",
        default: "center"
    },
    titleCheck: {
        type: "boolean",
        default: true
    },
    titleTxt: {
        type: "string",
        default: "Premium Count Up"
    },
    titleSize: {
        type: "number",
        default: 20
    },
    titleSizeUnit: {
        type: "string",
        default: "px"
    },
    titleSizeTablet: {
        type: "number"
    },
    titleSizeMobile: {
        type: "number"
    },
    titleSpacing: {
        type: "number"
    },
    titleStyle: {
        type: "string"
    },
    titleUpper: {
        type: "boolean"
    },
    titleT: {
        type: "number",
        default: 1
    },
    titleB: {
        type: "number",
        default: 1
    },
    titleTTablet: {
        type: "number",
        default: 1
    },
    titleBTablet: {
        type: "number",
        default: 1
    },
    titleTMobile: {
        type: "number",
        default: 1
    },
    titleBMobile: {
        type: "number",
        default: 1
    },
    titleColor: {
        type: "string"
    },
    titleWeight: {
        type: "number",
        default: 500
    },
    faIcon: {
        type: "string",
        default: "dashicons-clock"
    },
    containerBack: {
        type: "string"
    },
    containerOpacity: {
        type: "number",
        default: "1"
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
    backgroundImageID: {
        type: "string"
    },
    backgroundImageURL: {
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
    borderRadius: {
        type: "number",
        default: "0"
    },
    borderColor: {
        type: "string"
    },
    titleFamily: {
        type: "string"
    },
    counterFamily: {
        type: "string"
    },
    prefixFamily: {
        type: "string"
    },
    suffixFamily: {
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
};

registerBlockType("premium/countup", {
    title: __("CountUp"),
    icon: <PbgIcon icon="counter" />,
    category: "premium-blocks",
    attributes: counterAttrs,
    supports: {
        inserter: countUp
    },
    example: {},
    edit: edit,
    save: save,
    deprecated: deprecatedContent
});
