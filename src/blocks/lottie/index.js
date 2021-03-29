import PbgIcon from "../icons";
import edit from "./edit";
import { lottie } from "../../../assets/js/settings";

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;

const LottieAttr = {
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
        default: 1
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
        default: "100%"
    },
    size: {
        type: "number"
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
    render: {
        type: 'string',
        default: 'svg'
    },
    backColor: {
        type: "string"
    },
    backOpacity: {
        type: "number",
        default: 1
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
        default: "0"
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
        default: "0"
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
        default: 0
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
        type: "string",
        default: "px"
    },
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