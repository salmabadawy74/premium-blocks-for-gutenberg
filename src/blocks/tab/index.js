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
    default: "left"
  },
  repeatertabs: {
    type: "array",
    default: [{
      id: 1,
        title: __("Tab #1"),
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        edit: false,
        active: true,
        default:true
      },
      {
        id: 2,
        title: __("Tab #2"),
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        edit: false,
        active: false,
        default:false
      }
    ]
  },
  tabborderType: {
      type: "string",
      default: "solid"
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
      type: "string"
    },
    titleColor:{
      type: "string",
      default: "#6ec1e4"
    },
    activetitleColor: {
      type: "string",
      default: "#45fc5d"
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
    }
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