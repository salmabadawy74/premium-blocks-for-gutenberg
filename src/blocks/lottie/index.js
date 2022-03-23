import PbgIcon from "../icons";
import edit from "./edit";
import { lottie } from "../../../assets/js/settings";
import save from "./save";
import deprecated from './deprecated'

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;

import LottieAttr from './attributes'

registerBlockType("premium/lottie", {
    title: __("Lottie Animation"),
    icon: <PbgIcon icon="lottie" />,
    category: "premium-blocks",
    attributes: LottieAttr,
    supports: {
        inserter: lottie
    },
    example: {},
    edit: edit,
    save: save,
    deprecated: deprecated
});