/**
 * Internal dependencies
 */
import rowIcons from './icons';

/**
 * Template option choices for predefined form layouts.
 *
 * @constant
 * @type {Array}
 */
const variations = [
    {
        name: 'one-column',
        icon: rowIcons['100'],
        column: 1,
        attributes: {
            variationSelected: true,
        },
        scope: ['block'],
    },
    {
        name: 'two-column-split',
        icon: rowIcons['50-50'],
        attributes: {
            variationSelected: true,
            directionDesktop: 'row',
            wrapMobile: 'wrap'
        },
        isDefault: true,
        innerBlocks: [
            ['premium/row', { colWidth: { 'Desktop': 50, 'Tablet': 100, 'Mobile': 100, unit: '%' } }],
            ['premium/row', { colWidth: { 'Desktop': 50, 'Tablet': 100, 'Mobile': 100, unit: '%' } }],
        ],
        scope: ['block'],
    },
    {
        name: 'three-columns-equal',
        icon: rowIcons['33-33-33'],
        attributes: {
            variationSelected: true,
            directionDesktop: 'row',
            wrapMobile: 'wrap'
        },
        innerBlocks: [
            ['premium/row', { colWidth: { 'Desktop': 33.33, 'Tablet': 100, 'Mobile': 100, unit: '%' } }],
            ['premium/row', { colWidth: { 'Desktop': 33.33, 'Tablet': 100, 'Mobile': 100, unit: '%' } }],
            ['premium/row', { colWidth: { 'Desktop': 33.33, 'Tablet': 100, 'Mobile': 100, unit: '%' } }],
        ],
        scope: ['block'],
    },
    {
        name: 'four-column',
        icon: rowIcons['25-25-25-25'],
        attributes: {
            variationSelected: true,
            directionDesktop: 'row',
            wrapMobile: 'wrap'
        },
        innerBlocks: [
            ['premium/row', { colWidth: { 'Desktop': 25, 'Tablet': 100, 'Mobile': 100, unit: '%' } }],
            ['premium/row', { colWidth: { 'Desktop': 25, 'Tablet': 100, 'Mobile': 100, unit: '%' } }],
            ['premium/row', { colWidth: { 'Desktop': 25, 'Tablet': 100, 'Mobile': 100, unit: '%' } }],
            ['premium/row', { colWidth: { 'Desktop': 25, 'Tablet': 100, 'Mobile': 100, unit: '%' } }],
        ],
        scope: ['block'],
    },
    {
        name: '50-50_50-50',
        icon: rowIcons['50-50_50-50'],
        attributes: {
            variationSelected: true,
            directionDesktop: 'row',
            wrapDesktop: 'wrap',
            wrapMobile: 'wrap',
            rowGapDesktop: 20,
            columnGapDesktop: 20
        },
        innerBlocks: [
            ['premium/row', { colWidth: { 'Desktop': 48, 'Tablet': 100, 'Mobile': 100, unit: '%' } }],
            ['premium/row', { colWidth: { 'Desktop': 48, 'Tablet': 100, 'Mobile': 100, unit: '%' } }],
            ['premium/row', { colWidth: { 'Desktop': 48, 'Tablet': 100, 'Mobile': 100, unit: '%' } }],
            ['premium/row', { colWidth: { 'Desktop': 48, 'Tablet': 100, 'Mobile': 100, unit: '%' } }],
        ],
        scope: ['block'],
    },
    {
        name: 'two-columns-one-third-two-thirds',
        icon: rowIcons['25-75'],
        attributes: {
            variationSelected: true,
            directionDesktop: 'row',
            wrapMobile: 'wrap',
        },
        innerBlocks: [
            ['premium/row', { colWidth: { 'Desktop': 25, 'Tablet': 100, 'Mobile': 100, unit: '%' } }],
            ['premium/row', { colWidth: { 'Desktop': 75, 'Tablet': 100, 'Mobile': 100, unit: '%' } }],
        ],
        scope: ['block'],
    },
    {
        name: '33-33-33_33-33-33',
        icon: rowIcons['33-33-33_33-33-33'],
        attributes: {
            variationSelected: true,
            directionDesktop: 'row',
            wrapDesktop: 'wrap',
            rowGapDesktop: 20,
            columnGapDesktop: 20,
            wrapMobile: 'wrap',
        },
        innerBlocks: [
            ['premium/row', { colWidth: { 'Desktop': 31, 'Tablet': 100, 'Mobile': 100, unit: '%' } }],
            ['premium/row', { colWidth: { 'Desktop': 31, 'Tablet': 100, 'Mobile': 100, unit: '%' } }],
            ['premium/row', { colWidth: { 'Desktop': 31, 'Tablet': 100, 'Mobile': 100, unit: '%' } }],
            ['premium/row', { colWidth: { 'Desktop': 31, 'Tablet': 100, 'Mobile': 100, unit: '%' } }],
            ['premium/row', { colWidth: { 'Desktop': 31, 'Tablet': 100, 'Mobile': 100, unit: '%' } }],
            ['premium/row', { colWidth: { 'Desktop': 31, 'Tablet': 100, 'Mobile': 100, unit: '%' } }],
        ],
        scope: ['block'],
    },
    {
        name: 'three-columns-wider-center',
        icon: rowIcons['25-50-25'],
        attributes: {
            variationSelected: true,
            directionDesktop: 'row',
            wrapMobile: 'wrap',
        },
        innerBlocks: [
            ['premium/row', { colWidth: { 'Desktop': 25, 'Tablet': 100, 'Mobile': 100, unit: '%' } }],
            ['premium/row', { colWidth: { 'Desktop': 50, 'Tablet': 100, 'Mobile': 100, unit: '%' } }],
            ['premium/row', { colWidth: { 'Desktop': 25, 'Tablet': 100, 'Mobile': 100, unit: '%' } }],
        ],
        scope: ['block'],
    },
    {
        name: 'two-columns-two-thirds-one-third',
        icon: rowIcons['75-25'],
        attributes: {
            variationSelected: true,
            directionDesktop: 'row',
            wrapMobile: 'wrap',
        },
        innerBlocks: [
            ['premium/row', { colWidth: { 'Desktop': 75, 'Tablet': 100, 'Mobile': 100, unit: '%' } }],
            ['premium/row', { colWidth: { 'Desktop': 25, 'Tablet': 100, 'Mobile': 100, unit: '%' } }],
        ],
        scope: ['block'],
    },
    {
        name: '75-25_25_75',
        icon: rowIcons['75-25_25_75'],
        attributes: {
            variationSelected: true,
            directionDesktop: 'row',
            wrapDesktop: 'wrap',
            rowGapDesktop: 20,
            columnGapDesktop: 20,
            wrapMobile: 'wrap',
        },
        innerBlocks: [
            ['premium/row', { colWidth: { 'Desktop': 73, 'Tablet': 100, 'Mobile': 100, unit: '%' } }],
            ['premium/row', { colWidth: { 'Desktop': 23, 'Tablet': 100, 'Mobile': 100, unit: '%' } }],
            ['premium/row', { colWidth: { 'Desktop': 23, 'Tablet': 100, 'Mobile': 100, unit: '%' } }],
            ['premium/row', { colWidth: { 'Desktop': 73, 'Tablet': 100, 'Mobile': 100, unit: '%' } }],

        ],
        scope: ['block'],
    },
    {
        name: '50-50_100',
        icon: rowIcons['50-50_100'],
        attributes: {
            variationSelected: true,
            directionDesktop: 'row',
            wrapDesktop: 'wrap',
            wrapMobile: 'wrap',
            rowGapDesktop: 20,
            columnGapDesktop: 20
        },
        innerBlocks: [
            [
                'premium/row',
                { colWidth: { 'Desktop': 100, 'Tablet': 100, 'Mobile': 100, unit: '%' }, directionDesktop: 'row', },
                [
                    ['premium/row', { colWidth: { 'Desktop': 48, 'Tablet': 100, 'Mobile': 100, unit: '%' } }],
                    ['premium/row', { colWidth: { 'Desktop': 48, 'Tablet': 100, 'Mobile': 100, unit: '%' } }],
                ]
            ],
            ['premium/row', { colWidth: { 'Desktop': 100, 'Tablet': 100, 'Mobile': 100, unit: '%' } }],
        ],
        scope: ['block'],
    },
    {
        name: '25-75_75-25',
        icon: rowIcons['25-75_75-25'],
        attributes: {
            variationSelected: true,
            directionDesktop: 'row',
            wrapDesktop: 'wrap',
            wrapMobile: 'wrap',
            rowGapDesktop: 20,
            columnGapDesktop: 20
        },
        innerBlocks: [
            ['premium/row', { colWidth: { 'Desktop': 23, 'Tablet': 100, 'Mobile': 100, unit: '%' } }],
            ['premium/row', { colWidth: { 'Desktop': 73, 'Tablet': 100, 'Mobile': 100, unit: '%' } }],
            ['premium/row', { colWidth: { 'Desktop': 73, 'Tablet': 100, 'Mobile': 100, unit: '%' } }],
            ['premium/row', { colWidth: { 'Desktop': 23, 'Tablet': 100, 'Mobile': 100, unit: '%' } }],

        ],
        scope: ['block'],
    },
];

export default variations;
