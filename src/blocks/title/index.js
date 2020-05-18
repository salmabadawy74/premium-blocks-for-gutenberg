import {
  title
} from "../../../assets/js/settings";

// import save from "./save";
import edit from "./edit";
import PbgIcon from "../icons";

const {
  __
} = wp.i18n;

const {
  registerBlockType
} = wp.blocks;

const titleAttrs = {
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
  style: {
    type: "string",
    default: "style1"
  },
  title: {
    type: "string",
    default: "Premium Title"
  },
  iconValue: {
    type: "boolean",
    default: false
  },
  iconType: {
    type: "string",
    default: "icon"
  },
  icon:{
    type: "string",
    default: "fa fa-bars"
  },
  iconPosition: {
    type: "string",
    default: "before"
  },
  image: {
    type: "string"
  },
  link: {
    type: "boolean",
    default: false
  },
  url: {
    type: "string",
    default: "#"
  },
  iconAlign: {
    type: "string",
    default: "center"
  },
  stripePosition:{
    type: "string",
    default: "top"
  },
  stripeWidth: {
    type: "number",
    default: 120
  },
  stripeHeight:{
    type: "number",
    default: 5
  },
  stripeTopSpacing:{
    type: "number",
    default: 0
  },
  stripeBottomSpacing: {
    type: "number",
    default: 0
  },
  titleColor: {
    type: "string",
    default: "#6ec1e4"
  },
  titleLetter: {
    type: "number",
    default: 0
  },
  titleStyle: {
    type: "string",
    default: "normal"
  },
  titleUpper: {
    type: "boolean",
    default: false
  },
  titleWeight: {
    type: "number",
    default: 500
  },
  titlefontSize: {
    type: "number",
    default: 30
  },
  titlefontSizeType: {
    type: "string",
    default: "px"
  },
  titlefontSizeMobile: {
    type: "number",
    default: 30
  },
  titlefontSizeTablet: {
    type: "number",
    default: 30
  },
  titleshadowColor: {
    type: "string"
  },
  titleshadowBlur: {
    type: "number",
    default: "0"
  },
  titleshadowHorizontal: {
    type: "number",
    default: "0"
  },
  titleshadowVertical: {
    type: "number",
    default: "0"
  },
  stripeColor: {
    type: "string",
    default: "#6ec1e4"
  }
};

registerBlockType("premium/title", {
  title: __("Title"),
  icon: < PbgIcon icon = "title" / > ,
  category: "premium-blocks",
  attributes: titleAttrs,
  supports: {
    inserter: title
  },
  edit: edit
});
