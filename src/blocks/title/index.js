import {
  title
} from "../../../assets/js/settings";

import save from "./save";
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
    default: 600
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
  },
  titleborderType: {
    type: "string",
    default: "none"
  },
  titleborderWidth: {
    type: "number",
    default: "1"
  },
  titleborderRadius: {
    type: "number",
    default: 0
  },
  titleborderColor: {
    type: "string",
    default: "#d4d4d4"
  },
  BGColor: {
    type: "string",
    default: "#54595f"
  },
  lineColor: {
    type: "string",
    default: "#6ec1e4"
  },
  triangleColor: {
    type: "string",
    default: "#6ec1e4"
  },
  stripeAlign:{
    type: "string",
    default: "center"
  },
  iconColor:{
    type: "string",
    default: "#6ec1e4"
  },
  iconSize: {
    type: "number",
    default: 30
  },
  iconSizeType: {
    type: "string",
    default: "px"
  },
  iconSizeMobile: {
    type: "number",
    default: 30
  },
  iconSizeTablet: {
    type: "number",
    default: 30
  },
  iconborderType: {
    type: "string",
    default: "none"
  },
  iconborderWidth: {
    type: "number",
    default: "1"
  },
  iconborderRadius: {
    type: "number",
    default: 0
  },
  iconborderColor: {
    type: "string",
    default: "#d4d4d4"
  },
  iconshadowColor: {
    type: "string"
  },
  iconshadowBlur: {
    type: "number",
    default: "0"
  },
  iconshadowHorizontal: {
    type: "number",
    default: "0"
  },
  iconshadowVertical: {
    type: "number",
    default: "0"
  },
  titleMargin: {
    type: "number",
    default: "0"
  },
  titleMarginType: {
    type: "string",
    default: "px"
  },
  titleMarginMobile: {
    type: "number",
    default: "0"
  },
  titleMarginTablet: {
    type: "number",
    default: "0"
  },
  titlePadding: {
    type: "number",
    default: "0"
  },
  titlePaddingTablet: {
    type: "number",
    default: "0"
  },
  titlePaddingType: {
    type: "string",
    default: "px"
  },
  titlePaddingMobile: {
    type: "number",
    default: "0"
  },
};

registerBlockType("premium/title", {
  title: __("Title"),
  icon: < PbgIcon icon = "title" / > ,
  category: "premium-blocks",
  attributes: titleAttrs,
  supports: {
    inserter: title
  },
  edit: edit,
  save: save
});
