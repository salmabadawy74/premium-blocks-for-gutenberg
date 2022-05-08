const { __ } = wp.i18n;
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
    labelTag: {
        type: "string",
        default: "h3"
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
    switcherStyles: {
        type: "array",
        default: [
            {
                switchSize: 15,
                switchSizeMobile: 15,
                switchSizeTablet: 15,
                switchRadiusType: 'em',
                switchRadius: 1.5,
                switchRadiusMobile: 1.5,
                switchRadiusTablet: 1.5,
                containerRadiusType: '%',
                containerRadius: 50,
                containerRadiusMobile: 50,
                containerRadiusTablet: 50,
                containerBackState1: '',
                backgroundImageIDState1: '',
                backgroundImageURLState1: '',
                backgroundRepeatState1: 'no-reapet',
                backgroundPositionState1: 'top center',
                backgroundSizeState1: 'auto',
                fixedState1: false,
                gradientLocationOneState1: '0',
                gradientColorTwoState1: '',
                gradientLocationTwoState1: '100',
                gradientTypeState1: 'linear',
                gradientAngleState1: '180',
                gradientPositionState1: 'center center',
                // containerBackState2: '',
                // backgroundImageIDState2: '',
                // backgroundImageURLState2: '',
                // backgroundRepeatState2: 'no-reapet',
                // backgroundPositionState2: 'top center',
                // backgroundSizeState2: 'auto',
                // fixedState2: false,
                // gradientLocationOneState2: '0',
                // gradientColorTwoState2: '',
                // gradientLocationTwoState2: '100',
                // gradientTypeState2: 'linear',
                // gradientAngleState2: '180',
                // gradientPositionState2: 'center center',
                containerShadowColor: '',
                containerShadowBlur: '',
                containerShadowHorizontal: '',
                containerShadowVertical: '',
                containerShadowPosition: 'inset',
                switchShadowColor: '',
                switchShadowBlur: '',
                switchShadowHorizontal: '',
                switchShadowVertical: '',
                switchShadowPosition: 'inset',
            }
        ]
    },
    backgroundType: {
        type: "string",
        default: ""
    },
    backgroundTypeState2: {
        type: "string",
        default: ""
    },
    labelStyles: {
        type: "array",
        default: [
            {
                labelSpacing: 15,
                labelSpacingMobile: 15,
                labelSpacingTablet: 15,
                firstLabelColor: "rgb(84, 89, 95)",
                firstLabelLetter: 0,
                firstLabelLine: 0,
                firstLabelStyle: 'normal',
                firstLabelUpper: false,
                firstLabelWeight: "",
                firstLabelfontSize: 23,
                firstLabelfontSizeType: "px",
                firstLabelfontSizeMobile: 23,
                firstLabelfontSizeTablet: 23,
                firstLabelFontFamily: __('Default', 'premium-blocks-for-gutenberg'),
                firstLabelShadowColor: '',
                firstLabelShadowBlur: '0',
                firstLabelShadowHorizontal: '0',
                firstLabelShadowVertical: '0',
                firstLabelborderType: "none",
                firstLabelborderRadius: 0,
                firstLabelborderColor: '',
                firstLabelBoxShadowColor: '',
                firstLabelBoxShadowBlur: '',
                firstLabelBoxShadowHorizontal: '',
                firstLabelBoxShadowVertical: '',
                firstLabelBoxShadowPosition: 'inset',
                firstLabelPaddingType: 'px',
                secondLabelColor: "rgb(84, 89, 95)",
                secondLabelLetter: 0,
                secondLabelLine: 0,
                secondLabelStyle: 'normal',
                secondLabelUpper: false,
                secondLabelWeight: "",
                secondLabelfontSize: 23,
                secondLabelfontSizeType: "px",
                secondLabelfontSizeMobile: 23,
                secondLabelfontSizeTablet: 23,
                secondLabelFontFamily: __('Default', 'premium-blocks-for-gutenberg'),
                secondLabelShadowColor: '',
                secondLabelShadowBlur: '0',
                secondLabelShadowHorizontal: '0',
                secondLabelShadowVertical: '0',
                secondLabelborderType: "none",
                secondLabelborderRadius: 0,
                secondLabelborderColor: '',
                secondLabelBoxShadowColor: '',
                secondLabelBoxShadowBlur: '',
                secondLabelBoxShadowHorizontal: '',
                secondLabelBoxShadowVertical: '',
                secondLabelBoxShadowPosition: 'inset',
                secondLabelPaddingType: 'px'
            }
        ]
    },
    firstLabelBorderTop: {
        type: "number",
        default: "1"
    },
    firstLabelBorderRight: {
        type: "number",
        default: "1"
    },
    firstLabelBorderBottom: {
        type: "number",
        default: "1"
    },
    firstLabelBorderLeft: {
        type: "number",
        default: '1'
    },
    firstLabelBorderUpdated: {
        type: "boolean",
        default: false
    },
    firstLabelBorderWidth: {
        type: "number",
        default: "1"
    },
    firstLabelPaddingT: {
        type: "number",
        default: "0"
    },
    firstLabelPaddingR: {
        type: "number",
        default: "0"
    },
    firstLabelPaddingB: {
        type: "number",
        default: "0"
    },
    firstLabelPaddingL: {
        type: "number",
        default: "0"
    },
    firstLabelPaddingTTablet: {
        type: "number",
        default: "0"
    },
    firstLabelPaddingRTablet: {
        type: "number",
        default: "0"
    },
    firstLabelPaddingBTablet: {
        type: "number",
        default: "0"
    },
    firstLabelPaddingLTablet: {
        type: "number",
        default: "0"
    },
    firstLabelPaddingTMobile: {
        type: "number",
        default: "0"
    },
    firstLabelPaddingRMobile: {
        type: "number",
        default: "0"
    },
    firstLabelPaddingBMobile: {
        type: "number",
        default: "0"
    },
    firstLabelPaddingLMobile: {
        type: "number",
        default: "0"
    },
    secondLabelBorderTop: {
        type: "number",
        default: "1"
    },
    secondLabelBorderRight: {
        type: "number",
        default: "1"
    },
    secondLabelBorderBottom: {
        type: "number",
        default: "1"
    },
    secondLabelBorderLeft: {
        type: "number",
        default: '1'
    },
    secondLabelBorderUpdated: {
        type: "boolean",
        default: false
    },
    secondLabelBorderWidth: {
        type: "number",
        default: "1"
    },
    secondLabelPaddingT: {
        type: "number",
        default: "0"
    },
    secondLabelPaddingR: {
        type: "number",
        default: "0"
    },
    secondLabelPaddingB: {
        type: "number",
        default: "0"
    },
    secondLabelPaddingL: {
        type: "number",
        default: "0"
    },
    secondLabelPaddingTTablet: {
        type: "number",
        default: "0"
    },
    secondLabelPaddingRTablet: {
        type: "number",
        default: "0"
    },
    secondLabelPaddingBTablet: {
        type: "number",
        default: "0"
    },
    secondLabelPaddingLTablet: {
        type: "number",
        default: "0"
    },
    secondLabelPaddingTMobile: {
        type: "number",
        default: "0"
    },
    secondLabelPaddingRMobile: {
        type: "number",
        default: "0"
    },
    secondLabelPaddingBMobile: {
        type: "number",
        default: "0"
    },
    secondLabelPaddingLMobile: {
        type: "number",
        default: "0"
    },
    contentStyles: {
        type: "array",
        default: [
            {
                contentHeight: 100,
                contentHeightType: "px",
                contentHeightMobile: 100,
                contentHeightTablet: 100,
            }
        ]
    },
    firstContentStyles: {
        type: "array",
        default: [
            {
                firstContentColor: "#54595f",
                firstContentLetter: 0,
                firstContentLine: 0,
                firstContentStyle: 'normal',
                firstContentUpper: false,
                firstContentWeight: "",
                firstContentfontSize: "",
                firstContentfontSizeType: "px",
                firstContentfontSizeMobile: "",
                firstContentfontSizeTablet: "",
                firstContentFontFamily: __('Default', 'premium-blocks-for-gutenberg'),
                firstContentShadowColor: '',
                firstContentShadowBlur: '0',
                firstContentShadowHorizontal: '0',
                firstContentShadowVertical: '0',
                firstContentBGColor: '',
                firstContentborderType: "none",
                firstContentborderRadius: 0,
                firstContentborderColor: '',
                firstContentBoxShadowColor: '',
                firstContentBoxShadowBlur: '',
                firstContentBoxShadowHorizontal: '',
                firstContentBoxShadowVertical: '',
                firstContentBoxShadowPosition: 'inset',
                firstContentPaddingType: 'px',
                firstContentMarginType: 'px'
            }
        ]
    },
    firstContentBorderTop: {
        type: "number",
        default: "1"
    },
    firstContentBorderRight: {
        type: "number",
        default: "1"
    },
    firstContentBorderBottom: {
        type: "number",
        default: "1"
    },
    firstContentBorderLeft: {
        type: "number",
        default: '1'
    },
    firstContentBorderUpdated: {
        type: "boolean",
        default: false
    },
    firstContentBorderWidth: {
        type: "number",
        default: "1"
    },
    firstContentMarginT: {
        type: "number"
    },
    firstContentMarginR: {
        type: "number"
    },
    firstContentMarginB: {
        type: "number"
    },
    firstContentMarginL: {
        type: "number"
    },
    firstContentMarginTTablet: {
        type: "number"
    },
    firstContentMarginRTablet: {
        type: "number"
    },
    firstContentMarginBTablet: {
        type: "number"
    },
    firstContentMarginLTablet: {
        type: "number"
    },
    firstContentMarginTMobile: {
        type: "number"
    },
    firstContentMarginRMobile: {
        type: "number"
    },
    firstContentMarginBMobile: {
        type: "number"
    },
    firstContentMarginLMobile: {
        type: "number"
    },
    contentPaddingT: {
        type: "number",
        default: "0"
    },
    contentPaddingR: {
        type: "number",
        default: "0"
    },
    contentPaddingB: {
        type: "number",
        default: "0"
    },
    contentPaddingL: {
        type: "number",
        default: "0"
    },
    contentPaddingTTablet: {
        type: "number",
        default: "0"
    },
    contentPaddingRTablet: {
        type: "number",
        default: "0"
    },
    contentPaddingBTablet: {
        type: "number",
        default: "0"
    },
    contentPaddingLTablet: {
        type: "number",
        default: "0"
    },
    contentPaddingTMobile: {
        type: "number",
        default: "0"
    },
    contentPaddingRMobile: {
        type: "number",
        default: "0"
    },
    contentPaddingBMobile: {
        type: "number",
        default: "0"
    },
    contentPaddingLMobile: {
        type: "number",
        default: "0"
    },
    secondContentStyles: {
        type: "array",
        default: [
            {
                secondContentColor: "#54595f",
                secondContentLetter: 0,
                secondContentLine: 0,
                secondContentStyle: 'normal',
                secondContentUpper: false,
                secondContentWeight: "",
                secondContentfontSize: "",
                secondContentfontSizeType: "px",
                secondContentfontSizeMobile: "",
                secondContentfontSizeTablet: "",
                secondContentFontFamily: __('Default', 'premium-blocks-for-gutenberg'),
                secondContentShadowColor: '',
                secondContentShadowBlur: '0',
                secondContentShadowHorizontal: '0',
                secondContentShadowVertical: '0',
                secondContentBGColor: '',
                secondContentborderType: "none",
                secondContentborderRadius: 0,
                secondContentborderColor: '',
                secondContentBoxShadowColor: '',
                secondContentBoxShadowBlur: '',
                secondContentBoxShadowHorizontal: '',
                secondContentBoxShadowVertical: '',
                secondContentBoxShadowPosition: 'inset',
                secondContentPaddingType: 'px',
            }
        ]
    },
    secondContentBorderTop: {
        type: "number",
        default: "1"
    },
    secondContentBorderRight: {
        type: "number",
        default: "1"
    },
    secondContentBorderBottom: {
        type: "number",
        default: "1"
    },
    secondContentBorderLeft: {
        type: "number",
        default: '1'
    },
    secondContentBorderUpdated: {
        type: "boolean",
        default: false
    },
    secondContentBorderWidth: {
        type: "number",
        default: "1"
    },
    secondContentStyles: {
        type: "array",
        default: [
            {}
        ]
    },
    // switchSizeType: {
    //     type: "string",
    //     default: "px"
    // },
    // switchSize: {
    //     type: "number",
    //     default: 15
    // },
    // switchSizeMobile: {
    //     type: "number",
    //     default: 15
    // },
    // switchSizeTablet: {
    //     type: "number",
    //     default: 15
    // },
    // bottomSpacingType: {
    //     type: "string",
    //     default: "px"
    // },
    // bottomSpacing: {
    //     type: "number",
    //     default: 1
    // },
    // bottomSpacingMobile: {
    //     type: "number",
    //     default: 1
    // },
    // bottomSpacingTablet: {
    //     type: "number",
    //     default: 1
    // },
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
    // switchRadius: {
    //     type: "number",
    //     default: 50
    // },
    // switchRadiusType: {
    //     type: "string",
    //     default: "px"
    // },
    // labelSpacingType: {
    //     type: "string",
    //     default: "px"
    // },
    // labelSpacing: {
    //     type: "number",
    //     default: 15
    // },
    // labelSpacingMobile: {
    //     type: "number",
    //     default: 15
    // },
    // labelSpacingTablet: {
    //     type: "number",
    //     default: 15
    // },
    // firstLabelColor: {
    //     type: "string",
    //     default: "#54595f"
    // },
    // firstLabelLetter: {
    //     type: "number"
    // },
    // firstLabelStyle: {
    //     type: "string"
    // },
    // firstLabelUpper: {
    //     type: "boolean",
    //     default: false
    // },
    // firstLabelWeight: {
    //     type: "number"
    // },
    // firstLabelfontSize: {
    //     type: "number",
    //     default: 20
    // },
    // firstLabelfontSizeType: {
    //     type: "string",
    //     default: "px"
    // },
    // firstLabelfontSizeMobile: {
    //     type: "number",
    //     default: 20
    // },
    // firstLabelfontSizeTablet: {
    //     type: "number",
    //     default: 20
    // },
    // secondLabelColor: {
    //     type: "string",
    //     default: "#54595f"
    // },
    // secondLabelLetter: {
    //     type: "number"
    // },
    // secondLabelStyle: {
    //     type: "string"
    // },
    // secondLabelUpper: {
    //     type: "boolean",
    //     default: false
    // },
    // secondLabelWeight: {
    //     type: "number"
    // },
    // secondLabelfontSize: {
    //     type: "number",
    //     default: 20
    // },
    // secondLabelfontSizeType: {
    //     type: "string",
    //     default: "px"
    // },
    // secondLabelfontSizeMobile: {
    //     type: "number",
    //     default: 20
    // },
    // secondLabelfontSizeTablet: {
    //     type: "number",
    //     default: 20
    // },
    // shadowColor: {
    //     type: "string"
    // },
    // shadowBlur: {
    //     type: "number",
    //     default: "0"
    // },
    // shadowHorizontal: {
    //     type: "number",
    //     default: "0"
    // },
    // shadowVertical: {
    //     type: "number",
    //     default: "0"
    // },
    // contentHeight: {
    //     type: "number",
    //     default: 50
    // },
    // contentHeightType: {
    //     type: "string",
    //     default: "px"
    // },
    // contentHeightMobile: {
    //     type: "number",
    //     default: 50
    // },
    // contentHeightTablet: {
    //     type: "number",
    //     default: 50
    // },
    // firstContentColor: {
    //     type: "string",
    //     default: "#54595f"
    // },
    // firstContentBGColor: {
    //     type: "string"
    // },
    // secondContentHeightType: {
    //     type: "string",
    //     default: "px"
    // },
    // secondContentHeight: {
    //     type: "number",
    //     default: 50
    // },
    // secondContentHeightMobile: {
    //     type: "number",
    //     default: 50
    // },
    // secondContentHeightTablet: {
    //     type: "number",
    //     default: 50
    // },
    // secondContentColor: {
    //     type: "string",
    //     default: "#54595f"
    // },
    // secondContentBGColor: {
    //     type: "string"
    // },
    // firstpaddingTop: {
    //     type: "number",
    //     default: 0
    // },
    // firstpaddingTopType: {
    //     type: "string",
    //     default: "px"
    // },
    // firstpaddingTopMobile: {
    //     type: "number",
    //     default: 0
    // },
    // firstpaddingTopTablet: {
    //     type: "number",
    //     default: 0
    // },
    // firstpaddingRight: {
    //     type: "number",
    //     default: 0
    // },
    // firstpaddingRightType: {
    //     type: "string",
    //     default: "px"
    // },
    // firstpaddingRightMobile: {
    //     type: "number",
    //     default: 0
    // },
    // firstpaddingRightTablet: {
    //     type: "number",
    //     default: 0
    // },
    // firstpaddingBottom: {
    //     type: "number",
    //     default: 0
    // },
    // firstpaddingBottomType: {
    //     type: "string",
    //     default: "px"
    // },
    // firstpaddingBottomMobile: {
    //     type: "number",
    //     default: 0
    // },
    // firstpaddingBottomTablet: {
    //     type: "number",
    //     default: 0
    // },
    // firstpaddingLeft: {
    //     type: "number",
    //     default: 0
    // },
    // firstpaddingLeftType: {
    //     type: "string",
    //     default: "px"
    // },
    // firstpaddingLeftMobile: {
    //     type: "number",
    //     default: 0
    // },
    // firstpaddingLeftTablet: {
    //     type: "number",
    //     default: 0
    // },
    // secondpaddingTop: {
    //     type: "number",
    //     default: 0
    // },
    // secondpaddingTopType: {
    //     type: "string",
    //     default: "px"
    // },
    // secondpaddingTopMobile: {
    //     type: "number",
    //     default: 0
    // },
    // secondpaddingTopTablet: {
    //     type: "number",
    //     default: 0
    // },
    // secondpaddingRight: {
    //     type: "number",
    //     default: 0
    // },
    // secondpaddingRightType: {
    //     type: "string",
    //     default: "px"
    // },
    // secondpaddingRightMobile: {
    //     type: "number",
    //     default: 0
    // },
    // secondpaddingRightTablet: {
    //     type: "number",
    //     default: 0
    // },
    // secondpaddingBottom: {
    //     type: "number",
    //     default: 0
    // },
    // secondpaddingBottomType: {
    //     type: "string",
    //     default: "px"
    // },
    // secondpaddingBottomMobile: {
    //     type: "number",
    //     default: 0
    // },
    // secondpaddingBottomTablet: {
    //     type: "number",
    //     default: 0
    // },
    // secondpaddingLeft: {
    //     type: "number",
    //     default: 0
    // },
    // secondpaddingLeftType: {
    //     type: "string",
    //     default: "px"
    // },
    // secondpaddingLeftMobile: {
    //     type: "number",
    //     default: 0
    // },
    // secondpaddingLeftTablet: {
    //     type: "number",
    //     default: 0
    // },
    effect: {
        type: "string",
        default: "fade"
    },
    slide: {
        type: "string",
        default: "top"
    },
    // firstContentLetter: {
    //     type: "number"
    // },
    // firstContentStyle: {
    //     type: "string"
    // },
    // firstContentUpper: {
    //     type: "boolean",
    //     default: false
    // },
    // firstContentWeight: {
    //     type: "number",
    //     default: 500
    // },
    // firstContentfontSize: {
    //     type: "number",
    //     default: 15
    // },
    // firstContentfontSizeType: {
    //     type: "string",
    //     default: "px"
    // },
    // firstContentfontSizeMobile: {
    //     type: "number",
    //     default: 15
    // },
    // firstContentfontSizeTablet: {
    //     type: "number",
    //     default: 15
    // },
    // firstContentborderType: {
    //     type: "string",
    //     default: "none"
    // },
    // firstContentborderWidth: {
    //     type: "number",
    //     default: "1"
    // },
    // firstContentborderRadius: {
    //     type: "number",
    //     default: 0
    // },
    // firstContentborderColor: {
    //     type: "string"
    // },
    // secondContentLetter: {
    //     type: "number"
    // },
    // secondContentStyle: {
    //     type: "string"
    // },
    // secondContentUpper: {
    //     type: "boolean",
    //     default: false
    // },
    // secondContentWeight: {
    //     type: "number",
    //     default: 500
    // },
    // secondContentfontSize: {
    //     type: "number",
    //     default: 15
    // },
    // secondContentfontSizeType: {
    //     type: "string",
    //     default: "px"
    // },
    // secondContentfontSizeMobile: {
    //     type: "number",
    //     default: 15
    // },
    // secondContentfontSizeTablet: {
    //     type: "number",
    //     default: 15
    // },
    // secondContentborderType: {
    //     type: "string",
    //     default: "none"
    // },
    // secondContentborderWidth: {
    //     type: "number",
    //     default: "1"
    // },
    // secondContentborderRadius: {
    //     type: "number",
    //     default: 0
    // },
    // secondContentborderColor: {
    //     type: "string"
    // },
}
export default attributes