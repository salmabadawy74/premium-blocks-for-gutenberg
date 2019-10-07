import { countDown } from "../../../assets/js/settings";
import PbgIcon from "../icons";
import save from './save';
import edit from './edit';
import deprecatedContent from './deprecated'

//internationalization.
const { __ } = wp.i18n; 

//Register blocks
const { registerBlockType } = wp.blocks; 

const countDownAttr = {
    id:{
        type:"string"
    },
    align:{
        type: "string",
        default: "center"
    },
    monthsCheck:{
        type: "boolean",
        default: false
    },
    weeksCheck:{
        type: "boolean",
        default: false
    },
    daysCheck:{
        type: "boolean",
        default: true
    },
    hoursCheck:{
        type: "boolean",
        default: true
    },
    minutesCheck:{
        type: "boolean",
        default: true
    },
    secondsCheck:{
        type: "boolean",
        default: true
    },
    monthLabel:{
        type:"string",
        default:"Months"
    },
    weekLabel:{
        type:"string",
        default:"Weeks"
    },
    dayLabel:{
        type:"string",
        default:"Days"
    },
    hourLabel:{
        type:"string",
        default:"Hours"
    },
    minuteLabel:{
        type:"string",
        default:"Minutes"
    },
    secondLabel:{
        type:"string",
        default:"Seconds"
    },
}

registerBlockType("premium/countdown", {
    title: __("CountDown"),
    icon: <PbgIcon icon="counter" />,
    category: "premium-blocks",
    attributes: countDownAttr,
    supports: {
        inserter: countDown
    },
    edit: edit,
    save: save,
    deprecated: deprecatedContent
});