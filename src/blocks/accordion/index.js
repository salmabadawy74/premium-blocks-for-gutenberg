import { accordion } from "../../../assets/js/settings";

import PbgIcon from "../icons";
import edit from "./edit";
import save from "./save";
import deprecated from "./deprecated";

const { __ } = wp.i18n;

const { registerBlockType, createBlock } = wp.blocks;

const accordionAttrs = {
    accordionId: {
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
        type: "number"
    },
    titlePaddingR: {
        type: "number"
    },
    titlePaddingB: {
        type: "number"
    },
    titlePaddingL: {
        type: "number"
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
    arrowPadding: {
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
        type: "number"
    },
    descPaddingR: {
        type: "number"
    },
    descPaddingB: {
        type: "number"
    },
    descPaddingL: {
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
        anchor: true,
    },
    example: {},
    edit: edit,
    save: save,


    deprecated: deprecated
});
