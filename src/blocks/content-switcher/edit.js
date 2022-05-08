import classnames from "classnames"
import ResponsiveRangeControl from "../../components/RangeControl/responsive-range-control";
import ResponsiveSingleRangeControl from "../../components/RangeControl/single-range-control";
import PremiumBackgroundControl from "../../components/Premium-Background-Control"
import AdvancedPopColorControl from '../../components/Color Control/ColorComponent'
import PremiumTypo from "../../components/premium-typo";
import PremiumShadow from "../../components/PremiumShadow";
import PremiumResponsivePadding from "../../components/Premium-Responsive-Padding";
import PremiumResponsiveMargin from "../../components/Premium-Responsive-Margin";
import PremiumBorder from "../../components/premium-border";

const { __ } = wp.i18n

const { withSelect } = wp.data

let isBoxUpdated = null;

const {
    Component,
    Fragment,
} = wp.element

const {
    BlockControls,
    AlignmentToolbar,
    InspectorControls,
    ColorPalette,
    RichText
} = wp.editor

const {
    PanelBody,
    SelectControl,
    RangeControl,
    Toolbar,
    TextControl,
    ToggleControl,
    TextareaControl,
    TabPanel
} = wp.components

class edit extends Component {

    constructor() {
        super(...arguments);

        this.initToggleBox = this.initToggleBox.bind(this);
    }
    componentDidMount() {
        // Assigning id in the attribute.
        this.props.setAttributes({ block_id: this.props.clientId })
        this.props.setAttributes({ classMigrate: true })
        // Pushing Style tag for this block css.
        const $style = document.createElement("style")
        $style.setAttribute("id", "premium-style-content-switcher-" + this.props.clientId)
        document.head.appendChild($style)
        this.props.setAttributes({ switchCheck: false })
        setTimeout(this.initToggleBox, 10);
        this.getPreviewSize = this.getPreviewSize.bind(this);
    }

    componentDidUpdate() {
        clearTimeout(isBoxUpdated);
        isBoxUpdated = setTimeout(this.initToggleBox, 10);
    }

