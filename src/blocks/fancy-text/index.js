import {
  fancyText
} from "../../../assets/js/settings";

import save from "./save";
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
  prefix: {
    type: "string",
    default: "This is"
  },
  suffix: {
    type: "string",
    default: "Text"
  },
  repeaterFancyText: {
    type: "array",
    default: [{
        title: __("Designer"),
        edit: false
      },
      {
        title: __("Developer"),
        edit: false
      },
      {
        title: __("Awesome"),
        edit: false
      },
    ]
  },
  effect: {
    type: "string",
    default: "typing"
  },
  fancyTextColor: {
    type: "string",
    default: "#6ec1e4"
  },
  cursorColor: {
    type: "string",
    default: "#6ec1e4"
  },
  fancyTextLetter: {
    type: "number"
  },
  fancyTextStyle: {
    type: "string"
  },
  fancyTextUpper: {
    type: "boolean",
    default: false
  },
  fancyTextWeight: {
    type: "number",
    default: 600
  },
  fancyTextfontSize: {
    type: "number",
    default: 40
  },
  fancyTextfontSizeType: {
    type: "string",
    default: "px"
  },
  fancyTextfontSizeMobile: {
    type: "number",
    default: 40
  },
  fancyTextfontSizeTablet: {
    type: "number",
    default: 40
  },
  fancyTextBGColor: {
    type: "string"
  },
  shadowColor: {
    type: "string"
  },
  shadowBlur: {
    type: "number",
    default: "0"
  },
  shadowHorizontal: {
    type: "number",
    default: "0"
  },
  shadowVertical: {
    type: "number",
    default: "0"
  },
  textColor: {
    type: "string",
    default: "#54595f"
  },
  TextLetter: {
    type: "number"
  },
  TextStyle: {
    type: "string"
  },
  TextUpper: {
    type: "boolean",
    default: false
  },
  TextWeight: {
    type: "number",
    default: 600
  },
  TextfontSize: {
    type: "number",
    default: 40
  },
  TextfontSizeType: {
    type: "string",
    default: "px"
  },
  TextfontSizeMobile: {
    type: "number",
    default: 40
  },
  TextfontSizeTablet: {
    type: "number",
    default: 40
  },
  TextBGColor: {
    type: "string"
  },
  loop:{
    type:"boolean",
    default:"true"
  },
  cursorShow:{
    type: "boolean",
    default: "true"
  },
  cursorMark:{
    type: "string",
    default:"|"
  },
  typeSpeed:{
    type:"number",
    default: 100
  },
  backdelay:{
    type: "number",
    default: 30
  },
  startdelay:{
    type: "number",
    default: 30
  },
  backSpeed:{
    type: "number",
    default: 30
  },
  animationSpeed:{
    type: "number",
    default: 200
  },
  pauseTime:{
    type: "number",
    default: 3000
  },
  hoverPause:{
    type: "boolean",
    default: false
  },
  fancyalign:{
    type: "string",
    default: "center"
  }
};

registerBlockType("premium/fancy-text", {
  title: __("Fancy Text"),
  icon: < PbgIcon icon = "fancy-text" / > ,
  category: "premium-blocks",
  attributes: fancyTextAttrs,
  supports: {
    inserter: fancyText
  },
  edit: edit,
  save: save
});