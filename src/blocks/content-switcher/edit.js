import { __ } from '@wordpress/i18n';
import classnames from "classnames";
import { withSelect } from '@wordpress/data'
import {
    BlockControls,
    AlignmentToolbar,
    InspectorControls,
    RichText,
    useBlockProps
} from '@wordpress/block-editor';
import {
    Fragment,
    useEffect,
    useState,
    useRef
} from '@wordpress/element';
import {
    PanelBody,
    SelectControl,
    Toolbar,
    TextControl,
    ToggleControl,
    TextareaControl,
    TabPanel
} from '@wordpress/components';
import ResponsiveRangeControl from "../../components/RangeControl/responsive-range-control";
// import ResponsiveSingleRangeControl from "../../components/RangeControl/single-range-control";
import PremiumBackgroundControl from "../../components/Premium-Background-Control"
import AdvancedPopColorControl from '../../components/Color Control/ColorComponent'
import PremiumTypo from "../../components/premium-typo";
import PremiumShadow from "../../components/PremiumShadow";
import PremiumResponsivePadding from "../../components/Premium-Responsive-Padding";
import PremiumResponsiveMargin from "../../components/Premium-Responsive-Margin";
import PremiumBorder from "../../components/premium-border";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */



function Edit(props) {

    const { isSelected, attributes, setAttributes, clientId, className } = props;
    const inputSwitch = useRef(null);
    const inputFirstContent = useRef(null);
    const inputSecondContent = useRef(null);
    const [mounted, setMounted] = useState(true);

    useEffect(() => {
        setAttributes({ block_id: props.clientId })
        setAttributes({ classMigrate: true })
        // Pushing Style tag for this block css.
        const $style = document.createElement("style")
        $style.setAttribute("id", "premium-style-content-switcher-" + props.clientId)
        document.head.appendChild($style)
        setTimeout(initToggleBox, 10);
    }, [mounted])

    const initToggleBox = () => {
        const { block_id } = props.attributes;
        if (!block_id) return null;

        setTimeout(
            inputSwitch.current.addEventListener("click", () => {

                setMounted(!mounted)

                if (mounted) {
                    inputFirstContent.current.classList.remove("premium-content-switcher-is-visible");
                    inputFirstContent.current.classList.add("premium-content-switcher-is-hidden");

                    inputSecondContent.current.classList.remove("premium-content-switcher-is-hidden");
                    inputSecondContent.current.classList.add("premium-content-switcher-is-visible");
                }
                else {
                    inputSecondContent.current.classList.remove("premium-content-switcher-is-visible");
                    inputSecondContent.current.classList.add("premium-content-switcher-is-hidden");

                    inputFirstContent.current.classList.remove("premium-content-switcher-is-hidden");
                    inputFirstContent.current.classList.add("premium-content-switcher-is-visible");
                }
            })
            , 10);
    }

    const getPreviewSize = (device, desktopSize, tabletSize, mobileSize) => {
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

    const {
        block_id,
        align,
        showLabel,
        firstLabel,
        secondLabel,
        display,
        labelTag,
        firstContent,
        secondContent,
        firstcontentlign,
        secondcontentlign,
        switcherStyles,
        // backgroundType,
        labelStyles,
        firstLabelBorderTop,
        firstLabelBorderRight,
        firstLabelBorderBottom,
        firstLabelBorderLeft,
        firstLabelBorderUpdated,
        firstLabelBorderWidth,
        firstLabelPaddingT,
        firstLabelPaddingR,
        firstLabelPaddingB,
        firstLabelPaddingL,
        firstLabelPaddingTTablet,
        firstLabelPaddingRTablet,
        firstLabelPaddingBTablet,
        firstLabelPaddingLTablet,
        firstLabelPaddingTMobile,
        firstLabelPaddingRMobile,
        firstLabelPaddingBMobile,
        firstLabelPaddingLMobile,
        secondLabelBorderTop,
        secondLabelBorderRight,
        secondLabelBorderBottom,
        secondLabelBorderLeft,
        secondLabelBorderUpdated,
        secondLabelBorderWidth,
        secondLabelPaddingT,
        secondLabelPaddingR,
        secondLabelPaddingB,
        secondLabelPaddingL,
        secondLabelPaddingTTablet,
        secondLabelPaddingRTablet,
        secondLabelPaddingBTablet,
        secondLabelPaddingLTablet,
        secondLabelPaddingTMobile,
        secondLabelPaddingRMobile,
        secondLabelPaddingBMobile,
        secondLabelPaddingLMobile,
        contentStyles,
        firstContentStyles,
        firstContentBorderTop,
        firstContentBorderRight,
        firstContentBorderBottom,
        firstContentBorderLeft,
        firstContentBorderUpdated,
        firstContentBorderWidth,
        firstContentMarginT,
        firstContentMarginR,
        firstContentMarginB,
        firstContentMarginL,
        firstContentMarginTTablet,
        firstContentMarginRTablet,
        firstContentMarginBTablet,
        firstContentMarginLTablet,
        firstContentMarginTMobile,
        firstContentMarginRMobile,
        firstContentMarginBMobile,
        firstContentMarginLMobile,
        contentPaddingT,
        contentPaddingR,
        contentPaddingB,
        contentPaddingL,
        contentPaddingTTablet,
        contentPaddingRTablet,
        contentPaddingBTablet,
        contentPaddingLTablet,
        contentPaddingTMobile,
        contentPaddingRMobile,
        contentPaddingBMobile,
        contentPaddingLMobile,
        secondContentStyles,
        secondContentBorderTop,
        secondContentBorderRight,
        secondContentBorderBottom,
        secondContentBorderLeft,
        secondContentBorderUpdated,
        secondContentBorderWidth,
        containerStyles,
        backgroundType,
        containerBorderTop,
        containerBorderRight,
        containerBorderBottom,
        containerBorderLeft,
        containerBorderUpdated,
        containerBorderWidth,
        containerPaddingT,
        containerPaddingR,
        containerPaddingB,
        containerPaddingL,
        containerPaddingTTablet,
        containerPaddingRTablet,
        containerPaddingBTablet,
        containerPaddingLTablet,
        containerPaddingTMobile,
        containerPaddingRMobile,
        containerPaddingBMobile,
        containerPaddingLMobile,
        containerMarginT,
        containerMarginR,
        containerMarginB,
        containerMarginL,
        containerMarginTTablet,
        containerMarginRTablet,
        containerMarginBTablet,
        containerMarginLTablet,
        containerMarginTMobile,
        containerMarginRMobile,
        containerMarginBMobile,
        containerMarginLMobile,
        effect,
        slide
    } = attributes

    const DISPLAY = [
        {
            label: __("Block"),
            value: "block"
        },
        {
            label: __("Inline"),
            value: "inline"
        }
    ];
    const ALIGNS = ["left", "center", "right"];

    const EFFECTS = [
        {
            label: __("Fade"),
            value: "fade"
        },
        {
            label: __("Slide"),
            value: "slide"
        }
    ]
    const SLIDE = [
        {
            label: __("Top"),
            value: "top"
        },
        {
            label: __("Left"),
            value: "left"
        },
        {
            label: __("Bottom"),
            value: "bottom"
        },
        {
            label: __("Right"),
            value: "right"
        }
    ]

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
        }
    ];

    const defaultSize = {
        desktop: "",
        tablet: "",
        mobile: "",
        unit: "px"
    };
    const defaultSpacingValue = {
        desktop: {
            top: '',
            right: '',
            bottom: '',
            left: ''
        },
        tablet: {
            top: '',
            right: '',
            bottom: '',
            left: ''
        },
        mobile: {
            top: '',
            right: '',
            bottom: '',
            left: ''
        }
    };

    let btnGrad, btnGrad2, btnbg;

    if (undefined !== backgroundType && 'gradient' === backgroundType) {
        btnGrad = ('transparent' === containerStyles.containerBack || undefined === containerStyles.containerBack ? 'rgba(255,255,255,0)' : containerStyles.containerBack);
        btnGrad2 = (undefined !== containerStyles.gradientColorTwo && undefined !== containerStyles.gradientColorTwo && '' !== containerStyles.gradientColorTwo ? containerStyles.gradientColorTwo : '#777');
        if ('radial' === containerStyles.gradientType) {
            btnbg = `radial-gradient(at ${containerStyles.gradientPosition}, ${btnGrad} ${containerStyles.gradientLocationOne}%, ${btnGrad2} ${containerStyles.gradientLocationTwo}%)`;
        } else if ('radial' !== containerStyles.gradientType) {
            btnbg = `linear-gradient(${containerStyles.gradientAngle}deg, ${btnGrad} ${containerStyles.gradientLocationOne}%, ${btnGrad2} ${containerStyles.gradientLocationTwo}%)`;
        }
    } else {
        btnbg = containerStyles.backgroundImageURL ? `url('${containerStyles.backgroundImageURL}')` : ''
    }
    console.log(btnbg)
    const SwitcherSize = getPreviewSize(props.deviceType, switcherStyles.switchSize, switcherStyles.switchSizeTablet, switcherStyles.switchSizeMobile);
    const SwitcherBorderRadius = getPreviewSize(props.deviceType, switcherStyles.switchRadius, switcherStyles.switchRadiusTablet, switcherStyles.switchRadiusMobile);
    const ContainerBorderRadius = getPreviewSize(props.deviceType, switcherStyles.containerRadius, switcherStyles.containerRadiusTablet, switcherStyles.containerRadiusMobile);
    const LabelSpacing = getPreviewSize(props.deviceType, labelStyles.labelSpacing, labelStyles.labelSpacingTablet, labelStyles.labelSpacingMobile);
    const FirstLabelSize = getPreviewSize(props.deviceType, labelStyles.firstLabelfontSize, labelStyles.firstLabelfontSizeTablet, labelStyles.firstLabelfontSizeMobile);
    const FirstLabelPaddingTop = getPreviewSize(props.deviceType, firstLabelPaddingT, firstLabelPaddingTTablet, firstLabelPaddingTMobile);
    const FirstLabelPaddingRight = getPreviewSize(props.deviceType, firstLabelPaddingR, firstLabelPaddingRTablet, firstLabelPaddingRMobile);
    const FirstLabelPaddingBottom = getPreviewSize(props.deviceType, firstLabelPaddingB, firstLabelPaddingBTablet, firstLabelPaddingBMobile);
    const FirstLabelPaddingLeft = getPreviewSize(props.deviceType, firstLabelPaddingL, firstLabelPaddingLTablet, firstLabelPaddingLMobile);
    const SecondLabelSize = getPreviewSize(props.deviceType, labelStyles.secondLabelfontSize, labelStyles.secondLabelfontSizeTablet, labelStyles.secondLabelfontSizeMobile);
    const SecondLabelPaddingTop = getPreviewSize(props.deviceType, secondLabelPaddingT, secondLabelPaddingTTablet, secondLabelPaddingTMobile);
    const SecondLabelPaddingRight = getPreviewSize(props.deviceType, secondLabelPaddingR, secondLabelPaddingRTablet, secondLabelPaddingRMobile);
    const SecondLabelPaddingBottom = getPreviewSize(props.deviceType, secondLabelPaddingB, secondLabelPaddingBTablet, secondLabelPaddingBMobile);
    const SecondLabelPaddingLeft = getPreviewSize(props.deviceType, secondLabelPaddingL, secondLabelPaddingLTablet, secondLabelPaddingLMobile);
    const ContentHeight = getPreviewSize(props.deviceType, contentStyles.contentHeight, contentStyles.contentHeightTablet, contentStyles.contentHeightMobile);
    const FirstContentSize = getPreviewSize(props.deviceType, firstContentStyles.firstContentfontSize, firstContentStyles.firstContentfontSizeTablet, firstContentStyles.firstContentfontSizeMobile);
    const FirstContentMarginTop = getPreviewSize(props.deviceType, firstContentMarginT, firstContentMarginTTablet, firstContentMarginTMobile);
    const FirstContentMarginRight = getPreviewSize(props.deviceType, firstContentMarginR, firstContentMarginRTablet, firstContentMarginRMobile);
    const FirstContentMarginBottom = getPreviewSize(props.deviceType, firstContentMarginB, firstContentMarginBTablet, firstContentMarginBMobile);
    const FirstContentMarginLeft = getPreviewSize(props.deviceType, firstContentMarginL, firstContentMarginLTablet, firstContentMarginLMobile);
    const ContentPaddingTop = getPreviewSize(props.deviceType, contentPaddingT, contentPaddingTTablet, contentPaddingTMobile);
    const ContentPaddingRight = getPreviewSize(props.deviceType, contentPaddingR, contentPaddingRTablet, contentPaddingRMobile);
    const ContentPaddingBottom = getPreviewSize(props.deviceType, contentPaddingB, contentPaddingBTablet, contentPaddingBMobile);
    const ContentPaddingLeft = getPreviewSize(props.deviceType, contentPaddingL, contentPaddingLTablet, contentPaddingLMobile);
    const SecondContentSize = getPreviewSize(props.deviceType, secondContentStyles.secondContentfontSize, secondContentStyles.secondContentfontSizeTablet, secondContentStyles.secondContentfontSizeMobile);
    const ContainerMarginTop = getPreviewSize(props.deviceType, containerMarginT, containerMarginTTablet, containerMarginTMobile);
    const ContainerMarginRight = getPreviewSize(props.deviceType, containerMarginR, containerMarginRTablet, containerMarginRMobile);
    const ContainerMarginBottom = getPreviewSize(props.deviceType, containerMarginB, containerMarginBTablet, containerMarginBMobile);
    const ContainerMarginLeft = getPreviewSize(props.deviceType, containerMarginL, containerMarginLTablet, containerMarginLMobile);
    const ContainerPaddingTop = getPreviewSize(props.deviceType, containerPaddingT, containerPaddingTTablet, containerPaddingTMobile);
    const ContainerPaddingRight = getPreviewSize(props.deviceType, containerPaddingR, containerPaddingRTablet, containerPaddingRMobile);
    const ContainerPaddingBottom = getPreviewSize(props.deviceType, containerPaddingB, containerPaddingBTablet, containerPaddingBMobile);
    const ContainerPaddingLeft = getPreviewSize(props.deviceType, containerPaddingL, containerPaddingLTablet, containerPaddingLMobile);

    const saveSwitcherStyles = (color, value) => {
        const newColors = { ...switcherStyles };
        newColors[color] = value;
        setAttributes({ switcherStyles: newColors });
    }

    const saveLabelStyles = (color, value) => {
        const newColors = { ...labelStyles };
        newColors[color] = value;
        setAttributes({ labelStyles: newColors });
    }

    const saveContentStyles = (color, value) => {
        const newColors = { ...contentStyles };
        newColors[color] = value;
        setAttributes({ contentStyles: newColors });
    }

    const saveFirstContentStyles = (color, value) => {
        const newColors = { ...firstContentStyles };
        newColors[color] = value;
        setAttributes({ firstContentStyles: newColors });
    }

    const saveSecondContentStyles = (color, value) => {
        const newColors = { ...secondContentStyles };
        newColors[color] = value;
        setAttributes({ secondContentStyles: newColors });
    }

    const saveContainerStyles = (color, value) => {
        const newColors = { ...containerStyles };
        newColors[color] = value;
        setAttributes({ containerStyles: newColors });
    }

    return (
        <Fragment>
            <BlockControls>
                <AlignmentToolbar
                    value={align}
                    onChange={(value) => {
                        setAttributes({ align: value })
                    }}
                />
            </BlockControls>
            <InspectorControls>
                <PanelBody
                    title={__("Switcher")}
                    className="premium-panel-body"
                    initialOpen={false}
                >
                    <ToggleControl
                        label={__("Show Labels")}
                        checked={showLabel}
                        onChange={newCheck => setAttributes({ showLabel: newCheck })}
                    />
                    {showLabel && (
                        <Fragment>
                            <TextControl
                                label={__("First Label")}
                                value={firstLabel}
                                onChange={value => setAttributes({ firstLabel: value })}
                            />
                            <TextControl
                                label={__("Second Label")}
                                value={secondLabel}
                                onChange={value => setAttributes({ secondLabel: value })}
                            />
                            <SelectControl
                                label={__("HTML Tag")}
                                options={TAGS}
                                value={labelTag}
                                onChange={(newValue) => setAttributes({ labelTag: newValue })}
                            />
                            <SelectControl
                                label={__("Display")}
                                options={DISPLAY}
                                value={display}
                                onChange={newValue => setAttributes({ display: newValue })}
                            />
                        </Fragment>
                    )}
                    <p>{__("Alignment")}</p>
                    <Toolbar
                        controls={ALIGNS.map(contentAlign => ({
                            icon: "editor-align" + contentAlign,
                            isActive: contentAlign === align,
                            onClick: () => setAttributes({ align: contentAlign })
                        }))}
                    />
                    <SelectControl
                        label={__("Effect")}
                        options={EFFECTS}
                        value={effect}
                        onChange={newEffect => setAttributes({ effect: newEffect })}
                    />
                    {effect == 'slide' &&
                        <SelectControl
                            label={__("Slide Direction")}
                            options={SLIDE}
                            value={slide}
                            onChange={newEffect => setAttributes({ slide: newEffect })}
                        />
                    }
                </PanelBody>
                <PanelBody
                    title={__("Content 1")}
                    className="premium-panel-body"
                    initialOpen={false}
                >
                    <TextareaControl
                        label={__("Content", 'premium-block-for-gutenberg')}
                        value={firstContent}
                        onChange={newEffect => setAttributes({ firstContent: newEffect })}
                    />
                    <p>{__("Alignment")}</p>
                    <Toolbar
                        controls={ALIGNS.map(contentAlign => ({
                            icon: "editor-align" + contentAlign,
                            isActive: contentAlign === firstcontentlign,
                            onClick: () => setAttributes({ firstcontentlign: contentAlign })
                        }))}
                    />
                </PanelBody>
                <PanelBody
                    title={__("Content 2")}
                    className="premium-panel-body"
                    initialOpen={false}
                >
                    <TextareaControl
                        label={__("Content", 'premium-block-for-gutenberg')}
                        value={secondContent}
                        onChange={newEffect => setAttributes({ secondContent: newEffect })}
                    />
                    <p>{__("Alignment")}</p>
                    <Toolbar
                        controls={ALIGNS.map(contentAlign => ({
                            icon: "editor-align" + contentAlign,
                            isActive: contentAlign === secondcontentlign,
                            onClick: () => setAttributes({ secondcontentlign: contentAlign })
                        }))}
                    />
                </PanelBody>
                <PanelBody
                    title={__("Switcher Style")}
                    className="premium-panel-body"
                    initialOpen={false}
                >
                    <ResponsiveRangeControl
                        label={__("Size", 'premium-block-for-gutenberg')}
                        value={switcherStyles.switchSize}
                        tabletValue={switcherStyles.switchSizeTablet}
                        mobileValue={switcherStyles.switchSizeMobile}
                        onChange={(value) => saveSwitcherStyles('switchSize', value)}
                        onChangeTablet={(value) => saveSwitcherStyles('switchSizeTablet', value)}
                        onChangeMobile={(value) => saveSwitcherStyles('switchSizeMobile', value)}
                        showUnit={false}
                        defaultValue={15}
                        min={1}
                        max={40}
                    />
                    <ResponsiveRangeControl
                        label={__("Controller Border Radius", 'premium-block-for-gutenberg')}
                        value={switcherStyles.containerRadius}
                        tabletValue={switcherStyles.containerRadiusTablet}
                        mobileValue={switcherStyles.containerRadiusMobile}
                        onChange={(value) => saveSwitcherStyles('containerRadius', value)}
                        onChangeTablet={(value) => saveSwitcherStyles('containerRadiusTablet', value)}
                        onChangeMobile={(value) => saveSwitcherStyles('containerRadiusMobile', value)}
                        onChangeUnit={(key) =>
                            saveSwitcherStyles('containerRadiusType', key)
                        }
                        unit={switcherStyles.containerRadiusType}
                        showUnit={true}
                        defaultValue={50}
                        min={1}
                        max={100}
                    />
                    <ResponsiveRangeControl
                        label={__("Switcher Border Radius", 'premium-block-for-gutenberg')}
                        value={switcherStyles.switchRadius}
                        tabletValue={switcherStyles.switchRadiusTablet}
                        mobileValue={switcherStyles.switchRadiusMobile}
                        onChange={(value) => saveSwitcherStyles('switchRadius', value)}
                        onChangeTablet={(value) => saveSwitcherStyles('switchRadiusTablet', value)}
                        onChangeMobile={(value) => saveSwitcherStyles('switchRadiusMobile', value)}
                        onChangeUnit={(key) =>
                            saveSwitcherStyles('switchRadiusType', key)
                        }
                        unit={switcherStyles.switchRadiusType}
                        showUnit={true}
                        defaultValue={1.5}
                        min={1}
                        max={100}
                    />
                    {/* <h3>{__("Controller State 1 Color")}</h3> */}
                    {/* <PremiumBackgroundControl
                        setAttributes={setAttributes}
                        saveContainerStyle={saveSwitcherStyles}
                        backgroundType={backgroundType}
                        backgroundColor={switcherStyles[0].containerBackState1}
                        backgroundImageID={switcherStyles[0].backgroundImageIDState1}
                        backgroundImageURL={switcherStyles[0].backgroundImageURLState1}
                        backgroundPosition={switcherStyles[0].backgroundPositionState1}
                        backgroundRepeat={switcherStyles[0].backgroundRepeatState1}
                        backgroundSize={switcherStyles[0].backgroundSizeState1}
                        fixed={switcherStyles[0].fixedState1}
                        gradientLocationOne={switcherStyles[0].gradientLocationOneState1}
                        gradientColorTwo={switcherStyles[0].gradientColorTwoState1}
                        gradientLocationTwo={switcherStyles[0].gradientLocationTwoState1}
                        gradientAngle={switcherStyles[0].gradientAngleState1}
                        gradientPosition={switcherStyles[0].gradientPositionState1}
                        gradientType={switcherStyles[0].gradientTypeState1}
                    /> */}
                    {/* <h3>{__("Controller State 2 Color")}</h3> */}
                    {/* <PremiumBackgroundControl
                            setAttributes={setAttributes}
                            saveContainerStyle={saveSwitcherStyles}
                            backgroundType={backgroundTypeState2}
                            backgroundColor={switcherStyles[0].containerBackState2}
                            backgroundImageID={switcherStyles[0].backgroundImageIDState2}
                            backgroundImageURL={switcherStyles[0].backgroundImageURLState2}
                            backgroundPosition={switcherStyles[0].backgroundPositionState2}
                            backgroundRepeat={switcherStyles[0].backgroundRepeatState2}
                            backgroundSize={switcherStyles[0].backgroundSizeState2}
                            fixed={switcherStyles[0].fixedState2}
                            gradientLocationOne={switcherStyles[0].gradientLocationOneState2}
                            gradientColorTwo={switcherStyles[0].gradientColorTwoState2}
                            gradientLocationTwo={switcherStyles[0].gradientLocationTwoState2}
                            gradientAngle={switcherStyles[0].gradientAngleState2}
                            gradientPosition={switcherStyles[0].gradientPositionState2}
                            gradientType={switcherStyles[0].gradientTypeState2}
                        /> */}
                    <PremiumShadow
                        label={__("Controller Shadow", 'premium-blocks-for-gutenberg')}
                        boxShadow={true}
                        color={switcherStyles.containerShadowColor}
                        blur={switcherStyles.containerShadowBlur}
                        horizontal={switcherStyles.containerShadowHorizontal}
                        vertical={switcherStyles.containerShadowVertical}
                        position={switcherStyles.containerShadowPosition}
                        onChangeColor={newColor =>
                            saveSwitcherStyles('containerShadowColor', newColor)
                        }
                        onChangeBlur={newBlur => saveSwitcherStyles('containerShadowBlur', newBlur)}
                        onChangehHorizontal={newValue =>
                            saveSwitcherStyles('containerShadowHorizontal', newValue)
                        }
                        onChangeVertical={newValue =>
                            saveSwitcherStyles('containerShadowVertical', newValue)
                        }
                        onChangePosition={newValue =>
                            saveSwitcherStyles('containerShadowPosition', newValue)
                        }
                    />
                    <PremiumShadow
                        label={__("Switcher Shadow", 'premium-blocks-for-gutenberg')}
                        boxShadow={true}
                        color={switcherStyles.switchShadowColor}
                        blur={switcherStyles.switchShadowBlur}
                        horizontal={switcherStyles.switchShadowHorizontal}
                        vertical={switcherStyles.switchShadowVertical}
                        position={switcherStyles.switchShadowPosition}
                        onChangeColor={newColor =>
                            saveSwitcherStyles('switchShadowColor', newColor)
                        }
                        onChangeBlur={newBlur => saveSwitcherStyles('switchShadowBlur', newBlur)}
                        onChangehHorizontal={newValue =>
                            saveSwitcherStyles('switchShadowHorizontal', newValue)
                        }
                        onChangeVertical={newValue =>
                            saveSwitcherStyles('switchShadowVertical', newValue)
                        }
                        onChangePosition={newValue =>
                            saveSwitcherStyles('switchShadowPosition', newValue)
                        }
                    />
                </PanelBody>
                {showLabel && (<PanelBody
                    title={__("Labels Style")}
                    className="premium-panel-body"
                    initialOpen={false}
                >
                    <ResponsiveRangeControl
                        label={__("Spacing", 'premium-block-for-gutenberg')}
                        value={labelStyles.labelSpacing}
                        tabletValue={labelStyles.labelSpacingTablet}
                        mobileValue={labelStyles.labelSpacingMobile}
                        onChange={(value) => saveLabelStyles('labelSpacing', value)}
                        onChangeTablet={(value) => saveLabelStyles('labelSpacingTablet', value)}
                        onChangeMobile={(value) => saveLabelStyles('labelSpacingMobile', value)}
                        showUnit={false}
                        defaultValue={15}
                        min={1}
                        max={100}
                    />
                    <h2 className="premium-content-switcher-labels-style">{__("First Label")}</h2>
                    <AdvancedPopColorControl
                        label={__("Text Color", 'premium-block-for-gutenberg')}
                        colorValue={labelStyles.firstLabelColor}
                        colorDefault={''}
                        onColorChange={newValue =>
                            saveLabelStyles(
                                'firstLabelColor', newValue
                            )
                        }
                    />
                    <PremiumTypo
                        components={["responsiveSize", "weight", "line", "style", "upper", "spacing", "family"]}
                        setAttributes={saveLabelStyles}
                        fontSizeType={{ value: labelStyles.firstLabelfontSizeType, label: __("firstLabelfontSizeType") }}
                        fontSize={labelStyles.firstLabelfontSize}
                        fontSizeMobile={labelStyles.firstLabelfontSizeMobile}
                        fontSizeTablet={labelStyles.firstLabelfontSizeTablet}
                        onChangeSize={newSize => saveLabelStyles('firstLabelfontSize', newSize)}
                        onChangeTabletSize={newSize => saveLabelStyles('firstLabelfontSizeTablet', newSize)}
                        onChangeMobileSize={newSize => saveLabelStyles('firstLabelfontSizeMobile', newSize)}
                        weight={labelStyles.firstLabelWeight}
                        style={labelStyles.firstLabelStyle}
                        spacing={labelStyles.firstLabelLetter}
                        upper={labelStyles.firstLabelUpper}
                        line={labelStyles.firstLabelLine}
                        fontFamily={labelStyles.firstLabelFontFamily}
                        onChangeWeight={newWeight =>
                            saveLabelStyles('firstLabelWeight', newWeight || 500)
                        }
                        onChangeStyle={newStyle =>
                            saveLabelStyles('firstLabelStyle', newStyle)
                        }
                        onChangeSpacing={newValue =>
                            saveLabelStyles('firstLabelLetter', newValue)
                        }
                        onChangeUpper={check => saveLabelStyles('firstLabelUpper', check)}
                        onChangeLine={newValue => saveLabelStyles('firstLabelLine', newValue)}
                        onChangeFamily={(fontFamily) => saveLabelStyles('firstLabelFontFamily', fontFamily)}
                    />
                    <PremiumShadow
                        label={__("Text Shadow", 'premium-blocks-for-gutenberg')}
                        color={labelStyles.firstLabelShadowColor}
                        blur={labelStyles.firstLabelShadowBlur}
                        horizontal={labelStyles.firstLabelShadowHorizontal}
                        vertical={labelStyles.firstLabelShadowVertical}
                        onChangeColor={newColor =>
                            saveLabelStyles('firstLabelShadowColor', newColor)
                        }
                        onChangeBlur={newBlur => saveLabelStyles('firstLabelShadowBlur', newBlur)}
                        onChangehHorizontal={newValue =>
                            saveLabelStyles('firstLabelShadowHorizontal', newValue)
                        }
                        onChangeVertical={newValue =>
                            saveLabelStyles('firstLabelShadowVertical', newValue)
                        }
                    />
                    <PremiumBorder
                        borderType={labelStyles.firstLabelborderType}
                        borderWidth={firstLabelBorderWidth}
                        top={firstLabelBorderTop}
                        right={firstLabelBorderRight}
                        bottom={firstLabelBorderBottom}
                        left={firstLabelBorderLeft}
                        borderColor={labelStyles.firstLabelborderColor}
                        borderRadius={labelStyles.firstLabelborderRadius}
                        onChangeType={newType => saveLabelStyles('firstLabelborderType', newType)}
                        onChangeWidth={({ top, right, bottom, left }) =>
                            setAttributes({
                                firstLabelBorderUpdated: true,
                                firstLabelBorderTop: top,
                                firstLabelBorderRight: right,
                                firstLabelBorderBottom: bottom,
                                firstLabelBorderLeft: left,
                            })
                        }
                        onChangeColor={colorValue =>
                            saveLabelStyles('firstLabelborderColor', colorValue)
                        }
                        onChangeRadius={newrRadius =>
                            saveLabelStyles('firstLabelborderRadius', newrRadius)
                        }
                    />
                    <PremiumShadow
                        label={__("Box Shadow", 'premium-blocks-for-gutenberg')}
                        boxShadow={true}
                        color={labelStyles.firstLabelBoxShadowColor}
                        blur={labelStyles.firstLabelBoxShadowBlur}
                        horizontal={labelStyles.firstLabelBoxShadowHorizontal}
                        vertical={labelStyles.firstLabelBoxShadowVertical}
                        position={labelStyles.firstLabelBoxShadowPosition}
                        onChangeColor={newColor =>
                            saveLabelStyles('firstLabelBoxShadowColor', newColor)
                        }
                        onChangeBlur={newBlur => saveLabelStyles('firstLabelBoxShadowBlur', newBlur)}
                        onChangehHorizontal={newValue =>
                            saveLabelStyles('firstLabelBoxShadowHorizontal', newValue)
                        }
                        onChangeVertical={newValue =>
                            saveLabelStyles('firstLabelBoxShadowVertical', newValue)
                        }
                        onChangePosition={newValue =>
                            saveLabelStyles('firstLabelBoxShadowPosition', newValue)
                        }
                    />
                    <PremiumResponsivePadding
                        paddingTop={firstLabelPaddingT}
                        paddingRight={firstLabelPaddingR}
                        paddingBottom={firstLabelPaddingB}
                        paddingLeft={firstLabelPaddingL}
                        paddingTopTablet={firstLabelPaddingTTablet}
                        paddingRightTablet={firstLabelPaddingRTablet}
                        paddingBottomTablet={firstLabelPaddingBTablet}
                        paddingLeftTablet={firstLabelPaddingLTablet}
                        paddingTopMobile={firstLabelPaddingTMobile}
                        paddingRightMobile={firstLabelPaddingRMobile}
                        paddingBottomMobile={firstLabelPaddingBMobile}
                        paddingLeftMobile={firstLabelPaddingLMobile}
                        showUnits={true}
                        selectedUnit={labelStyles.firstLabelPaddingType}
                        onChangePadSizeUnit={newvalue => saveLabelStyles('firstLabelPaddingType', newvalue)}
                        onChangePaddingTop={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ firstLabelPaddingT: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ firstLabelPaddingTTablet: newValue })
                                } else {
                                    setAttributes({ firstLabelPaddingTMobile: newValue })
                                }
                            }
                        }
                        onChangePaddingRight={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ firstLabelPaddingR: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ firstLabelPaddingRTablet: newValue })
                                } else {
                                    setAttributes({ firstLabelPaddingRMobile: newValue })
                                }
                            }
                        }
                        onChangePaddingBottom={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ firstLabelPaddingB: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ firstLabelPaddingBTablet: newValue })
                                } else {
                                    setAttributes({ firstLabelPaddingBMobile: newValue })
                                }
                            }
                        }
                        onChangePaddingLeft={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ firstLabelPaddingL: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ firstLabelPaddingLTablet: newValue })
                                } else {
                                    setAttributes({ firstLabelPaddingLMobile: newValue })
                                }
                            }
                        }
                    />
                    <hr />
                    <h2 className="premium-content-switcher-labels-style">{__("Second Label")}</h2>
                    <AdvancedPopColorControl
                        label={__("Text Color", 'premium-block-for-gutenberg')}
                        colorValue={labelStyles.secondLabelColor}
                        colorDefault={''}
                        onColorChange={newValue =>
                            saveLabelStyles(
                                'secondLabelColor', newValue
                            )
                        }
                    />
                    <PremiumTypo
                        components={["responsiveSize", "weight", "line", "style", "upper", "spacing", "family"]}
                        setAttributes={saveLabelStyles}
                        fontSizeType={{ value: labelStyles.secondLabelfontSizeType, label: __("secondLabelfontSizeType") }}
                        fontSize={labelStyles.secondLabelfontSize}
                        fontSizeMobile={labelStyles.secondLabelfontSizeMobile}
                        fontSizeTablet={labelStyles.secondLabelfontSizeTablet}
                        onChangeSize={newSize => saveLabelStyles('secondLabelfontSize', newSize)}
                        onChangeTabletSize={newSize => saveLabelStyles('secondLabelfontSizeTablet', newSize)}
                        onChangeMobileSize={newSize => saveLabelStyles('secondLabelfontSizeMobile', newSize)}
                        weight={labelStyles.secondLabelWeight}
                        style={labelStyles.secondLabelStyle}
                        spacing={labelStyles.secondLabelLetter}
                        upper={labelStyles.secondLabelUpper}
                        line={labelStyles.secondLabelLine}
                        fontFamily={labelStyles.secondLabelFontFamily}
                        onChangeWeight={newWeight =>
                            saveLabelStyles('secondLabelWeight', newWeight || 500)
                        }
                        onChangeStyle={newStyle =>
                            saveLabelStyles('secondLabelStyle', newStyle)
                        }
                        onChangeSpacing={newValue =>
                            saveLabelStyles('secondLabelLetter', newValue)
                        }
                        onChangeUpper={check => saveLabelStyles('secondLabelUpper', check)}
                        onChangeLine={newValue => saveLabelStyles('secondLabelLine', newValue)}
                        onChangeFamily={(fontFamily) => saveLabelStyles('secondLabelFontFamily', fontFamily)}
                    />
                    <PremiumShadow
                        label={__("Text Shadow", 'premium-blocks-for-gutenberg')}
                        color={labelStyles.secondLabelShadowColor}
                        blur={labelStyles.secondLabelShadowBlur}
                        horizontal={labelStyles.secondLabelShadowHorizontal}
                        vertical={labelStyles.secondLabelShadowVertical}
                        onChangeColor={newColor =>
                            saveLabelStyles('secondLabelShadowColor', newColor)
                        }
                        onChangeBlur={newBlur => saveLabelStyles('secondLabelShadowBlur', newBlur)}
                        onChangehHorizontal={newValue =>
                            saveLabelStyles('secondLabelShadowHorizontal', newValue)
                        }
                        onChangeVertical={newValue =>
                            saveLabelStyles('secondLabelShadowVertical', newValue)
                        }
                    />
                    <PremiumBorder
                        borderType={labelStyles.secondLabelborderType}
                        borderWidth={secondLabelBorderWidth}
                        top={secondLabelBorderTop}
                        right={secondLabelBorderRight}
                        bottom={secondLabelBorderBottom}
                        left={secondLabelBorderLeft}
                        borderColor={labelStyles.secondLabelborderColor}
                        borderRadius={labelStyles.secondLabelborderRadius}
                        onChangeType={newType => saveLabelStyles('secondLabelborderType', newType)}
                        onChangeWidth={({ top, right, bottom, left }) =>
                            setAttributes({
                                secondLabelBorderUpdated: true,
                                secondLabelBorderTop: top,
                                secondLabelBorderRight: right,
                                secondLabelBorderBottom: bottom,
                                secondLabelBorderLeft: left,
                            })
                        }
                        onChangeColor={colorValue =>
                            saveLabelStyles('secondLabelborderColor', colorValue)
                        }
                        onChangeRadius={newrRadius =>
                            saveLabelStyles('secondLabelborderRadius', newrRadius)
                        }
                    />
                    <PremiumShadow
                        label={__("Box Shadow", 'premium-blocks-for-gutenberg')}
                        boxShadow={true}
                        color={labelStyles.secondLabelBoxShadowColor}
                        blur={labelStyles.secondLabelBoxShadowBlur}
                        horizontal={labelStyles.secondLabelBoxShadowHorizontal}
                        vertical={labelStyles.secondLabelBoxShadowVertical}
                        position={labelStyles.secondLabelBoxShadowPosition}
                        onChangeColor={newColor =>
                            saveLabelStyles('secondLabelBoxShadowColor', newColor)
                        }
                        onChangeBlur={newBlur => saveLabelStyles('secondLabelBoxShadowBlur', newBlur)}
                        onChangehHorizontal={newValue =>
                            saveLabelStyles('secondLabelBoxShadowHorizontal', newValue)
                        }
                        onChangeVertical={newValue =>
                            saveLabelStyles('secondLabelBoxShadowVertical', newValue)
                        }
                        onChangePosition={newValue =>
                            saveLabelStyles('secondLabelBoxShadowPosition', newValue)
                        }
                    />
                    <PremiumResponsivePadding
                        paddingTop={secondLabelPaddingT}
                        paddingRight={secondLabelPaddingR}
                        paddingBottom={secondLabelPaddingB}
                        paddingLeft={secondLabelPaddingL}
                        paddingTopTablet={secondLabelPaddingTTablet}
                        paddingRightTablet={secondLabelPaddingRTablet}
                        paddingBottomTablet={secondLabelPaddingBTablet}
                        paddingLeftTablet={secondLabelPaddingLTablet}
                        paddingTopMobile={secondLabelPaddingTMobile}
                        paddingRightMobile={secondLabelPaddingRMobile}
                        paddingBottomMobile={secondLabelPaddingBMobile}
                        paddingLeftMobile={secondLabelPaddingLMobile}
                        showUnits={true}
                        selectedUnit={labelStyles.secondLabelPaddingType}
                        onChangePadSizeUnit={newvalue => saveLabelStyles('secondLabelPaddingType', newvalue)}
                        onChangePaddingTop={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ secondLabelPaddingT: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ secondLabelPaddingTTablet: newValue })
                                } else {
                                    setAttributes({ secondLabelPaddingTMobile: newValue })
                                }
                            }
                        }
                        onChangePaddingRight={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ secondLabelPaddingR: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ secondLabelPaddingRTablet: newValue })
                                } else {
                                    setAttributes({ secondLabelPaddingRMobile: newValue })
                                }
                            }
                        }
                        onChangePaddingBottom={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ secondLabelPaddingB: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ secondLabelPaddingBTablet: newValue })
                                } else {
                                    setAttributes({ secondLabelPaddingBMobile: newValue })
                                }
                            }
                        }
                        onChangePaddingLeft={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ secondLabelPaddingL: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ secondLabelPaddingLTablet: newValue })
                                } else {
                                    setAttributes({ secondLabelPaddingLMobile: newValue })
                                }
                            }
                        }
                    />
                </PanelBody>
                )}
                <PanelBody
                    title={__("Content Style")}
                    className="premium-panel-body"
                    initialOpen={false}
                >
                    <ResponsiveRangeControl
                        label={__("Height", 'premium-block-for-gutenberg')}
                        value={contentStyles.contentHeight}
                        tabletValue={contentStyles.contentHeightTablet}
                        mobileValue={contentStyles.contentHeightMobile}
                        onChange={(value) => saveContentStyles('contentHeight', value)}
                        onChangeTablet={(value) => saveContentStyles('contentHeightTablet', value)}
                        onChangeMobile={(value) => saveContentStyles('contentHeightMobile', value)}
                        onChangeUnit={(key) =>
                            saveContentStyles('contentHeightType', key)
                        }
                        unit={contentStyles.contentHeightType}
                        showUnit={true}
                        defaultValue={100}
                        min={1}
                        max={1000}
                    />
                    <TabPanel
                        className="premium-color-tabpanel"
                        activeClass="active-tab"
                        tabs={[
                            {
                                name: "first",
                                title: "First Content",
                                className: "premium-tab",
                            },
                            {
                                name: "second",
                                title: "Second Content",
                                className: "premium-tab",
                            },
                        ]}
                    >
                        {(tab) => {
                            let tabout;
                            if ("first" === tab.name) {
                                tabout = (
                                    <Fragment>
                                        <AdvancedPopColorControl
                                            label={__("Text Color", 'premium-block-for-gutenberg')}
                                            colorValue={firstContentStyles.firstContentColor}
                                            colorDefault={''}
                                            onColorChange={newValue =>
                                                saveFirstContentStyles(
                                                    'firstContentColor', newValue
                                                )
                                            }
                                        />
                                        <AdvancedPopColorControl
                                            label={__("Background Color", 'premium-block-for-gutenberg')}
                                            colorValue={firstContentStyles.firstContentBGColor}
                                            colorDefault={''}
                                            onColorChange={newValue =>
                                                saveFirstContentStyles(
                                                    'firstContentBGColor', newValue
                                                )
                                            }
                                        />
                                        <PremiumTypo
                                            components={["responsiveSize", "weight", "line", "style", "upper", "spacing", "family"]}
                                            setAttributes={saveFirstContentStyles}
                                            fontSizeType={{ value: firstContentStyles.firstContentfontSizeType, label: __("firstContentfontSizeType") }}
                                            fontSize={firstContentStyles.firstContentfontSize}
                                            fontSizeMobile={firstContentStyles.firstContentfontSizeMobile}
                                            fontSizeTablet={firstContentStyles.firstContentfontSizeTablet}
                                            onChangeSize={newSize => saveFirstContentStyles('firstContentfontSize', newSize)}
                                            onChangeTabletSize={newSize => saveFirstContentStyles('firstContentfontSizeTablet', newSize)}
                                            onChangeMobileSize={newSize => saveFirstContentStyles('firstContentfontSizeMobile', newSize)}
                                            weight={firstContentStyles.firstContentWeight}
                                            style={firstContentStyles.firstContentStyle}
                                            spacing={firstContentStyles.firstContentLetter}
                                            upper={firstContentStyles.firstContentUpper}
                                            line={firstContentStyles.firstContentLine}
                                            fontFamily={firstContentStyles.firstContentFontFamily}
                                            onChangeWeight={newWeight =>
                                                saveFirstContentStyles('firstContentWeight', newWeight || 500)
                                            }
                                            onChangeStyle={newStyle =>
                                                saveFirstContentStyles('firstContentStyle', newStyle)
                                            }
                                            onChangeSpacing={newValue =>
                                                saveFirstContentStyles('firstContentLetter', newValue)
                                            }
                                            onChangeUpper={check => saveFirstContentStyles('firstContentUpper', check)}
                                            onChangeLine={newValue => saveFirstContentStyles('firstContentLine', newValue)}
                                            onChangeFamily={(fontFamily) => saveFirstContentStyles('firstContentFontFamily', fontFamily)}
                                        />
                                        <PremiumShadow
                                            label={__("Text Shadow", 'premium-blocks-for-gutenberg')}
                                            color={firstContentStyles.firstContentShadowColor}
                                            blur={firstContentStyles.firstContentShadowBlur}
                                            horizontal={firstContentStyles.firstContentShadowHorizontal}
                                            vertical={firstContentStyles.firstContentShadowVertical}
                                            onChangeColor={newColor =>
                                                saveFirstContentStyles('firstContentShadowColor', newColor)
                                            }
                                            onChangeBlur={newBlur => saveFirstContentStyles('firstContentShadowBlur', newBlur)}
                                            onChangehHorizontal={newValue =>
                                                saveFirstContentStyles('firstContentShadowHorizontal', newValue)
                                            }
                                            onChangeVertical={newValue =>
                                                saveFirstContentStyles('firstContentShadowVertical', newValue)
                                            }
                                        />
                                        <PremiumBorder
                                            borderType={firstContentStyles.firstContentborderType}
                                            borderWidth={firstContentBorderWidth}
                                            top={firstContentBorderTop}
                                            right={firstContentBorderRight}
                                            bottom={firstContentBorderBottom}
                                            left={firstContentBorderLeft}
                                            borderColor={firstContentStyles.firstContentborderColor}
                                            borderRadius={firstContentStyles.firstContentborderRadius}
                                            onChangeType={newType => saveFirstContentStyles('firstContentborderType', newType)}
                                            onChangeWidth={({ top, right, bottom, left }) =>
                                                setAttributes({
                                                    firstContentBorderUpdated: true,
                                                    firstContentBorderTop: top,
                                                    firstContentBorderRight: right,
                                                    firstContentBorderBottom: bottom,
                                                    firstContentBorderLeft: left,
                                                })
                                            }
                                            onChangeColor={colorValue =>
                                                saveFirstContentStyles('firstContentborderColor', colorValue)
                                            }
                                            onChangeRadius={newrRadius =>
                                                saveFirstContentStyles('firstContentborderRadius', newrRadius)
                                            }
                                        />
                                        <PremiumShadow
                                            label={__("Box Shadow", 'premium-blocks-for-gutenberg')}
                                            boxShadow={true}
                                            color={firstContentStyles.firstContentBoxShadowColor}
                                            blur={firstContentStyles.firstContentBoxShadowBlur}
                                            horizontal={firstContentStyles.firstContentBoxShadowHorizontal}
                                            vertical={firstContentStyles.firstContentBoxShadowVertical}
                                            position={firstContentStyles.firstContentBoxShadowPosition}
                                            onChangeColor={newColor =>
                                                saveFirstContentStyles('firstContentBoxShadowColor', newColor)
                                            }
                                            onChangeBlur={newBlur => saveFirstContentStyles('firstContentBoxShadowBlur', newBlur)}
                                            onChangehHorizontal={newValue =>
                                                saveFirstContentStyles('firstContentBoxShadowHorizontal', newValue)
                                            }
                                            onChangeVertical={newValue =>
                                                saveFirstContentStyles('firstContentBoxShadowVertical', newValue)
                                            }
                                            onChangePosition={newValue =>
                                                saveFirstContentStyles('firstContentBoxShadowPosition', newValue)
                                            }
                                        />
                                    </Fragment>
                                );
                            }
                            if ("second" === tab.name) {
                                tabout = (
                                    <Fragment>
                                        <AdvancedPopColorControl
                                            label={__("Text Color", 'premium-block-for-gutenberg')}
                                            colorValue={secondContentStyles.secondContentColor}
                                            colorDefault={''}
                                            onColorChange={newValue =>
                                                saveSecondContentStyles(
                                                    'secondContentColor', newValue
                                                )
                                            }
                                        />
                                        <AdvancedPopColorControl
                                            label={__("Background Color", 'premium-block-for-gutenberg')}
                                            colorValue={secondContentStyles.secondContentBGColor}
                                            colorDefault={''}
                                            onColorChange={newValue =>
                                                saveSecondContentStyles(
                                                    'secondContentBGColor', newValue
                                                )
                                            }
                                        />
                                        <PremiumTypo
                                            components={["responsiveSize", "weight", "line", "style", "upper", "spacing", "family"]}
                                            setAttributes={saveSecondContentStyles}
                                            fontSizeType={{ value: secondContentStyles.secondContentfontSizeType, label: __("secondContentfontSizeType") }}
                                            fontSize={secondContentStyles.secondContentfontSize}
                                            fontSizeMobile={secondContentStyles.secondContentfontSizeMobile}
                                            fontSizeTablet={secondContentStyles.secondContentfontSizeTablet}
                                            onChangeSize={newSize => saveSecondContentStyles('secondContentfontSize', newSize)}
                                            onChangeTabletSize={newSize => saveSecondContentStyles('secondContentfontSizeTablet', newSize)}
                                            onChangeMobileSize={newSize => saveSecondContentStyles('secondContentfontSizeMobile', newSize)}
                                            weight={secondContentStyles.secondContentWeight}
                                            style={secondContentStyles.secondContentStyle}
                                            spacing={secondContentStyles.secondContentLetter}
                                            upper={secondContentStyles.secondContentUpper}
                                            line={secondContentStyles.secondContentLine}
                                            fontFamily={secondContentStyles.secondContentFontFamily}
                                            onChangeWeight={newWeight =>
                                                saveSecondContentStyles('secondContentWeight', newWeight || 500)
                                            }
                                            onChangeStyle={newStyle =>
                                                saveSecondContentStyles('secondContentStyle', newStyle)
                                            }
                                            onChangeSpacing={newValue =>
                                                saveSecondContentStyles('secondContentLetter', newValue)
                                            }
                                            onChangeUpper={check => saveSecondContentStyles('secondContentUpper', check)}
                                            onChangeLine={newValue => saveSecondContentStyles('secondContentLine', newValue)}
                                            onChangeFamily={(fontFamily) => saveSecondContentStyles('secondContentFontFamily', fontFamily)}
                                        />
                                        <PremiumShadow
                                            label={__("Text Shadow", 'premium-blocks-for-gutenberg')}
                                            color={secondContentStyles.secondContentShadowColor}
                                            blur={secondContentStyles.secondContentShadowBlur}
                                            horizontal={secondContentStyles.secondContentShadowHorizontal}
                                            vertical={secondContentStyles.secondContentShadowVertical}
                                            onChangeColor={newColor =>
                                                saveSecondContentStyles('secondContentShadowColor', newColor)
                                            }
                                            onChangeBlur={newBlur => saveSecondContentStyles('secondContentShadowBlur', newBlur)}
                                            onChangehHorizontal={newValue =>
                                                saveSecondContentStyles('secondContentShadowHorizontal', newValue)
                                            }
                                            onChangeVertical={newValue =>
                                                saveSecondContentStyles('secondContentShadowVertical', newValue)
                                            }
                                        />
                                        <PremiumBorder
                                            borderType={secondContentStyles.secondContentborderType}
                                            borderWidth={secondContentBorderWidth}
                                            top={secondContentBorderTop}
                                            right={secondContentBorderRight}
                                            bottom={secondContentBorderBottom}
                                            left={secondContentBorderLeft}
                                            borderColor={secondContentStyles.secondContentborderColor}
                                            borderRadius={secondContentStyles.secondContentborderRadius}
                                            onChangeType={newType => saveSecondContentStyles('secondContentborderType', newType)}
                                            onChangeWidth={({ top, right, bottom, left }) =>
                                                setAttributes({
                                                    secondContentBorderUpdated: true,
                                                    secondContentBorderTop: top,
                                                    secondContentBorderRight: right,
                                                    secondContentBorderBottom: bottom,
                                                    secondContentBorderLeft: left,
                                                })
                                            }
                                            onChangeColor={colorValue =>
                                                saveSecondContentStyles('secondContentborderColor', colorValue)
                                            }
                                            onChangeRadius={newrRadius =>
                                                saveSecondContentStyles('secondContentborderRadius', newrRadius)
                                            }
                                        />
                                        <PremiumShadow
                                            label={__("Box Shadow", 'premium-blocks-for-gutenberg')}
                                            boxShadow={true}
                                            color={secondContentStyles.secondContentBoxShadowColor}
                                            blur={secondContentStyles.secondContentBoxShadowBlur}
                                            horizontal={secondContentStyles.secondContentBoxShadowHorizontal}
                                            vertical={secondContentStyles.secondContentBoxShadowVertical}
                                            position={secondContentStyles.secondContentBoxShadowPosition}
                                            onChangeColor={newColor =>
                                                saveSecondContentStyles('secondContentBoxShadowColor', newColor)
                                            }
                                            onChangeBlur={newBlur => saveSecondContentStyles('secondContentBoxShadowBlur', newBlur)}
                                            onChangehHorizontal={newValue =>
                                                saveSecondContentStyles('secondContentBoxShadowHorizontal', newValue)
                                            }
                                            onChangeVertical={newValue =>
                                                saveSecondContentStyles('secondContentBoxShadowVertical', newValue)
                                            }
                                            onChangePosition={newValue =>
                                                saveSecondContentStyles('secondContentBoxShadowPosition', newValue)
                                            }
                                        />
                                    </Fragment>
                                );
                            }
                            return (
                                <div>
                                    {tabout}
                                </div>
                            );
                        }}
                    </TabPanel>
                    <hr />
                    <PremiumResponsiveMargin
                        directions={["all"]}
                        marginTop={firstContentMarginT}
                        marginRight={firstContentMarginR}
                        marginBottom={firstContentMarginB}
                        marginLeft={firstContentMarginL}
                        marginTopTablet={firstContentMarginTTablet}
                        marginRightTablet={firstContentMarginRTablet}
                        marginBottomTablet={firstContentMarginBTablet}
                        marginLeftTablet={firstContentMarginLTablet}
                        marginTopMobile={firstContentMarginTMobile}
                        marginRightMobile={firstContentMarginRMobile}
                        marginBottomMobile={firstContentMarginBMobile}
                        marginLeftMobile={firstContentMarginLMobile}
                        showUnits={true}
                        onChangeMarSizeUnit={newvalue => saveFirstContentStyles('firstContentMarginType', newvalue)}
                        selectedUnit={firstContentStyles.firstContentMarginType}
                        onChangeMarginTop={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ firstContentMarginT: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ firstContentMarginTTablet: newValue })
                                } else {
                                    setAttributes({ firstContentMarginTMobile: newValue })
                                }
                            }
                        }
                        onChangeMarginRight={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ firstContentMarginR: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ firstContentMarginRTablet: newValue })
                                } else {
                                    setAttributes({ firstContentMarginRMobile: newValue })
                                }
                            }
                        }
                        onChangeMarginBottom={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ firstContentMarginB: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ firstContentMarginBTablet: newValue })
                                } else {
                                    setAttributes({ firstContentMarginBMobile: newValue })
                                }
                            }
                        }
                        onChangeMarginLeft={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ firstContentMarginL: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ firstContentMarginLTablet: newValue })
                                } else {
                                    setAttributes({ firstContentMarginLMobile: newValue })
                                }
                            }
                        }

                    />
                    <PremiumResponsivePadding
                        paddingTop={contentPaddingT}
                        paddingRight={contentPaddingR}
                        paddingBottom={contentPaddingB}
                        paddingLeft={contentPaddingL}
                        paddingTopTablet={contentPaddingTTablet}
                        paddingRightTablet={contentPaddingRTablet}
                        paddingBottomTablet={contentPaddingBTablet}
                        paddingLeftTablet={contentPaddingLTablet}
                        paddingTopMobile={contentPaddingTMobile}
                        paddingRightMobile={contentPaddingRMobile}
                        paddingBottomMobile={contentPaddingBMobile}
                        paddingLeftMobile={contentPaddingLMobile}
                        showUnits={true}
                        selectedUnit={firstContentStyles.firstContentPaddingType}
                        onChangePadSizeUnit={newvalue => saveFirstContentStyles('firstContentPaddingType', newvalue)}
                        onChangePaddingTop={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ contentPaddingT: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ contentPaddingTTablet: newValue })
                                } else {
                                    setAttributes({ contentPaddingTMobile: newValue })
                                }
                            }
                        }
                        onChangePaddingRight={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ contentPaddingR: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ contentPaddingRTablet: newValue })
                                } else {
                                    setAttributes({ contentPaddingRMobile: newValue })
                                }
                            }
                        }
                        onChangePaddingBottom={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ contentPaddingB: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ contentPaddingBTablet: newValue })
                                } else {
                                    setAttributes({ contentPaddingBMobile: newValue })
                                }
                            }
                        }
                        onChangePaddingLeft={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ contentPaddingL: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ contentPaddingLTablet: newValue })
                                } else {
                                    setAttributes({ contentPaddingLMobile: newValue })
                                }
                            }
                        }
                    />
                </PanelBody>

                <PanelBody
                    title={__("Container Style")}
                    className="premium-panel-body"
                    initialOpen={false}
                >
                    <PremiumBackgroundControl
                        setAttributes={setAttributes}
                        saveContainerStyle={saveContainerStyles}
                        backgroundType={backgroundType}
                        backgroundColor={containerStyles.containerBack}
                        backgroundImageID={containerStyles.backgroundImageID}
                        backgroundImageURL={containerStyles.backgroundImageURL}
                        backgroundPosition={containerStyles.backgroundPosition}
                        backgroundRepeat={containerStyles.backgroundRepeat}
                        backgroundSize={containerStyles.backgroundSize}
                        fixed={containerStyles.fixed}
                        gradientLocationOne={containerStyles.gradientLocationOne}
                        gradientColorTwo={containerStyles.gradientColorTwo}
                        gradientLocationTwo={containerStyles.gradientLocationTwo}
                        gradientAngle={containerStyles.gradientAngle}
                        gradientPosition={containerStyles.gradientPosition}
                        gradientType={containerStyles.gradientType}
                    />
                    <PremiumBorder
                        borderType={containerStyles.containerborderType}
                        borderWidth={containerBorderWidth}
                        top={containerBorderTop}
                        right={containerBorderRight}
                        bottom={containerBorderBottom}
                        left={containerBorderLeft}
                        borderColor={containerStyles.containerborderColor}
                        borderRadius={containerStyles.containerborderRadius}
                        onChangeType={newType => saveContainerStyles('containerborderType', newType)}
                        onChangeWidth={({ top, right, bottom, left }) =>
                            setAttributes({
                                containerBorderUpdated: true,
                                containerBorderTop: top,
                                containerBorderRight: right,
                                containerBorderBottom: bottom,
                                containerBorderLeft: left,
                            })
                        }
                        onChangeColor={colorValue =>
                            saveContainerStyles('containerborderColor', colorValue)
                        }
                        onChangeRadius={newrRadius =>
                            saveContainerStyles('containerborderRadius', newrRadius)
                        }
                    />
                    <PremiumShadow
                        label={__("Box Shadow", 'premium-blocks-for-gutenberg')}
                        boxShadow={true}
                        color={containerStyles.containerBoxShadowColor}
                        blur={containerStyles.containerBoxShadowBlur}
                        horizontal={containerStyles.containerBoxShadowHorizontal}
                        vertical={containerStyles.containerBoxShadowVertical}
                        position={containerStyles.containerBoxShadowPosition}
                        onChangeColor={newColor =>
                            saveContainerStyles('containerBoxShadowColor', newColor)
                        }
                        onChangeBlur={newBlur => saveContainerStyles('containerBoxShadowBlur', newBlur)}
                        onChangehHorizontal={newValue =>
                            saveContainerStyles('containerBoxShadowHorizontal', newValue)
                        }
                        onChangeVertical={newValue =>
                            saveContainerStyles('containerBoxShadowVertical', newValue)
                        }
                        onChangePosition={newValue =>
                            saveContainerStyles('containerBoxShadowPosition', newValue)
                        }
                    />
                    <PremiumResponsiveMargin
                        directions={["all"]}
                        marginTop={containerMarginT}
                        marginRight={containerMarginR}
                        marginBottom={containerMarginB}
                        marginLeft={containerMarginL}
                        marginTopTablet={containerMarginTTablet}
                        marginRightTablet={containerMarginRTablet}
                        marginBottomTablet={containerMarginBTablet}
                        marginLeftTablet={containerMarginLTablet}
                        marginTopMobile={containerMarginTMobile}
                        marginRightMobile={containerMarginRMobile}
                        marginBottomMobile={containerMarginBMobile}
                        marginLeftMobile={containerMarginLMobile}
                        showUnits={true}
                        onChangeMarSizeUnit={newvalue => saveContainerStyles('iconMarginType', newvalue)}
                        selectedUnit={containerStyles.iconMarginType}
                        onChangeMarginTop={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ containerMarginT: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ containerMarginTTablet: newValue })
                                } else {
                                    setAttributes({ containerMarginTMobile: newValue })
                                }
                            }
                        }
                        onChangeMarginRight={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ containerMarginR: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ containerMarginRTablet: newValue })
                                } else {
                                    setAttributes({ containerMarginRMobile: newValue })
                                }
                            }
                        }
                        onChangeMarginBottom={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ containerMarginB: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ containerMarginBTablet: newValue })
                                } else {
                                    setAttributes({ containerMarginBMobile: newValue })
                                }
                            }
                        }
                        onChangeMarginLeft={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ containerMarginL: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ containerMarginLTablet: newValue })
                                } else {
                                    setAttributes({ containerMarginLMobile: newValue })
                                }
                            }
                        }

                    />
                    <PremiumResponsivePadding
                        paddingTop={containerPaddingT}
                        paddingRight={containerPaddingR}
                        paddingBottom={containerPaddingB}
                        paddingLeft={containerPaddingL}
                        paddingTopTablet={containerPaddingTTablet}
                        paddingRightTablet={containerPaddingRTablet}
                        paddingBottomTablet={containerPaddingBTablet}
                        paddingLeftTablet={containerPaddingLTablet}
                        paddingTopMobile={containerPaddingTMobile}
                        paddingRightMobile={containerPaddingRMobile}
                        paddingBottomMobile={containerPaddingBMobile}
                        paddingLeftMobile={containerPaddingLMobile}
                        showUnits={true}
                        selectedUnit={containerStyles.iconPaddingType}
                        onChangePadSizeUnit={newvalue => saveContainerStyles('iconPaddingType', newvalue)}
                        onChangePaddingTop={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ containerPaddingT: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ containerPaddingTTablet: newValue })
                                } else {
                                    setAttributes({ containerPaddingTMobile: newValue })
                                }
                            }
                        }
                        onChangePaddingRight={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ containerPaddingR: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ containerPaddingRTablet: newValue })
                                } else {
                                    setAttributes({ containerPaddingRMobile: newValue })
                                }
                            }
                        }
                        onChangePaddingBottom={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ containerPaddingB: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ containerPaddingBTablet: newValue })
                                } else {
                                    setAttributes({ containerPaddingBMobile: newValue })
                                }
                            }
                        }
                        onChangePaddingLeft={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ containerPaddingL: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ containerPaddingLTablet: newValue })
                                } else {
                                    setAttributes({ containerPaddingLMobile: newValue })
                                }
                            }
                        }
                    />
                </PanelBody>
            </InspectorControls>
            {/* <BlockControls>
                <AlignmentToolbar
                    value={align}
                    onChange={(newAlignment) => {
                        setAttributes({ align: newAlignment });
                    }}

                />
            </BlockControls> */}

            <style>
                {`
                     #premium-content-switcher-${block_id} .premium-content-switcher-toggle-switch-slider:before {
                         border-radius: ${ContainerBorderRadius}${switcherStyles.containerRadiusType} !important;
                         box-shadow: ${switcherStyles.containerShadowHorizontal}px ${switcherStyles.containerShadowVertical}px ${switcherStyles.containerShadowBlur}px ${switcherStyles.containerShadowColor} ${switcherStyles.containerShadowPosition};
                     }
                    #premium-content-switcher-${block_id} .premium-content-switcher-toggle-switch-slider {
                        border-radius: ${SwitcherBorderRadius}${switcherStyles.switchRadiusType} !important;
                         box-shadow: ${switcherStyles.switchShadowHorizontal}px ${switcherStyles.switchShadowVertical}px ${switcherStyles.switchShadowBlur}px ${switcherStyles.switchShadowColor} ${switcherStyles.switchShadowPosition};
                     }
                     #premium-content-switcher-${block_id} .premium-content-switcher-toggle-inline .premium-content-switcher-first-label {
                         margin-right: ${LabelSpacing}px !important;
                    }
                    #premium-content-switcher-${block_id} .premium-content-switcher-toggle-inline .premium-content-switcher-second-label {
                        margin-left: ${LabelSpacing}px !important;
                    }
                   #premium-content-switcher-${block_id} .premium-content-switcher-toggle-block .premium-content-switcher-first-label {
                         margin-bottom: ${LabelSpacing}px !important;
                     }
                    #premium-content-switcher-${block_id} .premium-content-switcher-toggle-block .premium-content-switcher-second-label {
                        margin-top: ${LabelSpacing}px !important;
                    }
                 `}
            </style>
            <div
                {...useBlockProps({
                    className: classnames(
                        className,
                        `premium-block-${props.clientId}`
                    ),
                })}
                id={`premium-content-switcher-${block_id}`}
                // className={classnames(
                //     className,
                //     `premium-block-${props.clientId}`
                // )}
                style={{
                    textAlign: align,
                }}
            >
                <div className={`premium-content-switcher`}
                    style={{
                        textAlign: align,
                        backgroundColor: backgroundType === "solid" ? containerStyles.containerBack : "transparent",
                        boxShadow: `${containerStyles.containerBoxShadowHorizontal}px ${containerStyles.containerBoxShadowVertical}px ${containerStyles.containerBoxShadowBlur}px ${containerStyles.containerBoxShadowColor} ${containerStyles.containerBoxShadowPosition}`,
                        backgroundImage: btnbg,
                        backgroundRepeat: containerStyles.backgroundRepeat,
                        backgroundPosition: containerStyles.backgroundPosition,
                        backgroundSize: containerStyles.backgroundSize,
                        backgroundAttachment: containerStyles.fixed ? "fixed" : "unset",
                        borderStyle: containerStyles.containerborderType,
                        borderWidth: containerBorderUpdated
                            ? `${containerBorderTop}px ${containerBorderRight}px ${containerBorderBottom}px ${containerBorderLeft}px`
                            : containerBorderWidth + "px",
                        borderRadius: containerStyles.containerborderRadius + "px",
                        borderColor: containerStyles.containerborderColor,
                        paddingTop: ContainerPaddingTop + containerStyles.containerPaddingType,
                        paddingRight: ContainerPaddingRight + containerStyles.containerPaddingType,
                        paddingBottom: ContainerPaddingBottom + containerStyles.containerPaddingType,
                        paddingLeft: ContainerPaddingLeft + containerStyles.containerPaddingType,
                        marginTop: ContainerMarginTop + containerStyles.containerMarginType,
                        marginBottom: ContainerMarginBottom + containerStyles.containerMarginType,
                        marginLeft: ContainerMarginLeft + containerStyles.containerMarginType,
                        marginRight: ContainerMarginRight + containerStyles.containerMarginType,
                    }}>
                    <div className={`premium-content-switcher-toggle-${display}`}
                        style={{
                            textAlign: align,
                            justifyContent: align == "right" ? "flex-end" : align == "left" ? 'flex-start' : align,
                            alignItems: display == "inline" ? "center" : align == "right" ? "flex-end" : align == "left" ? 'flex-start' : align,
                        }}>
                        {showLabel && (<div className="premium-content-switcher-first-label">
                            <RichText
                                tagName={labelTag.toLowerCase()}
                                className={`premium-content-switcher-${display}-editing`}
                                onChange={(newValue) => setAttributes({ firstLabel: newValue })}
                                value={firstLabel}
                                style={{
                                    color: labelStyles.firstLabelColor,
                                    fontSize: FirstLabelSize + labelStyles.firstLabelfontSizeType,
                                    letterSpacing: labelStyles.firstLabelLetter + "px",
                                    textTransform: labelStyles.firstLabelUpper ? "uppercase" : "none",
                                    fontStyle: labelStyles.firstLabelStyle,
                                    fontWeight: labelStyles.firstLabelWeight,
                                    lineHeight: (labelStyles.firstLabelLine ? labelStyles.firstLabelLine : "") + "px",
                                    fontFamily: labelStyles.firstLabelFontFamily,
                                    borderStyle: labelStyles.firstLabelborderType,
                                    borderWidth: firstLabelBorderUpdated
                                        ? `${firstLabelBorderTop}px ${firstLabelBorderRight}px ${firstLabelBorderBottom}px ${firstLabelBorderLeft}px`
                                        : firstLabelBorderWidth + "px",
                                    borderRadius: labelStyles.firstLabelborderRadius + "px",
                                    borderColor: labelStyles.firstLabelborderColor,
                                    paddingTop: FirstLabelPaddingTop + labelStyles.firstLabelPaddingType,
                                    paddingBottom: FirstLabelPaddingBottom + labelStyles.firstLabelPaddingType,
                                    paddingLeft: FirstLabelPaddingLeft + labelStyles.firstLabelPaddingType,
                                    paddingRight: FirstLabelPaddingRight + labelStyles.firstLabelPaddingType,
                                    textShadow: `${labelStyles.firstLabelShadowHorizontal}px ${labelStyles.firstLabelShadowVertical}px ${labelStyles.firstLabelShadowBlur}px ${labelStyles.firstLabelShadowColor}`,
                                    boxShadow: `${labelStyles.firstLabelBoxShadowHorizontal}px ${labelStyles.firstLabelBoxShadowVertical}px ${labelStyles.firstLabelBoxShadowBlur}px ${labelStyles.firstLabelBoxShadowColor} ${labelStyles.firstLabelBoxShadowPosition}`,
                                }}
                            />
                        </div>
                        )}
                        <div
                            className="premium-content-switcher-toggle-switch"
                            style={{
                                fontSize: SwitcherSize + 'px',
                            }}
                        >
                            <label className={`premium-content-switcher-toggle-switch-label`}>
                                <input ref={inputSwitch} type="checkbox" className={`premium-content-switcher-toggle-switch-input ${props.clientId}`} />
                                <span className="premium-content-switcher-toggle-switch-slider round"
                                    style={{
                                        // borderRadius: switchRadius + "px"
                                    }}></span>
                            </label>
                        </div>
                        {showLabel && (<div className="premium-content-switcher-second-label">
                            <RichText
                                tagName={labelTag.toLowerCase()}
                                className={`premium-content-switcher-${display}-editing`}
                                onChange={(newValue) => setAttributes({ secondLabel: newValue })}
                                value={secondLabel}
                                style={{
                                    color: labelStyles.secondLabelColor,
                                    fontSize: SecondLabelSize + labelStyles.secondLabelfontSizeType,
                                    letterSpacing: labelStyles.secondLabelLetter + "px",
                                    textTransform: labelStyles.secondLabelUpper ? "uppercase" : "none",
                                    fontStyle: labelStyles.secondLabelStyle,
                                    fontWeight: labelStyles.secondLabelWeight,
                                    lineHeight: (labelStyles.secondLabelLine ? labelStyles.secondLabelLine : "") + "px",
                                    fontFamily: labelStyles.secondLabelFontFamily,
                                    borderStyle: labelStyles.secondLabelborderType,
                                    borderWidth: secondLabelBorderUpdated
                                        ? `${secondLabelBorderTop}px ${secondLabelBorderRight}px ${secondLabelBorderBottom}px ${secondLabelBorderLeft}px`
                                        : secondLabelBorderWidth + "px",
                                    borderRadius: labelStyles.secondLabelborderRadius + "px",
                                    borderColor: labelStyles.secondLabelborderColor,
                                    paddingTop: SecondLabelPaddingTop + labelStyles.secondLabelPaddingType,
                                    paddingBottom: SecondLabelPaddingBottom + labelStyles.secondLabelPaddingType,
                                    paddingLeft: SecondLabelPaddingLeft + labelStyles.secondLabelPaddingType,
                                    paddingRight: SecondLabelPaddingRight + labelStyles.secondLabelPaddingType,
                                    textShadow: `${labelStyles.secondLabelShadowHorizontal}px ${labelStyles.secondLabelShadowVertical}px ${labelStyles.secondLabelShadowBlur}px ${labelStyles.secondLabelShadowColor}`,
                                    boxShadow: `${labelStyles.secondLabelBoxShadowHorizontal}px ${labelStyles.secondLabelBoxShadowVertical}px ${labelStyles.secondLabelBoxShadowBlur}px ${labelStyles.secondLabelBoxShadowColor} ${labelStyles.secondLabelBoxShadowPosition}`,
                                }}
                            />
                        </div>
                        )}
                    </div>
                    <div
                        className={`premium-content-switcher-list ${effect == 'slide' ? `slide-${slide}` : ""}`}
                        style={{
                            marginTop: FirstContentMarginTop + firstContentStyles.firstContentMarginType,
                            marginBottom: FirstContentMarginBottom + firstContentStyles.firstContentMarginType,
                            marginLeft: FirstContentMarginLeft + firstContentStyles.firstContentMarginType,
                            marginRight: FirstContentMarginRight + firstContentStyles.firstContentMarginType,
                        }}
                    >
                        <ul className="premium-content-switcher-two-content">
                            <li ref={inputFirstContent} className={`premium-content-switcher-is-visible premium-content-switcher-first-list ${props.clientId}`}
                                style={{
                                    background: firstContentStyles.firstContentBGColor,
                                    borderStyle: firstContentStyles.firstContentborderType,
                                    borderWidth: firstContentBorderUpdated
                                        ? `${firstContentBorderTop}px ${firstContentBorderRight}px ${firstContentBorderBottom}px ${firstContentBorderLeft}px`
                                        : firstContentBorderWidth + "px",
                                    borderRadius: firstContentStyles.firstContentborderRadius + "px",
                                    borderColor: firstContentStyles.firstContentborderColor,
                                    minHeight: ContentHeight + contentStyles.contentHeightType,
                                    paddingTop: ContentPaddingTop + firstContentStyles.firstContentPaddingType,
                                    paddingBottom: ContentPaddingBottom + firstContentStyles.firstContentPaddingType,
                                    paddingLeft: ContentPaddingLeft + firstContentStyles.firstContentPaddingType,
                                    paddingRight: ContentPaddingRight + firstContentStyles.firstContentPaddingType,
                                    boxShadow: `${firstContentStyles.firstContentBoxShadowHorizontal}px ${firstContentStyles.firstContentBoxShadowVertical}px ${firstContentStyles.firstContentBoxShadowBlur}px ${firstContentStyles.firstContentBoxShadowColor} ${firstContentStyles.firstContentBoxShadowPosition}`,
                                }}>
                                <RichText
                                    tagName="div"
                                    className={`premium-content-switcher-first-content`}
                                    value={firstContent}
                                    onChange={value => {
                                        setAttributes({ firstContent: value })
                                    }}
                                    style={{
                                        textAlign: firstcontentlign,
                                        justifyContent: firstcontentlign,
                                        color: firstContentStyles.firstContentColor,
                                        fontSize: FirstContentSize + firstContentStyles.firstContentfontSizeType,
                                        letterSpacing: firstContentStyles.firstContentLetter + "px",
                                        textTransform: firstContentStyles.firstContentUpper ? "uppercase" : "none",
                                        fontStyle: firstContentStyles.firstContentStyle,
                                        fontWeight: firstContentStyles.firstContentWeight,
                                        lineHeight: (firstContentStyles.firstContentLine ? firstContentStyles.firstContentLine : "") + "px",
                                        fontFamily: firstContentStyles.firstContentFontFamily,
                                        textShadow: `${firstContentStyles.firstContentShadowHorizontal}px ${firstContentStyles.firstContentShadowVertical}px ${firstContentStyles.firstContentShadowBlur}px ${firstContentStyles.firstContentShadowColor}`,
                                    }}
                                />
                            </li>
                            <li ref={inputSecondContent} className={`premium-content-switcher-is-hidden premium-content-switcher-second-list ${props.clientId}`}
                                style={{
                                    background: secondContentStyles.secondContentBGColor,
                                    borderStyle: secondContentStyles.secondContentborderType,
                                    borderWidth: secondContentBorderUpdated
                                        ? `${secondContentBorderTop}px ${secondContentBorderRight}px ${secondContentBorderBottom}px ${secondContentBorderLeft}px`
                                        : secondContentBorderWidth + "px",
                                    borderRadius: secondContentStyles.secondContentborderRadius + "px",
                                    borderColor: secondContentStyles.secondContentborderColor,
                                    minHeight: ContentHeight + contentStyles.contentHeightType,
                                    paddingTop: ContentPaddingTop + secondContentStyles.secondContentPaddingType,
                                    paddingBottom: ContentPaddingBottom + secondContentStyles.secondContentPaddingType,
                                    paddingLeft: ContentPaddingLeft + secondContentStyles.secondContentPaddingType,
                                    paddingRight: ContentPaddingRight + secondContentStyles.secondContentPaddingType,
                                    boxShadow: `${secondContentStyles.secondContentBoxShadowHorizontal}px ${secondContentStyles.secondContentBoxShadowVertical}px ${secondContentStyles.secondContentBoxShadowBlur}px ${secondContentStyles.secondContentBoxShadowColor} ${secondContentStyles.secondContentBoxShadowPosition}`,
                                }}>
                                <RichText
                                    tagName="div"
                                    className={`premium-content-switcher-second-content`}
                                    value={secondContent}
                                    onChange={value => {
                                        setAttributes({ secondContent: value })
                                    }}
                                    style={{
                                        textAlign: secondcontentlign,
                                        justifyContent: secondcontentlign,
                                        color: secondContentStyles.secondContentColor,
                                        fontSize: SecondContentSize + secondContentStyles.secondContentfontSizeType,
                                        letterSpacing: secondContentStyles.secondContentLetter + "px",
                                        textTransform: secondContentStyles.secondContentUpper ? "uppercase" : "none",
                                        fontStyle: secondContentStyles.secondContentStyle,
                                        fontWeight: secondContentStyles.secondContentWeight,
                                        lineHeight: (secondContentStyles.secondContentLine ? secondContentStyles.secondContentLine : "") + "px",
                                        fontFamily: secondContentStyles.secondContentFontFamily,
                                        textShadow: `${secondContentStyles.secondContentShadowHorizontal}px ${secondContentStyles.secondContentShadowVertical}px ${secondContentStyles.secondContentShadowBlur}px ${secondContentStyles.secondContentShadowColor}`,
                                    }}
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default withSelect((select, props) => {
    const { __experimentalGetPreviewDeviceType = null } = select('core/edit-post');
    let deviceType = __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;

    return {
        deviceType: deviceType
    }
})(Edit)