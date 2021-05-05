const countdownAttrs = {
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
    }

}
export default countdownAttrs;