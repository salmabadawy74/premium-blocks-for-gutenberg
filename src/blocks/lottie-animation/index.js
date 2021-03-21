
import PbgIcon from "../icons";
import edit from "./edit";
import save from "./save";

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
    size: {
        type: "number"
    },
    sizeUnit: {
        type: "string",
        default: 'px'
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
    backColor: {
        type: "string"
    },
    backOpacity: {
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
    borderType:{
        type:"string",
        default:'none'
    },
    borderWidth:{
        type:"number",
        default:0
    },
    borderColor:{
        type:"string"
    },
    borderRadius:{
        type:"number",
        default:0
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
    example: {},
    edit: edit,
    save: () => { },
});
