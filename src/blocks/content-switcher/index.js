const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks

import './style.scss';
import PBG_Block_Icons from '../../../assets/icons/block-icons'

/**
 * Internal dependencies
 */
import json from './block.json';
import edit from './edit';
import save from './save';
import { contentSwitcher } from '../../../assets/js/settings';


registerBlockType("premium/content-switcher", {
    /**
     * @see ./edit.js
     */
    ...json,
    supports: {
        inserter: contentSwitcher
    },
    example: {},
    icon: PBG_Block_Icons.content_switcher,
    edit,
    save
});