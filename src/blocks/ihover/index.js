
import edit from "./edit";
import save from "./save";
import deprecatedContent from "./deprecated";

// For Internationalization
const { __ } = wp.i18n;

//Define regiterblock to use it later
const { registerBlockType } = wp.blocks;

//block attributes
const ihoverAttr = {
    hoverEffect:{
        type: "string",
        default: "style18"
    },
    imgName:{
        type:"string",
        default:"author.jpg"
    }
};

//Register ihover block
registerBlockType ( "premium/ihover", 
    {
        title: __("I hover"),
        icon: "unlock",
        category: "premium-blocks",
        attributes: ihoverAttr,
        edit: edit,
        save: save,
        deprecated: deprecatedContent

    }
);