const { __ } = wp.i18n;
import PbgIcon from "../icons";
import edit from "./edit";
const { registerBlockType } = wp.blocks;
registerBlockType("premium/post-blog", {
    title: __("Premium Blog"),
    icon: <PbgIcon icon="" />,
    category: "premium-blocks",
    attributes: {
        marginBottom: {
            type: "number",
            default: 0,
        },
        marginBottomType: {
            type: "string",
            default: "px",
        },
        marginBottomTablet: {
            type: "number",
            default: 0,
        },
        marginBottomMobile: {
            type: "number",
        },
        marginBottom: {
            type: "number",
            default: 0,
        },
        postSpacingType: {
            type: "string",
            default: "px",
        },
        postSpacing: {
            type: "number",
        },
        postSpacingMobile: {
            type: "number",
        },
        postSpacingTablet: {
            type: "number",
        },
        backgroundop': {
            type: "string",
        },
        borderType: {
            type: "string",
            default: "solid",
        },
    },
    example: {},
    edit: edit,
    save() {
        return null;
    },
});
