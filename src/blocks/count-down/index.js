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
    dateTime:{
        type:"string"
    },
    timeZone:{
        type:"string",
        default:__("UTC")
    },
    expiredDate:{
        type: "boolean",
        default: false
    },
    expiredUrl:{
        type: "string",
        default: "http://localhost:8888/nesma/"
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
        default:__("Months")
    },
    weekLabel:{
        type:"string",
        default:__("Weeks")
    },
    dayLabel:{
        type:"string",
        default:__("Days")
    },
    hourLabel:{
        type:"string",
        default:__("Hours")
    },
    minuteLabel:{
        type:"string",
        default:__("Minutes")
    },
    secondLabel:{
        type:"string",
        default:__("Seconds")
    },
    contentDisplay:{
        type:"string",
        default:"block"
    },
//Digits style
    digitsColor:{
        type:"string",
        default:"#000"
    },
    digitsBgColor:{
        type:"string",
        default:"transparent"
    },
    digitsSize:{
        type:"number",
        default:"20"
    },
    digitsWeight:{
        type:"string"
    },
    digitsLetterSpacing:{
        type:"number",
        default:"0"
    },
    digitsLineHeight:{
        type:"number",
        default:"1"
    },
    borderType:{
        type:"string",
        default:"none"
    },
    borderWidth:{
        type:"number",
        default:"0"
    },
    borderColor:{
        type:"string",
        default:"#000"
    },
    borderRadius:{
        type:"number",
        default:"0"
    },
//Units style
    unitsColor:{
        type:"string",
        default:"#000"
    },  
    unitsSize:{
        type:"number",
        default:"20"
    },
    unitsWeight:{
        type:"string"
    },
    unitsLetterSpacing:{
        type:"number",
        default:"0"
    },
    unitsLineHeight:{
        type:"number",
        default:"2"
    },
    marginTop:{
        type:"number",
        default:"0"
    },
    marginRight:{
        type:"number",
        default:"0"
    },
    marginBottom:{
        type:"number",
        default:"0"
    },
    marginLeft:{
        type:"number",
        default:"0"
    },
    unitsSpace:{
        type:"number",
        default:"10"
    }
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