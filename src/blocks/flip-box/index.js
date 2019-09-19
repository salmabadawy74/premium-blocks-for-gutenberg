import { flipBox } from "../../../assets/js/settings";

import edit from "./edit";
import save from "./save";
import deprecatedContent from "./deprecated";

//define for translation
const { __ } = wp.i18n;

//define register block to use it later
const { registerBlockType } = wp.blocks;

// define attributes for block
const flipBoxAttrs = {

    frontTitle:{
        type: "string",
        default: __("Front title box")
    },
    frontTitleColor:{
        type: "string",
        default: "#000"
    },
    frontDescription:{
        type: "string",
        default: __("Front description")
    },
    frontDescriptionColor:{
        type: "string",
        default: "#000"
    },
    frontBackgroundColor:{
        type: "string",
        default: "#767676"
    },
    backTitle:{
        type: "string",
        default: __("Back title box")
    },
    backTitleColor:{
        type: "string",
        default: "#000"
    },
    backDescription:{
        type: "string",
        default: __("Back description")
    },
    backDescriptionColor:{
        type: "string",
        default: "#000"
    },
    backBackgroundColor:{
        type: "string",
        default: "#767676"
    },
    frontIconType:{
        type: "string",
        default: "dash"
    },
    frontIconSelected:{
        type: "string",
        default: "dashicons dashicons-admin-site"
    },
    frontIconCheck:{
        type:"boolean",
        default: true
    },
    frontIconSize: {
        type: "number"
    },
    frontIconColor: {
        type: "string",
        default: "#000"
    },
    frontIconBackground: {
        type: "string",
        default:"transparent"
    },
    frontIconPaddingTop: {
        type: "number",
        default: "0"
    },
    frontIconPaddingRight: {
        type: "number",
        default: "0"
    },
    frontIconPaddingBottom: {
        type: "number",
        default: "0"
    },
    frontIconPaddingLeft: {
        type: "number",
        default: "0"
    },
    frontIconMarginTop: {
        type: "number",
        default: "0"
    },
    frontIconMarginRight: {
        type: "number",
        default: "0"
    },
    frontIconMarginBottom: {
        type: "number",
        default: "0"
    },
    frontIconMarginLeft: {
        type: "number",
        default: "0"
    },
    frontIconUnit:{
        type: "string",
        default: "px"
    },
    frontTitleCheck:{
        type:"boolean",
        default: true
    },
    frontTitleSize:{
        type:"number",
    },  
    frontTitlelineHeight:{
        type:"number",       
    },
    frontTitleShadowColor: {
        type: "string"
    },
    frontTitleShadowBlur: {
        type: "number",
        default:"0"
    },
    frontTitleShadowHorizontal: {
        type: "number",
        default:"0"
    },
    frontTitleShadowVertical: {
        type: "number",
        default:"0"
    },
    frontTitlePaddingTop: {
        type: "number"
    },
    frontTitlePaddingRight: {
        type: "number"
    },
    frontTitlePaddingBottom: {
        type: "number"
    },
    frontTitlePaddingLeft: {
        type: "number"
    },
    frontTitleMarginTop: {
        type: "number"
    },
    frontTitleMarginRight: {
        type: "number"
    },
    frontTitleMarginBottom: {
        type: "number"
    },
    frontTitleMarginLeft: {
        type: "number"
    },
    frontDescCheck:{
        type:"boolean",
        default: false
    },
    frontDescSize:{
        type:"number",
    },  
    frontDesclineHeight:{
        type:"number",       
    },
    frontDescShadowColor: {
        type: "string"
    },
    frontDescShadowBlur: {
        type: "number",
        default:"0"
    },
    frontDescShadowHorizontal: {
        type: "number",
        default:"0"
    },
    frontDescShadowVertical: {
        type: "number",
        default:"0"
    },
    frontDescPaddingTop: {
        type: "number"
    },
    frontDescPaddingRight: {
        type: "number"
    },
    frontDescPaddingBottom: {
        type: "number"
    },
    frontDescPaddingLeft: {
        type: "number"
    },
    frontDescMarginTop: {
        type: "number"
    },
    frontDescMarginRight: {
        type: "number"
    },
    frontDescMarginBottom: {
        type: "number"
    },
    frontDescMarginLeft: {
        type: "number"
    },
    pxUnit: {
        type: "string",
        default: "px"
    },
    paddingUnit:{
        type:"string",
        default:"px"
    },
    marginUnit:{
        type:"string",
        default:"px"
    },
    backIconType:{
        type: "string",
        default: "dash"
    },
    backIconSelected:{
        type: "string",
        default: "dashicons dashicons-admin-site"
    },
    backIconCheck:{
        type:"boolean",
        default: true
    },
    backIconSize: {
        type: "number"
    },
    backIconColor: {
        type: "string",
        default: "#000"
    },
    backIconBackground: {
        type: "string",
        default:"transparent"
    },
    backIconPaddingTop: {
        type: "number",
        default: "0"
    },
    backIconPaddingRight: {
        type: "number",
        default: "0"
    },
    backIconPaddingBottom: {
        type: "number",
        default: "0"
    },
    backIconPaddingLeft: {
        type: "number",
        default: "0"
    },
    backIconMarginTop: {
        type: "number",
        default: "0"
    },
    backIconMarginRight: {
        type: "number",
        default: "0"
    },
    backIconMarginBottom: {
        type: "number",
        default: "0"
    },
    backIconMarginLeft: {
        type: "number",
        default: "0"
    },
    backIconUnit:{
        type: "string",
        default: "px"
    },
    backTitleCheck:{
        type:"boolean",
        default: true
    },
    backTitleSize:{
        type:"number",
    },
    backTitleLineHeight:{
        type:"number",       
    },
    backTitleShadowColor: {
        type: "string"
    },
    backTitleShadowBlur: {
        type: "number",
        default:"0"
    },
    backTitleShadowHorizontal: {
        type: "number",
        default:"0"
    },
    backTitleShadowVertical: {
        type: "number",
        default:"0"
    },
    backTitlePaddingTop: {
        type: "number"
    },
    backTitlePaddingRight: {
        type: "number"
    },
    backTitlePaddingBottom: {
        type: "number"
    },
    backTitlePaddingLeft: {
        type: "number"
    },
    backTitleMarginTop: {
        type: "number"
    },
    backTitleMarginRight: {
        type: "number"
    },
    backTitleMarginBottom: {
        type: "number"
    },
    backTitleMarginLeft: {
        type: "number"
    },  
    backDescCheck:{
        type:"boolean",
        default: false
    },
    backDescSize:{
        type:"number",
    },  
    backDesclineHeight:{
        type:"number",       
    },
    backDescShadowColor: {
        type: "string"
    },
    backDescShadowBlur: {
        type: "number",
        default:"0"
    },
    backDescShadowHorizontal: {
        type: "number",
        default:"0"
    },
    backDescShadowVertical: {
        type: "number",
        default:"0"
    },
    backDescPaddingTop: {
        type: "number"
    },
    backDescPaddingRight: {
        type: "number"
    },
    backDescPaddingBottom: {
        type: "number"
    },
    backDescPaddingLeft: {
        type: "number"
    },
    backDescMarginTop: {
        type: "number"
    },
    backDescMarginRight: {
        type: "number"
    },
    backDescMarginBottom: {
        type: "number"
    },
    backDescMarginLeft: {
        type: "number"
    }
}; 

registerBlockType( "pemium/flip-box" ,
    {
        title: __("Flip Box"),
        icon: "unlock", 
        category: "premium-blocks",
        attributes: flipBoxAttrs,
        supports: {
            inserter: flipBox
          },
        edit: edit,
        save: save,
        deprecated: deprecatedContent
    }
);