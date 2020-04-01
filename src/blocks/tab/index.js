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
    default: [
      // {
      // id: 1,
      //   title: __("Tab #1"),
      //   content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      //   edit: false,
      //   active: true,
      //   default:true
      // },
      // {
      //   id: 2,
      //   title: __("Tab #2"),
      //   content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      //   edit: false,
      //   active: false,
      //   default:false
      // }
    ]
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
    type: "string"
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
  contentColor: {
    type: "string",
    default: "#7a7a7a"
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
    default: "54595f"
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
};

registerBlockType("premium/tab", {
  title: __("tab"),
  icon: < PbgIcon icon = "tab" / > ,
  category: "premium-blocks",
  attributes: tabAttrs,
  supports: {
    inserter: tab
  },
  edit: edit,
  save: save
});