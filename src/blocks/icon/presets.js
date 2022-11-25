import { attributes } from "./block.json";
const { __ } = wp.i18n;

export const iconPresets = [
    {
        attributes,
    },
    {
        defaultPresetAttributes: [
            { label: "iconSpace" },
            { label: "backgroundType" },
            { label: "hoverbackgroundType" },
            { label: "hBackground" },
            { label: "hColor" },
            { label: "btnBorderStyle" },
            { label: "btnBorderTopLeftRadius" },
            { label: "btnBorderTopRightRadius" },
            { label: "btnBorderBottomLeftRadius" },
            { label: "btnBorderBottomRightRadius" },
            { label: "btnBorderBottomWidth" },
            { label: "btnBorderTopWidth" },
            { label: "btnBorderLeftWidth" },
            { label: "btnBorderRightWidth" },
        ],
    },

    {
        value: "preset-1",
        label: __("Preset 1"),
        attributes: [
            {
                label: "iconBorder",
                value: {
                    borderColor: "#1ed802",
                    borderType: "solid",
                    borderRadius: {
                        Desktop: {
                            top: "50",
                            right: "50",
                            bottom: "50",
                            left: "50",
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
                    borderWidth: {
                        Desktop: {
                            top: "1",
                            right: "1",
                            bottom: "1",
                            left: "1",
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
            {
                label: "iconStyles",
                value: [
                    {
                        iconColor: "",
                        iconBack: "",
                        iconHoverColor: "",
                        iconHoverBack: "",
                        iconOpacity: "1",
                    },
                ],
            },
        ],
        icon: '<svg width="93" height="92" viewBox="0 0 93 92" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path fill="#fff" d="M0 0h93v92h-93z"/><g transform="translate(16 16)"><circle stroke="#D6D9DD" cx="30" cy="30" r="30"/><path d="M44.469 13.066c.398.285.588.74.512 1.214l-4.857 29.143c-.057.36-.285.664-.607.854-.171.095-.379.152-.588.152-.152 0-.304-.038-.455-.095l-8.595-3.51-4.592 5.597c-.228.285-.569.436-.93.436-.133 0-.285-.019-.417-.076-.474-.171-.797-.626-.797-1.138v-6.622l16.393-20.093-20.282 17.55-7.494-3.074c-.436-.171-.721-.569-.759-1.044-.019-.455.209-.892.607-1.119l31.571-18.214c.19-.114.398-.171.607-.171.247 0 .493.076.683.209z" fill="#D6D9DD" fill-rule="nonzero"/></g></g></svg>',
    },
    {
        value: "preset-2",
        label: __("Preset 2"),
        attributes: [
            {
                label: "iconStyles",
                value: [
                    {
                        iconColor: "",
                        iconBack: "#1ed802",
                        iconHoverColor: "",
                        iconHoverBack: "",
                        iconOpacity: "1",
                    },
                ],
            },
        ],
        icon: '<svg width="93" height="92" viewBox="0 0 93 92" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path fill="#fff" d="M0 0h93v92h-93z"/><g transform="translate(16 16)"><circle stroke="#D6D9DD" cx="30" cy="30" r="30"/><path d="M44.469 13.066c.398.285.588.74.512 1.214l-4.857 29.143c-.057.36-.285.664-.607.854-.171.095-.379.152-.588.152-.152 0-.304-.038-.455-.095l-8.595-3.51-4.592 5.597c-.228.285-.569.436-.93.436-.133 0-.285-.019-.417-.076-.474-.171-.797-.626-.797-1.138v-6.622l16.393-20.093-20.282 17.55-7.494-3.074c-.436-.171-.721-.569-.759-1.044-.019-.455.209-.892.607-1.119l31.571-18.214c.19-.114.398-.171.607-.171.247 0 .493.076.683.209z" fill="#D6D9DD" fill-rule="nonzero"/></g></g></svg>',
    },
];
