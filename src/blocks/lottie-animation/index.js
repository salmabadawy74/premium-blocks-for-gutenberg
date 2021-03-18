
import PbgIcon from "../icons";
import edit from "./edit";
import save from "./save";

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;

const LottieAttr = {
    block_id: {
        type:"string"
    },
    classMigrate: {
        type: "boolean",
        default:false
    },
    lottieURl: {
        type: "string",
        default:""
    },
    lottieJson: {
        type:"object"
    },
    loop: {
        type: 'boolean',
        default:true  
    },
    reverse: {
        type: "boolean",
        default:false
    },
    speed: {
        type: "number",
        default:1
    },
    trigger: {
        type: 'string',
        default:'none'
    },
    size: {
        type: "number",
    },
    sizeUnit: {
        type: "string",
        default:'px'
    },
    rotate: {
        type: "number",
        default:0
    },
    align: {
        type: "string",
        default:"center"
    },
    link: {
        type: "boolean",
        default:false
    },
    url: {
        type: "string",
    },
    backColor: {
        type:"string"
    }
}

registerBlockType("premium/lottie", {
    title: __("Lottie Animation"),
    icon: <PbgIcon icon="lottie" />,
    category: "premium-blocks",
    attributes: LottieAttr,
    example: {},
    edit: edit,
    save: ()=>{},
});
