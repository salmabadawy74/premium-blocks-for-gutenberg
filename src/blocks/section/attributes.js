const attributes = {
    stretchSection: {
        type: "boolean",
        default: false
    },
    innerWidthType: {
        type: "string",
        default: "boxed"
    },
    isUpdated: {
        type: "boolean",
        default: false
    },
    horAlign: {
        type: "string",
        default: "center"
    },
    height: {
        type: "string",
        default: "min"
    },
    innerWidth: {
        type: "number"
    },
    minHeight: {
        type: "number"
    },
    minHeightUnit: {
        type: "string",
        default: 'px'
    },
    vPos: {
        type: "string",
        default: "top"
    },
    block_id: {
        type: "string"
    },
    hideDesktop: {
        type: "boolean",
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
    marginTop: {
        type: "number"
    },
    marginBottom: {
        type: "number"
    },
    marginLeft: {
        type: "number"
    },
    marginRight: {
        type: "number"
    },
    paddingTop: {
        type: "number",
        default: '100'
    },
    paddingRight: {
        type: "number"
    },
    paddingBottom: {
        type: "number",
        default: '100'
    },
    paddingLeft: {
        type: "number"
    },
    containerStyles: {
        type: "array",
        default: [
            {
                containerBack: '',
                opacity: 1,
                backgroundImageID: '',
                backgroundImageURL: '',
                backgroundRepeat: 'no-reapet',
                backgroundPosition: 'top center',
                backgroundSize: 'auto',
                fixed: false,
                borderType: "none",
                borderWidth: 1,
                borderRadius: '',
                borderColor: '',
                shadowColor: '',
                shadowBlur: '0',
                shadowHorizontal: '0',
                shadowVertical: '0',
                shadowPosition: '',
                marginUnit: 'px',
                paddingUnit: 'px',
                gradientColorOne: '',
                gradientLocationOne: '0',
                gradientColorTwo: '',
                gradientLocationTwo: '100',
                gradientType: 'linear',
                gradientAngle: '180',
                gradientPosition: 'center center',
                videoSource: 'local',
                bgExternalVideo: '',
                videoURL: '',
                videoID: '',
                bgVideoFallbackID: '',
                bgVideoFallbackURL: ''
            }
        ]
    },
    backgroundType: {
        type: "string",
        default: ""
    },
    marginTTablet: {
        type: "number"
    },
    marginRTablet: {
        type: "number"
    },
    marginBTablet: {
        type: "number"
    },
    marginLTablet: {
        type: "number"
    },
    marginTMobile: {
        type: "number"
    },
    marginRMobile: {
        type: "number"
    },
    marginBMobile: {
        type: "number"
    },
    marginLMobile: {
        type: "number"
    },
    paddingTTablet: {
        type: "number"
    },
    paddingRTablet: {
        type: "number"
    },
    paddingBTablet: {
        type: "number"
    },
    paddingLTablet: {
        type: "number"
    },
    paddingTMobile: {
        type: "number"
    },
    paddingRMobile: {
        type: "number"
    },
    paddingLMobile: {
        type: "number"
    },
    paddingBMobile: {
        type: "number"
    },
    shapeTop: {
        type: 'object',
        default: {
            openShape: 0,
            color: '#006fbf',
            shapeType: 'top',
            width: { unit: '%' },
            height: { unit: 'px' },
        },
        style: [{ selector: '{{QUBELY}} .premium-shape-divider.premium-top-shape' }]
    },
    shapeBottom: {
        type: 'object',
        default: {
            openShape: 0,
            color: '#006fbf',
            shapeType: 'bottom',
            width: { unit: '%' },
            height: { unit: 'px' },
        },
        style: [{ selector: '{{QUBELY}} .premium-shape-divider.premium-top-shape' }]
    },
    animation: {
        type: 'object',
        default: {}
    },

}
export default attributes