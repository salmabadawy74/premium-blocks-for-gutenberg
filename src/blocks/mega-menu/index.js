/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { navigation as icon } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import metadata from './block.json';
import edit from './edit';
import save from './save';
import './editor.scss';
import './style.scss';

const { name } = metadata;

registerBlockType(name, {
	icon,
	example: {
		innerBlocks: [
			{
				name: 'kemet/navigation-link',
				attributes: {
					// translators: 'Home' as in a website's home page.
					label: __('Home'),
					url: 'https://make.wordpress.org/',
				},
			},
			{
				name: 'kemet/navigation-link',
				attributes: {
					// translators: 'About' as in a website's about page.
					label: __('About'),
					url: 'https://make.wordpress.org/',
				},
			},
			{
				name: 'kemet/navigation-link',
				attributes: {
					// translators: 'Contact' as in a website's contact page.
					label: __('Contact'),
					url: 'https://make.wordpress.org/',
				},
			},
		],
	},
	/**
	 * @see ./edit.js
	 */
	edit,
	save,
});

console.log('hello from kemet');