

const { __ } = wp.i18n;


export const Variations =
    [
        {
            name: 'line',
            description: __('Line'),
            attributes: {
                className: 'is-style-default', hasContainer: true, contentAlign: 'center',
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
            name: 'circle',
            description: __('Circle'),
            attributes: {
                className: 'is-style-plain', hasContainer: false, contentAlign: 'left',
            },
            pickerTitle: __('Circle'),
            isActive: ['className'],
            innerBlocks: [
                ['stackable/image', {}]
            ],
            scope: ['block'],
        }
    ]

export default Variations