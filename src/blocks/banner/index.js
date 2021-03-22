import { banner } from "../../../assets/js/settings";

import PbgIcon from "../icons";
import edit from "./edit";
import save from "./save";
import deprecatedContent from "./deprecated";

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;

const bannerAttrs = {
    block_id: {
        type: "string"
    },
    borderBanner: {
        type: "boolean",
        default: false,
    },
    imageID: {
        type: "number"
    },
    imageURL: {
        type: "string",
        source: "attribute",
        attribute: "src",
        selector: ".premium-banner__img"
    },
    title: {
        type: "array",
        source: "children",
        selector: ".premium-banner__title",
        default: __("Awesome Title")
    },
    titleTag: {
        type: "string",
        default: "H3"
    },
    desc: {
        type: "array",
        source: "children",
        selector: ".premium-banner__desc",
        default: __("Cool Description!!")
    },
    contentAlign: {
        type: "string",
        default: "left"
    },
    effect: {
        type: "string",
        default: "effect1"
    },
    hoverEffect: {
        type: "string",
        default: "none"
    },
    height: {
        type: "string",
        default: "default"
    },
    minHeight: {
        type: "number"
    },
    verAlign: {
        type: "string",
        default: "top"
    },
    hovered: {
        type: "boolean",
        default: false
    },
    responsive: {
        type: "boolean",
        default: false
    },
    background: {
        type: "string"
    },
    opacity: {
        type: "number",
        default: 50
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
        type: "number",
    },
    borderRight: {
        type: "number",
    },
    borderBottom: {
        type: "number",
    },
    borderLeft: {
        type: "number",
    },
    borderRadius: {
        type: "number",
        default: "0"
    },
    borderColor: {
        type: "string"
    },
    titleColor: {
        type: "string"
    },
    titleSize: {
        type: "number",
        default: "20"
    },
    titleSizeUnit: {
        type: "string",
        default: 'px'
    },
    titleLine: {
        type: "number"
    },
    titleWeight: {
        type: "number"
    },
    titleBack: {
        type: "string"
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
    descColor: {
        type: "string",
        default: "#000"
    },
    descSize: {
        type: "number",
        default: "20"
    },
    descSizeUnit: {
        type: "string",
        default: 'px'
    },
    descSizeTablet: {
        type: "number"
    },
    descSizeMobile: {
        type: "number"
    },
    descLine: {
        type: "number"
    },
    descWeight: {
        type: "number"
    },
    descShadowColor: {
        type: "string"
    },
    descShadowBlur: {
        type: "number",
        default: "0"
    },
    descShadowHorizontal: {
        type: "number",
        default: "0"
    },
    descShadowVertical: {
        type: "number",
        default: "0"
    },
    urlCheck: {
        type: "boolean",
        default: false
    },
    target: {
        type: "boolean",
        default: false
    },
    url: {
        type: "string",
        source: "attribute",
        attribute: "href",
        selector: ".premium-banner__link"
    },
    sepColor: {
        type: "string"
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
    containerShadowColor: {
        type: "string"
    },
    containerShadowBlur: {
        type: "number",
        default: "0"
    },
    containerShadowHorizontal: {
        type: "number",
        default: "0"
    },
    containerShadowVertical: {
        type: "number",
        default: "0"
    },
    containerShadowPosition: {
        type: "string",
        default: ""
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
    titleSizeMobile: {
        type: "number"
    },
    titleSizeTablet: {
        type: "number"
    },
    classMigrate: {
        type: "boolean",
        default: false
    }
};

registerBlockType("premium/banner", {
    title: __("Banner"),
    icon: <PbgIcon icon="banner" />,
    category: "premium-blocks",
    attributes: bannerAttrs,
    supports: {
        inserter: banner
    },
    example: {},
    edit: edit,
    save: save,
    deprecated: deprecatedContent
});
