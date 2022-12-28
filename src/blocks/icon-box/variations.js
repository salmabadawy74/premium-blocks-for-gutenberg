
const { __ } = wp.i18n;

export const Variations =
    [
        {
            name: 'default',
            description: __('Default'),
            isDefault: true,
            pickerTitle: __('Default'),
            innerBlocks: [
                ['premium/icon', {

                }],
                ['premium/heading', {
                    title: __("Title", "premium-blocks-for-gutenberg"),
                    titleTag: "h2",
                    style: "default",
                }],
                ['premium/text', {
                    text: __(
                        "Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec id elit non mi porta gravida at eget metus.",
                        "premium-blocks-for-gutenberg"
                    )
                }],
                ['premium/button', {
                    btnText: __("Click Here", "premium-blocks-for-gutenberg")
                }],
            ],
            scope: ['block'],
        },
        {
            name: 'horizontal',
            description: __('Horizontal'),
            pickerTitle: __('Horizontal'),
            innerBlocks: [
                ['premium/container', {
                    variationSelected: true,
                    direction: { Desktop: "row", Tablet: "", Mobile: "" },
                    wrapItems: { Desktop: "", Tablet: "", Mobile: "wrap" },
                },
                    [
                        ['premium/container', {
                            variationSelected: true,
                            direction: {
                                Desktop: "column",
                                Tablet: "",
                                Mobile: "",
                            },
                        }, [
                                ['premium/icon', {
                                }]
                            ]
                        ],
                        ['premium/container', {
                            variationSelected: true,
                            direction: {
                                Desktop: "column",
                                Tablet: "",
                                Mobile: "",
                            },
                        }, [
                                ['premium/heading', {
                                    title: __("Title", "premium-blocks-for-gutenberg"),
                                    titleTag: "h2",
                                    style: "default",
                                }],
                                ['premium/text', {
                                    text: __(
                                        "Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec id elit non mi porta gravida at eget metus.",
                                        "premium-blocks-for-gutenberg"
                                    )
                                }],
                                ['premium/button', {
                                    btnText: __("Click Here", "premium-blocks-for-gutenberg")
                                }],
                            ]
                        ],
                    ]
                ]
            ],
            scope: ['block'],
        }
    ]

export default Variations