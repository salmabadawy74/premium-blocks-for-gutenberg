const unfoldAttr = {
    block_id: {
        type: "string"
    },
    classMigrate: {
        type: "boolean",
        default: false
    },
    showTitle: {
        type: "boolean",
        default: true
    },
    toggle: {
        type: "boolean",
        default: true
    },
    titleTxt: {
        type: "string",
        default: "Premium Unfold"
    },
    titleTag: {
        type: "string",
        default: 'h3'
    },
    content: {
        type: "string",
        default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    align: {
        type: "string",
        default: "left"
    },
    unfoldTxt: {
        type: "string",
        default: 'Show more'
    },
    foldTxt: {
        type: "string",
        default: 'Show Less'
    },
    showIcon: {
        type: "boolean",
        default: false
    },
    foldIcon: {
        type: "string",
        default: "dashicons dashicons-arrow-up-alt"
    },
    unfoldIcon: {
        type: "string",
        default: 'dashicons dashicons-arrow-down-alt'
    },
    iconPosition: {
        type: "string",
        default: 'before'
    },
    buttonSize: {
        type: "string",
        default: 'sm'
    },
    buttonPosition: {
        type: "string",
        default: 'inside'
    },
    buttonAlign: {
        type: "string",
        default: 'center'
    },
    fadeContent: {
        type: "boolean",
        default: true
    },
    fadeHeight: {
        type: "number",
        default: 30
    },
    fadeHeightTablet: {
        type: "number"
    },
    fadeHeightMobile: {
        type: "number"
    },
    fadeUnit: {
        type: "string",
        default: "px"
    },
    foldUnit: {
        type: "string",
        default: 'percent'
    },
    foldHeight: {
        type: "number",
        default: 60
    },
    foldHeightPx: {
        type: "number",
        default: 100
    },
    foldDuration: {
        type: "string",
        default: 'fast'
    },
    foldSecond: {
        type: "number",
        default: 0.5
    },
    foldEasing: {
        type: "string",
        default: 'swing'
    },
    unfoldDuration: {
        type: "string",
        default: "fast"
    },
    unfoldSecond: {
        type: "number",
        default: 0.5
    },
    unfoldEasing: {
        type: "string",
        default: 'swing'
    },
    boxBackgroundImg: {
        type: "string"
    },
    boxBackgroundId: {
        type: "string"
    },
    boxBackgroundColor: {
        type: "string"
    },
    boxOpacity: {
        type: "number",
        default: 1
    },
    boxBorderType: {
        type: "string",
        default: "none"
    },
    boxBorderTop: {
        type: "number",
        default: 0
    },
    boxBorderRight: {
        type: "number",
        default: 0
    },
    boxBorderBottom: {
        type: "number",
        default: 0
    },
    boxBorderLeft: {
        type: "number",
        default: 0
    },
    boxBorderColor: {
        type: "string"
    },
    boxBorderRadius: {
        type: "number",
        default: 0
    },
    boxShadowHorizontal: {
        type: "number"
    },
    boxShadowVertical: {
        type: "number"
    },
    boxShadowBlur: {
        type: "number"
    },
    boxShadowPosition: {
        type: "string"
    },
    boxShadowColor: {
        type: "string"
    },
    boxMarginType: {
        type: "string",
        default: 'px'
    },
    boxMarginTop: {
        type: "number",
        default: 0
    },
    boxMarginRight: {
        type: "number",
        default: 0
    },
    boxMarginBottom: {
        type: "number",
        default: 0
    },
    boxMarginLeft: {
        type: "number",
        default: 0
    },
    boxMarginTopTablet: {
        type: "number",
        default: 0
    },
    boxMarginRightTablet: {
        type: "number",
        default: 0
    },
    boxMarginBottomTablet: {
        type: "number",
        default: 0
    },
    boxMarginLeftTablet: {
        type: "number",
        default: 0
    },
    boxMarginTopMobile: {
        type: "number",
        default: 0
    },
    boxMarginRightMobile: {
        type: "number",
        default: 0
    },
    boxMarginBottomMobile: {
        type: "number",
        default: 0
    },
    boxMarginLeftMobile: {
        type: "number",
        default: 0
    },
    boxPaddingType: {
        type: "string",
        default: 'px'
    },
    boxPaddingTop: {
        type: "number",
        default: 0
    },
    boxPaddingRight: {
        type: "number",
        default: 0
    },
    boxPaddingBottom: {
        type: "number",
        default: 0
    },
    boxPaddingLeft: {
        type: "number",
        default: 0
    },
    boxPaddingTopTablet: {
        type: "number",
        default: 0
    },
    boxPaddingRightTablet: {
        type: "number",
        default: 0
    },
    boxPaddingBottomTablet: {
        type: "number",
        default: 0
    },
    boxPaddingLeftTablet: {
        type: "number",
        default: 0
    },
    boxPaddingTopMobile: {
        type: "number",
        default: 0
    },
    boxPaddingRightMobile: {
        type: "number",
        default: 0
    },
    boxPaddingBottomMobile: {
        type: "number",
        default: 0
    },
    boxPaddingLeftMobile: {
        type: "number",
        default: 0
    },
    boxBackgroundImgH: {
        type: "string"
    },
    boxBackgroundPosition: {
        type: "string",
        default: "center center"
    },
    boxBackgroundRepeat: {
        type: "string",
        default: "no-repeat"
    },
    boxBackgroundSize: {
        type: "string",
        default: "auto"
    },
    boxFixed: {
        type: "boolean",
        default: false
    },
    boxBackgroundIdH: {
        type: "string"
    },
    boxBackgroundColorH: {
        type: "string"
    },
    boxOpacityH: {
        type: "number",
        default: 1
    },
    boxBackgroundPositionH: {
        type: "string",
        default: "center center"
    },
    boxBackgroundRepeatH: {
        type: "string",
        default: "no-repeat"
    },
    boxBackgroundSizeH: {
        type: "string",
        default: "auto"
    },
    boxFixedH: {
        type: "boolean",
        default: false
    },
    boxBorderTypeH: {
        type: "string",
        default: "none"
    },
    boxBorderTopH: {
        type: "number",
        default: 0
    },
    boxBorderRightH: {
        type: "number",
        default: 0
    },
    boxBorderBottomH: {
        type: "number",
        default: 0
    },
    boxBorderLeftH: {
        type: "number",
        default: 0
    },
    boxBorderRadiusH: {
        type: "number",
        default: 0
    },
    boxShadowColorH: {
        type: "string"
    },
    boxShadowHorizontalH: {
        type: "number"
    },
    boxShadowVerticalH: {
        type: "number"
    },
    boxShadowBlurH: {
        type: "number"
    },
    boxShadowPositionH: {
        type: "string"
    },
    boxMarginTypeH: {
        type: "string",
        default: 'px'
    },
    boxMarginTopH: {
        type: "number",
        default: 0
    },
    boxMarginRightH: {
        type: "number",
        default: 0
    },
    boxMarginBottomH: {
        type: "number",
        default: 0
    },
    boxMarginLeftH: {
        type: "number",
        default: 0
    },
    boxMarginTopTabletH: {
        type: "number",
        default: 0
    },
    boxMarginRightTabletH: {
        type: "number",
        default: 0
    },
    boxMarginBottomTabletH: {
        type: "number",
        default: 0
    },
    boxMarginLeftTabletH: {
        type: "number",
        default: 0
    },
    boxMarginTopMobileH: {
        type: "number",
        default: 0
    },
    boxMarginRightMobileH: {
        type: "number",
        default: 0
    },
    boxMarginBottomMobileH: {
        type: "number",
        default: 0
    },
    boxMarginLeftMobileH: {
        type: "number",
        default: 0
    },
    boxPaddingTypeH: {
        type: "string",
        default: 'px'
    },
    boxPaddingTopH: {
        type: "number",
        default: 0
    },
    boxPaddingRightH: {
        type: "number",
        default: 0
    },
    boxPaddingBottomH: {
        type: "number",
        default: 0
    },
    boxPaddingLeftH: {
        type: "number",
        default: 0
    },
    boxPaddingTopTabletH: {
        type: "number",
        default: 0
    },
    boxPaddingRightTabletH: {
        type: "number",
        default: 0
    },
    boxPaddingBottomTabletH: {
        type: "number",
        default: 0
    },
    boxPaddingLeftTabletH: {
        type: "number",
        default: 0
    },
    boxPaddingTopMobileH: {
        type: "number",
        default: 0
    },
    boxPaddingRightMobileH: {
        type: "number",
        default: 0
    },
    boxPaddingBottomMobileH: {
        type: "number",
        default: 0
    },
    boxPaddingLeftMobileH: {
        type: "number",
        default: 0
    },
    titleColor: {
        type: "string",
        default: "#54595F"
    },
    titleSizeUnit: {
        type: "string",
        default: 'px'
    },
    titleSize: {
        type: "number"
    },
    titleSizeTablet: {
        type: "number"
    },
    titleSizeMobile: {
        type: "number"
    },
    titleWeight: {
        type: "number"
    },
    titleStyle: {
        type: "string",
        default: "normal"
    },
    titleUpper: {
        type: "boolean",
        default: false
    },
    titleLine: {
        type: "number"
    },
    titleLetter: {
        type: "number"
    },
    titleBackgroundColor: {
        type: "string"
    },
    titleOpacity: {
        type: "number",
        default: 1
    },
    titleBackgroundId: {
        type: "string"
    },
    titleBackgroundImg: {
        type: "string"
    },
    titleBackgroundPosition: {
        type: "string",
        default: "center center"
    },
    titleBackgroundRepeat: {
        type: "string",
        default: "no-repeat"
    },
    titleBackgroundSize: {
        type: "string",
        default: "auto"
    },
    titleFixed: {
        type: "boolean",
        default: false
    },
    titleBorderType: {
        type: "string",
        default: "none"
    },
    titleBorderTop: {
        type: "number",
        default: 0
    },
    titleBorderRight: {
        type: "number",
        default: 0
    },
    titleBorderBottom: {
        type: "number",
        default: 0
    },
    titleBorderLeft: {
        type: "number",
        default: 0
    },
    titleBorderColor: {
        type: "string"
    },
    titleBorderRadius: {
        type: "number",
        default: 0
    },
    titleShadowColor: {
        type: "string"
    },
    titleShadowHorizontal: {
        type: "number"
    },
    titleShadowVertical: {
        type: "number"
    },
    titleShadowBlur: {
        type: "number"
    },
    titleShadowPosition: {
        type: "string"
    },
    titleMarginType: {
        type: "string",
        default: 'px'
    },
    titleMarginTop: {
        type: "number",
        default: 0
    },
    titleMarginRight: {
        type: "number",
        default: 0
    },
    titleMarginBottom: {
        type: "number",
        default: 0
    },
    titleMarginLeft: {
        type: "number",
        default: 0
    },
    titleMarginTopTablet: {
        type: "number",
        default: 0
    },
    titleMarginRightTablet: {
        type: "number",
        default: 0
    },
    titleMarginBottomTablet: {
        type: "number",
        default: 0
    },
    titleMarginLeftTablet: {
        type: "number",
        default: 0
    },
    titleMarginTopMobile: {
        type: "number",
        default: 0
    },
    titleMarginRightMobile: {
        type: "number",
        default: 0
    },
    titleMarginBottomMobile: {
        type: "number",
        default: 0
    },
    titleMarginLeftMobile: {
        type: "number",
        default: 0
    },
    titlePaddingType: {
        type: "string",
        default: 'px'
    },
    titlePaddingTop: {
        type: "number",
        default: 0
    },
    titlePaddingRight: {
        type: "number",
        default: 0
    },
    titlePaddingBottom: {
        type: "number",
        default: 0
    },
    titlePaddingLeft: {
        type: "number",
        default: 0
    },
    titlePaddingTopTablet: {
        type: "number",
        default: 0
    },
    titlePaddingRightTablet: {
        type: "number",
        default: 0
    },
    titlePaddingBottomTablet: {
        type: "number",
        default: 0
    },
    titlePaddingLeftTablet: {
        type: "number",
        default: 0
    },
    titlePaddingTopMobile: {
        type: "number",
        default: 0
    },
    titlePaddingRightMobile: {
        type: "number",
        default: 0
    },
    titlePaddingBottomMobile: {
        type: "number",
        default: 0
    },
    titlePaddingLeftMobile: {
        type: "number",
        default: 0
    },
    contentColor: {
        type: "string",
        default: `#6EC1E4`
    },
    contentSizeType: {
        type: "string",
        default: 'px'
    },
    contentSize: {
        type: "number"
    },
    contentSizeTablet: {
        type: "number"
    },
    contentSizeMobile: {
        type: "number"
    },
    contentWeight: {
        type: "number"
    },
    contentStyle: {
        type: "string",
        default: "normal"
    },
    contentUpper: {
        type: "boolean",
        default: false
    },
    contentLine: {
        type: "number"
    },
    contentLetter: {
        type: "number"
    },
    contentBackgroundColor: {
        type: "string"
    },
    contentOpacity: {
        type: "number",
        default: 1
    },
    contentBackgroundId: {
        type: "string"
    },
    contentBackgroundImg: {
        type: "string"
    },
    contentBackgroundPosition: {
        type: "string",
        default: "center center"
    },
    contentBackgroundRepeat: {
        type: "string",
        default: "no-repeat"
    },
    contentBackgroundSize: {
        type: "string",
        default: "auto"
    },
    contentFixed: {
        type: "boolean",
        default: false
    },
    contentBorderType: {
        type: "string",
        default: "none"
    },
    contentBorderTop: {
        type: "number",
        default: 0
    },
    contentBorderRight: {
        type: "number",
        default: 0
    },
    contentBorderBottom: {
        type: "number",
        default: 0
    },
    contentBorderLeft: {
        type: "number",
        default: 0
    },
    contentBorderColor: {
        type: "string"
    },
    contentBorderRadius: {
        type: "number",
        default: 0
    },
    contentShadowColor: {
        type: "string"
    },
    contentShadowHorizontal: {
        type: "number"
    },
    contentShadowVertical: {
        type: "number"
    },
    contentShadowBlur: {
        type: "number"
    },
    contentShadowPosition: {
        type: "string"
    },
    contentMarginType: {
        type: "string",
        default: 'px'
    },
    contentMarginTop: {
        type: "number",
        default: 0
    },
    contentMarginRight: {
        type: "number",
        default: 0
    },
    contentMarginBottom: {
        type: "number",
        default: 0
    },
    contentMarginLeft: {
        type: "number",
        default: 0
    },
    contentMarginTopTablet: {
        type: "number",
        default: 0
    },
    contentMarginRightTablet: {
        type: "number",
        default: 0
    },
    contentMarginBottomTablet: {
        type: "number",
        default: 0
    },
    contentMarginLeftTablet: {
        type: "number",
        default: 0
    },
    contentMarginTopMobile: {
        type: "number",
        default: 0
    },
    contentMarginRightMobile: {
        type: "number",
        default: 0
    },
    contentMarginBottomMobile: {
        type: "number",
        default: 0
    },
    contentMarginLeftMobile: {
        type: "number",
        default: 0
    },
    contentPaddingType: {
        type: "string",
        default: 'px'
    },
    contentPaddingTop: {
        type: "number",
        default: 0
    },
    contentPaddingRight: {
        type: "number",
        default: 0
    },
    contentPaddingBottom: {
        type: "number",
        default: 0
    },
    contentPaddingLeft: {
        type: "number",
        default: 0
    },
    contentPaddingTopTablet: {
        type: "number",
        default: 0
    },
    contentPaddingRightTablet: {
        type: "number",
        default: 0
    },
    contentPaddingBottomTablet: {
        type: "number",
        default: 0
    },
    contentPaddingLeftTablet: {
        type: "number",
        default: 0
    },
    contentPaddingTopMobile: {
        type: "number",
        default: 0
    },
    contentPaddingRightMobile: {
        type: "number",
        default: 0
    },
    contentPaddingBottomMobile: {
        type: "number",
        default: 0
    },
    contentPaddingLeftMobile: {
        type: "number",
        default: 0
    },
    btnSizeUnit: {
        type: "string",
        default: "px"
    },
    btnSize: {
        type: "number"
    },
    btnSizeTablet: {
        type: "number"
    },
    btnSizeMobile: {
        type: "number"
    },
    btnStyle: {
        type: "string"
    },
    btnWeight: {
        type: "number"
    },
    btnUpper: {
        type: "boolean",
        default: false
    },
    btnLine: {
        type: "number"
    },
    btnLetter: {
        type: "number"
    },
    btnColor: {
        type: "string",
        default: "#54595F"
    },
    iconColor: {
        type: "string"
    },
    iconColorH: {
        type: "string"
    },
    btnBackgroundColor: {
        type: "string",
        default: '#6ec1e4'
    },
    btnOpacity: {
        type: "number",
        default: 1
    },
    btnBorderType: {
        type: "string",
        default: "none"
    },
    btnBorderTop: {
        type: "number",
        default: 0
    },
    btnBorderRight: {
        type: "number",
        default: 0
    },
    btnBorderBottom: {
        type: "number",
        default: 0
    },
    btnBorderLeft: {
        type: "number",
        default: 0
    },
    btnBorderColor: {
        type: "string"
    },
    btnBorderRadius: {
        type: "number",
        default: 0
    },
    iconShadowColor: {
        type: "string"
    },
    iconShadowBlur: {
        type: "number"
    },
    iconShadowHorizontal: {
        type: "number"
    },
    iconShadowVertical: {
        type: "number"
    },
    iconShadowColorH: {
        type: "string"
    },
    iconShadowBlurH: {
        type: "number"
    },
    iconShadowHorizontalH: {
        type: "number"
    },
    iconShadowVerticalH: {
        type: "number"
    },
    btnTxtShadowColor: {
        type: "string"
    },
    btnTxtShadowBlur: {
        type: "number"
    },
    btnTxtShadowHorizontal: {
        type: "number"
    },
    btnTxtShadowVertical: {
        type: "number"
    },
    btnShadowColor: {
        type: "string"
    },
    btnShadowBlur: {
        type: "number"
    },
    btnShadowHorizontal: {
        type: 'number'
    },
    btnShadowVertical: {
        type: "number"
    },
    btnShadowPosition: {
        type: "string"
    },
    btnMarginType: {
        type: "string",
        default: "px"
    },
    btnMarginTop: {
        type: "number",
        default: 0
    },
    btnMarginRight: {
        type: "number",
        default: 0
    },
    btnMarginBottom: {
        type: "number",
        default: 0
    },
    btnMarginLeft: {
        type: "number",
        default: 0
    },
    btnMarginTopTablet: {
        type: "number",
        default: 0
    },
    btnMarginRightTablet: {
        type: "number",
        default: 0
    },
    btnMarginBottomTablet: {
        type: "number",
        default: 0
    },
    btnMarginLeftTablet: {
        type: "number",
        default: 0
    },
    btnMarginTopMobile: {
        type: "number",
        default: 0
    },
    btnMarginRightMobile: {
        type: "number",
        default: 0
    },
    btnMarginBottomMobile: {
        type: "number",
        default: 0
    },
    btnMarginLeftMobile: {
        type: "number",
        default: 0
    },
    btnPaddingTop: {
        type: "number",
        default: 0
    },
    btnPaddingRight: {
        type: "number",
        default: 0
    },
    btnPaddingBottom: {
        type: "number",
        default: 0
    },
    btnPaddingLeft: {
        type: "number",
        default: 0
    },
    btnPaddingTopTablet: {
        type: "number",
        default: 0
    },
    btnPaddingRightTablet: {
        type: "number",
        default: 0
    },
    btnPaddingBottomTablet: {
        type: "number",
        default: 0
    },
    btnPaddingLeftTablet: {
        type: "number",
        default: 0
    },
    btnPaddingTopMobile: {
        type: "number",
        default: 0
    },
    btnPaddingRightMobile: {
        type: "number",
        default: 0
    },
    btnPaddingBottomMobile: {
        type: "number",
        default: 0
    },
    btnPaddingLeftMobile: {
        type: "number",
        default: 0
    },
    btnPaddingType: {
        type: "string"
    },
    btnColorH: {
        type: "string"
    },
    btnBackgroundColorH: {
        type: "string",
        default: '#716F6F'
    },
    btnOpacityH: {
        type: "number",
        default: 1
    },
    btnBorderTypeH: {
        type: "string",
        default: "px"
    },
    btnBorderTopH: {
        type: "number",
        default: 0
    },
    btnBorderRightH: {
        type: "number",
        default: 0
    },
    btnBorderBottomH: {
        type: "number",
        default: 0
    },
    btnBorderLeftH: {
        type: "number",
        default: 0
    },
    btnBorderColorH: {
        type: "string"
    },
    btnBorderRadiusH: {
        type: "number",
        default: 0
    },
    btnTxtShadowColorH: {
        type: "string"
    },
    btnTxtShadowBlurH: {
        type: "number",
        default: 0
    },
    btnTxtShadowHorizontalH: {
        type: "number",
        default: 0
    },
    btnTxtShadowVerticalH: {
        type: "number",
        default: 0
    },
    btnShadowColorH: {
        type: "string"
    },
    btnShadowBlurH: {
        type: "number"
    },
    btnShadowHorizontalH: {
        type: "number",
        default: 0
    },
    btnShadowVerticalH: {
        type: "number",
        default: 0
    },
    btnShadowPositionH: {
        type: "string"
    },
    btnMarginTypeH: {
        type: "string",
        default: "px"
    },
    btnMarginTopH: {
        type: "number",
        default: 0
    },
    btnMarginRightH: {
        type: "number",
        default: 0
    },
    btnMarginBottomH: {
        type: "number",
        default: 0
    },
    btnMarginLeftH: {
        type: "number",
        default: 0
    },
    btnMarginTopTabletH: {
        type: "number",
        default: 0
    },
    btnMarginRightTabletH: {
        type: "number",
        default: 0
    },
    btnMarginBottomTabletH: {
        type: "number",
        default: 0
    },
    btnMarginLeftTabletH: {
        type: "number",
        default: 0
    },
    btnMarginTopMobileH: {
        type: "number",
        default: 0
    },
    btnMarginRightMobileH: {
        type: "number",
        default: 0
    },
    btnMarginBottomMobileH: {
        type: "number",
        default: 0
    },
    btnMarginLeftMobileH: {
        type: "number",
        default: 0
    },
    btnPaddingTopH: {
        type: "number",
        default: 0
    },
    btnPaddingRightH: {
        type: "number",
        default: 0
    },
    btnPaddingBottomH: {
        type: "number",
        default: 0
    },
    btnPaddingLeftH: {
        type: "number",
        default: 0
    },
    btnPaddingTopTabletH: {
        type: "number",
        default: 0
    },
    btnPaddingRightTabletH: {
        type: "number",
        default: 0
    },
    btnPaddingBottomTabletH: {
        type: "number",
        default: 0
    },
    btnPaddingLeftTabletH: {
        type: "number",
        default: 0
    },
    btnPaddingTopMobileH: {
        type: "number",
        default: 0
    },
    btnPaddingRightMobileH: {
        type: "number",
        default: 0
    },
    btnPaddingBottomMobileH: {
        type: "number",
        default: 0
    },
    btnPaddingLeftMobileH: {
        type: "number",
        default: 0
    },
    btnPaddingTypeH: {
        type: "string",
        default: "px"
    },
    fadeBackgroundColor: {
        type: "string"
    },
    fadeOpacity: {
        type: "number",
        default: 1
    },
    fadeBackgroundId: {
        type: "string"
    },
    fadeBackgroundImg: {
        type: "string"
    },
    fadeBackgroundPosition: {
        type: "string",
        default: 'center center'
    },
    fadeBackgroundRepeat: {
        type: "string",
        default: "no-repeat"
    },
    fadeBackgroundSize: {
        type: "string",
        default: 'auto'
    },
    fadeFixed: {
        type: "boolean",
        default: false
    },
    fadeBorderType: {
        type: "string",
        default: "px"
    },
    fadeBorderTop: {
        type: "number",
        default: 0
    },
    fadeBorderRight: {
        type: "number",
        default: 0
    },
    fadeBorderBottom: {
        type: "number",
        default: 0
    },
    fadeBorderLeft: {
        type: "number",
        default: 0
    },
    fadeBorderColor: {
        type: "string"
    },
    fadeBorderRadius: {
        type: "number",
        default: 0
    },
    fadePaddingTop: {
        type: "number",
        default: 0
    },
    fadePaddingRight: {
        type: "number",
        default: 0
    },
    fadePaddingBottom: {
        type: "number",
        default: 0
    },
    fadePaddingLeft: {
        type: "number",
        default: 0
    },
    fadePaddingTopTablet: {
        type: "number",
        default: 0
    },
    fadePaddingRightTablet: {
        type: "number",
        default: 0
    },
    fadePaddingBottomTablet: {
        type: "number",
        default: 0
    },
    fadePaddingLeftTablet: {
        type: "number",
        default: 0
    },
    fadePaddingTopMobile: {
        type: "number",
        default: 0
    },
    fadePaddingRightMobile: {
        type: "number",
        default: 0
    },
    fadePaddingBottomMobile: {
        type: "number",
        default: 0
    },
    fadePaddingLeftMobile: {
        type: "number",
        default: 0
    },
    fadePaddingType: {
        type: "string",
        default: 'px'
    },
    toggle: {
        type: "boolean",
        default: false
    }
}
export default unfoldAttr;