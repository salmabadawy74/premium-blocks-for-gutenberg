import { registerBlockType } from '@wordpress/blocks';

import { __ } from '@wordpress/i18n';

import PBG_Block_Icons from '../../../assets/icons/block-icons'
import { icon } from "../../../assets/js/settings";

/**
 * Internal dependencies
 */
import edit from './edit';
import save from './save';
import deprecatedContent from "./deprecated";

registerBlockType('premium/icon', {
    supports: {
        inserter: icon
    },
    icon: PBG_Block_Icons.icon,

    example: {},
    edit,
    save,
    deprecated: deprecatedContent
});