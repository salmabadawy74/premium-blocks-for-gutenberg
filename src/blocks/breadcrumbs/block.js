/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import './style.scss';

/**
 * Internal dependencies
 */
import json from './block.json';
import edit from './edit';
import PBG_Block_Icons from '../../../blocks-config/block-icons'

const { name } = json;

registerBlockType(name, {


    icon: PBG_Block_Icons.breadcrumbs,

    /**
     * @see ./edit.js
     */
    edit,
});

