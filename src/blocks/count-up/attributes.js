const attributes = {
    block_id: {
        type: "string"
    },
    borderCount: {
        type: "boolean",
        default: false
    },
    increment: {
        type: "string",
        default: 500
    },
    time: {
        type: "string",
        default: 1000
    },
    delay: {
        type: "string",
        default: 10
    },
    align: {
        type: "string",
        default: "center"
    },
    flexDir: {
        type: "string",
        default: "column"
    },
    numberSizeUnit: {
        type: "string",
        default: "px"
    },
    numberSize: {
        type: "number",
        default: 30
    },
    numberSizeTablet: {
        type: "number"
    },
    numberSizeMobile: {
        type: "number"
    },
    numberColor: {
        type: "string",
        default: "#6ec1e4"
    },
    numberWeight: {
        type: "number",
        default: 900
    },
    prefix: {
        type: "boolean",
        default: true
    },

    suffix: {
        type: "boolean",
        default: true
    },

    icon: {
        type: "string",
        default: "icon"
    },
    iconSpacing: {
        type: "number",
        default: 10
    },
    imageID: {
        type: "string"
    },
    imageURL: {
        type: "string"
    },
    iconType: {
        type: "string",
        default: "dash"
    },
    iconCheck: {
        type: "boolean",
        default: true
    },
    iconSize: {
        type: "number",
        default: 40
    },
    iconColor: {
        type: "string",
        default: "#6ec1e4"
    },
    selfAlign: {
        type: "string",
        default: "center"
    },
    titleCheck: {
        type: "boolean",
        default: true
    },
    titleTxt: {
        type: "string",
        default: "Premium Count Up"
    },
    faIcon: {
        type: "string",
        default: "dashicons-clock"
    },
    counterFamily: {
        type: "string"
    },



    hideDesktop: {
        type: 'boolean',
        default: false
    },
    hideTablet: {
        type: 'boolean',
        default: false
    },
    hideMobile: {
        type: 'boolean',
        default: false
    },
    titleStyles: {
        type: "array",
        default: [
            {
                titleFamily: '',
                titleSize: 20,
                titleSizeUnit: 'px',
                titleSizeTablet: '',
                titleSizeMobile: '',
                titleSpacing: '',
                titleStyle: '',
                titleUpper: false,
                titleColor: '',
                titleT: 1,
                titleB: 1,
                titleColor: '',
                titleWeight: 500,
            }
        ]
    },
    containerStyles: {
        type: "array",
        default: [
            {
                containerBack: '',
                containerOpacity: 1,
                backgroundImageID: '',
                backgroundImageURL: '',
                backgroundRepeat: 'no-reapet',
                backgroundPosition: 'top center',
                backgroundSize: 'auto',
                fixed: false,
                borderType: 'none',
                borderWidth: 1,
                borderTop: '',
                borderRight: '',
                borderBottom: '',
                borderLeft: '',
                borderRadius: 0,
                borderColor: '',
                shadowColor: '',
                shadowBlur: '0',
                shadowHorizontal: '0',
                shadowVertical: '0',
                shadowPosition: '',
                paddingT: '',
                paddingR: '',
                paddingB: '',
                paddingL: '',
                paddingU: '',
            }
        ]
    },
    suffixStyles: {
        type: 'array',
        default: [
            {
                suffixTxt: "Suffix",
                suffixSizeUnit: 'px',
                suffixSize: 20,
                suffixSizeTablet: '',
                suffixSizeMobile: '',
                suffixColor: '',
                suffixWeight: '',
                suffixGap: 2,
                suffixFamily: '',
            }
        ]
    },
    prefixStyles: {
        type: "array",
        default: [
            {
                prefixTxt: "Prefix",
                prefixSize: 20,
                prefixSizeUnit: 'px',
                prefixSizeTablet: '',
                prefixSizeMobile: '',
                prefixColor: '',
                prefixWeight: '',
                prefixGap: 2,
                prefixFamily: '',
            }
        ]
    }
}

export default attributes