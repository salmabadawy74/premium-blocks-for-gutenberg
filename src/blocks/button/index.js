import { button } from "../../../assets/js/settings";

import edit from "./edit";
import save from "./save";
import deprecatedContent from "./deprecated";
import PbgIcon from "../icons";

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;

const buttonAttrs = {
  btnText: {
    type: "string",
    default: __("Premium Button")
  },
  btnSize: {
    type: "string",
    default: "md"
  },
  btnAlign: {
    type: "string",
    default: "center"
  },
  btnLink: {
    type: "string",
    source: "attribute",
    attribute: "href",
    selector: ".premium-button"
  },
  btnTarget: {
    type: "boolean",
    default: false
  },
  effect: {
    type: "string",
    default: "none"
  },
  effectDir: {
    type: "string",
    default: "top"
  },
  textColor: {
    type: "string"
  },
  textHoverColor: {
    type: "string"
  },
  backColor: {
    type: "string"
  },
  backHoverColor: {
    type: "string"
  },
  slideColor: {
    type: "string"
  },
  textSize: {
    type: "number"
  },
  textFontFamily: {
    type: "string"
  },
  textLetter: {
    type: "number"
  },
  textStyle: {
    type: "string"
  },
  textUpper: {
    type: "boolean"
  },
  textWeight: {
    type: "number",
    default: 500
  },
  textLine: {
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
    type: "number"
  },
  borderColor: {
    type: "string"
  },
  borderHoverColor: {
    type: "string"
  },
  padding: {
    type: "number"
  },
  paddingU: {
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
  btnShadowColor: {
    type: "string"
  },
  btnShadowBlur: {
    type: "number",
    default: "0"
  },
  btnShadowHorizontal: {
    type: "number",
    default: "0"
  },
  btnShadowVertical: {
    type: "number",
    default: "0"
  },
  btnShadowPosition: {
    type: "string",
    default: ""
  },
  id: {
    type: "string"
  }
};

registerBlockType("premium/button", {
  title: __("Button"),
  icon: <PbgIcon icon="button" />,
  category: "premium-blocks",
  attributes: buttonAttrs,
  supports: {
    inserter: button
  },
  edit: edit,
  save: save,
  deprecated: deprecatedContent
});
