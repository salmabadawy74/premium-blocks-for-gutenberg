import { dualHeading } from "../../../assets/js/settings";
import PBG_Block_Icons from "../../../blocks-config/block-icons";
import edit from "./edit";
import save from "./save";
import deprecatedContent from "./deprecated";
import attributes from "./attributes";

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;

registerBlockType("premium/dheading-block", {
    title: __("Dual Heading", "premium-blocks-for-gutenberg"),
    description: __(
        "Use Premium Dual Heading Block to create one heading with two different styles."
    ),
    icon: PBG_Block_Icons.dualHeading,
    category: "premium-blocks",
    attributes: attributes,
    supports: {
        inserter: dualHeading,
    },
    keywords: [
        __("title", "premium-blocks-for-gutenberg"),
        __("heading", "premium-blocks-for-gutenberg"),
        __("text", "premium-blocks-for-gutenberg"),
    ],
    example: {},
    edit: edit,
    save: save,
    deprecated: deprecatedContent,
});
