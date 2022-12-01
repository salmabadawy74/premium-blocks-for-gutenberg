import { attributes } from "./block.json";
const { __ } = wp.i18n;

export const buttonsPresets = [
    {
        attributes,
    },
    {
        defaultPresetAttributes: [
            { label: "backgroundPresets" },
            { label: "border" },
        ],
    },
    {
        value: "preset-1",
        label: __(" Fill Color"),
        attributes: [
            {
                label: "backgroundPresets",
                value: "",
            },
            {
                label: "showIcon",
                value: false,
            },
            {
                label: "btnStyles",

                value: [
                    {
                        textColor: `var(--pbg-global-color3,#333333)`,
                        textHoverColor: "",
                        backOpacity: 1,
                        backHoverColor: "",
                        borderHoverColor: "",
                    },
                ],
            },
            {
                label: "backgroundOptions",
                value: {
                    backgroundType: "solid",
                    backgroundColor: "var(--pbg-global-color1,#0085ba)",
                    backgroundImageID: "",
                    backgroundImageURL: "",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    fixed: false,
                    gradientLocationOne: "0",
                    gradientColorTwo: "",
                    gradientLocationTwo: "100",
                    gradientType: "linear",
                    gradientAngle: "180",
                    gradientPosition: "center center",
                },
            },
            {
                label: "border",
                value: {
                    borderType: "none",
                    borderColor: ``,
                    borderWidth: {
                        Desktop: {
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0,
                        },
                        Tablet: {
                            top: "",
                            right: "",
                            bottom: "",
                            left: "",
                        },
                        Mobile: {
                            top: "",
                            right: "",
                            bottom: "",
                            left: "",
                        },
                    },
                    borderRadius: {
                        Desktop: {
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0,
                        },
                        Tablet: {
                            top: "",
                            right: "",
                            bottom: "",
                            left: "",
                        },
                        Mobile: {
                            top: "",
                            right: "",
                            bottom: "",
                            left: "",
                        },
                    },
                },
            },
        ],
        icon: `<svg id="Layer_1" class="presets__btn_fill" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="103" height="37" viewBox="0 0 103 37"><defs></defs><title>fill-color</title><path id="Fill_Color" data-name="Fill Color" class="cls-1" d="M0,0V37H103V0ZM75,20H27.93V17H75Z"/></svg>`,
    },
    {
        value: "preset-2",
        label: __("Outline", ""),
        attributes: [
            {
                label: "backgroundPresets",
                value: "transparent",
            },
            {
                label: "showIcon",
                value: false,
            },
            {
                label: "btnStyles",

                value: [
                    {
                        textColor: `var(--pbg-global-color3,#333333)`,
                        textHoverColor: "",
                        backOpacity: 1,
                        backHoverColor: "",
                        borderHoverColor: "",
                    },
                ],
            },

            {
                label: "border",
                value: {
                    borderType: "solid",
                    borderColor: `var(--pbg-global-color3,#333333)`,
                    borderWidth: {
                        Desktop: {
                            top: 1,
                            right: 1,
                            bottom: 1,
                            left: 1,
                        },
                        Tablet: {
                            top: "",
                            right: "",
                            bottom: "",
                            left: "",
                        },
                        Mobile: {
                            top: "",
                            right: "",
                            bottom: "",
                            left: "",
                        },
                    },
                    borderRadius: {
                        Desktop: {
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0,
                        },
                        Tablet: {
                            top: "",
                            right: "",
                            bottom: "",
                            left: "",
                        },
                        Mobile: {
                            top: "",
                            right: "",
                            bottom: "",
                            left: "",
                        },
                    },
                },
            },
        ],
        icon:
            '<svg id="Layer_1" class="presets__btn_outline" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="103" height="37" viewBox="0 0 103 37"><defs></defs><title>outline</title><path id="Outline" class="cls-1" d="M102,1V36H1V1H102m1-1H0V37H103V0ZM75,20V17H28.06v3Z"/></svg>',
    },
    {
        value: "preset-3",
        label: __("Fill With Icon"),
        attributes: [
            {
                label: "backgroundPresets",
                value: "",
            },
            {
                label: "showIcon",
                value: true,
            },
            {
                label: "btnStyles",

                value: [
                    {
                        textColor: `var(--pbg-global-color3,#333333)`,
                        textHoverColor: "",
                        backOpacity: 1,
                        backHoverColor: "",
                        borderHoverColor: "",
                    },
                ],
            },
            {
                label: "iconPosition",
                value: "after",
            },
            {
                label: "backgroundOptions",
                value: {
                    backgroundType: "solid",
                    backgroundColor: "var(--pbg-global-color1,#0085ba)",
                    backgroundImageID: "",
                    backgroundImageURL: "",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    fixed: false,
                    gradientLocationOne: "0",
                    gradientColorTwo: "",
                    gradientLocationTwo: "100",
                    gradientType: "linear",
                    gradientAngle: "180",
                    gradientPosition: "center center",
                },
            },
            {
                label: "border",
                value: {
                    borderType: "none",
                    borderColor: ``,
                    borderWidth: {
                        Desktop: {
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0,
                        },
                        Tablet: {
                            top: "",
                            right: "",
                            bottom: "",
                            left: "",
                        },
                        Mobile: {
                            top: "",
                            right: "",
                            bottom: "",
                            left: "",
                        },
                    },
                    borderRadius: {
                        Desktop: {
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0,
                        },
                        Tablet: {
                            top: "",
                            right: "",
                            bottom: "",
                            left: "",
                        },
                        Mobile: {
                            top: "",
                            right: "",
                            bottom: "",
                            left: "",
                        },
                    },
                },
            },
        ],
        icon: `<svg id="Layer_1" class="presets__btn_fill" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="103" height="37" viewBox="0 0 103 37"><defs></defs><title>fill-with-icon</title><g id="Fill_With_Icon" data-name="Fill With Icon"><path class="cls-1" d="M0,0V37H103V0ZM69,20H22V17H69ZM79.08,22,76.52,20.6,74,22l.48-2.86-2.07-2,2.87-.41,1.28-2.6,1.28,2.6,2.87.41-2.08,2Z"/></g></svg>`,
    },
    {
        value: "preset-4",
        label: __("Outline With Icon", ""),
        attributes: [
            {
                label: "backgroundPresets",
                value: "transparent",
            },
            {
                label: "showIcon",
                value: true,
            },
            {
                label: "btnStyles",

                value: [
                    {
                        textColor: `var(--pbg-global-color3,#333333)`,
                        textHoverColor: "",
                        backOpacity: 1,
                        backHoverColor: "",
                        borderHoverColor: "",
                    },
                ],
            },
            {
                label: "iconPosition",
                value: "after",
            },
            {
                label: "iconColor",
                value: `var(--pbg-global-color3,#333333)`,
            },
            {
                label: "border",
                value: {
                    borderType: "solid",
                    borderColor: `var(--pbg-global-color3,#333333)`,
                    borderWidth: {
                        Desktop: {
                            top: 1,
                            right: 1,
                            bottom: 1,
                            left: 1,
                        },
                        Tablet: {
                            top: "",
                            right: "",
                            bottom: "",
                            left: "",
                        },
                        Mobile: {
                            top: "",
                            right: "",
                            bottom: "",
                            left: "",
                        },
                    },
                    borderRadius: {
                        Desktop: {
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0,
                        },
                        Tablet: {
                            top: "",
                            right: "",
                            bottom: "",
                            left: "",
                        },
                        Mobile: {
                            top: "",
                            right: "",
                            bottom: "",
                            left: "",
                        },
                    },
                },
            },
        ],
        icon:
            '<svg id="Layer_1" class="presets__btn_outline" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="103" height="37" viewBox="0 0 103 37"><defs></defs><title>outline-with-icon</title><g id="Outline_With_Icon" data-name="Outline With Icon"><path class="cls-1" d="M102,1V36H1V1H102m1-1H0V37H103V0Z"/><rect class="cls-1" x="44" y="-5" width="3" height="47" transform="translate(64 -27) rotate(90)"/><polygon class="cls-1" points="76.52 14.06 77.8 16.66 80.67 17.07 78.59 19.09 79.08 21.95 76.52 20.6 73.95 21.95 74.44 19.09 72.37 17.07 75.24 16.66 76.52 14.06"/></g></svg>',
    },
    {
        value: "preset-5",
        label: __("Rounded Fill"),
        attributes: [
            {
                label: "backgroundPresets",
                value: "",
            },
            {
                label: "showIcon",
                value: false,
            },
            {
                label: "btnStyles",

                value: [
                    {
                        textColor: `var(--pbg-global-color3,#333333)`,
                        textHoverColor: "",
                        backOpacity: 1,
                        backHoverColor: "",
                        borderHoverColor: "",
                    },
                ],
            },
            {
                label: "backgroundOptions",
                value: {
                    backgroundType: "solid",
                    backgroundColor: "var(--pbg-global-color1,#0085ba)",
                    backgroundImageID: "",
                    backgroundImageURL: "",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    fixed: false,
                    gradientLocationOne: "0",
                    gradientColorTwo: "",
                    gradientLocationTwo: "100",
                    gradientType: "linear",
                    gradientAngle: "180",
                    gradientPosition: "center center",
                },
            },
            {
                label: "border",
                value: {
                    borderType: "none",
                    borderColor: ``,
                    borderWidth: {
                        Desktop: {
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0,
                        },
                        Tablet: {
                            top: "",
                            right: "",
                            bottom: "",
                            left: "",
                        },
                        Mobile: {
                            top: "",
                            right: "",
                            bottom: "",
                            left: "",
                        },
                    },
                    borderRadius: {
                        Desktop: {
                            top: 15,
                            right: 15,
                            bottom: 15,
                            left: 15,
                        },
                        Tablet: {
                            top: "",
                            right: "",
                            bottom: "",
                            left: "",
                        },
                        Mobile: {
                            top: "",
                            right: "",
                            bottom: "",
                            left: "",
                        },
                    },
                },
            },
        ],
        icon:
            '<svg id="Layer_1" class="presets__btn_fill" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="103" height="37" viewBox="0 0 103 37"><defs></defs><title>rounded-fill</title><path id="Rounded_Fill" data-name="Rounded Fill" class="cls-1" d="M96,0H7A7,7,0,0,0,0,7V30a7,7,0,0,0,7,7H96a7,7,0,0,0,7-7V7A7,7,0,0,0,96,0ZM75,20H28V17H75Z"/></svg>',
    },
    {
        value: "preset-6",
        label: __("Rounded Outline", ""),
        attributes: [
            {
                label: "backgroundPresets",
                value: "transparent",
            },
            {
                label: "showIcon",
                value: false,
            },
            {
                label: "btnStyles",

                value: [
                    {
                        textColor: `var(--pbg-global-color3,#333333)`,
                        textHoverColor: "",
                        backOpacity: 1,
                        backHoverColor: "",
                        borderHoverColor: "",
                    },
                ],
            },

            {
                label: "border",
                value: {
                    borderType: "solid",
                    borderColor: `var(--pbg-global-color3,#333333)`,
                    borderWidth: {
                        Desktop: {
                            top: 1,
                            right: 1,
                            bottom: 1,
                            left: 1,
                        },
                        Tablet: {
                            top: "",
                            right: "",
                            bottom: "",
                            left: "",
                        },
                        Mobile: {
                            top: "",
                            right: "",
                            bottom: "",
                            left: "",
                        },
                    },
                    borderRadius: {
                        Desktop: {
                            top: 15,
                            right: 15,
                            bottom: 15,
                            left: 15,
                        },
                        Tablet: {
                            top: "",
                            right: "",
                            bottom: "",
                            left: "",
                        },
                        Mobile: {
                            top: "",
                            right: "",
                            bottom: "",
                            left: "",
                        },
                    },
                },
            },
        ],
        icon:
            '<svg id="Layer_1" class="presets__btn_outline" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="103" height="37" viewBox="0 0 103 37"><defs></defs><title>rounded-outline</title><g id="Rounded_Outline" data-name="Rounded Outline"><path class="cls-1" d="M96,1a6,6,0,0,1,6,6V30a6,6,0,0,1-6,6H7a6,6,0,0,1-6-6V7A6,6,0,0,1,7,1H96m0-1H7A7,7,0,0,0,0,7V30a7,7,0,0,0,7,7H96a7,7,0,0,0,7-7V7a7,7,0,0,0-7-7Z"/><rect class="cls-1" x="50" y="-5" width="3" height="47" transform="translate(70 -33) rotate(90)"/></g></svg>',
    },
    {
        value: "preset-7",
        label: __("Circled Fill"),
        attributes: [
            {
                label: "backgroundPresets",
                value: "",
            },
            {
                label: "showIcon",
                value: false,
            },
            {
                label: "btnStyles",

                value: [
                    {
                        textColor: `var(--pbg-global-color3,#333333)`,
                        textHoverColor: "",
                        backOpacity: 1,
                        backHoverColor: "",
                        borderHoverColor: "",
                    },
                ],
            },
            {
                label: "backgroundOptions",
                value: {
                    backgroundType: "solid",
                    backgroundColor: "var(--pbg-global-color1,#0085ba)",
                    backgroundImageID: "",
                    backgroundImageURL: "",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    fixed: false,
                    gradientLocationOne: "0",
                    gradientColorTwo: "",
                    gradientLocationTwo: "100",
                    gradientType: "linear",
                    gradientAngle: "180",
                    gradientPosition: "center center",
                },
            },
            {
                label: "border",
                value: {
                    borderType: "none",
                    borderColor: ``,
                    borderWidth: {
                        Desktop: {
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0,
                        },
                        Tablet: {
                            top: "",
                            right: "",
                            bottom: "",
                            left: "",
                        },
                        Mobile: {
                            top: "",
                            right: "",
                            bottom: "",
                            left: "",
                        },
                    },
                    borderRadius: {
                        Desktop: {
                            top: 30,
                            right: 30,
                            bottom: 30,
                            left: 30,
                        },
                        Tablet: {
                            top: "",
                            right: "",
                            bottom: "",
                            left: "",
                        },
                        Mobile: {
                            top: "",
                            right: "",
                            bottom: "",
                            left: "",
                        },
                    },
                },
            },
        ],
        icon:
            '<svg id="Layer_1" class="presets__btn_fill" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="103" height="37" viewBox="0 0 103 37"><defs></defs><title>circled-fill</title><g id="Circled_Fill" data-name="Circled Fill"><path class="cls-1" d="M84.5,0h-66a18.5,18.5,0,0,0,0,37h66a18.5,18.5,0,0,0,0-37ZM75,20H28V17H75Z"/></g></svg>',
    },
    {
        value: "preset-8",
        label: __("Circled Outline", ""),
        attributes: [
            {
                label: "backgroundPresets",
                value: "transparent",
            },
            {
                label: "showIcon",
                value: false,
            },
            {
                label: "btnStyles",

                value: [
                    {
                        textColor: `var(--pbg-global-color3,#333333)`,
                        textHoverColor: "",
                        backOpacity: 1,
                        backHoverColor: "",
                        borderHoverColor: "",
                    },
                ],
            },

            {
                label: "border",
                value: {
                    borderType: "solid",
                    borderColor: `var(--pbg-global-color3,#333333)`,
                    borderWidth: {
                        Desktop: {
                            top: 1,
                            right: 1,
                            bottom: 1,
                            left: 1,
                        },
                        Tablet: {
                            top: "",
                            right: "",
                            bottom: "",
                            left: "",
                        },
                        Mobile: {
                            top: "",
                            right: "",
                            bottom: "",
                            left: "",
                        },
                    },
                    borderRadius: {
                        Desktop: {
                            top: 30,
                            right: 30,
                            bottom: 30,
                            left: 30,
                        },
                        Tablet: {
                            top: "",
                            right: "",
                            bottom: "",
                            left: "",
                        },
                        Mobile: {
                            top: "",
                            right: "",
                            bottom: "",
                            left: "",
                        },
                    },
                },
            },
        ],
        icon:
            '<svg id="Layer_1" class="presets__btn_outline" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="103" height="37" viewBox="0 0 103 37"><defs></defs><title>circled-outline</title><g id="Circled_Outline" data-name="Circled Outline"><path class="cls-1" d="M84.5,1a17.5,17.5,0,0,1,0,35h-66a17.5,17.5,0,0,1,0-35h66m0-1h-66A18.5,18.5,0,0,0,0,18.5H0A18.5,18.5,0,0,0,18.5,37h66A18.5,18.5,0,0,0,103,18.5h0A18.5,18.5,0,0,0,84.5,0Z"/><rect class="cls-1" x="50" y="-5" width="3" height="47" transform="translate(70 -33) rotate(90)"/></g></svg>',
    },
];
