import { accordion } from "../../../assets/js/settings";

import PbgIcon from "../icons";
import edit from "./edit";
import save from "./save";
import deprecated from "./deprecated";

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;

const accordionAttrs = {
    accordionId: {
        type: "string"
    },
    block_id: {
        type: "string"
    },
    repeaterItems: {
        type: "array",
        default: [
            {
                titleText: __("Awesome Title"),
                descText:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
        ]
    },
    direction: {
        type: "string",
        default: "ltr"
    },
    titleTag: {
        type: "string",
        default: "H4"
    },
    titleColor: {
        type: "string"
    },
    titleSize: {
        type: "number"
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
    titleBorder: {
        type: "string",
        default: "none"
    },
    titleBorderWidth: {
        type: "number",
        default: "1"
    },
    titleBorderTop: {
        type: "number"
    },
    titleBorderRight: {
        type: "number"
    },
    titleBorderBottom: {
        type: "number"
    },
    titleBorderLeft: {
        type: "number"
    },
    titleBorderUpdated: {
        type: "boolean",
        default: false
    },
    titleBorderRadius: {
        type: "number",
        default: "0"
    },
    titleBorderColor: {
        type: "string"
    },
    titleBack: {
        type: "string"
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
    titlePaddingT: {
        type: "number",
        default: 20
    },
    titlePaddingR: {
        type: "number",
        default: 20
    },
    titlePaddingB: {
        type: "number",
        default: 20
    },
    titlePaddingL: {
        type: "number",
        default: 20
    },
    titlePaddingTTablet: {
        type: "number",

    },
    titlePaddingRTablet: {
        type: "number",

    },
    titlePaddingBTablet: {
        type: "number",

    },
    titlePaddingLTablet: {
        type: "number",

    },
    titlePaddingTMobile: {
        type: "number",

    },
    titlePaddingRMobile: {
        type: "number",

    },
    titlePaddingBMobile: {
        type: "number",

    },
    titlePaddingLMobile: {
        type: "number",

    },
    arrowColor: {
        type: "string"
    },
    arrowBack: {
        type: "string"
    },
    arrowPos: {
        type: "string",
        default: "out"
    },
    arrowPaddingT: {
        type: "number"
    },
    arrowPaddingR: {
        type: "number"
    },
    arrowPaddingB: {
        type: "number"
    },
    arrowPaddingL: {
        type: "number"
    },
    arrowPaddingTTablet: {
        type: "number"
    },
    arrowPaddingRTablet: {
        type: "number"
    },
    arrowPaddingBTablet: {
        type: "number"
    },
    arrowPaddingLTablet: {
        type: "number"
    },
    arrowPaddingTMobile: {
        type: "number"
    },
    arrowPaddingRMobile: {
        type: "number"
    },
    arrowPaddingBMobile: {
        type: "number"
    },
    arrowPaddingLMobile: {
        type: "number"
    },
    arrowRadius: {
        type: "number"
    },
    arrowSize: {
        type: "number",
        default: 20
    },
    contentType: {
        type: "string",
        default: "text"
    },
    descAlign: {
        type: "string",
        default: "left"
    },
    descColor: {
        type: "string"
    },
    descBack: {
        type: "string"
    },
    descBorder: {
        type: "string",
        default: "none"
    },
    descBorderWidth: {
        type: "number",
        default: "1"
    },
    descBorderUpdated: {
        type: "boolean",
        default: false
    },
    descBorderTop: {
        type: "number"
    },
    descBorderRight: {
        type: "number"
    },
    descBorderBottom: {
        type: "number"
    },
    descBorderLeft: {
        type: "number"
    },
    titleEditBorder: {
        type: "boolean"
    },
    descBorderRadius: {
        type: "number",
        default: "0"
    },
    descBorderColor: {
        type: "string"
    },
    descSize: {
        type: "number"
    },
    descLine: {
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
    descWeight: {
        type: "number",
        default: 500
    },
    textShadowColor: {
        type: "string"
    },
    textShadowBlur: {
        type: "number",
        default: "0"
    },
    textShadowHorizontal: {
        type: "number",
        default: "0"
    },
    textShadowVertical: {
        type: "number",
        default: "0"
    },
    descPaddingT: {
        type: "number",
        default: "10"

    },
    descPaddingR: {
        type: "number",
        default: "10"

    },
    descPaddingB: {
        type: "number",
        default: "10"

    },
    descPaddingL: {
        type: "number",
        default: "10"
    },
    descPaddingTTablet: {
        type: "number",
        default: "10"
    },
    descPaddingRTablet: {
        type: "number",
        default: "10"
    },
    descPaddingBTablet: {
        type: "number",
        default: "10"
    },
    descPaddingLTablet: {
        type: "number",
        default: "10"
    },
    descPaddingTMobile: {
        type: "number",
        default: "10"
    },
    descPaddingRMobile: {
        type: "number",
        default: "10"

    },
    descPaddingBMobile: {
        type: "number",
        default: "10"

    },
    descPaddingLMobile: {
        type: "number",
        default: 10
    }
};

registerBlockType("premium/accordion", {
    title: __("Accordion"),
    icon: <PbgIcon icon="accordion" />,
    category: "premium-blocks",
    attributes: accordionAttrs,
    supports: {
        inserter: accordion
    },
    example: {},
    edit: edit,
    save: save,
    deprecated: deprecated
});
