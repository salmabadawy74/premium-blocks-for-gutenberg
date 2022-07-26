import { person } from "../../../assets/js/settings";
import PBG_Block_Icons from '../../../blocks-config/block-icons'
import save from "./save";
import edit from "./edit";
import deprecated from "./deprecated";
import attributes from "./attributes";

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;

registerBlockType("premium/person", {
    title: __("Team Members"),
    description: __('Show off your team members along with social links using Premium Team Members Block', 'premium-block-for-gutenberg'),
    icon: PBG_Block_Icons.team,
    category: "premium-blocks",
    attributes: attributes,
    keywords: [__("Team", 'premium-blocks-for-gutenberg'), __("profile", 'premium-blocks-for-gutenberg'), __("member", 'premium-blocks-for-gutenberg')],
    supports: {
        inserter: person
    },
    example: {},
    edit: edit,
    save: save,
    deprecated: deprecated
});