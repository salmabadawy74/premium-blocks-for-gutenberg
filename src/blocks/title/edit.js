// import styling from "./styling"
import PremiumTypo from "../../components/premium-typo";
import PremiumBorder from "../../components/premium-border";
import iconsList from "../../components/premium-icons-list";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import AdvancedPopColorControl from '../../components/Color Control/ColorComponent'
// import PremiumRangeResponsive from "../../components/premium-range-responsive";
// import PremiumTextShadow from "../../components/premium-text-shadow";
import PremiumResponsiveTabs from '../../components/premium-responsive-tabs';
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
        const { animateDelay, animateduration } = this.props.attributes;
        let titleContainers = document.querySelectorAll(".premium-title-container");
        titleContainers.forEach(function (titleContainer) {
            if (titleContainer.classList.contains("style8")) {
                let titleElement = titleContainer.querySelector(".premium-title-text-title"),
                    holdTime = animateDelay * 1000,
                    duration = animateduration * 1000;

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
                    let holdTime = animateDelay * 1000;
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
            iconSpacingT,
            iconSpacingR,
            iconSpacingB,
            iconSpacingL,
            iconSpacingTTablet,
            iconSpacingRTablet,
            iconSpacingBTablet,
            iconSpacingLTablet,
            iconSpacingTMobile,
            iconSpacingRMobile,
            iconSpacingBMobile,
            iconSpacingLMobile,
            iconSpacingType,
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
                        {/* <PremiumTypo
                            components={["responsiveSize", "weight", "style", "upper", "spacing"]}
                            setAttributes={setAttributes}
                            fontSizeType={{ value: titlefontSizeType, label: __("titlefontSizeType") }}
                            fontSize={{ value: titlefontSize, label: __("titlefontSize") }}
                            fontSizeMobile={{ value: titlefontSizeMobile, label: __("titlefontSizeMobile") }}
                            fontSizeTablet={{ value: titlefontSizeTablet, label: __("titlefontSizeTablet") }}
                            weight={titleWeight}
                            style={titleStyle}
                            spacing={titleLetter}
                            upper={titleUpper}
                            onChangeWeight={newWeight =>
                                setAttributes({ titleWeight: newWeight || 600 })
                            }
                            onChangeStyle={newStyle =>
                                setAttributes({ titleStyle: newStyle })
                            }
                            onChangeSpacing={newValue =>
                                setAttributes({ titleLetter: newValue })
                            }
                            onChangeUpper={check => setAttributes({ titleUpper: check })}
                            onResetClick={() => onResetClickTitle([titleWeight, titlefontSizeType, titlefontSize, titlefontSizeMobile, titlefontSizeTablet,
                                titleStyle, titleLetter, titleUpper], [
                                600, "px", "30", "30", "30", "normal", "0", false
                            ])}
                        />
                        {style === 'style2' && <Fragment>
                            <p>{__("Background Color")}</p>
                            <ColorPalette
                                value={BGColor}
                                onChange={newValue =>
                                    setAttributes({
                                        BGColor: newValue
                                    })
                                }
                                allowReset={true}
                            />
                        </Fragment>
                        }
                        {style === 'style3' && <Fragment>
                            <p>{__("Background Color")}</p>
                            <ColorPalette
                                value={BGColor}
                                onChange={newValue =>
                                    setAttributes({
                                        BGColor: newValue
                                    })
                                }
                                allowReset={true}
                            />
                        </Fragment>
                        }
                        {style === 'style5' && <Fragment>
                            <p>{__("Line Color")}</p>
                            <ColorPalette
                                value={lineColor}
                                onChange={newValue =>
                                    setAttributes({
                                        lineColor: newValue
                                    })
                                }
                                allowReset={true}
                            />
                        </Fragment>
                        }
                        {style === 'style6' && <Fragment>
                            <p>{__("Line Color")}</p>
                            <ColorPalette
                                value={lineColor}
                                onChange={newValue =>
                                    setAttributes({
                                        lineColor: newValue
                                    })
                                }
                                allowReset={true}
                            />
                            <p>{__("Triangle Color")}</p>
                            <ColorPalette
                                value={triangleColor}
                                onChange={newValue =>
                                    setAttributes({
                                        triangleColor: newValue
                                    })
                                }
                                allowReset={true}
                            />
                        </Fragment>
                        }
                        {style === 'style7' ? <Fragment>
                            <p>{__("Stripe Color")}</p>
                            <ColorPalette
                                value={stripeColor}
                                onChange={newValue =>
                                    setAttributes({
                                        stripeColor: newValue
                                    })
                                }
                                allowReset={true}
                            />
                        </Fragment>
                            : style != 'style3' && style !== "style8" && style !== "style9" &&
                            <PremiumBorder
                                borderType={titleborderType}
                                top={titleBorderTop}
                                right={titleBorderRight}
                                bottom={titleBorderBottom}
                                left={titleBorderLeft}
                                borderColor={titleborderColor}
                                borderRadius={titleborderRadius}
                                onChangeType={(newType) =>
                                    setAttributes({ titleborderType: newType })
                                }
                                onChangeWidth={({ top, right, bottom, left }) =>
                                    setAttributes({
                                        titleBorderTop: top,
                                        titleBorderRight: right,
                                        titleBorderBottom: bottom,
                                        titleBorderLeft: left,
                                    })
                                }
                                onChangeColor={(colorValue) =>
                                    setAttributes({ titleborderColor: colorValue.hex })
                                }
                                onChangeRadius={(newrRadius) =>
                                    setAttributes({ titleborderRadius: newrRadius })
                                }
                            />
                        } */}
                        {/* <PremiumTextShadow
                            color={titleshadowColor}
                            blur={titleshadowBlur}
                            horizontal={titleshadowHorizontal}
                            vertical={titleshadowVertical}
                            onChangeColor={newColor =>
                                setAttributes({ titleshadowColor: newColor.hex })
                            }
                            onChangeBlur={newBlur => setAttributes({ titleshadowBlur: newBlur })}
                            onChangehHorizontal={newValue =>
                                setAttributes({ titleshadowHorizontal: newValue })
                            }
                            onChangeVertical={newValue =>
                                setAttributes({ titleshadowVertical: newValue })
                            }
                            onResetClick={onResetClickTitleTextShadow}
                        /> */}
                        {/* {style === "style9" && <Fragment>
                            <RangeControl
                                label={__("Blur Shadow Value (px)")}
                                min={10}
                                max={500}
                                step={10}
                                value={blurShadow}
                                initialPosition={120}
                                onChange={(newValue) => setAttributes({ blurShadow: newValue })}
                            />
                        </Fragment>}
                        {(style === "style8" || style === "style9") &&
                            <RangeControl
                                label={__("Animation Delay")}
                                value={animateDelay}
                                min={1}
                                max={30}
                                step={0.5}
                                initialPosition={2}
                                onChange={(newValue) => setAttributes({ animateDelay: newValue })}
                            />}
                        {style === "style8" && <RangeControl
                            label={__("Animation Duration")}
                            value={animateduration}
                            step={0.5}
                            initialPosition={1}
                            onChange={(newValue) => setAttributes({ animateduration: newValue })}
                        />}

                        <PremiumResponsiveMargin
                            directions={["all"]}
                            showUnits={true}
                            selectedUnit={titleMarginType}
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

                            onChangeMarSizeUnit={(newvalue) => setAttributes({ titleMarginType: newvalue })}
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
                            selectedUnit={titlePaddingType}
                            onChangePadSizeUnit={newvalue =>
                                setAttributes({ titlePaddingType: newvalue })
                            }
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
                        {style !== "style9" && <ToggleControl
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
                        } */}
                    </PanelBody>
                    {
                        iconValue && <PanelBody
                            title={__("Icon Style")}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            {iconType === 'icon' && <Fragment>
                                <p>{__("Color")}</p>
                                <ColorPalette
                                    value={iconColor}
                                    onChange={newValue =>
                                        setAttributes({
                                            iconColor: newValue
                                        })
                                    }
                                    allowReset={true}
                                />
                            </Fragment>
                            }
                            {/* <PremiumRangeResponsive
                                setAttributes={setAttributes}
                                rangeType={{ value: iconSizeType, label: __("iconSizeType") }}
                                range={{ value: iconSize, label: __("iconSize") }}
                                rangeMobile={{ value: iconSizeMobile, label: __("iconSizeMobile") }}
                                rangeTablet={{ value: iconSizeTablet, label: __("iconSizeTablet") }}
                                rangeLabel={__("Size")}
                                min={1}
                                max={100}
                            /> */}
                            <p>{__("Background Color")}</p>
                            <ColorPalette
                                value={iconBGColor}
                                onChange={newValue =>
                                    setAttributes({
                                        iconBGColor: newValue
                                    })
                                }
                                allowReset={true}
                            />
                            <PremiumBorder
                                borderType={iconborderType}
                                top={iconBorderTop}
                                right={iconBorderRight}
                                bottom={iconBorderBottom}
                                left={iconBorderLeft}
                                borderColor={iconborderColor}
                                borderRadius={iconborderRadius}
                                onChangeType={(newType) =>
                                    setAttributes({ iconborderType: newType })
                                }
                                onChangeWidth={({ top, right, bottom, left }) =>
                                    setAttributes({
                                        iconBorderTop: top,
                                        iconBorderRight: right,
                                        iconBorderBottom: bottom,
                                        iconBorderLeft: left,
                                    })
                                }
                                onChangeColor={(colorValue) =>
                                    setAttributes({ iconborderColor: colorValue.hex })
                                }
                                onChangeRadius={(newrRadius) =>
                                    setAttributes({ iconborderRadius: newrRadius })
                                }
                            />
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
                                selectedUnit={iconSpacingType}
                                marginTop={iconSpacingT}
                                marginRight={iconSpacingR}
                                marginBottom={iconSpacingB}
                                marginLeft={iconSpacingL}
                                marginTopTablet={iconSpacingTTablet}
                                marginRightTablet={iconSpacingRTablet}
                                marginBottomTablet={iconSpacingBTablet}
                                marginLeftTablet={iconSpacingLTablet}
                                marginTopMobile={iconSpacingTMobile}
                                marginRightMobile={iconSpacingRMobile}
                                marginBottomMobile={iconSpacingBMobile}
                                marginLeftMobile={iconSpacingLMobile}
                                onChangeMarginTop={
                                    (device, newValue) => {
                                        if (device === "desktop") {
                                            setAttributes({ iconSpacingT: newValue })
                                        } else if (device === "tablet") {
                                            setAttributes({ iconSpacingTTablet: newValue })
                                        } else {
                                            setAttributes({ iconSpacingTMobile: newValue })
                                        }
                                    }
                                }
                                onChangeMarginRight={
                                    (device, newValue) => {
                                        if (device === "desktop") {
                                            setAttributes({ iconSpacingR: newValue })
                                        } else if (device === "tablet") {
                                            setAttributes({ iconSpacingRTablet: newValue })
                                        } else {
                                            setAttributes({ iconSpacingRMobile: newValue })
                                        }
                                    }
                                }
                                onChangeMarginBottom={
                                    (device, newValue) => {
                                        if (device === "desktop") {
                                            setAttributes({ iconSpacingB: newValue })
                                        } else if (device === "tablet") {
                                            setAttributes({ iconSpacingBTablet: newValue })
                                        } else {
                                            setAttributes({ iconSpacingBMobile: newValue })
                                        }
                                    }
                                }
                                onChangeMarginLeft={
                                    (device, newValue) => {
                                        if (device === "desktop") {
                                            setAttributes({ iconSpacingL: newValue })
                                        } else if (device === "tablet") {
                                            setAttributes({ iconSpacingLTablet: newValue })
                                        } else {
                                            setAttributes({ iconSpacingLMobile: newValue })
                                        }
                                    }
                                }
                                onChangeMarSizeUnit={(newvalue) => setAttributes({ iconSpacingType: newvalue })}

                            />
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
            <div
                id={`premium-title-${block_id}`}
                className={`premium-block-${block_id} ${hideDesktop} ${hideTablet} ${hideMobile}`} style={{
                    textAlign: align,
                }} >
                <style
                    dangerouslySetInnerHTML={{
                        __html: [
                            `#premium-title-${block_id} .premium-title-style8__wrap .premium-title-text-title[data-animation='shiny'] {`,
                            `--base-color: ${titleStyles[0].titleColor};`,
                            `--shiny-color: ${titleStyles[0].shinyColor};`,
                            "}",
                            `#premium-title-${block_id} .premium-title-header {`,
                            `--shadow-color: ${titleStyles[0].blurColor};`,
                            `color: ${titleStyles[0].titleColor};`,
                            "}",
                            `#premium-title-${block_id} .premium-title .style1 .premium-title-header{`,
                            `border-style: ${titleStyles[0].titleborderType} !important;`,
                            `border-width: ${titleBorderUpdated
                                ? `${titleBorderTop}px ${titleBorderRight}px ${titleBorderBottom}px ${titleBorderLeft}px`
                                : titleBorderWidth + "px"};`,
                            `border-radius: ${titleStyles[0].titleborderRadius || 0 + "px"};`,
                            `border-color: ${titleStyles[0].titleborderColor};`,
                            // `border-left: ${titleBorderLeft >= "1" ? `${titleBorderLeft}px ${titleStyles[0].titleborderType} ${titleStyles[0].titleborderColor}` : ""};`,
                            "}",
                            `#premium-title-${block_id} .premium-title .style2{`,
                            `border-style: ${titleStyles[0].titleborderType} !important;`,
                            `border-width: ${titleBorderUpdated
                                ? `${titleBorderTop}px ${titleBorderRight}px ${titleBorderBottom}px ${titleBorderLeft}px`
                                : titleBorderWidth + "px"};`,
                            `border-radius: ${titleStyles[0].titleborderRadius || 0 + "px"};`,
                            `border-color: ${titleStyles[0].titleborderColor};`,
                            `border-bottom: ${titleBorderBottom >= "1" ? `${titleBorderBottom}px ${titleStyles[0].titleborderType} ${titleStyles[0].titleborderColor} !important` : ""};`,
                            "}",
                            `#premium-title-${block_id} .premium-title .style4{`,
                            `border-style: ${titleStyles[0].titleborderType} !important;`,
                            `border-width: ${titleBorderUpdated
                                ? `${titleBorderTop}px ${titleBorderRight}px ${titleBorderBottom}px ${titleBorderLeft}px`
                                : titleBorderWidth + "px"};`,
                            `border-radius: ${titleStyles[0].titleborderRadius || 0 + "px"};`,
                            `border-color: ${titleStyles[0].titleborderColor};`,
                            `border-bottom: ${titleBorderBottom >= "1" ? `${titleBorderBottom}px ${titleStyles[0].titleborderType} ${titleStyles[0].titleborderColor} !important` : ""};`,
                            "}",
                            `#premium-title-${block_id} .premium-title .style5{`,
                            `border-style: ${titleStyles[0].titleborderType} !important;`,
                            `border-width: ${titleBorderUpdated
                                ? `${titleBorderTop}px ${titleBorderRight}px ${titleBorderBottom}px ${titleBorderLeft}px`
                                : titleBorderWidth + "px"};`,
                            `border-radius: ${titleStyles[0].titleborderRadius || 0 + "px"};`,
                            `border-color: ${titleStyles[0].titleborderColor};`,
                            `border-bottom: ${titleBorderBottom >= "1" ? `${titleBorderBottom}px ${titleStyles[0].titleborderType} ${titleStyles[0].titleborderColor} !important` : ""};`,
                            "}",
                            `#premium-title-${block_id} .premium-title .style6{`,
                            `border-style: ${titleStyles[0].titleborderType} !important;`,
                            `border-width: ${titleBorderUpdated
                                ? `${titleBorderTop}px ${titleBorderRight}px ${titleBorderBottom}px ${titleBorderLeft}px`
                                : titleBorderWidth + "px"};`,
                            `border-radius: ${titleStyles[0].titleborderRadius || 0 + "px"};`,
                            `border-color: ${titleStyles[0].titleborderColor};`,
                            `border-bottom: ${titleBorderBottom >= "1" ? `${titleBorderBottom}px ${titleStyles[0].titleborderType} ${titleStyles[0].titleborderColor} !important` : ""};`,
                            "}",
                        ].join("\n")
                    }}
                />

                <div className={`premium-title  ${backgroundText ? 'premium-title-bg-text' : ""}`} style={{
                    textAlign: align,
                }} data-backgroundText={BackText}>
                    <div className={`premium-title-container ${style} ${style}-${align}`} data-shiny-delay={animateDelay} data-shiny-dur={animateduration}>

                        <div className={`premium-title-header premium-title-${style}__wrap ${align} ${iconValue ? iconPosition : ""} ${iconPosition == 'top' ? `premium-title-${iconAlign}` : ""}`} data-shiny-delay={animateDelay} data-shiny-dur={animateduration}>

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
                                        }}
                                    />
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
                                            }}
                                        />
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