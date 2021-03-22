import { icon } from "../../../assets/js/settings";
import PbgIcon from "../icons";
import edit from "./edit";
import save from "./save";
import deprecatedContent from "./deprecated";
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const iconAttrs = {
    iconType: {
        type: "string",
        default: "dash"
    },
    selectedIcon: {
        type: "string",
        default: "dashicons dashicons-admin-site"
    },
    align: {
        type: "string",
        default: "center"
    },
    hoverEffect: {
        type: "string",
        default: "none"
    },
    iconSize: {
        type: "number"
    },
    iconSizeUnit: {
        type: "string",
        default: "px"
    },
    iconColor: {
        type: "string",
        default: "#6ec1e4"
    },
    iconBack: {
        type: "string"
    },
    iconOpacity: {
        type: "number",
        default: "1"
    },
    padding: {
        type: "string",
        default: "up"
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
    margin: {
        type: "string",
        default: "up"
    },
    marginT: {
        type: "number"
    },
    marginR: {
        type: "number"
    },
    marginB: {
        type: "number"
    },
    marginL: {
        type: "number"
    },
    borderType: {
        type: "string",
        default: "none"
    },
    borderWidth: {
        type: "number",
        default: "1"
    },
    borderRadius: {
        type: "number",
        default: 100
    },
    borderColor: {
        type: "string"
    },
    backgroundColor: {
        type: "string"
    },
    backgroundOpacity: {
        type: "number",
        default: "1"
    },
    background: {
        type: "string"
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
    wrapBorderType: {
        type: "string",
        default: "none"
    },
    wrapBorderWidth: {
        type: "number",
        default: "1"
    },
    wrapBorderRadius: {
        type: "number"
    },
    wrapBorderColor: {
        type: "string"
    },
    wrapPadding: {
        type: "string",
        default: "up"
    },
    wrapShadowColor: {
        type: "string"
    },
    wrapShadowBlur: {
        type: "number",
        default: "0"
    },
    wrapShadowHorizontal: {
        type: "number",
        default: "0"
    },
    wrapShadowVertical: {
        type: "number",
        default: "0"
    },
    wrapShadowPosition: {
        type: "string",
        default: ""
    },
    wrapPaddingT: {
        type: "number"
    },
    wrapPaddingR: {
        type: "number"
    },
    wrapPaddingB: {
        type: "number"
    },
    wrapPaddingL: {
        type: "number"
    },
    wrapMargin: {
        type: "string",
        default: "up"
    },
    wrapMarginT: {
        type: "number"
    },
    wrapMarginR: {
        type: "number"
    },
    wrapMarginB: {
        type: "number"
    },
    wrapMarginL: {
        type: "number"
    },
    urlCheck: {
        type: "boolean"
    },
    link: {
        type: "string"
    },
    target: {
        type: "boolean"
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
registerBlockType("premium/icon", {
    title: __("Icon"),
    icon: <PbgIcon icon="icon" />,
    category: "premium-blocks",
    attributes: iconAttrs,
    supports: {
        inserter: icon
    },
    example: {},
    edit: edit,
    save: save,
    deprecated: deprecatedContent
});