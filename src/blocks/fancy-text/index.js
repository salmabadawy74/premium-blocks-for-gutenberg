import {
    fancyText
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
  
  const fancyTextAttrs = {
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
    prefix:{
      type: "string",
      default: "This is"
    },
    repeaterFancyText:{
      type: "array",
        default: [
            {title: __("Designer"),edit: false},
            {title: __("Developer"),edit: false},
            {title: __("Awesome"),edit: false},
        ]
    }
  };
  
  registerBlockType("premium/fancy-text", {
    title: __("fancy Text"),
    icon: < PbgIcon icon="fancy-text" />,
    category: "premium-blocks",
    attributes: fancyTextAttrs,
    supports: {
      inserter: fancyText
    },
    edit: edit,
    // save: save
  });