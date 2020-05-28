import {flipBox} from "../../../assets/js/settings";

import save from "./save";
import edit from "./edit";
import PbgIcon from "../icons";

const {
  __
} = wp.i18n;

const {
  registerBlockType
} = wp.blocks;

const flipBoxAttrs = {
  block_id: {
    type: "string"
  },
  classMigrate: {
    type: "boolean",
    default: false
  },
  align: {
    type: "string",
    default: "left"
  },
  iconValueFront: {
    type: "boolean",
    default: true
  },
  iconTypeFront: {
    type: "string",
    default: "icon"
  },
  iconFront: {
    type: "string",
    default: "fa fa-star"
  },
  imageIDFront: {
    type: "number"
  },
  imageURLFront: {
    type: "string",
    source: "attribute",
    attribute: "src",
    selector: ".premium-flip-box-icon"
  },
  iconSizeFront: {
    type: "number",
    default: "40"
  },
  iconSizeFrontType: {
    type: "string",
    default: "px"
  },
  iconSizeFrontMobile: {
    type: "number",
    default: "40"
  },
  iconSizeFrontTablet: {
    type: "number",
    default: "40"
  },
  titleValueFront: {
    type: "boolean",
    default: true
  },
  titleFront: {
    type: "string",
    default: "Front Box Title"
  },
  descFront: {
    type: "string",
    default: "Your Cool Description"
  },
  descValueFront: {
    type: "boolean",
    default: false
  },
  verticalalignFront:{
    type: "string",
    default: "center"
  },
  horizontalalignFront: {
    type: "string",
    default: "center"
  },
  iconValueBack: {
    type: "boolean",
    default: true
  },
  iconTypeBack: {
    type: "string",
    default: "icon"
  },
  iconBack: {
    type: "string",
    default: "fa fa-star"
  },
  imageIDBack: {
    type: "number"
  },
  imageURLBack: {
    type: "string",
    source: "attribute",
    attribute: "src",
    selector: ".premium-flip-box-icon"
  },
  link: {
    type: "boolean",
    default: false
  },
  url: {
    type: "string",
    default: "#"
  },
  iconSizeBack: {
    type: "number",
    default: "40"
  },
  iconSizeBackType: {
    type: "string",
    default: "px"
  },
  iconSizeBackMobile: {
    type: "number",
    default: "40"
  },
  iconSizeBackTablet: {
    type: "number",
    default: "40"
  },
  titleValueBack: {
    type: "boolean",
    default: true
  },
  titleBack: {
    type: "string",
    default: "Back Box Title"
  },
  descBack: {
    type: "string",
    default: "Your Cool Description"
  },
  descValueBack: {
    type: "boolean",
    default: false
  },
  verticalalignBack:{
    type: "string",
    default: "center"
  },
  horizontalalignBack: {
    type: "string",
    default: "center"
  }
};

registerBlockType("premium/flip-box", {
  title: __("Flip Box"),
  icon: < PbgIcon icon = "flipBox" / > ,
  category: "premium-blocks",
  attributes: flipBoxAttrs,
  supports: {
    inserter: flipBox
  },
  edit: edit
});
