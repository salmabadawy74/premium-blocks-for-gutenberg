const { __ } = wp.i18n;
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
        type: "string",
        default: __('Default')
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
    numberStyles: {
        type: "array",
        default: [
            {
                numberSizeUnit: "px",
                numberSize: 30,
                numberSizeTablet: '',
                numberSizeMobile: '',
                numberColor: "#6ec1e4",
                numberWeight: '',
            }
        ]
    },
    titleStyles: {
        type: "array",
        default: [
            {
                titleFamily: __('Default'),
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
                titleWeight: '',
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
                borderRadius: 0,
                borderColor: '',
                shadowColor: '',
                shadowBlur: '0',
                shadowHorizontal: '0',
                shadowVertical: '0',
                shadowPosition: '',
                paddingU: '',
            }
        ]
    },
    borderTop: {
        type: 'number',
        default: '0'
    },
    borderRight: {
        type: 'number',
        default: '0'
    },
    borderBottom: {
        type: 'number',
        default: '0'
    },
    borderLeft: {
        type: 'number',
        default: '0'
    },
    paddingT: {
        type: 'number',
        default: '0'
    },
    paddingR: {
        type: 'number',
        default: '0'
    },
    paddingB: {
        type: 'number',
        default: '0'
    },
    paddingL: {
        type: 'number',
        default: '0'
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
                suffixFamily: __('Default'),
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
                prefixFamily: __('Default'),
            }
        ]
    }
}

export default attributes