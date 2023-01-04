const { __ } = wp.i18n;
import Icons from './icons'

export const Variations =
    [
        {
            name: 'vertical',
            description: __('Vertical'),
            isDefault: true,
            pickerTitle: __('Vertical'),
            icon: Icons.vertical,
            innerBlocks: [
                ['premium/icon', {

                }],
                ['premium/heading', {
                    title: __("Title", "premium-blocks-for-gutenberg"),
                    titleTag: "h2",
                    style: "default",
                    align: {
                        "Desktop": "center",
                        "Tablet": "center",
                        "Mobile": "center"
                    }
                }],
                ['premium/text', {
                    text: __(
                        "Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
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
            icon: Icons.horizontal,
            innerBlocks: [
                ['premium/container', {
                    variationSelected: true,
                    direction: { Desktop: "row", Tablet: "", Mobile: "" },
                    wrapItems: { Desktop: "", Tablet: "", Mobile: "wrap" },
                    isBlockRootParent: true,
                    alignItems: {
                        "Desktop": "center",
                        "Tablet": "center",
                        "Mobile": "center"
                    },
                    columnGutter: {
                        "Desktop": 0,
                        "Tablet": 0,
                        "Mobile": 0,
                        "unit": "px"
                    },
                    rowGutter: {
                        "Desktop": 0,
                        "Tablet": 0,
                        "Mobile": 0,
                        "unit": "px"
                    }
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
                                    iconAlign: {
                                        "Desktop": "right",
                                        "Tablet": "right",
                                        "Mobile": "right"
                                    },
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
                            columnGutter: {
                                "Desktop": 0,
                                "Tablet": 0,
                                "Mobile": 0,
                                "unit": "px"
                            },
                            rowGutter: {
                                "Desktop": 0,
                                "Tablet": 0,
                                "Mobile": 0,
                                "unit": "px"
                            }
                        }, [
                                ['premium/heading', {
                                    title: __("Title", "premium-blocks-for-gutenberg"),
                                    titleTag: "h2",
                                    style: "default",
                                }],
                                ['premium/text', {
                                    text: __(
                                        "Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
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