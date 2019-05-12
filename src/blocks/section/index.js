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
  marginUnit: {
    type: "string"
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
  paddingUnit: {
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
  shadowPosition: {
    type: "string",
    default: ""
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
  edit: edit,
  save: save,
  deprecated: deprecatedContent
});
