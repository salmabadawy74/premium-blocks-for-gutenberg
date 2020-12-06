import {
    contentSwitcher
} from "../../../assets/js/settings";

import save from "./save";
import edit from "./edit";
import PbgIcon from "../icons";


const {
    __
} = wp.i18n;

const {
    registerBlockType
} = wp.blocks;

const contentSwitcherAttrs = {
    block_id: {
        type: "string"
    },
    classMigrate: {
        type: "boolean",
        default: false
    },
    align: {
        type: "string",
        default: "center"
    },
    showLabel: {
        type: "boolean",
        default: true
    },
    firstLabel: {
        type: "string",
        default: "Content #1"
    },
    secondLabel: {
        type: "string",
        default: "Content #2"
    },
    display: {
        type: "string",
        default: "inline"
    },
    firstContent: {
        type: "string",
        default: "Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec id elit non mi porta gravida at eget metus."
    },
    secondContent: {
        type: "string",
        default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    switchCheck: {
        type: "boolean",
        default: false
    },
    firstcontentlign: {
        type: "string",
        default: "center"
    },
    secondcontentlign: {
        type: "string",
        default: "center"
    },
    switchSizeType: {
        type: "string",
        default: "px"
    },
    switchSize: {
        type: "number",
        default: 15
    },
    switchSizeMobile: {
        type: "number",
        default: 15
    },
    switchSizeTablet: {
        type: "number",
        default: 15
    },
    bottomSpacingType: {
        type: "string",
        default: "px"
    },
    bottomSpacing: {
        type: "number",
        default: 1
    },
    bottomSpacingMobile: {
        type: "number",
        default: 1
    },
    bottomSpacingTablet: {
        type: "number",
        default: 1
    },
    firstStateColor: {
        type: "string",
        default: "#6ec1e4"
    },
    secondStateColor: {
        type: "string",
        default: "#6ec1e4"
    },
    switcherBGColor: {
        type: "string",
        default: "#f2f2f2"
    },
    switchRadius: {
        type: "number",
        default: 50
    },
    switchRadiusType: {
        type: "string",
        default: "px"
    },
    labelSpacingType: {
        type: "string",
        default: "px"
    },
    labelSpacing: {
        type: "number",
        default: 15
    },
    labelSpacingMobile: {
        type: "number",
        default: 15
    },
    labelSpacingTablet: {
        type: "number",
        default: 15
    },
    firstLabelColor: {
        type: "string",
        default: "#54595f"
    },
    firstLabelLetter: {
        type: "number"
    },
    firstLabelStyle: {
        type: "string"
    },
    firstLabelUpper: {
        type: "boolean",
        default: false
    },
    firstLabelWeight: {
        type: "number",
        default: 500
    },
    firstLabelfontSize: {
        type: "number",
        default: 20
    },
    firstLabelfontSizeType: {
        type: "string",
        default: "px"
    },
    firstLabelfontSizeMobile: {
        type: "number",
        default: 20
    },
    firstLabelfontSizeTablet: {
        type: "number",
        default: 20
    },
    secondLabelColor: {
        type: "string",
        default: "#54595f"
    },
    secondLabelLetter: {
        type: "number"
    },
    secondLabelStyle: {
        type: "string"
    },
    secondLabelUpper: {
        type: "boolean",
        default: false
    },
    secondLabelWeight: {
        type: "number",
        default: 500
    },
    secondLabelfontSize: {
        type: "number",
        default: 20
    },
    secondLabelfontSizeType: {
        type: "string",
        default: "px"
    },
    secondLabelfontSizeMobile: {
        type: "number",
        default: 20
    },
    secondLabelfontSizeTablet: {
        type: "number",
        default: 20
    },
    shadowColor: {
        type: "string"
    },
    shadowBlur: {
        type: "number",
        default: "0"
    },
    shadowHorizontal: {
        type: "number",
        default: "0"
    },
    shadowVertical: {
        type: "number",
        default: "0"
    },
    firstContentHeight: {
        type: "number",
        default: 50
    },
    firstContentHeightType: {
        type: "string",
        default: "px"
    },
    firstContentHeightMobile: {
        type: "number",
        default: 50
    },
    firstContentHeightTablet: {
        type: "number",
        default: 50
    },
    firstContentColor: {
        type: "string",
        default: "#54595f"
    },
    firstContentBGColor: {
        type: "string"
    },
    secondContentHeightType: {
        type: "string",
        default: "px"
    },
    secondContentHeight: {
        type: "number",
        default: 50
    },
    secondContentHeightMobile: {
        type: "number",
        default: 50
    },
    secondContentHeightTablet: {
        type: "number",
        default: 50
    },
    secondContentColor: {
        type: "string",
        default: "#54595f"
    },
    secondContentBGColor: {
        type: "string"
    },
    firstpaddingTop: {
        type: "number",
        default: 0
    },
    firstpaddingTopType: {
        type: "string",
        default: "px"
    },
    firstpaddingTopMobile: {
        type: "number",
        default: 0
    },
    firstpaddingTopTablet: {
        type: "number",
        default: 0
    },
    firstpaddingRight: {
        type: "number",
        default: 0
    },
    firstpaddingRightType: {
        type: "string",
        default: "px"
    },
    firstpaddingRightMobile: {
        type: "number",
        default: 0
    },
    firstpaddingRightTablet: {
        type: "number",
        default: 0
    },
    firstpaddingBottom: {
        type: "number",
        default: 0
    },
    firstpaddingBottomType: {
        type: "string",
        default: "px"
    },
    firstpaddingBottomMobile: {
        type: "number",
        default: 0
    },
    firstpaddingBottomTablet: {
        type: "number",
        default: 0
    },
    firstpaddingLeft: {
        type: "number",
        default: 0
    },
    firstpaddingLeftType: {
        type: "string",
        default: "px"
    },
    firstpaddingLeftMobile: {
        type: "number",
        default: 0
    },
    firstpaddingLeftTablet: {
        type: "number",
        default: 0
    },
    secondpaddingTop: {
        type: "number",
        default: 0
    },
    secondpaddingTopType: {
        type: "string",
        default: "px"
    },
    secondpaddingTopMobile: {
        type: "number",
        default: 0
    },
    secondpaddingTopTablet: {
        type: "number",
        default: 0
    },
    secondpaddingRight: {
        type: "number",
        default: 0
    },
    secondpaddingRightType: {
        type: "string",
        default: "px"
    },
    secondpaddingRightMobile: {
        type: "number",
        default: 0
    },
    secondpaddingRightTablet: {
        type: "number",
        default: 0
    },
    secondpaddingBottom: {
        type: "number",
        default: 0
    },
    secondpaddingBottomType: {
        type: "string",
        default: "px"
    },
    secondpaddingBottomMobile: {
        type: "number",
        default: 0
    },
    secondpaddingBottomTablet: {
        type: "number",
        default: 0
    },
    secondpaddingLeft: {
        type: "number",
        default: 0
    },
    secondpaddingLeftType: {
        type: "string",
        default: "px"
    },
    secondpaddingLeftMobile: {
        type: "number",
        default: 0
    },
    secondpaddingLeftTablet: {
        type: "number",
        default: 0
    },
    effect: {
        type: "string",
        default: "fade"
    },
    slide: {
        type: "string",
        default: "top"
    },
    firstContentLetter: {
        type: "number"
    },
    firstContentStyle: {
        type: "string"
    },
    firstContentUpper: {
        type: "boolean",
        default: false
    },
    firstContentWeight: {
        type: "number",
        default: 500
    },
    firstContentfontSize: {
        type: "number",
        default: 15
    },
    firstContentfontSizeType: {
        type: "string",
        default: "px"
    },
    firstContentfontSizeMobile: {
        type: "number",
        default: 15
    },
    firstContentfontSizeTablet: {
        type: "number",
        default: 15
    },
    firstContentborderType: {
        type: "string",
        default: "none"
    },
    firstContentborderWidth: {
        type: "number",
        default: "1"
    },
    firstContentborderRadius: {
        type: "number",
        default: 0
    },
    firstContentborderColor: {
        type: "string"
    },
    secondContentLetter: {
        type: "number"
    },
    secondContentStyle: {
        type: "string"
    },
    secondContentUpper: {
        type: "boolean",
        default: false
    },
    secondContentWeight: {
        type: "number",
        default: 500
    },
    secondContentfontSize: {
        type: "number",
        default: 15
    },
    secondContentfontSizeType: {
        type: "string",
        default: "px"
    },
    secondContentfontSizeMobile: {
        type: "number",
        default: 15
    },
    secondContentfontSizeTablet: {
        type: "number",
        default: 15
    },
    secondContentborderType: {
        type: "string",
        default: "none"
    },
    secondContentborderWidth: {
        type: "number",
        default: "1"
    },
    secondContentborderRadius: {
        type: "number",
        default: 0
    },
    secondContentborderColor: {
        type: "string"
    },
};

registerBlockType("premium/content-switcher", {
    title: __("Content Switcher"),
    icon: < PbgIcon icon="content-switcher" />,
    category: "premium-blocks",
    attributes: contentSwitcherAttrs,
    supports: {
        inserter: contentSwitcher
    },
    edit: edit,
    save: save
});