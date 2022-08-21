import { registerBlockType } from '@wordpress/blocks';

import { __ } from '@wordpress/i18n';

import PBG_Block_Icons from '../../../blocks-config/block-icons'

/**
 * Internal dependencies
 */
import json from './block.json';
import edit from './edit';
import save from './save';
import deprecatedContent from "./deprecated";

const { name } = json;

registerBlockType(name, {
    /**
     * @see ./edit.js
     */
    icon: PBG_Block_Icons.icon,

    edit,
    save,
    deprecated: deprecatedContent
});