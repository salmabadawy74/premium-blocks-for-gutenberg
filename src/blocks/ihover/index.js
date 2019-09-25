import { ihover } from "../../../assets/js/settings";

import edit from "./edit";
import save from "./save";
import deprecatedContent from "./deprecated";

// For Internationalization
const { __ } = wp.i18n;

//Define regiterblock to use it later
const { registerBlockType } = wp.blocks;

//block attributes
const ihoverAttr = {
    imgUrl:{
        type:"string"
    },
    imgId: {
        type: "string"
    },
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
        default: __("style18")
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
    iconCheck:{
        type: "boolean",
        default: true
    },
    iconType:{
        type: "string",
        default: "fa"
    },
    iconSelected:{
        type: "string",
        default: "dashicons dashicons-admin-site"
    },
    iconSize: {
        type: "number"
    },
    iconUnit: {
        type: "string",
        default: "px"
    },
    iconColor: {
        type: "string",
        default: "#fff"
    },
    iconBackground: {
        type: "string",
        default:"transparent"
    },  

    iconBorderType: {
        type: "string",
        default: "none"
    },
    iconBorderWidth: {
        type: "number",
        default: "1"
    },
    iconBorderColor: {
        type: "string"
    },
    iconBorderRadius: {
        type: "number",
        default: "0"
    },
    iconPadTop: {
        type: "number",
        default: "0"
    },
    iconPadRight: {
        type: "number",
        default: "0"
    },
    iconPadBottom: {
        type: "number",
        default: "0"
    },
    iconPadLeft: {
        type: "number",
        default: "0"
    },
    padUnit: {
        type: "string",
        default: "px"
    },
    titleCheck:{
        type: "boolean",
        default: true
    },
    titleText:{
        type: "string",
        default: __("Your Title")
    },
    titleColor:{
        type: "string",
        default: "#fff"
    },
    titleSize:{
        type:"number",
    },  
    titlelineHeight:{
        type:"number",       
    },
    titleShadColor: {
        type: "string"
    },
    titleShadBlur: {
        type: "number",
        default:"0"
    },
    titleShadHorizontal: {
        type: "number",
        default:"0"
    },
    titleShadVertical: {
        type: "number",
        default:"0"
    },
    titleMarTop: {
        type: "number"
    },
    titleMarRight: {
        type: "number"
    },
    titleMarBottom: {
        type: "number"
    },
    titleMarLeft: {
        type: "number"
    },
    titleMarUnit: {
        type: "string",
        default: "px"
    },
    descCheck:{
        type: "boolean",
        default: false
    },
    descText:{
        type: "string",
        default: __("Unlimited design and customization possibilities with iHover gutenberg block")
    },
    descColor:{
        type: "string",
        default: "#fff"
    },
    descSize:{
        type:"number",
    },  
    desclineHeight:{
        type:"number",       
    },
    descShadColor: {
        type: "string"
    },
    descShadBlur: {
        type: "number",
        default:"0"
    },
    descShadHorizontal: {
        type: "number",
        default:"0"
    },
    descShadVertical: {
        type: "number",
        default:"0"
    },
    descMarTop: {
        type: "number"
    },
    descMarRight: {
        type: "number"
    },
    descMarBottom: {
        type: "number"
    },
    descMarLeft: {
        type: "number"
    },
    descMarUnit: {
        type: "string",
        default: "px"
    },
    contentAlign: {
        type: "string",
        default: "center"
    },
// container
    overlayColor:{
        type: "string",
        default:"#33bbce"
    },
    overlayOpacity: {
        type: "number",
        default: "20"
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

};

//Register ihover block
registerBlockType ( "premium/ihover", 
    {
        title: __("I hover"),
        icon: "unlock",
        category: "premium-blocks",
        attributes: ihoverAttr,
        supports: {
            inserter: ihover
          },
        edit: edit,
        save: save,
        deprecated: deprecatedContent
    }
);