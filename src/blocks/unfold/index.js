import PbgIcon from "../icons";
import unfoldAttr from "./attributes";
import edit from './edit';
import save from './save'
const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;
registerBlockType("premium/unfold", {
    title: __("Premium Unfold"),
    icon: <PbgIcon icon="fold" />,
    keywords: [__('read'), __('section'), __('more'), __('cta'), __('content')],
    category: "premium-blocks",
    attributes: unfoldAttr,
    example: {},
    edit: edit,
    save: save,
});