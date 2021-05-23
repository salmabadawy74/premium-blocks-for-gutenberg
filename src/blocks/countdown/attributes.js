const { __ } = wp.i18n;

export const countdownAttrs = {
    block_id: {
        type: "string"
    },
    classMigrate: {
        type: "boolean",
        default: false
    },
    showMonths: {
        type: "boolean",
        default: false
    },
    showWeeks: {
        type: "boolean",
        default: false
    },
    showDays: {
        type: "boolean",
        default: true
    },
    showHours: {
        type: "boolean",
        default: true
    },
    showMinutes: {
        type: "boolean",
        default: true
    },
    showSeconds: {
        type: "boolean",
        default: true
    },
    dateTime: {
        type: "string"
    },
    timeZone: {
        type: "string",
        default: __("WordPress Default")
    },
    monthLabel: {
        type: "string",
        default: __("Months")
    },
    weekLabel: {
        type: "string",
        default: __("Weeks")
    },
    dayLabel: {
        type: "string",
        default: __("Days")
    },
    hourLabel: {
        type: "string",
        default: __("Hours")
    },
    minuteLabel: {
        type: "string",
        default: __("Minutes")
    },
    secondLabel: {
        type: "string",
        default: __("Seconds")
    },
    contentStyle: {
        type: "string",
        default: "down"
    },
    align: {
        type: "string",
        default: "center"
    },
    digitColor: {
        type: "string",
        default: "#000"
    },
    digitBgColor: {
        type: "string",
        default: "#6EC1E4"
    },
    digitSize: {
        type: "number",
        default: "70"
    },
    digitSizeUnit: {
        type: "string",
        default: "px"
    },
    digitSizeMobile: {
        type: "number",
        default: "20"
    },
    digitSizeTablet: {
        type: "number",
        default: "20"
    },
    digitWeight: {
        type: "string"
    },
    digitLetter: {
        type: "number",
        default: "0"
    },
    digitLine: {
        type: "number"
    },
    digitUpper: {
        type: "boolean",
        default: false
    },
    digitShadowColor: {
        type: "string"
    },
    digitShadowBlur: {
        type: "number"
    },
    digitShadowHorizontal: {
        type: "number"
    },
    digitShadowVertical: {
        type: "number"
    },
    digitShadowPosition: {
        type: "string"
    },
    borderType: {
        type: "string",
        default: "none"
    },
    borderU: {
        type: "string",
        default: "px"
    },
    borderTop: {
        type: "number",
        default: "0"
    },
    borderRight: {
        type: "number",
        default: "0"
    },
    borderBottom: {
        type: "number",
        default: "0"
    },
    borderLeft: {
        type: "number",
        default: "0"
    },
    digitBorderColor: {
        type: "string",
        default: "#000"
    },
    borderRadius: {
        type: "number",
        default: "0"
    },
    backgroundSize: {
        type: "number",
        default: '30'
    },
    backgroundSizeMobile: {
        type: "number",
        default: "30"
    },
    backgroundSizeTablet: {
        type: "number",
        default: "30"
    },
    unitColor: {
        type: "string",
        default: "#000"
    },
    unitBgColor: {
        type: "string"
    },
    unitSizeUnit: {
        type: "string",
        default: "px"
    },
    unitSizeMobile: {
        type: "number",
        default: "20"
    },
    unitSizeTablet: {
        type: "number",
        default: "20"
    },
    unitSize: {
        type: "number",
        default: "20"
    },
    unitWeight: {
        type: "string"
    },
    unitStyle: {
        type: "string",
        default: "normal"
    },
    unitLetter: {
        type: "number",
        default: "0"
    },
    unitLine: {
        type: "number"
    },
    unitUpper: {
        type: "boolean",
        default: false
    },
    marginType: {
        type: "string",
        default: 'px'
    },
    marginTop: {
        type: "number",
        default: "0"
    },
    marginRight: {
        type: "number",
        default: "0"
    },
    marginBottom: {
        type: "number",
        default: "0"
    },
    marginLeft: {
        type: "number",
        default: "0"
    },
    marginTopTablet: {
        type: "number",
        default: "0"
    },
    marginRightTablet: {
        type: "number",
        default: "0"
    },
    marginBottomTablet: {
        type: "number",
        default: "0"
    },
    marginLeftTablet: {
        type: "number",
        default: "0"
    },
    marginTopMobile: {
        type: "number",
        default: "0"
    },
    marginRightMobile: {
        type: "number",
        default: "0"
    },
    marginBottomMobile: {
        type: "number",
        default: "0"
    },
    marginLeftMobile: {
        type: "number",
        default: "0"
    },
    paddingType: {
        type: "string",
        default: 'px'
    },
    paddingTop: {
        type: "number",
        default: "0"
    },
    paddingRight: {
        type: "number",
        default: "0"
    },
    paddingBottom: {
        type: "number",
        default: "0"
    },
    paddingLeft: {
        type: "number",
        default: "0"
    },
    paddingTopTablet: {
        type: "number",
        default: "0"
    },
    paddingRightTablet: {
        type: "number",
        default: "0"
    },
    paddingBottomTablet: {
        type: "number",
        default: "0"
    },
    paddingLeftTablet: {
        type: "number",
        default: "0"
    },
    paddingTopMobile: {
        type: "number",
        default: "0"
    },
    paddingRightMobile: {
        type: "number",
        default: "0"
    },
    paddingBottomMobile: {
        type: "number",
        default: "0"
    },
    paddingLeftMobile: {
        type: "number",
        default: "0"
    },
    unitsSpace: {
        type: "number",
        default: 20
    },
    expireType: {
        type: "string",
        default: "message"
    },
    expireTxt: {
        type: "string",
        default: "Countdown Expired !"
    },
    expiredUrl: {
        type: "string",
        default: "false"
    },

    separatorTxt: {
        type: "string",
        default: ':'
    },
    enableSeparator: {
        type: "boolean",
        default: false
    },
    expireColor: {
        type: "string"
    },
    expireBG: {
        type: "string"
    },
    textSizeUnit: {
        type: "string",
        default: 'px'
    },
    textSize: {
        type: "number",
        default: "30"
    },
    textSizeTablet: {
        type: "number",
        default: "30"
    },
    textSizeMobile: {
        type: "number",
        default: "30"
    },
    textWeight: {
        type: "number"
    },
    textStyle: {
        type: "string",
        default: 'normal'
    },
    textLetter: {
        type: "number"
    },
    textUpper: {
        type: "boolean",
        default: false
    },
    textLine: {
        type: "number"
    },
    textBorderType: {
        type: "string",
        default: "none"
    },
    textBorderTop: {
        type: "number"
    },
    textBorderRight: {
        type: "number"
    },
    textBorderBottom: {
        type: "number"
    },
    textBorderLeft: {
        type: "number"
    },
    textBorderColor: {
        type: "string"
    },
    textBorderRadius: {
        type: "number"
    },
    textShadowColor: {
        type: "string"
    },
    textShadowBlur: {
        type: "number"
    },
    textShadowHorizontal: {
        type: "number"
    },
    textShadowVertical: {
        type: "number"
    },
    textShadowPosition: {
        type: "string"
    },
    textMarginType: {
        type: "string",
        default: "px"
    },
    textMarginTop: {
        type: "number",
        default: "0"
    },
    textMarginRight: {
        type: "number",
        default: "0"
    },
    textMarginBottom: {
        type: "number",
        default: "0"
    },
    textMarginLeft: {
        type: "number",
        default: "0"
    },
    textMarginTopTablet: {
        type: "number",
        default: "0"
    },
    textMarginRightTablet: {
        type: "number",
        default: "0"
    },
    textMarginBottomTablet: {
        type: "number",
        default: "0"
    },
    textMarginLeftTablet: {
        type: "number",
        default: "0"
    },
    textMarginTopMobile: {
        type: "number",
        default: "0"
    },
    textMarginRightMobile: {
        type: "number",
        default: "0"
    },
    textMarginBottomMobile: {
        type: "number",
        default: "0"
    },
    textMarginLeftMobile: {
        type: "number",
        default: "0"
    },
    textPaddingTop: {
        type: "number",
        default: "0"
    },
    textPaddingRight: {
        type: "number",
        default: "0"
    },
    textPaddingBottom: {
        type: "number",
        default: "0"
    },
    textPaddingLeft: {
        type: "number",
        default: "0"
    },
    textPaddingTopTablet: {
        type: "number",
        default: "0"
    },
    textPaddingRightTablet: {
        type: "number",
        default: "0"
    },
    textPaddingBottomTablet: {
        type: "number",
        default: "0"
    },
    textPaddingLeftTablet: {
        type: "number",
        default: "0"
    },
    textPaddingTopMobile: {
        type: "number",
        default: "0"
    },
    textPaddingRightMobile: {
        type: "number",
        default: "0"
    },
    textPaddingBottomMobile: {
        type: "number",
        default: "0"
    },
    textPaddingLeftMobile: {
        type: "number",
        default: "0"
    },
    valid: {
        type: "boolean",
        default: true
    }
}
