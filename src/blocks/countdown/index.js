
import PbgIcon from "../icons";
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
registerBlockType("premium/countdown", {
    title: __("Countdown"),
    icon: <PbgIcon icon="counter" />,
    category: "premium-blocks",
    attributes: {},
    example: {},
    edit: () => { },
    save: () => { }
})