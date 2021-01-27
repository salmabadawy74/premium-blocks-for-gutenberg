import PbgIcon from "../icons";

import edit from "./edit";
import save from "./save";
const { registerBlockType } = wp.blocks;
const {
	__,
} = wp.i18n;

registerBlockType("premium/image-accodion", {
  title: __("Image Accordion"),
  category: "premium-blocks",
  keywords:['Image Accordion'],
  attributes: {
      block_id: {
          type: "string",
      },
	    locations: {
			type: 'array',
        default: [],
        query: {
          imageURl: {
            source: "attribute",
            selector: "img",
            attribute: "src"
          },
          content: {
            type: "string",
          },
          imageID: {
            type: "number",
          },
          title: {
            type: "string",
            source: "html",
            selector: "h2",
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
          imageID: {
            type: "number",
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
          urlCheck: {
            type: "boolean",
            default: false,
          },
          url: {
            type: "string",
            source: "attribute",
            attribute: "href",
          },
          target: {
            type: "boolean",
            default: false,
          },
        }
	    },
  },
  example: {},
  edit: edit,
 save:()=>{}
});
