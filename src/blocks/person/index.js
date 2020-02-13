import { person } from "../../../assets/js/settings";

import save from "./save";
import edit from "./edit";
import PbgIcon from "../icons";

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;

const personAttrs = {
    personSize: {
        type: "string",
        default: "md"
    },
    personAlign: {
        type: "string",
        default: "center"
    },
    personImgId: {
        type: "string"
    },
    imgSize: {
        type: "number"
    },
    imgBorder: {
        type: "number",
        default: "1"
    },
    imgBorderColor: {
        type: "string"
    },
    nameColor: {
        type: "string",
        default: "rgb(110, 193, 228)"
    },
    nameSize: {
        type: "number",
        default: 20
    },
    nameLetter: {
        type: "number"
    },
    titleColor: {
        type: "string"
    },
    titleSize: {
        type: "number",
        default: 20
    },
    titleWeight: {
        type: "number"
    },
    titleTag: {
        type: "string",
        default: "p"
    },
    titleLetter: {
        type: "number"
    },
    descColor: {
        type: "string"
    },
    descSize: {
        type: "number",
        default: 20
    },
    descWeight: {
        type: "number"
    },
    descLetter: {
        type: "number"
    },
    descStyle: {
        type: "string"
    },
    descUpper: {
        type: "boolean"
    },
    descLine: {
        type: "number"
    },
    descshadowColor: {
        type: "string"
    },
    descshadowBlur: {
        type: "number",
        default: "0"
    },
    descshadowHorizontal: {
        type: "number",
        default: "0"
    },
    descshadowVertical: {
        type: "number",
        default: "0"
    },
    socialIconSize: {
        type: "number",
        default: 20
    },
    iconSizeUnit: {
        type: "string",
        default: "px"
    },
    socialIconColor: {
        type: "string",
    },
    socialIconHoverColor: {
        type: "string"
    },
    socialIconBackgroundColor: {
        type: "string",
    },
    defaultIconColor: {
        type: "boolean",
        default: false
    },
    borderTypeIcon: {
        type: "string",
        default: "none"
    },
    borderWidthIcon: {
        type: "number",
        default: "1"
    },
    borderRadiusIcon: {
        type: "number",
        default: "0"
    },
    borderColorIcon: {
        type: "string"
    },
    iconMarginT: {
        type: "number",
        default: "1"
    },
    iconMarginB: {
        type: "number",
        default: "1"
    },
    effect: {
        type: "string",
        default: "none"
    },
    effectDir: {
        type: "string",
        default: "top"
    },
    descColor: {
        type: "string",
        default: "#000"
    },
    multiPersonChecked: {
        type: "number",
        default: 1
    },
    nameStyle: {
        type: "string"
    },
    nameUpper: {
        type: "boolean"
    },
    titleStyle: {
        type: "string"
    },
    titleUpper: {
        type: "boolean"
    },
    nameWeight: {
        type: "number",
        default: 500
    },
    nameLine: {
        type: "number"
    },
    titleLine: {
        type: "number"
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
    borderHoverColor: {
        type: "string"
    },
    nameshadowColor: {
        type: "string"
    },
    nameshadowBlur: {
        type: "number",
        default: "0"
    },
    nameshadowHorizontal: {
        type: "number",
        default: "0"
    },
    nameshadowVertical: {
        type: "number",
        default: "0"
    },
    titleshadowColor: {
        type: "string"
    },
    titleshadowBlur: {
        type: "number",
        default: "0"
    },
    titleshadowHorizontal: {
        type: "number",
        default: "0"
    },
    titleshadowVertical: {
        type: "number",
        default: "0"
    },
    personShadowPosition: {
        type: "string",
        default: ""
    },
    id: {
        type: "string"
    },
    hoverEffectPerson: {
        type: "string",
        default: "none"
    },
    selectedSocialMediaIcon: {
        type: "string",
    },
    effectPersonStyle: {
        type: "string",
        default: "effect1"
    },
    rowPerson: {
        type: "string",
        default: "column1"
    },
    multiPersonContent: {
        type: "array",
        default: [
            {
                id: 1,
                personImgUrl: "",
                name: "Merna Hanna",
                title: "Senior Developer",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nulla non metus auctor fringilla",
                socialIcon: false,
                items: [
                    { label: 'facebook', link: false, value:"#", changeinput: "#"},
                    { label: 'twitter', link: false, value:"#", changeinput: "#" },
                    { label: 'instagram', link: false, value:"#", changeinput: "#" },
                    { label: 'youtube', link: false, value:"#", changeinput: "#" }
                ],
                blur: "0",
                bright: "100",
                contrast: "100",
                saturation: "100",
                hue: "0",
                link: false
            }
        ]
    },
    socialIconPadding: {
        type: "number"
    },
    socialIconPaddingU: {
        type: "number"
    }
};

registerBlockType("premium/person", {
    title: __("person"),
    icon: <PbgIcon icon="button" />,
    category: "premium-blocks",
    attributes: personAttrs,
    supports: {
        inserter: person
    },
    edit: edit,
    save: save
});
