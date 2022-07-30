import classnames from "classnames";
import PremiumTypo from "../../components/premium-typo";
import PremiumBorder from "../../components/premium-border";
import iconsList from "../../components/premium-icons-list";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import AdvancedPopColorControl from '../../components/Color Control/ColorComponent'
import PremiumShadow from "../../components/PremiumShadow";
import PremiumResponsiveTabs from '../../components/premium-responsive-tabs';
import ResponsiveRangeControl from "../../components/RangeControl/responsive-range-control";
import PremiumBackgroundControl from "../../components/Premium-Background-Control"
import ResponsiveSingleRangeControl from "../../components/RangeControl/single-range-control";
import PremiumMediaUpload from '../../components/premium-media-upload';
import Lottie from 'react-lottie-with-segments';
import { generateBlockId, generateCss, typographyCss, paddingCss, marginCss, borderCss } from '../../components/HelperFunction';
import Icons from "../../components/icons";
import MultiButtonsControl from '../../components/responsive-radio';
import SpacingComponent from '../../components/premium-responsive-spacing';
import InspectorTabs from '../../components/inspectorTabs';
import InspectorTab from '../../components/inspectorTab';

const { __ } = wp.i18n

const { withSelect } = wp.data

const {
    Component,
    Fragment,
} = wp.element

const {
    InspectorControls,
    RichText
} = wp.editor

