import { scroll } from "../../../assets/js/settings";
const { __ } = wp.i18n;
import PbgIcon from "../icons";
import edit from "./edit";
import save from "./save";
const { registerBlockType } = wp.blocks;
registerBlockType("premium/image-scroll", {
  title: __("Image Scroll"),
  icon: <PbgIcon icon="content-switcher" />,
  category: "premium-blocks",
  attributes: {
    imageID: {
      type: "number",
    },
    imageURL: {
      type: "string",
      source: "attribute",
      attribute: "src",
      selector: ".premium-img-scroll",
    },
    imageHeight: {
      type: "number",
    },
    imageAlt: {
      type: "string",
    },
    imageWidth: {
      type: "number",
    },
    urlCheck: {
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
    reverse: {
      type: "boolean",
      default: false,
    },
    targetOverlay: {
      type: "boolean",
      default: false,
    },
    background: {
      type: "string",
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
    blockID: {
      type: "string",
    },
  },
  supports: {
    inserter: scroll,
  },
  example: {
    attributes: {
      imageURL: `https://i.pinimg.com/originals/08/2c/da/082cda4f08a94753defc177874f43f34.gif`,
    },
  },
  edit: edit,
  save: save,
});
