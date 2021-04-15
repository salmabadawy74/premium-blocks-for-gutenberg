import PbgIcon from "../icons";
import edit from "./edit";
import { lottie } from "../../../assets/js/settings";

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;

const LottieAttr = {
    lottieId: {
        type: "string"
    },
    block_id: {
        type: "string"
    },
    classMigrate: {
        type: "boolean",
        default: false
    },
    lottieURl: {
        type: "string",
        default: ""
    },
    lottieJson: {
        type: "object"
    },
    loop: {
        type: 'boolean',
        default: true
    },
    reverse: {
        type: "boolean",
        default: false
    },
    speed: {
        type: "number",
        default: "1"
    },
    trigger: {
        type: 'string',
        default: 'none'
    },
    bottom: {
        type: "number",
        default: "0"
    },
    top: {
        type: "number",
        default: "100"
    },
    scrollSpeed: {
        type: "number",
        default: "4"
    },
    size: {
        type: "number",
        default: "200"
    },
    sizeUnit: {
        type: "string",
        default: 'px'
    },
    sizeMobile: {
        type: "number",
        default: "200"
    },
    sizeTablet: {
        type: "number",
        default: "200"
    },
    rotate: {
        type: "number",
        default: 0
    },
    align: {
        type: "string",
        default: "center"
    },
    link: {
        type: "boolean",
        default: false
    },
    url: {
        type: "string"
    },
    target: {
        type: "boolean",
        default: false
    },
    render: {
        type: 'string',
        default: 'svg'
    },
    backColor: {
        type: "string"
    },
    backOpacity: {
        type: "number",
        default: "1"
    },
    backHColor: {
        type: "string"
    },
    backHOpacity: {
        type: "number",
        default: 1
    },
    blur: {
        type: "number",
        default: "0"
    },
    bright: {
        type: "number",
        default: "100"
    },
    contrast: {
        type: "number",
        default: "100"
    },
    saturation: {
        type: "number",
        default: "100"
    },
    hue: {
        type: "number",
        default: "0"
    },
    blurH: {
        type: "number",
    },
    brightH: {
        type: "number",
        default: "100"
    },
    contrastH: {
        type: "number",
        default: "100"
    },
    saturationH: {
        type: "number",
        default: "100"
    },
    hueH: {
        type: "number",

    },
    borderType: {
        type: "string",
        default: 'none'
    },
    borderTop: {
        type: "number",
        default: 0
    },
    borderRight: {
        type: "number",
        default: 0
    },
    borderBottom: {
        type: "number",
        default: 0
    },
    borderLeft: {
        type: "number",
        default: 0
    },
    borderColor: {
        type: "string"
    },
    borderRadius: {
        type: "number",
        default: "0"
    },
    paddingT: {
        type: "number",
        default: "0"
    },
    paddingR: {
        type: "number",
        default: "0"
    },
    paddingB: {
        type: "number",
        default: "0"
    },
    paddingL: {
        type: "number",
        default: "0"
    },
    paddingU: {
        type: "string",
        default: "px"
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

registerBlockType("premium/lottie", {
    title: __("Lottie Animation"),
    icon: <PbgIcon icon="lottie" />,
    category: "premium-blocks",
    attributes: LottieAttr,
    supports: {
        inserter: lottie
    },
    example: {},
    edit: edit,
    save: () => { },
});