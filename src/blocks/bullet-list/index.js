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
    multiTitleCount: {
        type: "number",
        default: 1
    },
    icons: {
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
        }],
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
            // link: "#",
            target: false,
            disableLink: false,
            showContent: false,
            showBulletIcon: true
        }],
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
    linkTarget: {
        type: "boolean",
        default: false
    },
    sizeType: {
        type: "string",
        default: "px"
    },
    size: {
        type: "number",
        default: 20
    },
    sizeMobile: {
        type: "number",
        default: 20
    },
    sizeTablet: {
        type: "number",
        default: 20
    },
    fontSize: {
        type: "number",
        default: 20
    },
    fontSizeType: {
        type: "string",
        default: "px"
    },
    fontSizeMobile: {
        type: "number",
        default: 20
    },
    fontSizeTablet: {
        type: "number",
        default: 20
    },
    titleLetter: {
        type: "number"
    },
    titleStyle: {
        type: "string"
    },
    titleUpper: {
        type: "string"
    },
    titleWeight: {
        type: "number",
        default: 500
    },
    titleFont: {
        type: "string"
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
        type: "number",
        default: 0
    },
    borderColor: {
        type: "string"
    },
    iconSpacing: {
        type: "number",
        default: 10
    },
    iconSpacingMobile: {
        type: "number",
        default: 10
    },
    iconSpacingTablet: {
        type: "number",
        default: 10
    },
    iconSpacingType: {
        type: "string",
        default: "px"
    },
    titlePadding: {
        type: "number",
        default: 10
    },
    titlePaddingMobile: {
        type: "number",
        default: 10
    },
    titlePaddingTablet: {
        type: "number",
        default: 10
    },
    titlePaddingType: {
        type: "string",
        default: "px"
    },
    iconPaddingType: {
        type: "string",
        default: "px"
    },
    iconPadding: {
        type: "number",
        default: 0
    },
    iconPaddingMobile: {
        type: "number",
        default: 0
    },
    iconPaddingTablet: {
        type: "number",
        default: 0
    },
    marginTop: {
        type: "number",
        default: 0
    },
    marginTopType: {
        type: "string",
        default: "px"
    },
    marginTopMobile: {
        type: "number",
        default: 0
    },
    marginTopTablet: {
        type: "number",
        default: 0
    },
    marginRight: {
        type: "number",
        default: 0
    },
    marginRightType: {
        type: "string",
        default: "px"
    },
    marginRightMobile: {
        type: "number",
        default: 0
    },
    marginRightTablet: {
        type: "number",
        default: 0
    },
    marginBottom: {
        type: "number",
        default: 0
    },
    marginBottomType: {
        type: "string",
        default: "px"
    },
    marginBottomMobile: {
        type: "number",
        default: 0
    },
    marginBottomTablet: {
        type: "number",
        default: 0
    },
    marginLeft: {
        type: "number",
        default: 0
    },
    marginLeftType: {
        type: "string",
        default: "px"
    },
    marginLeftMobile: {
        type: "number",
        default: 0
    },
    marginLeftTablet: {
        type: "number",
        default: 0
    },
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