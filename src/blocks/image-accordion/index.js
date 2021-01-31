import save from "./save";
import edit from "./edit";
import PbgIcon from "../icons";

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;

const imageAccordionAttributes = {
  block_id: {
    type: "string",
  },
  classMigrate: {
    type: "boolean",
    default: false,
  },
  align: {
    type: "string",
  },
  repeaterImageAccordion: {
    type: "array",
    default: [
      {
        title: "Images",
        imageID: "",
        imageURL:
          "http://localhost:8080/mywebsite/wp-content/plugins/elementor/assets/images/placeholder.png",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto",
        fixed: false,
        content: false,
        desc: "",
        custom:false,
        icon: false,
        horizontalU: 'px',
        horizontal: 0,
        verticalU: 'px',
        vertical: 0,
        whole: false,
        link:false,
        url: "",
        urlTitle:"",
        edit: false,
      },
      {
        title: "Images",
        imageID: "",
        imageURL:
          "http://localhost:8080/mywebsite/wp-content/plugins/elementor/assets/images/placeholder.png",
        backgroundPosition: "",
        backgroundRepeat: "",
        backgroundSize: "",
        fixed: false,
        content: false,
        desc: "",
        custom:false,
        icon: false,
        horizontalU: 'px',
        horizontal: 0,
        verticalU: 'px',
        vertical: 0,
        whole: false,
        link:false,
        url: "",
        urlTitle:"",
        edit: false,
      },
    ],
  },
  hoverIndex: {
    type: "number",
    value: 0,
  },
  direction: {
    type: "string",
    value: "horizontal",
  },
  skew: {
    type: "boolean",
    value: false,
  },
  height: {
    type: "number",
    value: 300,
  },
  heightU: {
    type: "string",
    value: "px",
  },
  contentPosition: {
    type: "string",
    value: "bottom",
  },
  alignPosition: {
    type: "string",
    value: "left",
  },
  hideDesc: {
    type: "number",
    value: 0,
  },
};

registerBlockType("premium/image-accordion", {
  title: __("Image Accordion"),
  icon: <PbgIcon icon="image" />,
  category: "premium-blocks",
  attributes: imageAccordionAttributes,
  supports: {},
  example: {},
  edit: edit,
  save: () => {},
});
