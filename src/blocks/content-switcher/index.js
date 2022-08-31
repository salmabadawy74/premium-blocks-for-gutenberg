const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks

import './style.scss';
import PBG_Block_Icons from '../../../blocks-config/block-icons'

/**
 * Internal dependencies
 */
import json from './block.json';
import edit from './edit';
import save from './save';


registerBlockType("premium/contentswitcher", {
    /**
     * @see ./edit.js
     */
    ...json,
    icon: PBG_Block_Icons.content_switcher,
    edit,
    save
});