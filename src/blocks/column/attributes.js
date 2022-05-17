const attributes = {
    block_id: {
        type: 'string',
    },
    classMigrate: {
        type: 'boolean',
        default: false,
    },
    columnWidth: {
        type: "string"
    },
    columnWidthTablet: {
        type: "string"
    },
    columnWidthMobile: {
        type: "string"
    },
    containerBack: {
        type: "string"
    },
    backgroundType: {
        type: "string"
    },
    backgroundImageID: {
        type: "string"
    },
    backgroundImageURL: {
        type: "string"
    },
    backgroundRepeat: {
        type: "string",
        value: 'no-reapet'
    },
    backgroundPosition: {
        type: "string",
        value: 'top center'
    },
    backgroundSize: {
        type: "string",
        value: 'auto'
    },
    fixed: {
        type: 'boolean',
        default: false
    },
    gradientColorOne: {
        type: "string",
    },
    gradientLocationOne: {
        type: 'string',
        default: '0'
    },
    gradientColorTwo: {
        type: "string",
    },
    gradientLocationTwo: {
        type: "string",
    },
    gradientAngle: {
        type: 'number',
        default: '180'
    },
    gradientPosition: {
        type: 'string',
        default: 'center center'
    },
    borderTop: {
        type: "number"
    },
    borderRight: {
        type: "number"
    },
    borderBottom: {
        type: "number"
    },
    borderLeft: {
        type: "number"
    },

    shadowColor: {
        type: 'string'
    },
    shadowBlur: {
        type: 'number',
        default: '0'
    },
    shadowHorizontal: {
        type: 'number',
        default: '0'
    },
    shadowVertical: {
        type: "number",
        default: '0'
    },
    shadowPosition: {
        type: 'string'
    },
    columnPadding: {
        type: 'object'
    },
    columnMargin: {
        type: "object"
    }
};

export default attributes;