    initToggleBox() {
        const { block_id, switchCheck } = this.props.attributes;
        if (!block_id) return null;

        let toggleBox = document.getElementsByClassName(`premium-content-switcher-toggle-switch-input ${block_id}`);
        setTimeout(
            toggleBox[0].addEventListener("click", () => {
                this.props.setAttributes({ switchCheck: !switchCheck })
                console.log(switchCheck);

                if (!switchCheck) {
                    let switchToggle = document.getElementsByClassName(`premium-content-switcher-first-list ${block_id}`);
                    switchToggle[0].classList.remove("premium-content-switcher-is-visible");
                    switchToggle[0].classList.add("premium-content-switcher-is-hidden");
                    let switchTogglesecond = document.getElementsByClassName(`premium-content-switcher-second-list ${block_id}`);
                    switchTogglesecond[0].classList.remove("premium-content-switcher-is-hidden");
                    switchTogglesecond[0].classList.add("premium-content-switcher-is-visible");
                }
                else {
                    let switchToggle = document.getElementsByClassName(`premium-content-switcher-second-list ${block_id}`);
                    switchToggle[0].classList.remove("premium-content-switcher-is-visible");
                    switchToggle[0].classList.add("premium-content-switcher-is-hidden");

                    let switchTogglesecond = document.getElementsByClassName(`premium-content-switcher-first-list ${block_id}`);
                    switchTogglesecond[0].classList.remove("premium-content-switcher-is-hidden");
                    switchTogglesecond[0].classList.add("premium-content-switcher-is-visible");
                }
            })
            , 10);
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

    render() {
        const { attributes, setAttributes, isSelected } = this.props

        const {
            block_id,
            align,
            className,
            showLabel,
            firstLabel,
            secondLabel,
            display,
            labelTag,
            firstContent,
            secondContent,
            switchCheck,
            firstcontentlign,
            secondcontentlign,
            switcherStyles,
            backgroundType,
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
            firstContentPaddingR,
            contentPaddingB,
            contentPaddingL,
            contentPaddingTTablet,
            contentPaddingRTablet,
            contentPaddingBTablet,
            firstContentPaddingLTablet,
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
            backgroundTypeState2,
            switchSize,
            switchSizeTablet,
            switchSizeType,
            switchSizeMobile,
            bottomSpacing,
            bottomSpacingTablet,
            bottomSpacingMobile,
            bottomSpacingType,
            secondStateColor,
            firstStateColor,
            switcherBGColor,
            switchRadius,
            labelSpacing,
            labelSpacingTablet,
            labelSpacingMobile,
            labelSpacingType,
            firstLabelColor,
            firstLabelWeight,
            firstLabelLetter,
            firstLabelUpper,
            firstLabelStyle,
            firstLabelfontSize,
            firstLabelfontSizeMobile,
            firstLabelfontSizeTablet,
            firstLabelfontSizeType,
            secondLabelColor,
            secondLabelWeight,
            secondLabelLetter,
            secondLabelUpper,
            secondLabelStyle,
            secondLabelfontSize,
            secondLabelfontSizeMobile,
            secondLabelfontSizeTablet,
            secondLabelfontSizeType,
            shadowColor,
            shadowBlur,
            shadowHorizontal,
            shadowVertical,
            contentHeight,
            contentHeightTablet,
            contentHeightType,
            contentHeightMobile,
            firstContentColor,
            firstContentBGColor,
            secondContentHeight,
            secondContentHeightTablet,
            secondContentHeightType,
            secondContentHeightMobile,
            secondContentColor,
            secondContentBGColor,
            firstpaddingTop,
            firstpaddingTopMobile,
            firstpaddingTopTablet,
            firstpaddingTopType,
            firstpaddingLeft,
            firstpaddingLeftMobile,
            firstpaddingLeftTablet,
            firstpaddingLeftType,
            firstpaddingRight,
            firstpaddingRightMobile,
            firstpaddingRightTablet,
            firstpaddingRightType,
            firstpaddingBottom,
            firstpaddingBottomMobile,
            firstpaddingBottomTablet,
            firstpaddingBottomType,
            secondpaddingTop,
            secondpaddingTopMobile,
            secondpaddingTopTablet,
            secondpaddingTopType,
            secondpaddingLeft,
            secondpaddingLeftMobile,
            secondpaddingLeftTablet,
            secondpaddingLeftType,
            secondpaddingRight,
            secondpaddingRightMobile,
            secondpaddingRightTablet,
            secondpaddingRightType,
            secondpaddingBottom,
            secondpaddingBottomMobile,
            secondpaddingBottomTablet,
            secondpaddingBottomType,
            effect,
            slide,
            firstContentfontSize,
            firstContentfontSizeMobile,
            firstContentfontSizeTablet,
            firstContentfontSizeType,
            firstContentWeight,
            firstContentLetter,
            firstContentUpper,
            firstContentStyle,
            firstContentborderType,
            firstContentborderWidth,
            firstContentborderColor,
            firstContentborderRadius,
            secondContentfontSize,
            secondContentfontSizeType,
            secondContentfontSizeMobile,
            secondContentfontSizeTablet,
            secondContentLetter,
            secondContentStyle,
            secondContentWeight,
            secondContentUpper,
            secondContentborderType,
            secondContentborderWidth,
            secondContentborderColor,
            secondContentborderRadius
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

        var element = document.getElementById("premium-style-content-switcher-" + this.props.clientId)

        if (null != element && "undefined" != typeof element) {
            // element.innerHTML = styling(this.props)
        }

        const SwitcherSize = this.getPreviewSize(this.props.deviceType, switcherStyles[0].switchSize, switcherStyles[0].switchSizeTablet, switcherStyles[0].switchSizeMobile);
        const SwitcherBorderRadius = this.getPreviewSize(this.props.deviceType, switcherStyles[0].switchRadius, switcherStyles[0].switchRadiusTablet, switcherStyles[0].switchRadiusMobile);
        const ContainerBorderRadius = this.getPreviewSize(this.props.deviceType, switcherStyles[0].containerRadius, switcherStyles[0].containerRadiusTablet, switcherStyles[0].containerRadiusMobile);
        const LabelSpacing = this.getPreviewSize(this.props.deviceType, labelStyles[0].labelSpacing, labelStyles[0].labelSpacingTablet, labelStyles[0].labelSpacingMobile);
        const FirstLabelSize = this.getPreviewSize(this.props.deviceType, labelStyles[0].firstLabelfontSize, labelStyles[0].firstLabelfontSizeTablet, labelStyles[0].firstLabelfontSizeMobile);
        const FirstLabelPaddingTop = this.getPreviewSize(this.props.deviceType, firstLabelPaddingT, firstLabelPaddingTTablet, firstLabelPaddingTMobile);
        const FirstLabelPaddingRight = this.getPreviewSize(this.props.deviceType, firstLabelPaddingR, firstLabelPaddingRTablet, firstLabelPaddingRMobile);
        const FirstLabelPaddingBottom = this.getPreviewSize(this.props.deviceType, firstLabelPaddingB, firstLabelPaddingBTablet, firstLabelPaddingBMobile);
        const FirstLabelPaddingLeft = this.getPreviewSize(this.props.deviceType, firstLabelPaddingL, firstLabelPaddingLTablet, firstLabelPaddingLMobile);
        const SecondLabelSize = this.getPreviewSize(this.props.deviceType, labelStyles[0].secondLabelfontSize, labelStyles[0].secondLabelfontSizeTablet, labelStyles[0].secondLabelfontSizeMobile);
        const SecondLabelPaddingTop = this.getPreviewSize(this.props.deviceType, secondLabelPaddingT, secondLabelPaddingTTablet, secondLabelPaddingTMobile);
        const SecondLabelPaddingRight = this.getPreviewSize(this.props.deviceType, secondLabelPaddingR, secondLabelPaddingRTablet, secondLabelPaddingRMobile);
        const SecondLabelPaddingBottom = this.getPreviewSize(this.props.deviceType, secondLabelPaddingB, secondLabelPaddingBTablet, secondLabelPaddingBMobile);
        const SecondLabelPaddingLeft = this.getPreviewSize(this.props.deviceType, secondLabelPaddingL, secondLabelPaddingLTablet, secondLabelPaddingLMobile);
        const ContentHeight = this.getPreviewSize(this.props.deviceType, contentStyles[0].contentHeight, contentStyles[0].contentHeightTablet, contentStyles[0].contentHeightMobile);
        const FirstContentSize = this.getPreviewSize(this.props.deviceType, firstContentStyles[0].firstContentfontSize, firstContentStyles[0].firstContentfontSizeTablet, firstContentStyles[0].firstContentfontSizeMobile);
        const FirstContentMarginTop = this.getPreviewSize(this.props.deviceType, firstContentMarginT, firstContentMarginTTablet, firstContentMarginTMobile);
        const FirstContentMarginRight = this.getPreviewSize(this.props.deviceType, firstContentMarginR, firstContentMarginRTablet, firstContentMarginRMobile);
        const FirstContentMarginBottom = this.getPreviewSize(this.props.deviceType, firstContentMarginB, firstContentMarginBTablet, firstContentMarginBMobile);
        const FirstContentMarginLeft = this.getPreviewSize(this.props.deviceType, firstContentMarginL, firstContentMarginLTablet, firstContentMarginLMobile);
        const ContentPaddingTop = this.getPreviewSize(this.props.deviceType, contentPaddingT, contentPaddingTTablet, contentPaddingTMobile);
        const ContentPaddingRight = this.getPreviewSize(this.props.deviceType, firstContentPaddingR, contentPaddingRTablet, contentPaddingRMobile);
        const ContentPaddingBottom = this.getPreviewSize(this.props.deviceType, contentPaddingB, contentPaddingBTablet, contentPaddingBMobile);
        const ContentPaddingLeft = this.getPreviewSize(this.props.deviceType, contentPaddingL, firstContentPaddingLTablet, contentPaddingLMobile);
        const SecondContentSize = this.getPreviewSize(this.props.deviceType, secondContentStyles[0].secondContentfontSize, secondContentStyles[0].secondContentfontSizeTablet, secondContentStyles[0].secondContentfontSizeMobile);

        let btnGradState1, btnGrad2State1, btnbgState1;

        if (undefined !== backgroundType && 'gradient' === backgroundType) {
            btnGradState1 = ('transparent' === switcherStyles[0].containerBackState1 || undefined === switcherStyles[0].containerBackState1 ? 'rgba(255,255,255,0)' : switcherStyles[0].containerBackState1);
            btnGrad2State1 = (undefined !== switcherStyles[0].gradientColorTwoState1 && undefined !== switcherStyles[0].gradientColorTwoState1 && '' !== switcherStyles[0].gradientColorTwoState1 ? switcherStyles[0].gradientColorTwoState1 : '#777');
            if ('radial' === switcherStyles[0].gradientTypeState1) {
                btnbgState1 = `radial-gradient(at ${switcherStyles[0].gradientPositionState1}, ${btnGradState1} ${switcherStyles[0].gradientLocationOneState1}%, ${btnGrad2State1} ${switcherStyles[0].gradientLocationTwoState1}%)`;
            } else if ('radial' !== switcherStyles[0].gradientTypeState1) {
                btnbgState1 = `linear-gradient(${switcherStyles[0].gradientAngleState1}deg, ${btnGradState1} ${switcherStyles[0].gradientLocationOneState1}%, ${btnGrad2State1} ${switcherStyles[0].gradientLocationTwoState1}%)`;
            }
        } else {
            btnbgState1 = switcherStyles[0].backgroundImageURLState1 ? `url('${switcherStyles[0].backgroundImageURLState1}')` : ''
        }

        const renderCss = (
            <style>
                {`
                    #premium-content-switcher-${block_id} .premium-content-switcher-toggle-switch-slider:before {
                        border-radius: ${ContainerBorderRadius}${switcherStyles[0].containerRadiusType} !important;
                        background-color: ${backgroundType === "solid" ? switcherStyles[0].containerBackState1 : "#6ec1e4"} !important;
                        background-image: ${btnbgState1} !important;
                        background-repeat: ${switcherStyles[0].backgroundRepeatState1} !important;
                        background-position: ${switcherStyles[0].backgroundPositionState1} !important;
                        background-size: ${switcherStyles[0].backgroundSizeState1} !important;
                        background-attachment: ${switcherStyles[0].fixedState1 ? "fixed" : "unset"} !important;
                        box-shadow: ${switcherStyles[0].containerShadowHorizontal}px ${switcherStyles[0].containerShadowVertical}px ${switcherStyles[0].containerShadowBlur}px ${switcherStyles[0].containerShadowColor} ${switcherStyles[0].containerShadowPosition};
                    }
                    #premium-content-switcher-${block_id} .premium-content-switcher-toggle-switch-slider {
                        border-radius: ${SwitcherBorderRadius}${switcherStyles[0].switchRadiusType} !important;
                        box-shadow: ${switcherStyles[0].switchShadowHorizontal}px ${switcherStyles[0].switchShadowVertical}px ${switcherStyles[0].switchShadowBlur}px ${switcherStyles[0].switchShadowColor} ${switcherStyles[0].switchShadowPosition};
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
        );

        const saveSwitcherStyles = (value) => {
            const newUpdate = switcherStyles.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({
                switcherStyles: newUpdate,
            });
        }

        const saveLabelStyles = (value) => {
            const newUpdate = labelStyles.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({
                labelStyles: newUpdate,
            });
        }

        const saveContentStyles = (value) => {
            const newUpdate = contentStyles.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({
                contentStyles: newUpdate,
            });
        }

        const saveFirstContentStyles = (value) => {
            const newUpdate = firstContentStyles.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({
                firstContentStyles: newUpdate,
            });
        }

        const saveSecondContentStyles = (value) => {
            const newUpdate = secondContentStyles.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({
                secondContentStyles: newUpdate,
            });
        }

        const mainClasses = classnames(className, "premium-content-switcher");
        return [
            isSelected && (
                <BlockControls>
                    <AlignmentToolbar
                        value={align}
                        onChange={(value) => {
                            setAttributes({ align: value })
                        }}
                    />
                </BlockControls>
            ),
            isSelected && (
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
                            value={switcherStyles[0].switchSize}
                            tabletValue={switcherStyles[0].switchSizeTablet}
                            mobileValue={switcherStyles[0].switchSizeMobile}
                            onChange={(value) => saveSwitcherStyles({ switchSize: value })}
                            onChangeTablet={(value) => saveSwitcherStyles({ switchSizeTablet: value })}
                            onChangeMobile={(value) => saveSwitcherStyles({ switchSizeMobile: value })}
                            showUnit={false}
                            defaultValue={15}
                            min={1}
                            max={40}
                        />
                        <ResponsiveRangeControl
                            label={__("Controller Border Radius", 'premium-block-for-gutenberg')}
                            value={switcherStyles[0].containerRadius}
                            tabletValue={switcherStyles[0].containerRadiusTablet}
                            mobileValue={switcherStyles[0].containerRadiusMobile}
                            onChange={(value) => saveSwitcherStyles({ containerRadius: value })}
                            onChangeTablet={(value) => saveSwitcherStyles({ containerRadiusTablet: value })}
                            onChangeMobile={(value) => saveSwitcherStyles({ containerRadiusMobile: value })}
                            onChangeUnit={(key) =>
                                saveSwitcherStyles({ containerRadiusType: key })
                            }
                            unit={switcherStyles[0].containerRadiusType}
                            showUnit={true}
                            defaultValue={50}
                            min={1}
                            max={100}
                        />
                        <ResponsiveRangeControl
                            label={__("Switcher Border Radius", 'premium-block-for-gutenberg')}
                            value={switcherStyles[0].switchRadius}
                            tabletValue={switcherStyles[0].switchRadiusTablet}
                            mobileValue={switcherStyles[0].switchRadiusMobile}
                            onChange={(value) => saveSwitcherStyles({ switchRadius: value })}
                            onChangeTablet={(value) => saveSwitcherStyles({ switchRadiusTablet: value })}
                            onChangeMobile={(value) => saveSwitcherStyles({ switchRadiusMobile: value })}
                            onChangeUnit={(key) =>
                                saveSwitcherStyles({ switchRadiusType: key })
                            }
                            unit={switcherStyles[0].switchRadiusType}
                            showUnit={true}
                            defaultValue={1.5}
                            min={1}
                            max={100}
                        />
                        {/* <h3>{__("Controller State 1 Color")}</h3> */}
                        <PremiumBackgroundControl
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
                        />
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
                            color={switcherStyles[0].containerShadowColor}
                            blur={switcherStyles[0].containerShadowBlur}
                            horizontal={switcherStyles[0].containerShadowHorizontal}
                            vertical={switcherStyles[0].containerShadowVertical}
                            position={switcherStyles[0].containerShadowPosition}
                            onChangeColor={newColor =>
                                saveSwitcherStyles({ containerShadowColor: newColor })
                            }
                            onChangeBlur={newBlur => saveSwitcherStyles({ containerShadowBlur: newBlur })}
                            onChangehHorizontal={newValue =>
                                saveSwitcherStyles({ containerShadowHorizontal: newValue })
                            }
                            onChangeVertical={newValue =>
                                saveSwitcherStyles({ containerShadowVertical: newValue })
                            }
                            onChangePosition={newValue =>
                                saveSwitcherStyles({ containerShadowPosition: newValue })
                            }
                        />
                        <PremiumShadow
                            label={__("Switcher Shadow", 'premium-blocks-for-gutenberg')}
                            boxShadow={true}
                            color={switcherStyles[0].switchShadowColor}
                            blur={switcherStyles[0].switchShadowBlur}
                            horizontal={switcherStyles[0].switchShadowHorizontal}
                            vertical={switcherStyles[0].switchShadowVertical}
                            position={switcherStyles[0].switchShadowPosition}
                            onChangeColor={newColor =>
                                saveSwitcherStyles({ switchShadowColor: newColor })
                            }
                            onChangeBlur={newBlur => saveSwitcherStyles({ switchShadowBlur: newBlur })}
                            onChangehHorizontal={newValue =>
                                saveSwitcherStyles({ switchShadowHorizontal: newValue })
                            }
                            onChangeVertical={newValue =>
                                saveSwitcherStyles({ switchShadowVertical: newValue })
                            }
                            onChangePosition={newValue =>
                                saveSwitcherStyles({ switchShadowPosition: newValue })
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
                            value={labelStyles[0].labelSpacing}
                            tabletValue={labelStyles[0].labelSpacingTablet}
                            mobileValue={labelStyles[0].labelSpacingMobile}
                            onChange={(value) => saveLabelStyles({ labelSpacing: value })}
                            onChangeTablet={(value) => saveLabelStyles({ labelSpacingTablet: value })}
                            onChangeMobile={(value) => saveLabelStyles({ labelSpacingMobile: value })}
                            showUnit={false}
                            defaultValue={15}
                            min={1}
                            max={100}
                        />
                        <h2 className="premium-content-switcher-labels-style">{__("First Label")}</h2>
                        <AdvancedPopColorControl
                            label={__("Text Color", 'premium-block-for-gutenberg')}
                            colorValue={labelStyles[0].firstLabelColor}
                            colorDefault={''}
                            onColorChange={newValue =>
                                saveLabelStyles({
                                    firstLabelColor: newValue
                                })
                            }
                        />
                        <PremiumTypo
                            components={["responsiveSize", "weight", "line", "style", "upper", "spacing", "family"]}
                            setAttributes={saveLabelStyles}
                            fontSizeType={{ value: labelStyles[0].firstLabelfontSizeType, label: __("firstLabelfontSizeType") }}
                            fontSize={labelStyles[0].firstLabelfontSize}
                            fontSizeMobile={labelStyles[0].firstLabelfontSizeMobile}
                            fontSizeTablet={labelStyles[0].firstLabelfontSizeTablet}
                            onChangeSize={newSize => saveLabelStyles({ firstLabelfontSize: newSize })}
                            onChangeTabletSize={newSize => saveLabelStyles({ firstLabelfontSizeTablet: newSize })}
                            onChangeMobileSize={newSize => saveLabelStyles({ firstLabelfontSizeMobile: newSize })}
                            weight={labelStyles[0].firstLabelWeight}
                            style={labelStyles[0].firstLabelStyle}
                            spacing={labelStyles[0].firstLabelLetter}
                            upper={labelStyles[0].firstLabelUpper}
                            line={labelStyles[0].firstLabelLine}
                            fontFamily={labelStyles[0].firstLabelFontFamily}
                            onChangeWeight={newWeight =>
                                saveLabelStyles({ firstLabelWeight: newWeight || 500 })
                            }
                            onChangeStyle={newStyle =>
                                saveLabelStyles({ firstLabelStyle: newStyle })
                            }
                            onChangeSpacing={newValue =>
                                saveLabelStyles({ firstLabelLetter: newValue })
                            }
                            onChangeUpper={check => saveLabelStyles({ firstLabelUpper: check })}
                            onChangeLine={newValue => saveLabelStyles({ firstLabelLine: newValue })}
                            onChangeFamily={(fontFamily) => saveLabelStyles({ firstLabelFontFamily: fontFamily })}
                        />
                        <PremiumShadow
                            label={__("Text Shadow", 'premium-blocks-for-gutenberg')}
                            color={labelStyles[0].firstLabelShadowColor}
                            blur={labelStyles[0].firstLabelShadowBlur}
                            horizontal={labelStyles[0].firstLabelShadowHorizontal}
                            vertical={labelStyles[0].firstLabelShadowVertical}
                            onChangeColor={newColor =>
                                saveLabelStyles({ firstLabelShadowColor: newColor })
                            }
                            onChangeBlur={newBlur => saveLabelStyles({ firstLabelShadowBlur: newBlur })}
                            onChangehHorizontal={newValue =>
                                saveLabelStyles({ firstLabelShadowHorizontal: newValue })
                            }
                            onChangeVertical={newValue =>
                                saveLabelStyles({ firstLabelShadowVertical: newValue })
                            }
                        />
                        <PremiumBorder
                            borderType={labelStyles[0].firstLabelborderType}
                            borderWidth={firstLabelBorderWidth}
                            top={firstLabelBorderTop}
                            right={firstLabelBorderRight}
                            bottom={firstLabelBorderBottom}
                            left={firstLabelBorderLeft}
                            borderColor={labelStyles[0].firstLabelborderColor}
                            borderRadius={labelStyles[0].firstLabelborderRadius}
                            onChangeType={newType => saveLabelStyles({ firstLabelborderType: newType })}
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
                                saveLabelStyles({ firstLabelborderColor: colorValue })
                            }
                            onChangeRadius={newrRadius =>
                                saveLabelStyles({ firstLabelborderRadius: newrRadius })
                            }
                        />
                        <PremiumShadow
                            label={__("Box Shadow", 'premium-blocks-for-gutenberg')}
                            boxShadow={true}
                            color={labelStyles[0].firstLabelBoxShadowColor}
                            blur={labelStyles[0].firstLabelBoxShadowBlur}
                            horizontal={labelStyles[0].firstLabelBoxShadowHorizontal}
                            vertical={labelStyles[0].firstLabelBoxShadowVertical}
                            position={labelStyles[0].firstLabelBoxShadowPosition}
                            onChangeColor={newColor =>
                                saveLabelStyles({ firstLabelBoxShadowColor: newColor })
                            }
                            onChangeBlur={newBlur => saveLabelStyles({ firstLabelBoxShadowBlur: newBlur })}
                            onChangehHorizontal={newValue =>
                                saveLabelStyles({ firstLabelBoxShadowHorizontal: newValue })
                            }
                            onChangeVertical={newValue =>
                                saveLabelStyles({ firstLabelBoxShadowVertical: newValue })
                            }
                            onChangePosition={newValue =>
                                saveLabelStyles({ firstLabelBoxShadowPosition: newValue })
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
                            selectedUnit={labelStyles[0].firstLabelPaddingType}
                            onChangePadSizeUnit={newvalue => saveLabelStyles({ firstLabelPaddingType: newvalue })}
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
                            colorValue={labelStyles[0].secondLabelColor}
                            colorDefault={''}
                            onColorChange={newValue =>
                                saveLabelStyles({
                                    secondLabelColor: newValue
                                })
                            }
                        />
                        <PremiumTypo
                            components={["responsiveSize", "weight", "line", "style", "upper", "spacing", "family"]}
                            setAttributes={saveLabelStyles}
                            fontSizeType={{ value: labelStyles[0].secondLabelfontSizeType, label: __("secondLabelfontSizeType") }}
                            fontSize={labelStyles[0].secondLabelfontSize}
                            fontSizeMobile={labelStyles[0].secondLabelfontSizeMobile}
                            fontSizeTablet={labelStyles[0].secondLabelfontSizeTablet}
                            onChangeSize={newSize => saveLabelStyles({ secondLabelfontSize: newSize })}
                            onChangeTabletSize={newSize => saveLabelStyles({ secondLabelfontSizeTablet: newSize })}
                            onChangeMobileSize={newSize => saveLabelStyles({ secondLabelfontSizeMobile: newSize })}
                            weight={labelStyles[0].secondLabelWeight}
                            style={labelStyles[0].secondLabelStyle}
                            spacing={labelStyles[0].secondLabelLetter}
                            upper={labelStyles[0].secondLabelUpper}
                            line={labelStyles[0].secondLabelLine}
                            fontFamily={labelStyles[0].secondLabelFontFamily}
                            onChangeWeight={newWeight =>
                                saveLabelStyles({ secondLabelWeight: newWeight || 500 })
                            }
                            onChangeStyle={newStyle =>
                                saveLabelStyles({ secondLabelStyle: newStyle })
                            }
                            onChangeSpacing={newValue =>
                                saveLabelStyles({ secondLabelLetter: newValue })
                            }
                            onChangeUpper={check => saveLabelStyles({ secondLabelUpper: check })}
                            onChangeLine={newValue => saveLabelStyles({ secondLabelLine: newValue })}
                            onChangeFamily={(fontFamily) => saveLabelStyles({ secondLabelFontFamily: fontFamily })}
                        />
                        <PremiumShadow
                            label={__("Text Shadow", 'premium-blocks-for-gutenberg')}
                            color={labelStyles[0].secondLabelShadowColor}
                            blur={labelStyles[0].secondLabelShadowBlur}
                            horizontal={labelStyles[0].secondLabelShadowHorizontal}
                            vertical={labelStyles[0].secondLabelShadowVertical}
                            onChangeColor={newColor =>
                                saveLabelStyles({ secondLabelShadowColor: newColor })
                            }
                            onChangeBlur={newBlur => saveLabelStyles({ secondLabelShadowBlur: newBlur })}
                            onChangehHorizontal={newValue =>
                                saveLabelStyles({ secondLabelShadowHorizontal: newValue })
                            }
                            onChangeVertical={newValue =>
                                saveLabelStyles({ secondLabelShadowVertical: newValue })
                            }
                        />
                        <PremiumBorder
                            borderType={labelStyles[0].secondLabelborderType}
                            borderWidth={secondLabelBorderWidth}
                            top={secondLabelBorderTop}
                            right={secondLabelBorderRight}
                            bottom={secondLabelBorderBottom}
                            left={secondLabelBorderLeft}
                            borderColor={labelStyles[0].secondLabelborderColor}
                            borderRadius={labelStyles[0].secondLabelborderRadius}
                            onChangeType={newType => saveLabelStyles({ secondLabelborderType: newType })}
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
                                saveLabelStyles({ secondLabelborderColor: colorValue })
                            }
                            onChangeRadius={newrRadius =>
                                saveLabelStyles({ secondLabelborderRadius: newrRadius })
                            }
                        />
                        <PremiumShadow
                            label={__("Box Shadow", 'premium-blocks-for-gutenberg')}
                            boxShadow={true}
                            color={labelStyles[0].secondLabelBoxShadowColor}
                            blur={labelStyles[0].secondLabelBoxShadowBlur}
                            horizontal={labelStyles[0].secondLabelBoxShadowHorizontal}
                            vertical={labelStyles[0].secondLabelBoxShadowVertical}
                            position={labelStyles[0].secondLabelBoxShadowPosition}
                            onChangeColor={newColor =>
                                saveLabelStyles({ secondLabelBoxShadowColor: newColor })
                            }
                            onChangeBlur={newBlur => saveLabelStyles({ secondLabelBoxShadowBlur: newBlur })}
                            onChangehHorizontal={newValue =>
                                saveLabelStyles({ secondLabelBoxShadowHorizontal: newValue })
                            }
                            onChangeVertical={newValue =>
                                saveLabelStyles({ secondLabelBoxShadowVertical: newValue })
                            }
                            onChangePosition={newValue =>
                                saveLabelStyles({ secondLabelBoxShadowPosition: newValue })
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
                            selectedUnit={labelStyles[0].secondLabelPaddingType}
                            onChangePadSizeUnit={newvalue => saveLabelStyles({ secondLabelPaddingType: newvalue })}
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
                            value={contentStyles[0].contentHeight}
                            tabletValue={contentStyles[0].contentHeightTablet}
                            mobileValue={contentStyles[0].contentHeightMobile}
                            onChange={(value) => saveContentStyles({ contentHeight: value })}
                            onChangeTablet={(value) => saveContentStyles({ contentHeightTablet: value })}
                            onChangeMobile={(value) => saveContentStyles({ contentHeightMobile: value })}
                            onChangeUnit={(key) =>
                                saveContentStyles({ contentHeightType: key })
                            }
                            unit={contentStyles[0].contentHeightType}
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
                                                colorValue={firstContentStyles[0].firstContentColor}
                                                colorDefault={''}
                                                onColorChange={newValue =>
                                                    saveFirstContentStyles({
                                                        firstContentColor: newValue
                                                    })
                                                }
                                            />
                                            <AdvancedPopColorControl
                                                label={__("Background Color", 'premium-block-for-gutenberg')}
                                                colorValue={firstContentStyles[0].firstContentBGColor}
                                                colorDefault={''}
                                                onColorChange={newValue =>
                                                    saveFirstContentStyles({
                                                        firstContentBGColor: newValue
                                                    })
                                                }
                                            />
                                            <PremiumTypo
                                                components={["responsiveSize", "weight", "line", "style", "upper", "spacing", "family"]}
                                                setAttributes={saveFirstContentStyles}
                                                fontSizeType={{ value: firstContentStyles[0].firstContentfontSizeType, label: __("firstContentfontSizeType") }}
                                                fontSize={firstContentStyles[0].firstContentfontSize}
                                                fontSizeMobile={firstContentStyles[0].firstContentfontSizeMobile}
                                                fontSizeTablet={firstContentStyles[0].firstContentfontSizeTablet}
                                                onChangeSize={newSize => saveFirstContentStyles({ firstContentfontSize: newSize })}
                                                onChangeTabletSize={newSize => saveFirstContentStyles({ firstContentfontSizeTablet: newSize })}
                                                onChangeMobileSize={newSize => saveFirstContentStyles({ firstContentfontSizeMobile: newSize })}
                                                weight={firstContentStyles[0].firstContentWeight}
                                                style={firstContentStyles[0].firstContentStyle}
                                                spacing={firstContentStyles[0].firstContentLetter}
                                                upper={firstContentStyles[0].firstContentUpper}
                                                line={firstContentStyles[0].firstContentLine}
                                                fontFamily={firstContentStyles[0].firstContentFontFamily}
                                                onChangeWeight={newWeight =>
                                                    saveFirstContentStyles({ firstContentWeight: newWeight || 500 })
                                                }
                                                onChangeStyle={newStyle =>
                                                    saveFirstContentStyles({ firstContentStyle: newStyle })
                                                }
                                                onChangeSpacing={newValue =>
                                                    saveFirstContentStyles({ firstContentLetter: newValue })
                                                }
                                                onChangeUpper={check => saveFirstContentStyles({ firstContentUpper: check })}
                                                onChangeLine={newValue => saveFirstContentStyles({ firstContentLine: newValue })}
                                                onChangeFamily={(fontFamily) => saveFirstContentStyles({ firstContentFontFamily: fontFamily })}
                                            />
                                            <PremiumShadow
                                                label={__("Text Shadow", 'premium-blocks-for-gutenberg')}
                                                color={firstContentStyles[0].firstContentShadowColor}
                                                blur={firstContentStyles[0].firstContentShadowBlur}
                                                horizontal={firstContentStyles[0].firstContentShadowHorizontal}
                                                vertical={firstContentStyles[0].firstContentShadowVertical}
                                                onChangeColor={newColor =>
                                                    saveFirstContentStyles({ firstContentShadowColor: newColor })
                                                }
                                                onChangeBlur={newBlur => saveFirstContentStyles({ firstContentShadowBlur: newBlur })}
                                                onChangehHorizontal={newValue =>
                                                    saveFirstContentStyles({ firstContentShadowHorizontal: newValue })
                                                }
                                                onChangeVertical={newValue =>
                                                    saveFirstContentStyles({ firstContentShadowVertical: newValue })
                                                }
                                            />
                                            <PremiumBorder
                                                borderType={firstContentStyles[0].firstContentborderType}
                                                borderWidth={firstContentBorderWidth}
                                                top={firstContentBorderTop}
                                                right={firstContentBorderRight}
                                                bottom={firstContentBorderBottom}
                                                left={firstContentBorderLeft}
                                                borderColor={firstContentStyles[0].firstContentborderColor}
                                                borderRadius={firstContentStyles[0].firstContentborderRadius}
                                                onChangeType={newType => saveFirstContentStyles({ firstContentborderType: newType })}
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
                                                    saveFirstContentStyles({ firstContentborderColor: colorValue })
                                                }
                                                onChangeRadius={newrRadius =>
                                                    saveFirstContentStyles({ firstContentborderRadius: newrRadius })
                                                }
                                            />
                                            <PremiumShadow
                                                label={__("Box Shadow", 'premium-blocks-for-gutenberg')}
                                                boxShadow={true}
                                                color={firstContentStyles[0].firstContentBoxShadowColor}
                                                blur={firstContentStyles[0].firstContentBoxShadowBlur}
                                                horizontal={firstContentStyles[0].firstContentBoxShadowHorizontal}
                                                vertical={firstContentStyles[0].firstContentBoxShadowVertical}
                                                position={firstContentStyles[0].firstContentBoxShadowPosition}
                                                onChangeColor={newColor =>
                                                    saveFirstContentStyles({ firstContentBoxShadowColor: newColor })
                                                }
                                                onChangeBlur={newBlur => saveFirstContentStyles({ firstContentBoxShadowBlur: newBlur })}
                                                onChangehHorizontal={newValue =>
                                                    saveFirstContentStyles({ firstContentBoxShadowHorizontal: newValue })
                                                }
                                                onChangeVertical={newValue =>
                                                    saveFirstContentStyles({ firstContentBoxShadowVertical: newValue })
                                                }
                                                onChangePosition={newValue =>
                                                    saveFirstContentStyles({ firstContentBoxShadowPosition: newValue })
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
                                                colorValue={secondContentStyles[0].secondContentColor}
                                                colorDefault={''}
                                                onColorChange={newValue =>
                                                    saveSecondContentStyles({
                                                        secondContentColor: newValue
                                                    })
                                                }
                                            />
                                            <AdvancedPopColorControl
                                                label={__("Background Color", 'premium-block-for-gutenberg')}
                                                colorValue={secondContentStyles[0].secondContentBGColor}
                                                colorDefault={''}
                                                onColorChange={newValue =>
                                                    saveSecondContentStyles({
                                                        secondContentBGColor: newValue
                                                    })
                                                }
                                            />
                                            <PremiumTypo
                                                components={["responsiveSize", "weight", "line", "style", "upper", "spacing", "family"]}
                                                setAttributes={saveSecondContentStyles}
                                                fontSizeType={{ value: secondContentStyles[0].secondContentfontSizeType, label: __("secondContentfontSizeType") }}
                                                fontSize={secondContentStyles[0].secondContentfontSize}
                                                fontSizeMobile={secondContentStyles[0].secondContentfontSizeMobile}
                                                fontSizeTablet={secondContentStyles[0].secondContentfontSizeTablet}
                                                onChangeSize={newSize => saveSecondContentStyles({ secondContentfontSize: newSize })}
                                                onChangeTabletSize={newSize => saveSecondContentStyles({ secondContentfontSizeTablet: newSize })}
                                                onChangeMobileSize={newSize => saveSecondContentStyles({ secondContentfontSizeMobile: newSize })}
                                                weight={secondContentStyles[0].secondContentWeight}
                                                style={secondContentStyles[0].secondContentStyle}
                                                spacing={secondContentStyles[0].secondContentLetter}
                                                upper={secondContentStyles[0].secondContentUpper}
                                                line={secondContentStyles[0].secondContentLine}
                                                fontFamily={secondContentStyles[0].secondContentFontFamily}
                                                onChangeWeight={newWeight =>
                                                    saveSecondContentStyles({ secondContentWeight: newWeight || 500 })
                                                }
                                                onChangeStyle={newStyle =>
                                                    saveSecondContentStyles({ secondContentStyle: newStyle })
                                                }
                                                onChangeSpacing={newValue =>
                                                    saveSecondContentStyles({ secondContentLetter: newValue })
                                                }
                                                onChangeUpper={check => saveSecondContentStyles({ secondContentUpper: check })}
                                                onChangeLine={newValue => saveSecondContentStyles({ secondContentLine: newValue })}
                                                onChangeFamily={(fontFamily) => saveSecondContentStyles({ secondContentFontFamily: fontFamily })}
                                            />
                                            <PremiumShadow
                                                label={__("Text Shadow", 'premium-blocks-for-gutenberg')}
                                                color={secondContentStyles[0].secondContentShadowColor}
                                                blur={secondContentStyles[0].secondContentShadowBlur}
                                                horizontal={secondContentStyles[0].secondContentShadowHorizontal}
                                                vertical={secondContentStyles[0].secondContentShadowVertical}
                                                onChangeColor={newColor =>
                                                    saveSecondContentStyles({ secondContentShadowColor: newColor })
                                                }
                                                onChangeBlur={newBlur => saveSecondContentStyles({ secondContentShadowBlur: newBlur })}
                                                onChangehHorizontal={newValue =>
                                                    saveSecondContentStyles({ secondContentShadowHorizontal: newValue })
                                                }
                                                onChangeVertical={newValue =>
                                                    saveSecondContentStyles({ secondContentShadowVertical: newValue })
                                                }
                                            />
                                            <PremiumBorder
                                                borderType={secondContentStyles[0].secondContentborderType}
                                                borderWidth={secondContentBorderWidth}
                                                top={secondContentBorderTop}
                                                right={secondContentBorderRight}
                                                bottom={secondContentBorderBottom}
                                                left={secondContentBorderLeft}
                                                borderColor={secondContentStyles[0].secondContentborderColor}
                                                borderRadius={secondContentStyles[0].secondContentborderRadius}
                                                onChangeType={newType => saveSecondContentStyles({ secondContentborderType: newType })}
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
                                                    saveSecondContentStyles({ secondContentborderColor: colorValue })
                                                }
                                                onChangeRadius={newrRadius =>
                                                    saveSecondContentStyles({ secondContentborderRadius: newrRadius })
                                                }
                                            />
                                            <PremiumShadow
                                                label={__("Box Shadow", 'premium-blocks-for-gutenberg')}
                                                boxShadow={true}
                                                color={secondContentStyles[0].secondContentBoxShadowColor}
                                                blur={secondContentStyles[0].secondContentBoxShadowBlur}
                                                horizontal={secondContentStyles[0].secondContentBoxShadowHorizontal}
                                                vertical={secondContentStyles[0].secondContentBoxShadowVertical}
                                                position={secondContentStyles[0].secondContentBoxShadowPosition}
                                                onChangeColor={newColor =>
                                                    saveSecondContentStyles({ secondContentBoxShadowColor: newColor })
                                                }
                                                onChangeBlur={newBlur => saveSecondContentStyles({ secondContentBoxShadowBlur: newBlur })}
                                                onChangehHorizontal={newValue =>
                                                    saveSecondContentStyles({ secondContentBoxShadowHorizontal: newValue })
                                                }
                                                onChangeVertical={newValue =>
                                                    saveSecondContentStyles({ secondContentBoxShadowVertical: newValue })
                                                }
                                                onChangePosition={newValue =>
                                                    saveSecondContentStyles({ secondContentBoxShadowPosition: newValue })
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
                            onChangeMarSizeUnit={newvalue => saveFirstContentStyles({ firstContentMarginType: newvalue })}
                            selectedUnit={firstContentStyles[0].firstContentMarginType}
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
                            paddingRight={firstContentPaddingR}
                            paddingBottom={contentPaddingB}
                            paddingLeft={contentPaddingL}
                            paddingTopTablet={contentPaddingTTablet}
                            paddingRightTablet={contentPaddingRTablet}
                            paddingBottomTablet={contentPaddingBTablet}
                            paddingLeftTablet={firstContentPaddingLTablet}
                            paddingTopMobile={contentPaddingTMobile}
                            paddingRightMobile={contentPaddingRMobile}
                            paddingBottomMobile={contentPaddingBMobile}
                            paddingLeftMobile={contentPaddingLMobile}
                            showUnits={true}
                            selectedUnit={firstContentStyles[0].firstContentPaddingType}
                            onChangePadSizeUnit={newvalue => saveFirstContentStyles({ firstContentPaddingType: newvalue })}
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
                                        setAttributes({ firstContentPaddingR: newValue })
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
                                        setAttributes({ firstContentPaddingLTablet: newValue })
                                    } else {
                                        setAttributes({ contentPaddingLMobile: newValue })
                                    }
                                }
                            }
                        />
                    </PanelBody>
                </InspectorControls>
            ),
            renderCss,
            <div
                id={`premium-content-switcher-${block_id}`}
                className={classnames(
                    className,
                    `premium-block-${this.props.clientId}`
                )}
                style={{
                    textAlign: align,
                }}
            >
                <div className={`premium-content-switcher`}
                    style={{
                        textAlign: align,
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
                                    color: labelStyles[0].firstLabelColor,
                                    fontSize: FirstLabelSize + labelStyles[0].firstLabelfontSizeType,
                                    letterSpacing: labelStyles[0].firstLabelLetter + "px",
                                    textTransform: labelStyles[0].firstLabelUpper ? "uppercase" : "none",
                                    fontStyle: labelStyles[0].firstLabelStyle,
                                    fontWeight: labelStyles[0].firstLabelWeight,
                                    lineHeight: (labelStyles[0].firstLabelLine ? labelStyles[0].firstLabelLine : "") + "px",
                                    fontFamily: labelStyles[0].firstLabelFontFamily,
                                    borderStyle: labelStyles[0].firstLabelborderType,
                                    borderWidth: firstLabelBorderUpdated
                                        ? `${firstLabelBorderTop}px ${firstLabelBorderRight}px ${firstLabelBorderBottom}px ${firstLabelBorderLeft}px`
                                        : firstLabelBorderWidth + "px",
                                    borderRadius: labelStyles[0].firstLabelborderRadius + "px",
                                    borderColor: labelStyles[0].firstLabelborderColor,
                                    paddingTop: FirstLabelPaddingTop + labelStyles[0].firstLabelPaddingType,
                                    paddingBottom: FirstLabelPaddingBottom + labelStyles[0].firstLabelPaddingType,
                                    paddingLeft: FirstLabelPaddingLeft + labelStyles[0].firstLabelPaddingType,
                                    paddingRight: FirstLabelPaddingRight + labelStyles[0].firstLabelPaddingType,
                                    textShadow: `${labelStyles[0].firstLabelShadowHorizontal}px ${labelStyles[0].firstLabelShadowVertical}px ${labelStyles[0].firstLabelShadowBlur}px ${labelStyles[0].firstLabelShadowColor}`,
                                    boxShadow: `${labelStyles[0].firstLabelBoxShadowHorizontal}px ${labelStyles[0].firstLabelBoxShadowVertical}px ${labelStyles[0].firstLabelBoxShadowBlur}px ${labelStyles[0].firstLabelBoxShadowColor} ${labelStyles[0].firstLabelBoxShadowPosition}`,
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
                                <input type="checkbox" className={`premium-content-switcher-toggle-switch-input ${this.props.clientId}`} />
                                <span className="premium-content-switcher-toggle-switch-slider round"
                                    style={{
                                        borderRadius: switchRadius + "px"
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
                                    color: labelStyles[0].secondLabelColor,
                                    fontSize: SecondLabelSize + labelStyles[0].secondLabelfontSizeType,
                                    letterSpacing: labelStyles[0].secondLabelLetter + "px",
                                    textTransform: labelStyles[0].secondLabelUpper ? "uppercase" : "none",
                                    fontStyle: labelStyles[0].secondLabelStyle,
                                    fontWeight: labelStyles[0].secondLabelWeight,
                                    lineHeight: (labelStyles[0].secondLabelLine ? labelStyles[0].secondLabelLine : "") + "px",
                                    fontFamily: labelStyles[0].secondLabelFontFamily,
                                    borderStyle: labelStyles[0].secondLabelborderType,
                                    borderWidth: secondLabelBorderUpdated
                                        ? `${secondLabelBorderTop}px ${secondLabelBorderRight}px ${secondLabelBorderBottom}px ${secondLabelBorderLeft}px`
                                        : secondLabelBorderWidth + "px",
                                    borderRadius: labelStyles[0].secondLabelborderRadius + "px",
                                    borderColor: labelStyles[0].secondLabelborderColor,
                                    paddingTop: SecondLabelPaddingTop + labelStyles[0].secondLabelPaddingType,
                                    paddingBottom: SecondLabelPaddingBottom + labelStyles[0].secondLabelPaddingType,
                                    paddingLeft: SecondLabelPaddingLeft + labelStyles[0].secondLabelPaddingType,
                                    paddingRight: SecondLabelPaddingRight + labelStyles[0].secondLabelPaddingType,
                                    textShadow: `${labelStyles[0].secondLabelShadowHorizontal}px ${labelStyles[0].secondLabelShadowVertical}px ${labelStyles[0].secondLabelShadowBlur}px ${labelStyles[0].secondLabelShadowColor}`,
                                    boxShadow: `${labelStyles[0].secondLabelBoxShadowHorizontal}px ${labelStyles[0].secondLabelBoxShadowVertical}px ${labelStyles[0].secondLabelBoxShadowBlur}px ${labelStyles[0].secondLabelBoxShadowColor} ${labelStyles[0].secondLabelBoxShadowPosition}`,
                                }}
                            />
                        </div>
                        )}
                    </div>
                    <div
                        className={`premium-content-switcher-list ${effect == 'slide' ? `slide-${slide}` : ""}`}
                        style={{
                            marginTop: FirstContentMarginTop + firstContentStyles[0].firstContentMarginType,
                            marginBottom: FirstContentMarginBottom + firstContentStyles[0].firstContentMarginType,
                            marginLeft: FirstContentMarginLeft + firstContentStyles[0].firstContentMarginType,
                            marginRight: FirstContentMarginRight + firstContentStyles[0].firstContentMarginType,
                        }}
                    >
                        <ul className="premium-content-switcher-two-content">
                            <li className={`premium-content-switcher-is-visible premium-content-switcher-first-list ${this.props.clientId}`}
                                style={{
                                    background: firstContentStyles[0].firstContentBGColor,
                                    borderStyle: firstContentStyles[0].firstContentborderType,
                                    borderWidth: firstContentBorderUpdated
                                        ? `${firstContentBorderTop}px ${firstContentBorderRight}px ${firstContentBorderBottom}px ${firstContentBorderLeft}px`
                                        : firstContentBorderWidth + "px",
                                    borderRadius: firstContentStyles[0].firstContentborderRadius + "px",
                                    borderColor: firstContentStyles[0].firstContentborderColor,
                                    minHeight: ContentHeight + contentStyles[0].contentHeightType,
                                    paddingTop: ContentPaddingTop + firstContentStyles[0].firstContentPaddingType,
                                    paddingBottom: ContentPaddingBottom + firstContentStyles[0].firstContentPaddingType,
                                    paddingLeft: ContentPaddingLeft + firstContentStyles[0].firstContentPaddingType,
                                    paddingRight: ContentPaddingRight + firstContentStyles[0].firstContentPaddingType,
                                    boxShadow: `${firstContentStyles[0].firstContentBoxShadowHorizontal}px ${firstContentStyles[0].firstContentBoxShadowVertical}px ${firstContentStyles[0].firstContentBoxShadowBlur}px ${firstContentStyles[0].firstContentBoxShadowColor} ${firstContentStyles[0].firstContentBoxShadowPosition}`,
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
                                        color: firstContentStyles[0].firstContentColor,
                                        fontSize: FirstContentSize + firstContentStyles[0].firstContentfontSizeType,
                                        letterSpacing: firstContentStyles[0].firstContentLetter + "px",
                                        textTransform: firstContentStyles[0].firstContentUpper ? "uppercase" : "none",
                                        fontStyle: firstContentStyles[0].firstContentStyle,
                                        fontWeight: firstContentStyles[0].firstContentWeight,
                                        lineHeight: (firstContentStyles[0].firstContentLine ? firstContentStyles[0].firstContentLine : "") + "px",
                                        fontFamily: firstContentStyles[0].firstContentFontFamily,
                                        textShadow: `${firstContentStyles[0].firstContentShadowHorizontal}px ${firstContentStyles[0].firstContentShadowVertical}px ${firstContentStyles[0].firstContentShadowBlur}px ${firstContentStyles[0].firstContentShadowColor}`,
                                    }}
                                />
                            </li>
                            <li className={`premium-content-switcher-is-hidden premium-content-switcher-second-list ${this.props.clientId}`}
                                style={{
                                    background: secondContentStyles[0].secondContentBGColor,
                                    borderStyle: secondContentStyles[0].secondContentborderType,
                                    borderWidth: secondContentBorderUpdated
                                        ? `${secondContentBorderTop}px ${secondContentBorderRight}px ${secondContentBorderBottom}px ${secondContentBorderLeft}px`
                                        : secondContentBorderWidth + "px",
                                    borderRadius: secondContentStyles[0].secondContentborderRadius + "px",
                                    borderColor: secondContentStyles[0].secondContentborderColor,
                                    minHeight: ContentHeight + contentStyles[0].contentHeightType,
                                    paddingTop: ContentPaddingTop + secondContentStyles[0].secondContentPaddingType,
                                    paddingBottom: ContentPaddingBottom + secondContentStyles[0].secondContentPaddingType,
                                    paddingLeft: ContentPaddingLeft + secondContentStyles[0].secondContentPaddingType,
                                    paddingRight: ContentPaddingRight + secondContentStyles[0].secondContentPaddingType,
                                    boxShadow: `${secondContentStyles[0].secondContentBoxShadowHorizontal}px ${secondContentStyles[0].secondContentBoxShadowVertical}px ${secondContentStyles[0].secondContentBoxShadowBlur}px ${secondContentStyles[0].secondContentBoxShadowColor} ${secondContentStyles[0].secondContentBoxShadowPosition}`,
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
                                        color: secondContentStyles[0].secondContentColor,
                                        fontSize: SecondContentSize + secondContentStyles[0].secondContentfontSizeType,
                                        letterSpacing: secondContentStyles[0].secondContentLetter + "px",
                                        textTransform: secondContentStyles[0].secondContentUpper ? "uppercase" : "none",
                                        fontStyle: secondContentStyles[0].secondContentStyle,
                                        fontWeight: secondContentStyles[0].secondContentWeight,
                                        lineHeight: (secondContentStyles[0].secondContentLine ? secondContentStyles[0].secondContentLine : "") + "px",
                                        fontFamily: secondContentStyles[0].secondContentFontFamily,
                                        textShadow: `${secondContentStyles[0].secondContentShadowHorizontal}px ${secondContentStyles[0].secondContentShadowVertical}px ${secondContentStyles[0].secondContentShadowBlur}px ${secondContentStyles[0].secondContentShadowColor}`,
                                    }}
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
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