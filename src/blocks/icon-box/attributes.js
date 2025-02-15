const { __ } = wp.i18n;
const attributes = {
    block_id: {
        type: "string"
    },
    borderIconBox: {
        type: "boolean",
        default: false
    },
    btnBorderIconBox: {
        type: "boolean",
        default: false
    },
    align: {
        type: "string",
        default: "center"
    },
    iconImage: {
        type: "string",
        default: "icon"
    },
    iconImgId: {
        type: "string"
    },
    iconImgUrl: {
        type: "string"
    },
    hoverEffect: {
        type: "string",
        default: "none"
    },
    iconChecked: {
        type: "boolean",
        default: true
    },
    iconPos: {
        type: "string",
        default: "block"
    },
    iconHPos: {
        type: "string",
        default: "before"
    },
    iconVPos: {
        type: "string",
        default: "center"
    },
    iconSize: {
        type: "number"
    },
    iconRadius: {
        type: "number"
    },
    iconColor: {
        type: "string"
    },
    iconBackColor: {
        type: "string"
    },
    selectedIcon: {
        type: "string",
        default: "dashicons dashicons-admin-site"
    },
    titleChecked: {
        type: "boolean",
        default: true
    },
    titleText: {
        type: "array",
        source: "children",
        selector: ".premium-icon-box__title",
        default: __("Awesome Title", 'premium-blocks-for-gutenberg')
    },
    descText: {
        type: "array",
        source: "children",
        selector: ".premium-icon-box__desc",
        default:
            "Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec id elit non mi porta gravida at eget metus."
    },
    descChecked: {
        type: "boolean",
        default: true
    },

    btnChecked: {
        type: "boolean",
        default: true
    },
    btnEffect: {
        type: "string",
        default: "none"
    },
    effectDir: {
        type: "string",
        default: "top"
    },
    btnTarget: {
        type: "boolean",
        default: false
    },
    btnText: {
        type: "array",
        source: "children",
        selector: ".premium-icon-box__btn",
        default: __("Click Here", 'premium-blocks-for-gutenberg')
    },
    btnLink: {
        type: "string",
        source: "attribute",
        attribute: "href",
        selector: ".premium-icon-box__btn"
    },

    btnHoverBorder: {
        type: "string"
    },
    classMigrate: {
        type: "boolean",
        default: false
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

    iconOpacity: {
        type: "number",
        default: "1"
    },

    titleStyles: {
        type: "array",
        default: [
            {

                titleTag: "H2",
                titleFont: __('Default', 'premium - blocks -for-gutenberg'),
                titleColor: '',
                titleSize: 20,
                titleSizeUnit: 'px',
                titleSizeTablet: 20,
                titleSizeMobile: 20,
                titleLine: '',
                titleLetter: '',
                titleStyle: '',
                titleUpper: false,
                titleWeight: '',
                titleShadowColor: '',
                titleShadowBlur: '0',
                titleShadowHorizontal: '0',
                titleShadowVertical: '0',
                titleMarginT: '',
                titleMarginB: '',
            }
        ]
    },
    descStyles: {
        type: "array",
        default: [
            {
                descFont: __('Default', 'premium-blocks-for-gutenberg'),
                descColor: '',
                descSize: 20,
                descSizeUnit: 'px',
                descSizeTablet: 20,
                descSizeMobile: 20,
                descLine: '',
                descWeight: '',
                descMarginT: '',
                descMarginB: '',
            }
        ]
    },
    btnStyles: {
        type: 'array',
        default: [
            {
                btnSize: 20,
                btnSizeUnit: 'px',
                btnSizeTablet: 20,
                btnSizeMobile: 20,
                btnLine: '',
                btnLetter: '',
                btnStyle: '',
                btnUpper: false,
                btnWeight: '',
                btnBorderType: 'none',
                btnBorderWidth: 1,
                btnBorderTop: '',
                btnBorderRight: '',
                btnBorderBottom: '',
                btnBorderLeft: '',
                btnBorderRadius: '',
                btnBorderColor: '',
                btnPadding: '',
                btnPaddingU: 'px',
                btnMarginT: '',
                btnMarginB: '',
                btnShadowColor: '',
                btnShadowBlur: '',
                btnShadowHorizontal: '0',
                btnShadowVertical: '0',
                btnShadowPosition: '',
                btnColor: '',
                btnHoverColor: '',
                btnBack: '',
                btnHoverBack: '',
                btnOpacity: 1,
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
                backgroundSize: "auto",
                fixed: false,
                borderType: "none",
                borderWidth: 1,
                borderRadius: '',
                borderColor: '',
                borderTop: '',
                borderRight: '',
                borderBottom: '',
                borderLeft: '',
                shadowColor: '',
                shadowBlur: '',
                shadowHorizontal: '',
                shadowVertical: '',
                shadowPosition: '',
                hoverShadowColor: '',
                hoverShadowBlur: '',
                hoverShadowHorizontal: '',
                hoverShadowVertical: '',
                hoverShadowPosition: '',
                marginT: '',
                marginR: '',
                marginB: '',
                marginL: '',
                paddingT: '',
                paddingR: '',
                paddingB: '',
                paddingL: '',
                paddingU: 'px',
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
    titleMarginT: {
        type: "number"
    },
    titleMarginB: {
        type: "number"
    },
    descMarginT: {
        type: "number"
    },
    descMarginB: {
        type: "number"
    },
    btnBorderWidth: {
        type: "number",
        default: "1"
    },
    btnBorderTop: {
        type: "number"
    },
    btnBorderRight: {
        type: "number"
    },
    btnBorderBottom: {
        type: "number"
    },
    btnBorderLeft: {
        type: "number"
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
    btnMarginT: {
        type: "number"
    },
    btnMarginB: {
        type: "number"
    },
    marginT: {
        type: "number"
    },
    marginR: {
        type: "number"
    },
    marginB: {
        type: "number"
    },
    marginL: {
        type: "number"
    },
    paddingT: {
        type: "number"
    },
    paddingR: {
        type: "number"
    },
    paddingB: {
        type: "number"
    },
    paddingL: {
        type: "number"
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
    paddingBMobile: {
        type: "number"
    },
    paddingLMobile: {
        type: "number"
    },
    btnMarginTTablet: {
        type: "number"
    },
    btnMarginBTablet: {
        type: "number"
    },
    btnMarginTMobile: {
        type: "number"
    },
    btnMarginBMobile: {
        type: "number"
    },
}
export default attributes;