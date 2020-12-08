import { scroll } from "../../../assets/js/settings";

const { __ } = wp.i18n;

import PbgIcon from "../icons";
import edit from "./edit";
import save from "./save";

const { registerBlockType } = wp.blocks;

registerBlockType("premium/scroll", {
  title: __("Image Scroll"),
  icon: <PbgIcon icon="content-switcher" />,
  category: "premium-blocks",
  attributes: {
    title: {
      type: "string",
      source: "html",
      selector: "h2",
    },
    imageID: {
      type: "number",
    },
    imageURL: {
      type: "string",
      source: "attribute",
      attribute: "src",
      selector: ".premium-banner__img",
    },
    imageHeight: {
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
      selector: ".premium-banner__link",
    },
    target: {
      type: "boolean",
      default: false,
    },
    height: {
      type: "string",
      default: "default",
    },
    minHeight: {
      type: "number",
    },
    effectDir: {
      type: "string",
      default: "vertical",
    },
    hoverEffect: {
      type: "string",
      default: "hover",
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
    id: {
      type: "string",
    },
    responsive: {
      type: "boolean",
      default: false,
    },
    verAlign: {
      type: "string",
      default: "top",
    },
    paddingT: {
      type: "number",
    },
  },
  supports: {
    inserter: scroll,
  },

  edit: edit,
  save: save,
});
