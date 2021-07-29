import { countUp } from "../../../assets/js/settings"
import attributes from './attributes'
import edit from "./edit"
import save from "./save"
import PbgIcon from "../icons"
import deprecatedContent from "./deprecated"

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;

const counterAttrs = attributes

registerBlockType("premium/countup", {
    title: __("CountUp"),
    icon: <PbgIcon icon="counter" />,
    category: "premium-blocks",
    attributes: counterAttrs,
    supports: {
        inserter: countUp
    },
    example: {},
    edit: edit,
    save: save,
    deprecated: deprecatedContent
});
