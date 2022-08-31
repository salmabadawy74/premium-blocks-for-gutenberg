const { registerBlockType } = wp.blocks;

const { __ } = wp.i18n
import PBG_Block_Icons from '../../../blocks-config/block-icons'

/**
 * Internal dependencies
 */
import json from './block.json';
import edit from './edit';
import save from './save';


registerBlockType('premium/switcher-child', {
    ...json,
    /**
     * @see ./edit.js
     */
    icon: PBG_Block_Icons.content_switcher,
    edit,
    save
});