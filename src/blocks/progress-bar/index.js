import { progressBar } from "../../../assets/js/settings";
import save from "./save";
import edit from "./edit";
import PbgIcon from "../icons";
import attributes from './attributes'
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
registerBlockType("premium/progress-bar", {
    title: __("progress Bar"),
    icon: < PbgIcon icon="progress-bar" />,
    category: "premium-blocks",
    attributes: attributes,
    supports: {
        inserter: progressBar
    },
    edit: edit,
    save: save
});