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
    source: "query",
    default: [],
    edit: false,
    query: {
      edit: {
        type: "boolean",
        default: false,
      },
      imageID: {
        type: "number",
      },
      imageURL: {
        type: "string",
        source: "attribute",
        attribute: "src",
      },
      size: {
        type: "string",
        default: "auto",
      },
      imageAlt: {
        type: "string",
      },
      loop: {
        type: "string",
        default: false,
      },
      UrlCheck: {
        type: "boolean",
        default: false,
      },
      url: {
        type: "string",
        source: "attribute",
        attribute: "href",
        selector: ".premium-img-scroll-link",
      },
      target: {
        type: "boolean",
        default: false,
      },
      height: {
        type: "number",
        default: 300,
      },
      HeightU: {
        type: "string",
        default: "px",
      },
      effectDir: {
        type: "string",
        default: "vertical",
      },
      hoverEffect: {
        type: "string",
        default: "hover",
      },
      blur: {
        type: "number",
        default: "0",
      },
      bright: {
        type: "number",
        default: "100",
      },
      contrast: {
        type: "number",
        default: "100",
      },
      saturation: {
        type: "number",
        default: "100",
      },
      hue: {
        type: "number",
        default: "0",
      },
      borderType: {
        type: "string",
        default: "none",
      },
      borderWidth: {
        type: "number",
        default: "1",
      },
      borderRadius: {
        type: "number",
        default: "0",
      },
      borderColor: {
        type: "string",
      },
      containerShadowColor: {
        type: "string",
      },
      containerShadowBlur: {
        type: "number",
        default: "0",
      },
      containerShadowHorizontal: {
        type: "number",
        default: "0",
      },
      containerShadowVertical: {
        type: "number",
        default: "0",
      },
      containerShadowPosition: {
        type: "string",
        default: "",
      },
    },
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
