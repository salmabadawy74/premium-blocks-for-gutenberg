import {
  tab
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

const tabAttrs = {
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
  repeatertabs: {
    type: "array",
    default: []
  },
  tabborderType: {
    type: "string",
    default: "none"
  },
  tabborderWidth: {
    type: "number",
    default: "1"
  },
  tabborderRadius: {
    type: "number",
    default: 0
  },
  tabborderColor: {
    type: "string",
    default: "#d4d4d4"
  },
  tabBGColor: {
    type: "string",
    default: "#6ec1e4"
  },
  tabBGHoverColor:{
    type: "string"
  },
  iconHoverColor: {
    type: "string",
    default: "#7a7a7a"
  },
  activetabBGColor: {
    type: "string",
    default: "#7a7a7a"
  },
  tabsBorderColor: {
    type: "string",
    default: "#7a7a7a"
  },
  titleColor: {
    type: "string",
    default: "#54595f"
  },
  hovertitleColor: {
    type: "string",
    default: "#54595f"
  },
  activetitleColor: {
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
    default: 20
  },
  titlefontSizeType: {
    type: "string",
    default: "px"
  },
  titlefontSizeMobile: {
    type: "number",
    default: 20
  },
  titlefontSizeTablet: {
    type: "number",
    default: 20
  },
  contentBGColor: {
    type: "string"
  },
  contentColor: {
    type: "string",
    default: "#54595f"
  },
  contentLetter: {
    type: "number",
    default: 0
  },
  contentStyle: {
    type: "string",
    default: "normal"
  },
  contentUpper: {
    type: "boolean",
    default: false
  },
  contentWeight: {
    type: "number",
    default: 500
  },
  contentfontSize: {
    type: "number",
    default: 20
  },
  contentfontSizeType: {
    type: "string",
    default: "px"
  },
  contentfontSizeMobile: {
    type: "number",
    default: 20
  },
  contentfontSizeTablet: {
    type: "number",
    default: 20
  },
  type: {
    type: "string",
    default: "horizontal"
  },
  tabIndex: {
    type: "number",
    default: 1
  },
  tabStyle: {
    type: "string",
    default: "arrow"
  },
  tabShadowColor: {
    type: "string"
  },
  tabShadowBlur: {
    type: "number",
    default: "0"
  },
  tabShadowHorizontal: {
    type: "number",
    default: "0"
  },
  tabShadowVertical: {
    type: "number",
    default: "0"
  },
  tabShadowPosition: {
    type: "string",
    default: ""
  },
  arrowColor: {
    type: "string",
    default: "#6ec1e4"
  },
  iconColor: {
    type: "string",
    default: "#54595f"
  },
  activeiconColor: {
    type: "string",
    default: "#6ec1e4"
  },
  hovericonColor: {
    type: "string",
    default: "#54595f"
  },
  iconfontSize: {
    type: "number",
    default: 20
  },
  iconfontSizeType: {
    type: "string",
    default: "px"
  },
  iconfontSizeMobile: {
    type: "number",
    default: 20
  },
  iconfontSizeTablet: {
    type: "number",
    default: 20
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
  contentborderType: {
    type: "string",
    default: "none"
  },
  contentborderWidth: {
    type: "number",
    default: "1"
  },
  contentborderRadius: {
    type: "number",
    default: 0
  },
  contentborderColor: {
    type: "string",
    default: "#d4d4d4"
  },
  contentshadowColor: {
    type: "string"
  },
  contentshadowBlur: {
    type: "number",
    default: "0"
  },
  contentshadowHorizontal: {
    type: "number",
    default: "0"
  },
  contentshadowVertical: {
    type: "number",
    default: "0"
  },
  tabShadowColor: {
    type: "string"
  },
  contentShadowBlur: {
    type: "number",
    default: "0"
  },
  contentShadowHorizontal: {
    type: "number",
    default: "0"
  },
  contentShadowVertical: {
    type: "number",
    default: "0"
  },
  contentShadowPosition: {
    type: "string",
    default: ""
  },
  contentPadding:{
    type: "number",
    default: 10
  },
  contentPaddingType: {
    type: "string",
    default: "px"
  },
  contentPaddingMobile:{
    type: "number",
    default: 10
  },
  contentPaddingTablet: {
    type: "number",
    default: 10
  },
  titleMargin:{
    type: "number",
      default: 0
  },
  titleMarginType:{
    type: "string",
      default: "px"
  },
  titleMarginTablet: {
    type: "number",
      default: 0
  },
  titleMarginMobile: {
    type: "number",
      default: 0
  },
  iconPadding:{
    type: "number",
    default: 0
  },
  iconPaddingType: {
    type: "string",
    default: "px"
  },
  iconPaddingMobile:{
    type: "number",
    default: 0
  },
  iconPaddingTablet: {
    type: "number",
    default: 0
  },
  tabhoverborderType: {
    type: "string",
    default: "none"
  },
  tabhoverborderWidth: {
    type: "number",
    default: "1"
  },
  tabhoverborderRadius: {
    type: "number",
    default: 0
  },
  tabhoverborderColor: {
    type: "string",
    default: "#d4d4d4"
  },
  tabhoverShadowColor: {
    type: "string"
  },
  tabhoverShadowBlur: {
    type: "number",
    default: "0"
  },
  tabhoverShadowHorizontal: {
    type: "number",
    default: "0"
  },
  tabhoverShadowVertical: {
    type: "number",
    default: "0"
  },
  tabhoverShadowPosition: {
    type: "string",
    default: ""
  },
  tabPadding:{
    type: "number",
    default: 1
  },
  tabPaddingType: {
    type: "string",
    default: "em"
  },
  tabPaddingTablet: {
    type: "number",
    default: 1
  },
  tabPaddingMobile: {
    type: "number",
    default: 1
  },
  tabMargin: {
    type: "number",
    default: 0
  },
  tabMarginType: {
    type: "string",
    default: "px"
  },
  tabMarginTablet: {
    type: "number",
    default: 0
  },
  tabMarginMobile: {
    type: "number",
    default: 0
  },
  tabWidth: {
    type: "number",
    default: 100
  }
};

registerBlockType("premium/tab", {
  title: __("tab"),
  icon: < PbgIcon icon="tab" />,
  category: "premium-blocks",
  attributes: tabAttrs,
  supports: {
    inserter: tab
  },
  edit: edit,
  save: save
});