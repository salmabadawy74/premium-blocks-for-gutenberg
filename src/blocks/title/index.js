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
