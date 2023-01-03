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
                ['premium/counter', {}],
                ['premium/heading', {
                    title: __("Premium Count Up", "premium-blocks-for-gutenberg"),
                    titleTag: "h4",
                    style: "default",
                    align: {
                        "Desktop": "center",
                        "Tablet": "center",
                        "Mobile": "center"
                    }
                }]
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
                                ['premium/counter', {
                                    align: {
                                        "Desktop": "left",
                                        "Tablet": "left",
                                        "Mobile": "left"
                                    }
                                }],
                                ['premium/heading', {
                                    title: __("Premium Count Up", "premium-blocks-for-gutenberg"),
                                    titleTag: "h4",
                                    style: "default",
                                    align: {
                                        "Desktop": "left",
                                        "Tablet": "left",
                                        "Mobile": "left"
                                    }
                                }]
                            ]
                        ],
                    ]
                ]
            ],
            scope: ['block'],
        }
    ]

export default Variations