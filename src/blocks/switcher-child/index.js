const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks
import PBG_Block_Icons from '../../../blocks-config/block-icons'

/**
 * Internal dependencies
 */
import json from './block.json';
import edit from './edit';
import save from './save';


registerBlockType('premium/switcherchild', {
    /**
     * @see ./edit.js
     */
    ...json,
    edit,
    save
});