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
import { trigger } from '../../../assets/js/settings';


registerBlockType('premium/trigger', {
    /**
     * @see ./edit.js
     */
    ...json,
    supports: {
        inserter: trigger
    },
    icon: PBG_Block_Icons.trigger,
    edit,
    save
});

