import { testimonial } from "../../../assets/js/settings";
import edit from "./edit";
import save from "./save";
import deprecatedContent from "./deprecated";
import testimonialsAttrs from "./attributes";
import PBG_Block_Icons from '../../../blocks-config/block-icons'

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;



registerBlockType("premium/testimonial", {
    title: __("Testimonial"),
    description: __('Proof your success by displaying customer reviews using Premium Testimonials Block.', 'premium-block-for-gutenberg'),
    icon: PBG_Block_Icons.testimonials,
    category: "premium-blocks",
    keywords: [
        "testimonial"
    ],
    attributes: testimonialsAttrs,
    supports: {
        inserter: testimonial
    },
    example: {},
    edit: edit,
    save: save,
    deprecated: deprecatedContent
});