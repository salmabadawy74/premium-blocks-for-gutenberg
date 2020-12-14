import { testimonial } from "../../../assets/js/settings";
import edit from "./edit";
import save from "./save";
import deprecatedContent from "./deprecated";
import PbgIcon from "../icons";

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;

const testimonialsAttrs = {
    align: {
        type: "string",
        default: "center"
    },
    authorImgId: {
        type: "string"
    },
    authorImgUrl: {
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
    author: {
        type: "array",
        source: "children",
        selector: ".premium-testimonial__author",
        default: "John Doe"
    },
    authorTag: {
        type: "string",
        default: "H3"
    },
    authorColor: {
        type: "string"
    },
    authorSize: {
        type: "number"
    },
    authorLetter: {
        type: "number"
    },
    authorStyle: {
        type: "string"
    },
    authorUpper: {
        type: "boolean"
    },
    authorWeight: {
        type: "number",
        default: 500
    },
    authorComTag: {
        type: "string",
        default: "H4"
    },
    text: {
        type: "array",
        source: "children",
        selector: ".premium-testimonial__text"
    },
    authorCom: {
        type: "array",
        source: "children",
        selector: ".premium-testimonial__author_comp",
        default: "Leap13"
    },
    authorComColor: {
        type: "string"
    },
    authorComSize: {
        type: "number"
    },
    urlCheck: {
        type: "boolean",
        default: false
    },
    urlText: {
        type: "string"
    },
    urlTarget: {
        type: "boolean",
        default: false
    },
    quotSize: {
        type: "number"
    },
    quotColor: {
        type: "string"
    },
    quotOpacity: {
        type: "number"
    },
    bodyColor: {
        type: "string"
    },
    bodySize: {
        type: "number"
    },
    bodyLine: {
        type: "number"
    },
    bodyTop: {
        type: "number"
    },
    bodyBottom: {
        type: "number"
    },
    dashColor: {
        type: "string"
    },
    shadowColor: {
        type: "string"
    },
    shadowBlur: {
        type: "number"
    },
    shadowHorizontal: {
        type: "number"
    },
    shadowVertical: {
        type: "number"
    },
    shadowPosition: {
        type: "string"
    },
    backColor: {
        type: "string"
    },
    imageID: {
        type: "string"
    },
    imageURL: {
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
    paddingTop: {
        type: "number"
    },
    paddingRight: {
        type: "number"
    },
    paddingBottom: {
        type: "number"
    },
    paddingLeft: {
        type: "number"
    },
    paddingUnit: {
        type: "string",
        default: "px"
    }
};

registerBlockType("premium/testimonial", {
    title: __("Testimonial"),
    icon: <PbgIcon icon="testimonials" />,
    category: "premium-blocks",
    attributes: testimonialsAttrs,
    supports: {
        inserter: testimonial
    },
    example: {},
    edit: edit,
    save: save,
    deprecated: deprecatedContent
});
