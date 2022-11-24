import { testimonials } from "../../../assets/js/settings";
import edit from "./edit";
import save from "./save";
import deprecatedContent from "./deprecated";
import PBG_Block_Icons from '../../../assets/icons/block-icons'

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;

registerBlockType("premium/testimonial", {
    icon: PBG_Block_Icons.testimonials,
    supports: {
        inserter: testimonials
    },
    example: {},
    edit: edit,
    save: save,
    deprecated: deprecatedContent
});