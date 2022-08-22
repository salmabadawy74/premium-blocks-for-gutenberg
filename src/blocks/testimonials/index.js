import { testimonial } from "../../../assets/js/settings";
import edit from "./edit";
import save from "./save";
import deprecatedContent from "./deprecated";
import PBG_Block_Icons from '../../../blocks-config/block-icons'
import json from './block.json';

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;

registerBlockType("premium/testimonial", {
    ...json,
    title: __("Testimonial"),
    icon: PBG_Block_Icons.testimonials,
    description: __("Proof your success by displaying customer reviews using Premium Testimonials Block."),
    category: "premium-blocks",
    supports: {
        inserter: testimonial
    },
    example: {},
    edit: edit,
    save: save,
    deprecated: deprecatedContent
});