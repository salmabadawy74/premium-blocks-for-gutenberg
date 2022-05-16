const { __ } = wp.i18n;
import classnames from "classnames"
const {
    Fragment,
} = wp.element

const {
    RichText
} = wp.blockEditor

const attributes = {
    block_id: {
        type: "string"
    },
    classMigrate: {
        type: "boolean",
        default: false
    },
    align: {
        type: "string",
        default: "left"
    },
    style: {
        type: "string",
        default: "style1"
    },
    title: {
        type: "string",
        default: "Premium Title"
    },
    iconValue: {
        type: "boolean",
        default: false
    },
    iconType: {
        type: "string",
        default: "icon"
    },
    icon: {
        type: "string",
        default: "fa fa-bars"
    },
    iconPosition: {
        type: "string",
        default: "before"
    },
    imageID: {
        type: "number"
    },
    imageURL: {
        type: "string",
        source: "attribute",
        attribute: "src",
        selector: ".premium-title-icon"
    },
    link: {
        type: "boolean",
        default: false
    },
    backgroundText: {
        type: "boolean",
        default: false
    },
    BackText: {
        type: "string",
        default: 'Awesome Title'
    },
    textWidth: {
        type: "number",
    },
    url: {
        type: "string",
        default: "#"
    },
    iconAlign: {
        type: "string",
        default: "center"
    },
    stripePosition: {
        type: "string",
        default: "top"
    },
    titleStyles: {
        type: "array",
        default: [{
            titleColor: "#6ec1e4",
            shinyColor: '#fff',
            blurColor: "#000",
            titleLetter: 0,
            titleLine: 0,
            titleStyle: 'normal',
            titleUpper: false,
            titleWeight: 600,
            titlefontSize: '',
            titlefontSizeType: "px",
            titlefontSizeMobile: '',
            titlefontSizeTablet: '',
            titleFontFamily: __('Default', 'premium-blocks-for-gutenberg'),
            titleborderType: "solid",
            titleborderRadius: 0,
            titleborderColor: '#6ec1e4',
            titleShadowColor: '',
            titleShadowBlur: '0',
            titleShadowHorizontal: '0',
            titleShadowVertical: '0',
            titleMarginType: 'px',
            titlePaddingType: 'px',
            BGColor: '#54595f',
            lineColor: "#6ec1e4",
            triangleColor: "#6ec1e4",
            stripeColor: "#6ec1e4",
            blurShadow: '120',
            animateDelay: '2',
            animateduration: '1',
        }]
    },
    titleBorderTop: {
        type: "number",
        default: "0"
    },
    titleBorderRight: {
        type: "number",
        default: "0"
    },
    titleBorderBottom: {
        type: "number",
        default: "3"
    },
    titleBorderLeft: {
        type: "number",
        default: 3
    },
    titleBorderUpdated: {
        type: "boolean",
        default: false
    },
    titleBorderWidth: {
        type: "number",
        default: "0"
    },
    stripeAlign: {
        type: "string",
        default: "center"
    },
    stripeStyles: {
        type: "array",
        default: [{
            stripeWidth: 120,
            stripeWidthTablet: 120,
            stripeWidthMobile: 120,
            stripeWidthType: "px",
            stripeHeight: 5,
            stripeHeightTablet: 5,
            stripeHeightMobile: 5,
            stripeHeightType: "px",
            stripeTopSpacing: 0,
            stripeTopSpacingTablet: 0,
            stripeTopSpacingMobile: 0,
            stripeTopSpacingType: "px",
            stripeBottomSpacing: 0,
            stripeBottomSpacingTablet: 0,
            stripeBottomSpacingMobile: 0,
            stripeBottomSpacingType: "px"
        }]
    },
    textStyles: {
        type: "array",
        default: [{
            textBackColor: "#6ec1e4",
            textBackfontSizeType: 'px',
            textBackLetter: 0,
            textBackLine: 0,
            textBackStyle: 'normal',
            textBackUpper: false,
            textBackWeight: 600,
            textBackfontSize: '',
            textBackfontSizeMobile: '',
            textBackfontSizeTablet: '',
            textBackFontFamily: __('Default', 'premium-blocks-for-gutenberg'),
            textBackshadowColor: '',
            textBackshadowBlur: '0',
            textBackshadowHorizontal: '0',
            textBackshadowVertical: '0',
            horizontalText: 0,
            horizontalTextTablet: 0,
            horizontalTextMobile: 0,
            horizontalTextType: "px",
            verticalText: 0,
            verticalTextTablet: 0,
            verticalTextMobile: 0,
            verticalTextType: "px",
            rotateText: 0,
            rotateTextTablet: 0,
            rotateTextMobile: 0
        }]
    },
    iconStyles: {
        type: "array",
        default: [{
            iconColor: "#6ec1e4",
            iconSize: "40",
            iconSizeTablet: "40",
            iconSizeMobile: "40",
            iconSizeType: "px",
            containerBack: '',
            backgroundImageID: '',
            backgroundImageURL: '',
            backgroundRepeat: 'no-reapet',
            backgroundPosition: 'top center',
            backgroundSize: 'auto',
            fixed: false,
            gradientLocationOne: '0',
            gradientColorTwo: '',
            gradientLocationTwo: '100',
            gradientType: 'linear',
            gradientAngle: '180',
            gradientPosition: 'center center',
            iconborderType: "none",
            iconborderRadius: 0,
            iconborderColor: '#6ec1e4',
            iconPaddingType: 'px',
            iconMarginType: 'px',
            iconshadowColor: '',
            iconshadowBlur: '0',
            iconshadowHorizontal: '0',
            iconshadowVertical: '0',
        }]
    },
    strokeStyles: {
        type: "array",
        default: [{
            stroke: false,
            strokeColor: "",
            strokeFull: 0,
            strokeFullTablet: 0,
            strokeFullMobile: 0
        }]
    },
    backgroundType: {
        type: "string",
        default: ""
    },
    iconBorderTop: {
        type: "number",
        default: "1"
    },
    iconBorderRight: {
        type: "number",
        default: "1"
    },
    iconBorderBottom: {
        type: "number",
        default: "1"
    },
    iconBorderLeft: {
        type: "number",
        default: "1"
    },
    iconBorderUpdated: {
        type: "boolean",
        default: false
    },
    iconBorderWidth: {
        type: "number",
        default: "1"
    },
    titleMarginT: {
        type: "number"
    },
    titleMarginR: {
        type: "number"
    },
    titleMarginB: {
        type: "number"
    },
    titleMarginL: {
        type: "number"
    },
    titleMarginTTablet: {
        type: "number"
    },
    titleMarginRTablet: {
        type: "number"
    },
    titleMarginBTablet: {
        type: "number"
    },
    titleMarginLTablet: {
        type: "number"
    },
    titleMarginTMobile: {
        type: "number"
    },
    titleMarginRMobile: {
        type: "number"
    },
    titleMarginBMobile: {
        type: "number"
    },
    titleMarginLMobile: {
        type: "number"
    },
    titlePaddingT: {
        type: "number",
        default: "0"
    },
    titlePaddingR: {
        type: "number",
        default: "0"
    },
    titlePaddingB: {
        type: "number",
        default: "0"
    },
    titlePaddingL: {
        type: "number",
        default: "0"
    },
    titlePaddingTTablet: {
        type: "number",
        default: "0"
    },
    titlePaddingRTablet: {
        type: "number",
        default: "0"
    },
    titlePaddingBTablet: {
        type: "number",
        default: "0"
    },
    titlePaddingLTablet: {
        type: "number",
        default: "0"
    },
    titlePaddingTMobile: {
        type: "number",
        default: "0"
    },
    titlePaddingRMobile: {
        type: "number",
        default: "0"
    },
    titlePaddingBMobile: {
        type: "number",
        default: "0"
    },
    titlePaddingLMobile: {
        type: "number",
        default: "0"
    },
    iconBGColor: {
        type: "string"
    },
    iconPaddingT: {
        type: "number",
        default: ""
    },
    iconPaddingR: {
        type: "number",
        default: ""
    },
    iconPaddingB: {
        type: "number",
        default: ""
    },
    iconPaddingL: {
        type: "number",
        default: ""
    },
    iconPaddingTTablet: {
        type: "number",
        default: ""
    },
    iconPaddingRTablet: {
        type: "number",
        default: ""
    },
    iconPaddingBTablet: {
        type: "number",
        default: ""
    },
    iconPaddingLTablet: {
        type: "number",
        default: ""
    },
    iconPaddingTMobile: {
        type: "number",
        default: ""
    },
    iconPaddingRMobile: {
        type: "number",
        default: ""
    },
    iconPaddingBMobile: {
        type: "number",
        default: ""
    },
    iconPaddingLMobile: {
        type: "number",
        default: ""
    },
    iconMarginT: {
        type: "number",
        default: ""
    },
    iconMarginR: {
        type: "number",
        default: ""
    },
    iconMarginB: {
        type: "number",
        default: ""
    },
    iconMarginL: {
        type: "number",
        default: ""
    },
    iconMarginTTablet: {
        type: "number",
        default: ""
    },
    iconMarginRTablet: {
        type: "number",
        default: ""
    },
    iconMarginBTablet: {
        type: "number",
        default: ""
    },
    iconMarginLTablet: {
        type: "number",
        default: ""
    },
    iconMarginTMobile: {
        type: "number",
        default: ""
    },
    iconMarginRMobile: {
        type: "number",
        default: ""
    },
    iconMarginBMobile: {
        type: "number",
        default: ""
    },
    iconMarginLMobile: {
        type: "number",
        default: ""
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
    z_index: {
        type: "number"
    },
    blend: {
        type: 'string'
    },
    lottieURl: {
        type: 'string'
    },
    loop: {
        type: 'boolean',
        default: true
    },
    reversedir: {
        type: 'boolean',
        default: false
    },
    target: {
        type: 'boolean',
        default: false
    },
    blend: {
        type: "string"
    },
    zIndex: {
        type: "number"
    },
    titleTag: {
        type: "string",
        default: "h2"
    },
}

const newAttributes = {
    titleMargin: {
        type: "object",
        default: {
            Desktop: {
                top: '',
                right: '',
                bottom: '',
                left: ''
            },
            Tablet: {
                top: '',
                right: '',
                bottom: '',
                left: ''
            },
            Mobile: {
                top: '',
                right: '',
                bottom: '',
                left: ''
            },
            unit: 'px'
        }
    },
    iconMargin: {
        type: "object",
        default: {
            Desktop: {
                top: '',
                right: '',
                bottom: '',
                left: ''
            },
            Tablet: {
                top: '',
                right: '',
                bottom: '',
                left: ''
            },
            Mobile: {
                top: '',
                right: '',
                bottom: '',
                left: ''
            },
            unit: 'px'
        }
    },
    titlePadding: {
        type: "object",
        default: {
            Desktop: {
                top: '',
                right: '',
                bottom: '',
                left: ''
            },
            Tablet: {
                top: '',
                right: '',
                bottom: '',
                left: ''
            },
            Mobile: {
                top: '',
                right: '',
                bottom: '',
                left: ''
            },
            unit: 'px'
        }
    },
    iconPadding: {
        type: "object",
        default: {
            Desktop: {
                top: '',
                right: '',
                bottom: '',
                left: ''
            },
            Tablet: {
                top: '',
                right: '',
                bottom: '',
                left: ''
            },
            Mobile: {
                top: '',
                right: '',
                bottom: '',
                left: ''
            },
            unit: 'px'
        }
    }
}

const deprecated = [
    {
        attributes: Object.assign(attributes, newAttributes),
        isEligible() {
            return true;
        },
        migrate: (attributes) => {
            let newAttributes = {
                titleMargin: {
                    "Desktop": {
                        top: attributes.titleMarginT,
                        right: attributes.titleMarginR,
                        bottom: attributes.titleMarginB,
                        left: attributes.titleMarginL
                    },
                    "Tablet": {
                        top: attributes.titleMarginTTablet,
                        right: attributes.titleMarginRTablet,
                        bottom: attributes.titleMarginBTablet,
                        left: attributes.titleMarginLTablet
                    },
                    "Mobile": {
                        top: attributes.titleMarginTMobile,
                        right: attributes.titleMarginRMobile,
                        bottom: attributes.titleMarginBMobile,
                        left: attributes.titleMarginLMobile
                    },
                },
                iconMargin: {
                    "Desktop": {
                        top: attributes.iconMarginT,
                        right: attributes.iconMarginR,
                        bottom: attributes.iconMarginB,
                        left: attributes.iconMarginL
                    },
                    "Tablet": {
                        top: attributes.iconMarginTTablet,
                        right: attributes.iconMarginRTablet,
                        bottom: attributes.iconMarginBTablet,
                        left: attributes.iconMarginLTablet
                    },
                    "Mobile": {
                        top: attributes.iconMarginTMobile,
                        right: attributes.iconMarginRMobile,
                        bottom: attributes.iconMarginBMobile,
                        left: attributes.iconMarginLMobile
                    },
                },
                titlePadding: {
                    "Desktop": {
                        top: attributes.titlePaddingT,
                        right: attributes.titlePaddingR,
                        bottom: attributes.titlePaddingB,
                        left: attributes.titlePaddingL
                    },
                    "Tablet": {
                        top: attributes.titlePaddingTTablet,
                        right: attributes.titlePaddingRTablet,
                        bottom: attributes.titlePaddingBTablet,
                        left: attributes.titlePaddingLTablet
                    },
                    "Mobile": {
                        top: attributes.titlePaddingTMobile,
                        right: attributes.titlePaddingRMobile,
                        bottom: attributes.titlePaddingBMobile,
                        left: attributes.titlePaddingLMobile
                    },
                },
                iconPadding: {
                    "Desktop": {
                        top: attributes.iconPaddingT,
                        right: attributes.iconPaddingR,
                        bottom: attributes.iconPaddingB,
                        left: attributes.iconPaddingL
                    },
                    "Tablet": {
                        top: attributes.iconPaddingTTablet,
                        right: attributes.iconPaddingRTablet,
                        bottom: attributes.iconPaddingBTablet,
                        left: attributes.iconPaddingLTablet
                    },
                    "Mobile": {
                        top: attributes.iconPaddingTMobile,
                        right: attributes.iconPaddingRMobile,
                        bottom: attributes.iconPaddingBMobile,
                        left: attributes.iconPaddingLMobile
                    },
                }
            }
            return Object.assign(attributes, newAttributes)
        },
        save: props => {
            const { attributes, className } = props

            const {
                block_id,
                layoutPos,
                iconPosition,
                align,
                repeaterBulletList,
                bulletAlign,
                bulletIconStyles,
                bulletIconBorderUpdated,
                bulletIconBorderTop,
                bulletIconBorderRight,
                bulletIconBorderBottom,
                bulletIconBorderLeft,
                bulletIconBorderWidth,
                titleStyles,
                generalStyles,
                generalBorderWidth,
                generalBorderTop,
                generalBorderRight,
                generalBorderBottom,
                generalBorderLeft,
                generalBorderUpdated,
                titleFont,
                dividerStyles,
                divider,
                dividerStyle
            } = attributes

            return (
                <div className={classnames(
                    className,
                    `premium-bullet-list-${block_id}`
                )}
                    id={`premium-bullet-list-${block_id}`}
                    style={{
                        textAlign: align,
                    }}>
                    <style
                        dangerouslySetInnerHTML={{
                            __html: [
                                `#premium-bullet-list-${block_id} .premium-bullet-list__content-icon i:hover {`,
                                `color: ${bulletIconStyles[0].bulletIconHoverColor} !important;`,
                                `background-color: ${bulletIconStyles[0].bulletIconHoverBackgroundColor} !important;`,
                                "}",
                                `#premium-bullet-list-${block_id} .premium-bullet-list__label-wrap .premium-bullet-list__label:hover {`,
                                `color: ${titleStyles[0].titleHoverColor} !important;`,
                                "}",
                                `#premium-bullet-list-${block_id} .premium-bullet-list__wrapper:hover {`,
                                `background-color: ${generalStyles[0].generalHoverBackgroundColor} !important;`,
                                `box-shadow: ${generalStyles[0].generalHoverShadowHorizontal}px ${generalStyles[0].generalHoverShadowVertical}px ${generalStyles[0].generalHoverShadowBlur}px ${generalStyles[0].generalHoverShadowColor} ${generalStyles[0].generalHoverShadowPosition} !important;`,
                                "}",
                                `#premium-bullet-list-${block_id} .premium-bullet-list-divider-block:not(:last-child)::after {`,
                                `border-top-style: ${dividerStyle};`,
                                `border-top-color: ${dividerStyles[0].dividerColor};`,
                                "}",
                                `#premium-bullet-list-${block_id} .premium-bullet-list-divider-inline:not(:last-child)::after {`,
                                `border-left-style: ${dividerStyle};`,
                                `border-left-color: ${dividerStyles[0].dividerColor};`,
                                "}",
                            ].join("\n")
                        }}
                    />
                    <ul className={`premium-bullet-list-${layoutPos} premium-bullet-list`}
                        style={{
                            textAlign: align,
                            justifyContent: align == "right" ? "flex-end" : align
                        }}>
                        {
                            repeaterBulletList.map((icon, index) => {

                                let image_icon_html = ""
                                if (icon.showBulletIcon) {
                                    if (icon.image_icon == "icon") {
                                        if (icon.icon) {
                                            image_icon_html = <span className="premium-bullet-list__content-icon" key={index}>
                                                <i
                                                    className={`${icon.icon}`}
                                                    style={{
                                                        overflow: 'hidden',
                                                        color: bulletIconStyles[0].bulletIconColor,
                                                        backgroundColor: bulletIconStyles[0].bulletIconBackgroundColor,
                                                        borderStyle: bulletIconStyles[0].bulletIconborderType,
                                                        borderWidth: bulletIconBorderUpdated
                                                            ? `${bulletIconBorderTop}px ${bulletIconBorderRight}px ${bulletIconBorderBottom}px ${bulletIconBorderLeft}px`
                                                            : bulletIconBorderWidth + "px",
                                                        borderRadius: bulletIconStyles[0].bulletIconborderRadius || 0 + "px",
                                                        borderColor: bulletIconStyles[0].bulletIconborderColor,
                                                        verticalAlign: bulletAlign == 'flex-start' ? 'top' : bulletAlign == 'flex-end' ? 'bottom' : 'middle'
                                                    }}
                                                />
                                            </span>
                                        }
                                    } else {
                                        if (icon.imageURL) {
                                            image_icon_html = <img
                                                src={icon.imageURL}
                                                key={index}
                                                style={{
                                                    width: '20px',
                                                    height: '20px',
                                                    overflow: 'hidden',
                                                    borderStyle: bulletIconStyles[0].bulletIconborderType,
                                                    borderWidth: bulletIconBorderUpdated
                                                        ? `${bulletIconBorderTop}px ${bulletIconBorderRight}px ${bulletIconBorderBottom}px ${bulletIconBorderLeft}px`
                                                        : bulletIconBorderWidth + "px",
                                                    borderRadius: bulletIconStyles[0].bulletIconborderRadius || 0 + "px",
                                                    borderColor: bulletIconStyles[0].bulletIconborderColor,
                                                    verticalAlign: bulletAlign == 'flex-start' ? 'top' : bulletAlign == 'flex-end' ? 'bottom' : 'middle'
                                                }}
                                            />
                                        }
                                    }
                                }

                                let target = (icon.linkTarget) ? "_blank" : "_self"
                                let link_url = (icon.disableLink) ? icon.link : "/"

                                if (!icon.disableLink) {
                                    return (
                                        <Fragment>
                                            <li
                                                className={classnames(
                                                    `premium-bullet-list-content${index}`,
                                                    "premium-bullet-list__wrapper"
                                                )}
                                                key={index}
                                                style={{
                                                    textAlign: align,
                                                    overflow: 'hidden',
                                                    justifyContent: align == "right" ? "flex-end" : align,
                                                    backgroundColor: generalStyles[0].generalBackgroundColor,
                                                    borderStyle: generalStyles[0].generalborderType,
                                                    borderWidth: generalBorderUpdated
                                                        ? `${generalBorderTop}px ${generalBorderRight}px ${generalBorderBottom}px ${generalBorderLeft}px`
                                                        : generalBorderWidth + "px",
                                                    borderRadius: generalStyles[0].generalborderRadius || 0 + "px",
                                                    borderColor: generalStyles[0].generalborderColor,
                                                    boxShadow: `${generalStyles[0].generalShadowHorizontal}px ${generalStyles[0].generalShadowVertical}px ${generalStyles[0].generalShadowBlur}px ${generalStyles[0].generalShadowColor} ${generalStyles[0].generalShadowPosition}`,
                                                }}
                                            >
                                                <div className={`premium-bullet-list__content-wrap premium-bullet-list__content-wrap-${bulletAlign}`} style={{
                                                    justifyContent: align == "right" ? align : align,
                                                    display: iconPosition == "before" ? "flex" : "inline-flex",
                                                    flexDirection: iconPosition == "top" ? align == "right" ? "column" : "column" : iconPosition == "after" ? 'row-reverse' : "",
                                                }}>
                                                    <span className={`premium-bullet-list__icon-wrap`}
                                                        style={{
                                                            overflow: repeaterBulletList[index].image_icon == 'image' ? "hidden" : "",
                                                            alignSelf: bulletAlign == 'left' ? 'flex-start' : bulletAlign == 'right' ? 'flex-end' : 'center',
                                                            textAlign: bulletAlign,
                                                            justifyContent: bulletAlign,
                                                            alignItems: bulletAlign == 'left' ? 'flex-start' : bulletAlign == 'right' ? 'flex-end' : 'center',
                                                        }}
                                                    >{image_icon_html}</span>
                                                    <div className="premium-bullet-list__label-wrap">
                                                        <RichText.Content
                                                            tagName="span"
                                                            value={repeaterBulletList[index].label}
                                                            className='premium-bullet-list__label'
                                                            style={{
                                                                fontFamily: titleFont,
                                                                fontWeight: titleStyles[0].titleWeight,
                                                                letterSpacing: titleStyles[0].titleLetter + "px",
                                                                lineHeight: titleStyles[0].titleLine + "px",
                                                                fontStyle: titleStyles[0].titleStyle,
                                                                textTransform: titleStyles[0].titleUpper ? "uppercase" : "none",
                                                                fontFamily: titleStyles[0].titleFontFamily,
                                                                color: titleStyles[0].titleColor,
                                                                textShadow: `${titleStyles[0].titleshadowHorizontal}px ${titleStyles[0].titleshadowVertical}px ${titleStyles[0].titleshadowBlur}px ${titleStyles[0].titleshadowColor}`,
                                                            }} />
                                                    </div>
                                                </div>
                                            </li>
                                            {divider &&
                                                <div className={`premium-bullet-list-divider-${layoutPos}`}></div>
                                            }
                                        </Fragment>
                                    )
                                } else {

                                    return (
                                        <Fragment>
                                            <li
                                                className={classnames(
                                                    `premium-bullet-list-content${index}`,
                                                    "premium-bullet-list__wrapper"
                                                )}
                                                key={index}
                                                style={{
                                                    listStyleType: 'none',
                                                    overflow: 'hidden',
                                                    textAlign: align,
                                                    justifyContent: align == "right" ? "flex-end" : align,
                                                    backgroundColor: generalStyles[0].generalBackgroundColor,
                                                    borderStyle: generalStyles[0].generalborderType,
                                                    borderWidth: generalBorderUpdated
                                                        ? `${generalBorderTop}px ${generalBorderRight}px ${generalBorderBottom}px ${generalBorderLeft}px`
                                                        : generalBorderWidth + "px",
                                                    borderRadius: generalStyles[0].generalborderRadius || 0 + "px",
                                                    borderColor: generalStyles[0].generalborderColor,
                                                    boxShadow: `${generalStyles[0].generalShadowHorizontal}px ${generalStyles[0].generalShadowVertical}px ${generalStyles[0].generalShadowBlur}px ${generalStyles[0].generalShadowColor} ${generalStyles[0].generalShadowPosition}`,
                                                }}
                                            >
                                                <a
                                                    href={link_url}
                                                    target={target}
                                                    rel="noopener noreferrer"
                                                >
                                                    <div className={`premium-bullet-list__content-wrap premium-bullet-list__content-wrap-${bulletAlign}`} style={{
                                                        justifyContent: align == "right" ? align : align,
                                                        display: iconPosition == "before" ? "flex" : "inline-flex",
                                                        flexDirection: iconPosition == "top" ? align == "right" ? "column" : "column" : iconPosition == "after" ? 'row-reverse' : "",
                                                    }}>
                                                        <span className={`premium-bullet-list__icon-wrap`}
                                                            style={{
                                                                overflow: repeaterBulletList[index].image_icon == 'image' ? "hidden" : "",
                                                                alignSelf: bulletAlign == 'left' ? 'flex-start' : bulletAlign == 'right' ? 'flex-end' : 'center',
                                                                textAlign: bulletAlign,
                                                                justifyContent: bulletAlign,
                                                                alignItems: bulletAlign == 'left' ? 'flex-start' : bulletAlign == 'right' ? 'flex-end' : 'center',
                                                            }}
                                                        >{image_icon_html}</span>
                                                        <div className="premium-bullet-list__label-wrap">
                                                            <RichText.Content
                                                                tagName="span"
                                                                value={repeaterBulletList[index].label}
                                                                className='premium-bullet-list__label'
                                                                style={{
                                                                    fontFamily: titleFont,
                                                                    fontWeight: titleStyles[0].titleWeight,
                                                                    letterSpacing: titleStyles[0].titleLetter + "px",
                                                                    lineHeight: titleStyles[0].titleLine + "px",
                                                                    fontStyle: titleStyles[0].titleStyle,
                                                                    textTransform: titleStyles[0].titleUpper ? "uppercase" : "none",
                                                                    fontFamily: titleStyles[0].titleFontFamily,
                                                                    color: titleStyles[0].titleColor,
                                                                    textShadow: `${titleStyles[0].titleshadowHorizontal}px ${titleStyles[0].titleshadowVertical}px ${titleStyles[0].titleshadowBlur}px ${titleStyles[0].titleshadowColor}`,
                                                                }} />
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            {divider &&
                                                <div className={`premium-bullet-list-divider-${layoutPos}`}></div>
                                            }
                                        </Fragment>
                                    )
                                }

                            })
                        }
                    </ul>
                </div>
            )
        }
    }
];
export default deprecated;