import { pricingTable } from "../../../assets/js/settings";
import PbgIcon from "../icons";
import edit from "./edit";
import save from "./save";
import deprecatedContent from "./deprecated";


const { registerBlockType } = wp.blocks;

const { __ } = wp.i18n;

const pricingAttrs = {
    contentAlign: {
        type: "string",
        default: "center",
    },
    tableBack: {
        type: "string",
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
    tablePadding: {
        type: "number",
        default: "0",
    },
    tableShadowColor: {
        type: "string",
    },
    tableShadowBlur: {
        type: "number",
        default: "0",
    },
    tableShadowHorizontal: {
        type: "number",
        default: "0",
    },
    tableShadowVertical: {
        type: "number",
        default: "0",
    },
    tableShadowPosition: {
        type: "string",
        default: "",
    },
    title: {
        type: "array",
        source: "children",
        selector: ".premium-pricing-table__title",
        default: "Pricing Table",
    },
    titleTag: {
        type: "string",
        default: "H2",
    },
    titleColor: {
        type: "string",
        default: "#6ec1e4",
    },
    titleSizeUnit: {
        type: 'string',
        default:'px',
    },
    titleSize: {
        type: "number",
    },
    titleSizeMobile: {
        type:'number'
    },
    titleSizeTablet: {
        type:"number"
    },
    titleLine: {
        type: "number",
    },
    titleLetter: {
        type: "number",
    },
    titleStyle: {
        type: "string",
    },
    titleUpper: {
        type: "boolean",
    },
    titleWeight: {
        type: "number",
        default: 500,
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
    titleBack: {
        type: "string",
    },
    titleMarginB: {
        type: "number",
        default: 20,
    },
    titleMarginT: {
        type: "number",
        default: 20,
    },
    titlePadding: {
        type: "number",
        default: "0",
    },
    desc: {
        type: "array",
        source: "children",
        selector: ".premium-pricing-table__desc",
    },
    descColor: {
        type: "string",
        default: "#000",
    },
    descSize: {
        type: "number",
    },
    descSizeUnit: {
        type: "string",
      default:'px'  
    },
    descSizeTablet: {
      type:'number'  
    },
    descSizeMobile: {
      type:'number'  
    },
    descWeight: {
        type: "number",
    },
    descLetter: {
        type: "number",
    },
    descStyle: {
        type: "string",
    },
    descLine: {
        type: "number",
    },
    descBack: {
        type: "string",
    },
    descMarginT: {
        type: "number",
        default: "0",
    },
    descMarginB: {
        type: "number",
        default: "30",
    },
    descPadding: {
        type: "number",
        default: "0",
    },
    titleChecked: {
        type: "boolean",
        default: true,
    },
    descChecked: {
        type: "boolean",
        default: false,
    },
    priceChecked: {
        type: "boolean",
        default: true,
    },
    priceBack: {
        type: "string",
    },
    priceMarginT: {
        type: "number",
    },
    priceMarginB: {
        type: "number",
        default: 10,
    },
    pricePadding: {
        type: "number",
    },
    slashPrice: {
        type: "string",
    },
    slashColor: {
        type: "string",
    },
    slashSizeUnit: {
        type: "string",
      default:'px'  
    },
    slashSize: {
        type: "number",
        default: 20,
    },
    slashSizeMobile: {
      type:"number"  
    },
    slashSizeTablet: {
        type:"number"
    },
    slashWeight: {
        type: "number",
    },
    currPrice: {
        type: "string",
        default: "$",
    },
    currColor: {
        type: "string",
    },
    currSize: {
        type: "number",
        default: 20,
    },
    currSizeUnit: {
        type: "string",
        default:'px'
    },
    currSizeMobile: {
        type:"number"
    },
    currSizeTablet: {
      type:"number"  
    },
    currWeight: {
        type: "number",
    },
    valPrice: {
        type: "string",
        default: "25",
    },
    valColor: {
        type: "string",
    },
    valSizeUnit: {
        type: "string",
      default:"px"  
    },
    valSize: {
        type: "number",
        default: 50,
    },
    valSizeMobile: {
      type:"number"  
    },
    valSizeTablet: {
        type:"number"
    },
    valWeight: {
        type: "number",
    },
    divPrice: {
        type: "string",
        default: "/",
    },
    divColor: {
        type: "string",
    },
    divSize: {
        type: "number",
        default: 20,
    },
    divSizeUnit: {
        type: "string",
        default:"px"
    },
    divSizeMobile: {
        type:"number"
    },
    divSizeTablet: {
      type:"number"  
    },
    divWeight: {
        type: "number",
    },
    durPrice: {
        type: "string",
        default: "m",
    },
    durColor: {
        type: "string",
    },
    durSizeUnit: {
        type: "string",
      default:'px'  
    },
    durSize: {
        type: "number",
        default: 20,
    },
    durSizeMobile: {
      type:"number"  
    },
    durSizeTablet: {
      type:"number"  
    },
    durWeight: {
        type: "number",
    },
    selectedStyle: {
        type: "string",
        default: "price",
    },
    btnChecked: {
        type: "boolean",
        default: true,
    },
    btnText: {
        type: "string",
        default: "Get Started",
    },
    btnLink: {
        type: "string",
        source: "attribute",
        attribute: "href",
        selector: ".premium-pricing-table__button_link",
    },
    btnTarget: {
        type: "boolean",
        default: true,
    },
    btnColor: {
        type: "string",
        default: "#fff",
    },
    btnHoverColor: {
        type: "string",
    },
    btnWidth: {
        type: "number",
    },
    btnSize: {
        type: "number",
    },
    btnSizeUnit: {
        type: 'string',
      default:'px'  
    },
    btnSizeTablet: {
      type:'number'  
    },
    btnSizeMobile: {
      type:'number'  
    },
    btnWeight: {
        type: "number",
        default: 900,
    },
    btnLine: {
        type: "number",
    },
    btnLetter: {
        type: "number",
    },
    btnStyle: {
        type: "string",
    },
    btnUpper: {
        type: "boolean",
    },
    btnBack: {
        type: "string",
        default: "#6ec1e4",
    },
    btnHoverBack: {
        type: "string",
    },
    btnMarginT: {
        type: "number",
        default: "0",
    },
    btnMarginB: {
        type: "number",
        default: "0",
    },
    btnPadding: {
        type: "number",
        default: 10,
    },
    btnPaddingU: {
        type: "string",
    },
    btnBorderType: {
        type: "string",
        default: "none",
    },
    btnBorderWidth: {
        type: "number",
        default: "1",
    },
    btnBorderRadius: {
        type: "number",
        default: "0",
    },
    btnBorderColor: {
        type: "string",
    },
    badgeChecked: {
        type: "boolean",
    },
    badgePos: {
        type: "string",
        default: "right",
    },
    badgeBack: {
        type: "string",
        default: "#6ec1e4",
    },
    badgeColor: {
        type: "string",
    },
    badgeTextSize: {
        type: "number",
    },
    badgeSize: {
        type: "number",
    },
    badgeTextUnit: {
        type: 'string',
      default:'px'  
    },
    badgeTextSizeTablet: {
        type:'number'
    },
    badgeTextSizeMobile: {
        type:'number'
    },
    badgeTop: {
        type: "number",
    },
    badgeHorizontal: {
        type: "number",
    },
    badgeWidth: {
        type: "number",
    },
    badgeWeight: {
        type: "number",
        default: 900,
    },
    badgeLetter: {
        type: "number",
    },
    badgeStyle: {
        type: "string",
    },
    badgeUpper: {
        type: "boolean",
    },
    badgeText: {
        type: "string",
        default: __("Popular"),
    },
    listChecked: {
        type: "boolean",
        default: true,
    },
    listColor: {
        type: "string",
    },
    listSize: {
        type: "number",
    },
    listSizeUnit: {
        type: 'string',
        default:'px'
    },
    listSizeTablet: {
        type:'number'
    },
    listSizeMobile: {
      type:'number'  
    },
    listWeight: {
        type: "number",
        default: 500,
    },
    listItemsStyle: {
        type: "string",
    },
    listLetter: {
        type: "number",
    },
    listLine: {
        type: "number",
    },
    listUpper: {
        type: "boolean",
    },
    listBack: {
        type: "string",
    },
    listItems: {
        type: "array",
        source: "children",
        selector: ".premium-pricing-table__list",
    },
    listMarginB: {
        type: "number",
        default: 20,
    },
    listMarginT: {
        type: "number",
    },
    listPadding: {
        type: "number",
    },
    listStyle: {
        type: "string",
        default: "disc",
    },
    featsAlign: {
        type: "string",
    },
    slashV: {
        type: "string",
        default: "center",
    },
    currV: {
        type: "string",
        default: "center",
    },
    valV: {
        type: "string",
        default: "center",
    },
    divV: {
        type: "string",
        default: "center",
    },
    durV: {
        type: "string",
        default: "center",
    },
    block_id: {
        type: "string"
    },
    classMigrate: {
        type: 'boolean',
        default:false
    }, tableOpacity: {
        type: "number",
        default: "1",
    },
    priceOpacity: {
        type: "number",
        default: "1",
    },
	
	hideDesktop: {
		type: "boolean",
		default:false
	},
	hideTablet: {
		type: "boolean",
		default:false
	},
	hideMobile: {
		type: 'boolean',
		default:false
	}
};

registerBlockType("premium/pricing-table", {
    title: __("Pricing Table"),
    icon: <PbgIcon icon="pricing-table" />,
    category: "premium-blocks",
    attributes: pricingAttrs,
    supports: {
        inserter: pricingTable,
    },
    edit: edit,
    save: save,
    deprecated: deprecatedContent,
});
