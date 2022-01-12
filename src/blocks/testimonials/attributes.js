const testimonialsAttrs = {
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
    authorImgId: {
        type: "string"
    },
    authorImgUrl: {
        type: "string"
    },
    imgRadius: {
        type: "string",
        default: "50%"
    },
    imgSize: {
        type: "number"
    },
    imgBorder: {
        type: "number",
        default: "1"
    },
    imgBorderColor: {
        type: "string"
    },
    author: {
        type: "array",
        source: "children",
        selector: ".premium-testimonial__author",
        default: "John Doe"
    },
    authorStyles: {
        type: 'array',
        default: [
            {
                authorTag: "H3",
                authorColor: '',
                authorSize: '',
                authorSizeUnit: 'px',
                authorSizeMobile: '',
                authorSizeTablet: '',
                authorLetter: '',
                authorStyle: '',
                authorUpper: false,
                authorWeight: 500,
                authorComTag: "H4",
            }
        ]
    },

    paddingTop: {
        type: "number"
    },
    paddingRight: {
        type: "number"
    },
    paddingBottom: {
        type: "number"
    },
    paddingLeft: {
        type: "number"
    },
    text: {
        type: "array",
        source: "children",
        selector: ".premium-testimonial__text"
    },
    authorCom: {
        type: "array",
        source: "children",
        selector: ".premium-testimonial__author_comp",
        default: "Leap13"
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
    contentStyle: {
        type: "array",
        default: [
            {
                bodySizeUnit: 'px',
                bodySize: '',
                bodySizeMobile: '',
                bodySizeTablet: '',
                bodyColor: '',
                bodyLine: '',
                bodyTop: '',
                bodyBottom: '',
            }
        ]

    },
    companyStyles: {
        type: "array",
        default: [
            {
                authorComTag: 'H4',
                authorComSizeUnit: 'px',
                authorComColor: '',
                authorComSize: '',
                authorComSizeMobile: '',
                authorComSizeTablet: '',
                dashColor: '',
                urlCheck: false,
                urlText: '',
                urlTarget: false,

            }
        ]
    },
    quoteStyles: {
        type: "array",
        default: [
            {
                quotSize: '',
                quotColor: '',
                quotOpacity: 100,

            }
        ]
    },
    containerStyles: {
        type: "array",
        default: [
            {
                backOpacity: 1,
                containerBack: '',
                backgroundImageID: '',
                backgroundImageURL: '',
                backgroundRepeat: 'no-reapet',
                backgroundPosition: 'top center',
                backgroundSize: 'auto',
                fixed: false,
                shadowColor: '',
                shadowBlur: '',
                shadowHorizontal: '',
                shadowVertical: '',
                shadowPosition: '',
                paddingUnit: 'px',
                gradientColorOne: '',
                gradientLocationOne: '0',
                gradientColorTwo: '',
                gradientLocationTwo: '100',
                gradientType: 'linear',
                gradientAngle: '180',
                gradientPosition: 'center center'
            }
        ]
    },
    backgroundType: {
        type: "string",
        default: ""
    },

};
export default testimonialsAttrs;