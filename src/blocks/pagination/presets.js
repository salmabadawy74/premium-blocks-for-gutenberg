import { attributes } from "../../../blocks-config/pagination/block.json";
const { __ } = wp.i18n;

export const paginationPresets = [
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
                label: "backgroundColor",

                value: "var(--pbg-global-color1,#0085ba)",
            },
            {
                label: "padding",

                value: {
                    Desktop: {
                        top: "10",
                        right: "10",
                        bottom: "10",
                        left: "10",
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
                    unit: "px",
                },
            },
        ],
        icon: `<svg  class="presets__btn_fill" fill="#000000" width="103px" height="37px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg">
  <path d="M208,32H48A16.02085,16.02085,0,0,0,32,48V208a16.02085,16.02085,0,0,0,16,16H208a16.02085,16.02085,0,0,0,16-16V48A16.02085,16.02085,0,0,0,208,32ZM139.99219,175.99219a8,8,0,0,1-16,0V98.95313l-11.54688,7.69531a7.99982,7.99982,0,1,1-8.875-13.3125l23.98438-15.99219A7.99941,7.99941,0,0,1,139.99219,84Z"/>
</svg>`,
    },
];
