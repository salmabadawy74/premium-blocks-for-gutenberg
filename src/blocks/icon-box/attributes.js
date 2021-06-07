const { __ } = wp.i18n;
const iconBoxAttrs = {
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
        default: "top"
    },
    iconHPos: {
        type: "string",
        default: "top"
    },
    iconVPos: {
        type: "string",
        default: "center"
    },
    iconSize: {
        type: "number",
        default: "60"
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
        default: __("Awesome Title")
    },
    titleTag: {
        type: "string",
        default: "H2"
    },
    titleFont: {
        type: "string"
    },
    titleColor: {
        type: "string"
    },
    titleSize: {
        type: "number"
    },
    titleSizeUnit: {
        type: 'string',
        default: 'px'
    },
    titleSizeTablet: {
        type: 'number',
    },
    titleSizeMobile: {
        type: 'number'
    },
    titleLine: {
        type: "number"
    },
    titleLetter: {
        type: "number"
    },
    titleStyle: {
        type: "string"
    },
    titleUpper: {
        type: "boolean"
    },
    titleWeight: {
        type: "number",
        default: 500
    },
    titleShadowColor: {
        type: "string"
    },
    titleShadowBlur: {
        type: "number",
        default: "0"
    },
    titleShadowHorizontal: {
        type: "number",
        default: "0"
    },
    titleShadowVertical: {
        type: "number",
        default: "0"
    },
    titleMarginT: {
        type: "number"
    },
    titleMarginB: {
        type: "number"
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
    descFont: {
        type: "string"
    },
    descColor: {
        type: "string"
    },
    descSize: {
        type: "number",
        default: '20'
    },
    descSizeUnit: {
        type: "string",
        default: 'px'
    },
    descSizeTablet: {
        type: "number",
        default: '20'
    },
    descSizeMobile: {
        type: "number",
        default: '20'
    },
    descLine: {
        type: "number"
    },
    descWeight: {
        type: "number",
        default: 500
    },
    descMarginT: {
        type: "number"
    },
    descMarginB: {
        type: "number"
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
        default: __("Click Here")
    },
    btnLink: {
        type: "string",
        source: "attribute",
        attribute: "href",
        selector: ".premium-icon-box__btn"
    },
    btnColor: {
        type: "string",
        default: "#54595F"
    },
    btnHoverColor: {
        type: "string"
    },
    btnBack: {
        type: "string"
    },
    btnHoverBack: {
        type: "string"
    },
    btnHoverBorder: {
        type: "string"
    },
    btnSize: {
        type: "number",
        default: '20'
    },
    btnSizeUnit: {
        type: "string",
        default: "px"
    },
    btnSizeTablet: {
        type: "number",
        default: '20'
    },
    btnSizeMobile: {
        type: "number",
        default: '20'
    },
    btnLine: {
        type: "number"
    },
    btnLetter: {
        type: "number"
    },
    btnStyle: {
        type: "string"
    },
    btnUpper: {
        type: "boolean"
    },
    btnWeight: {
        type: "number",
        default: 500
    },
    btnBorderType: {
        type: "string",
        default: "none"
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
    btnBorderRadius: {
        type: "number"
    },
    btnBorderColor: {
        type: "string"
    },
    btnPadding: {
        type: "number"
    },
    btnPaddingU: {
        type: "string"
    },
    btnMarginT: {
        type: "number"
    },
    btnMarginB: {
        type: "number"
    },
    btnShadowColor: {
        type: "string"
    },
    btnShadowBlur: {
        type: "number",
        default: "0"
    },
    btnShadowHorizontal: {
        type: "number",
        default: "0"
    },
    btnShadowVertical: {
        type: "number",
        default: "0"
    },
    btnShadowPosition: {
        type: "string",
        default: ""
    },
    imageID: {
        type: "string"
    },
    imageURL: {
        type: "string"
    },
    backColor: {
        type: "string",
        default: '#6EC1E4'
    },
    backgroundRepeat: {
        type: "string",
        default: "repeat"
    },
    backgroundPosition: {
        type: "string",
        default: "top center"
    },
    backgroundSize: {
        type: "string",
        default: "auto"
    },
    fixed: {
        type: "boolean",
        default: false
    },
    borderType: {
        type: "string",
        default: "none"
    },
    borderWidth: {
        type: "number",
        default: "1"
    },
    borderRadius: {
        type: "number"
    },
    borderColor: {
        type: "string"
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
    paddingU: {
        type: "string",
        default: "px"
    },
    shadowColor: {
        type: "string"
    },
    shadowBlur: {
        type: "number",
        default: "0"
    },
    shadowHorizontal: {
        type: "number",
        default: "0"
    },
    shadowVertical: {
        type: "number",
        default: "0"
    },
    shadowPosition: {
        type: "string",
        default: ""
    },
    hoverShadowColor: {
        type: "string"
    },
    hoverShadowBlur: {
        type: "number"
    },
    hoverShadowHorizontal: {
        type: "number"
    },
    hoverShadowVertical: {
        type: "number"
    },
    hoverShadowPosition: {
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
    backOpacity: {
        type: "number",
        default: "1",
    },
    iconOpacity: {
        type: "number",
        default: "1"
    },
    btnOpacity: {
        type: "number",
        default: "1"
    },
    mouseTilt: {
        type: "boolean",
        default: false
    },
    reverse: {
        type: "boolean",
        default: false
    },
    lottieURL: {
        type: "string"
    },
    loopLottie: {
        type: "boolean",
        default: true
    },
    reverseLottie: {
        type: "boolean",
        default: false
    },
    titleLabel: {
        type: "string"
    },
    wholeLink: {
        type: "boolean",
        default: false
    },
    btnTxt: {
        type: "boolean",
        default: true
    },
    showBackIcon: {
        type: "boolean",
        default: true
    },
    keepBtn: {
        type: "boolean",
        default: false
    },
    btnPosition: {
        type: "string",
        default: 'bottom'
    },
    showIcon: {
        type: "boolean",
        default: false
    },
    btnIcon: {
        type: "string",
        default: "dashicons dashicons-admin-links"
    },
    iconPosition: {
        type: "string",
        default: 'after'
    },
    btnVerPos: {
        type: "string",
        default: "top"
    },
    btnIconU: {
        type: "string",
        default: 'px'
    },
    btnIconSize: {
        type: "number"
    },
    iconSpace: {
        type: "number"
    },
    hOffsetUnit: {
        type: "string",
        default: 'px'
    },
    hOffset: {
        type: "number",
        default: 0
    },
    hOffsetTablet: {
        type: "number",
        default: 0
    },
    hOffsetMobile: {
        type: "number",
        default: 0
    },
    vOffsetUnit: {
        type: "string",
        default: 'px'
    },
    vOffset: {
        type: "number",
        value: 0
    },
    vOffsetTablet: {
        type: "number",
        value: 0
    },
    vOffsetMobile: {
        type: "number",
        value: 0
    },
    iconBackOpacity: {
        type: "number",
        default: 1
    },
    iconBackOpacityTablet: {
        type: "number",
        default: 1
    },
    iconBackOpacityMobile: {
        type: "number",
        default: 1
    },
    iconRotate: {
        type: "number",
        default: 0
    },
    iconRotateTablet: {
        type: "number",
        default: 0
    },
    iconRotateMobile: {
        type: "number",
        default: 0
    },
    iconborderType: {
        type: "string",
        default: 'none'
    },
    iconborderTypeH: {
        type: "string",
        default: 'none'
    },
    iconborderTop: {
        type: "number"
    },
    iconborderTopH: {
        type: "number"
    },
    iconborderRight: {
        type: "number"
    },
    iconborderRightH: {
        type: "number"
    },
    iconborderBottom: {
        type: "number"
    },
    iconborderBottomH: {
        type: "number"
    },
    iconborderLeft: {
        type: "number"
    },
    iconborderLeftH: {
        type: "number"
    },
    iconborderColor: {
        type: "number"
    },
    iconborderColorH: {
        type: "number"
    },
    iconborderRadius: {
        type: "number"
    },
    iconborderRadiusH: {
        type: "number"
    },
    iconShadowColor: {
        type: "string"
    },
    iconShadowColorH: {
        type: "string"
    },
    iconShadowBlur: {
        type: "number"
    },
    iconShadowBlurH: {
        type: "number"
    },
    iconShadowHorizontal: {
        type: "number"
    },
    iconShadowHorizontalH: {
        type: "number"
    },
    iconShadowVertical: {
        type: "number"
    },
    iconShadowVerticalH: {
        type: "number"
    },
    iconShadowPosition: {
        type: "string",
        default: 'inset'
    },
    iconShadowPositionH: {
        type: "string",
        default: 'inset'
    },
    iconMarginType: {
        type: "string",
        default: 'px'
    },
    iconMarginTypeH: {
        type: "string",
        default: 'px'
    },
    iconMarginTop: {
        type: "number"
    },
    iconMarginTopH: {
        type: "number"
    },
    iconMarginTopTablet: {
        type: "number"
    },
    iconMarginTopTabletH: {
        type: "number"
    },
    iconMarginTopMobile: {
        type: "number"
    },
    iconMarginTopMobileH: {
        type: "number"
    },
    iconMarginRight: {
        type: "number"
    },
    iconMarginRightH: {
        type: "number"
    },
    iconMarginRightTablet: {
        type: "number"
    },
    iconMarginRightTabletH: {
        type: "number"
    },
    iconMarginRightMobile: {
        type: "number"
    },
    iconMarginRightMobileH: {
        type: "number"
    },
    iconMarginBottom: {
        type: "number"
    },
    iconMarginBottomH: {
        type: "number"
    },
    iconMarginBottomTablet: {
        type: "number"
    },
    iconMarginBottomTabletH: {
        type: "number"
    },
    iconMarginBottomMobile: {
        type: "number"
    },
    iconMarginBottomMobileH: {
        type: "number"
    },
    iconMarginLeft: {
        type: "number"
    },
    iconMarginLeftH: {
        type: "number"
    },
    iconMarginLeftTablet: {
        type: "number"
    },
    iconMarginLeftTabletH: {
        type: "number"
    },
    iconMarginLeftMobile: {
        type: "number"
    },
    iconMarginLeftMobileH: {
        type: "number"
    },
    iconPaddingType: {
        type: "string",
        default: 'px'
    },
    iconPaddingTypeH: {
        type: "string",
        default: 'px'
    },
    iconPaddingTop: {
        type: "number"
    },
    iconPaddingTopH: {
        type: "number"
    },
    iconPaddingTopTablet: {
        type: "number"
    },
    iconPaddingTopTabletH: {
        type: "number"
    },
    iconPaddingTopMobile: {
        type: "number"
    },
    iconPaddingTopMobileH: {
        type: "number"
    },
    iconPaddingRight: {
        type: "number"
    },
    iconPaddingRightH: {
        type: "number"
    },
    iconPaddingRightTablet: {
        type: "number"
    },
    iconPaddingRightTabletH: {
        type: "number"
    },
    iconPaddingRightMobile: {
        type: "number"
    },
    iconPaddingRightMobileH: {
        type: "number"
    },
    iconPaddingBottom: {
        type: "number"
    },
    iconPaddingBottomH: {
        type: "number"
    },
    iconPaddingBottomTablet: {
        type: "number"
    },
    iconPaddingBottomTabletH: {
        type: "number"
    },
    iconPaddingBottomMobile: {
        type: "number"
    },
    iconPaddingBottomMobileH: {
        type: "number"
    },
    iconPaddingLeft: {
        type: "number"
    },
    iconPaddingLeftH: {
        type: "number"
    },
    iconPaddingLeftTablet: {
        type: "number"
    },
    iconPaddingLeftTabletH: {
        type: "number"
    },
    iconPaddingLeftMobile: {
        type: "number"
    },
    iconPaddingLeftMobileH: {
        type: "number"
    },
    titleBack: {
        type: "string"
    },
    titleOpacity: {
        type: "number",
        default: 1
    },
    titleBorderType: {
        type: "string",
        default: 'none'
    },
    titleBorderTop: {
        type: "number"
    },
    titleBorderRight: {
        type: "number"
    },
    titleBorderBottom: {
        type: "number"
    },
    titleBorderLeft: {
        type: "number"
    },
    titleBorderColor: {
        type: "string"
    },
    titleBorderRadius: {
        type: "number"
    },
    titleMarginType: {
        type: "string",
        default: "px"
    },
    titleMarginTop: {
        type: "number"
    },
    titleMarginRight: {
        type: "number"
    },
    titleMarginBottom: {
        type: "number"
    },
    titleMarginLeft: {
        type: "number"
    },
    titleMarginTopTablet: {
        type: "number"
    },
    titleMarginRightTablet: {
        type: "number"
    },
    titleMarginBottomTablet: {
        type: "number"
    },
    titleMarginLeftTablet: {
        type: "number"
    },
    titleMarginTopMobile: {
        type: "number"
    },
    titleMarginRightMobile: {
        type: "number"
    },
    titleMarginBottomMobile: {
        type: "number"
    },
    titleMarginLeftMobile: {
        type: "number"
    },
    titlePaddingTop: {
        type: "number"
    },
    titlePaddingRight: {
        type: "number"
    },
    titlePaddingBottom: {
        type: "number"
    },
    titlePaddingLeft: {
        type: "number"
    },
    titlePaddingTopTablet: {
        type: "number"
    },
    titlePaddingRightTablet: {
        type: "number"
    },
    titlePaddingBottomTablet: {
        type: "number"
    },
    titlePaddingLeftTablet: {
        type: "number"
    },
    titlePaddingTopMobile: {
        type: "number"
    },
    titlePaddingRightMobile: {
        type: "number"
    },
    titlePaddingBottomMobile: {
        type: "number"
    },
    titlePaddingLeftMobile: {
        type: "number"
    },
    titlePaddingType: {
        type: "string",
        default: 'px'
    },
    labelColor: {
        type: "string"
    },
    labelSizeUnit: {
        type: "string",
        default: 'px'
    },
    labelSize: {
        type: "number"
    },
    labelSizeMobile: {
        type: "number"
    },
    labelSizeTablet: {
        type: "number"
    },
    labelWeight: {
        type: "number"
    },
    labelStyle: {
        type: "string"
    },
    labelLetter: {
        type: "number"
    },
    labelLine: {
        type: "number"
    },
    labelUpper: {
        type: "boolean",
        default: false
    },
    labelMarginType: {
        type: "string",
        default: 'px'
    },
    labelMarginTop: {
        type: "number"
    },
    labelMarginRight: {
        type: "number"
    },
    labelMarginBottom: {
        type: "number"
    },
    labelMarginLeft: {
        type: "number"
    },
    labelMarginTopTablet: {
        type: "number"
    },
    labelMarginRightTablet: {
        type: "number"
    },
    labelMarginBottomTablet: {
        type: "number"
    },
    labelMarginLeftTablet: {
        type: "number"
    },
    labelMarginTopMobile: {
        type: "number"
    },
    labelMarginRightMobile: {
        type: "number"
    },
    labelMarginBottomMobile: {
        type: "number"
    },
    labelMarginLeftMobile: {
        type: "number"
    },
    descColorH: {
        type: "string"
    },
    descShadowColor: {
        type: "string"
    },
    descShadowBlur: {
        type: "number"
    },
    descShadowHorizontal: {
        type: "number"
    },
    descShadowVertical: {
        type: "number"
    },
    descBackColor: {
        type: "string"
    },
    descOpacity: {
        type: "number",
        default: 1
    },
    descborderType: {
        type: "string",
        default: 'none'
    },
    descborderTop: {
        type: "number"
    },
    descborderRight: {
        type: "number"
    },
    descborderBottom: {
        type: "number"
    },
    descborderLeft: {
        type: "number"
    },
    descborderColor: {
        type: "string"
    },
    descborderRadius: {
        type: "number"
    },
    descMarginType: {
        type: "string",
        default: 'px'
    },
    descMarginTop: {
        type: "number"
    },
    descMarginRight: {
        type: "number"
    },
    descMarginBottom: {
        type: "number"
    },
    descMarginLeft: {
        type: "number"
    },
    descMarginTopTablet: {
        type: "number"
    },
    descMarginRightTablet: {
        type: "number"
    },
    descMarginBottomTablet: {
        type: "number"
    },
    descMarginLeftTablet: {
        type: "number"
    },
    descMarginTopMobile: {
        type: "number"
    },
    descMarginRightMobile: {
        type: "number"
    },
    descMarginBottomMobile: {
        type: "number"
    },
    descMarginLeftMobile: {
        type: "number"
    },
    descPaddingTop: {
        type: "number"
    },
    descPaddingRight: {
        type: "number"
    },
    descPaddingBottom: {
        type: "number"
    },
    descPaddingLeft: {
        type: "number"
    },
    descPaddingTopTablet: {
        type: "number"
    },
    descPaddingRightTablet: {
        type: "number"
    },
    descPaddingBottomTablet: {
        type: "number"
    },
    descPaddingLeftTablet: {
        type: "number"
    },
    descPaddingTopMobile: {
        type: "number"
    },
    descPaddingRightMobile: {
        type: "number"
    },
    descPaddingBottomMobile: {
        type: "number"
    },
    descPaddingLeftMobile: {
        type: "number"
    },
    descPaddingType: {
        type: "string",
        default: "px"
    },
    btnMarginType: {
        type: "string",
        default: 'px'
    },
    btnMarginTop: {
        type: "number"
    },
    btnMarginRight: {
        type: "number"
    },
    btnMarginBottom: {
        type: "number"
    },
    btnMarginLeft: {
        type: "number"
    },
    btnMarginTopTablet: {
        type: "number"
    },
    btnMarginRightTablet: {
        type: "number"
    },
    btnMarginBottomTablet: {
        type: "number"
    },
    btnMarginLeftTablet: {
        type: "number"
    },
    btnMarginTopMobile: {
        type: "number"
    },
    btnMarginRightMobile: {
        type: "number"
    },
    btnMarginBottomMobile: {
        type: "number"
    },
    btnMarginLeftMobile: {
        type: "number"
    },
    btnPaddingTop: {
        type: "number"
    },
    btnPaddingRight: {
        type: "number"
    },
    btnPaddingBottom: {
        type: "number"
    },
    btnPaddingLeft: {
        type: "number"
    },
    btnPaddingTopTablet: {
        type: "number"
    },
    btnPaddingRightTablet: {
        type: "number"
    },
    btnPaddingBottomTablet: {
        type: "number"
    },
    btnPaddingLeftTablet: {
        type: "number"
    },
    btnPaddingTopMobile: {
        type: "number"
    },
    btnPaddingRightMobile: {
        type: "number"
    },
    btnPaddingBottomMobile: {
        type: "number"
    },
    btnPaddingLeftMobile: {
        type: "number"
    },
    btnPaddingType: {
        type: "string",
        default: 'px'
    },
    btnColorH: {
        type: "string"
    },
    btnShadowColorH: {
        type: "string"
    },
    btnShadowBlurH: {
        type: "number"
    },
    btnShadowHorizontalH: {
        type: "number"
    },
    btnShadowVerticalH: {
        type: "number"
    },
    btnBackH: {
        type: "string"
    },
    btnOpacityH: {
        type: "number",
        default: 1
    },
    btnBorderTypeH: {
        type: "string",
        default: 'none'
    },
    btnBorderTopH: {
        type: "number"
    },
    btnBorderRightH: {
        type: "number"
    },
    btnBorderBottomH: {
        type: "number"
    },
    btnBorderLeftH: {
        type: "number"
    },
    btnBorderColorH: {
        type: "string"
    },
    btnBorderRadiusH: {
        type: "number"
    },
    btnMarginTypeH: {
        type: "string",
        default: 'px'
    },
    btnMarginTopH: {
        type: "number"
    },
    btnMarginRightH: {
        type: "number"
    },
    btnMarginBottomH: {
        type: "number"
    },
    btnMarginLeftH: {
        type: "number"
    },
    btnMarginTopTabletH: {
        type: "number"
    },
    btnMarginRightTabletH: {
        type: "number"
    },
    btnMarginBottomTabletH: {
        type: "number"
    },
    btnMarginLeftTabletH: {
        type: "number"
    },
    btnMarginTopMobileH: {
        type: "number"
    },
    btnMarginRightMobileH: {
        type: "number"
    },
    btnMarginBottomMobileH: {
        type: "number"
    },
    btnMarginLeftMobileH: {
        type: "number"
    },
    btnPaddingTopH: {
        type: "number"
    },
    btnPaddingRightH: {
        type: "number"
    },
    btnPaddingBottomH: {
        type: "number"
    },
    btnPaddingLeftH: {
        type: "number"
    },
    btnPaddingTopTabletH: {
        type: "number"
    },
    btnPaddingRightTabletH: {
        type: "number"
    },
    btnPaddingBottomTabletH: {
        type: "number"
    },
    btnPaddingLeftTabletH: {
        type: "number"
    },
    btnPaddingTopMobileH: {
        type: "number"
    },
    btnPaddingRightMobileH: {
        type: "number"
    },
    btnPaddingBottomMobileH: {
        type: "number"
    },
    btnPaddingLeftMobileH: {
        type: "number"
    },
    btnPaddingTypeH: {
        type: "string",
        default: 'px'
    },
    innerBack: {
        type: "string"
    },
    innerOpacity: {
        type: "number",
        default: 1
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
    innerBackH: {
        type: "string"
    },
    innerOpacityH: {
        type: "number",
        default: 1
    },
    imageIDH: {
        type: "number"
    },
    imageURLH: {
        type: "string"
    },
    backgroundPositionH: {
        type: "string"
    },
    backgroundRepeatH: {
        type: "string"
    },
    backgroundSizeH: {
        type: "string"
    },
    fixedH: {
        type: "boolean",
        default: false
    },
    borderTypeH: {
        type: "string",
        default: 'none'
    },
    borderTopH: {
        type: "number"
    },
    borderRightH: {
        type: "number"
    },
    borderBottomH: {
        type: "number"
    },
    borderLeftH: {
        type: "number"
    },
    borderColorH: {
        type: "string"
    },
    borderRadiusH: {
        type: "number"
    },
    marginTH: {
        type: "number"
    },
    marginRH: {
        type: "number"
    },
    marginBH: {
        type: "number"
    },
    marginLH: {
        type: "number"
    },
    marginTTabletH: {
        type: "number"
    },
    marginRTabletH: {
        type: "number"
    },
    marginBTabletH: {
        type: "number"
    },
    marginLTabletH: {
        type: "number"
    },
    marginTMobileH: {
        type: "number"
    },
    marginRMobileH: {
        type: "number"
    },
    marginBMobileH: {
        type: "number"
    },
    marginLMobileH: {
        type: "number"
    },
    paddingTH: {
        type: "number"
    },
    paddingRH: {
        type: "number"
    },
    paddingBH: {
        type: "number"
    },
    paddingLH: {
        type: "number"
    },
    paddingTTabletH: {
        type: "number"
    },
    paddingRTabletH: {
        type: "number"
    },
    paddingBTabletH: {
        type: "number"
    },
    paddingLTabletH: {
        type: "number"
    },
    paddingTMobileH: {
        type: "number"
    },
    paddingRMobileH: {
        type: "number"
    },
    paddingBMobileH: {
        type: "number"
    },
    paddingLMobileH: {
        type: "number"
    },
    paddingUH: {
        type: "string",
        default: 'px'
    },
    outerBack: {
        type: "string",
        default: '#6EC1E4'
    },
    outerOpacity: {
        type: "number",
        default: 1
    },
    outerImageID: {
        type: "string"
    },
    outerImageURL: {
        type: "string"
    },
    outerBackgroundPosition: {
        type: "string",
        default: "center center"
    },
    outerBackgroundRepeat: {
        type: "string",
        default: "repeat"
    },
    outerBackgroundSize: {
        type: "string",
        default: "auto"
    },
    outerFixed: {
        type: "boolean",
        default: false
    },
    outerBorderType: {
        type: "string",
        default: "none"
    },
    outerBorderTop: {
        type: "number"
    },
    outerBorderRight: {
        type: "number"
    },
    outerBorderBottom: {
        type: "number"
    },
    outerBorderLeft: {
        type: "number"
    },
    outerBorderColor: {
        type: "string"
    },
    outerBorderRadius: {
        type: "number"
    },
    outershadowColor: {
        type: "string"
    },
    outershadowBlur: {
        type: "number"
    },
    outershadowHorizontal: {
        type: "number"
    },
    outershadowVertical: {
        type: "number"
    },
    outershadowPosition: {
        type: "string"
    },
    outerMarginT: {
        type: "number"
    },
    outerMarginR: {
        type: "number"
    },
    outerMarginB: {
        type: "number"
    },
    outerMarginL: {
        type: "number"
    },
    outerMarginTTablet: {
        type: "number"
    },
    outerMarginRTablet: {
        type: "number"
    },
    outerMarginBTablet: {
        type: "number"
    },
    outerMarginLTablet: {
        type: "number"
    },
    outerMarginTMobile: {
        type: "number"
    },
    outerMarginRMobile: {
        type: "number"
    },
    outerMarginBMobile: {
        type: "number"
    },
    outerMarginLMobile: {
        type: "number"
    },
    outerPaddingT: {
        type: "number"
    },
    outerPaddingR: {
        type: "number"
    },
    outerPaddingB: {
        type: "number"
    },
    outerPaddingL: {
        type: "number"
    },
    outerPaddingTTablet: {
        type: "number"
    },
    outerPaddingRTablet: {
        type: "number"
    },
    outerPaddingBTablet: {
        type: "number"
    },
    outerPaddingLTablet: {
        type: "number"
    },
    outerPaddingTMobile: {
        type: "number"
    },
    outerPaddingRMobile: {
        type: "number"
    },
    outerPaddingBMobile: {
        type: "number"
    },
    outerPaddingLMobile: {
        type: "number"
    },
    outerPaddingU: {
        type: "string"
    },
    outerBackH: {
        type: "string"
    },
    outerOpacityH: {
        type: "number",
        default: 1
    },
    outerImageIDH: {
        type: "string"
    },
    outerImageURLH: {
        type: "string"
    },
    outerBackgroundPositionH: {
        type: "string",
        default: "center center"
    },
    outerBackgroundRepeatH: {
        type: "string",
        default: "repeat"
    },
    outerBackgroundSizeH: {
        type: "string",
        default: "auto"
    },
    outerFixedH: {
        type: "boolean",
        default: false
    },
    outerBorderTypeH: {
        type: "string",
        default: "none"
    },
    outerBorderTopH: {
        type: "number"
    },
    outerBorderRightH: {
        type: "number"
    },
    outerBorderBottomH: {
        type: "number"
    },
    outerBorderLeftH: {
        type: "number"
    },
    outerBorderColorH: {
        type: "string"
    },
    outerBorderRadiusH: {
        type: "number"
    },
    outerMarginTH: {
        type: "number"
    },
    outerMarginRH: {
        type: "number"
    },
    outerMarginBH: {
        type: "number"
    },
    outerMarginLH: {
        type: "number"
    },
    outerMarginTTabletH: {
        type: "number"
    },
    outerMarginRTabletH: {
        type: "number"
    },
    outerMarginBTabletH: {
        type: "number"
    },
    outerMarginLTabletH: {
        type: "number"
    },
    outerMarginTMobileH: {
        type: "number"
    },
    outerMarginRMobileH: {
        type: "number"
    },
    outerMarginBMobileH: {
        type: "number"
    },
    outerMarginLMobileH: {
        type: "number"
    },
    outerPaddingTH: {
        type: "number"
    },
    outerPaddingRH: {
        type: "number"
    },
    outerPaddingBH: {
        type: "number"
    },
    outerPaddingLH: {
        type: "number"
    },
    outerPaddingTTabletH: {
        type: "number"
    },
    outerPaddingRTabletH: {
        type: "number"
    },
    outerPaddingBTabletH: {
        type: "number"
    },
    outerPaddingLTabletH: {
        type: "number"
    },
    outerPaddingTMobileH: {
        type: "number"
    },
    outerPaddingRMobileH: {
        type: "number"
    },
    outerPaddingBMobileH: {
        type: "number"
    },
    outerPaddingLMobileH: {
        type: "number"
    },
    outerPaddingUH: {
        type: "string"
    },
    target: {
        type: "boolean",
        default: false
    }
};
export default iconBoxAttrs;