

const { __ } = wp.i18n;


export const Variations =
    [
        {
            name: 'line',
            description: __('Line'),
            attributes: {
                className: 'is-style-line', hasContainer: true, contentAlign: 'center',
            },
            isDefault: true,
            pickerTitle: __('Line'),
            isActive: ['className'],
            innerBlocks: [
                [
                    "premium/heading",
                    {
                        title: __("Label", "premium-blocks-for-gutenberg"),
                        titleTag: 'div',
                        style: "default",
                    },
                ],
                ['premium/text', { text: __('50%') }],
            ],
            scope: ['block'],
        },
        {
            name: 'half-circle',
            description: __('Half Circle'),
            attributes: {
                className: 'is-style-half-circle', hasContainer: false, contentAlign: 'left',
            },
            pickerTitle: __('Half Circle'),
            isActive: ['className'],
            innerBlocks: [
                [
                    "premium/heading",
                    {
                        title: __("Label", "premium-blocks-for-gutenberg"),
                        titleTag: 'div',
                        style: "default",
                    },
                ],
                ['premium/text', { text: __('50%') }],
            ],
            scope: ['block'],
        },
        {
            name: 'circle',
            description: __('Circle'),
            attributes: {
                className: 'is-style-circle', hasContainer: false, contentAlign: 'left',
            },
            pickerTitle: __('Circle'),
            isActive: ['className'],
            innerBlocks: [
                [
                    "premium/heading",
                    {
                        title: __("Label", "premium-blocks-for-gutenberg"),
                        titleTag: 'div',
                        style: "default",
                    },
                ],
                ['premium/text', { text: __('50%') }],
            ],
            scope: ['block'],
        },
        {
            name: 'dots',
            description: __('Dots'),
            attributes: {
                className: 'is-style-dots', hasContainer: false, contentAlign: 'left',
            },
            pickerTitle: __('Dots'),
            isActive: ['className'],
            innerBlocks: [
                [
                    "premium/heading",
                    {
                        title: __("Label", "premium-blocks-for-gutenberg"),
                        titleTag: 'div',
                        style: "default",
                    },
                ],
                ['premium/text', { text: __('50%') }],
            ],
            scope: ['block'],
        }
    ]

export default Variations