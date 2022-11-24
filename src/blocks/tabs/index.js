import { registerBlockType } from '@wordpress/blocks';

import { __ } from '@wordpress/i18n';

import PBG_Block_Icons from '../../../assets/icons/block-icons'

/**
 * Internal dependencies
 */
import json from './block.json';
import edit from './edit';
import save from './save';
import './editor.scss';

const { name } = json;

registerBlockType(name, {
    ...json,
    /**
     * @see ./edit.js
     */
    icon: PBG_Block_Icons?.my_block_icon,
    edit,
    save
});



