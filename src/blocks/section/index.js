import { container } from "../../../assets/js/settings";

import edit from "./edit";
import save from "./save";
import deprecatedContent from "./deprecated";
import PbgIcon from "../icons";

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;

const containerAttrs = {
    stretchSection: {
        type: "boolean",
        default: false
    },
    innerWidthType: {
        type: "string",
        default: "boxed"
    },
    isUpdated: {
        type: "boolean",
        default: false
    },
    horAlign: {
        type: "string",
        default: "center"
    },
    height: {
        type: "string",
        default: "min"
    },
    innerWidth: {
        type: "number"
    },
    minHeight: {
        type: "number"
    },
    minHeightUnit: {
        type: "string"
    },
    vPos: {
        type: "string",
        default: "top"
    },
    color: {
        type: "string"
    },
    opacity: {
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
        type: "number"
    },
    borderColor: {
        type: "string"
    },
    marginTop: {
        type: "number"
    },
    marginBottom: {
        type: "number"
    },
    marginLeft: {
        type: "number"
    },
    marginRight: {
        type: "number"
    },
    marginTopTablet: {
        type: "number"
    },
    marginBottomTablet: {
        type: "number"
    },
    marginLeftTablet: {
        type: "number"
    },
    marginRightTablet: {
        type: "number"
    },
    marginTopMobile: {
        type: "number"
    },
    marginBottomMobile: {
        type: "number"
    },
    marginLeftMobile: {
        type: "number"
    },
    marginRightMobile: {
        type: "number"
    },
    marginUnit: {
        type: "string",
        default: 'px'
    },
    paddingTop: {
        type: "number"
    },
    paddingRight: {
        type: "number"
    },
    paddingBottom: {
        type: "number"
    },
    paddingLeft: {
        type: "number"
    },
    paddingTopTablet: {
        type: "number"
    },
    paddingRightTablet: {
        type: "number"
    },
    paddingBottomTablet: {
        type: "number"
    },
    paddingLeftTablet: {
        type: "number"
    },
    paddingTopMobile: {
        type: "number"
    },
    paddingRightMobile: {
        type: "number"
    },
    paddingBottomMobile: {
        type: "number"
    },
    paddingLeftMobile: {
        type: "number"
    },
    paddingUnit: {
        type: "string",
        default: 'px'
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
    block_id: {
        type: "string"
    },
    hideDesktop: {
        type: "boolean",
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

registerBlockType("premium/container", {
    title: __("Section"),
    icon: <PbgIcon icon="section" />,
    category: "premium-blocks",
    attributes: containerAttrs,
    supports: {
        inserter: container,
        align: true,
        align: ["center", "wide", "full"]
    },
    example: {
        attributes: {
            minHeight: 200,
        },
    },
    edit: edit,
    save: save,
    deprecated: deprecatedContent
});
