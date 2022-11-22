import { testimonials } from "../../../assets/js/settings";
import edit from "./edit";
import save from "./save";
import deprecatedContent from "./deprecated";
import PBG_Block_Icons from '../../../assets/icons/block-icons'
import json from './block.json';

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;

registerBlockType("premium/testimonial", {
    ...json,
    title: __("Testimonial", 'premium-blocks-for-gutenberg'),
    icon: PBG_Block_Icons.testimonials,
    description: __("Proof your success by displaying customer reviews using Premium Testimonials Block.", 'premium-blocks-for-gutenberg'),
    category: "premium-blocks",
    supports: {
        inserter: testimonials
    },
    keywords: [
        __("testimonial", 'premium-blocks-for-gutenberg'),
        __("Quote", 'premium-blocks-for-gutenberg'),
    ],
    example: {},
    edit: edit,
    save: save,
    deprecated: deprecatedContent
});