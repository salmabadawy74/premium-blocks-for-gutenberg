import { registerBlockType } from '@wordpress/blocks';

import { __ } from '@wordpress/i18n';

import PBG_Block_Icons from '../../../assets/icons/block-icons'

/**
 * Internal dependencies
 */
import json from './block.json';
import edit from './edit';
import save from './save';
import variations from './variations';

const { name } = json;

registerBlockType(name, {
    ...json,
    icon: PBG_Block_Icons.progressBar,
    example: {},
    edit,
    save,
    variations
});