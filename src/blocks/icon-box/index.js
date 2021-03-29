import { iconBox } from "../../../assets/js/settings";
import PbgIcon from "../icons";
import edit from "./edit";
import save from "./save";
import deprecatedContent from "./deprecated";
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const iconBoxAttrs = {
    block_id: {
        type: "string"
    },
    borderIconBox: {
        type: "boolean",
        default: false
    },
    btnBorderIconBox: {
        type: "boolean",
        default: false
    },
    align: {
        type: "string",
        default: "center"
    },
    iconImage: {
        type: "string",
        default: "icon"
    },
    iconImgId: {
        type: "string"
    },
    iconImgUrl: {
        type: "string"
    },
    hoverEffect: {
        type: "string",
        default: "none"
    },
    iconChecked: {
        type: "boolean",
        default: true
    },
    iconPos: {
        type: "string",
        default: "block"
    },
    iconHPos: {
        type: "string",
        default: "before"
    },
    iconVPos: {
        type: "string",
        default: "center"
    },
    iconSize: {
        type: "number"
    },
    iconRadius: {
        type: "number"
    },
    iconColor: {
        type: "string"
    },
    iconBackColor: {
        type: "string"
    },
    selectedIcon: {
        type: "string",
        default: "dashicons dashicons-admin-site"
    },
    titleChecked: {
        type: "boolean",
        default: true
    },
    titleText: {
        type: "array",
        source: "children",
        selector: ".premium-icon-box__title",
        default: __("Awesome Title")
    },
    titleTag: {
        type: "string",
        default: "H2"
    },
    titleFont: {
        type: "string"
    },
    titleColor: {
        type: "string"
    },
    titleSize: {
        type: "number",
        default: '20'
    },
    titleSizeUnit: {
        type: 'string',
        default: 'px'
    },
    titleSizeTablet: {
        type: 'number',
        default: '20'
    },
    titleSizeMobile: {
        type: 'number',
        default: '20'
    },
    titleLine: {
        type: "number"
    },
    titleLetter: {
        type: "number"
    },
    titleStyle: {
        type: "string"
    },
    titleUpper: {
        type: "boolean"
    },
    titleWeight: {
        type: "number",
        default: 500
    },
    titleShadowColor: {
        type: "string"
    },
    titleShadowBlur: {
        type: "number",
        default: "0"
    },
    titleShadowHorizontal: {
        type: "number",
        default: "0"
    },
    titleShadowVertical: {
        type: "number",
        default: "0"
    },
    titleMarginT: {
        type: "number"
    },
    titleMarginB: {
        type: "number"
    },
    descText: {
        type: "array",
        source: "children",
        selector: ".premium-icon-box__desc",
        default:
            "Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec id elit non mi porta gravida at eget metus."
    },
    descChecked: {
        type: "boolean",
        default: true
    },
    descFont: {
        type: "string"
    },
    descColor: {
        type: "string"
    },
    descSize: {
        type: "number",
        default: '20'
    },
    descSizeUnit: {
        type: "string",
        default: 'px'
    },
    descSizeTablet: {
        type: "number",
        default: '20'
    },
    descSizeMobile: {
        type: "number",
        default: '20'
    },
    descLine: {
        type: "number"
    },
    descWeight: {
        type: "number",
        default: 500
    },
    descMarginT: {
        type: "number"
    },
    descMarginB: {
        type: "number"
    },
    btnChecked: {
        type: "boolean",
        default: true
    },
    btnEffect: {
        type: "string",
        default: "none"
    },
    effectDir: {
        type: "string",
        default: "top"
    },
    btnTarget: {
        type: "boolean",
        default: false
    },
    btnText: {
        type: "array",
        source: "children",
        selector: ".premium-icon-box__btn",
        default: __("Click Here")
    },
    btnLink: {
        type: "string",
        source: "attribute",
        attribute: "href",
        selector: ".premium-icon-box__btn"
    },
    btnColor: {
        type: "string"
    },
    btnHoverColor: {
        type: "string"
    },
    btnBack: {
        type: "string"
    },
    btnHoverBack: {
        type: "string"
    },
    btnHoverBorder: {
        type: "string"
    },
    btnSize: {
        type: "number",
        default: '20'
    },
    btnSizeUnit: {
        type: "string",
        default: "px"
    },
    btnSizeTablet: {
        type: "number",
        default: '20'
    },
    btnSizeMobile: {
        type: "number",
        default: '20'
    },
    btnLine: {
        type: "number"
    },
    btnLetter: {
        type: "number"
    },
    btnStyle: {
        type: "string"
    },
    btnUpper: {
        type: "boolean"
    },
    btnWeight: {
        type: "number",
        default: 500
    },
    btnBorderType: {
        type: "string",
        default: "none"
    },
    btnBorderWidth: {
        type: "number",
        default: "1"
    },
    btnBorderTop: {
        type: "number"
    },
    btnBorderRight: {
        type: "number"
    },
    btnBorderBottom: {
        type: "number"
    },
    btnBorderLeft: {
        type: "number"
    },
    borderTop: {
        type: "number"
    },
    borderRight: {
        type: "number"
    },
    borderBottom: {
        type: "number"
    },
    borderLeft: {
        type: "number"
    },
    btnBorderRadius: {
        type: "number"
    },
    btnBorderColor: {
        type: "string"
    },
    btnPadding: {
        type: "number"
    },
    btnPaddingU: {
        type: "string"
    },
    btnMarginT: {
        type: "number"
    },
    btnMarginB: {
        type: "number"
    },
    btnShadowColor: {
        type: "string"
    },
    btnShadowBlur: {
        type: "number",
        default: "0"
    },
    btnShadowHorizontal: {
        type: "number",
        default: "0"
    },
    btnShadowVertical: {
        type: "number",
        default: "0"
    },
    btnShadowPosition: {
        type: "string",
        default: ""
    },
    imageID: {
        type: "string"
    },
    imageURL: {
        type: "string"
    },
    backColor: {
        type: "string"
    },
    backgroundRepeat: {
        type: "string",
        default: "no-repeat"
    },
    backgroundPosition: {
        type: "string",
        default: "top center"
    },
    backgroundSize: {
        type: "string",
        default: "auto"
    },
    fixed: {
        type: "boolean",
        default: false
    },
    borderType: {
        type: "string",
        default: "none"
    },
    borderWidth: {
        type: "number",
        default: "1"
    },
    borderRadius: {
        type: "number"
    },
    borderColor: {
        type: "string"
    },
    marginT: {
        type: "number"
    },
    marginR: {
        type: "number"
    },
    marginB: {
        type: "number"
    },
    marginL: {
        type: "number"
    },
    paddingT: {
        type: "number"
    },
    paddingR: {
        type: "number"
    },
    paddingB: {
        type: "number"
    },
    paddingL: {
        type: "number"
    },
    paddingU: {
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
    shadowPosition: {
        type: "string",
        default: ""
    },
    hoverShadowColor: {
        type: "string"
    },
    hoverShadowBlur: {
        type: "number"
    },
    hoverShadowHorizontal: {
        type: "number"
    },
    hoverShadowVertical: {
        type: "number"
    },
    hoverShadowPosition: {
        type: "string"
    },
    classMigrate: {
        type: "boolean",
        default: false
    },
    hideDesktop: {
        type: 'boolean',
        default: false
    },
    hideTablet: {
        type: 'boolean',
        default: false
    },
    hideMobile: {
        type: 'boolean',
        default: false
    },
    backOpacity: {
        type: "number",
        default: "1",
    },
    iconOpacity: {
        type: "number",
        default: "1"
    },
    btnOpacity: {
        type: "number",
        default: "1"
    },
};
registerBlockType("premium/icon-box", {
    title: __("Icon Box"),
    icon: <PbgIcon icon="icon-box" />,
    category: "premium-blocks",
    attributes: iconBoxAttrs,
    supports: {
        inserter: iconBox
    },
    example: {},
    edit: edit,
    save: save,
    deprecated: deprecatedContent
});