/**
 * WordPress dependencies
 */
import { createBlock } from '@wordpress/blocks';

const transforms = {
	from: [
		{
			type: 'block',
			blocks: ['core/site-logo'],
			transform: () => {
				return createBlock('kemet/navigation-link');
			},
		},
		{
			type: 'block',
			blocks: ['core/spacer'],
			transform: () => {
				return createBlock('kemet/navigation-link');
			},
		},
		{
			type: 'block',
			blocks: ['core/home-link'],
			transform: () => {
				return createBlock('kemet/navigation-link');
			},
		},
		{
			type: 'block',
			blocks: ['core/social-links'],
			transform: () => {
				return createBlock('kemet/navigation-link');
			},
		},
		{
			type: 'block',
			blocks: ['core/search'],
			transform: () => {
				return createBlock('kemet/navigation-link');
			},
		},
	],
	to: [
		{
			type: 'block',
			blocks: ['kemet/navigation-submenu'],
			transform: (attributes, innerBlocks) =>
				createBlock(
					'kemet/navigation-submenu',
					attributes,
					innerBlocks
				),
		},
		{
			type: 'block',
			blocks: ['core/spacer'],
			transform: () => {
				return createBlock('core/spacer');
			},
		},
		{
			type: 'block',
			blocks: ['core/site-logo'],
			transform: () => {
				return createBlock('core/site-logo');
			},
		},
		{
			type: 'block',
			blocks: ['core/home-link'],
			transform: () => {
				return createBlock('core/home-link');
			},
		},
		{
			type: 'block',
			blocks: ['core/social-links'],
			transform: () => {
				return createBlock('core/social-links');
			},
		},
		{
			type: 'block',
			blocks: ['core/search'],
			transform: () => {
				return createBlock('core/search', {
					showLabel: false,
					buttonUseIcon: true,
					buttonPosition: 'button-inside',
				});
			},
		},
	],
};

export default transforms;
