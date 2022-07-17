import { banner } from "../../../assets/js/settings";

import PbgIcon from "../icons";
import edit from "./edit";
import save from "./save";
import deprecatedContent from "./deprecated";
import attributes from "./attributes";
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
import PBG_Block_Icons from '../../../blocks-config/block-icons'

registerBlockType("premium/banner", {
    title: __("Banner"),
    description: __('Create attractive banners along with Heading, Description, and CTA using Premium Banner.'),
    icon: PBG_Block_Icons.banner,
    category: "premium-blocks",
    attributes: attributes,
    keywords: [__('image', 'premium-blocks-for-gutenberg'), __('photo', 'premium-blocks-for-gutenberg')],
    supports: {
        inserter: banner
    },
    example: {},
    edit: edit,
    save: save,
    deprecated: deprecatedContent
});