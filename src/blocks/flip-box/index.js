
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
    position:{
        type: "string",
        default :"absolute"
    },
    widthhh:{
        type: "string",
        default :"100%"
    },
    height:{
        type: "string",
        default :"100%"
    },
    backfaceVisibility:{
        type: "string",
        default :"hidden"
    },
    frontTitle:{
        type: "string",
        default: "Front title box"
    },
    frontTitleTag:{
        type: "string",
        default: "H3"
    },
    frontTitleColor:{
        type: "string",
        default: "#e3d192"
    },
    frontDescription:{
        type: "string",
        default: "Front description"
    },
    frontDescriptionColor:{
        type: "string",
        default: "#ddd"
    },
    frontBackgroundColor:{
        type: "string",
        default: "#7c5707"
    },
    backTitle:{
        type: "string",
        default: "Back title box"
    },
    backTitleTag:{
        type: "string",
        default: "H3"
    },
    backTitleColor:{
        type: "string",
        default: "#fff"
    },
    backDescription:{
        type: "string",
        default: "Back description"
    },
    backDescriptionColor:{
        type: "string",
        default: "#ddd"
    },
    backBackgroundColor:{
        type: "string",
        default: "#ae8686"
    },
    backTransform:{
        type:"string",
        default:"rotateY(180deg)"
    },
    imgWidth:{
        type:"string",
        default: "300px"
    },
    imgHeight:{
        type:"string",
        default: "300px"
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
        type:"Boolean",
        default: false
    },
    frontIconSize: {
        type: "number"
    },
    frontIconColor: {
        type: "string",
        default: "#fff"
    },
    frontIconBackground: {
        type: "string",
        default:"transparent"
    },
    frontIconAlign: {
        type: "string",
        default: "center"
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
    frontTitleCheck:{
        type:"Boolean",
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
        type:"Boolean",
        default: true
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
        type:"Boolean",
        default: true
    },
    backIconSize: {
        type: "number"
    },
    backIconColor: {
        type: "string",
        default: "#fff"
    },
    backIconBackground: {
        type: "string",
        default:"transparent"
    },
    backIconAlign: {
        type: "string",
        default: "center"
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
    backTitleCheck:{
        type:"Boolean",
        default: false
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
        type:"Boolean",
        default: true
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