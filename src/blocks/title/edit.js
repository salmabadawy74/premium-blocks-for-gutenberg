// import styling from "./styling"
import PremiumTypo from "../../components/premium-typo";
import PremiumBorder from "../../components/premium-border";
import iconsList from "../../components/premium-icons-list";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import AdvancedPopColorControl from '../../components/Color Control/ColorComponent'
// import PremiumRangeResponsive from "../../components/premium-range-responsive";
import PremiumShadow from "../../components/PremiumShadow";
import PremiumResponsiveTabs from '../../components/premium-responsive-tabs';
import ResponsiveRangeControl from "../../components/RangeControl/responsive-range-control";
import PremiumBackgroundControl from "../../components/Premium-Background-Control"
import ResponsiveSingleRangeControl from "../../components/RangeControl/single-range-control";
import PremiumMediaUpload from '../../components/premium-media-upload';
import Lottie from 'react-lottie-with-segments';
import PremiumResponsiveMargin from "../../components/Premium-Responsive-Margin";
import PremiumResponsivePadding from "../../components/Premium-Responsive-Padding";
import PremiumSizeUnits from '../../components/premium-size-units';

const { __ } = wp.i18n

const {
    Component,
    Fragment,
} = wp.element

const {
    InspectorControls,
    ColorPalette,
    RichText
} = wp.editor

const {
    PanelBody,
    SelectControl,
    RangeControl,
    TextControl,
    Toolbar,
    ToggleControl
} = wp.components

let istitleUpdated = null;

class edit extends Component {

    constructor() {
        super(...arguments);
        this.handleStyle = this.handleStyle.bind(this);
    }

    componentDidMount() {
        // Assigning id in the attribute.
        this.props.setAttributes({ block_id: this.props.clientId })
        this.props.setAttributes({ classMigrate: true })
        // Pushing Style tag for this block css.
        const $style = document.createElement("style")
        $style.setAttribute("id", "premium-style-title-" + this.props.clientId)
        document.head.appendChild($style)
        this.handleStyle = this.handleStyle.bind(this);
        this.getPreviewSize = this.getPreviewSize.bind(this);
    }

    componentDidUpdate() {
        let element = document.getElementById("premium-style-title-" + this.props.clientId)
        if (null != element && "undefined" != typeof element) {
            // element.innerHTML = styling(this.props)
        }
        clearTimeout(istitleUpdated);
        istitleUpdated = setTimeout(this.handleStyle, 400);
    }

    getPreviewSize(device, desktopSize, tabletSize, mobileSize) {
        if (device === 'Mobile') {
            if (undefined !== mobileSize && '' !== mobileSize) {
                return mobileSize;
            } else if (undefined !== tabletSize && '' !== tabletSize) {
                return tabletSize;
            }
        } else if (device === 'Tablet') {
            if (undefined !== tabletSize && '' !== tabletSize) {
                return tabletSize;
            }
        }
        return desktopSize;
    }

    handleStyle() {
        const { titleStyles } = this.props.attributes;
        let titleContainers = document.querySelectorAll(".premium-title-container");
        titleContainers.forEach(function (titleContainer) {
            if (titleContainer.classList.contains("style8")) {
                let titleElement = titleContainer.querySelector(".premium-title-text-title"),
                    holdTime = titleStyles[0].animateDelay * 1000,
                    duration = titleStyles[0].animateduration * 1000;

                function shinyEffect() {
                    titleElement.setAttribute('data-animation', 'shiny');
                    setTimeout(function () {
                        titleElement.removeAttribute('data-animation')
                    }, duration);
                }

                (function repeat() {
                    shinyEffect();
                    setTimeout(repeat, holdTime);
                })();
            }

            if (titleContainer.classList.contains("style9")) {
                let style9 = document.querySelectorAll('.premium-title-style9__wrap');
                style9.forEach(function (style) {
                    let holdTime = titleStyles[0].animateDelay * 1000;
                    style.setAttribute("data-animation-blur", "process");
                    style.querySelectorAll(".premium-title-style9-letter").forEach(function (letter, index) {
                        index += 1;
                        let delayTime;
                        if (document.getElementsByTagName("BODY")[0].classList.contains('.rtl')) {
                            delayTime = 0.2 / index + 's';
                        } else {
                            delayTime = index / 20 + 's';
                        }
                        letter.style.animationDelay = delayTime;
                    })
                    setInterval(function () {
                        style.setAttribute('data-animation-blur', 'done')
                        setTimeout(function () {
                            style.setAttribute('data-animation-blur', 'process')
                        }, 150);
                    }, holdTime);
                });
            }
        })
    }

