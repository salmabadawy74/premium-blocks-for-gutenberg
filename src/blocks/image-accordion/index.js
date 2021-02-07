import save from "./save";
import edit from "./edit";
import PbgIcon from "../icons";
import { imageAccordion } from "../../../assets/js/settings";

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
        title: `image`,
        imageURL:
          "http://localhost:8080/mywebsite/wp-content/plugins/elementor/assets/images/placeholder.png",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto",
        fixed: false,
        content: false,
        desc: "",
        custom: false,
        icon: false,
        selectedIcon: "",
        horizontalU: "px",
        horizontal: 0,
        verticalU: "px",
        vertical: 0,
        whole: false,
        link: false,
        url: "",
        urlTitle: "",
        edit: false,
      },
      {
        title: `image`,
        imageURL:
          "http://localhost:8080/mywebsite/wp-content/plugins/elementor/assets/images/placeholder.png",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto",
        fixed: false,
        content: false,
        desc: "",
        custom: false,
        icon: false,
        selectedIcon: "",
        horizontalU: "px",
        horizontal: 0,
        verticalU: "px",
        vertical: 0,
        whole: false,
        link: false,
        url: "",
        urlTitle: "",
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
    default: "right",
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
  iconU: {
    type: "string",
    default: "px",
  },
  iconSize: {
    type: "number",
    default: 15,
  },
  iconColor: {
    type: "string",
  },
  iconHoverColor: {
    type: "string",
  },
  iconbackgroundColor: {
    type: "string",
  },
  backgroundHover: {
    type: "string",
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
    default: "px",
  },
 
  iconborderColor: {
    type: "string",
  },
  iconmarginTop: {
    type: "number",
  },
  iconmarginRight: {
    type: "number",
  },
  iconmarginBottom: {
    type: "number",
  },
  iconmarginLeft: {
    type: "number",
  },
  iconpaddingTop: {
    type: "number",
  },
  iconpaddingRight: {
    type: "number",
  },
  iconpaddingUnit: {
    type: "string",
    default:"px"
  },
  iconpaddingBottom: {
    type: "number",
  },
  iconpaddingLeft: {
    type: "number",
  },
  titleColor: {
    type: "string",
  },
  titleSize: {
    type: "number",
    default:20
  },
  titleWeight: {
    type: "number",
    default:400
  },
  titleStyle: {
    type: "string",
  },
  titleLetter: {
    type: "number",
  },
  titleShadowColor: {
    type: "string",
  },
  titleShadowBlur: {
    type: "number",
    default: "0",
  },
  titleUpper: {
    type: "boolean",
    default: false
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
    type: "number",
  },
  titlemarginRight: {
    type: "number",
  },
  titlemarginBottom: {
    type: "number",
  },
  titlemarginLeft: {
    type: "number",
  },
  titlepaddingTop: {
    type: "number",
  },
  titlepaddingRight: {
    type: "number",
  },
  titlepaddingBottom: {
    type: "number",
  },
  titlepaddingLeft: {
    type: "number",
  },
  titlepaddingUnit: {
    type: "string",
    default:"px"
  },
  descColor: {
    type: "string",
  },
  descSize: {
    type: "number",
    default:18
  },
  descWeight: {
    type: "number",
    default:300
  },
  descStyle: {
    type:"string"
  },
  descLetter: {
    type: "number",
    default:0
  },
  descShadowColor: {
    type: "string",
  },
  descShadowBlur: {
    type: "number",
    default: "0",
  },
  descUpper: {
    type: "boolean",
    default:false
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
    type: "number",
  },
  descmarginRight: {
    type: "number",
  },
  descmarginBottom: {
    type: "number",
  },
  descmarginLeft: {
    type: "number",
  },
  descpaddingTop: {
    type: "number",
  },
  descpaddingRight: {
    type: "number",
  },
  descpaddingBottom: {
    type: "number",
  },
  descpaddingLeft: {
    type: "number",
  },
  descpaddingUnit: {
    type: "string",
    default:"px"
  },
  linkColor: {
    type: "string",
  },
  linkHover: {
    type: "string",
  },
  linkSize: {
    type: "number",
    
  },
  linkWeight: {
    type: "number",
    default:300
  },
  linkStyle: {
    type: "string",
    default:'normal'
  },
  linkLetter: {
    type: "number",
    default:0
  },
  linkUpper: {
    type: "boolean",
    default: false,
  },
  containerborderType: {
    type: "string",
    default: "none",
  },
  containerborderWidth: {
    type: "number",
    default: 1,
  },
  containerborderRadius: {
    type: "number",
    default:0,
  },
  containerborderColor: {
    type: "string",
  },
  containerShadowColor: {
    type: "string",
  },
  containerShadowBlur: {
    type: "number",
    default: 0,
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
    type: "number",
  },
  containermarginRight: {
    type: "number",
  },
  containermarginBottom: {
    type: "number",
  },
  containermarginLeft: {
    type: "number",
  },
};

registerBlockType("premium/image-accordion", {
  title: __("Image Accordion"),
  icon: <PbgIcon icon="image" />,
  category: "premium-blocks",
  attributes: imageAccordionAttributes,
  supports: {
    inserter: imageAccordion,
  },
  example: {},
  edit: edit,
  save: save,
});