const {
    PanelBody,
    SelectControl,
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
        const { setAttributes, clientId } = this.props;
        if (!this.props.attributes.blockId) {
            setAttributes({ blockId: "premium-heading-" + generateBlockId(clientId) });
        }
        this.props.setAttributes({ classMigrate: true })
        // Pushing Style tag for this block css.
        this.handleStyle = this.handleStyle.bind(this);
        this.getPreviewSize = this.getPreviewSize.bind(this);
    }

    componentDidUpdate() {
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
        const { attributes, setAttributes, isSelected, className } = this.props;

        const {
            blockId,
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
            strokeStyles,
            titleStyles,
            titleBorder,
            iconStyles,
            iconBackground,
            iconBorder,
            textStyles,
            stripeAlign,
            titleMargin,
            titlePadding,
            iconPadding,
            iconMargin,
            backgroundText,
            BackText,
            textWidth,
            blend,
            zIndex,
            hideDesktop,
            hideTablet,
            hideMobile,
            strokeFull,
            iconSize,
            iconshadow,
            rotateText,
            verticalText,
            horizontalText,
            textBackshadow,
            textTypography,
            stripeBottomSpacing,
            stripeTopSpacing,
            stripeHeight,
            stripeWidth,
            titleTypography,
            titleShadow,
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

        const TitleMarginTop = titleMargin?.[this.props.deviceType]?.top;
        const TitleMarginRight = titleMargin?.[this.props.deviceType]?.right;
        const TitleMarginBottom = titleMargin?.[this.props.deviceType]?.bottom;
        const TitleMarginLeft = titleMargin?.[this.props.deviceType]?.left;
        const TitlePaddingTop = titlePadding?.[this.props.deviceType]?.top;
        const TitlePaddingRight = titlePadding?.[this.props.deviceType]?.right;
        const TitlePaddingBottom = titlePadding?.[this.props.deviceType]?.bottom;
        const TitlePaddingLeft = titlePadding?.[this.props.deviceType]?.left;
        const IconMarginTop = iconMargin?.[this.props.deviceType]?.top;
        const IconMarginRight = iconMargin?.[this.props.deviceType]?.right;
        const IconMarginBottom = iconMargin?.[this.props.deviceType]?.bottom;
        const IconMarginLeft = iconMargin?.[this.props.deviceType]?.left;
        const IconPaddingTop = iconPadding?.[this.props.deviceType]?.top;
        const IconPaddingRight = iconPadding?.[this.props.deviceType]?.right;
        const IconPaddingBottom = iconPadding?.[this.props.deviceType]?.bottom;
        const IconPaddingLeft = iconPadding?.[this.props.deviceType]?.left;

        let btnGrad, btnGrad2, btnbg;

        if (undefined !== iconBackground.backgroundType && 'gradient' === iconBackground.backgroundType) {
            btnGrad = ('transparent' === iconBackground.backgroundColor || undefined === iconBackground.backgroundColor ? 'rgba(255,255,255,0)' : iconBackground.backgroundColor);
            btnGrad2 = (undefined !== iconBackground.gradientColorTwo && undefined !== iconBackground.gradientColorTwo && '' !== iconBackground.gradientColorTwo ? iconBackground.gradientColorTwo : '#777');
            if ('radial' === iconBackground.gradientType) {
                btnbg = `radial-gradient(at ${iconBackground.gradientPosition}, ${btnGrad} ${iconBackground.gradientLocationOne}%, ${btnGrad2} ${iconBackground.gradientLocationTwo}%)`;
            } else if ('radial' !== iconBackground.gradientType) {
                btnbg = `linear-gradient(${iconBackground.gradientAngle}deg, ${btnGrad} ${iconBackground.gradientLocationOne}%, ${btnGrad2} ${iconBackground.gradientLocationTwo}%)`;
            }
        } else {
            btnbg = iconBackground.backgroundImageURL ? `url('${iconBackground.backgroundImageURL}')` : ''
        }

        const loadStyles = () => {
            const styles = {};

            styles[`.${blockId} .premium-title-style8__wrap .premium-title-text-title[data-animation='shiny']`] = {
                '--base-color': `${titleStyles[0].titleColor}!important`,
                '--shiny-color': `${titleStyles[0].shinyColor}!important`,
                '--animation-speed': `${titleStyles[0].animateduration}s!important`
            };
            styles[`.${blockId} .premium-title-header`] = {
                '--shadow-color': `${titleStyles[0].blurColor}!important`,
                '--shadow-value': `${titleStyles[0].blurShadow}px!important`,
                'color': `${titleStyles[0].titleColor}!important`,
            };
            styles[`.${blockId} .premium-title .style1 .premium-title-header`] = {
                'border-color': `${titleBorder.borderColor}!important`,
                'border-style': `${titleBorder.borderType}!important`,
                'border-top-width': `${titleBorder?.borderWidth?.[this.props.deviceType]?.top}px!important`,
                'border-right-width': `${titleBorder?.borderWidth?.[this.props.deviceType]?.right}px!important`,
                'border-bottom-width': `${titleBorder?.borderWidth?.[this.props.deviceType]?.bottom}px!important`,
                'border-left-width': `${titleBorder?.borderWidth?.[this.props.deviceType]?.left}px!important`,
                'border-top-left-radius': `${titleBorder?.borderRadius?.[this.props.deviceType]?.top}px!important`,
                'border-top-right-radius': `${titleBorder?.borderRadius?.[this.props.deviceType]?.right}px!important`,
                'border-bottom-left-radius': `${titleBorder?.borderRadius?.[this.props.deviceType]?.bottom}px!important`,
                'border-bottom-right-radius': `${titleBorder?.borderRadius?.[this.props.deviceType]?.left}px!important`,
                'border-left': titleBorder?.borderWidth?.[this.props.deviceType]?.left >= "1" ? `${titleBorder?.borderWidth?.[this.props.deviceType]?.left}px ${titleBorder.borderType} ${titleBorder.borderColor}!important` : '',
            };

            styles[`.${blockId} .premium-title .style2`] = {
                'border-color': `${titleBorder.borderColor}!important`,
                'border-style': `${titleBorder.borderType}!important`,
                'border-top-width': `${titleBorder?.borderWidth?.[this.props.deviceType]?.top}px!important`,
                'border-right-width': `${titleBorder?.borderWidth?.[this.props.deviceType]?.right}px!important`,
                'border-bottom-width': `${titleBorder?.borderWidth?.[this.props.deviceType]?.bottom}px!important`,
                'border-left-width': `${titleBorder?.borderWidth?.[this.props.deviceType]?.left}px!important`,
                'border-top-left-radius': `${titleBorder?.borderRadius?.[this.props.deviceType]?.top}px!important`,
                'border-top-right-radius': `${titleBorder?.borderRadius?.[this.props.deviceType]?.right}px!important`,
                'border-bottom-left-radius': `${titleBorder?.borderRadius?.[this.props.deviceType]?.bottom}px!important`,
                'border-bottom-right-radius': `${titleBorder?.borderRadius?.[this.props.deviceType]?.left}px!important`,
                'border-bottom': titleBorder?.borderWidth?.[this.props.deviceType]?.bottom >= "0" ? `${titleBorder?.borderWidth?.[this.props.deviceType]?.bottom}px ${titleBorder.borderType} ${titleBorder.borderColor}!important` : '',
            };

            styles[`.${blockId} .premium-title .style4`] = {
                'border-color': `${titleBorder.borderColor}!important`,
                'border-style': `${titleBorder.borderType}!important`,
                'border-top-width': `${titleBorder?.borderWidth?.[this.props.deviceType]?.top}px!important`,
                'border-right-width': `${titleBorder?.borderWidth?.[this.props.deviceType]?.right}px!important`,
                'border-bottom-width': `${titleBorder?.borderWidth?.[this.props.deviceType]?.bottom}px!important`,
                'border-left-width': `${titleBorder?.borderWidth?.[this.props.deviceType]?.left}px!important`,
                'border-top-left-radius': `${titleBorder?.borderRadius?.[this.props.deviceType]?.top}px!important`,
                'border-top-right-radius': `${titleBorder?.borderRadius?.[this.props.deviceType]?.right}px!important`,
                'border-bottom-left-radius': `${titleBorder?.borderRadius?.[this.props.deviceType]?.bottom}px!important`,
                'border-bottom-right-radius': `${titleBorder?.borderRadius?.[this.props.deviceType]?.left}px!important`,
                'border-bottom': titleBorder?.borderWidth?.[this.props.deviceType]?.bottom >= "0" ? `${titleBorder?.borderWidth?.[this.props.deviceType]?.bottom}px ${titleBorder.borderType} ${titleBorder.borderColor}!important` : '',
            };

            styles[`.${blockId} .premium-title .style5`] = {
                'border-color': `${titleBorder.borderColor}!important`,
                'border-style': `${titleBorder.borderType}!important`,
                'border-top-width': `${titleBorder?.borderWidth?.[this.props.deviceType]?.top}px!important`,
                'border-right-width': `${titleBorder?.borderWidth?.[this.props.deviceType]?.right}px!important`,
                'border-bottom-width': `${titleBorder?.borderWidth?.[this.props.deviceType]?.bottom}px!important`,
                'border-left-width': `${titleBorder?.borderWidth?.[this.props.deviceType]?.left}px!important`,
                'border-top-left-radius': `${titleBorder?.borderRadius?.[this.props.deviceType]?.top}px!important`,
                'border-top-right-radius': `${titleBorder?.borderRadius?.[this.props.deviceType]?.right}px!important`,
                'border-bottom-left-radius': `${titleBorder?.borderRadius?.[this.props.deviceType]?.bottom}px!important`,
                'border-bottom-right-radius': `${titleBorder?.borderRadius?.[this.props.deviceType]?.left}px!important`,
                'border-bottom': titleBorder?.borderWidth?.[this.props.deviceType]?.bottom >= "0" ? `${titleBorder?.borderWidth?.[this.props.deviceType]?.bottom}px ${titleBorder.borderType} ${titleBorder.borderColor}!important` : '',
            };

            styles[`.${blockId} .premium-title .style6`] = {
                'border-color': `${titleBorder.borderColor}!important`,
                'border-style': `${titleBorder.borderType}!important`,
                'border-top-width': `${titleBorder?.borderWidth?.[this.props.deviceType]?.top}px!important`,
                'border-right-width': `${titleBorder?.borderWidth?.[this.props.deviceType]?.right}px!important`,
                'border-bottom-width': `${titleBorder?.borderWidth?.[this.props.deviceType]?.bottom}px!important`,
                'border-left-width': `${titleBorder?.borderWidth?.[this.props.deviceType]?.left}px!important`,
                'border-top-left-radius': `${titleBorder?.borderRadius?.[this.props.deviceType]?.top}px!important`,
                'border-top-right-radius': `${titleBorder?.borderRadius?.[this.props.deviceType]?.right}px!important`,
                'border-bottom-left-radius': `${titleBorder?.borderRadius?.[this.props.deviceType]?.bottom}px!important`,
                'border-bottom-right-radius': `${titleBorder?.borderRadius?.[this.props.deviceType]?.left}px!important`,
                'border-bottom': titleBorder?.borderWidth?.[this.props.deviceType]?.bottom >= "0" ? `${titleBorder?.borderWidth?.[this.props.deviceType]?.bottom}px ${titleBorder.borderType} ${titleBorder.borderColor}!important` : '',
            };

            styles[`.${blockId} .premium-title-style2__wrap`] = {
                'background-color': `${titleStyles[0].BGColor}!important`,
            };

            styles[`.${blockId} .premium-title-style3__wrap`] = {
                'background-color': `${titleStyles[0].BGColor}!important`,
            };

            styles[`.${blockId} .premium-title-style5__wrap`] = {
                'border-bottom': `2px solid ${titleStyles[0].lineColor}!important`,
            };

            styles[`.${blockId} .premium-title-style6__wrap`] = {
                'border-bottom': `2px solid ${titleStyles[0].lineColor}!important`,
            };

            styles[`.${blockId} .premium-title-style6__wrap:before`] = {
                'border-bottom-color': `${titleStyles[0].triangleColor}!important`,
            };

            styles[`.${blockId} .premium-title-icon`] = {
                'color': `${iconStyles[0].iconColor} !important`,
                'background-color': `${iconBackground.backgroundType === "solid" ? iconBackground.backgroundColor : "transparent"} !important`,
                'background-image': `${btnbg} !important`,
                'background-repeat': `${iconBackground.backgroundRepeat} !important`,
                'background-position': `${iconBackground.backgroundPosition} !important`,
                'background-size': `${iconBackground.backgroundSize} !important`,
                'background-attachment': `${iconBackground.fixed ? "fixed" : "unset"} !important`,
                'font-size': `${iconSize?.[this.props.deviceType]}${iconSize?.unit} !important`,
                'border-color': `${iconBorder.borderColor}!important`,
                'border-style': `${iconBorder.borderType}!important`,
                'border-top-width': `${iconBorder?.borderWidth?.[this.props.deviceType]?.top}px!important`,
                'border-right-width': `${iconBorder?.borderWidth?.[this.props.deviceType]?.right}px!important`,
                'border-bottom-width': `${iconBorder?.borderWidth?.[this.props.deviceType]?.bottom}px!important`,
                'border-left-width': `${iconBorder?.borderWidth?.[this.props.deviceType]?.left}px!important`,
                'border-top-left-radius': `${iconBorder?.borderRadius?.[this.props.deviceType]?.top}px!important`,
                'border-top-right-radius': `${iconBorder?.borderRadius?.[this.props.deviceType]?.right}px!important`,
                'border-bottom-left-radius': `${iconBorder?.borderRadius?.[this.props.deviceType]?.bottom}px!important`,
                'border-bottom-right-radius': `${iconBorder?.borderRadius?.[this.props.deviceType]?.left}px!important`,
                'padding-top': `${IconPaddingTop}${iconPadding.unit} !important`,
                'padding-right': `${IconPaddingRight}${iconPadding.unit} !important`,
                'padding-bottom': `${IconPaddingBottom}${iconPadding.unit} !important`,
                'padding-left': `${IconPaddingLeft}${iconPadding.unit} !important`,
                'margin-top': `${IconMarginTop}${iconPadding.unit} !important`,
                'margin-right': `${IconMarginRight}${iconPadding.unit} !important`,
                'margin-bottom': `${IconMarginBottom}${iconPadding.unit} !important`,
                'margin-left': `${IconMarginLeft}${iconPadding.unit} !important`,
                'text-shadow': `${iconshadow.horizontal}px ${iconshadow.vertical}px ${iconshadow.blur}px ${iconshadow.color} !important`,
            };

            styles[`.${blockId} .premium-lottie-animation svg`] = {
                'width': `${iconSize?.[this.props.deviceType]}${iconSize?.unit}!important`,
                'height': `${iconSize?.[this.props.deviceType]}${iconSize?.unit}!important`,
            };

            styles[`.${blockId} .premium-title-header img`] = {
                'width': `${iconSize?.[this.props.deviceType]}${iconSize?.unit}!important`,
                'height': `${iconSize?.[this.props.deviceType]}${iconSize?.unit}!important`,
            };

            styles[`.${blockId} .premium-title-bg-text:before`] = {
                'content': `${BackText}`,
                'width': `${textWidth}`,
                'color': `${textStyles[0].textBackColor}`,
                'font-family': `${textTypography?.fontFamily}`,
                'font-size': `${textTypography?.fontSize?.[this.props.deviceType]}${textTypography?.fontSize?.unit}`,
                'font-weight': `${textTypography?.fontWeight}`,
                'letter-spacing': `${textTypography?.letterSpacing?.[this.props.deviceType]}${textTypography?.letterSpacing?.unit}`,
                'line-height': `${textTypography?.lineHeight?.[this.props.deviceType]}${textTypography?.lineHeight?.unit}`,
                'font-style': `${textTypography?.fontStyle}`,
                'text-transform': `${textTypography?.textTransform}`,
                'text-decoration': `${textTypography?.textDecoration}`,
                'mix-blend-mode': `${blend} !important`,
                'text-shadow': `${textBackshadow.horizontal}px ${textBackshadow.vertical}px ${textBackshadow.blur}px ${textBackshadow.color} !important`,
                'z-index': `${zIndex} !important`,
                'top': `${verticalText?.[this.props.deviceType]}${verticalText?.unit} !important`,
                'left': `${horizontalText?.[this.props.deviceType]}${horizontalText?.unit} !important`,
                'transform': `rotate(${rotateText?.[this.props.deviceType]}deg) !important`,
                '-webkit-text-stroke-color': `${strokeStyles[0].strokeColor} !important`,
                '-webkit-text-stroke-width': `${strokeFull?.[this.props.deviceType]}px !important`,
            };

            styles[`.${blockId} .premium-title-style7-stripe-span`] = {
                'width': `${stripeWidth?.[this.props.deviceType]}${stripeWidth?.unit}!important`,
                'height': `${stripeHeight?.[this.props.deviceType]}${stripeHeight?.unit}!important`,
                'background-color': `${titleStyles[0].stripeColor}!important`,
            };

            styles[`.${blockId} .premium-title-style7-stripe__wrap`] = {
                'margin-top': `${stripeTopSpacing?.[this.props.deviceType]}${stripeTopSpacing?.unit}!important`,
                'margin-bottom': `${stripeBottomSpacing?.[this.props.deviceType]}${stripeBottomSpacing?.unit}!important`,
            };

            styles[`.${blockId} .premium-title-style9__wrap .premium-letters-container .premium-title-style9-letter`] = {
                'font-family': `${titleTypography?.fontFamily}`,
                'font-size': `${titleTypography?.fontSize?.[this.props.deviceType]}${titleTypography?.fontSize?.unit}`,
                'font-weight': `${titleTypography?.fontWeight}`,
                'letter-spacing': `${titleTypography?.letterSpacing}`,
                'line-height': `${titleTypography?.lineHeight}`,
                'font-style': `${titleTypography?.fontStyle}`,
                'text-shadow': `${titleShadow.horizontal}px ${titleShadow.vertical}px ${titleShadow.blur}px ${titleShadow.color} !important`,
            };

            return generateCss(styles);
        };

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

        const saveTextStyles = (value) => {
            const newUpdate = textStyles.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({
                textStyles: newUpdate,
            });
        }

        const saveStrokeStyles = (value) => {
            const newUpdate = strokeStyles.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({
                strokeStyles: newUpdate,
            });
        }

        const styleContainer = title.split("").map(letter => {
            return (
                <RichText
                    tagName='span'
                    className={`premium-title-style9-letter`}
                    value={letter}
                    style={{
                        color: titleStyles[0].titleColor
                    }}
                />
            )
        });

        const mainClasses = classnames(className, {
            " premium-desktop-hidden": hideDesktop,
            " premium-tablet-hidden": hideTablet,
            " premium-mobile-hidden": hideMobile,
        });

        const reverse = reversedir ? -1 : 1;

        return [
            isSelected && (
                <InspectorControls key={"inspector"}>
                    <InspectorTabs tabs={['layout', 'style', 'advance']}>
                        <InspectorTab key={'layout'}>
                            <PanelBody
                                title={__("Title")}
                                className="premium-panel-body"
                                initialOpen={true}
                            >
                                <SelectControl
                                    label={__("Style")}
                                    value={style}
                                    onChange={newSelect => setAttributes({ style: newSelect })}
                                    options={STYLE}
                                />
                                <hr />
                                <ToggleControl
                                    label={__("Icon")}
                                    checked={iconValue}
                                    onChange={value => setAttributes({ iconValue: value })}
                                />
                                <hr />
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
                                            <MultiButtonsControl
                                                choices={[{ value: 'left', label: __('Left'), icon: Icons.alignLeft }, { value: 'center', label: __('Center'), icon: Icons.alignCenter }, { value: 'right', label: __('Right'), icon: Icons.alignRight }]}
                                                value={iconAlign}
                                                onChange={(align) => setAttributes({ iconAlign: align })}
                                                label={__("Icon Alignment", "premium-blocks-for-gutenberg")}
                                                showIcons={true} />
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
                                    <ResponsiveRangeControl
                                        label={__("Stripe Width", 'premium-blocks-for-gutenberg')}
                                        value={stripeWidth}
                                        units={['px', 'em', '%']}
                                        onChange={newValue => setAttributes({ stripeWidth: newValue })}
                                        showUnit={true}
                                        min={1}
                                        max={1000}
                                    />
                                    <ResponsiveRangeControl
                                        label={__("Stripe Height", 'premium-blocks-for-gutenberg')}
                                        value={stripeHeight}
                                        units={['px', 'em', '%']}
                                        onChange={newValue => setAttributes({ stripeHeight: newValue })}
                                        showUnit={true}
                                        min={1}
                                        max={1000}
                                    />
                                    <ResponsiveRangeControl
                                        label={__("Stripe Top Spacing", 'premium-blocks-for-gutenberg')}
                                        value={stripeTopSpacing}
                                        units={['px', 'em', '%']}
                                        onChange={newValue => setAttributes({ stripeTopSpacing: newValue })}
                                        showUnit={true}
                                        min={1}
                                        max={1000}
                                    />
                                    <ResponsiveRangeControl
                                        label={__("Stripe Bottom Spacing", 'premium-blocks-for-gutenberg')}
                                        value={stripeBottomSpacing}
                                        units={['px', 'em', '%']}
                                        onChange={newValue => setAttributes({ stripeBottomSpacing: newValue })}
                                        showUnit={true}
                                        min={1}
                                        max={1000}
                                    />
                                    <MultiButtonsControl
                                        choices={[{ value: 'left', label: __('Left'), icon: Icons.alignLeft }, { value: 'center', label: __('Center'), icon: Icons.alignCenter }, { value: 'right', label: __('Right'), icon: Icons.alignRight }]}
                                        value={stripeAlign}
                                        onChange={(align) => setAttributes({ stripeAlign: align })}
                                        label={__("Stripe Alignment", "premium-blocks-for-gutenberg")}
                                        showIcons={true} />
                                </Fragment>
                                }
                                <hr />
                                <SelectControl
                                    label={__("HTML Tag")}
                                    options={TAGS}
                                    value={titleTag}
                                    onChange={(newValue) => setAttributes({ titleTag: newValue })}
                                />
                                <hr />
                                <MultiButtonsControl
                                    choices={[{ value: 'left', label: __('Left'), icon: Icons.alignLeft }, { value: 'center', label: __('Center'), icon: Icons.alignCenter }, { value: 'right', label: __('Right'), icon: Icons.alignRight }]}
                                    value={align}
                                    onChange={(align) => setAttributes({ align: align })}
                                    label={__("Alignment", "premium-blocks-for-gutenberg")}
                                    showIcons={true} />
                                <hr />
                                <ToggleControl
                                    label={__("Link")}
                                    checked={link}
                                    onChange={value => setAttributes({ link: value })}
                                />
                                <hr />
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
                                        <hr />
                                    </Fragment>
                                }
                                <ToggleControl
                                    label={__('background Text')}
                                    checked={backgroundText}
                                    onChange={(value) => setAttributes({ backgroundText: value })}
                                />
                                <hr />
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
                                        <ResponsiveRangeControl
                                            label={__("Horizontal Offset", 'premium-blocks-for-gutenberg')}
                                            value={horizontalText}
                                            onChange={newValue => setAttributes({ horizontalText: newValue })}
                                            units={['px', 'em', '%']}
                                            showUnit={true}
                                            min={-500}
                                            max={500}
                                        />
                                        <ResponsiveRangeControl
                                            label={__("Vertical Offset", 'premium-blocks-for-gutenberg')}
                                            value={verticalText}
                                            onChange={newValue => setAttributes({ verticalText: newValue })}
                                            units={['px', 'em', '%']}
                                            showUnit={true}
                                            min={-500}
                                            max={500}
                                            step={1}
                                        />
                                        <ResponsiveRangeControl
                                            label={__("Rotate (degrees)", 'premium-blocks-for-gutenberg')}
                                            value={rotateText}
                                            onChange={newValue => setAttributes({ rotateText: newValue })}
                                            showUnit={false}
                                            min={0}
                                            max={360}
                                            step={1}
                                        />
                                    </Fragment>
                                }
                            </PanelBody>
                        </InspectorTab>
                        <InspectorTab key={'style'}>
                            <PanelBody
                                title={__("Title")}
                                className="premium-panel-body"
                                initialOpen={true}
                            >
                                {(style === "style8" || style === "style9") &&
                                    <Fragment>
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
                                        <hr />
                                    </Fragment>
                                }
                                {style === "style8" &&
                                    <Fragment>
                                        <ResponsiveSingleRangeControl
                                            label={__("Animation Duration", 'premium-block-for-gutenberg')}
                                            value={titleStyles[0].animateduration}
                                            onChange={(value) => saveTitleStyles({ animateduration: value })}
                                            showUnit={false}
                                            defaultValue={1}
                                            step={0.5}
                                        />
                                        <hr />
                                    </Fragment>
                                }
                                <PremiumTypo
                                    components={["responsiveSize", "weight", "family", "spacing", "style", "Upper", "line", "Decoration"]}
                                    value={titleTypography}
                                    onChange={newValue => setAttributes({ titleTypography: newValue })}
                                />
                                <hr />
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
                                <hr />
                                <PremiumShadow
                                    label={__("Shadow", 'premium-blocks-for-gutenberg')}
                                    boxShadow={false}
                                    value={titleShadow}
                                    onChange={(value) => setAttributes({ titleShadow: value })}
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
                                <hr />
                                {style != 'style3' && style !== "style7" && style !== "style8" && style !== "style9" &&
                                    <Fragment>
                                        <PremiumBorder
                                            label={__("Border")}
                                            value={titleBorder}
                                            borderType={titleBorder.borderType}
                                            borderColor={titleBorder.borderColor}
                                            borderWidth={titleBorder.borderWidth}
                                            borderRadius={titleBorder.borderRadius}
                                            onChange={(value) => setAttributes({ titleBorder: value })}
                                        />
                                        <hr />
                                    </Fragment>
                                }
                                <SpacingComponent value={titleMargin} responsive={true} showUnits={true} label={__("Margin")} onChange={(value) => setAttributes({ titleMargin: value })} />
                                <SpacingComponent value={titlePadding} responsive={true} showUnits={true} label={__("Padding")} onChange={(value) => setAttributes({ titlePadding: value })} />
                            </PanelBody>
                            {
                                iconValue && <PanelBody
                                    title={__("Icon")}
                                    className="premium-panel-body"
                                    initialOpen={false}
                                >
                                    <ResponsiveRangeControl
                                        label={__("Size", 'premium-blocks-for-gutenberg')}
                                        value={iconSize}
                                        onChange={newValue => setAttributes({ iconSize: newValue })}
                                        units={['px', 'em', '%']}
                                        showUnit={true}
                                        min={0}
                                        max={360}
                                        step={1}
                                    />
                                    <hr />
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
                                    }
                                    <PremiumBackgroundControl
                                        value={iconBackground}
                                        onChange={(value) => setAttributes({ iconBackground: value })}
                                    />
                                    <hr />
                                    {iconType === 'icon' &&
                                        <Fragment>
                                            <PremiumShadow
                                                label={__("Icon Shadow", 'premium-blocks-for-gutenberg')}
                                                boxShadow={false}
                                                value={iconshadow}
                                                onChange={(value) => setAttributes({ iconshadow: value })}
                                            />
                                            <hr />
                                        </Fragment>
                                    }
                                    <PremiumBorder
                                        label={__("Border")}
                                        value={iconBorder}
                                        onChange={(value) => setAttributes({ iconBorder: value })}
                                    />
                                    <hr />
                                    <SpacingComponent value={iconMargin} responsive={true} showUnits={true} label={__("Margin")} onChange={(value) => setAttributes({ iconMargin: value })} />
                                    <SpacingComponent value={iconPadding} responsive={true} showUnits={true} label={__("Padding")} onChange={(value) => setAttributes({ iconPadding: value })} />
                                </PanelBody>
                            }
                        </InspectorTab>
                        <InspectorTab key={'style'}>
                            {
                                backgroundText &&
                                <PanelBody
                                    title={__("Background Text")}
                                    className="premium-panel-body"
                                    initialOpen={false}
                                >
                                    <PremiumTypo
                                        components={["responsiveSize", "weight", "family", "spacing", "style", "Upper", "line", "Decoration"]}
                                        value={textTypography}
                                        onChange={newValue => setAttributes({ titleTypography: newValue })}
                                    />
                                    <hr />
                                    <AdvancedPopColorControl
                                        label={__("Color", 'premium-block-for-gutenberg')}
                                        colorValue={textStyles[0].textBackColor}
                                        colorDefault={''}
                                        onColorChange={newValue =>
                                            saveTextStyles({
                                                textBackColor: newValue
                                            })
                                        }
                                    />
                                    <hr />
                                    <PremiumShadow
                                        label={__("Text Shadow", 'premium-blocks-for-gutenberg')}
                                        boxShadow={false}
                                        value={textBackshadow}
                                        onChange={(value) => setAttributes({ textBackshadow: value })}
                                    />
                                    <ToggleControl
                                        label={__('Stroke')}
                                        checked={strokeStyles[0].stroke}
                                        onChange={(newValue) => saveStrokeStyles({ stroke: newValue })}
                                    />
                                    <hr />
                                    {
                                        strokeStyles[0].stroke && <Fragment>
                                            <AdvancedPopColorControl
                                                label={__("Stroke Color", 'premium-block-for-gutenberg')}
                                                colorValue={strokeStyles[0].strokeColor}
                                                colorDefault={''}
                                                onColorChange={newValue =>
                                                    saveStrokeStyles({
                                                        strokeColor: newValue
                                                    })
                                                }
                                            />
                                            <ResponsiveRangeControl
                                                label={__("Stroke Full Width", 'premium-blocks-for-gutenberg')}
                                                value={strokeFull}
                                                onChange={newValue => setAttributes({ iconSize: newValue })}
                                                showUnit={false}
                                                min={0}
                                                max={100}
                                                step={1}
                                            />
                                        </Fragment>
                                    }
                                    <hr />
                                    <SelectControl
                                        label={__("Blend Mode")}
                                        value={blend}
                                        onChange={newSelect => setAttributes({ blend: newSelect })}
                                        options={BLEND}
                                    />
                                    <hr />
                                    <ResponsiveSingleRangeControl
                                        label={__("z-index", 'premium-block-for-gutenberg')}
                                        value={zIndex}
                                        onChange={(value) => setAttributes({ zIndex: value })}
                                        showUnit={false}
                                        defaultValue={0}
                                        min={0}
                                        max={100}
                                    />
                                </PanelBody>
                            }
                        </InspectorTab>
                        <InspectorTab key={'advance'}>
                            <PremiumResponsiveTabs
                                Desktop={hideDesktop}
                                Tablet={hideTablet}
                                Mobile={hideMobile}
                                onChangeDesktop={(value) => setAttributes({ hideDesktop: value ? " premium-desktop-hidden" : "" })}
                                onChangeTablet={(value) => setAttributes({ hideTablet: value ? " premium-tablet-hidden" : "" })}
                                onChangeMobile={(value) => setAttributes({ hideMobile: value ? " premium-mobile-hidden" : "" })}
                            />
                        </InspectorTab>
                    </InspectorTabs>
                </InspectorControls>
            ),
            <style>{loadStyles()}</style>,
            <div
                className={`${blockId} ${mainClasses}`} style={{
                    textAlign: align?.[this.props.deviceType],
                }} >
                <div className={`premium-title  ${backgroundText ? 'premium-title-bg-text' : ""}`} style={{
                    textAlign: align?.[this.props.deviceType],
                }} data-backgroundText={BackText}>
                    <div className={`premium-title-container ${style}`} data-blur-delay={titleStyles[0].animateDelay} data-shiny-dur={titleStyles[0].animateduration}>
                        {React.createElement(titleTag,
                            {
                                className: `premium-title-header premium-title-${style}__wrap ${iconValue ? iconPosition : ""} ${iconPosition == 'top' ? `premium-title-${iconAlign?.['Desktop']} premium-title-tablet-${iconAlign?.['Tablet']} premium-title-mobile-${iconAlign?.['Mobile']}` : ""}`,
                                'data-blur-delay': `${titleStyles[0].animateDelay}`,
                                'data-shiny-dur': `${titleStyles[0].animateduration}`,
                                style: {
                                    color: titleStyles[0].titleColor,
                                    textShadow: `${titleShadow.horizontal}px ${titleShadow.vertical}px ${titleShadow.blur}px ${titleShadow.color}`,
                                    marginTop: TitleMarginTop && `${TitleMarginTop}${titleMargin.unit}`,
                                    marginBottom: TitleMarginBottom && `${TitleMarginBottom}${titleMargin.unit}`,
                                    marginLeft: TitleMarginLeft && `${TitleMarginLeft}${titleMargin.unit}`,
                                    marginRight: TitleMarginRight && `${TitleMarginRight}${titleMargin.unit}`,
                                    paddingTop: TitlePaddingTop && `${TitlePaddingTop}${titlePadding.unit}`,
                                    paddingBottom: TitlePaddingBottom && `${TitlePaddingBottom}${titlePadding.unit}`,
                                    paddingLeft: TitlePaddingLeft && `${TitlePaddingLeft}${titlePadding.unit}`,
                                    paddingRight: TitlePaddingRight && `${TitlePaddingRight}${titlePadding.unit}`,
                                    ...typographyCss(titleTypography, this.props.deviceType)
                                }
                            },
                            [<Fragment>
                                {style === 'style7' ?
                                    <Fragment>
                                        {
                                            iconPosition != 'top' && iconValue &&
                                            <span className={`premium-title-style7-stripe__wrap premium-stripe-${stripePosition} premium-stripe-${stripeAlign?.['Desktop']} premium-stripe-tablet-${stripeAlign?.['Tablet']} premium-stripe-mobile-${stripeAlign?.['Mobile']}`}>
                                                <span className={`premium-title-style7-stripe-span`}></span>
                                            </span>
                                        }
                                        {
                                            !iconValue &&
                                            <span className={`premium-title-style7-stripe__wrap premium-stripe-${stripePosition} premium-stripe-${stripeAlign?.['Desktop']} premium-stripe-tablet-${stripeAlign?.['Tablet']} premium-stripe-mobile-${stripeAlign?.['Mobile']}`}>
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
                                                iconValue && iconType == 'lottie' && lottieURl &&
                                                <div className=" premium-title-icon premium-lottie-animation">
                                                    <Lottie
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
                                            {
                                                iconValue && iconPosition === 'top' &&
                                                <span className={`premium-title-style7-stripe__wrap premium-stripe-${stripePosition} premium-stripe-${stripeAlign}`}>
                                                    <span className={`premium-title-style7-stripe-span`}></span>
                                                </span>
                                            }
                                            <RichText
                                                tagName='span'
                                                className={`premium-title-text-title`}
                                                value={title}
                                                onChange={newText =>
                                                    setAttributes({ title: newText })
                                                }
                                                style={{
                                                    minHeight: '15px'
                                                }}
                                            />
                                        </div>
                                    </Fragment>
                                    : style === "style9" ? <Fragment>
                                        {
                                            iconValue && iconType == 'icon' && <i className={`premium-title-icon ${icon}`} />
                                        }
                                        {
                                            iconValue && iconType == 'image' && < img className={`premium-title-icon`} src={imageURL} />
                                        }
                                        {
                                            iconValue && iconType == 'lottie' && lottieURl &&
                                            <div className=" premium-title-icon premium-lottie-animation">
                                                <Lottie
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

                                        <span
                                            className={`premium-letters-container`}
                                            style={{
                                                color: titleStyles[0].titleColor,
                                                marginTop: TitleMarginTop + titleMargin.unit,
                                                marginBottom: TitleMarginBottom + titleMargin.unit,
                                                marginLeft: TitleMarginLeft + titleMargin.unit,
                                                marginRight: TitleMarginRight + titleMargin.unit,
                                                paddingTop: TitlePaddingTop + titlePadding.unit,
                                                paddingBottom: TitlePaddingBottom + titlePadding.unit,
                                                paddingLeft: TitlePaddingLeft + titlePadding.unit,
                                                paddingRight: TitlePaddingRight + titlePadding.unit,
                                            }}
                                        >
                                            {styleContainer}
                                        </span>

                                    </Fragment> : <Fragment>
                                        {
                                            iconValue && iconType == 'icon' &&
                                            <i className={`premium-title-icon ${icon}`} />
                                        }
                                        {
                                            iconValue && iconType == 'image' &&
                                            < img className={`premium-title-icon`} src={imageURL} />
                                        }
                                        {
                                            iconValue && iconType == 'lottie' && lottieURl &&
                                            <div className=" premium-title-icon premium-lottie-animation">
                                                <Lottie
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
                                        <RichText
                                            tagName='span'
                                            className={`premium-title-text-title`}
                                            onChange={(newValue) => setAttributes({ title: newValue })}
                                            value={title}
                                            style={{
                                                minHeight: '15px'
                                            }}
                                        />
                                    </Fragment>
                                }
                                {link && url !== ' ' && <a rel="noopener noreferrer" target={"_self"} href={`${url}`} ></a>}
                            </Fragment>
                            ])}
                    </div>
                </div>
            </div >
        ]
    }
}
export default withSelect((select, props) => {
    const { __experimentalGetPreviewDeviceType = null } = select('core/edit-post');
    let deviceType = __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;

    return {
        deviceType: deviceType
    }
})(edit)