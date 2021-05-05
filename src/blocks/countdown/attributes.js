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
        default: "block"
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
        default: "transparent"
    },
    digitFontSize: {
        type: "number",
        default: "20"
    },
    digitFontWeight: {
        type: "string"
    },
    digitLetterSpacing: {
        type: "number",
        default: "0"
    },
    digitLineHeight: {
        type: "number",
        default: "1"
    },
    borderType: {
        type: "string",
        default: "none"
    },
    borderWidth: {
        type: "number",
        default: "0"
    },
    borderColor: {
        type: "string",
        default: "#000"
    },
    borderRadius: {
        type: "number",
        default: "0"
    },
    unitColor: {
        type: "string",
        default: "#000"
    },
    unitSize: {
        type: "number",
        default: "20"
    },
    unitWeight: {
        type: "string"
    },
    unitLetterSpacing: {
        type: "number",
        default: "0"
    },
    unitLineHeight: {
        type: "number",
        default: "2"
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
    unitSpace: {
        type: "number",
        default: "10"
    },
}
