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
        icon: renderCustomIcon("button-fill"),
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
        icon: renderCustomIcon("button-outline"),
    },
];
