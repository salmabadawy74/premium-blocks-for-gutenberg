import { flipBox } from "../../../assets/js/settings";

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
    default: "center"
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
    selector: ".premium-flip-front-image"
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
  verticalalignFront: {
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
    selector: ".premium-flip-back-image"
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
  verticalalignBack: {
    type: "string",
    default: "center"
  },
  horizontalalignBack: {
    type: "string",
    default: "center"
  },
  effect: {
    type: "string",
    default: "flip"
  },
  flipDir: {
    type: "string",
    default: "rl"
  },
  animation: {
    type: "boolean",
    default: true
  },
  height: {
    type: "number",
    default: "380"
  },
  heightType: {
    type: "string",
    default: "px"
  },
  heightMobile: {
    type: "number",
    default: "380"
  },
  heightTablet: {
    type: "number",
    default: "380"
  },
  switchCheck: {
    type: "boolean",
    default: false
  },
  frontShadowColor: {
    type: "string"
  },
  frontShadowBlur: {
    type: "number",
    default: "0"
  },
  frontShadowHorizontal: {
    type: "number",
    default: "0"
  },
  frontShadowVertical: {
    type: "number",
    default: "0"
  },
  frontShadowPosition: {
    type: "string",
    default: ""
  },
  iconfrontColor: {
    type: "string",
    default: "#54595f"
  },
  iconfrontBGColor: {
    type: "string",
    default: ""
  },
  iconfrontborderType: {
    type: "string",
    default: "none"
  },
  iconfrontborderWidth: {
    type: "number",
    default: "1"
  },
  iconfrontborderRadius: {
    type: "number",
    default: 0
  },
  iconfrontborderColor: {
    type: "string",
    default: "#d4d4d4"
  },
  iconfrontShadowColor: {
    type: "string"
  },
  iconfrontShadowBlur: {
    type: "number",
    default: "0"
  },
  iconfrontShadowHorizontal: {
    type: "number",
    default: "0"
  },
  iconfrontShadowVertical: {
    type: "number",
    default: "0"
  },
  titlefrontColor: {
    type: "string",
    default: "#54595f"
  },
  titlefrontLetter: {
    type: "number",
    default: 0
  },
  titlefrontStyle: {
    type: "string",
    default: "normal"
  },
  titlefrontUpper: {
    type: "boolean",
    default: false
  },
  titlefrontWeight: {
    type: "number",
    default: 600
  },
  titlefrontfontSize: {
    type: "number",
    default: 20
  },
  titlefrontfontSizeType: {
    type: "string",
    default: "px"
  },
  titlefrontfontSizeMobile: {
    type: "number",
    default: 20
  },
  titlefrontfontSizeTablet: {
    type: "number",
    default: 20
  },
  titlefrontBGColor: {
    type: "string",
    default: ""
  },
  titlefrontshadowColor: {
    type: "string"
  },
  titlefrontshadowBlur: {
    type: "number",
    default: "0"
  },
  titlefrontshadowHorizontal: {
    type: "number",
    default: "0"
  },
  titlefrontshadowVertical: {
    type: "number",
    default: "0"
  },
  descfrontColor: {
    type: "string",
    default: "#54595f"
  },
  descfrontLetter: {
    type: "number",
    default: 0
  },
  descfrontStyle: {
    type: "string",
    default: "normal"
  },
  descfrontUpper: {
    type: "boolean",
    default: false
  },
  descfrontWeight: {
    type: "number",
    default: 600
  },
  descfrontfontSize: {
    type: "number",
    default: 20
  },
  descfrontfontSizeType: {
    type: "string",
    default: "px"
  },
  descfrontfontSizeMobile: {
    type: "number",
    default: 20
  },
  descfrontfontSizeTablet: {
    type: "number",
    default: 20
  },
  descfrontBGColor: {
    type: "string",
    default: ""
  },
  descfrontshadowColor: {
    type: "string"
  },
  descfrontshadowBlur: {
    type: "number",
    default: "0"
  },
  descfrontshadowHorizontal: {
    type: "number",
    default: "0"
  },
  descfrontshadowVertical: {
    type: "number",
    default: "0"
  },
  backShadowColor: {
    type: "string"
  },
  backShadowBlur: {
    type: "number",
    default: "0"
  },
  backShadowHorizontal: {
    type: "number",
    default: "0"
  },
  backShadowVertical: {
    type: "number",
    default: "0"
  },
  backShadowPosition: {
    type: "string",
    default: ""
  },
  iconbackColor: {
    type: "string",
    default: "#54595f"
  },
  iconbackBGColor: {
    type: "string",
    default: ""
  },
  iconbackborderType: {
    type: "string",
    default: "none"
  },
  iconbackborderWidth: {
    type: "number",
    default: "1"
  },
  iconbackborderRadius: {
    type: "number",
    default: 0
  },
  iconbackborderColor: {
    type: "string",
    default: "#d4d4d4"
  },
  iconbackShadowColor: {
    type: "string"
  },
  iconbackShadowBlur: {
    type: "number",
    default: "0"
  },
  iconbackShadowHorizontal: {
    type: "number",
    default: "0"
  },
  iconbackShadowVertical: {
    type: "number",
    default: "0"
  },
  titlebackColor: {
    type: "string",
    default: "#54595f"
  },
  titlebackLetter: {
    type: "number",
    default: 0
  },
  titlebackStyle: {
    type: "string",
    default: "normal"
  },
  titlebackUpper: {
    type: "boolean",
    default: false
  },
  titlebackWeight: {
    type: "number",
    default: 600
  },
  titlebackfontSize: {
    type: "number",
    default: 20
  },
  titlebackfontSizeType: {
    type: "string",
    default: "px"
  },
  titlebackfontSizeMobile: {
    type: "number",
    default: 20
  },
  titlebackfontSizeTablet: {
    type: "number",
    default: 20
  },
  titlebackBGColor: {
    type: "string",
    default: ""
  },
  titlebackshadowColor: {
    type: "string"
  },
  titlebackshadowBlur: {
    type: "number",
    default: "0"
  },
  titlebackshadowHorizontal: {
    type: "number",
    default: "0"
  },
  titlebackshadowVertical: {
    type: "number",
    default: "0"
  },
  descbackColor: {
    type: "string",
    default: "#54595f"
  },
  descbackLetter: {
    type: "number",
    default: 0
  },
  descbackStyle: {
    type: "string",
    default: "normal"
  },
  descbackUpper: {
    type: "boolean",
    default: false
  },
  descbackWeight: {
    type: "number",
    default: 600
  },
  descbackfontSize: {
    type: "number",
    default: 20
  },
  descbackfontSizeType: {
    type: "string",
    default: "px"
  },
  descbackfontSizeMobile: {
    type: "number",
    default: 20
  },
  descbackfontSizeTablet: {
    type: "number",
    default: 20
  },
  descbackBGColor: {
    type: "string",
    default: ""
  },
  descbackshadowColor: {
    type: "string"
  },
  descbackshadowBlur: {
    type: "number",
    default: "0"
  },
  descbackshadowHorizontal: {
    type: "number",
    default: "0"
  },
  descbackshadowVertical: {
    type: "number",
    default: "0"
  },
  iconFrontMargin: {
    type: "number",
    default: "0"
  },
  iconFrontMarginType: {
    type: "string",
    default: "px"
  },
  iconFrontMarginMobile: {
    type: "number",
    default: "0"
  },
  iconFrontMarginTablet: {
    type: "number",
    default: "0"
  },
  iconFrontPadding: {
    type: "number",
    default: "0"
  },
  iconFrontPaddingTablet: {
    type: "number",
    default: "0"
  },
  iconFrontPaddingType: {
    type: "string",
    default: "px"
  },
  iconFrontPaddingMobile: {
    type: "number",
    default: "0"
  },
  titleFrontMargin: {
    type: "number",
    default: "0"
  },
  titleFrontMarginType: {
    type: "string",
    default: "px"
  },
  titleFrontMarginMobile: {
    type: "number",
    default: "0"
  },
  titleFrontMarginTablet: {
    type: "number",
    default: "0"
  },
  descFrontMargin: {
    type: "number",
    default: "0"
  },
  descFrontMarginType: {
    type: "string",
    default: "px"
  },
  descFrontMarginMobile: {
    type: "number",
    default: "0"
  },
  descFrontMarginTablet: {
    type: "number",
    default: "0"
  },
  descFrontPadding: {
    type: "number",
    default: "0"
  },
  descFrontPaddingTablet: {
    type: "number",
    default: "0"
  },
  descFrontPaddingType: {
    type: "string",
    default: "px"
  },
  descFrontPaddingMobile: {
    type: "number",
    default: "0"
  },
  iconBackMargin: {
    type: "number",
    default: "0"
  },
  iconBackMarginType: {
    type: "string",
    default: "px"
  },
  iconBackMarginMobile: {
    type: "number",
    default: "0"
  },
  iconBackMarginTablet: {
    type: "number",
    default: "0"
  },
  iconBackPadding: {
    type: "number",
    default: "0"
  },
  iconBackPaddingTablet: {
    type: "number",
    default: "0"
  },
  iconBackPaddingType: {
    type: "string",
    default: "px"
  },
  iconBackPaddingMobile: {
    type: "number",
    default: "0"
  },
  titleBackMargin: {
    type: "number",
    default: "0"
  },
  titleBackMarginType: {
    type: "string",
    default: "px"
  },
  titleBackMarginMobile: {
    type: "number",
    default: "0"
  },
  titleBackMarginTablet: {
    type: "number",
    default: "0"
  },
  descBackMargin: {
    type: "number",
    default: "0"
  },
  descBackMarginType: {
    type: "string",
    default: "px"
  },
  descBackMarginMobile: {
    type: "number",
    default: "0"
  },
  descBackMarginTablet: {
    type: "number",
    default: "0"
  },
  descBackPadding: {
    type: "number",
    default: "0"
  },
  descBackPaddingTablet: {
    type: "number",
    default: "0"
  },
  descBackPaddingType: {
    type: "string",
    default: "px"
  },
  descBackPaddingMobile: {
    type: "number",
    default: "0"
  },
};

registerBlockType("premium/flip-box", {
  title: __("Flip Box"),
  icon: < PbgIcon icon="flipBox" />,
  category: "premium-blocks",
  attributes: flipBoxAttrs,
  supports: {
    inserter: flipBox
  },
  edit: edit,
  save: save
});
