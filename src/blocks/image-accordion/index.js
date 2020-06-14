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
        linkTarget: false
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
        vertical: "0",
        link: false,
        url: "#",
        linkTarget: false
      }
    ]
  },
  index: {
    type: "number",
    default: 3
  },
  ImgId: {
    type: "string"
  }
};

registerBlockType("premium/image-accordion", {
  title: __("Image Accordion"),
  icon: < PbgIcon icon = "image" / > ,
  category: "premium-blocks",
  attributes: imageAccordionAttrs,
  supports: {
    inserter: imageAccordion
  },
  edit: edit
});
