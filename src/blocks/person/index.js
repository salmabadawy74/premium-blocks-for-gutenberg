import { person } from "../../../assets/js/settings";

import save from "./save";
import edit from "./edit";
import PbgIcon from "../icons";

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;

const personAttrs = {
    personText: {
        type: "string",
        default: __("Premium person")
    },
    newpersonText: {
        type: "string",
        default: __("New person")
    },
    personSize: {
        type: "string",
        default: "md"
    },
    personAlign: {
        type: "string",
        default: "center"
    },
    personLink: {
        type: "string",
        source: "attribute",
        attribute: "href",
        selector: ".premium-person"
    },
    personTarget: {
        type: "boolean",
        default: false
    },
    personImgId: {
        type: "string"
    },
    personImgUrl: {
        type: "string"
    },
    imgRadius: {
        type: "string",
        default: "50%"
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
    priceBack: {
        type: "string"
    },
    priceMarginT: {
        type: "number"
    },
    priceMarginB: {
        type: "number",
        default: 10
    },
    pricePadding: {
        type: "number"
    },
    name: {
        type: "string",
        default: "Merna Hanna"
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
    title: {
        type: "string",
        default: "Senior Developer"
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
    DescText: {
        type: "string",
        default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nulla non metus auctor fringilla"
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
    descHoverColor: {
        type: "string"
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
    socialIcon: {
        type: "boolean",
        default: false
    },
    facebook: {
        type: "string",
        default: "dashicons dashicons-facebook"
    },
    twitter: {
        type: "string",
        default: "dashicons dashicons-twitter"
    },
    instagram: {
        type: "string",
        default: "fa fa-instagram"
    },
    youtube: {
        type: "string",
        default: "fa fa-youtube-play"
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
        type: "string"
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
    blur: {
        type: "number",
        default: "0"
    },
    bright: {
        type: "number",
        default: "100"
    },
    contrast: {
        type: "number",
        default: "100"
    },
    saturation: {
        type: "number",
        default: "100"
    },
    hue: {
        type: "number",
        default: "0"
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
    textColor: {
        type: "string"
    },
    nameHoverColor: {
        type: "string"
    },
    titleHoverColor: {
        type: "string"
    },
    backColor: {
        type: "string"
    },
    backHoverColor: {
        type: "string"
    },
    slideColor: {
        type: "string"
    },
    textFontFamily: {
        type: "string"
    },
    multiPersonChecked: {
        type: "boolean",
        default: false
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
    padding: {
        type: "number"
    },
    paddingU: {
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
    personnamenamenameshadowColor: {
        type: "string"
    },
    personnameshadowBlur: {
        type: "number",
        default: "0"
    },
    personnameshadowHorizontal: {
        type: "number",
        default: "0"
    },
    personnameshadowVertical: {
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
    items: {
        type: "array",
        default: ['facebook', 'twitter', 'instagram', 'youtube']
      },
      hoverEffectPerson: {
        type: "string",
        default: "none"
      },
      selectedSocialMediaIcon: {
        type: "string",
        // default: "dashicons dashicons-admin-site"
      },
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
