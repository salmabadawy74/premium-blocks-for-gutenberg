import { imageSeparator } from "../../../assets/js/settings";
import save from "./save";
import edit from "./edit";
import PbgIcon from "../icons";
import imageSeparatorAttrs from './attributes'
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
registerBlockType("premium/image-separator", {
    title: __("Image Separator"),
    icon: < PbgIcon icon="image" />,
    category: "premium-blocks",
    attributes: imageSeparatorAttrs,
    supports: { inserter: imageSeparator },
    edit: edit,
    save: save
});
