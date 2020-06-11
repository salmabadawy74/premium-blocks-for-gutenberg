import {
  imageSeparator
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

const imageSeparatorAttrs = {
  block_id: {
      type: "string"
  },
  classMigrate: {
    type: "boolean",
    default: false
  },
  align: {
    type: "string",
    default: "center"
  },
  iconType: {
    type: "string",
    default: "image"
  },
  icon:{
    type: "string",
    default: "fa fa-bars"
  },
  imageID: {
    type: "number"
  },
  imageURL: {
    type: "string",
    source: "attribute",
    attribute: "src",
    selector: ".premium-image-separator-container img"
  },
  link: {
    type: "boolean",
    default: false
  },
  url: {
    type: "string",
    default: "#"
  },
  iconSize: {
    type: "number",
    default: "200"
  },
  iconSizeType: {
    type: "string",
    default: "px"
  },
  iconSizeMobile: {
    type: "number",
    default: "200"
  },
  iconSizeTablet: {
    type: "number",
    default: "200"
  },
  gutter:{
    type:"number",
    default: -50
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
  blurHover: {
    type: "number",
    default: "0"
  },
  brightHover: {
    type: "number",
    default: "100"
  },
  contrastHover: {
    type: "number",
    default: "100"
  },
  saturationHover: {
    type: "number",
    default: "100"
  },
  hueHover: {
    type: "number",
    default: "0"
  },
  iconBorderRadius: {
    type: "number",
    default: "0"
  },
  iconBorderRadiusType: {
    type: "string",
    default: "px"
  },
  iconBorderRadiusMobile: {
    type: "number",
    default: "0"
  },
  iconBorderRadiusTablet: {
    type: "number",
    default: "0"
  },
  iconColor: {
    type: "string",
    default: "#6ec1e4"
  },
  iconBGColor: {
    type: "string",
    default: "#54595f"
  },
  iconColorHover: {
    type: "string"
  },
  iconBGColorHover: {
    type: "string"
  },
  iconShadowColor: {
    type: "string"
  },
  iconShadowBlur: {
    type: "number",
    default: "0"
  },
  iconShadowHorizontal: {
    type: "number",
    default: "0"
  },
  iconShadowVertical: {
    type: "number",
    default: "0"
  },
  iconPadding: {
    type: "number",
    default: ".1"
  },
  iconPaddingTablet: {
    type: "number",
    default: ".1"
  },
  iconPaddingType: {
    type: "string",
    default: "em"
  },
  iconPaddingMobile: {
    type: "number",
    default: ".1"
  },
  linkTarget: {
    type: "boolean",
    default: false
  }
};

registerBlockType("premium/image-separator", {
  title: __("Image Separator"),
  icon: < PbgIcon icon = "image" / > ,
  category: "premium-blocks",
  attributes: imageSeparatorAttrs,
  supports: {
    inserter: imageSeparator
  },
  edit: edit,
  save: save
});