    render() {
        const { attributes, setAttributes, isSelected } = this.props;

        const {
            block_id,
            align,
            titleTag,
            style,
            title,
            iconValue,
            iconType,
            icon,
            lottieURl,
            loop,
            reversedir,
            iconPosition,
            imageURL,
            imageID,
            link,
            url,
            target,
            iconAlign,
            stripePosition,
            stripeWidth,
            stripeHeight,
            stripeTopSpacing,
            stripeBottomSpacing,
            titleStyles,
            titleBorderTop,
            titleBorderRight,
            titleBorderBottom,
            titleBorderLeft,
            titleBorderUpdated,
            titleBorderWidth,
            iconStyles,
            backgroundType,
            iconBorderWidth,
            iconBorderUpdated,
            titleColor,
            titleWeight,
            titleLetter,
            titleUpper,
            titleStyle,
            titlefontSize,
            titlefontSizeMobile,
            titlefontSizeTablet,
            titlefontSizeType,
            titleshadowBlur,
            titleshadowColor,
            titleshadowHorizontal,
            titleshadowVertical,
            stripeColor,
            titleborderType,
            titleborderRadius,
            // titleBorderLeft,
            // titleBorderTop,
            // titleBorderRight,
            // titleBorderBottom,
            titleborderColor,
            BGColor,
            lineColor,
            triangleColor,
            stripeAlign,
            iconColor,
            iconSize,
            iconSizeType,
            iconSizeTablet,
            iconSizeMobile,
            iconborderType,
            iconborderRadius,
            iconBorderTop,
            iconBorderRight,
            iconBorderBottom,
            iconBorderLeft,
            iconborderColor,
            iconshadowBlur,
            iconshadowColor,
            iconshadowHorizontal,
            iconshadowVertical,
            titleMarginT,
            titleMarginR,
            titleMarginB,
            titleMarginL,
            titleMarginTTablet,
            titleMarginRTablet,
            titleMarginBTablet,
            titleMarginLTablet,
            titleMarginTMobile,
            titleMarginRMobile,
            titleMarginBMobile,
            titleMarginLMobile,
            titleMarginType,
            titlePaddingT,
            titlePaddingR,
            titlePaddingB,
            titlePaddingL,
            titlePaddingTTablet,
            titlePaddingRTablet,
            titlePaddingBTablet,
            titlePaddingLTablet,
            titlePaddingTMobile,
            titlePaddingRMobile,
            titlePaddingBMobile,
            titlePaddingLMobile,
            titlePaddingType,
            stroke,
            strokeColor,
            strokeFull,
            iconBGColor,
            iconPaddingT,
            iconPaddingR,
            iconPaddingL,
            iconPaddingB,
            iconPaddingTTablet,
            iconPaddingRTablet,
            iconPaddingLTablet,
            iconPaddingBTablet,
            iconPaddingTMobile,
            iconPaddingRMobile,
            iconPaddingLMobile,
            iconPaddingBMobile,
            iconPaddingType,
            iconMarginT,
            iconMarginR,
            iconMarginB,
            iconMarginL,
            iconMarginTTablet,
            iconMarginRTablet,
            iconMarginBTablet,
            iconMarginLTablet,
            iconMarginTMobile,
            iconMarginRMobile,
            iconMarginBMobile,
            iconMarginLMobile,
            iconMarginType,
            backgroundText,
            BackText,
            textWidth,
            horizontalText,
            verticalText,
            rotateText,
            textBackColor,
            textBackfontSizeType,
            textBackfontSize,
            textBackfontSizeMobile,
            textBackfontSizeTablet,
            textBackWeight,
            textBackStyle,
            textBackLetter,
            textBackUpper,
            textBackshadowColor,
            textBackshadowBlur,
            textBackshadowHorizontal,
            horizontalU,
            verticalU,
            textBackshadowVertical,
            blend,
            zIndex,
            hideDesktop,
            hideTablet,
            hideMobile,
            shinyColor,
            blurColor,
            blurShadow,
            animateduration,
            animateDelay
        } = attributes

        const STYLE = [{
            value: "style1",
            label: __("Style 1")
        },
        {
            value: "style2",
            label: __("Style 2")
        },
        {
            value: "style3",
            label: "Style 3"
        },
        {
            value: "style4",
            label: __("Style 4")
        },
        {
            value: "style5",
            label: __("Style 5")
        },
        {
            value: "style6",
            label: __("Style 6")
        },
        {
            value: "style7",
            label: __("Style 7")
        },
        {
            value: "style8",
            label: __("Style 8")
        },
        {
            value: "style9",
            label: __("Style 9")
        }
        ];

        const ICON = [
            {
                value: "icon",
                label: __("Icon")
            },
            {
                value: "image",
                label: __("Image")
            },
            {
                value: "lottie",
                label: __("Lottie Animation")
            }
        ];

        const POSITION = [
            {
                value: "before",
                label: __("Before")
            }, {
                value: "after",
                label: __("After")
            },
            {
                value: "top",
                label: __("Top")
            }
        ];

        const TAGS = [
            {
                value: "h1",
                label: "H1"
            }, {
                value: "h2",
                label: "H2"
            },
            {
                value: "h3",
                label: "H3"
            },
            {
                value: "h4",
                label: "H4"
            },
            {
                value: "h5",
                label: "H5"
            },
            {
                value: "h6",
                label: "H6"
            },
            {
                value: "div",
                label: "div"
            },
            {
                value: "span",
                label: "span"
            }
        ];

        const ALIGNS = ["left", "center", "right"];

        const STRIPEPOSITION = [
            {
                value: "top",
                label: __("Top")
            }, {
                value: "bottom",
                label: __("Bottom")
            }
        ];

        const BLEND =
            [
                {
                    label: 'Normal', value: 'normal'
                },
                {
                    label: 'Multiply', value: 'multiply'
                },
                {
                    label: 'Screen', value: 'screen'
                },
                {
                    label: 'Overlay', value: 'overlay'
                },
                {
                    label: 'Darken', value: 'darken'
                },
                {
                    label: 'Lighten', value: 'lighten'
                },
                {
                    label: 'Color Dodge', value: 'color-dodge'
                },
                {
                    label: 'Saturation', value: 'saturation'
                },
                {
                    label: 'Color', value: 'color'
                },
                {
                    label: 'Luminosity', value: 'luminosity'
                },
            ];

        const TitleSize = this.getPreviewSize(this.props.deviceType, titleStyles[0].titlefontSize, titleStyles[0].titlefontSizeTablet, titleStyles[0].titlefontSizeMobile);
        const TitleMarginTop = this.getPreviewSize(this.props.deviceType, titleMarginT, titleMarginTTablet, titleMarginTMobile);
        const TitleMarginRight = this.getPreviewSize(this.props.deviceType, titleMarginR, titleMarginRTablet, titleMarginRMobile);
        const TitleMarginBottom = this.getPreviewSize(this.props.deviceType, titleMarginB, titleMarginBTablet, titleMarginBMobile);
        const TitleMarginLeft = this.getPreviewSize(this.props.deviceType, titleMarginL, titleMarginLTablet, titleMarginLMobile);
        const TitlePaddingTop = this.getPreviewSize(this.props.deviceType, titlePaddingT, titlePaddingTTablet, titlePaddingTMobile);
        const TitlePaddingRight = this.getPreviewSize(this.props.deviceType, titlePaddingR, titlePaddingRTablet, titlePaddingRMobile);
        const TitlePaddingBottom = this.getPreviewSize(this.props.deviceType, titlePaddingB, titlePaddingBTablet, titlePaddingBMobile);
        const TitlePaddingLeft = this.getPreviewSize(this.props.deviceType, titlePaddingL, titlePaddingLTablet, titlePaddingLMobile);
        const IconSize = this.getPreviewSize(this.props.deviceType, iconStyles[0].iconSize, iconStyles[0].iconSizeTablet, iconStyles[0].iconSizeMobile);
        const IconMarginTop = this.getPreviewSize(this.props.deviceType, iconMarginT, iconMarginTTablet, iconMarginTMobile);
        const IconMarginRight = this.getPreviewSize(this.props.deviceType, iconMarginR, iconMarginRTablet, iconMarginRMobile);
        const IconMarginBottom = this.getPreviewSize(this.props.deviceType, iconMarginB, iconMarginBTablet, iconMarginBMobile);
        const IconMarginLeft = this.getPreviewSize(this.props.deviceType, iconMarginL, iconMarginLTablet, iconMarginLMobile);
        const IconPaddingTop = this.getPreviewSize(this.props.deviceType, iconPaddingT, iconPaddingTTablet, iconPaddingTMobile);
        const IconPaddingRight = this.getPreviewSize(this.props.deviceType, iconPaddingR, iconPaddingRTablet, iconPaddingRMobile);
        const IconPaddingBottom = this.getPreviewSize(this.props.deviceType, iconPaddingB, iconPaddingBTablet, iconPaddingBMobile);
        const IconPaddingLeft = this.getPreviewSize(this.props.deviceType, iconPaddingL, iconPaddingLTablet, iconPaddingLMobile);

        let btnGrad, btnGrad2, btnbg;

        if (undefined !== backgroundType && 'gradient' === backgroundType) {
            btnGrad = ('transparent' === iconStyles[0].containerBack || undefined === iconStyles[0].containerBack ? 'rgba(255,255,255,0)' : iconStyles[0].containerBack);
            btnGrad2 = (undefined !== iconStyles[0].gradientColorTwo && undefined !== iconStyles[0].gradientColorTwo && '' !== iconStyles[0].gradientColorTwo ? iconStyles[0].gradientColorTwo : '#777');
            if ('radial' === iconStyles[0].gradientType) {
                btnbg = `radial-gradient(at ${iconStyles[0].gradientPosition}, ${btnGrad} ${iconStyles[0].gradientLocationOne}%, ${btnGrad2} ${iconStyles[0].gradientLocationTwo}%)`;
            } else if ('radial' !== iconStyles[0].gradientType) {
                btnbg = `linear-gradient(${iconStyles[0].gradientAngle}deg, ${btnGrad} ${iconStyles[0].gradientLocationOne}%, ${btnGrad2} ${iconStyles[0].gradientLocationTwo}%)`;
            }
        } else {
            btnbg = iconStyles[0].backgroundImageURL ? `url('${iconStyles[0].backgroundImageURL}')` : ''
        }

        const renderCss = (
            <style>
                {`
                    #premium-title-${block_id} .premium-title-style8__wrap .premium-title-text-title[data-animation='shiny'] {
                        --base-color: ${titleStyles[0].titleColor} !important;
                        --shiny-color: ${titleStyles[0].shinyColor} !important;
                        --animation-speed: ${titleStyles[0].animateduration}s !important;
                    }
                    #premium-title-${block_id} .premium-title-header {
                        --shadow-color: ${titleStyles[0].blurColor} !important;
                        --shadow-value: ${titleStyles[0].blurShadow}px !important;
                        color: ${titleStyles[0].titleColor} !important;
                    }
                    #premium-title-${block_id} .premium-title .style1 .premium-title-header {
                        border-style: ${titleStyles[0].titleborderType} !important;
                        border-width: ${titleBorderUpdated
                        ? `${titleBorderTop}px ${titleBorderRight}px ${titleBorderBottom}px ${titleBorderLeft}px`
                        : titleBorderWidth + "px"} !important;
                        border-radius: ${titleStyles[0].titleborderRadius || 0}px !important;
                        border-color: ${titleStyles[0].titleborderColor} !important;
                        border-left: ${titleBorderLeft >= "1" ? `${titleBorderLeft}px ${titleStyles[0].titleborderType} ${titleStyles[0].titleborderColor}` : ""} !important;
                    }
                    #premium-title-${block_id} .premium-title .style2{
                        border-style: ${titleStyles[0].titleborderType} !important;
                        border-width: ${titleBorderUpdated
                        ? `${titleBorderTop}px ${titleBorderRight}px ${titleBorderBottom}px ${titleBorderLeft}px`
                        : titleBorderWidth + "px"}!important;
                        border-radius: ${titleStyles[0].titleborderRadius || 0}px !important;
                        border-color: ${titleStyles[0].titleborderColor}!important;
                        border-bottom: ${titleBorderBottom >= "0" ? `${titleBorderBottom}px ${titleStyles[0].titleborderType} ${titleStyles[0].titleborderColor} !important` : ""};
                    }
                    #premium-title-${block_id} .premium-title .style4{
                        border-style: ${titleStyles[0].titleborderType} !important;
                        border-width: ${titleBorderUpdated
                        ? `${titleBorderTop}px ${titleBorderRight}px ${titleBorderBottom}px ${titleBorderLeft}px`
                        : titleBorderWidth + "px"} !important;
                        border-radius: ${titleStyles[0].titleborderRadius || 0}px !important;
                        border-color: ${titleStyles[0].titleborderColor} !important;
                        border-bottom: ${titleBorderBottom >= "0" ? `${titleBorderBottom}px ${titleStyles[0].titleborderType} ${titleStyles[0].titleborderColor} !important` : ""};
                    }
                    #premium-title-${block_id} .premium-title .style5{
                        border-style: ${titleStyles[0].titleborderType} !important;
                        border-width: ${titleBorderUpdated
                        ? `${titleBorderTop}px ${titleBorderRight}px ${titleBorderBottom}px ${titleBorderLeft}px`
                        : titleBorderWidth + "px"} !important;
                        border-radius: ${titleStyles[0].titleborderRadius || 0}px !important;
                        border-color: ${titleStyles[0].titleborderColor} !important;
                        border-bottom: ${titleBorderBottom >= "0" ? `${titleBorderBottom}px ${titleStyles[0].titleborderType} ${titleStyles[0].titleborderColor} !important` : ""};
                    }
                    #premium-title-${block_id} .premium-title .style6{
                        border-style: ${titleStyles[0].titleborderType} !important;
                        border-width: ${titleBorderUpdated
                        ? `${titleBorderTop}px ${titleBorderRight}px ${titleBorderBottom}px ${titleBorderLeft}px`
                        : titleBorderWidth + "px"} !important;
                        border-radius: ${titleStyles[0].titleborderRadius || 0}px !important;
                        border-color: ${titleStyles[0].titleborderColor} !important;
                        border-bottom: ${titleBorderBottom >= "0" ? `${titleBorderBottom}px ${titleStyles[0].titleborderType} ${titleStyles[0].titleborderColor} !important` : ""};
                    }
                    #premium-title-${block_id} .premium-title-style2__wrap {
                        background-color: ${titleStyles[0].BGColor} !important;
                    }
                    #premium-title-${block_id} .premium-title-style3__wrap {
                        background-color: ${titleStyles[0].BGColor} !important;
                    }
                    #premium-title-${block_id} .premium-title-style5__wrap {
                        border-bottom: 2px solid ${titleStyles[0].lineColor} !important;
                    }
                    #premium-title-${block_id} .premium-title-style6__wrap {
                        border-bottom: 2px solid ${titleStyles[0].lineColor} !important;
                    }
                    #premium-title-${block_id} .premium-title-style6__wrap:before {
                        border-bottom-color: ${titleStyles[0].triangleColor} !important;
                    }
                    #premium-title-${block_id} .premium-title-style7-stripe-span {
                        background-color: ${titleStyles[0].stripeColor} !important;
                    }
                    #premium-title-${block_id} .premium-title-icon {
                        color: ${iconStyles[0].iconColor} !important;
                        background-color: ${backgroundType === "solid" ? iconStyles[0].containerBack : "transparent"} !important;
                        background-image: ${btnbg} !important;
                        background-repeat: ${iconStyles[0].backgroundRepeat} !important;
                        background-position: ${iconStyles[0].backgroundPosition} !important;
                        background-size: ${iconStyles[0].backgroundSize} !important;
                        background-attachment: ${iconStyles[0].fixed ? "fixed" : "unset"} !important;
                        font-size: ${IconSize}${iconStyles[0].iconSizeType} !important;
                        border-style: ${iconStyles[0].iconborderType} !important;
                        border-width: ${iconBorderUpdated
                        ? `${iconBorderTop}px ${iconBorderRight}px ${iconBorderBottom}px ${iconBorderLeft}px`
                        : iconBorderWidth + "px"} !important;
                        border-radius: ${iconStyles[0].iconborderRadius || 0}px !important;
                        border-color: ${iconStyles[0].iconborderColor} !important;
                        padding-top: ${IconPaddingTop}${iconStyles[0].iconPaddingType} !important;
                        padding-right: ${IconPaddingRight}${iconStyles[0].iconPaddingType} !important;
                        padding-bottom: ${IconPaddingBottom}${iconStyles[0].iconPaddingType} !important;
                        padding-left: ${IconPaddingLeft}${iconStyles[0].iconPaddingType} !important;
                        margin-top: ${IconMarginTop}${iconStyles[0].iconMarginType} !important;
                        margin-right: ${IconMarginRight}${iconStyles[0].iconMarginType} !important;
                        margin-bottom: ${IconMarginBottom}${iconStyles[0].iconMarginType} !important;
                        margin-left: ${IconMarginLeft}${iconStyles[0].iconMarginType} !important;
                        text-shadow: ${iconStyles[0].iconshadowHorizontal}px ${iconStyles[0].iconshadowVertical}px ${iconStyles[0].iconshadowBlur}px ${iconStyles[0].iconshadowColor} !important;
                    }
                    #premium-title-${block_id} .premium-lottie-animation svg {
                        width: ${IconSize}${iconStyles[0].iconSizeType} !important;
                        height: ${IconSize}${iconStyles[0].iconSizeType} !important;
                    }
                    #premium-title-${block_id} .premium-title-header img {
                        width: ${IconSize}${iconStyles[0].iconSizeType} !important;
                        height: ${IconSize}${iconStyles[0].iconSizeType} !important;
                    }
                `}
            </style>
        );

        const saveTitleStyles = (value) => {
            const newUpdate = titleStyles.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({
                titleStyles: newUpdate,
            });
        }

        const saveIconStyles = (value) => {
            const newUpdate = iconStyles.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({
                iconStyles: newUpdate,
            });
        }

        const onResetClickTitle = () => {
            setAttributes({
                titleWeight: 600,
                titlefontSizeType: "px",
                titlefontSize: "30",
                titlefontSizeMobile: "30",
                titlefontSizeTablet: "30",
                titleStyle: "normal",
                titleLetter: "0",
                titleUpper: false
            });
        }

        const onResetClickTitleTextShadow = () => {
            setAttributes({
                titleshadowColor: "",
                titleshadowBlur: "0",
                titleshadowHorizontal: "0",
                titleshadowVertical: "0",
            });
        }

        const onResetClickIconTextShadow = () => {
            setAttributes({
                iconshadowColor: "",
                iconshadowBlur: "0",
                iconshadowHorizontal: "0",
                iconshadowVertical: "0",
            });
        }

        const styleContainer = title.split("").map(letter => {
            return (
                <RichText
                    tagName={titleTag.toLowerCase()}
                    className={`premium-title-style9-letter`}
                    value={letter}
                    style={{
                        color: titleStyles[0].titleColor
                    }}
                />
            )
        });

        const reverse = reversedir ? -1 : 1;

        return [
            isSelected && (
                <InspectorControls>
                    <PanelBody
                        title={__("Title")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <TextControl
                            label={__("Title")}
                            value={title}
                            onChange={value => setAttributes({ title: value })}
                        />
                        <SelectControl
                            label={__("Style")}
                            value={style}
                            onChange={newSelect => setAttributes({ style: newSelect })}
                            options={STYLE}
                        />
                        <ToggleControl
                            label={__("Icon")}
                            checked={iconValue}
                            onChange={value => setAttributes({ iconValue: value })}
                        />
                        {iconValue &&
                            <Fragment>
                                <SelectControl
                                    label={__("Icon Type")}
                                    value={iconType}
                                    onChange={newSelect => setAttributes({ iconType: newSelect })}
                                    options={ICON}
                                />
                                {
                                    iconType === 'icon' && <Fragment>
                                        <p>{__("Icon")}</p>
                                        <FontIconPicker
                                            icons={iconsList}
                                            value={icon}
                                            onChange={value => setAttributes({ icon: value })}
                                            isMulti={false}
                                            appendTo="body"
                                            noSelectedPlaceholder={__("Select Icon")}
                                        />
                                    </Fragment>
                                }
                                {iconType === 'lottie' && <Fragment>
                                    <TextControl
                                        value={lottieURl}
                                        onChange={value => setAttributes({ lottieURl: value })}
                                        label={__("Lottie Url")}
                                    />
                                    <ToggleControl
                                        label={__('Loop')}
                                        checked={loop}
                                        onChange={(newValue) => setAttributes({ loop: newValue })}
                                        help={loop ? __('This option works only on the preview page') : ''}
                                    />
                                    <ToggleControl
                                        label={__("Reverse")}
                                        checked={reversedir}
                                        onChange={(value) => setAttributes({ reversedir: value })}
                                    />
                                </Fragment>}
                                {iconType === 'image' && <Fragment>
                                    <PremiumMediaUpload
                                        type="image"
                                        imageID={imageID}
                                        imageURL={imageURL}
                                        onSelectMedia={media => {
                                            setAttributes({
                                                imageID: media.id,
                                                imageURL: media.url
                                            });
                                        }}
                                        onRemoveImage={() =>
                                            setAttributes({
                                                imageID: "",
                                                imageURL: ""
                                            })
                                        }
                                    />

                                </Fragment>}
                                <SelectControl
                                    label={__("Icon Position")}
                                    value={iconPosition}
                                    onChange={newSelect => setAttributes({ iconPosition: newSelect })}
                                    options={POSITION}
                                />
                                {(iconPosition === 'top' && style != 'style3' && style != 'style4') && <Fragment>
                                    <p>{__("Icon Alignment")}</p>
                                    <Toolbar
                                        controls={ALIGNS.map(contentAlign => ({
                                            icon: "editor-align" + contentAlign,
                                            isActive: contentAlign === iconAlign,
                                            onClick: () => setAttributes({ iconAlign: contentAlign })
                                        }))}
                                    />
                                </Fragment>
                                }
                            </Fragment>
                        }
                        {style === 'style7' && <Fragment>
                            <SelectControl
                                label={__("Stripe Position")}
                                value={stripePosition}
                                onChange={newSelect => setAttributes({ stripePosition: newSelect })}
                                options={STRIPEPOSITION}
                            />
                            <RangeControl
                                label={__("Stripe Width")}
                                value={stripeWidth}
                                min="1"
                                max="100"
                                onChange={value => setAttributes({ stripeWidth: value })}
                            />
                            <RangeControl
                                label={__("Stripe Height")}
                                value={stripeHeight}
                                min="1"
                                max="100"
                                onChange={value => setAttributes({ stripeHeight: value })}
                            />
                            <RangeControl
                                label={__("Stripe Top Spacing")}
                                value={stripeTopSpacing}
                                min="1"
                                max="100"
                                onChange={value => setAttributes({ stripeTopSpacing: value })}
                            />
                            <RangeControl
                                label={__("Stripe Bottom Spacing")}
                                value={stripeBottomSpacing}
                                min="1"
                                max="100"
                                onChange={value => setAttributes({ stripeBottomSpacing: value })}
                            />
                            <p>{__("Stripe Alignment")}</p>
                            <Toolbar
                                controls={ALIGNS.map(contentAlign => ({
                                    icon: "editor-align" + contentAlign,
                                    isActive: contentAlign === stripeAlign,
                                    onClick: () => setAttributes({ stripeAlign: contentAlign })
                                }))}
                            />
                        </Fragment>
                        }
                        <hr />
                        <SelectControl
                            label={__("HTML Tag")}
                            options={TAGS}
                            value={titleTag}
                            onChange={(newValue) => setAttributes({ titleTag: newValue })}
                        />
                        <p> {__('Alignment')}</p>
                        <Toolbar
                            controls={ALIGNS.map(contentAlign => ({
                                icon: "editor-align" + contentAlign,
                                isActive: align === align,
                                onClick: () => setAttributes({ align: contentAlign })
                            }))}
                        />
                        <ToggleControl
                            label={__("Link")}
                            checked={link}
                            onChange={value => setAttributes({ link: value })}
                        />
                        {link &&
                            <Fragment>
                                <p>{__("URL")}</p>
                                <TextControl
                                    value={url}
                                    onChange={value => setAttributes({ url: value })}
                                    placeholder={__("Enter URL")}
                                />
                                <ToggleControl
                                    checked={target}
                                    label={__('Open Link in new Tab')}
                                    onChange={(value) => setAttributes({ target: value })}
                                />
                            </Fragment>
                        }
                        <ToggleControl
                            label={__('background Text')}
                            checked={backgroundText}
                            onChange={(value) => setAttributes({ backgroundText: value })}
                        />
                        {backgroundText &&
                            <Fragment>
                                <TextControl
                                    label={__("Text")}
                                    value={BackText}
                                    onChange={value => setAttributes({ BackText: value })}
                                />
                                <SelectControl
                                    label={__("Width")}
                                    value={textWidth}
                                    onChange={newSelect => setAttributes({ textWidth: newSelect })}
                                    options={[
                                        {
                                            label: "Auto", value: 'auto'
                                        }, {
                                            label: "Full Width", value: '100%'
                                        }]}
                                />
                                <PremiumSizeUnits
                                    activeUnit={horizontalU}
                                    onChangeSizeUnit={newValue => setAttributes({ horizontalU: newValue })}
                                />
                                <RangeControl
                                    label={__('Horizontal Offset')}
                                    value={horizontalText}
                                    onChange={(newValue) => setAttributes({ horizontalText: newValue })}
                                    min={-500}
                                    max={500}
                                    step={1}
                                />
                                <PremiumSizeUnits
                                    activeUnit={verticalU}
                                    onChangeSizeUnit={newValue => setAttributes({ verticalU: newValue })}
                                />
                                <RangeControl
                                    label={__('Vertical Offset')}
                                    value={verticalText}
                                    onChange={(newValue) => setAttributes({ verticalText: newValue })}
                                    min={-500}
                                    max={500}
                                    step={1}
                                />
                                <RangeControl
                                    label={__('Rotate (degrees)')}
                                    value={rotateText}
                                    onChange={(newValue) => setAttributes({ rotateText: newValue })}
                                    min={0}
                                    max={360}
                                    step={1}
                                />
                            </Fragment>}
                    </PanelBody>
                    <PanelBody
                        title={__("Title Style")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <AdvancedPopColorControl
                            label={__("Color", 'premium-block-for-gutenberg')}
                            colorValue={titleStyles[0].titleColor}
                            colorDefault={''}
                            onColorChange={newValue =>
                                saveTitleStyles({
                                    titleColor: newValue
                                })
                            }
                        />
                        {style === "style8" &&
                            <AdvancedPopColorControl
                                label={__("Shiny Color", 'premium-block-for-gutenberg')}
                                colorValue={titleStyles[0].shinyColor}
                                colorDefault={''}
                                onColorChange={newValue =>
                                    saveTitleStyles({
                                        shinyColor: newValue
                                    })
                                }
                            />
                        }
                        {style === "style9" &&
                            <AdvancedPopColorControl
                                label={__("Blur Color", 'premium-block-for-gutenberg')}
                                colorValue={titleStyles[0].blurColor}
                                colorDefault={''}
                                onColorChange={newValue =>
                                    saveTitleStyles({
                                        blurColor: newValue
                                    })
                                }
                            />
                        }
                        <PremiumTypo
                            components={["responsiveSize", "weight", "line", "style", "upper", "spacing", "family"]}
                            setAttributes={saveTitleStyles}
                            fontSizeType={{ value: titleStyles[0].titlefontSizeType, label: __("titlefontSizeType") }}
                            fontSize={titleStyles[0].titlefontSize}
                            fontSizeMobile={titleStyles[0].titlefontSizeMobile}
                            fontSizeTablet={titleStyles[0].titlefontSizeTablet}
                            onChangeSize={newSize => saveTitleStyles({ titlefontSize: newSize })}
                            onChangeTabletSize={newSize => saveTitleStyles({ titlefontSizeTablet: newSize })}
                            onChangeMobileSize={newSize => saveTitleStyles({ titlefontSizeMobile: newSize })}
                            weight={titleStyles[0].titleWeight}
                            style={titleStyles[0].titleStyle}
                            spacing={titleStyles[0].titleLetter}
                            upper={titleStyles[0].titleUpper}
                            line={titleStyles[0].titleLine}
                            fontFamily={titleStyles[0].titleFontFamily}
                            onChangeWeight={newWeight =>
                                saveTitleStyles({ titleWeight: newWeight || 500 })
                            }
                            onChangeStyle={newStyle =>
                                saveTitleStyles({ titleStyle: newStyle })
                            }
                            onChangeSpacing={newValue =>
                                saveTitleStyles({ titleLetter: newValue })
                            }
                            onChangeUpper={check => saveTitleStyles({ titleUpper: check })}
                            onChangeLine={newValue => saveTitleStyles({ titleLine: newValue })}
                            onChangeFamily={(fontFamily) => saveTitleStyles({ titleFontFamily: fontFamily })}
                        />
                        {style === 'style2' &&
                            <AdvancedPopColorControl
                                label={__("Background Color", 'premium-block-for-gutenberg')}
                                colorValue={titleStyles[0].BGColor}
                                colorDefault={''}
                                onColorChange={newValue =>
                                    saveTitleStyles({
                                        BGColor: newValue
                                    })
                                }
                            />
                        }
                        {style === 'style3' &&
                            <AdvancedPopColorControl
                                label={__("Background Color", 'premium-block-for-gutenberg')}
                                colorValue={titleStyles[0].BGColor}
                                colorDefault={''}
                                onColorChange={newValue =>
                                    saveTitleStyles({
                                        BGColor: newValue
                                    })
                                }
                            />
                        }
                        {style === 'style5' &&
                            <AdvancedPopColorControl
                                label={__("Line Color", 'premium-block-for-gutenberg')}
                                colorValue={titleStyles[0].lineColor}
                                colorDefault={''}
                                onColorChange={newValue =>
                                    saveTitleStyles({
                                        lineColor: newValue
                                    })
                                }
                            />
                        }
                        {style === 'style6' &&
                            <AdvancedPopColorControl
                                label={__("Line Color", 'premium-block-for-gutenberg')}
                                colorValue={titleStyles[0].lineColor}
                                colorDefault={''}
                                onColorChange={newValue =>
                                    saveTitleStyles({
                                        lineColor: newValue
                                    })
                                }
                            />
                        }
                        {style === 'style6' &&
                            <AdvancedPopColorControl
                                label={__("Triangle Color", 'premium-block-for-gutenberg')}
                                colorValue={titleStyles[0].triangleColor}
                                colorDefault={''}
                                onColorChange={newValue =>
                                    saveTitleStyles({
                                        triangleColor: newValue
                                    })
                                }
                            />
                        }
                        {style === 'style7' &&
                            <AdvancedPopColorControl
                                label={__("Stripe Color", 'premium-block-for-gutenberg')}
                                colorValue={titleStyles[0].stripeColor}
                                colorDefault={''}
                                onColorChange={newValue =>
                                    saveTitleStyles({
                                        stripeColor: newValue
                                    })
                                }
                            />
                        }
                        {style != 'style3' && style !== "style7" && style !== "style8" && style !== "style9" &&
                            <PremiumBorder
                                borderType={titleStyles[0].titleborderType}
                                borderWidth={titleBorderWidth}
                                top={titleBorderTop}
                                right={titleBorderRight}
                                bottom={titleBorderBottom}
                                left={titleBorderLeft}
                                borderColor={titleStyles[0].titleborderColor}
                                borderRadius={titleStyles[0].titleborderRadius}
                                onChangeType={newType => saveTitleStyles({ titleborderType: newType })}
                                onChangeWidth={({ top, right, bottom, left }) =>
                                    setAttributes({
                                        titleBorderUpdated: true,
                                        titleBorderTop: top,
                                        titleBorderRight: right,
                                        titleBorderBottom: bottom,
                                        titleBorderLeft: left,
                                    })
                                }
                                onChangeColor={colorValue =>
                                    saveTitleStyles({ titleborderColor: colorValue })
                                }
                                onChangeRadius={newrRadius =>
                                    saveTitleStyles({ titleborderRadius: newrRadius })
                                }
                            />
                        }
                        <PremiumShadow
                            label={__("Shadow", 'premium-blocks-for-gutenberg')}
                            color={titleStyles[0].titleshadowColor}
                            blur={titleStyles[0].titleshadowBlur}
                            horizontal={titleStyles[0].titleshadowHorizontal}
                            vertical={titleStyles[0].titleshadowVertical}
                            onChangeColor={newColor =>
                                saveTitleStyles({ titleshadowColor: newColor })
                            }
                            onChangeBlur={newBlur => saveTitleStyles({ titleshadowBlur: newBlur })}
                            onChangehHorizontal={newValue =>
                                saveTitleStyles({ titleshadowHorizontal: newValue })
                            }
                            onChangeVertical={newValue =>
                                saveTitleStyles({ titleshadowVertical: newValue })
                            }
                        />
                        {style === "style9" &&
                            <ResponsiveSingleRangeControl
                                label={__("Blur Shadow Value (px)", 'premium-block-for-gutenberg')}
                                value={titleStyles[0].blurShadow}
                                onChange={(value) => saveTitleStyles({ blurShadow: value })}
                                showUnit={false}
                                defaultValue={120}
                                min={10}
                                max={500}
                                step={10}
                            />
                        }
                        {(style === "style8" || style === "style9") &&
                            <ResponsiveSingleRangeControl
                                label={__("Animation Delay", 'premium-block-for-gutenberg')}
                                value={titleStyles[0].animateDelay}
                                onChange={(value) => saveTitleStyles({ animateDelay: value })}
                                showUnit={false}
                                defaultValue={2}
                                min={1}
                                max={30}
                                step={0.5}
                            />
                        }
                        {style === "style8" &&
                            <ResponsiveSingleRangeControl
                                label={__("Animation Duration", 'premium-block-for-gutenberg')}
                                value={titleStyles[0].animateduration}
                                onChange={(value) => saveTitleStyles({ animateduration: value })}
                                showUnit={false}
                                defaultValue={1}
                                step={0.5}
                            />
                        }
                        <PremiumResponsiveMargin
                            directions={["all"]}
                            marginTop={titleMarginT}
                            marginRight={titleMarginR}
                            marginBottom={titleMarginB}
                            marginLeft={titleMarginL}
                            marginTopTablet={titleMarginTTablet}
                            marginRightTablet={titleMarginRTablet}
                            marginBottomTablet={titleMarginBTablet}
                            marginLeftTablet={titleMarginLTablet}
                            marginTopMobile={titleMarginTMobile}
                            marginRightMobile={titleMarginRMobile}
                            marginBottomMobile={titleMarginBMobile}
                            marginLeftMobile={titleMarginLMobile}
                            showUnits={true}
                            onChangeMarSizeUnit={newvalue => saveTitleStyles({ titleMarginType: newvalue })}
                            selectedUnit={titleStyles[0].titleMarginType}
                            onChangeMarginTop={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ titleMarginT: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ titleMarginTTablet: newValue })
                                    } else {
                                        setAttributes({ titleMarginTMobile: newValue })
                                    }
                                }
                            }
                            onChangeMarginRight={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ titleMarginR: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ titleMarginRTablet: newValue })
                                    } else {
                                        setAttributes({ titleMarginRMobile: newValue })
                                    }
                                }
                            }
                            onChangeMarginBottom={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ titleMarginB: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ titleMarginBTablet: newValue })
                                    } else {
                                        setAttributes({ titleMarginBMobile: newValue })
                                    }
                                }
                            }
                            onChangeMarginLeft={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ titleMarginL: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ titleMarginLTablet: newValue })
                                    } else {
                                        setAttributes({ titleMarginLMobile: newValue })
                                    }
                                }
                            }

                        />
                        <PremiumResponsivePadding
                            paddingTop={titlePaddingT}
                            paddingRight={titlePaddingR}
                            paddingBottom={titlePaddingB}
                            paddingLeft={titlePaddingL}
                            paddingTopTablet={titlePaddingTTablet}
                            paddingRightTablet={titlePaddingRTablet}
                            paddingBottomTablet={titlePaddingBTablet}
                            paddingLeftTablet={titlePaddingLTablet}
                            paddingTopMobile={titlePaddingTMobile}
                            paddingRightMobile={titlePaddingRMobile}
                            paddingBottomMobile={titlePaddingBMobile}
                            paddingLeftMobile={titlePaddingLMobile}
                            showUnits={true}
                            selectedUnit={titleStyles[0].titlePaddingType}
                            onChangePadSizeUnit={newvalue => saveTitleStyles({ titlePaddingType: newvalue })}
                            onChangePaddingTop={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ titlePaddingT: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ titlePaddingTTablet: newValue })
                                    } else {
                                        setAttributes({ titlePaddingTMobile: newValue })
                                    }
                                }
                            }
                            onChangePaddingRight={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ titlePaddingR: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ titlePaddingRTablet: newValue })
                                    } else {
                                        setAttributes({ titlePaddingRMobile: newValue })
                                    }
                                }
                            }
                            onChangePaddingBottom={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ titlePaddingB: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ titlePaddingBTablet: newValue })
                                    } else {
                                        setAttributes({ titlePaddingBMobile: newValue })
                                    }
                                }
                            }
                            onChangePaddingLeft={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ titlePaddingL: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ titlePaddingLTablet: newValue })
                                    } else {
                                        setAttributes({ titlePaddingLMobile: newValue })
                                    }
                                }
                            }
                        />
                        {/* {style !== "style9" && <ToggleControl
                            label={__('Stroke')}
                            checked={stroke}
                            onChange={(newValue) => setAttributes({ stroke: newValue })}
                        />}
                        {
                            stroke && <Fragment>
                                <p>{__('Stroke Color')}</p>
                                <ColorPalette
                                    value={strokeColor}
                                    onChange={(newValue) => setAttributes({ strokeColor: newValue })}
                                    allowReset={true}
                                />
                                <RangeControl
                                    label={__('Stroke Full Width')}
                                    value={strokeFull}
                                    onChange={(newValue) => setAttributes({ strokeFull: newValue })}
                                    min={0}
                                    max={100}
                                    step={1}
                                />
                            </Fragment>
                        }  */}
                    </PanelBody>
                    {
                        iconValue && <PanelBody
                            title={__("Icon Style")}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            {iconType === 'icon' &&
                                <AdvancedPopColorControl
                                    label={__("Color", 'premium-block-for-gutenberg')}
                                    colorValue={iconStyles[0].iconColor}
                                    colorDefault={''}
                                    onColorChange={newValue =>
                                        saveIconStyles({
                                            iconColor: newValue
                                        })
                                    }
                                />
                                // <Fragment>
                                //     <p>{__("Color")}</p>
                                //     <ColorPalette
                                //         value={iconColor}
                                //         onChange={newValue =>
                                //             setAttributes({
                                //                 iconColor: newValue
                                //             })
                                //         }
                                //         allowReset={true}
                                //     />
                                // </Fragment>
                            }
                            <ResponsiveRangeControl
                                label={__("Size", 'premium-block-for-gutenberg')}
                                value={iconStyles[0].iconSize}
                                tabletValue={iconStyles[0].iconSizeTablet}
                                mobileValue={iconStyles[0].iconSizeMobile}
                                onChange={(value) => saveIconStyles({ iconSize: value })}
                                onChangeTablet={(value) => saveIconStyles({ iconSizeTablet: value })}
                                onChangeMobile={(value) => saveIconStyles({ iconSizeMobile: value })}
                                onChangeUnit={(key) =>
                                    saveIconStyles({ iconSizeType: key })
                                }
                                unit={iconStyles[0].iconSizeType}
                                showUnit={true}
                                defaultValue={20}
                                min={1}
                                max={100}
                            />
                            <PremiumBackgroundControl
                                setAttributes={setAttributes}
                                saveContainerStyle={saveIconStyles}
                                backgroundType={backgroundType}
                                backgroundColor={iconStyles[0].containerBack}
                                backgroundImageID={iconStyles[0].backgroundImageID}
                                backgroundImageURL={iconStyles[0].backgroundImageURL}
                                backgroundPosition={iconStyles[0].backgroundPosition}
                                backgroundRepeat={iconStyles[0].backgroundRepeat}
                                backgroundSize={iconStyles[0].backgroundSize}
                                fixed={iconStyles[0].fixed}
                                gradientLocationOne={iconStyles[0].gradientLocationOne}
                                gradientColorTwo={iconStyles[0].gradientColorTwo}
                                gradientLocationTwo={iconStyles[0].gradientLocationTwo}
                                gradientAngle={iconStyles[0].gradientAngle}
                                gradientPosition={iconStyles[0].gradientPosition}
                                gradientType={iconStyles[0].gradientType}
                            />
                            <PremiumBorder
                                borderType={iconStyles[0].iconborderType}
                                borderWidth={iconBorderWidth}
                                top={iconBorderTop}
                                right={iconBorderRight}
                                bottom={iconBorderBottom}
                                left={iconBorderLeft}
                                borderColor={iconStyles[0].iconborderColor}
                                borderRadius={iconStyles[0].iconborderRadius}
                                onChangeType={newType => saveIconStyles({ iconborderType: newType })}
                                onChangeWidth={({ top, right, bottom, left }) =>
                                    setAttributes({
                                        iconBorderUpdated: true,
                                        iconBorderTop: top,
                                        iconBorderRight: right,
                                        iconBorderBottom: bottom,
                                        iconBorderLeft: left,
                                    })
                                }
                                onChangeColor={colorValue =>
                                    saveIconStyles({ iconborderColor: colorValue })
                                }
                                onChangeRadius={newrRadius =>
                                    saveIconStyles({ iconborderRadius: newrRadius })
                                }
                            />
                            <PremiumResponsiveMargin
                                directions={["all"]}
                                marginTop={iconMarginT}
                                marginRight={iconMarginR}
                                marginBottom={iconMarginB}
                                marginLeft={iconMarginL}
                                marginTopTablet={iconMarginTTablet}
                                marginRightTablet={iconMarginRTablet}
                                marginBottomTablet={iconMarginBTablet}
                                marginLeftTablet={iconMarginLTablet}
                                marginTopMobile={iconMarginTMobile}
                                marginRightMobile={iconMarginRMobile}
                                marginBottomMobile={iconMarginBMobile}
                                marginLeftMobile={iconMarginLMobile}
                                showUnits={true}
                                onChangeMarSizeUnit={newvalue => saveIconStyles({ iconMarginType: newvalue })}
                                selectedUnit={iconStyles[0].iconMarginType}
                                onChangeMarginTop={
                                    (device, newValue) => {
                                        if (device === "desktop") {
                                            setAttributes({ iconMarginT: newValue })
                                        } else if (device === "tablet") {
                                            setAttributes({ iconMarginTTablet: newValue })
                                        } else {
                                            setAttributes({ iconMarginTMobile: newValue })
                                        }
                                    }
                                }
                                onChangeMarginRight={
                                    (device, newValue) => {
                                        if (device === "desktop") {
                                            setAttributes({ iconMarginR: newValue })
                                        } else if (device === "tablet") {
                                            setAttributes({ iconMarginRTablet: newValue })
                                        } else {
                                            setAttributes({ iconMarginRMobile: newValue })
                                        }
                                    }
                                }
                                onChangeMarginBottom={
                                    (device, newValue) => {
                                        if (device === "desktop") {
                                            setAttributes({ iconMarginB: newValue })
                                        } else if (device === "tablet") {
                                            setAttributes({ iconMarginBTablet: newValue })
                                        } else {
                                            setAttributes({ iconMarginBMobile: newValue })
                                        }
                                    }
                                }
                                onChangeMarginLeft={
                                    (device, newValue) => {
                                        if (device === "desktop") {
                                            setAttributes({ iconMarginL: newValue })
                                        } else if (device === "tablet") {
                                            setAttributes({ iconMarginLTablet: newValue })
                                        } else {
                                            setAttributes({ iconMarginLMobile: newValue })
                                        }
                                    }
                                }

                            />
                            <PremiumResponsivePadding
                                paddingTop={iconPaddingT}
                                paddingRight={iconPaddingR}
                                paddingBottom={iconPaddingB}
                                paddingLeft={iconPaddingL}
                                paddingTopTablet={iconPaddingTTablet}
                                paddingRightTablet={iconPaddingRTablet}
                                paddingBottomTablet={iconPaddingBTablet}
                                paddingLeftTablet={iconPaddingLTablet}
                                paddingTopMobile={iconPaddingTMobile}
                                paddingRightMobile={iconPaddingRMobile}
                                paddingBottomMobile={iconPaddingBMobile}
                                paddingLeftMobile={iconPaddingLMobile}
                                showUnits={true}
                                selectedUnit={iconStyles[0].iconPaddingType}
                                onChangePadSizeUnit={newvalue => saveIconStyles({ iconPaddingType: newvalue })}
                                onChangePaddingTop={
                                    (device, newValue) => {
                                        if (device === "desktop") {
                                            setAttributes({ iconPaddingT: newValue })
                                        } else if (device === "tablet") {
                                            setAttributes({ iconPaddingTTablet: newValue })
                                        } else {
                                            setAttributes({ iconPaddingTMobile: newValue })
                                        }
                                    }
                                }
                                onChangePaddingRight={
                                    (device, newValue) => {
                                        if (device === "desktop") {
                                            setAttributes({ iconPaddingR: newValue })
                                        } else if (device === "tablet") {
                                            setAttributes({ iconPaddingRTablet: newValue })
                                        } else {
                                            setAttributes({ iconPaddingRMobile: newValue })
                                        }
                                    }
                                }
                                onChangePaddingBottom={
                                    (device, newValue) => {
                                        if (device === "desktop") {
                                            setAttributes({ iconPaddingB: newValue })
                                        } else if (device === "tablet") {
                                            setAttributes({ iconPaddingBTablet: newValue })
                                        } else {
                                            setAttributes({ iconPaddingBMobile: newValue })
                                        }
                                    }
                                }
                                onChangePaddingLeft={
                                    (device, newValue) => {
                                        if (device === "desktop") {
                                            setAttributes({ iconPaddingL: newValue })
                                        } else if (device === "tablet") {
                                            setAttributes({ iconPaddingLTablet: newValue })
                                        } else {
                                            setAttributes({ iconPaddingLMobile: newValue })
                                        }
                                    }
                                }
                            />
                            {iconType === 'icon' &&
                                <PremiumShadow
                                    label={__("Icon Shadow", 'premium-blocks-for-gutenberg')}
                                    color={iconStyles[0].iconshadowColor}
                                    blur={iconStyles[0].iconshadowBlur}
                                    horizontal={iconStyles[0].iconshadowHorizontal}
                                    vertical={iconStyles[0].iconshadowVertical}
                                    onChangeColor={newColor =>
                                        saveIconStyles({ iconshadowColor: newColor })
                                    }
                                    onChangeBlur={newBlur => saveIconStyles({ iconshadowBlur: newBlur })}
                                    onChangehHorizontal={newValue =>
                                        saveIconStyles({ iconshadowHorizontal: newValue })
                                    }
                                    onChangeVertical={newValue =>
                                        saveIconStyles({ iconshadowVertical: newValue })
                                    }
                                />
                            }
                            {/* {iconType === 'icon' && <PremiumTextShadow
                                color={iconshadowColor}
                                blur={iconshadowBlur}
                                horizontal={iconshadowHorizontal}
                                vertical={iconshadowVertical}
                                onChangeColor={newColor =>
                                    setAttributes({ iconshadowColor: newColor.hex })
                                }
                                onChangeBlur={newBlur => setAttributes({ iconshadowBlur: newBlur })}
                                onChangehHorizontal={newValue =>
                                    setAttributes({ iconshadowHorizontal: newValue })
                                }
                                onChangeVertical={newValue =>
                                    setAttributes({ iconshadowVertical: newValue })
                                }
                                onResetClick={onResetClickIconTextShadow}
                            />
                            } */}
                            {/* <PremiumResponsivePadding
                                paddingTop={iconPaddingT}
                                paddingRight={iconPaddingR}
                                paddingBottom={iconPaddingB}
                                paddingLeft={iconPaddingL}
                                paddingTopTablet={iconPaddingTTablet}
                                paddingRightTablet={iconPaddingRTablet}
                                paddingBottomTablet={iconPaddingBTablet}
                                paddingLeftTablet={iconPaddingLTablet}
                                paddingTopMobile={iconPaddingTMobile}
                                paddingRightMobile={iconPaddingRMobile}
                                paddingBottomMobile={iconPaddingBMobile}
                                paddingLeftMobile={iconPaddingLMobile}
                                showUnits={true}
                                selectedUnit={iconPaddingType}
                                onChangePadSizeUnit={newvalue =>
                                    setAttributes({ iconPaddingType: newvalue })
                                }
                                onChangePaddingTop={
                                    (device, newValue) => {
                                        if (device === "desktop") {
                                            setAttributes({ iconPaddingT: newValue })
                                        } else if (device === "tablet") {
                                            setAttributes({ iconPaddingTTablet: newValue })
                                        } else {
                                            setAttributes({ iconPaddingTMobile: newValue })
                                        }
                                    }
                                }
                                onChangePaddingRight={
                                    (device, newValue) => {
                                        if (device === "desktop") {
                                            setAttributes({ iconPaddingR: newValue })
                                        } else if (device === "tablet") {
                                            setAttributes({ iconPaddingRTablet: newValue })
                                        } else {
                                            setAttributes({ iconPaddingRMobile: newValue })
                                        }
                                    }
                                }
                                onChangePaddingBottom={
                                    (device, newValue) => {
                                        if (device === "desktop") {
                                            setAttributes({ iconPaddingB: newValue })
                                        } else if (device === "tablet") {
                                            setAttributes({ iconPaddingBTablet: newValue })
                                        } else {
                                            setAttributes({ iconPaddingBMobile: newValue })
                                        }
                                    }
                                }
                                onChangePaddingLeft={
                                    (device, newValue) => {
                                        if (device === "desktop") {
                                            setAttributes({ iconPaddingL: newValue })
                                        } else if (device === "tablet") {
                                            setAttributes({ iconPaddingLTablet: newValue })
                                        } else {
                                            setAttributes({ iconPaddingLMobile: newValue })
                                        }
                                    }
                                }
                            />

                            <PremiumResponsiveMargin
                                directions={["all"]}
                                showUnits={true}
                                selectedUnit={iconMarginType}
                                marginTop={iconMarginT}
                                marginRight={iconMarginR}
                                marginBottom={iconMarginB}
                                marginLeft={iconMarginL}
                                marginTopTablet={iconMarginTTablet}
                                marginRightTablet={iconMarginRTablet}
                                marginBottomTablet={iconMarginBTablet}
                                marginLeftTablet={iconMarginLTablet}
                                marginTopMobile={iconMarginTMobile}
                                marginRightMobile={iconMarginRMobile}
                                marginBottomMobile={iconMarginBMobile}
                                marginLeftMobile={iconMarginLMobile}
                                onChangeMarginTop={
                                    (device, newValue) => {
                                        if (device === "desktop") {
                                            setAttributes({ iconMarginT: newValue })
                                        } else if (device === "tablet") {
                                            setAttributes({ iconMarginTTablet: newValue })
                                        } else {
                                            setAttributes({ iconMarginTMobile: newValue })
                                        }
                                    }
                                }
                                onChangeMarginRight={
                                    (device, newValue) => {
                                        if (device === "desktop") {
                                            setAttributes({ iconMarginR: newValue })
                                        } else if (device === "tablet") {
                                            setAttributes({ iconMarginRTablet: newValue })
                                        } else {
                                            setAttributes({ iconMarginRMobile: newValue })
                                        }
                                    }
                                }
                                onChangeMarginBottom={
                                    (device, newValue) => {
                                        if (device === "desktop") {
                                            setAttributes({ iconMarginB: newValue })
                                        } else if (device === "tablet") {
                                            setAttributes({ iconMarginBTablet: newValue })
                                        } else {
                                            setAttributes({ iconMarginBMobile: newValue })
                                        }
                                    }
                                }
                                onChangeMarginLeft={
                                    (device, newValue) => {
                                        if (device === "desktop") {
                                            setAttributes({ iconMarginL: newValue })
                                        } else if (device === "tablet") {
                                            setAttributes({ iconMarginLTablet: newValue })
                                        } else {
                                            setAttributes({ iconMarginLMobile: newValue })
                                        }
                                    }
                                }
                                onChangeMarSizeUnit={(newvalue) => setAttributes({ iconMarginType: newvalue })}

                            /> */}
                        </PanelBody>
                    }
                    {
                        backgroundText &&
                        <PanelBody
                            title={__("Background Text")}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <Fragment>
                                <p> {__('Color')}</p>
                                <ColorPalette
                                    value={textBackColor}
                                    onChange={newValue =>
                                        setAttributes({
                                            textBackColor: newValue
                                        })
                                    }
                                    allowReset={true}
                                />
                            </Fragment>
                            <PremiumTypo
                                components={["responsiveSize", "weight", "style", "upper", "spacing"]}
                                setAttributes={setAttributes}
                                fontSizeType={{ value: textBackfontSizeType, label: __("textBackfontSizeType") }}
                                fontSize={{ value: textBackfontSize, label: __("textBackfontSize") }}
                                fontSizeMobile={{ value: textBackfontSizeMobile, label: __("textBackfontSizeMobile") }}
                                fontSizeTablet={{ value: textBackfontSizeTablet, label: __("textBackfontSizeTablet") }}
                                weight={textBackWeight}
                                style={textBackStyle}
                                spacing={textBackLetter}
                                upper={textBackUpper}
                                onChangeWeight={newWeight =>
                                    setAttributes({ textBackWeight: newWeight || 600 })
                                }
                                onChangeStyle={newStyle =>
                                    setAttributes({ textBackStyle: newStyle })
                                }
                                onChangeSpacing={newValue =>
                                    setAttributes({ textBackLetter: newValue })
                                }
                                onChangeUpper={check => setAttributes({ textBackUpper: check })}
                            />
                            {/* <PremiumTextShadow
                                color={textBackshadowColor}
                                blur={textBackshadowBlur}
                                horizontal={textBackshadowHorizontal}
                                vertical={textBackshadowVertical}
                                onChangeColor={newColor =>
                                    setAttributes({ textBackshadowColor: newColor.hex })
                                }
                                onChangeBlur={newBlur => setAttributes({ textBackshadowBlur: newBlur })}
                                onChangehHorizontal={newValue =>
                                    setAttributes({ textBackshadowHorizontal: newValue })
                                }
                                onChangeVertical={newValue =>
                                    setAttributes({ textBackshadowVertical: newValue })
                                }

                            /> */}
                            <hr />

                            <SelectControl
                                label={__("Blend Mode ")}
                                value={blend}
                                onChange={newSelect => setAttributes({ blend: newSelect })}
                                options={BLEND}
                            />
                            <RangeControl
                                label={__("z-index")}
                                value={zIndex}
                                min={0}
                                max={100}
                                onChange={value => setAttributes({ zIndex: value })}
                            />
                        </PanelBody>
                    }
                    <PremiumResponsiveTabs
                        Desktop={hideDesktop}
                        Tablet={hideTablet}
                        Mobile={hideMobile}
                        onChangeDesktop={(value) => setAttributes({ hideDesktop: value ? " premium-desktop-hidden" : "" })}
                        onChangeTablet={(value) => setAttributes({ hideTablet: value ? " premium-tablet-hidden" : "" })}
                        onChangeMobile={(value) => setAttributes({ hideMobile: value ? " premium-mobile-hidden" : "" })}
                    />
                </InspectorControls >
            ),
            renderCss,
            <div
                id={`premium-title-${block_id}`}
                className={`premium-block-${block_id} ${hideDesktop} ${hideTablet} ${hideMobile}`} style={{
                    textAlign: align,
                }} >

                <div className={`premium-title  ${backgroundText ? 'premium-title-bg-text' : ""}`} style={{
                    textAlign: align,
                }} data-backgroundText={BackText}>
                    <div className={`premium-title-container ${style} ${style}-${align}`} data-shiny-delay={titleStyles[0].animateDelay} data-shiny-dur={titleStyles[0].animateduration}>

                        <div className={`premium-title-header premium-title-${style}__wrap ${align} ${iconValue ? iconPosition : ""} ${iconPosition == 'top' ? `premium-title-${iconAlign}` : ""}`} data-shiny-delay={titleStyles[0].animateDelay} data-shiny-dur={titleStyles[0].animateduration}>

                            {style === 'style7' ? <Fragment>
                                {iconPosition != 'top' && iconValue && <span className={`premium-title-style7-stripe__wrap premium-stripe-${stripePosition} premium-stripe-${stripeAlign}`}>
                                    <span className={`premium-title-style7-stripe-span`}></span>
                                </span>
                                }
                                {!iconValue && <span className={`premium-title-style7-stripe__wrap premium-stripe-${stripePosition} premium-stripe-${stripeAlign}`}>
                                    <span className={`premium-title-style7-stripe-span`}></span>
                                </span>
                                }
                                <div className={`premium-title-style7-inner-title`}>
                                    {
                                        iconValue && iconType == 'icon' && <i className={`premium-title-icon ${icon}`} />
                                    }
                                    {
                                        iconValue && iconType == 'image' && < img className={`premium-title-icon`} src={imageURL} />
                                    }
                                    {
                                        iconValue && iconType == 'lottie' && lottieURl && <div className=" premium-title-icon premium-lottie-animation"> <Lottie
                                            options={{
                                                loop: loop,
                                                path: lottieURl,
                                                rendererSettings: {
                                                    preserveAspectRatio: 'xMidYMid'
                                                }
                                            }}
                                            direction={reverse}
                                        />
                                        </div>
                                    }
                                    {iconValue && iconPosition === 'top' && <span className={`premium-title-style7-stripe__wrap premium-stripe-${stripePosition} premium-stripe-${stripeAlign}`}>
                                        <span className={`premium-title-style7-stripe-span`}></span>
                                    </span>
                                    }
                                    <span>
                                        <RichText
                                            tagName={titleTag.toLowerCase()}
                                            className={`premium-title-text-title`}
                                            value={title}
                                            style={{
                                                color: titleStyles[0].titleColor,
                                                fontSize: TitleSize + titleStyles[0].titlefontSizeType,
                                                fontWeight: titleStyles[0].titleWeight,
                                                letterSpacing: titleStyles[0].titleLetter + "px",
                                                lineHeight: titleStyles[0].titleLine + "px",
                                                fontStyle: titleStyles[0].titleStyle,
                                                textTransform: titleStyles[0].titleUpper ? "uppercase" : "none",
                                                fontFamily: titleStyles[0].titleFontFamily,
                                                textShadow: `${titleStyles[0].titleShadowHorizontal}px ${titleStyles[0].titleShadowVertical}px ${titleStyles[0].titleShadowBlur}px ${titleStyles[0].titleShadowColor}`,
                                                marginTop: TitleMarginTop + titleStyles[0].titleMarginType,
                                                marginBottom: TitleMarginBottom + titleStyles[0].titleMarginType,
                                                marginLeft: TitleMarginLeft + titleStyles[0].titleMarginType,
                                                marginRight: TitleMarginRight + titleStyles[0].titleMarginType,
                                                paddingTop: TitlePaddingTop + titleStyles[0].titlePaddingType,
                                                paddingBottom: TitlePaddingBottom + titleStyles[0].titlePaddingType,
                                                paddingLeft: TitlePaddingLeft + titleStyles[0].titlePaddingType,
                                                paddingRight: TitlePaddingRight + titleStyles[0].titlePaddingType,
                                                minHeight: '15px'
                                            }}
                                        />
                                    </span>
                                </div>
                            </Fragment>
                                : style === "style9" ? <Fragment>
                                    {iconValue && iconType == 'icon' && <i className={`premium-title-icon ${icon}`} />
                                    }
                                    {
                                        iconValue && iconType == 'image' && < img className={`premium-title-icon`} src={imageURL} />
                                    }
                                    {
                                        iconValue && iconType == 'lottie' && lottieURl && <div className=" premium-title-icon premium-lottie-animation"> <Lottie
                                            options={{
                                                loop: loop,
                                                path: lottieURl,
                                                rendererSettings: {
                                                    preserveAspectRatio: 'xMidYMid'
                                                }
                                            }}
                                            direction={reverse}
                                        />
                                        </div>
                                    }

                                    <span className={`premium-letters-container`}>
                                        {styleContainer}
                                    </span>

                                </Fragment> : <Fragment>
                                        {iconValue && iconType == 'icon' && <i className={`premium-title-icon ${icon}`} />
                                        }
                                        {
                                            iconValue && iconType == 'image' && < img className={`premium-title-icon`} src={imageURL} />
                                        }
                                        {
                                            iconValue && iconType == 'lottie' && lottieURl && <div className=" premium-title-icon premium-lottie-animation"> <Lottie
                                                options={{
                                                    loop: loop,
                                                    path: lottieURl,
                                                    rendererSettings: {
                                                        preserveAspectRatio: 'xMidYMid'
                                                    }
                                                }}
                                                direction={reverse}
                                            />
                                            </div>
                                        }
                                        <span>
                                            <RichText
                                                tagName={titleTag.toLowerCase()}
                                                className={`premium-title-text-title`}
                                                onChange={(newValue) => setAttributes({ title: newValue })}
                                                value={title}
                                                style={{
                                                    color: titleStyles[0].titleColor,
                                                    fontSize: TitleSize + titleStyles[0].titlefontSizeType,
                                                    fontWeight: titleStyles[0].titleWeight,
                                                    letterSpacing: titleStyles[0].titleLetter + "px",
                                                    lineHeight: titleStyles[0].titleLine + "px",
                                                    fontStyle: titleStyles[0].titleStyle,
                                                    textTransform: titleStyles[0].titleUpper ? "uppercase" : "none",
                                                    fontFamily: titleStyles[0].titleFontFamily,
                                                    textShadow: `${titleStyles[0].titleShadowHorizontal}px ${titleStyles[0].titleShadowVertical}px ${titleStyles[0].titleShadowBlur}px ${titleStyles[0].titleShadowColor}`,
                                                    marginTop: TitleMarginTop + titleStyles[0].titleMarginType,
                                                    marginBottom: TitleMarginBottom + titleStyles[0].titleMarginType,
                                                    marginLeft: TitleMarginLeft + titleStyles[0].titleMarginType,
                                                    marginRight: TitleMarginRight + titleStyles[0].titleMarginType,
                                                    paddingTop: TitlePaddingTop + titleStyles[0].titlePaddingType,
                                                    paddingBottom: TitlePaddingBottom + titleStyles[0].titlePaddingType,
                                                    paddingLeft: TitlePaddingLeft + titleStyles[0].titlePaddingType,
                                                    paddingRight: TitlePaddingRight + titleStyles[0].titlePaddingType,
                                                    minHeight: '15px'
                                                }}
                                            />
                                        </span>
                                    </Fragment>
                            }
                            {link && url !== ' ' && <a rel="noopener noreferrer" target={"_self"} href="javascript:void(0)" ></a>}
                        </div>

                    </div>
                </div>
            </div >
        ]
    }
}

export default edit