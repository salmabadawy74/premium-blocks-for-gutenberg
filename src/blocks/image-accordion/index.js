import {
  imageAccordion
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

const imageAccordionAttrs = {
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
  repeaterAccordion: {
    type: "array",
    default: [{
        title: __("Image #1"),
        edit: false,
        ImgUrl: "",
        size: "auto",
        position: "center center",
        repeat: "repeat",
        content: false,
        iconValue: false,
        icon:"dashicons dashicons-star-filled",
        desc:"",
        customPos: false,
        horizontal: "0",
        vertical: "0",
        link: false,
        url: "#",
        linkTarget: false,
        width: "100",
        widthType: "%",
        widthTablet: "100",
        widthMobile: "100"
      },
      {
        title: __("Image #2"),
        edit: false,
        ImgUrl: "",
        size: "auto",
        position: "center center",
        repeat: "repeat",
        content: false,
        iconValue: false,
        icon:"dashicons dashicons-star-filled",
        desc:"",
        customPos: false,
        horizontal: "0",
        horizontalType: "%",
        horizontalMobile: "0",
        horizontalTablet: "0",
        vertical: "0",
        verticalType: "%",
        verticalMobile: "0",
        verticalTablet: "0",
        link: false,
        url: "#",
        linkTarget: false,
        width: "100",
        widthType: "%",
        widthTablet: "100",
        widthMobile: "100"
      }
    ]
  },
  index: {
    type: "number",
    default: 3
  },
  ImgId: {
    type: "string"
  },
  defaultIndex: {
    type: "number"
  },
  direction: {
    type: "string",
    default: "horizontal"
  },
  skewdirection: {
    type: "string",
    default: "right"
  },
  skew: {
    type: "boolean",
    default: false
  },
  height: {
    type: "string",
    default: "400"
  },
  heightType: {
    type: "string",
    default: "px"
  },
  heightTablet: {
    type: "string",
    default: "400"
  },
  heightMobile: {
    type: "string",
    default: "400"
  },
  screenWidth: {
    type:"number"
  },
  overlayColor: {
    type: "string"
  },
  overlayColorHover: {
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
  iconColor: {
    type: "string",
    default: "#6ec1e4"
  },
  iconHoverColor: {
    type: "string"
  },
  iconBGColor: {
    type: "string"
  },
  iconHoverBGColor: {
    type: "string"
  },
  iconSize: {
    type: "number",
    default: "25"
  },
  iconSizeTablet: {
    type: "number",
    default: "25"
  },
  iconSizeType: {
    type: "string",
    default: "px"
  },
  iconSizeMobile: {
    type: "number",
    default: "25"
  },
  iconShadowBlur: {
    type: "number",
    default: "0"
  },
  iconShadowColor: {
    type: "string"
  },
  iconShadowHorizontal: {
    type: "number",
    default: "0"
  },
  iconShadowPosition: {
    type: "string",
    default: ""
  },
  iconShadowVertical: {
    type: "number",
    default: "0"
  },
  iconMargin: {
    type: "number",
    default: "0"
  },
  iconMarginType: {
    type: "string",
    default: "px"
  },
  iconMarginTablet: {
    type: "number",
    default: "0"
  },
  iconMarginMobile: {
    type: "number",
    default: "0"
  },
  iconPadding: {
    type: "number",
    default: "0"
  },
  iconPaddingType: {
    type: "string",
    default: "px"
  },
  iconPaddingTablet: {
    type: "number",
    default: "0"
  },
  iconPaddingMobile: {
    type: "number",
    default: "0"
  },
  iconborderColor: {
    type: "string",
    default: "#d4d4d4"
  },
  iconborderRadius: {
    type: "number",
    default: 0
  },
  iconborderWidth: {
    type: "number",
    default: "1"
  },
  iconborderType: {
    type: "string",
    default: "none"
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
  titleLine: {
    type: "number",
    default: 0
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
    default: 25
  },
  titlefontSizeType: {
    type: "string",
    default: "px"
  },
  titlefontSizeMobile: {
    type: "number",
    default: 25
  },
  titlefontSizeTablet: {
    type: "number",
    default: 25
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
  titleMargin: {
    type: "number",
    default: "0"
  },
  titleMarginTablet: {
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
  descColor: {
    type: "string",
    default: "#6ec1e4"
  },
  descLetter: {
    type: "number",
    default: 0
  },
  descStyle: {
    type: "string",
    default: "normal"
  },
  descUpper: {
    type: "boolean",
    default: false
  },
  descWeight: {
    type: "number",
    default: 600
  },
  descLine:{
    type: "number",
    default: 0
  },
  descfontSize: {
    type: "number",
    default: 25
  },
  descfontSizeType: {
    type: "string",
    default: "px"
  },
  descfontSizeMobile: {
    type: "number",
    default: 25
  },
  descfontSizeTablet: {
    type: "number",
    default: 25
  },
  descshadowColor: {
    type: "string"
  },
  descshadowBlur: {
    type: "number",
    default: "0"
  },
  descshadowHorizontal: {
    type: "number",
    default: "0"
  },
  descshadowVertical: {
    type: "number",
    default: "0"
  },
  descMargin: {
    type: "number",
    default: "0"
  },
  descMarginTablet: {
    type: "number",
    default: "0"
  },
  descMarginType: {
    type: "string",
    default: "px"
  },
  descMarginMobile: {
    type: "number",
    default: "0"
  },
  descPadding: {
    type: "number",
    default: "0"
  },
  descPaddingTablet: {
    type: "number",
    default: "0"
  },
  descPaddingType: {
    type: "string",
    default: "px"
  },
  descPaddingMobile: {
    type: "number",
    default: "0"
  },
};

registerBlockType("premium/image-accordion", {
  title: __("Image Accordion"),
  icon: < PbgIcon icon = "image" / > ,
  category: "premium-blocks",
  attributes: imageAccordionAttrs,
  supports: {
    inserter: imageAccordion
  },
  edit: edit,
  save: save
});
