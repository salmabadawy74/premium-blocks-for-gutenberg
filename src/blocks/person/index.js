import { person } from "../../../assets/js/settings";

import save from "./save";
import edit from "./edit";
import PbgIcon from "../icons";

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;

const personAttrs = {
  personText: {
    type: "string",
    default: __("Premium person")
  },
  personSize: {
    type: "string",
    default: "md"
  },
  personAlign: {
    type: "string",
    default: "center"
  },
  personLink: {
    type: "string",
    source: "attribute",
    attribute: "href",
    selector: ".premium-person"
  },
  personTarget: {
    type: "boolean",
    default: false
  },
  titleTag: {
    type: "string",
    default: "p"
  },
  effect: {
    type: "string",
    default: "none"
  },
  effectDir: {
    type: "string",
    default: "top"
  },
  descColor: {
    type: "string",
    default: "#000"
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
  personShadowColor: {
    type: "string"
  },
  personShadowBlur: {
    type: "number",
    default: "0"
  },
  personShadowHorizontal: {
    type: "number",
    default: "0"
  },
  personShadowVertical: {
    type: "number",
    default: "0"
  },
  personShadowPosition: {
    type: "string",
    default: ""
  },
  id: {
    type: "string"
  }
};

registerBlockType("premium/person", {
  title: __("person"),
  icon: <PbgIcon icon="button" />,
  category: "premium-blocks",
  attributes: personAttrs,
  supports: {
    inserter: person
  },
  edit: edit,
  save: save
});
