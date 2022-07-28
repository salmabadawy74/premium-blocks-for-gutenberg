const LottieAttr = {
    lottieId: {
        type: "string",
    },
    block_id: {
        type: "string",
    },
    classMigrate: {
        type: "boolean",
        default: false,
    },
    lottieURl: {
        type: "string",
        default: "",
    },
    lottieJson: {
        type: "object",
    },
    loop: {
        type: "boolean",
        default: true,
    },
    reverse: {
        type: "boolean",
        default: false,
    },
    speed: {
        type: "number",
        default: "1",
    },
    trigger: {
        type: "string",
        default: "none",
    },
    bottom: {
        type: "number",
        default: "0",
    },
    top: {
        type: "number",
        default: "100",
    },
    scrollSpeed: {
        type: "number",
        default: "4",
    },

    rotate: {
        type: "number",
        default: 0,
    },
    lottieAlign: {
        type: "object",
        default: {
            Desktop: "center",
            Tablet: "center",
            Mobile: "center",
        },
    },
    link: {
        type: "boolean",
        default: false,
    },
    url: {
        type: "string",
    },
    target: {
        type: "boolean",
        default: false,
    },
    render: {
        type: "string",
        default: "svg",
    },
    hideDesktop: {
        type: "boolean",
        default: false,
    },
    hideTablet: {
        type: "boolean",
        default: false,
    },
    hideMobile: {
        type: "boolean",
        default: false,
    },
    lottieStyles: {
        type: "array",
        default: [
            {
                backColor: "",
                backOpacity: 1,
                backHColor: "",
                backHOpacity: 1,
            },
        ],
    },
    padding: {
        type: "object",
        default: {
            Desktop: {
                top: "",
                right: "",
                bottom: "",
                left: "",
            },
            Tablet: {
                top: "",
                right: "",
                bottom: "",
                left: "",
            },
            Mobile: {
                top: "",
                right: "",
                bottom: "",
                left: "",
            },
            unit: "px",
        },
    },
    border: {
        type: "object",
        default: {
            borderType: "none",
            borderColor: "",
            borderWidth: {
                Desktop: {
                    top: "",
                    right: "",
                    bottom: "",
                    left: "",
                },
                Tablet: {
                    top: "",
                    right: "",
                    bottom: "",
                    left: "",
                },
                Mobile: {
                    top: "",
                    right: "",
                    bottom: "",
                    left: "",
                },
            },
            borderRadius: {
                Desktop: {
                    top: "",
                    right: "",
                    bottom: "",
                    left: "",
                },
                Tablet: {
                    top: "",
                    right: "",
                    bottom: "",
                    left: "",
                },
                Mobile: {
                    top: "",
                    right: "",
                    bottom: "",
                    left: "",
                },
            },
        },
    },
    filter: {
        type: "object",
        default: {
            contrast: "100",
            blur: "0",
            bright: "100",
            saturation: "100",
            hue: "0",
        },
    },
    filterHover: {
        type: "object",
        default: {
            contrast: "100",
            blur: "0",
            bright: "100",
            saturation: "100",
            hue: "0",
        },
    },
    size: {
        type: "object",
        default: {
            Desktop: "200",
            Tablet: "200",
            Mobile: "200",
            unit: "px",
        },
    },

    // paddingT: {
    //     type: 'number'
    // },
    // paddingR: {
    //     type: 'number'
    // },
    // paddingB: {
    //     type: 'number'
    // },
    // paddingL: {
    //     type: 'number'
    // },
    // borderTop: {
    //     type: 'number'
    // },
    // borderRight: {
    //     type: 'number'
    // },
    // borderBottom: {
    //     type: 'number'
    // },
    // borderLeft: {
    //     type: 'number'
    // },
    // paddingTTablet: {
    //     type: 'number'
    // },
    // paddingRTablet: {
    //     type: 'number'
    // },
    // paddingBTablet: {
    //     type: 'number'
    // },
    // paddingLTablet: {
    //     type: 'number'
    // },
    // paddingTMobile: {
    //     type: 'number'
    // },
    // paddingRMobile: {
    //     type: 'number'
    // },
    // paddingBMobile: {
    //     type: 'number'
    // },
    // paddingLMobile: {
    //     type: 'number'
    // },
};
export default LottieAttr;
