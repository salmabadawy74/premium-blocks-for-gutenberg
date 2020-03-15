import {
    progressBar
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

const progressBarAttrs = {
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
    multiStage: {
        type: "boolean",
        default: false
    },
    percentage: {
        type: "string",
        default: "50%"
    },
    label: {
        type: "string",
        default: "Label"
    },
    progressBarHeight: {
        type: "number",
        default: 25
    },
    progressBarHeightType: {
        type: "string",
        default: "px"
    },
    progressBarHeightMobile: {
        type: "number",
        default: 25
    },
    progressBarHeightTablet: {
        type: "number",
        default: 25
    },
    progressBarRadius: {
        type: "number",
        default: 0
    },
    progressBarRadiusType: {
        type: "string",
        default: "px"
    },
    progressBarRadiusMobile: {
        type: "number",
        default: 0
    },
    progressBarRadiusTablet: {
        type: "number",
        default: 0
    },
    progressBarbgColor: {
        type: "string",
        default: "#f5f5f5"
    },
    progressBarColor: {
        type: "string",
        default: "#6ec1e4"
    },
    labelColor: {
        type: "string",
        default: "#6ec1e4"
    },
    LabelLetter: {
        type: "number",
        default: 0
    },
    LabelStyle: {
        type: "string"
    },
    LabelUpper: {
        type: "boolean",
        default: false
    },
    LabelWeight: {
        type: "number",
        default: 500
    },
    LabelfontSize: {
        type: "number",
        default: 20
    },
    LabelfontSizeType: {
        type: "string",
        default: "px"
    },
    LabelfontSizeMobile: {
        type: "number",
        default: 20
    },
    LabelfontSizeTablet: {
        type: "number",
        default: 20
    },
    arrowColor: {
        type: "string",
        default: "#6ec1e4"
    },
    percentageColor: {
        type: "string",
        default: "#6ec1e4"
    },
    percentageLetter: {
        type: "number",
        default: 0
    },
    percentageStyle: {
        type: "string"
    },
    percentageWeight: {
        type: "number",
        default: 500
    },
    percentagefontSize: {
        type: "number",
        default: 20
    },
    percentagefontSizeType: {
        type: "string",
        default: "px"
    },
    percentagefontSizeMobile: {
        type: "number",
        default: 20
    },
    percentagefontSizeTablet: {
        type: "number",
        default: 20
    },
    progress: {
        type: "number",
        default: 50
    },
    speeds: {
        type: "number",
        default: 1
    },
    repeaterItems: {
        type: "array",
        default: [
            {
                title: __("Label"),
                percentage: "50",
                edit: false
            }
        ]
    },
    editTitle: {
        type: "boolean",
        default: true
    },
    styleProgress: {
        type: "string",
        default: "solid"
    },
    animate: {
        type: "boolean",
        default: false
    }
};

registerBlockType("premium/progress-bar", {
    title: __("progress Bar"),
    icon: < PbgIcon icon="progress-bar" />,
    category: "premium-blocks",
    attributes: progressBarAttrs,
    supports: {
        inserter: progressBar
    },
    edit: edit,
    save: save
});