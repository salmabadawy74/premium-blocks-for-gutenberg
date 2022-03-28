import {
    bulletList
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

const bulletListAttrs = {
    block_id: {
        type: "string"
    },
    align: {
        type: "string",
        default: "left"
    },
    repeaterBulletList: {
        type: "array",
        default: [{
            id: 1,
            label: "Title #" + 1,
            image_icon: "icon",
            icon: "fa fa-arrow-circle-right",
            image: "",
            icon_color: "#3a3a3a",
            label_color: "",
            icon_hover_color: "",
            label_hover_color: "",
            icon_bg_color: "",
            icon_bg_hover_color: "",
            item_bg_color: "",
            item_bg_hover_color: "",
            link: "#",
            target: false,
            disableLink: false,
            showContent: false,
            showBulletIcon: true,
            linkTarget: false
        }],
    },
    bulletIconStyles: {
        type: "array",
        default: [{
            bulletListfontSize: 20,
            bulletListfontSizeType: "px",
            bulletListfontSizeMobile: 20,
            bulletListfontSizeTablet: 20,
            bulletIconHoverColor: '',
            bulletIconColor: "#3a3a3a",
            bulletIconBackgroundColor: '',
            bulletIconHoverBackgroundColor: '',
            bulletIconborderType: "none",
            bulletIconborderRadius: 0,
            bulletIconborderColor: '',
        }],
    },
    bulletIconBorderWidth: {
        type: "number",
        default: "1"
    },
    bulletIconBorderTop: {
        type: "number"
    },
    bulletIconBorderRight: {
        type: "number"
    },
    bulletIconBorderBottom: {
        type: "number"
    },
    bulletIconBorderLeft: {
        type: "number"
    },
    bulletIconBorderUpdated: {
        type: "boolean",
        default: false
    },
    bulletIconmarginType: {
        type: "string",
        default: "px"
    },
    bulletIconmarginT: {
        type: "number"
    },
    bulletIconmarginR: {
        type: "number"
    },
    bulletIconmarginB: {
        type: "number"
    },
    bulletIconmarginL: {
        type: "number"
    },
    bulletIconmarginTTablet: {
        type: "number"
    },
    bulletIconmarginRTablet: {
        type: "number"
    },
    bulletIconmarginBTablet: {
        type: "number"
    },
    bulletIconmarginLTablet: {
        type: "number"
    },
    bulletIconmarginTMobile: {
        type: "number"
    },
    bulletIconmarginRMobile: {
        type: "number"
    },
    bulletIconmarginBMobile: {
        type: "number"
    },
    bulletIconmarginLMobile: {
        type: "number"
    },
    bulletIconpaddingUnit: {
        type: "string",
        default: "px"
    },
    bulletIconpaddingTop: {
        type: "number"
    },
    bulletIconpaddingRight: {
        type: "number"
    },
    bulletIconpaddingBottom: {
        type: "number"
    },
    bulletIconpaddingLeft: {
        type: "number"
    },
    bulletIconpaddingTTablet: {
        type: "number"
    },
    bulletIconpaddingRTablet: {
        type: "number"
    },
    bulletIconpaddingBTablet: {
        type: "number"
    },
    bulletIconpaddingLTablet: {
        type: "number"
    },
    bulletIconpaddingTMobile: {
        type: "number"
    },
    bulletIconpaddingRMobile: {
        type: "number"
    },
    bulletIconpaddingBMobile: {
        type: "number"
    },
    bulletIconpaddingLMobile: {
        type: "number"
    },
    titleStyles: {
        type: "array",
        default: [{
            titleLetter: 0,
            titleStyle: '',
            titleUpper: false,
            titleWeight: 500,
            titleLine: 0,
            titleSize: 20,
            titlefontSizeType: "px",
            titlefontSizeMobile: 20,
            titlefontSizeTablet: 20,
            titleFontFamily: __('Default', 'premium-blocks-for-gutenberg'),
            titleColor: "",
            titleHoverColor: "",
            titleshadowColor: '',
            titleshadowBlur: 0,
            titleshadowHorizontal: 0,
            titleshadowVertical: 0,
        }],
    },
    titlemarginType: {
        type: "string",
        default: "px"
    },
    titlemarginT: {
        type: "number"
    },
    titlemarginR: {
        type: "number"
    },
    titlemarginB: {
        type: "number"
    },
    titlemarginL: {
        type: "number"
    },
    titlemarginTTablet: {
        type: "number"
    },
    titlemarginRTablet: {
        type: "number"
    },
    titlemarginBTablet: {
        type: "number"
    },
    titlemarginLTablet: {
        type: "number"
    },
    titlemarginTMobile: {
        type: "number"
    },
    titlemarginRMobile: {
        type: "number"
    },
    titlemarginBMobile: {
        type: "number"
    },
    titlemarginLMobile: {
        type: "number"
    },
    generalStyles: {
        type: "array",
        default: [{
            generalBackgroundColor: "",
            generalHoverBackgroundColor: '',
            generalborderType: "none",
            generalborderRadius: 0,
            generalborderColor: '',
            generalShadowColor: '',
            generalShadowBlur: 0,
            generalShadowHorizontal: 0,
            generalShadowVertical: 0,
            generalShadowPosition: '',
            generalHoverShadowColor: '',
            generalHoverShadowBlur: '',
            generalHoverShadowHorizontal: '',
            generalHoverShadowVertical: '',
            generalHoverShadowPosition: '',
        }],
    },
    generalBorderWidth: {
        type: "number",
        default: "1"
    },
    generalBorderTop: {
        type: "number"
    },
    generalBorderRight: {
        type: "number"
    },
    generalBorderBottom: {
        type: "number"
    },
    generalBorderLeft: {
        type: "number"
    },
    generalBorderUpdated: {
        type: "boolean",
        default: false
    },
    generalmarginType: {
        type: "string",
        default: "px"
    },
    generalmarginT: {
        type: "number"
    },
    generalmarginR: {
        type: "number"
    },
    generalmarginB: {
        type: "number"
    },
    generalmarginL: {
        type: "number"
    },
    generalmarginTTablet: {
        type: "number"
    },
    generalmarginRTablet: {
        type: "number"
    },
    generalmarginBTablet: {
        type: "number"
    },
    generalmarginLTablet: {
        type: "number"
    },
    generalmarginTMobile: {
        type: "number"
    },
    generalmarginRMobile: {
        type: "number"
    },
    generalmarginBMobile: {
        type: "number"
    },
    generalmarginLMobile: {
        type: "number"
    },
    generalpaddingUnit: {
        type: "string",
        default: "px"
    },
    generalpaddingTop: {
        type: "number"
    },
    generalpaddingRight: {
        type: "number"
    },
    generalpaddingBottom: {
        type: "number"
    },
    generalpaddingLeft: {
        type: "number"
    },
    generalpaddingTTablet: {
        type: "number"
    },
    generalpaddingRTablet: {
        type: "number"
    },
    generalpaddingBTablet: {
        type: "number"
    },
    generalpaddingLTablet: {
        type: "number"
    },
    generalpaddingTMobile: {
        type: "number"
    },
    generalpaddingRMobile: {
        type: "number"
    },
    generalpaddingBMobile: {
        type: "number"
    },
    generalpaddingLMobile: {
        type: "number"
    },
    classMigrate: {
        type: "boolean",
        default: false
    },
    layoutPos: {
        type: "string",
        default: "block"
    },
    iconPosition: {
        type: "string",
        default: "left"
    },
    bulletAlign: {
        type: "string",
        default: "center"
    },
    titleFont: {
        type: "string"
    }
};

registerBlockType("premium/bullet-list", {
    title: __("Bullet List"),
    icon: < PbgIcon icon="bullet-list" />,
    category: "premium-blocks",
    attributes: bulletListAttrs,
    supports: {
        inserter: bulletList
    },
    edit: edit,
    save: save
});