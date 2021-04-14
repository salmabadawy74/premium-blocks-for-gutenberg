const className = "premium-icon-box";
import hexToRgba from "hex-to-rgba";

const { __ } = wp.i18n;

const { RichText } = wp.editor;

const deprecated_attributes_1_3_4 = {
    id: {
        type: "string",
    },
    align: {
        type: "string",
        default: "center",
    },
    iconImage: {
        type: "string",
        default: "icon",
    },
    iconImgId: {
        type: "string",
    },
    iconImgUrl: {
        type: "string",
    },
    hoverEffect: {
        type: "string",
        default: "none",
    },
    iconChecked: {
        type: "boolean",
        default: true,
    },
    iconSize: {
        type: "number",
    },
    iconRadius: {
        type: "number",
    },
    iconColor: {
        type: "string",
    },
    selectedIcon: {
        type: "string",
        default: "dashicons dashicons-admin-site",
    },
    titleChecked: {
        type: "boolean",
        default: true,
    },
    titleText: {
        type: "array",
        source: "children",
        selector: ".premium-icon-box__title",
        default: __("Awesome Title"),
    },
    titleTag: {
        type: "string",
        default: "H2",
    },
    titleColor: {
        type: "string",
    },
    titleSize: {
        type: "number",
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
    titleMarginT: {
        type: "number",
    },
    titleMarginB: {
        type: "number",
    },
    descText: {
        type: "array",
        source: "children",
        selector: ".premium-icon-box__desc",
        default:
            "Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec id elit non mi porta gravida at eget metus.",
    },
    descChecked: {
        type: "boolean",
        default: true,
    },
    descColor: {
        type: "string",
    },
    descSize: {
        type: "number",
    },
    descLine: {
        type: "number",
    },
    descWeight: {
        type: "number",
        default: 500,
    },
    descMarginT: {
        type: "number",
    },
    descMarginB: {
        type: "number",
    },
    btnChecked: {
        type: "boolean",
        default: true,
    },
    btnEffect: {
        type: "string",
        default: "none",
    },
    effectDir: {
        type: "string",
        default: "top",
    },
    btnTarget: {
        type: "boolean",
        default: false,
    },
    btnText: {
        type: "array",
        source: "children",
        selector: ".premium-icon-box__btn",
        default: __("Click Here"),
    },
    btnLink: {
        type: "string",
        source: "attribute",
        attribute: "href",
        selector: ".premium-icon-box__btn",
    },
    btnColor: {
        type: "string",
    },
    btnHoverColor: {
        type: "string",
    },
    btnBack: {
        type: "string",
    },
    btnHoverBack: {
        type: "string",
    },
    btnHoverBorder: {
        type: "string",
    },
    btnSize: {
        type: "number",
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
    btnWeight: {
        type: "number",
        default: 500,
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
    },
    btnBorderColor: {
        type: "string",
    },
    btnPadding: {
        type: "number",
    },
    btnMarginT: {
        type: "number",
    },
    btnMarginB: {
        type: "number",
    },
    btnShadowColor: {
        type: "string",
    },
    btnShadowBlur: {
        type: "number",
        default: "0",
    },
    btnShadowHorizontal: {
        type: "number",
        default: "0",
    },
    btnShadowVertical: {
        type: "number",
        default: "0",
    },
    btnShadowPosition: {
        type: "string",
        default: "",
    },
    imageID: {
        type: "string",
    },
    imageURL: {
        type: "string",
    },
    backColor: {
        type: "string",
    },
    backgroundRepeat: {
        type: "string",
        default: "no-repeat",
    },
    backgroundPosition: {
        type: "string",
        default: "top center",
    },
    backgroundSize: {
        type: "string",
        default: "auto",
    },
    fixed: {
        type: "boolean",
        default: false,
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
    },
    borderColor: {
        type: "string",
    },
    marginT: {
        type: "number",
    },
    marginR: {
        type: "number",
    },
    marginB: {
        type: "number",
    },
    marginL: {
        type: "number",
    },
    paddingT: {
        type: "number",
    },
    paddingR: {
        type: "number",
    },
    paddingB: {
        type: "number",
    },
    paddingL: {
        type: "number",
    },
    shadowColor: {
        type: "string",
    },
    shadowBlur: {
        type: "number",
        default: "0",
    },
    shadowHorizontal: {
        type: "number",
        default: "0",
    },
    shadowVertical: {
        type: "number",
        default: "0",
    },
    shadowPosition: {
        type: "string",
        default: "",
    },
};

const deprecated_attributes_1_3_0 = {
    id: {
        type: "string",
    },
    align: {
        type: "string",
        default: "center",
    },
    iconImage: {
        type: "string",
        default: "icon",
    },
    iconImgId: {
        type: "string",
    },
    iconImgUrl: {
        type: "string",
    },
    hoverEffect: {
        type: "string",
        default: "none",
    },
    iconChecked: {
        type: "boolean",
        default: true,
    },
    iconSize: {
        type: "number",
        default: 50,
    },
    iconRadius: {
        type: "number",
    },
    iconColor: {
        type: "string",
    },
    iconType: {
        type: "string",
        default: "dash",
    },
    selectedIcon: {
        type: "string",
        default: "dashicons dashicons-admin-site",
    },
    titleChecked: {
        type: "boolean",
        default: true,
    },
    titleText: {
        type: "array",
        source: "children",
        selector: ".premium-icon-box__title",
        default: __("Awesome Title"),
    },
    titleTag: {
        type: "string",
        default: "H2",
    },
    titleColor: {
        type: "string",
    },
    titleSize: {
        type: "number",
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
    titleMarginT: {
        type: "number",
    },
    titleMarginB: {
        type: "number",
    },
    descText: {
        type: "array",
        source: "children",
        selector: ".premium-icon-box__desc",
        default:
            "Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec id elit non mi porta gravida at eget metus.",
    },
    descChecked: {
        type: "boolean",
        default: true,
    },
    descColor: {
        type: "string",
    },
    descSize: {
        type: "number",
    },
    descLine: {
        type: "number",
    },
    descWeight: {
        type: "number",
        default: 500,
    },
    descMarginT: {
        type: "number",
    },
    descMarginB: {
        type: "number",
    },
    btnChecked: {
        type: "boolean",
        default: true,
    },
    btnEffect: {
        type: "string",
        default: "none",
    },
    effectDir: {
        type: "string",
        default: "top",
    },
    btnTarget: {
        type: "boolean",
        default: false,
    },
    btnText: {
        type: "array",
        source: "children",
        selector: ".premium-icon-box__btn",
        default: __("Click Here"),
    },
    btnLink: {
        type: "string",
        source: "attribute",
        attribute: "href",
        selector: ".premium-icon-box__btn",
    },
    btnColor: {
        type: "string",
    },
    btnHoverColor: {
        type: "string",
    },
    btnBack: {
        type: "string",
    },
    btnHoverBack: {
        type: "string",
    },
    btnHoverBorder: {
        type: "string",
    },
    btnSize: {
        type: "number",
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
    btnWeight: {
        type: "number",
        default: 500,
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
    },
    btnBorderColor: {
        type: "string",
    },
    btnPadding: {
        type: "number",
    },
    btnMarginT: {
        type: "number",
    },
    btnMarginB: {
        type: "number",
    },
    btnShadowColor: {
        type: "string",
    },
    btnShadowBlur: {
        type: "number",
        default: "0",
    },
    btnShadowHorizontal: {
        type: "number",
        default: "0",
    },
    btnShadowVertical: {
        type: "number",
        default: "0",
    },
    btnShadowPosition: {
        type: "string",
        default: "",
    },
    imageID: {
        type: "string",
    },
    imageURL: {
        type: "string",
    },
    backColor: {
        type: "string",
    },
    backgroundRepeat: {
        type: "string",
        default: "no-repeat",
    },
    backgroundPosition: {
        type: "string",
        default: "top center",
    },
    backgroundSize: {
        type: "string",
        default: "auto",
    },
    fixed: {
        type: "boolean",
        default: false,
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
    },
    borderColor: {
        type: "string",
    },
    marginT: {
        type: "number",
    },
    marginR: {
        type: "number",
    },
    marginB: {
        type: "number",
    },
    marginL: {
        type: "number",
    },
    paddingT: {
        type: "number",
    },
    paddingR: {
        type: "number",
    },
    paddingB: {
        type: "number",
    },
    paddingL: {
        type: "number",
    },
    shadowColor: {
        type: "string",
    },
    shadowBlur: {
        type: "number",
        default: "0",
    },
    shadowHorizontal: {
        type: "number",
        default: "0",
    },
    shadowVertical: {
        type: "number",
        default: "0",
    },
    shadowPosition: {
        type: "string",
        default: "",
    },
};

const newAttributes_1_4_9 = {
    hoverShadowColor: {
        type: "string",
    },
    hoverShadowBlur: {
        type: "number",
    },
    hoverShadowHorizontal: {
        type: "number",
    },
    hoverShadowVertical: {
        type: "number",
    },
    hoverShadowPosition: {
        type: "string",
    },
};

const deprecated_attributes_1_4_9 = Object.assign(
    deprecated_attributes_1_3_4,
    newAttributes_1_4_9
);

const newAttributes_1_5_1 = {
    iconBackColor: {
        type: "string",
    },
};

const deprecated_attributes_1_5_1 = Object.assign(
    deprecated_attributes_1_4_9,
    newAttributes_1_5_1
);

const newAttributes_1_5_7 = {
    titleFont: {
        type: "string",
    },
    descFont: {
        type: "string",
    },
};

const deprecated_attributes_1_5_7 = Object.assign(
    deprecated_attributes_1_5_1,
    newAttributes_1_5_7
);

const newAttributes_1_6_6 = {
    btnPaddingU: {
        type: "string",
    },
    paddingU: {
        type: "string",
    },
};

const deprecated_attributes_1_6_6 = Object.assign(
    deprecated_attributes_1_5_7,
    newAttributes_1_6_6
);

const deprecated_attributes_1_7_1 = {
    id: {
        type: "string",
    },
    align: {
        type: "string",
        default: "center",
    },
    iconImage: {
        type: "string",
        default: "icon",
    },
    iconImgId: {
        type: "string",
    },
    iconImgUrl: {
        type: "string",
    },
    hoverEffect: {
        type: "string",
        default: "none",
    },
    iconChecked: {
        type: "boolean",
        default: true,
    },
    iconPos: {
        type: "string",
        default: "block",
    },
    iconHPos: {
        type: "string",
        default: "before",
    },
    iconVPos: {
        type: "string",
        default: "center",
    },
    iconSize: {
        type: "number",
    },
    iconRadius: {
        type: "number",
    },
    iconColor: {
        type: "string",
    },
    iconBackColor: {
        type: "string",
    },
    selectedIcon: {
        type: "string",
        default: "dashicons dashicons-admin-site",
    },
    titleChecked: {
        type: "boolean",
        default: true,
    },
    titleText: {
        type: "array",
        source: "children",
        selector: ".premium-icon-box__title",
        default: __("Awesome Title"),
    },
    titleTag: {
        type: "string",
        default: "H2",
    },
    titleFont: {
        type: "string",
    },
    titleColor: {
        type: "string",
    },
    titleSize: {
        type: "number",
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
    titleMarginT: {
        type: "number",
    },
    titleMarginB: {
        type: "number",
    },
    descText: {
        type: "array",
        source: "children",
        selector: ".premium-icon-box__desc",
        default:
            "Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec id elit non mi porta gravida at eget metus.",
    },
    descChecked: {
        type: "boolean",
        default: true,
    },
    descFont: {
        type: "string",
    },
    descColor: {
        type: "string",
    },
    descSize: {
        type: "number",
    },
    descLine: {
        type: "number",
    },
    descWeight: {
        type: "number",
        default: 500,
    },
    descMarginT: {
        type: "number",
    },
    descMarginB: {
        type: "number",
    },
    btnChecked: {
        type: "boolean",
        default: true,
    },
    btnEffect: {
        type: "string",
        default: "none",
    },
    effectDir: {
        type: "string",
        default: "top",
    },
    btnTarget: {
        type: "boolean",
        default: false,
    },
    btnText: {
        type: "array",
        source: "children",
        selector: ".premium-icon-box__btn",
        default: __("Click Here"),
    },
    btnLink: {
        type: "string",
        source: "attribute",
        attribute: "href",
        selector: ".premium-icon-box__btn",
    },
    btnColor: {
        type: "string",
    },
    btnHoverColor: {
        type: "string",
    },
    btnBack: {
        type: "string",
    },
    btnHoverBack: {
        type: "string",
    },
    btnHoverBorder: {
        type: "string",
    },
    btnSize: {
        type: "number",
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
    btnWeight: {
        type: "number",
        default: 500,
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
    },
    btnBorderColor: {
        type: "string",
    },
    btnPadding: {
        type: "number",
    },
    btnPaddingU: {
        type: "string",
    },
    btnMarginT: {
        type: "number",
    },
    btnMarginB: {
        type: "number",
    },
    btnShadowColor: {
        type: "string",
    },
    btnShadowBlur: {
        type: "number",
        default: "0",
    },
    btnShadowHorizontal: {
        type: "number",
        default: "0",
    },
    btnShadowVertical: {
        type: "number",
        default: "0",
    },
    btnShadowPosition: {
        type: "string",
        default: "",
    },
    imageID: {
        type: "string",
    },
    imageURL: {
        type: "string",
    },
    backColor: {
        type: "string",
    },
    backgroundRepeat: {
        type: "string",
        default: "no-repeat",
    },
    backgroundPosition: {
        type: "string",
        default: "top center",
    },
    backgroundSize: {
        type: "string",
        default: "auto",
    },
    fixed: {
        type: "boolean",
        default: false,
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
    },
    borderColor: {
        type: "string",
    },
    marginT: {
        type: "number",
    },
    marginR: {
        type: "number",
    },
    marginB: {
        type: "number",
    },
    marginL: {
        type: "number",
    },
    paddingT: {
        type: "number",
    },
    paddingR: {
        type: "number",
    },
    paddingB: {
        type: "number",
    },
    paddingL: {
        type: "number",
    },
    paddingU: {
        type: "string",
    },
    shadowColor: {
        type: "string",
    },
    shadowBlur: {
        type: "number",
        default: "0",
    },
    shadowHorizontal: {
        type: "number",
        default: "0",
    },
    shadowVertical: {
        type: "number",
        default: "0",
    },
    shadowPosition: {
        type: "string",
        default: "",
    },
    hoverShadowColor: {
        type: "string",
    },
    hoverShadowBlur: {
        type: "number",
    },
    hoverShadowHorizontal: {
        type: "number",
    },
    hoverShadowVertical: {
        type: "number",
    },
    hoverShadowPosition: {
        type: "string",
    },
};

const newAttributes_1_7_2 = {
    borderIconBox: {
        type: "boolean",
        default: false,
    },
    btnBorderIconBox: {
        type: "boolean",
        default: false,
    },
    btnBorderTop: {
        type: "number",
    },
    btnBorderRight: {
        type: "number",
    },
    btnBorderBottom: {
        type: "number",
    },
    btnBorderLeft: {
        type: "number",
    },
    borderTop: {
        type: "number",
    },
    borderRight: {
        type: "number",
    },
    borderBottom: {
        type: "number",
    },
    borderLeft: {
        type: "number",
    },
    block_id: {
        type: "string"
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
        default: "1",
    },
    btnOpacity: {
        type: "number",
        default: "1",
    },
};

const deprecated_attributes_1_7_2 = Object.assign(
    newAttributes_1_7_2,
    deprecated_attributes_1_7_1
);
const newAttributes_1_7_3 = {
    btnPaddingT: {
        type: "number"
    },
    btnPaddingR: {
        type: "number"
    },
    btnPaddingB: {
        type: "number"
    },
    btnPaddingL: {
        type: "number"
    },
    btnPaddingTTablet: {
        type: "number"
    },
    btnPaddingRTablet: {
        type: "number"
    },
    btnPaddingBTablet: {
        type: "number"
    },
    btnPaddingLTablet: {
        type: "number"
    },
    btnPaddingTMobile: {
        type: "number"
    },
    btnPaddingRMobile: {
        type: "number"
    },
    btnPaddingBMobile: {
        type: "number"
    },
    btnPaddingLMobile: {
        type: "number"
    },
    btnPaddingU: {
        type: "string",
        default: "px"
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
    paddingTTablet: {
        type: "number"
    },
    paddingRTablet: {
        type: "number"
    },
    paddingBTablet: {
        type: "number"
    },
    paddingLTablet: {
        type: "number"
    },
    paddingTMobile: {
        type: "number"
    },
    paddingRMobile: {
        type: "number"
    },
    paddingBMobile: {
        type: "number"
    },
    paddingLMobile: {
        type: "number"
    },
    paddingU: {
        type: "string",
        default: "px"
    }
}
const deprecated_attributes_1_7_3 = Object.assign(deprecated_attributes_1_7_2, newAttributes_1_7_3)

const newAttributes_1_7_7 = {
    titleMarginT: {
        type: "number"
    },
    titleMarginB: {
        type: "number"
    },
    titleMarginTTablet: {
        type: "number"
    },
    titleMarginBTablet: {
        type: "number"
    },
    titleMarginTMobile: {
        type: "number"
    },
    titleMarginBMobile: {
        type: "number"
    },
    descMarginT: {
        type: "number"
    },
    descMarginB: {
        type: "number"
    },
    descMarginTTablet: {
        type: "number"
    },
    descMarginBTablet: {
        type: "number"
    },
    descMarginTMobile: {
        type: "number"
    },
    descMarginBMobile: {
        type: "number"
    },
    btnPaddingT: {
        type: "number"
    },
    btnPaddingR: {
        type: "number"
    },
    btnPaddingB: {
        type: "number"
    },
    btnPaddingL: {
        type: "number"
    },
    btnPaddingTTablet: {
        type: "number"
    },
    btnPaddingRTablet: {
        type: "number"
    },
    btnPaddingBTablet: {
        type: "number"
    },
    btnPaddingLTablet: {
        type: "number"
    },
    btnPaddingTMobile: {
        type: "number"
    },
    btnPaddingRMobile: {
        type: "number"
    },
    btnPaddingBMobile: {
        type: "number"
    },
    btnPaddingLMobile: {
        type: "number"
    },
    btnPaddingU: {
        type: "string",
        default: "px"
    },
    btnMarginT: {
        type: "number"
    },
    btnMarginB: {
        type: "number"
    },
    btnMarginTTablet: {
        type: "number"
    },
    btnMarginBTablet: {
        type: "number"
    },
    btnMarginTMobile: {
        type: "number"
    },
    btnMarginBMobile: {
        type: "number"
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
    marginTTablet: {
        type: "number"
    },
    marginRTablet: {
        type: "number"
    },
    marginBTablet: {
        type: "number"
    },
    marginLTablet: {
        type: "number"
    },
    marginTMobile: {
        type: "number"
    },
    marginRMobile: {
        type: "number"
    },
    marginBMobile: {
        type: "number"
    },
    marginLMobile: {
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
    paddingTTablet: {
        type: "number"
    },
    paddingRTablet: {
        type: "number"
    },
    paddingBTablet: {
        type: "number"
    },
    paddingLTablet: {
        type: "number"
    },
    paddingTMobile: {
        type: "number"
    },
    paddingRMobile: {
        type: "number"
    },
    paddingBMobile: {
        type: "number"
    },
    paddingLMobile: {
        type: "number"
    },
    paddingU: {
        type: "string",
        default: "px"
    },
}

const deprecated_attributes_1_7_7 = Object.assign(newAttributes_1_7_7, deprecated_attributes_1_7_3);

const deprecatedContent = [
    {
        attributes: deprecated_attributes_1_7_7,
        migrate: attributes => {
            let newAttributes = {
                titleMarginT: '',
                titleMarginB: '',
                titleMarginTTablet: '',
                titleMarginBTablet: '',
                titleMarginTMobile: '',
                titleMarginBMobile: '',
                descMarginT: '',
                descMarginB: '',
                descMarginTTablet: '',
                descMarginBTablet: '',
                descMarginTMobile: '',
                descMarginBMobile: '',
                btnPaddingT: '',
                btnPaddingR: '',
                btnPaddingB: '',
                btnPaddingL: '',
                btnPaddingTTablet: '',
                btnPaddingRTablet: '',
                btnPaddingBTablet: '',
                btnPaddingLTablet: '',
                btnPaddingTMobile: '',
                btnPaddingRMobile: '',
                btnPaddingBMobile: '',
                btnPaddingLMobile: '',
                btnPaddingU: '',
                btnMarginT: '',
                btnMarginB: '',
                btnMarginTTablet: '',
                btnMarginBTablet: '',
                btnMarginTMobile: '',
                btnMarginBMobile: '',
                marginT: '',
                marginR: '',
                marginB: '',
                marginL: '',
                marginTTablet: '',
                marginRTablet: '',
                marginBTablet: '',
                marginLTablet: '',
                marginTMobile: '',
                marginRMobile: '',
                marginBMobile: '',
                marginLMobile: '',
                paddingT: '',
                paddingR: '',
                paddingB: '',
                paddingL: '',
                paddingTTablet: '',
                paddingRTablet: '',
                paddingBTablet: '',
                paddingLTablet: '',
                paddingTMobile: '',
                paddingRMobile: '',
                paddingBMobile: "",
                paddingLMobile: "",
                paddingU: "px",
            }
            return Object.assign(newAttributes, attributes)
        },
        save: props => {
            const {
                id,
                align,
                iconImage,
                iconImgUrl,
                iconRadius,
                selectedIcon,
                iconChecked,
                hoverEffect,
                iconPos,
                iconHPos,
                iconVPos,
                iconSize,
                iconColor,
                iconBackColor,
                titleChecked,
                titleText,
                titleTag,
                titleColor,
                titleFont,
                titleSize,
                titleLine,
                titleLetter,
                titleStyle,
                titleUpper,
                titleWeight,
                titleShadowBlur,
                titleShadowColor,
                titleShadowHorizontal,
                titleShadowVertical,
                titleMarginT,
                titleMarginB,
                descChecked,
                descText,
                descColor,
                descFont,
                descSize,
                descLine,
                descWeight,
                descMarginT,
                descMarginB,
                btnChecked,
                btnEffect,
                effectDir,
                btnText,
                btnTarget,
                btnLink,
                btnSize,
                btnStyle,
                btnUpper,
                btnWeight,
                btnLetter,
                btnColor,
                btnHoverColor,
                btnHoverBorder,
                btnBack,
                btnHoverBack,
                btnBorderWidth,
                btnBorderRadius,
                btnBorderColor,
                btnBorderType,
                btnPadding,
                btnPaddingU,
                btnMarginT,
                btnMarginB,
                btnShadowBlur,
                btnShadowColor,
                btnShadowHorizontal,
                btnShadowVertical,
                btnShadowPosition,
                backColor,
                imageURL,
                fixed,
                backgroundRepeat,
                backgroundPosition,
                backgroundSize,
                borderType,
                borderWidth,
                borderRadius,
                borderColor,
                marginT,
                marginR,
                marginB,
                marginL,
                paddingT,
                paddingR,
                paddingB,
                paddingL,
                paddingU,
                shadowBlur,
                shadowColor,
                shadowHorizontal,
                shadowVertical,
                shadowPosition,
                hoverShadowBlur,
                hoverShadowColor,
                hoverShadowHorizontal,
                hoverShadowVertical,
                hoverShadowPosition
            } = props.attributes;

            return (
                <div
                    id={`premium-icon-box-${id}`}
                    className={`${className} premium-icon-box-${iconPos} premium-icon-box-${iconHPos}`}
                    style={{
                        textAlign: align,
                        border: borderType,
                        borderWidth: borderWidth + "px",
                        borderRadius: borderRadius + "px",
                        borderColor: borderColor,
                        marginTop: marginT,
                        marginRight: marginR,
                        marginBottom: marginB,
                        marginLeft: marginL,
                        paddingTop: paddingT + paddingU,
                        paddingRight: paddingR + paddingU,
                        paddingBottom: paddingB + paddingU,
                        paddingLeft: paddingL + paddingU,
                        boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`,
                        backgroundColor: backColor,
                        backgroundImage: `url('${imageURL}')`,
                        backgroundRepeat: backgroundRepeat,
                        backgroundPosition: backgroundPosition,
                        backgroundSize: backgroundSize,
                        backgroundAttachment: fixed ? "fixed" : "unset"
                    }}
                >
                    {btnChecked && btnText && (
                        <style
                            dangerouslySetInnerHTML={{
                                __html: [
                                    `#premium-icon-box-${id}:hover {`,
                                    `box-shadow: ${hoverShadowHorizontal}px ${hoverShadowVertical}px ${hoverShadowBlur}px ${hoverShadowColor} ${hoverShadowPosition} !important`,
                                    "}",
                                    `#premium-icon-box-${id} .premium-icon-box__btn:hover {`,
                                    `color: ${btnHoverColor} !important;`,
                                    `border-color: ${btnHoverBorder} !important;`,
                                    "}",
                                    `#premium-icon-box-${id} .premium-button__none .premium-icon-box__btn:hover {`,
                                    `background-color: ${btnHoverBack} !important;`,
                                    "}",
                                    `#premium-icon-box-${id} .premium-button__slide .premium-button::before {`,
                                    `background-color: ${btnHoverBack} !important;`,
                                    "}"
                                ].join("\n")
                            }}
                        />
                    )}
                    {iconChecked && (
                        <div
                            className={`premium-icon-box__icon_wrap premium-icon-box__icon_${iconVPos}`}
                        >
                            {"icon" === iconImage && selectedIcon && (
                                <i
                                    className={`${selectedIcon} premium-icon-box__icon premium-icon__${hoverEffect}`}
                                    style={{
                                        color: iconColor,
                                        backgroundColor: iconBackColor,
                                        fontSize: iconSize
                                    }}
                                />
                            )}
                            {"image" === iconImage && iconImgUrl && (
                                <img
                                    className={`premium-icon-box__icon premium-icon__${hoverEffect}`}
                                    src={`${iconImgUrl}`}
                                    alt="Image Icon"
                                    style={{
                                        width: iconSize + "px",
                                        height: iconSize + "px",
                                        borderRadius: iconRadius + "px"
                                    }}
                                />
                            )}
                        </div>
                    )}
                    <div className={`premium-icon-box__content_wrap`}>
                        {titleChecked && titleText && (
                            <div
                                className={`premium-icon-box__title_wrap`}
                                style={{
                                    marginTop: titleMarginT,
                                    marginBottom: titleMarginB
                                }}
                            >
                                <RichText.Content
                                    tagName={titleTag.toLowerCase()}
                                    className={`premium-icon-box__title`}
                                    value={titleText}
                                    style={{
                                        color: titleColor,
                                        fontSize: titleSize + "px",
                                        fontFamily: titleFont,
                                        letterSpacing: titleLetter + "px",
                                        textTransform: titleUpper ? "uppercase" : "none",
                                        fontStyle: titleStyle,
                                        fontWeight: titleWeight,
                                        textShadow: `${titleShadowHorizontal}px ${titleShadowVertical}px ${titleShadowBlur}px ${titleShadowColor}`,
                                        lineHeight: titleLine + "px"
                                    }}
                                />
                            </div>
                        )}
                        {descChecked && descText && (
                            <div
                                className={`premium-icon-box__desc_wrap`}
                                style={{
                                    marginTop: descMarginT,
                                    marginBottom: descMarginB
                                }}
                            >
                                <RichText.Content
                                    tagName="p"
                                    className={`premium-icon-box__desc`}
                                    value={descText}
                                    style={{
                                        color: descColor,
                                        fontSize: descSize + "px",
                                        fontFamily: descFont,
                                        lineHeight: descLine + "px",
                                        fontWeight: descWeight
                                    }}
                                />
                            </div>
                        )}
                        {btnChecked && btnText && (
                            <div
                                className={`premium-icon-box__btn_wrap premium-button__${btnEffect} premium-button__${effectDir}`}
                                style={{
                                    marginTop: btnMarginT,
                                    marginBottom: btnMarginB
                                }}
                            >
                                <RichText.Content
                                    tagName="a"
                                    className={`premium-icon-box__btn premium-button`}
                                    href={btnLink}
                                    rel="noopener noreferrer"
                                    target={btnTarget ? "_blank" : "_self"}
                                    value={btnText}
                                    style={{
                                        color: btnColor,
                                        backgroundColor: btnBack,
                                        fontSize: btnSize + "px",
                                        letterSpacing: btnLetter + "px",
                                        textTransform: btnUpper ? "uppercase" : "none",
                                        fontStyle: btnStyle,
                                        fontWeight: btnWeight,
                                        border: btnBorderType,
                                        borderWidth: btnBorderWidth + "px",
                                        borderRadius: btnBorderRadius + "px",
                                        borderColor: btnBorderColor,
                                        padding: btnPadding + btnPaddingU,
                                        boxShadow: `${btnShadowHorizontal}px ${btnShadowVertical}px ${btnShadowBlur}px ${btnShadowColor} ${btnShadowPosition}`
                                    }}
                                />
                            </div>
                        )}
                    </div>
                </div>
            );
        }
    },
    {
        attributes: deprecated_attributes_1_7_3,

        migrate: attributes => {
            let newAttributes = {
                btnPaddingT: "",
                btnPaddingR: "",
                btnPaddingB: "",
                btnPaddingL: "",
                btnPaddingTTablet: "",
                btnPaddingRTablet: "",
                btnPaddingBTablet: "",
                btnPaddingLTablet: "",
                btnPaddingTMobile: "",
                btnPaddingRMobile: "",
                btnPaddingBMobile: "",
                btnPaddingLMobile: "",
                btnPaddingU: "",
                paddingT: "",
                paddingR: "",
                paddingB: "",
                paddingL: "",
                paddingTTablet: "",
                paddingRTablet: "",
                paddingBTablet: "",
                paddingLTablet: "",
                paddingTMobile: "",
                paddingRMobile: "",
                paddingBMobile: "",
                paddingLMobile: "",
                paddingU: ""
            }
            return Object.assign(attributes, newAttributes)
        },
        save: props => {
            const {
                block_id,
                borderIconBox,
                btnBorderIconBox,
                align,
                iconImage,
                iconImgUrl,
                iconRadius,
                selectedIcon,
                iconChecked,
                hoverEffect,
                iconPos,
                iconHPos,
                iconVPos,
                iconSize,
                iconColor,
                iconBackColor,
                titleChecked,
                titleText,
                titleTag,
                titleColor,
                titleFont,
                titleLine,
                titleLetter,
                titleStyle,
                titleUpper,
                titleWeight,
                titleShadowBlur,
                titleShadowColor,
                titleShadowHorizontal,
                titleShadowVertical,
                titleMarginT,
                titleMarginB,
                descChecked,
                descText,
                descColor,
                descFont,
                descLine,
                descWeight,
                descMarginT,
                descMarginB,
                btnChecked,
                btnEffect,
                effectDir,
                btnText,
                btnTarget,
                btnLink,
                btnStyle,
                btnUpper,
                btnWeight,
                btnLetter,
                btnColor,
                btnHoverColor,
                btnHoverBorder,
                btnBack,
                btnHoverBack,
                btnBorderWidth,
                btnBorderTop,
                btnBorderRight,
                btnBorderBottom,
                btnBorderLeft,
                borderTop,
                borderRight,
                borderBottom,
                borderLeft,
                btnBorderRadius,
                btnBorderColor,
                btnBorderType,
                btnPadding,
                btnPaddingU,
                btnMarginT,
                btnMarginB,
                btnShadowBlur,
                btnShadowColor,
                btnShadowHorizontal,
                btnShadowVertical,
                btnShadowPosition,
                backColor,
                imageURL,
                fixed,
                backgroundRepeat,
                backgroundPosition,
                backgroundSize,
                borderType,
                borderWidth,
                borderRadius,
                borderColor,
                marginT,
                marginR,
                marginB,
                marginL,
                paddingT,
                paddingR,
                paddingB,
                paddingL,
                paddingU,
                shadowBlur,
                shadowColor,
                shadowHorizontal,
                shadowVertical,
                shadowPosition,
                hoverShadowBlur,
                hoverShadowColor,
                hoverShadowHorizontal,
                hoverShadowVertical,
                hoverShadowPosition,
                iconOpacity,
                btnOpacity,
                backOpacity,
                hideDesktop,
                hideTablet,
                hideMobile
            } = props.attributes;

            return (
                <div
                    id={`premium-icon-box-${block_id}`}
                    className={`${className} premium-icon-box-${iconPos} premium-icon-box-${iconHPos} premium-icon-box-${block_id} ${hideDesktop} ${hideTablet} ${hideMobile}`}
                    style={{
                        textAlign: align,
                        borderStyle: borderType,
                        borderWidth: borderIconBox
                            ? `${borderTop}px ${borderRight}px ${borderBottom}px ${borderLeft}px`
                            : borderWidth + "px",
                        borderRadius: borderRadius + "px",
                        borderColor: borderColor,
                        marginTop: marginT,
                        marginRight: marginR,
                        marginBottom: marginB,
                        marginLeft: marginL,
                        paddingTop: paddingT + paddingU,
                        paddingRight: paddingR + paddingU,
                        paddingBottom: paddingB + paddingU,
                        paddingLeft: paddingL + paddingU,
                        boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`,
                        backgroundColor: backColor
                            ? hexToRgba(backColor, backOpacity)
                            : "transparent",
                        backgroundImage: `url('${imageURL}')`,
                        backgroundRepeat: backgroundRepeat,
                        backgroundPosition: backgroundPosition,
                        backgroundSize: backgroundSize,
                        backgroundAttachment: fixed ? "fixed" : "unset"
                    }}
                >
                    {btnChecked && btnText && (
                        <style
                            dangerouslySetInnerHTML={{
                                __html: [
                                    `#premium-icon-box-${block_id}:hover {`,
                                    `box-shadow: ${hoverShadowHorizontal}px ${hoverShadowVertical}px ${hoverShadowBlur}px ${hoverShadowColor} ${hoverShadowPosition} !important`,
                                    "}",
                                    `#premium-icon-box-${block_id} .premium-icon-box__btn:hover {`,
                                    `color: ${btnHoverColor} !important;`,
                                    `border-color: ${btnHoverBorder} !important;`,
                                    "}",
                                    `#premium-icon-box-${block_id} .premium-button__none .premium-icon-box__btn:hover {`,
                                    `background-color: ${btnHoverBack} !important;`,
                                    "}",
                                    `#premium-icon-box-${block_id} .premium-button__slide .premium-button::before {`,
                                    `background-color: ${btnHoverBack} !important;`,
                                    "}"
                                ].join("\n")
                            }}
                        />
                    )}
                    {iconChecked && (
                        <div
                            className={`premium-icon-box__icon_wrap premium-icon-box__icon_${iconVPos}`}
                        >
                            {"icon" === iconImage && selectedIcon && (
                                <i
                                    className={`${selectedIcon} premium-icon-box__icon premium-icon__${hoverEffect}`}
                                    style={{
                                        color: iconColor,
                                        backgroundColor: iconBackColor
                                            ? hexToRgba(iconBackColor, iconOpacity)
                                            : "transparent",
                                        fontSize: iconSize,
                                    }}
                                />
                            )}
                            {"image" === iconImage && iconImgUrl && (
                                <img
                                    className={`premium-icon-box__icon premium-icon__${hoverEffect}`}
                                    src={`${iconImgUrl}`}
                                    alt="Image Icon"
                                    style={{
                                        width: iconSize + "px",
                                        height: iconSize + "px",
                                        borderRadius: iconRadius + "px"
                                    }}
                                />
                            )}
                        </div>
                    )}
                    <div className={`premium-icon-box__content_wrap`}>
                        {titleChecked && titleText && (
                            <div
                                className={`premium-icon-box__title_wrap`}
                                style={{
                                    marginTop: titleMarginT,
                                    marginBottom: titleMarginB
                                }}
                            >
                                <RichText.Content
                                    tagName={titleTag.toLowerCase()}
                                    className={`premium-icon-box__title`}
                                    value={titleText}
                                    style={{
                                        color: titleColor,
                                        fontFamily: titleFont,
                                        letterSpacing: titleLetter + "px",
                                        textTransform: titleUpper ? "uppercase" : "none",
                                        fontStyle: titleStyle,
                                        fontWeight: titleWeight,
                                        textShadow: `${titleShadowHorizontal}px ${titleShadowVertical}px ${titleShadowBlur}px ${titleShadowColor}`,
                                        lineHeight: titleLine + "px"
                                    }}
                                />
                            </div>
                        )}
                        {descChecked && descText && (
                            <div
                                className={`premium-icon-box__desc_wrap`}
                                style={{
                                    marginTop: descMarginT,
                                    marginBottom: descMarginB
                                }}
                            >
                                <RichText.Content
                                    tagName="p"
                                    className={`premium-icon-box__desc`}
                                    value={descText}
                                    style={{
                                        color: descColor,
                                        fontFamily: descFont,
                                        lineHeight: descLine + "px",
                                        fontWeight: descWeight
                                    }}
                                />
                            </div>
                        )}
                        {btnChecked && btnText && (
                            <div
                                className={`premium-icon-box__btn_wrap premium-button__${btnEffect} premium-button__${effectDir}`}
                                style={{
                                    marginTop: btnMarginT,
                                    marginBottom: btnMarginB
                                }}
                            >
                                <RichText.Content
                                    tagName="a"
                                    className={`premium-icon-box__btn premium-button`}
                                    href={btnLink}
                                    rel="noopener noreferrer"
                                    target={btnTarget ? "_blank" : "_self"}
                                    value={btnText}
                                    style={{
                                        color: btnColor,
                                        backgroundColor: btnBack
                                            ? hexToRgba(btnBack, btnOpacity)
                                            : "transparent",
                                        letterSpacing: btnLetter + "px",
                                        textTransform: btnUpper ? "uppercase" : "none",
                                        fontStyle: btnStyle,
                                        fontWeight: btnWeight,
                                        borderStyle: btnBorderType,
                                        borderWidth: btnBorderIconBox
                                            ? `${btnBorderTop}px ${btnBorderRight}px ${btnBorderBottom}px ${btnBorderLeft}px`
                                            : btnBorderWidth + "px",
                                        borderRadius: btnBorderRadius + "px",
                                        borderColor: btnBorderColor,
                                        padding: btnPadding + btnPaddingU,
                                        boxShadow: `${btnShadowHorizontal}px ${btnShadowVertical}px ${btnShadowBlur}px ${btnShadowColor} ${btnShadowPosition}`
                                    }}
                                />
                            </div>
                        )}
                    </div>
                </div>
            );
        }

    },
    {
        attributes: deprecated_attributes_1_7_2,
        migrate: (attributes) => {
            let newAttributes = {
                borderLeft: "",
                borderTop: "",
                borderRight: "",
                borderBottom: "",
                btnBorderBottom: "",
                btnBorderLeft: "",
                btnBorderTop: "",
                btnBorderRight: "",
                borderIconBox: "",
                btnBorderIconBox: "",
                classMigrate: false,
                block_id: '',
                titleSizeUnit: "px",
                titleSizeTablet: '',
                titleSizeMobile: '',
                descSizeUnit: 'px',
                descSizeTablet: '',
                descSizeMobile: '',
                btnSizeUnit: 'px',
                btnSizeTablet: '',
                btnSizeMobile: '',
                btnOpacity: "",
                iconOpacity: "",
                backOpacity: "",
                hideDesktop: false,
                hideTablet: false,
                hideMobile: false
            };
            return Object.assign(attributes, newAttributes);
        },
        save: (props) => {
            const {
                id,
                align,
                iconImage,
                iconImgUrl,
                iconRadius,
                selectedIcon,
                iconChecked,
                hoverEffect,
                iconPos,
                iconHPos,
                iconVPos,
                iconSize,
                iconColor,
                iconBackColor,
                titleChecked,
                titleText,
                titleTag,
                titleColor,
                titleFont,
                titleSize,
                titleLine,
                titleLetter,
                titleStyle,
                titleUpper,
                titleWeight,
                titleShadowBlur,
                titleShadowColor,
                titleShadowHorizontal,
                titleShadowVertical,
                titleMarginT,
                titleMarginB,
                descChecked,
                descText,
                descColor,
                descFont,
                descSize,
                descLine,
                descWeight,
                descMarginT,
                descMarginB,
                btnChecked,
                btnEffect,
                effectDir,
                btnText,
                btnTarget,
                btnLink,
                btnSize,
                btnStyle,
                btnUpper,
                btnWeight,
                btnLetter,
                btnColor,
                btnHoverColor,
                btnHoverBorder,
                btnBack,
                btnHoverBack,
                btnBorderWidth,
                btnBorderRadius,
                btnBorderColor,
                btnBorderType,
                btnPadding,
                btnPaddingU,
                btnMarginT,
                btnMarginB,
                btnShadowBlur,
                btnShadowColor,
                btnShadowHorizontal,
                btnShadowVertical,
                btnShadowPosition,
                backColor,
                imageURL,
                fixed,
                backgroundRepeat,
                backgroundPosition,
                backgroundSize,
                borderType,
                borderWidth,
                borderRadius,
                borderColor,
                marginT,
                marginR,
                marginB,
                marginL,
                paddingT,
                paddingR,
                paddingB,
                paddingL,
                paddingU,
                shadowBlur,
                shadowColor,
                shadowHorizontal,
                shadowVertical,
                shadowPosition,
                hoverShadowBlur,
                hoverShadowColor,
                hoverShadowHorizontal,
                hoverShadowVertical,
                hoverShadowPosition,
            } = props.attributes;

            return (
                <div
                    id={`premium-icon-box-${id}`}
                    className={`${className} premium-icon-box-${iconPos} premium-icon-box-${iconHPos}`}
                    style={{
                        textAlign: align,
                        border: borderType,
                        borderWidth: borderWidth + "px",
                        borderRadius: borderRadius + "px",
                        borderColor: borderColor,
                        marginTop: marginT,
                        marginRight: marginR,
                        marginBottom: marginB,
                        marginLeft: marginL,
                        paddingTop: paddingT + paddingU,
                        paddingRight: paddingR + paddingU,
                        paddingBottom: paddingB + paddingU,
                        paddingLeft: paddingL + paddingU,
                        boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`,
                        backgroundColor: backColor,
                        backgroundImage: `url('${imageURL}')`,
                        backgroundRepeat: backgroundRepeat,
                        backgroundPosition: backgroundPosition,
                        backgroundSize: backgroundSize,
                        backgroundAttachment: fixed ? "fixed" : "unset",
                    }}
                >
                    {btnChecked && btnText && (
                        <style
                            dangerouslySetInnerHTML={{
                                __html: [
                                    `#premium-icon-box-${id}:hover {`,
                                    `box-shadow: ${hoverShadowHorizontal}px ${hoverShadowVertical}px ${hoverShadowBlur}px ${hoverShadowColor} ${hoverShadowPosition} !important`,
                                    "}",
                                    `#premium-icon-box-${id} .premium-icon-box__btn:hover {`,
                                    `color: ${btnHoverColor} !important;`,
                                    `border-color: ${btnHoverBorder} !important;`,
                                    "}",
                                    `#premium-icon-box-${id} .premium-button__none .premium-icon-box__btn:hover {`,
                                    `background-color: ${btnHoverBack} !important;`,
                                    "}",
                                    `#premium-icon-box-${id} .premium-button__slide .premium-button::before {`,
                                    `background-color: ${btnHoverBack} !important;`,
                                    "}",
                                ].join("\n"),
                            }}
                        />
                    )}
                    {iconChecked && (
                        <div
                            className={`premium-icon-box__icon_wrap premium-icon-box__icon_${iconVPos}`}
                        >
                            {"icon" === iconImage && selectedIcon && (
                                <i
                                    className={`${selectedIcon} premium-icon-box__icon premium-icon__${hoverEffect}`}
                                    style={{
                                        color: iconColor,
                                        backgroundColor: iconBackColor,
                                        fontSize: iconSize,
                                    }}
                                />
                            )}
                            {"image" === iconImage && iconImgUrl && (
                                <img
                                    className={`premium-icon-box__icon premium-icon__${hoverEffect}`}
                                    src={`${iconImgUrl}`}
                                    alt="Image Icon"
                                    style={{
                                        width: iconSize + "px",
                                        height: iconSize + "px",
                                        borderRadius: iconRadius + "px",
                                    }}
                                />
                            )}
                        </div>
                    )}
                    <div className={`premium-icon-box__content_wrap`}>
                        {titleChecked && titleText && (
                            <div
                                className={`premium-icon-box__title_wrap`}
                                style={{
                                    marginTop: titleMarginT,
                                    marginBottom: titleMarginB,
                                }}
                            >
                                <RichText.Content
                                    tagName={titleTag.toLowerCase()}
                                    className={`premium-icon-box__title`}
                                    value={titleText}
                                    style={{
                                        color: titleColor,
                                        fontSize: titleSize + "px",
                                        fontFamily: titleFont,
                                        letterSpacing: titleLetter + "px",
                                        textTransform: titleUpper ? "uppercase" : "none",
                                        fontStyle: titleStyle,
                                        fontWeight: titleWeight,
                                        textShadow: `${titleShadowHorizontal}px ${titleShadowVertical}px ${titleShadowBlur}px ${titleShadowColor}`,
                                        lineHeight: titleLine + "px",
                                    }}
                                />
                            </div>
                        )}
                        {descChecked && descText && (
                            <div
                                className={`premium-icon-box__desc_wrap`}
                                style={{
                                    marginTop: descMarginT,
                                    marginBottom: descMarginB,
                                }}
                            >
                                <RichText.Content
                                    tagName="p"
                                    className={`premium-icon-box__desc`}
                                    value={descText}
                                    style={{
                                        color: descColor,
                                        fontSize: descSize + "px",
                                        fontFamily: descFont,
                                        lineHeight: descLine + "px",
                                        fontWeight: descWeight,
                                    }}
                                />
                            </div>
                        )}
                        {btnChecked && btnText && (
                            <div
                                className={`premium-icon-box__btn_wrap premium-button__${btnEffect} premium-button__${effectDir}`}
                                style={{
                                    marginTop: btnMarginT,
                                    marginBottom: btnMarginB,
                                }}
                            >
                                <RichText.Content
                                    tagName="a"
                                    className={`premium-icon-box__btn premium-button`}
                                    href={btnLink}
                                    rel="noopener noreferrer"
                                    target={btnTarget ? "_blank" : "_self"}
                                    value={btnText}
                                    style={{
                                        color: btnColor,
                                        backgroundColor: btnBack,
                                        fontSize: btnSize + "px",
                                        letterSpacing: btnLetter + "px",
                                        textTransform: btnUpper ? "uppercase" : "none",
                                        fontStyle: btnStyle,
                                        fontWeight: btnWeight,
                                        border: btnBorderType,
                                        borderWidth: btnBorderWidth + "px",
                                        borderRadius: btnBorderRadius + "px",
                                        borderColor: btnBorderColor,
                                        padding: btnPadding + btnPaddingU,
                                        boxShadow: `${btnShadowHorizontal}px ${btnShadowVertical}px ${btnShadowBlur}px ${btnShadowColor} ${btnShadowPosition}`,
                                    }}
                                />
                            </div>
                        )}
                    </div>
                </div>
            );
        },
    },
    {
        attributes: deprecated_attributes_1_6_6,
        migrate: (attributes) => {
            let newAttributes = {
                iconPos: "block",
                iconHPos: "before",
                iconVPos: "center",
            };
            return Object.assign(attributes, newAttributes);
        },
        save: (props) => {
            const {
                id,
                align,
                iconImage,
                iconImgUrl,
                iconRadius,
                selectedIcon,
                iconChecked,
                hoverEffect,
                iconSize,
                iconColor,
                iconBackColor,
                titleChecked,
                titleText,
                titleTag,
                titleColor,
                titleFont,
                titleSize,
                titleLine,
                titleLetter,
                titleStyle,
                titleUpper,
                titleWeight,
                titleShadowBlur,
                titleShadowColor,
                titleShadowHorizontal,
                titleShadowVertical,
                titleMarginT,
                titleMarginB,
                descChecked,
                descText,
                descColor,
                descFont,
                descSize,
                descLine,
                descWeight,
                descMarginT,
                descMarginB,
                btnChecked,
                btnEffect,
                effectDir,
                btnText,
                btnTarget,
                btnLink,
                btnSize,
                btnStyle,
                btnUpper,
                btnWeight,
                btnLetter,
                btnColor,
                btnHoverColor,
                btnHoverBorder,
                btnBack,
                btnHoverBack,
                btnBorderWidth,
                btnBorderRadius,
                btnBorderColor,
                btnBorderType,
                btnPadding,
                btnPaddingU,
                btnMarginT,
                btnMarginB,
                btnShadowBlur,
                btnShadowColor,
                btnShadowHorizontal,
                btnShadowVertical,
                btnShadowPosition,
                backColor,
                imageURL,
                fixed,
                backgroundRepeat,
                backgroundPosition,
                backgroundSize,
                borderType,
                borderWidth,
                borderRadius,
                borderColor,
                marginT,
                marginR,
                marginB,
                marginL,
                paddingT,
                paddingR,
                paddingB,
                paddingL,
                paddingU,
                shadowBlur,
                shadowColor,
                shadowHorizontal,
                shadowVertical,
                shadowPosition,
                hoverShadowBlur,
                hoverShadowColor,
                hoverShadowHorizontal,
                hoverShadowVertical,
                hoverShadowPosition,
            } = props.attributes;

            return (
                <div
                    id={`${className}-${id}`}
                    className={`${className}`}
                    style={{
                        textAlign: align,
                        border: borderType,
                        borderWidth: borderWidth + "px",
                        borderRadius: borderRadius + "px",
                        borderColor: borderColor,
                        marginTop: marginT,
                        marginRight: marginR,
                        marginBottom: marginB,
                        marginLeft: marginL,
                        paddingTop: paddingT + paddingU,
                        paddingRight: paddingR + paddingU,
                        paddingBottom: paddingB + paddingU,
                        paddingLeft: paddingL + paddingU,
                        boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`,
                        backgroundColor: backColor,
                        backgroundImage: `url('${imageURL}')`,
                        backgroundRepeat: backgroundRepeat,
                        backgroundPosition: backgroundPosition,
                        backgroundSize: backgroundSize,
                        backgroundAttachment: fixed ? "fixed" : "unset",
                    }}
                >
                    {btnChecked && btnText && (
                        <style
                            dangerouslySetInnerHTML={{
                                __html: [
                                    `#premium-icon-box-${id}:hover {`,
                                    `box-shadow: ${hoverShadowHorizontal}px ${hoverShadowVertical}px ${hoverShadowBlur}px ${hoverShadowColor} ${hoverShadowPosition} !important`,
                                    "}",
                                    `#premium-icon-box-${id} .premium-icon-box__btn:hover {`,
                                    `color: ${btnHoverColor} !important;`,
                                    `border-color: ${btnHoverBorder} !important;`,
                                    "}",
                                    `#premium-icon-box-${id} .premium-button__none .premium-icon-box__btn:hover {`,
                                    `background-color: ${btnHoverBack} !important;`,
                                    "}",
                                    `#premium-icon-box-${id} .premium-button__slide .premium-button::before {`,
                                    `background-color: ${btnHoverBack} !important;`,
                                    "}",
                                ].join("\n"),
                            }}
                        />
                    )}
                    {iconChecked && (
                        <div className={`${className}__icon_wrap`}>
                            {"icon" === iconImage && selectedIcon && (
                                <i
                                    className={`${selectedIcon} ${className}__icon premium-icon__${hoverEffect}`}
                                    style={{
                                        color: iconColor,
                                        backgroundColor: iconBackColor,
                                        fontSize: iconSize,
                                    }}
                                />
                            )}
                            {"image" === iconImage && iconImgUrl && (
                                <img
                                    className={`${className}__icon premium-icon__${hoverEffect}`}
                                    src={`${iconImgUrl}`}
                                    alt="Image Icon"
                                    style={{
                                        width: iconSize + "px",
                                        height: iconSize + "px",
                                        borderRadius: iconRadius + "px",
                                    }}
                                />
                            )}
                        </div>
                    )}
                    {titleChecked && titleText && (
                        <div
                            className={`${className}__title_wrap`}
                            style={{
                                marginTop: titleMarginT,
                                marginBottom: titleMarginB,
                            }}
                        >
                            <RichText.Content
                                tagName={titleTag.toLowerCase()}
                                className={`${className}__title`}
                                value={titleText}
                                style={{
                                    color: titleColor,
                                    fontSize: titleSize + "px",
                                    fontFamily: titleFont,
                                    letterSpacing: titleLetter + "px",
                                    textTransform: titleUpper ? "uppercase" : "none",
                                    fontStyle: titleStyle,
                                    fontWeight: titleWeight,
                                    textShadow: `${titleShadowHorizontal}px ${titleShadowVertical}px ${titleShadowBlur}px ${titleShadowColor}`,
                                    lineHeight: titleLine + "px",
                                }}
                            />
                        </div>
                    )}
                    {descChecked && descText && (
                        <div
                            className={`${className}__desc_wrap`}
                            style={{
                                marginTop: descMarginT,
                                marginBottom: descMarginB,
                            }}
                        >
                            <RichText.Content
                                tagName="p"
                                className={`${className}__desc`}
                                value={descText}
                                style={{
                                    color: descColor,
                                    fontSize: descSize + "px",
                                    fontFamily: descFont,
                                    lineHeight: descLine + "px",
                                    fontWeight: descWeight,
                                }}
                            />
                        </div>
                    )}
                    {btnChecked && btnText && (
                        <div
                            className={`${className}__btn_wrap premium-button__${btnEffect} premium-button__${effectDir}`}
                            style={{
                                marginTop: btnMarginT,
                                marginBottom: btnMarginB,
                            }}
                        >
                            <RichText.Content
                                tagName="a"
                                className={`${className}__btn premium-button`}
                                href={btnLink}
                                rel="noopener noreferrer"
                                target={btnTarget ? "_blank" : "_self"}
                                value={btnText}
                                style={{
                                    color: btnColor,
                                    backgroundColor: btnBack,
                                    fontSize: btnSize + "px",
                                    letterSpacing: btnLetter + "px",
                                    textTransform: btnUpper ? "uppercase" : "none",
                                    fontStyle: btnStyle,
                                    fontWeight: btnWeight,
                                    border: btnBorderType,
                                    borderWidth: btnBorderWidth + "px",
                                    borderRadius: btnBorderRadius + "px",
                                    borderColor: btnBorderColor,
                                    padding: btnPadding + btnPaddingU,
                                    boxShadow: `${btnShadowHorizontal}px ${btnShadowVertical}px ${btnShadowBlur}px ${btnShadowColor} ${btnShadowPosition}`,
                                }}
                            />
                        </div>
                    )}
                </div>
            );
        },
    },
    {
        attributes: deprecated_attributes_1_5_7,
        migrate: (attributes) => {
            let newAttributes = {
                paddingU: "",
                btnPaddingU: "",
            };
            return Object.assign(attributes, newAttributes);
        },
        save: (props) => {
            const {
                id,
                align,
                iconImage,
                iconImgUrl,
                iconRadius,
                selectedIcon,
                iconChecked,
                hoverEffect,
                iconSize,
                iconColor,
                iconBackColor,
                titleChecked,
                titleText,
                titleTag,
                titleColor,
                titleFont,
                titleSize,
                titleLine,
                titleLetter,
                titleStyle,
                titleUpper,
                titleWeight,
                titleShadowBlur,
                titleShadowColor,
                titleShadowHorizontal,
                titleShadowVertical,
                titleMarginT,
                titleMarginB,
                descChecked,
                descText,
                descColor,
                descFont,
                descSize,
                descLine,
                descWeight,
                descMarginT,
                descMarginB,
                btnChecked,
                btnEffect,
                effectDir,
                btnText,
                btnTarget,
                btnLink,
                btnSize,
                btnStyle,
                btnUpper,
                btnWeight,
                btnLetter,
                btnColor,
                btnHoverColor,
                btnHoverBorder,
                btnBack,
                btnHoverBack,
                btnBorderWidth,
                btnBorderRadius,
                btnBorderColor,
                btnBorderType,
                btnPadding,
                btnMarginT,
                btnMarginB,
                btnShadowBlur,
                btnShadowColor,
                btnShadowHorizontal,
                btnShadowVertical,
                btnShadowPosition,
                backColor,
                imageURL,
                fixed,
                backgroundRepeat,
                backgroundPosition,
                backgroundSize,
                borderType,
                borderWidth,
                borderRadius,
                borderColor,
                marginT,
                marginR,
                marginB,
                marginL,
                paddingT,
                paddingR,
                paddingB,
                paddingL,
                shadowBlur,
                shadowColor,
                shadowHorizontal,
                shadowVertical,
                shadowPosition,
                hoverShadowBlur,
                hoverShadowColor,
                hoverShadowHorizontal,
                hoverShadowVertical,
                hoverShadowPosition,
            } = props.attributes;

            return (
                <div
                    id={`${className}-${id}`}
                    className={`${className}`}
                    style={{
                        textAlign: align,
                        border: borderType,
                        borderWidth: borderWidth + "px",
                        borderRadius: borderRadius + "px",
                        borderColor: borderColor,
                        marginTop: marginT,
                        marginRight: marginR,
                        marginBottom: marginB,
                        marginLeft: marginL,
                        paddingTop: paddingT,
                        paddingRight: paddingR,
                        paddingBottom: paddingB,
                        paddingLeft: paddingL,
                        boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`,
                        backgroundColor: backColor,
                        backgroundImage: `url('${imageURL}')`,
                        backgroundRepeat: backgroundRepeat,
                        backgroundPosition: backgroundPosition,
                        backgroundSize: backgroundSize,
                        backgroundAttachment: fixed ? "fixed" : "unset",
                    }}
                >
                    {btnChecked && btnText && (
                        <style
                            dangerouslySetInnerHTML={{
                                __html: [
                                    `#premium-icon-box-${id}:hover {`,
                                    `box-shadow: ${hoverShadowHorizontal}px ${hoverShadowVertical}px ${hoverShadowBlur}px ${hoverShadowColor} ${hoverShadowPosition} !important`,
                                    "}",
                                    `#premium-icon-box-${id} .premium-icon-box__btn:hover {`,
                                    `color: ${btnHoverColor} !important;`,
                                    `border-color: ${btnHoverBorder} !important;`,
                                    "}",
                                    `#premium-icon-box-${id} .premium-button__none .premium-icon-box__btn:hover {`,
                                    `background-color: ${btnHoverBack} !important;`,
                                    "}",
                                    `#premium-icon-box-${id} .premium-button__slide .premium-button::before {`,
                                    `background-color: ${btnHoverBack} !important;`,
                                    "}",
                                ].join("\n"),
                            }}
                        />
                    )}
                    {iconChecked && (
                        <div className={`${className}__icon_wrap`}>
                            {"icon" === iconImage && selectedIcon && (
                                <i
                                    className={`${selectedIcon} ${className}__icon premium-icon__${hoverEffect}`}
                                    style={{
                                        color: iconColor,
                                        backgroundColor: iconBackColor,
                                        fontSize: iconSize,
                                    }}
                                />
                            )}
                            {"image" === iconImage && iconImgUrl && (
                                <img
                                    className={`${className}__icon premium-icon__${hoverEffect}`}
                                    src={`${iconImgUrl}`}
                                    alt="Image Icon"
                                    style={{
                                        width: iconSize + "px",
                                        height: iconSize + "px",
                                        borderRadius: iconRadius + "px",
                                    }}
                                />
                            )}
                        </div>
                    )}
                    {titleChecked && titleText && (
                        <div
                            className={`${className}__title_wrap`}
                            style={{
                                marginTop: titleMarginT,
                                marginBottom: titleMarginB,
                            }}
                        >
                            <RichText.Content
                                tagName={titleTag.toLowerCase()}
                                className={`${className}__title`}
                                value={titleText}
                                style={{
                                    color: titleColor,
                                    fontSize: titleSize + "px",
                                    fontFamily: titleFont,
                                    letterSpacing: titleLetter + "px",
                                    textTransform: titleUpper ? "uppercase" : "none",
                                    fontStyle: titleStyle,
                                    fontWeight: titleWeight,
                                    textShadow: `${titleShadowHorizontal}px ${titleShadowVertical}px ${titleShadowBlur}px ${titleShadowColor}`,
                                    lineHeight: titleLine + "px",
                                }}
                            />
                        </div>
                    )}
                    {descChecked && descText && (
                        <div
                            className={`${className}__desc_wrap`}
                            style={{
                                marginTop: descMarginT,
                                marginBottom: descMarginB,
                            }}
                        >
                            <RichText.Content
                                tagName="p"
                                className={`${className}__desc`}
                                value={descText}
                                style={{
                                    color: descColor,
                                    fontSize: descSize + "px",
                                    fontFamily: descFont,
                                    lineHeight: descLine + "px",
                                    fontWeight: descWeight,
                                }}
                            />
                        </div>
                    )}
                    {btnChecked && btnText && (
                        <div
                            className={`${className}__btn_wrap premium-button__${btnEffect} premium-button__${effectDir}`}
                            style={{
                                marginTop: btnMarginT,
                                marginBottom: btnMarginB,
                            }}
                        >
                            <RichText.Content
                                tagName="a"
                                className={`${className}__btn premium-button`}
                                href={btnLink}
                                rel="noopener noreferrer"
                                target={btnTarget ? "_blank" : "_self"}
                                value={btnText}
                                style={{
                                    color: btnColor,
                                    backgroundColor: btnBack,
                                    fontSize: btnSize + "px",
                                    letterSpacing: btnLetter + "px",
                                    textTransform: btnUpper ? "uppercase" : "none",
                                    fontStyle: btnStyle,
                                    fontWeight: btnWeight,
                                    border: btnBorderType,
                                    borderWidth: btnBorderWidth + "px",
                                    borderRadius: btnBorderRadius + "px",
                                    borderColor: btnBorderColor,
                                    padding: btnPadding + "px",
                                    boxShadow: `${btnShadowHorizontal}px ${btnShadowVertical}px ${btnShadowBlur}px ${btnShadowColor} ${btnShadowPosition}`,
                                }}
                            />
                        </div>
                    )}
                </div>
            );
        },
    },
    {
        attribute: deprecated_attributes_1_5_1,
        migrate: (attributes) => {
            let newAttributes = {
                titleFont: "",
                descFont: "",
            };
            return Object.assign(attributes, newAttributes);
        },
        save: (props) => {
            const {
                id,
                align,
                iconImage,
                iconImgUrl,
                iconRadius,
                selectedIcon,
                iconChecked,
                hoverEffect,
                iconSize,
                iconColor,
                iconBackColor,
                titleChecked,
                titleText,
                titleTag,
                titleColor,
                titleSize,
                titleLine,
                titleLetter,
                titleStyle,
                titleUpper,
                titleWeight,
                titleShadowBlur,
                titleShadowColor,
                titleShadowHorizontal,
                titleShadowVertical,
                titleMarginT,
                titleMarginB,
                descChecked,
                descText,
                descColor,
                descSize,
                descLine,
                descWeight,
                descMarginT,
                descMarginB,
                btnChecked,
                btnEffect,
                effectDir,
                btnText,
                btnTarget,
                btnLink,
                btnSize,
                btnStyle,
                btnUpper,
                btnWeight,
                btnLetter,
                btnColor,
                btnHoverColor,
                btnHoverBorder,
                btnBack,
                btnHoverBack,
                btnBorderWidth,
                btnBorderRadius,
                btnBorderColor,
                btnBorderType,
                btnPadding,
                btnMarginT,
                btnMarginB,
                btnShadowBlur,
                btnShadowColor,
                btnShadowHorizontal,
                btnShadowVertical,
                btnShadowPosition,
                backColor,
                imageURL,
                fixed,
                backgroundRepeat,
                backgroundPosition,
                backgroundSize,
                borderType,
                borderWidth,
                borderRadius,
                borderColor,
                marginT,
                marginR,
                marginB,
                marginL,
                paddingT,
                paddingR,
                paddingB,
                paddingL,
                shadowBlur,
                shadowColor,
                shadowHorizontal,
                shadowVertical,
                shadowPosition,
                hoverShadowBlur,
                hoverShadowColor,
                hoverShadowHorizontal,
                hoverShadowVertical,
                hoverShadowPosition,
            } = props.attributes;

            return (
                <div
                    id={`${className}-${id}`}
                    className={`${className}`}
                    style={{
                        textAlign: align,
                        border: borderType,
                        borderWidth: borderWidth + "px",
                        borderRadius: borderRadius + "px",
                        borderColor: borderColor,
                        marginTop: marginT,
                        marginRight: marginR,
                        marginBottom: marginB,
                        marginLeft: marginL,
                        paddingTop: paddingT,
                        paddingRight: paddingR,
                        paddingBottom: paddingB,
                        paddingLeft: paddingL,
                        boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`,
                        backgroundColor: backColor,
                        backgroundImage: `url('${imageURL}')`,
                        backgroundRepeat: backgroundRepeat,
                        backgroundPosition: backgroundPosition,
                        backgroundSize: backgroundSize,
                        backgroundAttachment: fixed ? "fixed" : "unset",
                    }}
                >
                    {btnChecked && btnText && (
                        <style
                            dangerouslySetInnerHTML={{
                                __html: [
                                    `#premium-icon-box-${id}:hover {`,
                                    `box-shadow: ${hoverShadowHorizontal}px ${hoverShadowVertical}px ${hoverShadowBlur}px ${hoverShadowColor} ${hoverShadowPosition} !important`,
                                    "}",
                                    `#premium-icon-box-${id} .premium-icon-box__btn:hover {`,
                                    `color: ${btnHoverColor} !important;`,
                                    `border-color: ${btnHoverBorder} !important;`,
                                    "}",
                                    `#premium-icon-box-${id} .premium-button__none .premium-icon-box__btn:hover {`,
                                    `background-color: ${btnHoverBack} !important;`,
                                    "}",
                                    `#premium-icon-box-${id} .premium-button__slide .premium-button::before {`,
                                    `background-color: ${btnHoverBack} !important;`,
                                    "}",
                                ].join("\n"),
                            }}
                        />
                    )}
                    {iconChecked && (
                        <div className={`${className}__icon_wrap`}>
                            {"icon" === iconImage && selectedIcon && (
                                <i
                                    className={`${selectedIcon} ${className}__icon premium-icon__${hoverEffect}`}
                                    style={{
                                        color: iconColor,
                                        backgroundColor: iconBackColor,
                                        fontSize: iconSize,
                                    }}
                                />
                            )}
                            {"image" === iconImage && iconImgUrl && (
                                <img
                                    className={`${className}__icon premium-icon__${hoverEffect}`}
                                    src={`${iconImgUrl}`}
                                    alt="Image Icon"
                                    style={{
                                        width: iconSize + "px",
                                        height: iconSize + "px",
                                        borderRadius: iconRadius + "px",
                                    }}
                                />
                            )}
                        </div>
                    )}
                    {titleChecked && titleText && (
                        <div
                            className={`${className}__title_wrap`}
                            style={{
                                marginTop: titleMarginT,
                                marginBottom: titleMarginB,
                            }}
                        >
                            <RichText.Content
                                tagName={titleTag.toLowerCase()}
                                className={`${className}__title`}
                                value={titleText}
                                style={{
                                    color: titleColor,
                                    fontSize: titleSize + "px",
                                    letterSpacing: titleLetter + "px",
                                    textTransform: titleUpper ? "uppercase" : "none",
                                    fontStyle: titleStyle,
                                    fontWeight: titleWeight,
                                    textShadow: `${titleShadowHorizontal}px ${titleShadowVertical}px ${titleShadowBlur}px ${titleShadowColor}`,
                                    lineHeight: titleLine + "px",
                                }}
                            />
                        </div>
                    )}
                    {descChecked && descText && (
                        <div
                            className={`${className}__desc_wrap`}
                            style={{
                                marginTop: descMarginT,
                                marginBottom: descMarginB,
                            }}
                        >
                            <RichText.Content
                                tagName="p"
                                className={`${className}__desc`}
                                value={descText}
                                style={{
                                    color: descColor,
                                    fontSize: descSize + "px",
                                    lineHeight: descLine + "px",
                                    fontWeight: descWeight,
                                }}
                            />
                        </div>
                    )}
                    {btnChecked && btnText && (
                        <div
                            className={`${className}__btn_wrap premium-button__${btnEffect} premium-button__${effectDir}`}
                            style={{
                                marginTop: btnMarginT,
                                marginBottom: btnMarginB,
                            }}
                        >
                            <RichText.Content
                                tagName="a"
                                className={`${className}__btn premium-button`}
                                href={btnLink}
                                rel="noopener noreferrer"
                                target={btnTarget ? "_blank" : "_self"}
                                value={btnText}
                                style={{
                                    color: btnColor,
                                    backgroundColor: btnBack,
                                    fontSize: btnSize + "px",
                                    letterSpacing: btnLetter + "px",
                                    textTransform: btnUpper ? "uppercase" : "none",
                                    fontStyle: btnStyle,
                                    fontWeight: btnWeight,
                                    border: btnBorderType,
                                    borderWidth: btnBorderWidth + "px",
                                    borderRadius: btnBorderRadius + "px",
                                    borderColor: btnBorderColor,
                                    padding: btnPadding + "px",
                                    boxShadow: `${btnShadowHorizontal}px ${btnShadowVertical}px ${btnShadowBlur}px ${btnShadowColor} ${btnShadowPosition}`,
                                }}
                            />
                        </div>
                    )}
                </div>
            );
        },
    },
    {
        attributes: deprecated_attributes_1_4_9,
        migrate: (attributes) => {
            let newAttributes = {
                iconBackColor: "",
            };
            return Object.assign(attributes, newAttributes);
        },
        save: (props) => {
            const {
                id,
                align,
                iconImage,
                iconImgUrl,
                iconRadius,
                selectedIcon,
                iconChecked,
                hoverEffect,
                iconSize,
                iconColor,
                titleChecked,
                titleText,
                titleTag,
                titleColor,
                titleSize,
                titleLine,
                titleLetter,
                titleStyle,
                titleUpper,
                titleWeight,
                titleShadowBlur,
                titleShadowColor,
                titleShadowHorizontal,
                titleShadowVertical,
                titleMarginT,
                titleMarginB,
                descChecked,
                descText,
                descColor,
                descSize,
                descLine,
                descWeight,
                descMarginT,
                descMarginB,
                btnChecked,
                btnEffect,
                effectDir,
                btnText,
                btnTarget,
                btnLink,
                btnSize,
                btnStyle,
                btnUpper,
                btnWeight,
                btnLetter,
                btnColor,
                btnHoverColor,
                btnHoverBorder,
                btnBack,
                btnHoverBack,
                btnBorderWidth,
                btnBorderRadius,
                btnBorderColor,
                btnBorderType,
                btnPadding,
                btnMarginT,
                btnMarginB,
                btnShadowBlur,
                btnShadowColor,
                btnShadowHorizontal,
                btnShadowVertical,
                btnShadowPosition,
                backColor,
                imageURL,
                fixed,
                backgroundRepeat,
                backgroundPosition,
                backgroundSize,
                borderType,
                borderWidth,
                borderRadius,
                borderColor,
                marginT,
                marginR,
                marginB,
                marginL,
                paddingT,
                paddingR,
                paddingB,
                paddingL,
                shadowBlur,
                shadowColor,
                shadowHorizontal,
                shadowVertical,
                shadowPosition,
                hoverShadowBlur,
                hoverShadowColor,
                hoverShadowHorizontal,
                hoverShadowVertical,
                hoverShadowPosition,
            } = props.attributes;

            return (
                <div
                    id={`${className}-${id}`}
                    className={`${className}`}
                    style={{
                        textAlign: align,
                        border: borderType,
                        borderWidth: borderWidth + "px",
                        borderRadius: borderRadius + "px",
                        borderColor: borderColor,
                        marginTop: marginT,
                        marginRight: marginR,
                        marginBottom: marginB,
                        marginLeft: marginL,
                        paddingTop: paddingT,
                        paddingRight: paddingR,
                        paddingBottom: paddingB,
                        paddingLeft: paddingL,
                        boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`,
                        backgroundColor: backColor,
                        backgroundImage: `url('${imageURL}')`,
                        backgroundRepeat: backgroundRepeat,
                        backgroundPosition: backgroundPosition,
                        backgroundSize: backgroundSize,
                        backgroundAttachment: fixed ? "fixed" : "unset",
                    }}
                >
                    {btnChecked && btnText && (
                        <style
                            dangerouslySetInnerHTML={{
                                __html: [
                                    `#premium-icon-box-${id}:hover {`,
                                    `box-shadow: ${hoverShadowHorizontal}px ${hoverShadowVertical}px ${hoverShadowBlur}px ${hoverShadowColor} ${hoverShadowPosition} !important`,
                                    "}",
                                    `#premium-icon-box-${id} .premium-icon-box__btn:hover {`,
                                    `color: ${btnHoverColor} !important;`,
                                    `border-color: ${btnHoverBorder} !important;`,
                                    "}",
                                    `#premium-icon-box-${id} .premium-button__none .premium-icon-box__btn:hover {`,
                                    `background-color: ${btnHoverBack} !important;`,
                                    "}",
                                    `#premium-icon-box-${id} .premium-button__slide .premium-button::before {`,
                                    `background-color: ${btnHoverBack} !important;`,
                                    "}",
                                ].join("\n"),
                            }}
                        />
                    )}
                    {iconChecked && (
                        <div className={`${className}__icon_wrap`}>
                            {"icon" === iconImage && selectedIcon && (
                                <i
                                    className={`${selectedIcon} ${className}__icon premium-icon__${hoverEffect}`}
                                    style={{
                                        color: iconColor,
                                        fontSize: iconSize,
                                    }}
                                />
                            )}
                            {"image" === iconImage && iconImgUrl && (
                                <img
                                    className={`${className}__icon premium-icon__${hoverEffect}`}
                                    src={`${iconImgUrl}`}
                                    alt="Image Icon"
                                    style={{
                                        width: iconSize + "px",
                                        height: iconSize + "px",
                                        borderRadius: iconRadius + "px",
                                    }}
                                />
                            )}
                        </div>
                    )}
                    {titleChecked && titleText && (
                        <div
                            className={`${className}__title_wrap`}
                            style={{
                                marginTop: titleMarginT,
                                marginBottom: titleMarginB,
                            }}
                        >
                            <RichText.Content
                                tagName={titleTag.toLowerCase()}
                                className={`${className}__title`}
                                value={titleText}
                                style={{
                                    color: titleColor,
                                    fontSize: titleSize + "px",
                                    letterSpacing: titleLetter + "px",
                                    textTransform: titleUpper ? "uppercase" : "none",
                                    fontStyle: titleStyle,
                                    fontWeight: titleWeight,
                                    textShadow: `${titleShadowHorizontal}px ${titleShadowVertical}px ${titleShadowBlur}px ${titleShadowColor}`,
                                    lineHeight: titleLine + "px",
                                }}
                            />
                        </div>
                    )}
                    {descChecked && descText && (
                        <div
                            className={`${className}__desc_wrap`}
                            style={{
                                marginTop: descMarginT,
                                marginBottom: descMarginB,
                            }}
                        >
                            <RichText.Content
                                tagName="p"
                                className={`${className}__desc`}
                                value={descText}
                                style={{
                                    color: descColor,
                                    fontSize: descSize + "px",
                                    lineHeight: descLine + "px",
                                    fontWeight: descWeight,
                                }}
                            />
                        </div>
                    )}
                    {btnChecked && btnText && (
                        <div
                            className={`${className}__btn_wrap premium-button__${btnEffect} premium-button__${effectDir}`}
                            style={{
                                marginTop: btnMarginT,
                                marginBottom: btnMarginB,
                            }}
                        >
                            <RichText.Content
                                tagName="a"
                                className={`${className}__btn premium-button`}
                                href={btnLink}
                                target={btnTarget ? "_blank" : "_self"}
                                value={btnText}
                                style={{
                                    color: btnColor,
                                    backgroundColor: btnBack,
                                    fontSize: btnSize + "px",
                                    letterSpacing: btnLetter + "px",
                                    textTransform: btnUpper ? "uppercase" : "none",
                                    fontStyle: btnStyle,
                                    fontWeight: btnWeight,
                                    border: btnBorderType,
                                    borderWidth: btnBorderWidth + "px",
                                    borderRadius: btnBorderRadius + "px",
                                    borderColor: btnBorderColor,
                                    padding: btnPadding + "px",
                                    boxShadow: `${btnShadowHorizontal}px ${btnShadowVertical}px ${btnShadowBlur}px ${btnShadowColor} ${btnShadowPosition}`,
                                }}
                            />
                        </div>
                    )}
                </div>
            );
        },
    },
    {
        attributes: deprecated_attributes_1_3_4,
        migrate: (attributes) => {
            let newAttributes = {
                hoverShadowColor: "",
                hoverShadowBlur: "",
                hoverShadowHorizontal: "",
                hoverShadowVertical: "",
                hoverShadowPosition: "",
            };
            return Object.assign(attributes, newAttributes);
        },
        save: (props) => {
            const {
                id,
                align,
                iconImage,
                iconImgUrl,
                iconRadius,
                selectedIcon,
                iconChecked,
                hoverEffect,
                iconSize,
                iconColor,
                titleChecked,
                titleText,
                titleTag,
                titleColor,
                titleSize,
                titleLine,
                titleLetter,
                titleStyle,
                titleUpper,
                titleWeight,
                titleShadowBlur,
                titleShadowColor,
                titleShadowHorizontal,
                titleShadowVertical,
                titleMarginT,
                titleMarginB,
                descChecked,
                descText,
                descColor,
                descSize,
                descLine,
                descWeight,
                descMarginT,
                descMarginB,
                btnChecked,
                btnEffect,
                effectDir,
                btnText,
                btnTarget,
                btnLink,
                btnSize,
                btnStyle,
                btnUpper,
                btnWeight,
                btnLetter,
                btnColor,
                btnHoverColor,
                btnHoverBorder,
                btnBack,
                btnHoverBack,
                btnBorderWidth,
                btnBorderRadius,
                btnBorderColor,
                btnBorderType,
                btnPadding,
                btnMarginT,
                btnMarginB,
                btnShadowBlur,
                btnShadowColor,
                btnShadowHorizontal,
                btnShadowVertical,
                btnShadowPosition,
                backColor,
                imageURL,
                fixed,
                backgroundRepeat,
                backgroundPosition,
                backgroundSize,
                borderType,
                borderWidth,
                borderRadius,
                borderColor,
                marginT,
                marginR,
                marginB,
                marginL,
                paddingT,
                paddingR,
                paddingB,
                paddingL,
                shadowBlur,
                shadowColor,
                shadowHorizontal,
                shadowVertical,
                shadowPosition,
            } = props.attributes;

            return (
                <div
                    id={`${className}-${id}`}
                    className={`${className}`}
                    style={{
                        textAlign: align,
                        border: borderType,
                        borderWidth: borderWidth + "px",
                        borderRadius: borderRadius + "px",
                        borderColor: borderColor,
                        marginTop: marginT,
                        marginRight: marginR,
                        marginBottom: marginB,
                        marginLeft: marginL,
                        paddingTop: paddingT,
                        paddingRight: paddingR,
                        paddingBottom: paddingB,
                        paddingLeft: paddingL,
                        boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`,
                        backgroundColor: backColor,
                        backgroundImage: `url('${imageURL}')`,
                        backgroundRepeat: backgroundRepeat,
                        backgroundPosition: backgroundPosition,
                        backgroundSize: backgroundSize,
                        backgroundAttachment: fixed ? "fixed" : "unset",
                    }}
                >
                    {btnChecked && btnText && (
                        <style
                            dangerouslySetInnerHTML={{
                                __html: [
                                    `#premium-icon-box-${id} .premium-icon-box__btn:hover {`,
                                    `color: ${btnHoverColor} !important;`,
                                    `border-color: ${btnHoverBorder} !important;`,
                                    "}",
                                    `#premium-icon-box-${id} .premium-button__none .premium-icon-box__btn:hover {`,
                                    `background-color: ${btnHoverBack} !important;`,
                                    "}",
                                    `#premium-icon-box-${id} .premium-button__slide .premium-button::before {`,
                                    `background-color: ${btnHoverBack} !important;`,
                                    "}",
                                ].join("\n"),
                            }}
                        />
                    )}
                    {iconChecked && (
                        <div className={`${className}__icon_wrap`}>
                            {"icon" === iconImage && selectedIcon && (
                                <i
                                    className={`${selectedIcon} ${className}__icon premium-icon__${hoverEffect}`}
                                    style={{
                                        color: iconColor,
                                        fontSize: iconSize,
                                    }}
                                />
                            )}
                            {"image" === iconImage && iconImgUrl && (
                                <img
                                    className={`${className}__icon premium-icon__${hoverEffect}`}
                                    src={`${iconImgUrl}`}
                                    alt="Image Icon"
                                    style={{
                                        width: iconSize + "px",
                                        height: iconSize + "px",
                                        borderRadius: iconRadius + "px",
                                    }}
                                />
                            )}
                        </div>
                    )}
                    {titleChecked && titleText && (
                        <div
                            className={`${className}__title_wrap`}
                            style={{
                                marginTop: titleMarginT,
                                marginBottom: titleMarginB,
                            }}
                        >
                            <RichText.Content
                                tagName={titleTag.toLowerCase()}
                                className={`${className}__title`}
                                value={titleText}
                                style={{
                                    color: titleColor,
                                    fontSize: titleSize + "px",
                                    letterSpacing: titleLetter + "px",
                                    textTransform: titleUpper ? "uppercase" : "none",
                                    fontStyle: titleStyle,
                                    fontWeight: titleWeight,
                                    textShadow: `${titleShadowHorizontal}px ${titleShadowVertical}px ${titleShadowBlur}px ${titleShadowColor}`,
                                    lineHeight: titleLine + "px",
                                }}
                            />
                        </div>
                    )}
                    {descChecked && descText && (
                        <div
                            className={`${className}__desc_wrap`}
                            style={{
                                marginTop: descMarginT,
                                marginBottom: descMarginB,
                            }}
                        >
                            <RichText.Content
                                tagName="p"
                                className={`${className}__desc`}
                                value={descText}
                                style={{
                                    color: descColor,
                                    fontSize: descSize + "px",
                                    lineHeight: descLine + "px",
                                    fontWeight: descWeight,
                                }}
                            />
                        </div>
                    )}
                    {btnChecked && btnText && (
                        <div
                            className={`${className}__btn_wrap premium-button__${btnEffect} premium-button__${effectDir}`}
                            style={{
                                marginTop: btnMarginT,
                                marginBottom: btnMarginB,
                            }}
                        >
                            <RichText.Content
                                tagName="a"
                                className={`${className}__btn premium-button`}
                                href={btnLink}
                                target={btnTarget ? "_blank" : "_self"}
                                value={btnText}
                                style={{
                                    color: btnColor,
                                    backgroundColor: btnBack,
                                    fontSize: btnSize + "px",
                                    letterSpacing: btnLetter + "px",
                                    textTransform: btnUpper ? "uppercase" : "none",
                                    fontStyle: btnStyle,
                                    fontWeight: btnWeight,
                                    border: btnBorderType,
                                    borderWidth: btnBorderWidth + "px",
                                    borderRadius: btnBorderRadius + "px",
                                    borderColor: btnBorderColor,
                                    padding: btnPadding + "px",
                                    boxShadow: `${btnShadowHorizontal}px ${btnShadowVertical}px ${btnShadowBlur}px ${btnShadowColor} ${btnShadowPosition}`,
                                }}
                            />
                        </div>
                    )}
                </div>
            );
        },
    },
    {
        attributes: deprecated_attributes_1_3_0,
        migrate: (attributes) => {
            return {
                iconSize: attributes.iconSize,
            };
        },
        save: (props) => {
            const {
                id,
                align,
                iconType,
                iconImage,
                iconImgUrl,
                iconRadius,
                selectedIcon,
                iconChecked,
                hoverEffect,
                iconSize,
                iconColor,
                titleChecked,
                titleText,
                titleTag,
                titleColor,
                titleSize,
                titleLine,
                titleLetter,
                titleStyle,
                titleUpper,
                titleWeight,
                titleShadowBlur,
                titleShadowColor,
                titleShadowHorizontal,
                titleShadowVertical,
                titleMarginT,
                titleMarginB,
                descChecked,
                descText,
                descColor,
                descSize,
                descLine,
                descWeight,
                descMarginT,
                descMarginB,
                btnChecked,
                btnText,
                btnTarget,
                btnLink,
                btnSize,
                btnStyle,
                btnUpper,
                btnWeight,
                btnLetter,
                btnColor,
                btnHoverColor,
                btnHoverBorder,
                btnBack,
                btnHoverBack,
                btnBorderWidth,
                btnBorderRadius,
                btnBorderColor,
                btnBorderType,
                btnPadding,
                btnMarginT,
                btnMarginB,
                btnShadowBlur,
                btnShadowColor,
                btnShadowHorizontal,
                btnShadowVertical,
                btnShadowPosition,
                backColor,
                imageURL,
                fixed,
                backgroundRepeat,
                backgroundPosition,
                backgroundSize,
                borderType,
                borderWidth,
                borderRadius,
                borderColor,
                marginT,
                marginR,
                marginB,
                marginL,
                paddingT,
                paddingR,
                paddingB,
                paddingL,
                shadowBlur,
                shadowColor,
                shadowHorizontal,
                shadowVertical,
                shadowPosition,
            } = props.attributes;

            return (
                <div
                    id={`${className}-${id}`}
                    className={`${className}`}
                    style={{
                        textAlign: align,
                        border: borderType,
                        borderWidth: borderWidth + "px",
                        borderRadius: borderRadius + "px",
                        borderColor: borderColor,
                        marginTop: marginT,
                        marginRight: marginR,
                        marginBottom: marginB,
                        marginLeft: marginL,
                        paddingTop: paddingT,
                        paddingRight: paddingR,
                        paddingBottom: paddingB,
                        paddingLeft: paddingL,
                        boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`,
                        backgroundColor: backColor,
                        backgroundImage: `url('${imageURL}')`,
                        backgroundRepeat: backgroundRepeat,
                        backgroundPosition: backgroundPosition,
                        backgroundSize: backgroundSize,
                        backgroundAttachment: fixed ? "fixed" : "unset",
                    }}
                >
                    {btnChecked && btnText && (
                        <style
                            dangerouslySetInnerHTML={{
                                __html: [
                                    `#premium-icon-box-${id} .premium-icon-box__btn:hover {`,
                                    `color: ${btnHoverColor} !important;`,
                                    `background-color: ${btnHoverBack} !important;`,
                                    `border-color: ${btnHoverBorder} !important;`,
                                    "}",
                                ].join("\n"),
                            }}
                        />
                    )}
                    {iconChecked && (
                        <div className={`${className}__icon_wrap`}>
                            {"icon" === iconImage && selectedIcon && (
                                <i
                                    className={`${selectedIcon} ${className}__icon premium-icon__${hoverEffect}`}
                                    style={{
                                        color: iconColor,
                                        fontSize: iconSize,
                                    }}
                                />
                            )}
                            {"image" === iconImage && iconImgUrl && (
                                <img
                                    className={`${className}__icon premium-icon__${hoverEffect}`}
                                    src={`${iconImgUrl}`}
                                    alt="Image Icon"
                                    style={{
                                        width: iconSize + "px",
                                        height: iconSize + "px",
                                        borderRadius: iconRadius + "px",
                                    }}
                                />
                            )}
                        </div>
                    )}
                    {titleChecked && titleText && (
                        <div
                            className={`${className}__title_wrap`}
                            style={{
                                marginTop: titleMarginT,
                                marginBottom: titleMarginB,
                            }}
                        >
                            <RichText.Content
                                tagName={titleTag.toLowerCase()}
                                className={`${className}__title`}
                                value={titleText}
                                style={{
                                    color: titleColor,
                                    fontSize: titleSize + "px",
                                    letterSpacing: titleLetter + "px",
                                    textTransform: titleUpper ? "uppercase" : "none",
                                    fontStyle: titleStyle,
                                    fontWeight: titleWeight,
                                    textShadow: `${titleShadowHorizontal}px ${titleShadowVertical}px ${titleShadowBlur}px ${titleShadowColor}`,
                                    lineHeight: titleLine + "px",
                                }}
                            />
                        </div>
                    )}
                    {descChecked && descText && (
                        <div
                            className={`${className}__desc_wrap`}
                            style={{
                                marginTop: descMarginT,
                                marginBottom: descMarginB,
                            }}
                        >
                            <RichText.Content
                                tagName="p"
                                className={`${className}__desc`}
                                value={descText}
                                style={{
                                    color: descColor,
                                    fontSize: descSize + "px",
                                    lineHeight: descLine + "px",
                                    fontWeight: descWeight,
                                }}
                            />
                        </div>
                    )}
                    {btnChecked && btnText && (
                        <div
                            className={`${className}__btn_wrap`}
                            style={{
                                marginTop: btnMarginT,
                                marginBottom: btnMarginB,
                            }}
                        >
                            <RichText.Content
                                tagName="a"
                                className={`${className}__btn`}
                                href={btnLink}
                                target={btnTarget ? "_blank" : "_self"}
                                value={btnText}
                                style={{
                                    color: btnColor,
                                    backgroundColor: btnBack,
                                    fontSize: btnSize + "px",
                                    letterSpacing: btnLetter + "px",
                                    textTransform: btnUpper ? "uppercase" : "none",
                                    fontStyle: btnStyle,
                                    fontWeight: btnWeight,
                                    border: btnBorderType,
                                    borderWidth: btnBorderWidth + "px",
                                    borderRadius: btnBorderRadius + "px",
                                    borderColor: btnBorderColor,
                                    padding: btnPadding + "px",
                                    boxShadow: `${btnShadowHorizontal}px ${btnShadowVertical}px ${btnShadowBlur}px ${btnShadowColor} ${btnShadowPosition}`,
                                }}
                            />
                        </div>
                    )}
                </div>
            );
        },
    },
];

export default deprecatedContent;