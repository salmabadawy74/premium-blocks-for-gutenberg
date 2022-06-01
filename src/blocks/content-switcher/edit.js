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
import ResponsiveSingleRangeControl from "../../components/RangeControl/single-range-control";
import PremiumBackgroundControl from "../../components/Premium-Background-Control"
import AdvancedPopColorControl from '../../components/Color Control/ColorComponent'
import RadioComponent from '../../components/radio-control';
import PremiumTypo from "../../components/premium-typo";
import PremiumShadow from "../../components/PremiumShadow";
import PremiumBorder from "../../components/premium-border";
import SpacingControl from '../../components/premium-responsive-spacing'
import WebfontLoader from "../../components/typography/fontLoader"
import InspectorTabs from '../../components/inspectorTabs';
import InspectorTab from '../../components/inspectorTab';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */



function Edit(props) {

    const { attributes, setAttributes, className } = props;

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
    }, [])

    useEffect(() => {
        const content = document.querySelector('.premium-content-switcher-two-content');

        if (!mounted) {
            inputFirstContent.current.classList.remove("premium-content-switcher-is-visible");
            inputFirstContent.current.classList.add("premium-content-switcher-is-hidden");

            // content.style.overflow = 'hidden';

            inputSecondContent.current.classList.remove("premium-content-switcher-is-hidden");
            inputSecondContent.current.classList.add("premium-content-switcher-is-visible");
        }
        else {
            inputSecondContent.current.classList.remove("premium-content-switcher-is-visible");
            inputSecondContent.current.classList.add("premium-content-switcher-is-hidden");

            inputFirstContent.current.classList.remove("premium-content-switcher-is-hidden");
            inputFirstContent.current.classList.add("premium-content-switcher-is-visible");

            // content.style.overflow = 'hidden';
        }
        // setTimeout(function () {
        //     content.style.overflow = '';
        // }, 100);
    }, [mounted])

    const initToggleBox = () => {
        const { block_id } = props.attributes;
        if (!block_id) return null;

        setMounted(!mounted)
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
        secondLabelBorderTop,
        secondLabelBorderRight,
        secondLabelBorderBottom,
        secondLabelBorderLeft,
        secondLabelBorderUpdated,
        secondLabelBorderWidth,
        contentStyles,
        firstContentStyles,
        firstContentBorderTop,
        firstContentBorderRight,
        firstContentBorderBottom,
        firstContentBorderLeft,
        firstContentBorderUpdated,
        firstContentBorderWidth,
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
        effect,
        slide,
        firstLabelborder,
        firstLabelPadding,
        secondLabelPadding,
        contentPadding,
        containerPadding,
        firstContentMargin,
        containerMargin,
        switchSize,
        containerRadius,
        containerRadiusUnit,
        switchRadius,
        switchRadiusUnit,
        labelSpacing,
        contentHeight
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

    const SwitcherSize = getPreviewSize(props.deviceType, switcherStyles.switchSize, switcherStyles.switchSizeTablet, switcherStyles.switchSizeMobile);
    const SwitcherBorderRadius = getPreviewSize(props.deviceType, switcherStyles.switchRadius, switcherStyles.switchRadiusTablet, switcherStyles.switchRadiusMobile);
    const ContainerBorderRadius = getPreviewSize(props.deviceType, switcherStyles.containerRadius, switcherStyles.containerRadiusTablet, switcherStyles.containerRadiusMobile);
    const LabelSpacing = getPreviewSize(props.deviceType, labelStyles.labelSpacing, labelStyles.labelSpacingTablet, labelStyles.labelSpacingMobile);
    const FirstLabelSize = getPreviewSize(props.deviceType, labelStyles.firstLabelfontSize, labelStyles.firstLabelfontSizeTablet, labelStyles.firstLabelfontSizeMobile);
    const FirstLabelPaddingTop = getPreviewSize(props.deviceType, firstLabelPadding.Desktop.top, firstLabelPadding.Tablet.top, firstLabelPadding.Mobile.top);
    const FirstLabelPaddingRight = getPreviewSize(props.deviceType, firstLabelPadding.Desktop.right, firstLabelPadding.Tablet.right, firstLabelPadding.Mobile.right);
    const FirstLabelPaddingBottom = getPreviewSize(props.deviceType, firstLabelPadding.Desktop.bottom, firstLabelPadding.Tablet.bottom, firstLabelPadding.Mobile.bottom);
    const FirstLabelPaddingLeft = getPreviewSize(props.deviceType, firstLabelPadding.Desktop.left, firstLabelPadding.Tablet.left, firstLabelPadding.Mobile.left);
    const SecondLabelSize = getPreviewSize(props.deviceType, labelStyles.secondLabelfontSize, labelStyles.secondLabelfontSizeTablet, labelStyles.secondLabelfontSizeMobile);
    const SecondLabelPaddingTop = getPreviewSize(props.deviceType, secondLabelPadding.Desktop.top, secondLabelPadding.Tablet.top, secondLabelPadding.Mobile.top);
    const SecondLabelPaddingRight = getPreviewSize(props.deviceType, secondLabelPadding.Desktop.right, secondLabelPadding.Tablet.right, secondLabelPadding.Mobile.right);
    const SecondLabelPaddingBottom = getPreviewSize(props.deviceType, secondLabelPadding.Desktop.bottom, secondLabelPadding.Tablet.bottom, secondLabelPadding.Mobile.bottom);
    const SecondLabelPaddingLeft = getPreviewSize(props.deviceType, secondLabelPadding.Desktop.left, secondLabelPadding.Tablet.left, secondLabelPadding.Mobile.left);
    const ContentHeight = getPreviewSize(props.deviceType, contentStyles.contentHeight, contentStyles.contentHeightTablet, contentStyles.contentHeightMobile);
    const FirstContentSize = getPreviewSize(props.deviceType, firstContentStyles.firstContentfontSize, firstContentStyles.firstContentfontSizeTablet, firstContentStyles.firstContentfontSizeMobile);
    const FirstContentMarginTop = getPreviewSize(props.deviceType, firstContentMargin.Desktop.top, firstContentMargin.Tablet.top, firstContentMargin.Mobile.top);
    const FirstContentMarginRight = getPreviewSize(props.deviceType, firstContentMargin.Desktop.right, firstContentMargin.Tablet.right, firstContentMargin.Mobile.right);
    const FirstContentMarginBottom = getPreviewSize(props.deviceType, firstContentMargin.Desktop.bottom, firstContentMargin.Tablet.bottom, firstContentMargin.Mobile.bottom);
    const FirstContentMarginLeft = getPreviewSize(props.deviceType, firstContentMargin.Desktop.left, firstContentMargin.Tablet.left, firstContentMargin.Mobile.left);
    const ContentPaddingTop = getPreviewSize(props.deviceType, contentPadding.Desktop.top, contentPadding.Tablet.top, contentPadding.Mobile.top);
    const ContentPaddingRight = getPreviewSize(props.deviceType, contentPadding.Desktop.right, contentPadding.Tablet.right, contentPadding.Mobile.right);
    const ContentPaddingBottom = getPreviewSize(props.deviceType, contentPadding.Desktop.bottom, contentPadding.Tablet.bottom, contentPadding.Mobile.bottom);
    const ContentPaddingLeft = getPreviewSize(props.deviceType, contentPadding.Desktop.left, contentPadding.Tablet.left, contentPadding.Mobile.left);
    const SecondContentSize = getPreviewSize(props.deviceType, secondContentStyles.secondContentfontSize, secondContentStyles.secondContentfontSizeTablet, secondContentStyles.secondContentfontSizeMobile);
    const ContainerMarginTop = getPreviewSize(props.deviceType, containerMargin.Desktop.top, containerMargin.Tablet.top, containerMargin.Mobile.top);
    const ContainerMarginRight = getPreviewSize(props.deviceType, containerMargin.Desktop.right, containerMargin.Tablet.right, containerMargin.Mobile.right);
    const ContainerMarginBottom = getPreviewSize(props.deviceType, containerMargin.Desktop.bottom, containerMargin.Tablet.bottom, containerMargin.Mobile.bottom);
    const ContainerMarginLeft = getPreviewSize(props.deviceType, containerMargin.Desktop.left, containerMargin.Tablet.left, containerMargin.Mobile.left);
    const ContainerPaddingTop = getPreviewSize(props.deviceType, containerPadding.Desktop.top, containerPadding.Tablet.top, containerPadding.Mobile.top);
    const ContainerPaddingRight = getPreviewSize(props.deviceType, containerPadding.Desktop.right, containerPadding.Tablet.right, containerPadding.Mobile.right);
    const ContainerPaddingBottom = getPreviewSize(props.deviceType, containerPadding.Desktop.bottom, containerPadding.Tablet.bottom, containerPadding.Mobile.bottom);
    const ContainerPaddingLeft = getPreviewSize(props.deviceType, containerPadding.Desktop.left, containerPadding.Tablet.left, containerPadding.Mobile.left);

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

    let loadFirstLabelGoogleFonts;
    let loadSecondLabelGoogleFonts;
    let loadFirstContentGoogleFonts;
    let loadSecondContentGoogleFonts;

    if (labelStyles.firstLabelFontFamily !== 'Default') {
        const firstLabelconfig = {
            google: {
                families: [labelStyles.firstLabelFontFamily],
            },
        }
        loadFirstLabelGoogleFonts = (
            <WebfontLoader config={firstLabelconfig}>
            </WebfontLoader>
        )
    }

    if (labelStyles.secondLabelFontFamily !== "Default") {
        const secondLabelConfig = {
            google: {
                families: [labelStyles.secondLabelFontFamily],
            },
        }
        loadSecondLabelGoogleFonts = (
            <WebfontLoader config={secondLabelConfig}>
            </WebfontLoader>
        )
    }

    if (firstContentStyles.firstContentFontFamily !== "Default") {
        const firstContentConfig = {
            google: {
                families: [firstContentStyles.firstContentFontFamily],
            }
        }
        loadFirstContentGoogleFonts = (
            <WebfontLoader config={firstContentConfig}>
            </WebfontLoader>
        )
    }

    if (secondContentStyles.secondContentFontFamily !== "Default") {
        const secondContentConfig = {
            google: {
                families: [secondContentStyles.secondContentFontFamily],
            }
        }
        loadSecondContentGoogleFonts = (
            <WebfontLoader config={secondContentConfig}>
            </WebfontLoader>
        )
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
                <InspectorTabs tabs={['layout', 'style', 'advance']}>
                    <InspectorTab key={'layout'}>
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
                                    {/* <TextControl
                                        label={__("First Label")}
                                        value={firstLabel}
                                        onChange={value => setAttributes({ firstLabel: value })}
                                    />
                                    <TextControl
                                        label={__("Second Label")}
                                        value={secondLabel}
                                        onChange={value => setAttributes({ secondLabel: value })}
                                    /> */}
                                    <RadioComponent
                                        label={__("HTML Tag", 'premium-blocks-for-gutenberg')}
                                        choices={['H1', 'H2', 'H3', 'H4', 'H5', 'H6']}
                                        value={labelTag}
                                        onChange={(newValue) => setAttributes({ labelTag: newValue })}
                                    />
                                    {/* <SelectControl
                                        label={__("HTML Tag")}
                                        options={TAGS}
                                        value={labelTag}
                                        onChange={(newValue) => setAttributes({ labelTag: newValue })}
                                    /> */}
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
                            {/* <TextareaControl
                                label={__("Content", 'premium-block-for-gutenberg')}
                                value={firstContent}
                                onChange={newEffect => setAttributes({ firstContent: newEffect })}
                            /> */}
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
                            {/* <TextareaControl
                                label={__("Content", 'premium-block-for-gutenberg')}
                                value={secondContent}
                                onChange={newEffect => setAttributes({ secondContent: newEffect })}
                            /> */}
                            <p>{__("Alignment")}</p>
                            <Toolbar
                                controls={ALIGNS.map(contentAlign => ({
                                    icon: "editor-align" + contentAlign,
                                    isActive: contentAlign === secondcontentlign,
                                    onClick: () => setAttributes({ secondcontentlign: contentAlign })
                                }))}
                            />
                        </PanelBody>
                    </InspectorTab>
                    <InspectorTab key={'style'}>
                        <PanelBody
                            title={__("Switcher Style")}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <ResponsiveRangeControl
                                label={__('Size', 'premium-blocks-for-gutenberg')}
                                value={switchSize}
                                onChange={(value) => setAttributes({ switchSize: value })}
                                min={1}
                                max={40}
                                step={1}
                                showUnit={false}
                                defaultValue={15}
                            />
                            <ResponsiveSingleRangeControl
                                label={__("Controller Border Radius", 'premium-blocks-for-gutenberg')}
                                value={containerRadius}
                                onChange={newSize => setAttributes({ containerRadius: newSize })}
                                min={1}
                                max={100}
                                step={1}
                                showUnit={true}
                                units={['px', 'em', '%']}
                                defaultValue={50}
                                unit={containerRadiusUnit}
                                onChangeUnit={newSize => setAttributes({ containerRadiusUnit: newSize })}
                            />
                            <ResponsiveSingleRangeControl
                                label={__("Switcher Border Radius", 'premium-blocks-for-gutenberg')}
                                value={switchRadius}
                                onChange={newSize => setAttributes({ switchRadius: newSize })}
                                min={1}
                                max={100}
                                step={1}
                                showUnit={true}
                                units={['px', 'em', '%']}
                                defaultValue={1.5}
                                unit={switchRadiusUnit}
                                onChangeUnit={newSize => setAttributes({ switchRadiusUnit: newSize })}
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
                                label={__('Spacing', 'premium-blocks-for-gutenberg')}
                                value={labelSpacing}
                                onChange={(value) => setAttributes({ labelSpacing: value })}
                                min={1}
                                max={100}
                                step={1}
                                showUnit={false}
                                defaultValue={15}
                            />
                            <TabPanel
                                className="premium-color-tabpanel"
                                activeClass="active-tab"
                                tabs={[
                                    {
                                        name: "firstLabel",
                                        title: "First Label",
                                        className: "premium-tab",
                                    },
                                    {
                                        name: "secondLabel",
                                        title: "Second Label",
                                        className: "premium-tab",
                                    },
                                ]}
                            >
                                {(tab) => {
                                    let tabout;
                                    if ("firstLabel" === tab.name) {
                                        tabout = (
                                            <Fragment>
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
                                                <SpacingControl
                                                    label={__('Padding', 'premium-blocks-for-gutenberg')}
                                                    value={firstLabelPadding}
                                                    onChange={(value) => setAttributes({ firstLabelPadding: value })}
                                                    showUnits={true}
                                                    responsive={true}
                                                />
                                            </Fragment>
                                        );
                                    }
                                    if ("secondLabel" === tab.name) {
                                        tabout = (
                                            <Fragment>
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
                                                <SpacingControl
                                                    label={__('Padding', 'premium-blocks-for-gutenberg')}
                                                    value={secondLabelPadding}
                                                    onChange={(value) => setAttributes({ secondLabelPadding: value })}
                                                    showUnits={true}
                                                    responsive={true}
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
                        </PanelBody>
                        )}
                        <PanelBody
                            title={__("Content Style")}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <ResponsiveRangeControl
                                label={__('Height', 'premium-blocks-for-gutenberg')}
                                value={contentHeight}
                                onChange={(value) => setAttributes({ contentHeight: value })}
                                min={1}
                                max={1000}
                                step={1}
                                showUnit={true}
                                units={['px', 'em', 'rem']}
                                defaultValue={100}
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
                            <SpacingControl
                                label={__('Margin', 'premium-blocks-for-gutenberg')}
                                value={firstContentMargin}
                                onChange={(value) => setAttributes({ firstContentMargin: value })}
                                showUnits={true}
                                responsive={true}
                            />
                            <SpacingControl
                                label={__('Padding', 'premium-blocks-for-gutenberg')}
                                value={contentPadding}
                                onChange={(value) => setAttributes({ contentPadding: value })}
                                showUnits={true}
                                responsive={true}
                            />
                        </PanelBody>

                        <PanelBody
                            title={__("Container Style")}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            {/* <PremiumBackgroundControl
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
                    /> */}
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
                            <SpacingControl
                                label={__('Margin', 'premium-blocks-for-gutenberg')}
                                value={containerMargin}
                                onChange={(value) => setAttributes({ containerMargin: value })}
                                showUnits={true}
                                responsive={true}
                            />
                            <SpacingControl
                                label={__('Padding', 'premium-blocks-for-gutenberg')}
                                value={containerPadding}
                                onChange={(value) => setAttributes({ containerPadding: value })}
                                showUnits={true}
                                responsive={true}
                            />
                        </PanelBody>
                    </InspectorTab>
                    <InspectorTab key={'advance'}></InspectorTab>
                </InspectorTabs>
            </InspectorControls>

            <style>
                {`
                     #premium-content-switcher-${block_id} .premium-content-switcher-toggle-switch-slider:before {
                         border-radius: ${containerRadius || 50}${containerRadiusUnit} !important;
                         box-shadow: ${switcherStyles.containerShadowHorizontal}px ${switcherStyles.containerShadowVertical}px ${switcherStyles.containerShadowBlur}px ${switcherStyles.containerShadowColor} ${switcherStyles.containerShadowPosition};
                     }
                    #premium-content-switcher-${block_id} .premium-content-switcher-toggle-switch-slider {
                        border-radius: ${switchRadius}${switchRadiusUnit} !important;
                         box-shadow: ${switcherStyles.switchShadowHorizontal}px ${switcherStyles.switchShadowVertical}px ${switcherStyles.switchShadowBlur}px ${switcherStyles.switchShadowColor} ${switcherStyles.switchShadowPosition};
                     }
                     #premium-content-switcher-${block_id} .premium-content-switcher-toggle-inline .premium-content-switcher-first-label {
                         margin-right: ${labelSpacing[props.deviceType]}px !important;
                    }
                    #premium-content-switcher-${block_id} .premium-content-switcher-toggle-inline .premium-content-switcher-second-label {
                        margin-left: ${labelSpacing[props.deviceType]}px !important;
                    }
                   #premium-content-switcher-${block_id} .premium-content-switcher-toggle-block .premium-content-switcher-first-label {
                         margin-bottom: ${labelSpacing[props.deviceType]}px !important;
                     }
                    #premium-content-switcher-${block_id} .premium-content-switcher-toggle-block .premium-content-switcher-second-label {
                        margin-top: ${labelSpacing[props.deviceType]}px !important;
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
                        paddingTop: ContainerPaddingTop + containerPadding.unit,
                        paddingRight: ContainerPaddingRight + containerPadding.unit,
                        paddingBottom: ContainerPaddingBottom + containerPadding.unit,
                        paddingLeft: ContainerPaddingLeft + containerPadding.unit,
                        marginTop: ContainerMarginTop + containerMargin.unit,
                        marginBottom: ContainerMarginBottom + containerMargin.unit,
                        marginLeft: ContainerMarginLeft + containerMargin.unit,
                        marginRight: ContainerMarginRight + containerMargin.unit,
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
                                    margin: 0,
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
                                    paddingTop: FirstLabelPaddingTop + firstLabelPadding.unit,
                                    paddingBottom: FirstLabelPaddingBottom + firstLabelPadding.unit,
                                    paddingLeft: FirstLabelPaddingLeft + firstLabelPadding.unit,
                                    paddingRight: FirstLabelPaddingRight + firstLabelPadding.unit,
                                    textShadow: `${labelStyles.firstLabelShadowHorizontal}px ${labelStyles.firstLabelShadowVertical}px ${labelStyles.firstLabelShadowBlur}px ${labelStyles.firstLabelShadowColor}`,
                                    boxShadow: `${labelStyles.firstLabelBoxShadowHorizontal}px ${labelStyles.firstLabelBoxShadowVertical}px ${labelStyles.firstLabelBoxShadowBlur}px ${labelStyles.firstLabelBoxShadowColor} ${labelStyles.firstLabelBoxShadowPosition}`,
                                }}
                            />
                        </div>
                        )}
                        <div
                            className="premium-content-switcher-toggle-switch"
                            style={{
                                fontSize: (switchSize[props.deviceType] || 15) + "px",
                            }}
                        >
                            <label className={`premium-content-switcher-toggle-switch-label`}>
                                <input onClick={() => initToggleBox()} type="checkbox" className={`premium-content-switcher-toggle-switch-input ${props.clientId}`} />
                                <span className="premium-content-switcher-toggle-switch-slider round"></span>
                            </label>
                        </div>
                        {showLabel && (<div className="premium-content-switcher-second-label">
                            <RichText
                                tagName={labelTag.toLowerCase()}
                                className={`premium-content-switcher-${display}-editing`}
                                onChange={(newValue) => setAttributes({ secondLabel: newValue })}
                                value={secondLabel}
                                style={{
                                    margin: 0,
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
                                    paddingTop: SecondLabelPaddingTop + secondLabelPadding.unit,
                                    paddingBottom: SecondLabelPaddingBottom + secondLabelPadding.unit,
                                    paddingLeft: SecondLabelPaddingLeft + secondLabelPadding.unit,
                                    paddingRight: SecondLabelPaddingRight + secondLabelPadding.unit,
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
                            marginTop: FirstContentMarginTop + firstContentMargin.unit,
                            marginBottom: FirstContentMarginBottom + firstContentMargin.unit,
                            marginLeft: FirstContentMarginLeft + firstContentMargin.unit,
                            marginRight: FirstContentMarginRight + firstContentMargin.unit,
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
                                    minHeight: (contentHeight[props.deviceType] || 100) + contentHeight.unit,
                                    paddingTop: ContentPaddingTop + contentPadding.unit,
                                    paddingBottom: ContentPaddingBottom + contentPadding.unit,
                                    paddingLeft: ContentPaddingLeft + contentPadding.unit,
                                    paddingRight: ContentPaddingRight + contentPadding.unit,
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
                                    minHeight: (contentHeight[props.deviceType] || 100) + contentHeight.unit,
                                    paddingTop: ContentPaddingTop + contentPadding.unit,
                                    paddingBottom: ContentPaddingBottom + contentPadding.unit,
                                    paddingLeft: ContentPaddingLeft + contentPadding.unit,
                                    paddingRight: ContentPaddingRight + contentPadding.unit,
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
                {loadFirstLabelGoogleFonts}
                {loadSecondLabelGoogleFonts}
                {loadFirstContentGoogleFonts}
                {loadSecondContentGoogleFonts}
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