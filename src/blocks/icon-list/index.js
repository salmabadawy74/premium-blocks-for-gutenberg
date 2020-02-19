import { iconList } from "../../../assets/js/settings";

import save from "./save";
import edit from "./edit";
import PbgIcon from "../icons";

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;

const iconListAttrs = {
    id: {
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
        default: [
            {
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
                icon_border_color: "",
                icon_border_hover_color: "",
                link: "#",
                target: false,
                disableLink: true,
            }
        ],
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
    size: {
        type: "number",
        default: 16
    },
    titleSize: {
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
        default: 100
    },
    borderColor: {
        type: "string"
    },
    iconSpacing: {
        type: "number",
        default: 10
    },
    titlePadding: {
        type: "number",
        default: 10
    },
    itemMarginL: {
        type: "number",
        default: "1"
    },
    itemMarginR: {
        type: "number",
        default: "1"
    },
    itemMarginT: {
        type: "number",
        default: "1"
    },
    itemMarginB: {
        type: "number",
        default: "1"
    },
};

registerBlockType("premium/icon-list", {
    title: __("Icon List"),
    icon: <PbgIcon icon="icon-list" />,
    category: "premium-blocks",
    attributes: iconListAttrs,
    supports: {
        inserter: iconList
    },
    edit: edit,
    save: save
});
