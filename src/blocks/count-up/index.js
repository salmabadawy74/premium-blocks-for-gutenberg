import { countUp } from "../../../assets/js/settings"
import attributes from './attributes'
import edit from "./edit"
import save from "./save"
import PbgIcon from "../icons"
import deprecatedContent from "./deprecated"
import PBG_Block_Icons from '../../../blocks-config/block-icons'

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;

const counterAttrs = attributes

registerBlockType("premium/countup", {
    title: __("CountUp"),
    description: __('Show off your facts and figures in an elegant way using Premium CountUp Block.'),
    icon: PBG_Block_Icons.countup,
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