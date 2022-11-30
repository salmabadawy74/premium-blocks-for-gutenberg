import { attributes } from "./block.json";
const { __ } = wp.i18n;
import { renderCustomIcon } from "@pbg/components";

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
        label: __("Preset 1"),
        attributes: [
            {
                label: "backgroundPresets",
                value: "",
            },

            {
                label: "border",
                value: {
                    borderType: "solid",
                    borderColor: "",
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
        icon: `<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="103" height="37" viewBox="0 0 103 37"><defs></defs><title>fill-color</title><path id="Fill_Color" data-name="Fill Color" class="cls-1" d="M0,0V37H103V0ZM75,20H27.93V17H75Z"/></svg>`,
    },
    {
        value: "preset-3",
        label: __("Preset 3", ""),
        attributes: [
            {
                label: "backgroundPresets",
                value: "transparent",
            },
            {
                label: "border",
                value: {
                    borderType: "solid",
                    borderColor: "",
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
            '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="103" height="37" viewBox="0 0 103 37"><defs></defs><title>outline</title><path id="Outline" class="cls-1" d="M102,1V36H1V1H102m1-1H0V37H103V0ZM75,20V17H28.06v3Z"/></svg>',
    },
];
