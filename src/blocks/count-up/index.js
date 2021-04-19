import { countUp } from "../../../assets/js/settings";
import edit from "./edit";
import save from "./save";
import PbgIcon from "../icons";
import deprecatedContent from "./deprecated";
import attributes from "./attributes";

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;


registerBlockType("premium/countup", {
    title: __("CountUp"),
    icon: <PbgIcon icon="counter" />,
    category: "premium-blocks",
    attributes: attributes,
    supports: {
        inserter: countUp
    },
    example: {},
    edit: edit,
    save: save,
    deprecated: deprecatedContent
});
