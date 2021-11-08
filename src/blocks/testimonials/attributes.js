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
    authorTag: {
        type: "string",
        default: "H3"
    },
    authorColor: {
        type: "string"
    },
    authorSize: {
        type: "number"
    },
    authorSizeUnit: {
        type: 'string',
        default: 'px'
    },
    authorSizeMobile: {
        type: "number"
    },
    authorSizeTablet: {
        type: "number"
    },
    authorLetter: {
        type: "number"
    },
    authorStyle: {
        type: "string"
    },
    authorUpper: {
        type: "boolean"
    },
    authorWeight: {
        type: "number",
        default: 500
    },
    authorComTag: {
        type: "string",
        default: "H4"
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
                quotOpacity: 1,

            }
        ]
    },
    containerStyles: {
        type: "array",
        default: [
            {
                backOpacity: 1,
                backColor: '',
                imageID: '',
                imageURL: '',
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top center",
                backgroundSize: 'auto',
                fixed: false,
                shadowColor: '',
                shadowBlur: '',
                shadowHorizontal: '',
                shadowVertical: '',
                shadowPosition: '',
                paddingTop: '',
                paddingRight: '',
                paddingBottom: '',
                paddingLeft: '',
                paddingUnit: 'px',
            }
        ]
    }

};
export default testimonialsAttrs;