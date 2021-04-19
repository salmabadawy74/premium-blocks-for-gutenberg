import { testimonial } from "../../../assets/js/settings";
import edit from "./edit";
import save from "./save";
import deprecatedContent from "./deprecated";
import PbgIcon from "../icons";
import testimonialsAttrs from "./attributes";

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;



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
