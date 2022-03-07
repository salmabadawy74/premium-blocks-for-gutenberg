const { __ } = wp.i18n
const attributes = {
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
    },
    indicator: {
        type: "string",
        default: "arrow"
    },
    progressBarStyles: {
        type: "array",
        default: [
            {
                progressBarHeight: 25,
                progressBarHeightType: "px",
                progressBarHeightMobile: 25,
                progressBarHeightTablet: 25,
                progressBarRadius: 0,
                progressBarRadiusType: "px",
                progressBarRadiusMobile: 0,
                progressBarRadiusTablet: 0,
                progressBarbgColor: "#f5f5f5",
                progressBarColor: "#6ec1e4",
            }
        ]
    },
    labelStyles: {
        type: "array",
        default: [
            {
                labelColor: "#6ec1e4",
                LabelLetter: 0,
                LabelStyle: '',
                LabelUpper: false,
                LabelWeight: 500,
                LabelfontSize: 20,
                LabelfontSizeType: "px",
                LabelfontSizeMobile: 20,
                LabelfontSizeTablet: 20,
            }
        ]
    },
    percentageStyles: {
        type: "array",
        default: [
            {
                percentageColor: "#6ec1e4",
                percentageLetter: 0,
                percentageStyle: "",
                percentageWeight: 500,
                percentagefontSize: 20,
                percentagefontSizeType: "px",
                percentagefontSizeMobile: 20,
                percentagefontSizeTablet: 20,
            }
        ]
    },
    indicatorStyles: {
        type: "array",
        default: [
            {
                pinColor: "#54595f",
                pin: 1,
                pinType: "px",
                pinMobile: 1,
                pinTablet: 1,
                pinHeight: 12,
                pinHeightType: "px",
                pinHeightMobile: 12,
                pinHeightTablet: 12,
                arrowColor: "#6ec1e4",
                arrow: 10,
                arrowType: "px",
                arrowMobile: 10,
                arrowTablet: 10,
            }
        ]
    },
    hideDesktop: {
        type: "boolean",
        default: false
    },
    hideTablet: {
        type: "boolean",
        default: false
    },
    hideMobile: {
        type: 'boolean',
        default: false
    },

};
export default attributes