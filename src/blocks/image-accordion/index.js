import save from "./save";
import edit from "./edit";
import PbgIcon from "../icons";
import {imageAccordion} from  "../../../assets/js/settings"

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
        fixed: true,
        content: false,
        desc: "",
        custom:false,
        icon: false,
        selectedIcon:"",
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
        selectedIcon:"",
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
    default: 0,
  },
  direction: {
    type: "string",
    default: "horizontal",
  },
  skew: {
    type: "boolean",
    default: false,
  },
  skewDirection: {
    type: "string",
    default:"right"
  },
  height: {
    type: "number",
    default: 300,
  },
  heightU: {
    type: "string",
    default: "px",
  },
  contentPosition: {
    type: "string",
    default: "center",
  },
  alignPosition: {
    type: "string",
    default: "left",
  },
  hideDesc: {
    type: "number",
    default: 0,
  },
  overlayColor: {
    type: "string",
  },
  overlayHover: {
    type:"string"
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
  iconU: {
    type: "string",
    default:"px"
  },
  iconSize: {
    type: "number",
    default:10
  },
  iconColor: {
    type:"string"
  },
  iconHoverColor: {
    type:"string"
  },
  backgroundColor: {
    type:"string"
  },
  backgroundHover: {
    type:"string"
  },
  iconborderType: {
    type: "string",
    default: "none",
  },
  iconborderWidth: {
    type: "number",
    default: "1",
  },
  iconborderRadius: {
    type: "number",
    default: "0",
  },
  iconborderColor: {
    type: "string",
  },
  iconShadowColor: {
    type: "string",
  },
  iconShadowBlur: {
    type: "number",
    default: "0",
  },
  iconShadowHorizontal: {
    type: "number",
    default: "0",
  },
  iconShadowVertical: {
    type: "number",
    default: "0",
  },
  iconShadowPosition: {
    type: "string",
    default: "",
  },
  iconborderType: {
    type: "string",
    default:'px'
  },
  iconborderWidth: {
    type:"number"
  },
  iconborderColor: {
    type:"string"
  },
  iconborderRadius: {
    type:"number"
  },
  iconmarginTop: {
    type:"number"
  },
  iconmarginRight: {
    type:"number"
  },
  iconmarginBottom: {
    type:'number'
  },
  iconmarginLeft: {
    type:'number'
  },
  iconpaddingTop: {
    type:"number"
  },
  iconpaddingRight: {
    type:"number"
  },
  iconpaddingBottom: {
    type:"number"
  },
  iconpaddingLeft: {
    type:"number"
  },
  titleColor: {
    type:"string"
  },
  titleSize: {
    type:"number"
  },
  titleWeight: {
    type:"number"
  },
  titleStyle: {
    type:"string"
  },
  titleLetter: {
    type:'number'
  },
  titleShadowColor: {
    type: "string",
  },
  titleShadowBlur: {
    type: "number",
    default: "0",
  },
  titleShadowHorizontal: {
    type: "number",
    default: "0",
  },
  titleShadowVertical: {
    type: "number",
    default: "0",
  },
  titleShadowPosition: {
    type: "string",
    default: "",
  },
  titlemarginTop: {
    type:"number"
  },
  titlemarginRight: {
    type:"number"
  },
  titlemarginBottom: {
    type:'number'
  },
  titlemarginLeft: {
    type:'number'
  },
  titlepaddingTop: {
    type:"number"
  },
  titlepaddingRight: {
    type:"number"
  },
  titlepaddingBottom: {
    type:"number"
  },
  titlepaddingLeft: {
    type:"number"
  },
  descColor: {
    type:"string"
  },
  descShadowColor: {
    type: "string",
  },
  descShadowBlur: {
    type: "number",
    default: "0",
  },
  descShadowHorizontal: {
    type: "number",
    default: "0",
  },
  descShadowVertical: {
    type: "number",
    default: "0",
  },
  descShadowPosition: {
    type: "string",
    default: "",
  },
  descmarginTop: {
    type:"number"
  },
  descmarginRight: {
    type:"number"
  },
  descmarginBottom: {
    type:'number'
  },
  descmarginLeft: {
    type:'number'
  },
  descpaddingTop: {
    type:"number"
  },
  descpaddingRight: {
    type:"number"
  },
  descpaddingBottom: {
    type:"number"
  },
  descpaddingLeft: {
    type:"number"
  },
  linkColor: {
    type:"string"
  },
  linkHover: {
    type:"string"
  },
  linkSize: {
    type:"number"
  },
  linkWeight: {
    type:"number"
  },
  linkStyle: {
    type:"string"
  },
  linkLetter: {
    type:'number'
  },
  linkUpper: {
    type: 'boolean',
    default:false
  },
  containerborderType: {
    type: "string",
    default: "none",
  },
  containerborderWidth: {
    type: "number",
    default: "1",
  },
  containerborderRadius: {
    type: "number",
    default: "0",
  },
  containerborderColor: {
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
  containermarginTop: {
    type:"number"
  },
  containermarginRight: {
    type:"number"
  },
  containermarginBottom: {
    type:'number'
  },
  containermarginLeft: {
    type:'number'
  },

};

registerBlockType("premium/image-accordion", {
  title: __("Image Accordion"),
  icon: <PbgIcon icon="image" />,
  category: "premium-blocks",
  attributes: imageAccordionAttributes,
  supports: {
    inserter:imageAccordion
  },
  example: {},
  edit: edit,
  save:save,
});
