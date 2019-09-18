
import edit from "./edit";
import save from "./save";
import deprecatedContent from "./deprecated";

// For Internationalization
const { __ } = wp.i18n;

//Define regiterblock to use it later
const { registerBlockType } = wp.blocks;

//block attributes
const ihoverAttr = {
    imgSize:{
        type:"number",
        default: "300"
    },
    imgBorderRadius:{
        type:"number",
        default: "50"
    },
    hoverEffect:{
        type: "string",
        default: "style18"
    },
    linkCheck:{
        type: "boolean",
        default: false
    },
    linkUrl:{
        type: "string"
    },
    imgAlign: {
        type: "string",
        default: "center"
    },
    blur: {
        type: "number",
        default: "0"
    },
      bright: {
        type: "number",
        default: "100"
    },
      contrast: {
        type: "number",
        default: "100"
    },
      saturation: {
        type: "number",
        default: "100"
    },
      hue: {
        type: "number",
        default: "0"
    },
// content
    contentAlign: {
        type: "string",
        default: "center"
    },
// container
    overlayColor:{
        type: "string"
    },
    overlayOpacity: {
        type: "number",
        default: "50"
    },
    containerShadowColor: {
        type: "string"
    },
      containerShadowBlur: {
        type: "number",
        default: "0"
    },
      containerShadowHorizontal: {
        type: "number",
        default: "0"
    },
      containerShadowVertical: {
        type: "number",
        default: "0"
    },
      containerShadowPosition: {
        type: "string",
        default: ""
    },
//extra
    imgName:{
        type:"string",
        default:"author.jpg"
    }
};

//Register ihover block
registerBlockType ( "premium/ihover", 
    {
        title: __("I hover"),
        icon: "unlock",
        category: "premium-blocks",
        attributes: ihoverAttr,
        edit: edit,
        save: save,
        deprecated: deprecatedContent

    }
);