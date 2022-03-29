import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import iconsList from "../../components/premium-icons-list";
import AdvancedPopColorControl from '../../components/Color Control/ColorComponent';
import PremiumBorder from "../../components/premium-border"
import PremiumResponsivePadding from '../../components/Premium-Responsive-Padding';
import ResponsiveSingleRangeControl from "../../components/RangeControl/single-range-control";
import RadioComponent from '../../components/radio-control';
import classnames from "classnames";
const { __ } = wp.i18n;
const { withSelect } = wp.data
import PremiumTypo from "../../components/premium-typo";
import PremiumMediaUpload from "../../components/premium-media-upload"
import PremiumResponsiveMargin from '../../components/Premium-Responsive-Margin';
import PremiumBoxShadow from "../../components/premium-box-shadow"
import ResponsiveRangeControl from "../../components/RangeControl/responsive-range-control";
import PremiumBackgroundControl from '../../components/Premium-Background-Control'
const { useState, Fragment, useEffect, useRef } = wp.element;
const { InnerBlocks } = wp.blockEditor;

const {
    PanelBody,
    SelectControl,
    ToggleControl,
    TextControl,
    TabPanel
} = wp.components;

const { InspectorControls, URLInput } = wp.blockEditor;

function getPreviewSize(device, desktopSize, tabletSize, mobileSize) {
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

const edit = props => {
    const closeButton = useRef(null)
    const triggerRef = useRef(null)
    const modalRef = useRef(null)
    const wrapRef = useRef(null)
    const { isSelected, setAttributes, className } = props;
    const {
        block_id,
        contentStyles,
        triggerSettings,
        triggerStyles,
        triggerBorderTop,
        triggerBorderRight,
        triggerBorderBottom,
        triggerBorderLeft,
        triggerBorderTopH,
        triggerBorderRightH,
        triggerBorderBottomH,
        triggerBorderLeftH,
        triggerPaddingT,
        triggerPaddingR,
        triggerPaddingB,
        triggerPaddingL,
        triggerPaddingTTablet,
        triggerPaddingRTablet,
        triggerPaddingBTablet,
        triggerPaddingLTablet,
        triggerPaddingTMobile,
        triggerPaddingRMobile,
        triggerPaddingBMobile,
        triggerPaddingLMobile,
        headerStyles,
        headerBorderTop,
        headerBorderRight,
        headerBorderBottom,
        headerBorderLeft,
        upperStyles,
        upperBorderTop,
        upperBorderRight,
        upperBorderBottom,
        upperBorderLeft,
        upperPaddingT,
        upperPaddingR,
        upperPaddingB,
        upperPaddingL,
        upperPaddingTTablet,
        upperPaddingRTablet,
        upperPaddingBTablet,
        upperPaddingLTablet,
        upperPaddingTMobile,
        upperPaddingRMobile,
        upperPaddingBMobile,
        upperPaddingLMobile,
        lowerStyles,
        lowerBorderTop,
        lowerBorderRight,
        lowerBorderBottom,
        lowerBorderLeft,
        lowerPaddingT,
        lowerPaddingR,
        lowerPaddingB,
        lowerPaddingL,
        lowerPaddingTTablet,
        lowerPaddingRTablet,
        lowerPaddingBTablet,
        lowerPaddingLTablet,
        lowerPaddingTMobile,
        lowerPaddingRMobile,
        lowerPaddingBMobile,
        lowerPaddingLMobile,
        modalStyles,
        backgroundType,
        modalBorderTop,
        modalBorderRight,
        modalBorderBottom,
        modalBorderLeft,
        modalMarginT,
        modalMarginR,
        modalMarginB,
        modalMarginL,
        modalMarginTTablet,
        modalMarginRTablet,
        modalMarginBTablet,
        modalMarginLTablet,
        modalMarginTMobile,
        modalMarginRMobile,
        modalMarginBMobile,
        modalMarginLMobile,
        modalPaddingT,
        modalPaddingR,
        modalPaddingB,
        modalPaddingL,
        modalPaddingTTablet,
        modalPaddingRTablet,
        modalPaddingBTablet,
        modalPaddingLTablet,
        modalPaddingTMobile,
        modalPaddingRMobile,
        modalPaddingBMobile,
        modalPaddingLMobile
    } = props.attributes;

    useEffect(() => {
        setAttributes({ block_id: props.clientId })
    }, [])

    useEffect(() => {
        closeButton.current.addEventListener('click', () => {
            modalRef.current.style.display = "none"
        })
        wrapRef.current.addEventListener('click', () => {
            modalRef.current.style.display = "none"
        })
        triggerRef.current.addEventListener("click", () => {
            modalRef.current.style.display = "flex"
        })
    }, [props.attributes])

    const saveContentStyle = (value) => {
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
    const saveTriggerSettings = (value) => {
        const newUpdate = triggerSettings.map((item, index) => {
            if (0 === index) {
                item = { ...item, ...value };
            }
            return item;
        });
        setAttributes({
            triggerSettings: newUpdate,
        });
    }
    const saveTriggerStyles = (value) => {
        const newUpdate = triggerStyles.map((item, index) => {
            if (0 === index) {
                item = { ...item, ...value };
            }
            return item;
        });
        setAttributes({
            triggerStyles: newUpdate,
        });
    }
    const saveHeaderStyles = (value) => {
        const newUpdate = headerStyles.map((item, index) => {
            if (0 === index) {
                item = { ...item, ...value };
            }
            return item;
        });
        setAttributes({
            headerStyles: newUpdate,
        });
    }
    const saveUpperStyles = (value) => {
        const newUpdate = upperStyles.map((item, index) => {
            if (0 === index) {
                item = { ...item, ...value };
            }
            return item;
        });
        setAttributes({
            upperStyles: newUpdate,
        });
    }
    const saveLowerStyles = (value) => {
        const newUpdate = lowerStyles.map((item, index) => {
            if (0 === index) {
                item = { ...item, ...value };
            }
            return item;
        });
        setAttributes({
            lowerStyles: newUpdate,
        });
    }
    const saveModalStyles = (value) => {
        const newUpdate = modalStyles.map((item, index) => {
            if (0 === index) {
                item = { ...item, ...value };
            }
            return item;
        });
        setAttributes({
            modalStyles: newUpdate,
        });
    }
    const renderCss = (
        <style>
            {`
            #premium-modal-box-${block_id} .premium-modal-trigger-container button:hover {
              background-color: ${triggerStyles[0].triggerHoverBack} !important;
              border-style: ${triggerStyles[0].borderTypeH} !important;
              border-top-width: ${triggerBorderTopH}px !important;
              border-right-width: ${triggerBorderRightH}px !important;
              border-bottom-width: ${triggerBorderBottomH}px !important;
              border-left-width: ${triggerBorderLeftH}px !important;
              border-color: ${triggerStyles[0].borderColorH} !important;
              border-radius: ${triggerStyles[0].borderRadiusH}px !important;
            }
            #premium-modal-box-${block_id} .premium-modal-trigger-container button:hover i{
                color:${triggerStyles[0].iconHoverColor} !important;
            }
            #premium-modal-box-${block_id} .premium-modal-trigger-container button:hover span{
                color:${triggerStyles[0].hoverColor} !important;
            }
        `}
        </style>
    );
    const headerIconSize = getPreviewSize(props.deviceType, contentStyles[0].iconSize, contentStyles[0].iconSizeTablet, contentStyles[0].iconSizeMobile);
    const triggerFontSize = getPreviewSize(props.deviceType, triggerStyles[0].triggerSize, triggerStyles[0].triggerSizeTablet, triggerStyles[0].triggerSizeMobile);
    const triggerPaddingTop = getPreviewSize(props.deviceType, triggerPaddingT, triggerPaddingTTablet, triggerPaddingTMobile);
    const triggerPaddingRight = getPreviewSize(props.deviceType, triggerPaddingR, triggerPaddingRTablet, triggerPaddingRMobile);
    const triggerPaddingBottom = getPreviewSize(props.deviceType, triggerPaddingB, triggerPaddingBTablet, triggerPaddingBMobile);
    const triggerPaddingLeft = getPreviewSize(props.deviceType, triggerPaddingL, triggerPaddingLTablet, triggerPaddingLMobile);
    const headerFontSize = getPreviewSize(props.deviceType, headerStyles[0].headerSize, headerStyles[0].headerSizeTablet, headerStyles[0].headerSizeMobile);
    const upperPaddingTop = getPreviewSize(props.deviceType, upperPaddingT, upperPaddingTTablet, upperPaddingTMobile);
    const upperPaddingRight = getPreviewSize(props.deviceType, upperPaddingR, upperPaddingRTablet, upperPaddingRMobile);
    const upperPaddingBottom = getPreviewSize(props.deviceType, upperPaddingB, upperPaddingBTablet, upperPaddingBMobile);
    const upperPaddingLeft = getPreviewSize(props.deviceType, upperPaddingL, upperPaddingLTablet, upperPaddingLMobile);
    const lowerFontSize = getPreviewSize(props.deviceType, lowerStyles[0].lowerSize, lowerStyles[0].lowerSizeTablet, lowerStyles[0].lowerSizeMobile);
    const lowerPaddingTop = getPreviewSize(props.deviceType, lowerPaddingT, lowerPaddingTTablet, lowerPaddingTMobile);
    const lowerPaddingRight = getPreviewSize(props.deviceType, lowerPaddingR, lowerPaddingRTablet, lowerPaddingRMobile);
    const lowerPaddingBottom = getPreviewSize(props.deviceType, lowerPaddingB, lowerPaddingBTablet, lowerPaddingBMobile);
    const lowerPaddingLeft = getPreviewSize(props.deviceType, lowerPaddingL, lowerPaddingLTablet, lowerPaddingLMobile);
    const modalWidth = getPreviewSize(props.deviceType, modalStyles[0].modalWidth, modalStyles[0].modalWidthTablet, modalStyles[0].modalWidthMobile);
    const modalMaxHeight = getPreviewSize(props.deviceType, modalStyles[0].modalHeight, modalStyles[0].modalHeightTablet, modalStyles[0].modalHeightMobile);
    const modalFontSize = getPreviewSize(props.deviceType, modalStyles[0].modalSize, modalStyles[0].modalSizeTablet, modalStyles[0].modalSizeMobile);
    const modalPaddingTop = getPreviewSize(props.deviceType, modalPaddingT, modalPaddingTTablet, modalPaddingTMobile);
    const modalPaddingRight = getPreviewSize(props.deviceType, modalPaddingR, modalPaddingRTablet, modalPaddingRMobile);
    const modalPaddingBottom = getPreviewSize(props.deviceType, modalPaddingB, modalPaddingBTablet, modalPaddingBMobile);
    const modalPaddingLeft = getPreviewSize(props.deviceType, modalPaddingL, modalPaddingLTablet, modalPaddingLMobile);
    const modalMarginTop = getPreviewSize(props.deviceType, modalMarginT, modalMarginTTablet, modalMarginTMobile);
    const modalMarginRight = getPreviewSize(props.deviceType, modalMarginR, modalMarginRTablet, modalMarginRMobile);
    const modalMarginBottom = getPreviewSize(props.deviceType, modalMarginB, modalMarginBTablet, modalMarginBMobile);
    const modalMarginLeft = getPreviewSize(props.deviceType, modalMarginL, modalMarginLTablet, modalMarginLMobile);

    let btnGrad, btnGrad2, btnbg;
    if (undefined !== backgroundType && 'gradient' === backgroundType) {
        btnGrad = ('transparent' === modalStyles[0].containerBack || undefined === modalStyles[0].containerBack ? 'rgba(255,255,255,0)' : modalStyles[0].containerBack);
        btnGrad2 = (undefined !== modalStyles[0].gradientColorTwo && undefined !== modalStyles[0].gradientColorTwo && '' !== modalStyles[0].gradientColorTwo ? modalStyles[0].gradientColorTwo : '#777');
        if ('radial' === modalStyles[0].gradientType) {
            btnbg = `radial-gradient(at ${modalStyles[0].gradientPosition}, ${btnGrad} ${modalStyles[0].gradientLocationOne}%, ${btnGrad2} ${modalStyles[0].gradientLocationTwo}%)`;
        } else if ('radial' !== modalStyles[0].gradientType) {
            btnbg = `linear-gradient(${modalStyles[0].gradientAngle}deg, ${btnGrad} ${modalStyles[0].gradientLocationOne}%, ${btnGrad2} ${modalStyles[0].gradientLocationTwo}%)`;
        }
    } else {
        btnbg = modalStyles[0].backgroundImageURL ? `url('${modalStyles[0].backgroundImageURL}')` : ''
    }
    return [
        isSelected && (
            <InspectorControls key={"inspector"}>
                <PanelBody
                    title={__("Content", 'premium-blocks-for-gutenberg')}
                    className="premium-panel-body"
                    initialOpen={true}
                >
                    <ToggleControl
                        label={__('Header', 'premium-blocks-for-gutenberg')}
                        checked={contentStyles[0].showHeader}
                        onChange={(value) => saveContentStyle({ showHeader: value })}
                    />
                    {contentStyles[0].showHeader && (
                        <Fragment>
                            <SelectControl
                                label={__('Icon Type', 'premium-blocks-for-gutenberg')}
                                options={[
                                    { label: __("None", "premium-blocks-for-gutenberg"), value: 'none' },
                                    { label: __("Icon", "premium-blocks-for-gutenberg"), value: 'icon' },
                                    { label: __('Custom Image', 'premium-blocks-for-gutenberg'), value: 'image' },
                                    { label: __('Lottie Animations', 'premium-blocks-for-gutenberg'), value: 'lottie' }
                                ]}
                                value={contentStyles[0].iconType}
                                onChange={(value) => saveContentStyle({ iconType: value })}
                            />
                            {contentStyles[0].iconType === "icon" && (
                                <Fragment>
                                    <p className="premium-editor-paragraph">{__("Select Icon", 'premium-blocks-for-gutenberg')}</p>
                                    <FontIconPicker
                                        icons={iconsList}
                                        onChange={newIcon => saveContentStyle({ contentIcon: newIcon })}
                                        value={contentStyles[0].contentIcon}
                                        isMulti={false}
                                        appendTo="body"
                                        noSelectedPlaceholder={__("Select Icon", 'premium-blocks-for-gutenberg')}
                                    />
                                </Fragment>
                            )}
                            { contentStyles[0].iconType === "image" && (
                                <PremiumMediaUpload
                                    type="image"
                                    imageID={contentStyles[0].contentImgID}
                                    imageURL={contentStyles[0].contentImgURL}
                                    onSelectMedia={(media) => {
                                        saveContentStyle({
                                            contentImgID: media.id,
                                            contentImgURL: media.url,
                                        });
                                    }}
                                    onRemoveImage={() =>
                                        saveContentStyle({
                                            contentImgID: "",
                                            contentImgURL: "",
                                        })
                                    }
                                />)
                            }
                            {contentStyles[0].iconType === "lottie" && (
                                <Fragment>
                                    <TextControl
                                        label={__("Animation JSON URL", "premium-blocks-for-gutenberg")}
                                        value={contentStyles[0].lottieURL}
                                        onChange={(value) => saveContentStyle({ lottieURL: value })}
                                    />
                                    <ToggleControl
                                        label={__("Loop", 'premium-blocks-for-gutenberg')}
                                        checked={contentStyles[0].loopLottie}
                                        onChange={(value) => saveContentStyle({ loopLottie: value })}
                                    />
                                    <ToggleControl
                                        label={__("Reverse", 'premium-blocks-for-gutenberg')}
                                        checked={contentStyles[0].reverseLottie}
                                        onChange={(value) => saveContentStyle({ reverseLottie: value })}
                                    />
                                </Fragment>
                            )}

                            {contentStyles[0].iconType !== "none" && (
                                <ResponsiveRangeControl
                                    label={__('Icon Size', 'premium-blocks-for-gutenberg')}
                                    value={contentStyles[0].iconSize}
                                    onChange={(value) => saveContentStyle({ iconSize: value })}
                                    tabletValue={contentStyles[0].iconSizeTablet}
                                    onChangeTablet={(value) => saveContentStyle({ iconSizeTablet: value })}
                                    mobileValue={contentStyles[0].iconSizeMobile}
                                    onChangeMobile={(value) => saveContentStyle({ iconSizeMobile: value })}
                                    min={0}
                                    max={100}
                                    step={1}
                                    onChangeUnit={newValue => saveContentStyle({ iconSizeUnit: newValue })}
                                    unit={contentStyles[0].iconSizeUnit}
                                    showUnit={true}
                                    units={['px', 'em']}
                                    defaultValue={0}
                                />)
                            }
                            <TextControl
                                label={__("Title", 'premium-blocks-for-gutenberg')}
                                value={contentStyles[0].titleText}
                                onChange={(value) => saveContentStyle({ titleText: value })}
                            />
                        </Fragment>
                    )}
                    <hr />
                    <SelectControl
                        label={__(`Content to Show`, 'premium-blocks-for-gutenberg')}
                        value={modalStyles[0].contentType}
                        onChange={(value) => saveModalStyles({ contentType: value })}
                        options={
                            [
                                {
                                    value: "text",
                                    label: __("Text", 'premium-blocks-for-gutenberg')
                                },
                                {
                                    value: "block",
                                    label: __("Gutenberg Block", 'premium-blocks-for-gutenberg')
                                }
                            ]
                        }
                    />
                    {modalStyles[0].contentType == "text" && (
                        <TextControl
                            label={__("Text", "premium-blocks-for-gutenberg")}
                            value={modalStyles[0].contentText}
                            onChange={(value) => saveModalStyles({ contentText: value })}
                        />
                    )}
                    {contentStyles[0].showHeader && <ToggleControl
                        label={__("Upper Close Button", 'premium-blocks-for-gutenberg')}
                        checked={contentStyles[0].showUpperClose}
                        onChange={(value) => saveContentStyle({ showUpperClose: value })}
                    />}
                    <ToggleControl
                        label={__("Lower Close Button", 'premium-blocks-for-gutenberg')}
                        checked={contentStyles[0].showLowerClose}
                        onChange={(value) => saveContentStyle({ showLowerClose: value })}
                    />
                    {contentStyles[0].showLowerClose && (
                        <TextControl
                            label={__("Text", 'premium-blocks-for-gutenberg')}
                            value={contentStyles[0].lowerCloseText}
                            onChange={(value) => saveContentStyle({ lowerCloseText: value })}
                        />)
                    }
                    <SelectControl
                        label={__("Animation")}
                        value={contentStyles[0].animationType}
                        onChange={(value) => saveContentStyle({ animationType: value })}
                        options={[
                            { value: "none", label: __("None", 'premium-blocks-for-gutenberg') },
                            { value: "fadeInDown", label: __("Fade In Down", 'premium-blocks-for-gutenberg') },
                            { value: "fadeInUp", label: __("Fade In Up", 'premium-blocks-for-gutenberg') },
                            { value: "fadeIn", label: __("Fade In", 'premium-blocks-for-gutenberg') },
                            { value: "fadeInLeft", label: __("Fade In Left", 'premium-blocks-for-gutenberg') },
                            { value: "fadeInRight", label: __("Fade In Right", 'premium-blocks-for-gutenberg') },
                            { value: "zoomInDown", label: __("Zoom In Down", 'premium-blocks-for-gutenberg') },
                            { value: "zoomInUp", label: __("Zoom In Up", 'premium-blocks-for-gutenberg') },
                            { value: "zoomIn", label: __("Zoom In", 'premium-blocks-for-gutenberg') },
                            { value: "zoomInLeft", label: __("Zoom In Left", 'premium-blocks-for-gutenberg') },
                            { value: "zoomInRight", label: __("Zoom In Right", 'premium-blocks-for-gutenberg') },
                            { value: "bounceInDown", label: __("Bouncing In Down", 'premium-blocks-for-gutenberg') },
                            { value: "bounceInUp", label: __("Bouncing In Up", 'premium-blocks-for-gutenberg') },
                            { value: "bounceIn", label: __("Bouncing In", 'premium-blocks-for-gutenberg') },
                            { value: "bounceInLeft", label: __("Bouncing In Left", 'premium-blocks-for-gutenberg') },
                            { value: "bounceInRight", label: __("Bouncing In Right", 'premium-blocks-for-gutenberg') },
                            { value: "slideInUp", label: __("Slide In Up", 'premium-blocks-for-gutenberg') },
                            { value: "slideInLeft", label: __("Slide In Left", 'premium-blocks-for-gutenberg') },
                            { value: "slideInRight", label: __("Slide In Right", 'premium-blocks-for-gutenberg') },
                            { value: "slideInDown", label: __("Slide In Down", 'premium-blocks-for-gutenberg') },
                            { value: "rotateInUpLeft", label: __("Rotating Up Left", 'premium-blocks-for-gutenberg') },
                            { value: "rotateInUpRight", label: __("Rotating Up Right", 'premium-blocks-for-gutenberg') },
                            { value: "rotateIn", label: __("Rotating In", 'premium-blocks-for-gutenberg') },
                            { value: "rotateInDownLeft", label: __("Rotating In Left", 'premium-blocks-for-gutenberg') },
                            { value: "rotateInDownRight", label: __("Rotating In Right", 'premium-blocks-for-gutenberg') },
                            { value: "bounce", label: __("Bounce", 'premium-blocks-for-gutenberg') },
                            { value: "flash", label: __("Flash", 'premium-blocks-for-gutenberg') },
                            { value: "pulse", label: __("Pulse", 'premium-blocks-for-gutenberg') },
                            { value: "rubberBand", label: __("Rubber Band", 'premium-blocks-for-gutenberg') },
                            { value: "headShake", label: __("Head Shake", 'premium-blocks-for-gutenberg') },
                            { value: "swing", label: __("Swing", 'premium-blocks-for-gutenberg') },
                            { value: "tada", label: __("Tada", 'premium-blocks-for-gutenberg') },
                            { value: "wobble", label: __("Wobble", 'premium-blocks-for-gutenberg') },
                            { value: "jello", label: __("Jolle", 'premium-blocks-for-gutenberg') },
                            { value: "lightSpeedIn", label: __("Light Speed", 'premium-blocks-for-gutenberg') },
                            { value: "rollIn", label: __("Roll In", 'premium-blocks-for-gutenberg') },

                        ]}
                    />
                    <SelectControl
                        label={__("Animation Duration", 'premium-blocks-for-gutenberg')}
                        value={contentStyles[0].animationSpeed}
                        options={[{
                            label: __("Fast", 'premium-blocks-for-gutenberg'),
                            value: "fast"
                        }, {
                            label: __("Normal", 'premium-blocks-for-gutenberg'),
                            value: "normal"
                        }, {
                            label: __("Slow", 'premium-blocks-for-gutenberg'),
                            value: 'slow'
                        }]}
                        onChange={(value) => saveContentStyle({ animationSpeed: value })}
                    />
                    <ResponsiveSingleRangeControl
                        label={__("Animation Delay", "premium-blocks-for-gutenberg")}
                        value={contentStyles[0].animationDelay}
                        onChange={(value) => saveContentStyle({ animationDelay: value })}
                        step={.1}
                    />
                </PanelBody>
                <PanelBody
                    title={__("Trigger Option", 'premium-blocks-for-gutenberg')}
                    className="premium-panel-body"
                    initialOpen={false}
                >
                    <SelectControl
                        label={__("Trigger", "premium-blocks-for-gutenberg")}
                        value={triggerSettings[0].triggerType}
                        options={
                            [
                                { label: __("Button", 'premium-blocks-for-gutenberg'), value: 'button' },
                                { label: __("Image", 'premium-blocks-for-gutenberg'), value: 'image' },
                                { label: __("Text", 'premium-blocks-for-gutenberg'), value: 'text' },
                                { label: __("Lottie Animation", 'premium-blocks-for-gutenberg'), value: 'lottie' },
                                { label: __("On Page Load", 'premium-blocks-for-gutenberg'), value: 'load' }
                            ]
                        }
                        onChange={(value) => saveTriggerSettings({ triggerType: value })}
                    />
                    {triggerSettings[0].triggerType === "button" && (
                        <Fragment>
                            <TextControl
                                label={__("Button text", 'premium-blocks-for-gutenberg')}
                                value={triggerSettings[0].btnText}
                                onChange={(newValue) => saveTriggerSettings({ btnText: newValue })}
                            />
                            <ToggleControl
                                label={__("Icon", 'premium-blocks-for-gutenberg')}
                                checked={triggerSettings[0].showIcon}
                                onChange={(newValue) => saveTriggerSettings({ showIcon: newValue })}
                            />
                            {
                                triggerSettings[0].showIcon && (
                                    <Fragment>
                                        <FontIconPicker
                                            icons={iconsList}
                                            onChange={newIcon => saveTriggerSettings({ icon: newIcon })}
                                            value={triggerSettings[0].icon}
                                            isMulti={false}
                                            appendTo="body"
                                            noSelectedPlaceholder={__("Select Icon", 'premium-blocks-for-gutenberg')}
                                        />
                                        <SelectControl
                                            label={__('Icon Position', 'premium-blocks-for-gutenberg')}
                                            value={triggerSettings[0].iconPosition}
                                            options={
                                                [{
                                                    label: __("Before", "premium-blocks-for-gutenberg"),
                                                    value: 'before'
                                                },
                                                {
                                                    label: __("After", "premium-blocks-for-gutenberg"),
                                                    value: 'after'
                                                }
                                                ]}
                                            onChange={(newValue) => saveTriggerSettings({ iconPosition: newValue })}
                                        />
                                        <ResponsiveSingleRangeControl
                                            label={__("Icon Size", 'premium-blocks-for-gutenberg')}
                                            value={triggerSettings[0].iconSize}
                                            min="1"
                                            max="100"
                                            onChange={newValue => saveTriggerSettings({ iconSize: newValue })}
                                            defaultValue={0}
                                            showUnit={false}
                                        />
                                        <ResponsiveSingleRangeControl
                                            label={__("Icon Spacing", 'premium-blocks-for-gutenberg')}
                                            value={triggerSettings[0].iconSpacing}
                                            min="1"
                                            max="100"
                                            onChange={newValue => saveTriggerSettings({ iconSpacing: newValue })}
                                            defaultValue={0}
                                            showUnit={false}
                                        />
                                    </Fragment>
                                )
                            }
                            <SelectControl
                                label={__("Button Size", "premium-blocks-for-gutenberg")}
                                value={triggerSettings[0].btnSize}
                                options={[
                                    { label: __("Small", "premium-blocks-for-gutenberg"), value: 'sm' },
                                    { label: __("Medium", "premium-blocks-for-gutenberg"), value: 'md' },
                                    { label: __("Large", "premium-blocks-for-gutenberg"), value: 'lg' },
                                    { label: __("Block", "premium-blocks-for-gutenberg"), value: 'block' }
                                ]}
                                onChange={newValue => saveTriggerSettings({ btnSize: newValue })}
                            />

                        </Fragment>
                    )}
                    {triggerSettings[0].triggerType === "image" && (
                        <Fragment>
                            <PremiumMediaUpload
                                type="image"
                                imageID={triggerSettings[0].triggerImgID}
                                imageURL={triggerSettings[0].triggerImgURL}
                                onSelectMedia={(media) => {
                                    saveTriggerSettings({
                                        triggerImgID: media.id,
                                        triggerImgURL: media.url,
                                    });
                                }}
                                onRemoveImage={() =>
                                    saveTriggerSettings({
                                        triggerImgID: "",
                                        triggerImgURL: "",
                                    })
                                }
                            />

                        </Fragment>
                    )}
                    {triggerSettings[0].triggerType === "text" && (
                        <TextControl
                            label={__("Text", 'premium-blocks-for-gutenberg')}
                            value={triggerSettings[0].triggerText}
                            onChange={(value) => saveTriggerSettings({ triggerText: value })}
                        />
                    )}
                    {triggerSettings[0].triggerType === "lottie" && (
                        <Fragment>
                            <TextControl
                                label={__('Animation JSON URL', 'premium-blocks-for-gutenberg')}
                                value={triggerSettings[0].lottieTriggerURL}
                                onChange={value => saveTriggerSettings({ lottieTriggerURL: value })}
                            />
                            <ToggleControl
                                label={__("Loop", 'premium-blocks-for-gutenberg')}
                                checked={triggerSettings[0].triggerLoopLottie}
                                onChange={(value) => saveTriggerSettings({ triggerLoopLottie: value })}
                            />
                            <ToggleControl
                                label={__("Reverse", 'premium-blocks-for-gutenberg')}
                                checked={triggerSettings[0].triggerReverseLottie}
                                onChange={(value) => saveTriggerSettings({ triggerReverseLottie: value })}
                            />
                            <ToggleControl
                                label={__("Only Play on Hover", 'premium-blocks-for-gutenberg')}
                                checked={triggerSettings[0].triggerPlayLottie}
                                onChange={(value) => saveTriggerSettings({ triggerPlayLottie: value })}
                            />

                        </Fragment>
                    )}
                    {(triggerSettings[0].triggerType === "image" || triggerSettings[0].triggerType === "lottie") && (<ResponsiveRangeControl
                        label={__('Size', 'premium-blocks-for-gutenberg')}
                        value={triggerSettings[0].imageWidth}
                        onChange={(value) => saveTriggerSettings({ imageWidth: value })}
                        tabletValue={triggerSettings[0].imageWidthTablet}
                        onChangeTablet={(value) => saveTriggerSettings({ imageWidthTablet: value })}
                        mobileValue={triggerSettings[0].imageWidthMobile}
                        onChangeMobile={(value) => saveTriggerSettings({ imageWidthMobile: value })}
                        min={0}
                        max={800}
                        step={1}
                        showUnit={false}
                        defaultValue={0}
                    />)}

                    {triggerSettings[0].triggerType === "load" && (
                        <Fragment>
                            <p>{__('the Button will be removed in the preview mode ', "premium-blocks-for-gutenberg")}</p>
                            <ResponsiveSingleRangeControl
                                label={__("Delay in Popup Display (Sec)", 'premium-blocks-for-gutenberg')}
                                value={triggerSettings[0].delayTime}
                                min="1"
                                max="100"
                                onChange={newValue => saveTriggerSettings({ delayTime: newValue })}
                                defaultValue={0}
                                showUnit={false}
                            />
                        </Fragment>
                    )}
                    {triggerSettings[0].triggerType !== "load" && (
                        <RadioComponent
                            choices={["right", "center", "left"]}
                            value={triggerSettings[0].align}
                            onChange={newValue => saveTriggerSettings({ align: newValue })}
                            label={__("Align", 'premium-blocks-for-gutenberg')}
                        />
                    )}
                </PanelBody>
                <PanelBody
                    title={__("Triger", 'premium-blocks-for-gutenberg')}
                    className="premium-panel-body"
                    initialOpen={false}
                >
                    <AdvancedPopColorControl
                        label={__("Color", 'premium-blocks-for-gutenberg')}
                        colorValue={triggerStyles[0].color}
                        colorDefault={''}
                        onColorChange={(newValue) => saveTriggerStyles({ color: newValue })}
                    />
                    <AdvancedPopColorControl
                        label={__("Hover Color", 'premium-blocks-for-gutenberg')}
                        colorValue={triggerStyles[0].hoverColor}
                        colorDefault={''}
                        onColorChange={(newValue) => saveTriggerStyles({ hoverColor: newValue })}
                    />
                    <AdvancedPopColorControl
                        label={__("Icon Color", 'premium-blocks-for-gutenberg')}
                        colorValue={triggerStyles[0].iconColor}
                        colorDefault={''}
                        onColorChange={(newValue) => saveTriggerStyles({ iconColor: newValue })}
                    />
                    <AdvancedPopColorControl
                        label={__("Icon Hover Color", 'premium-blocks-for-gutenberg')}
                        colorValue={triggerStyles[0].iconHoverColor}
                        colorDefault={''}
                        onColorChange={(newValue) => saveTriggerStyles({ iconHoverColor: newValue })}
                    />
                    <PremiumTypo
                        components={["responsiveSize", "weight", "spacing", "style", "upper", "family"]}
                        setAttributes={saveTriggerStyles}
                        fontSizeType={{
                            value: triggerStyles[0].triggerSizeUnit,
                            label: __("triggerSizeUnit", 'premium-blocks-for-gutenberg'),
                        }}
                        fontSize={triggerStyles[0].triggerSize}
                        fontSizeMobile={triggerStyles[0].triggerSizeMobile}
                        fontSizeTablet={triggerStyles[0].triggerSizeTablet}
                        onChangeSize={newSize => saveTriggerStyles({ triggerSize: newSize })}
                        onChangeTabletSize={newSize => saveTriggerStyles({ triggerSizeTablet: newSize })}
                        onChangeMobileSize={newSize => saveTriggerStyles({ triggerSizeMobile: newSize })}
                        fontFamily={triggerStyles[0].triggerFamily}
                        weight={triggerStyles[0].triggerWeight}
                        style={triggerStyles[0].triggerStyle}
                        spacing={triggerStyles[0].triggerSpacing}
                        upper={triggerStyles[0].triggerUpper}
                        onChangeWeight={newWeight => saveTriggerStyles({ triggerWeight: newWeight })}
                        onChangeStyle={newStyle => saveTriggerStyles({ triggerStyle: newStyle })}
                        onChangeSpacing={newValue => saveTriggerStyles({ triggerSpacing: newValue })}
                        onChangeFamily={(fontFamily) => saveTriggerStyles({ triggerFamily: fontFamily })}
                        onChangeUpper={check => saveTriggerStyles({ triggerUpper: check })}
                    />
                    <TabPanel
                        className="premium-color-tabpanel"
                        activeClass="active-tab"
                        tabs={[
                            {
                                name: "normal",
                                title: "Normal",
                                className: "premium-tab",
                            },
                            {
                                name: "hover",
                                title: "Hover",
                                className: "premium-tab",
                            },
                        ]}
                    >
                        {(tab) => {
                            let tabout;
                            if ("normal" === tab.name) {
                                tabout = (
                                    <Fragment>
                                        <AdvancedPopColorControl
                                            label={__("Background Color", 'premium-blocks-for-gutenberg')}
                                            colorValue={triggerStyles[0].triggerBack}
                                            colorDefault={''}
                                            onColorChange={newValue => saveTriggerStyles({ triggerBack: newValue || "transparent", })}
                                        />
                                        <PremiumBorder
                                            borderType={triggerStyles[0].borderType}
                                            top={triggerBorderTop}
                                            right={triggerBorderRight}
                                            bottom={triggerBorderBottom}
                                            left={triggerBorderLeft}
                                            borderColor={triggerStyles[0].borderColor}
                                            borderRadius={triggerStyles[0].borderRadius}
                                            onChangeType={(newType) => saveTriggerStyles({ borderType: newType })}
                                            onChangeWidth={({ top, right, bottom, left }) =>
                                                setAttributes({
                                                    triggerBorderTop: top,
                                                    triggerBorderRight: right,
                                                    triggerBorderBottom: bottom,
                                                    triggerBorderLeft: left,
                                                })
                                            }
                                            onChangeColor={(colorValue) => saveTriggerStyles({ borderColor: colorValue })}
                                            onChangeRadius={(newRadius) => saveTriggerStyles({ borderRadius: newRadius })}
                                        />
                                    </Fragment>
                                );
                            }
                            if ("hover" === tab.name) {
                                tabout = (
                                    <Fragment>
                                        <AdvancedPopColorControl
                                            label={__("Background Hover Color", 'premium-blocks-for-gutenberg')}
                                            colorValue={triggerStyles[0].triggerHoverBack}
                                            colorDefault={''}
                                            onColorChange={newValue => saveTriggerStyles({ triggerHoverBack: newValue || "transparent", })}
                                        />
                                        <PremiumBorder
                                            borderType={triggerStyles[0].borderTypeH}
                                            borderWidth={triggerStyles[0].borderWidthH}
                                            top={triggerBorderTopH}
                                            right={triggerBorderRightH}
                                            bottom={triggerBorderBottomH}
                                            left={triggerBorderLeftH}
                                            borderColor={triggerStyles[0].borderColorH}
                                            borderRadius={triggerStyles[0].borderRadiusH}
                                            onChangeType={(newType) => saveTriggerStyles({ borderTypeH: newType })}
                                            onChangeWidth={({ top, right, bottom, left }) =>
                                                setAttributes({
                                                    triggerBorderTopH: top,
                                                    triggerBorderRightH: right,
                                                    triggerBorderBottomH: bottom,
                                                    triggerBorderLeftH: left,
                                                })
                                            }
                                            onChangeColor={(colorValue) => saveTriggerStyles({ borderColorH: colorValue })}
                                            onChangeRadius={(newRadius) => saveTriggerStyles({ borderRadiusH: newRadius })}
                                        />
                                    </Fragment>
                                );
                            }
                            return (
                                <div>
                                    {tabout}
                                    <hr />
                                </div>
                            );
                        }}
                    </TabPanel>
                    <PremiumResponsivePadding
                        paddingT={triggerPaddingT}
                        paddingR={triggerPaddingR}
                        paddingB={triggerPaddingB}
                        paddingL={triggerPaddingL}
                        paddingTTablet={triggerPaddingTTablet}
                        paddingRTablet={triggerPaddingRTablet}
                        paddingBTablet={triggerPaddingBTablet}
                        paddingLTablet={triggerPaddingLTablet}
                        paddingTMobile={triggerPaddingTMobile}
                        paddingRMobile={triggerPaddingRMobile}
                        paddingBMobile={triggerPaddingBMobile}
                        paddingLMobile={triggerPaddingLMobile}
                        onChangePaddingTop={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ triggerPaddingT: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ triggerPaddingTTablet: newValue })
                                } else {
                                    setAttributes({ triggerPaddingTMobile: newValue })
                                }
                            }
                        }
                        onChangePaddingRight={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ triggerPaddingR: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ triggerPaddingRTablet: newValue })
                                } else {
                                    setAttributes({ triggerPaddingRMobile: newValue })
                                }
                            }
                        }
                        onChangePaddingBottom={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ triggerPaddingB: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ triggerPaddingBTablet: newValue })
                                } else {
                                    setAttributes({ triggerPaddingBMobile: newValue })
                                }
                            }
                        }
                        onChangePaddingLeft={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ triggerPaddingL: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ triggerPaddingLTablet: newValue })
                                } else {
                                    setAttributes({ triggerPaddingLMobile: newValue })
                                }
                            }
                        }
                    />
                    <PremiumBoxShadow
                        inner={true}
                        color={triggerStyles[0].triggerShadowColor}
                        blur={triggerStyles[0].triggerShadowBlur}
                        horizontal={triggerStyles[0].triggerShadowHorizontal}
                        vertical={triggerStyles[0].triggerShadowVertical}
                        position={triggerStyles[0].triggerShadowPosition}
                        onChangeColor={newColor => saveTriggerStyles({ triggerShadowColor: newColor })}
                        onChangeBlur={newBlur => saveTriggerStyles({ triggerShadowBlur: newBlur })}
                        onChangehHorizontal={newValue => saveTriggerStyles({ triggerShadowHorizontal: newValue })}
                        onChangeVertical={newValue => saveTriggerStyles({ triggerShadowVertical: newValue })}
                        onChangePosition={newValue => saveTriggerStyles({ triggerShadowPosition: newValue })}
                    />
                </PanelBody>
                {contentStyles[0].showHeader && <PanelBody
                    title={__("Header", 'premium-blocks-for-gutenberg')}
                    className="premium-panel-body"
                    initialOpen={false}
                >
                    <AdvancedPopColorControl
                        label={__("Color", 'premium-blocks-for-gutenberg')}
                        colorValue={headerStyles[0].color}
                        colorDefault={''}
                        onColorChange={(newValue) => saveHeaderStyles({ color: newValue })}
                    />
                    <AdvancedPopColorControl
                        label={__("Background Color", 'premium-blocks-for-gutenberg')}
                        colorValue={headerStyles[0].backColor}
                        colorDefault={''}
                        onColorChange={(newValue) => saveHeaderStyles({ backColor: newValue })}
                    />
                    <PremiumTypo
                        components={["responsiveSize", "weight", "spacing", "style", "upper", "family"]}
                        setAttributes={saveHeaderStyles}
                        fontSizeType={{
                            value: headerStyles[0].headerSizeUnit,
                            label: __("headerSizeUnit", 'premium-blocks-for-gutenberg'),
                        }}
                        fontSize={headerStyles[0].headerSize}
                        fontSizeMobile={headerStyles[0].headerSizeMobile}
                        fontSizeTablet={headerStyles[0].headerSizeTablet}
                        onChangeSize={newSize => saveHeaderStyles({ headerSize: newSize })}
                        onChangeTabletSize={newSize => saveHeaderStyles({ headerSizeTablet: newSize })}
                        onChangeMobileSize={newSize => saveHeaderStyles({ headerSizeMobile: newSize })}
                        fontFamily={headerStyles[0].headerFamily}
                        weight={headerStyles[0].headerWeight}
                        style={headerStyles[0].headerStyle}
                        spacing={headerStyles[0].headerSpacing}
                        upper={headerStyles[0].headerUpper}
                        onChangeWeight={newWeight => saveHeaderStyles({ headerWeight: newWeight })}
                        onChangeStyle={newStyle => saveHeaderStyles({ headerStyle: newStyle })}
                        onChangeSpacing={newValue => saveHeaderStyles({ headerSpacing: newValue })}
                        onChangeFamily={(fontFamily) => saveHeaderStyles({ headerFamily: fontFamily })}
                        onChangeUpper={check => saveHeaderStyles({ headerUpper: check })}
                    />
                    <PremiumBorder
                        borderType={headerStyles[0].borderType}
                        top={headerBorderTop}
                        right={headerBorderRight}
                        bottom={headerBorderBottom}
                        left={headerBorderLeft}
                        borderColor={headerStyles[0].borderColor}
                        borderRadius={headerStyles[0].borderRadius}
                        onChangeType={(newType) => saveHeaderStyles({ borderType: newType })}
                        onChangeWidth={({ top, right, bottom, left }) =>
                            setAttributes({
                                headerBorderTop: top,
                                headerBorderRight: right,
                                headerBorderBottom: bottom,
                                headerBorderLeft: left,
                            })
                        }
                        onChangeColor={(colorValue) => saveHeaderStyles({ borderColor: colorValue })}
                        onChangeRadius={(newRadius) => saveHeaderStyles({ borderRadius: newRadius })}
                    />
                </PanelBody>}
                { contentStyles[0].showUpperClose && contentStyles[0].showHeader && <PanelBody
                    title={__("Upper Close Button", 'premium-blocks-for-gutenberg')}
                    className="premium-panel-body"
                    initialOpen={false}
                >
                    <ResponsiveSingleRangeControl
                        label={__("Width", 'premium-blocks-for-gutenberg')}
                        value={upperStyles[0].iconWidth}
                        onChange={newValue => saveUpperStyles({ iconWidth: newValue })}
                        units={['px', '%', 'em']}
                        defaultValue={0}
                        onChangeUnit={newValue =>
                            saveUpperStyles({ iconWidthUnit: newValue })
                        }
                        showUnit={true}
                        unit={upperStyles[0].iconWidthUnit}
                    />
                    <AdvancedPopColorControl
                        label={__("Color", 'premium-blocks-for-gutenberg')}
                        colorValue={upperStyles[0].color}
                        colorDefault={''}
                        onColorChange={newValue => saveUpperStyles({ color: newValue || "transparent", })}
                    />
                    <AdvancedPopColorControl
                        label={__(`Background Color`)}
                        colorValue={upperStyles[0].backColor}
                        onColorChange={newvalue => saveUpperStyles({ backColor: newvalue })}
                        colorDefault={``}
                    />
                    <PremiumBorder
                        borderType={upperStyles[0].borderType}
                        top={upperBorderTop}
                        right={upperBorderRight}
                        bottom={upperBorderBottom}
                        left={upperBorderLeft}
                        borderColor={upperStyles[0].borderColor}
                        borderRadius={upperStyles[0].borderRadius}
                        onChangeType={(newType) => saveUpperStyles({ borderType: newType })}
                        onChangeWidth={({ top, right, bottom, left }) =>
                            setAttributes({
                                upperBorderTop: top,
                                upperBorderRight: right,
                                upperBorderBottom: bottom,
                                upperBorderLeft: left,
                            })
                        }
                        onChangeColor={(colorValue) => saveUpperStyles({ borderColor: colorValue })}
                        onChangeRadius={(newRadius) => saveUpperStyles({ borderRadius: newRadius })}
                    />
                    <PremiumResponsivePadding
                        paddingT={upperPaddingT}
                        paddingR={upperPaddingR}
                        paddingB={upperPaddingB}
                        paddingL={upperPaddingL}
                        paddingTTablet={upperPaddingTTablet}
                        paddingRTablet={upperPaddingRTablet}
                        paddingBTablet={upperPaddingBTablet}
                        paddingLTablet={upperPaddingLTablet}
                        paddingTMobile={upperPaddingTMobile}
                        paddingRMobile={upperPaddingRMobile}
                        paddingBMobile={upperPaddingBMobile}
                        paddingLMobile={upperPaddingLMobile}
                        onChangePaddingTop={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ upperPaddingT: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ upperPaddingTTablet: newValue })
                                } else {
                                    setAttributes({ upperPaddingTMobile: newValue })
                                }
                            }
                        }
                        onChangePaddingRight={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ upperPaddingR: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ upperPaddingRTablet: newValue })
                                } else {
                                    setAttributes({ upperPaddingRMobile: newValue })
                                }
                            }
                        }
                        onChangePaddingBottom={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ upperPaddingB: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ upperPaddingBTablet: newValue })
                                } else {
                                    setAttributes({ upperPaddingBMobile: newValue })
                                }
                            }
                        }
                        onChangePaddingLeft={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ upperPaddingL: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ upperPaddingLTablet: newValue })
                                } else {
                                    setAttributes({ upperPaddingLMobile: newValue })
                                }
                            }
                        }
                    />
                </PanelBody>}
                { contentStyles[0].showLowerClose && <PanelBody
                    title={__("Lower Close Button", 'premium-blocks-for-gutenberg')}
                    className="premium-panel-body"
                    initialOpen={false}
                >
                    <PremiumTypo
                        components={["responsiveSize", "weight", "spacing", "style"]}
                        setAttributes={saveLowerStyles}
                        fontSizeType={{
                            value: lowerStyles[0].lowerSizeUnit,
                            label: __("lowerSizeUnit", 'premium-blocks-for-gutenberg'),
                        }}
                        fontSize={lowerStyles[0].lowerSize}
                        fontSizeMobile={lowerStyles[0].lowerSizeMobile}
                        fontSizeTablet={lowerStyles[0].lowerSizeTablet}
                        onChangeSize={newSize => saveLowerStyles({ lowerSize: newSize })}
                        onChangeTabletSize={newSize => saveLowerStyles({ lowerSizeTablet: newSize })}
                        onChangeMobileSize={newSize => saveLowerStyles({ lowerSizeMobile: newSize })}
                        weight={lowerStyles[0].lowerWeight}
                        style={lowerStyles[0].lowerStyle}
                        spacing={lowerStyles[0].lowerSpacing}
                        onChangeWeight={newWeight => saveLowerStyles({ lowerWeight: newWeight })}
                        onChangeStyle={newStyle => saveLowerStyles({ lowerStyle: newStyle })}
                        onChangeSpacing={newValue => saveLowerStyles({ lowerSpacing: newValue })}
                    />
                    <ResponsiveSingleRangeControl
                        label={__("Width", 'premium-blocks-for-gutenberg')}
                        value={lowerStyles[0].iconWidth}
                        onChange={newValue => saveLowerStyles({ iconWidth: newValue })}
                        units={['px', '%', 'em']}
                        defaultValue={0}
                        onChangeUnit={newValue =>
                            saveLowerStyles({ iconWidthUnit: newValue })
                        }
                        min={1}
                        max={500}
                        showUnit={true}
                        unit={lowerStyles[0].iconWidthUnit}
                    />
                    <AdvancedPopColorControl
                        label={__("Color", 'premium-blocks-for-gutenberg')}
                        colorValue={lowerStyles[0].color}
                        colorDefault={''}
                        onColorChange={newValue => saveLowerStyles({ color: newValue || "transparent", })}
                    />
                    <AdvancedPopColorControl
                        label={__(`Background Color`, 'premium-blocks-for-gutenberg')}
                        colorValue={lowerStyles[0].backColor}
                        onColorChange={newvalue => saveLowerStyles({ backColor: newvalue })}
                        colorDefault={``}
                    />
                    <PremiumBorder
                        borderType={lowerStyles[0].borderType}
                        top={lowerBorderTop}
                        right={lowerBorderRight}
                        bottom={lowerBorderBottom}
                        left={lowerBorderLeft}
                        borderColor={lowerStyles[0].borderColor}
                        borderRadius={lowerStyles[0].borderRadius}
                        onChangeType={(newType) => saveLowerStyles({ borderType: newType })}
                        onChangeWidth={({ top, right, bottom, left }) =>
                            setAttributes({
                                lowerBorderTop: top,
                                lowerBorderRight: right,
                                lowerBorderBottom: bottom,
                                lowerBorderLeft: left,
                            })
                        }
                        onChangeColor={(colorValue) => saveLowerStyles({ borderColor: colorValue })}
                        onChangeRadius={(newRadius) => saveLowerStyles({ borderRadius: newRadius })}
                    />
                    <PremiumResponsivePadding
                        paddingT={lowerPaddingT}
                        paddingR={lowerPaddingR}
                        paddingB={lowerPaddingB}
                        paddingL={lowerPaddingL}
                        paddingTTablet={lowerPaddingTTablet}
                        paddingRTablet={lowerPaddingRTablet}
                        paddingBTablet={lowerPaddingBTablet}
                        paddingLTablet={lowerPaddingLTablet}
                        paddingTMobile={lowerPaddingTMobile}
                        paddingRMobile={lowerPaddingRMobile}
                        paddingBMobile={lowerPaddingBMobile}
                        paddingLMobile={lowerPaddingLMobile}
                        onChangePaddingTop={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ lowerPaddingT: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ lowerPaddingTTablet: newValue })
                                } else {
                                    setAttributes({ lowerPaddingTMobile: newValue })
                                }
                            }
                        }
                        onChangePaddingRight={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ lowerPaddingR: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ lowerPaddingRTablet: newValue })
                                } else {
                                    setAttributes({ lowerPaddingRMobile: newValue })
                                }
                            }
                        }
                        onChangePaddingBottom={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ lowerPaddingB: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ lowerPaddingBTablet: newValue })
                                } else {
                                    setAttributes({ lowerPaddingBMobile: newValue })
                                }
                            }
                        }
                        onChangePaddingLeft={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ lowerPaddingL: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ lowerPaddingLTablet: newValue })
                                } else {
                                    setAttributes({ lowerPaddingLMobile: newValue })
                                }
                            }
                        }
                    />
                </PanelBody>}
                <PanelBody
                    title={__("Modal Body", 'premium-blocks-for-gutenberg')}
                    className="premium-panel-body"
                    initialOpen={false}
                >
                    {"text" == modalStyles[0].contentType && (
                        <Fragment>
                            <AdvancedPopColorControl
                                label={__("Text Color", 'premium-blocks-for-gutenberg')}
                                colorValue={modalStyles[0].textColor}
                                colorDefault={''}
                                onColorChange={(newValue) => saveModalStyles({ textColor: newValue })}
                            />
                            <AdvancedPopColorControl
                                label={__("Content Background Color", 'premium-blocks-for-gutenberg')}
                                colorValue={modalStyles[0].textBackColor}
                                colorDefault={''}
                                onColorChange={(newValue) => saveModalStyles({ textBackColor: newValue })}
                            />
                            <PremiumTypo
                                components={["responsiveSize", "weight", "spacing", "style", "upper", "family"]}
                                setAttributes={saveModalStyles}
                                fontSizeType={{
                                    value: modalStyles[0].modalSizeUnit,
                                    label: __("modalSizeUnit", 'premium-blocks-for-gutenberg'),
                                }}
                                fontSize={modalStyles[0].modalSize}
                                fontSizeMobile={modalStyles[0].modalSizeMobile}
                                fontSizeTablet={modalStyles[0].modalSizeTablet}
                                onChangeSize={newSize => saveModalStyles({ modalSize: newSize })}
                                onChangeTabletSize={newSize => saveModalStyles({ modalSizeTablet: newSize })}
                                onChangeMobileSize={newSize => saveModalStyles({ modalSizeMobile: newSize })}
                                fontFamily={modalStyles[0].modalFamily}
                                weight={modalStyles[0].modalWeight}
                                style={modalStyles[0].modalStyle}
                                spacing={modalStyles[0].modalSpacing}
                                upper={modalStyles[0].modalUpper}
                                onChangeWeight={newWeight => saveModalStyles({ modalWeight: newWeight })}
                                onChangeStyle={newStyle => saveModalStyles({ modalStyle: newStyle })}
                                onChangeSpacing={newValue => saveModalStyles({ modalSpacing: newValue })}
                                onChangeFamily={(fontFamily) => saveModalStyles({ modalFamily: fontFamily })}
                                onChangeUpper={check => saveModalStyles({ modalUpper: check })}
                            />
                            <hr />
                        </Fragment>
                    )}
                    <ResponsiveRangeControl
                        label={__('Width', 'premium-blocks-for-gutenberg')}
                        value={modalStyles[0].modalWidth}
                        onChange={(value) => saveModalStyles({ modalWidth: (value !== "") ? value : 200 })}
                        tabletValue={modalStyles[0].modalWidthTablet}
                        onChangeTablet={(value) => saveModalStyles({ modalWidthTablet: (value !== "") ? value : 200 })}
                        mobileValue={modalStyles[0].modalWidthMobile}
                        onChangeMobile={(value) => saveModalStyles({ modalWidthMobile: (value !== "") ? value : 200 })}
                        min={0}
                        max={1500}
                        step={1}
                        onChangeUnit={newValue => saveModalStyles({ modalWidthUnit: newValue })}
                        unit={modalStyles[0].modalWidthUnit}
                        showUnit={true}
                        units={['px', '%', 'em']}
                        defaultValue={0}
                    />
                    <ResponsiveRangeControl
                        label={__('Max Height', 'premium-blocks-for-gutenberg')}
                        value={modalStyles[0].modalHeight}
                        onChange={(value) => saveModalStyles({ modalHeight: (value !== "") ? value : 200 })}
                        tabletValue={modalStyles[0].modalHeightTablet}
                        onChangeTablet={(value) => saveModalStyles({ modalHeightTablet: (value !== "") ? value : 200 })}
                        mobileValue={modalStyles[0].modalHeightMobile}
                        onChangeMobile={(value) => saveModalStyles({ modalHeightMobile: (value !== "") ? value : 200 })}
                        min={0}
                        max={1500}
                        step={1}
                        onChangeUnit={newValue => saveModalStyles({ modalHeightUnit: newValue })}
                        unit={modalStyles[0].modalHeightUnit}
                        showUnit={true}
                        units={['px', '%', 'em']}
                        defaultValue={0}
                    />
                    <PremiumBackgroundControl
                        setAttributes={setAttributes}
                        saveContainerStyle={saveModalStyles}
                        backgroundType={backgroundType}
                        backgroundColor={modalStyles[0].containerBack}
                        backgroundImageID={modalStyles[0].backgroundImageID}
                        backgroundImageURL={modalStyles[0].backgroundImageURL}
                        backgroundPosition={modalStyles[0].backgroundPosition}
                        backgroundRepeat={modalStyles[0].backgroundRepeat}
                        backgroundSize={modalStyles[0].backgroundSize}
                        fixed={modalStyles[0].fixed}
                        gradientLocationOne={modalStyles[0].gradientLocationOne}
                        gradientColorTwo={modalStyles[0].gradientColorTwo}
                        gradientLocationTwo={modalStyles[0].gradientLocationTwo}
                        gradientAngle={modalStyles[0].gradientAngle}
                        gradientPosition={modalStyles[0].gradientPosition}
                        gradientType={modalStyles[0].gradientType}
                    />
                    <AdvancedPopColorControl
                        label={__("Footer Background Color", 'premium-blocks-for-gutenberg')}
                        colorValue={modalStyles[0].footerBackColor}
                        colorDefault={''}
                        onColorChange={(newValue) => saveModalStyles({ footerBackColor: newValue })}
                    />
                    <PremiumBorder
                        borderType={modalStyles[0].borderType}
                        borderWidth={modalStyles[0].borderWidth}
                        top={modalBorderTop}
                        right={modalBorderRight}
                        bottom={modalBorderBottom}
                        left={modalBorderLeft}
                        borderColor={modalStyles[0].borderColor}
                        borderRadius={modalStyles[0].borderRadius}
                        onChangeType={(newType) => saveModalStyles({ borderType: newType })}
                        onChangeWidth={({ top, right, bottom, left }) =>
                            setAttributes({
                                modalBorderTop: top,
                                modalBorderRight: right,
                                modalBorderBottom: bottom,
                                modalBorderLeft: left,
                            })
                        }
                        onChangeColor={(colorValue) => saveModalStyles({ borderColor: colorValue })}
                        onChangeRadius={(newRadius) => saveModalStyles({ borderRadius: newRadius })}
                    />
                    <PremiumBoxShadow
                        inner={true}
                        color={modalStyles[0].modalShadowColor}
                        blur={modalStyles[0].modalShadowBlur}
                        horizontal={modalStyles[0].modalShadowHorizontal}
                        vertical={modalStyles[0].modalShadowVertical}
                        position={modalStyles[0].modalShadowPosition}
                        onChangeColor={newColor => saveModalStyles({ modalShadowColor: newColor })}
                        onChangeBlur={newBlur => saveModalStyles({ modalShadowBlur: newBlur })}
                        onChangehHorizontal={newValue => saveModalStyles({ modalShadowHorizontal: newValue })}
                        onChangeVertical={newValue => saveModalStyles({ modalShadowVertical: newValue })}
                        onChangePosition={newValue => saveModalStyles({ modalShadowPosition: newValue })}
                    />
                    <PremiumResponsiveMargin
                        directions={["all"]}
                        marginTop={modalMarginT}
                        marginRight={modalMarginR}
                        marginBottom={modalMarginB}
                        marginLeft={modalMarginL}
                        marginTopTablet={modalMarginTTablet}
                        marginRightTablet={modalMarginRTablet}
                        marginBottomTablet={modalMarginBTablet}
                        marginLeftTablet={modalMarginLTablet}
                        marginTopMobile={modalMarginTMobile}
                        marginRightMobile={modalMarginRMobile}
                        marginBottomMobile={modalMarginBMobile}
                        marginLeftMobile={modalMarginLMobile}
                        onChangeMarginTop={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ modalMarginT: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ modalMarginTTablet: newValue })
                                } else {
                                    setAttributes({ modalMarginTMobile: newValue })
                                }
                            }
                        }
                        onChangeMarginRight={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ modalMarginR: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ modalMarginRTablet: newValue })
                                } else {
                                    setAttributes({ modalMarginRMobile: newValue })
                                }
                            }
                        }
                        onChangeMarginBottom={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ modalMarginB: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ modalMarginBTablet: newValue })
                                } else {
                                    setAttributes({ modalMarginBMobile: newValue })
                                }
                            }
                        }
                        onChangeMarginLeft={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ modalMarginL: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ modalMarginLTablet: newValue })
                                } else {
                                    setAttributes({ modalMarginLMobile: newValue })
                                }
                            }
                        }
                    />
                    <PremiumResponsivePadding
                        paddingT={modalPaddingT}
                        paddingR={modalPaddingR}
                        paddingB={modalPaddingB}
                        paddingL={modalPaddingL}
                        paddingTTablet={modalPaddingTTablet}
                        paddingRTablet={modalPaddingRTablet}
                        paddingBTablet={modalPaddingBTablet}
                        paddingLTablet={modalPaddingLTablet}
                        paddingTMobile={modalPaddingTMobile}
                        paddingRMobile={modalPaddingRMobile}
                        paddingBMobile={modalPaddingBMobile}
                        paddingLMobile={modalPaddingLMobile}
                        onChangePaddingTop={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ modalPaddingT: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ modalPaddingTTablet: newValue })
                                } else {
                                    setAttributes({ modalPaddingTMobile: newValue })
                                }
                            }
                        }
                        onChangePaddingRight={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ modalPaddingR: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ modalPaddingRTablet: newValue })
                                } else {
                                    setAttributes({ modalPaddingRMobile: newValue })
                                }
                            }
                        }
                        onChangePaddingBottom={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ modalPaddingB: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ modalPaddingBTablet: newValue })
                                } else {
                                    setAttributes({ modalPaddingBMobile: newValue })
                                }
                            }
                        }
                        onChangePaddingLeft={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ modalPaddingL: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ modalPaddingLTablet: newValue })
                                } else {
                                    setAttributes({ modalPaddingLMobile: newValue })
                                }
                            }
                        }
                    />
                </PanelBody>
            </InspectorControls >
        ),
        renderCss,
        <div id={`premium-modal-box-${block_id}`} className={classnames(className, "premium-modal-box")} data-trigger={triggerSettings[0].triggerType}>
            <div className={`premium-modal-trigger-container`} style={{ textAlign: triggerSettings[0].align }}>
                <button className={`premium-button__${triggerSettings[0].btnSize}`} ref={triggerRef} style={{
                    fontSize: `${triggerFontSize}${triggerStyles[0].triggerSizeUnit}`,
                    paddingTop: `${triggerPaddingTop}px`,
                    paddingRight: `${triggerPaddingRight}px`,
                    paddingBottom: `${triggerPaddingBottom}px`,
                    paddingLeft: `${triggerPaddingLeft}px`,
                    backgroundColor: triggerStyles[0].triggerBack,
                    borderStyle: triggerStyles[0].borderType,
                    borderTopWidth: `${triggerBorderTop}px`,
                    borderRightWidth: `${triggerBorderRight}px`,
                    borderBottomWidth: `${triggerBorderBottom}px`,
                    borderLeftWidth: `${triggerBorderLeft}px`,
                    borderColor: triggerStyles[0].borderColor,
                    borderRadius: `${triggerStyles[0].borderRadius}px`,
                    boxShadow: `${triggerStyles[0].triggerShadowHorizontal}px ${triggerStyles[0].triggerShadowVertical}px ${triggerStyles[0].triggerShadowBlur}px ${triggerStyles[0].triggerShadowColor} ${triggerStyles[0].triggerShadowPosition}`,
                }}>
                    {triggerSettings[0].showIcon && triggerSettings[0].iconPosition == "before" && <i className={triggerSettings[0].icon} style={{ fontSize: `${triggerSettings[0].iconSize}px`, marginRight: `${triggerSettings[0].iconSpacing}px`, color: triggerStyles[0].iconColor }}></i>}
                    <span style={{ color: triggerStyles[0].color, fontFamily: triggerStyles[0].triggerFamily, fontWeight: triggerStyles[0].triggerWeight, fontStyle: triggerStyles[0].triggerStyle, letterSpacing: triggerStyles[0].triggerSpacing }}> {triggerSettings[0].btnText}</span>
                    {triggerSettings[0].showIcon && triggerSettings[0].iconPosition == "after" && <i className={triggerSettings[0].icon} style={{ fontSize: `${triggerSettings[0].iconSize}px`, marginLeft: `${triggerSettings[0].iconSpacing}px`, color: triggerStyles[0].iconColor }} ></i>}
                </button>
            </div>
            <div ref={modalRef} className="premium-popup__modal_wrap" style={{ display: "none" }} role="dialog">
                <div role="presentation" className="premium-popup__modal_wrap_overlay" ref={wrapRef} style={{
                    backgroundColor: backgroundType === "solid" ? modalStyles[0].containerBack : '',
                    backgroundImage: btnbg
                }} >
                </div>
                <div className={`premium-popup__modal_content animated animation-${contentStyles[0].animationType} animation-${contentStyles[0].animationSpeed}`}
                    data-delay={contentStyles[0].animationDelay}
                    data-animation={`${contentStyles[0].animationType} ${contentStyles[0].animationSpeed}`}
                    style={{
                        width: `${modalWidth}${modalStyles[0].modalWidthUnit}`,
                        maxHeight: `${modalMaxHeight}${modalStyles[0].modalHeightUnit}`,
                        marginTop: `${modalMarginTop}px`,
                        marginRight: `${modalMarginRight}px`,
                        marginBottom: `${modalMarginBottom}px`,
                        marginLeft: `${modalMarginLeft}px`,
                        borderStyle: `${modalStyles[0].borderType}`,
                        borderColor: `${modalStyles[0].borderColor}`,
                        borderTopWidth: `${modalBorderTop}px`,
                        borderRightWidth: `${modalBorderRight}px`,
                        borderBottomWidth: `${modalBorderBottom}px`,
                        borderLeftWidth: `${modalBorderLeft}px`,
                        borderRadius: `${modalStyles[0].borderRadius}px`,
                        boxShadow: `${modalStyles[0].modalShadowHorizontal}px ${modalStyles[0].modalShadowVertical}px ${modalStyles[0].modalShadowBlur}px ${modalStyles[0].modalShadowColor} ${modalStyles[0].modalShadowPosition}`,
                    }}>
                    {contentStyles[0].showHeader && <div className={`premium-modal-box-modal-header`} style={{
                        backgroundColor: headerStyles[0].backColor,
                        borderStyle: headerStyles[0].borderType,
                        borderTopWidth: `${headerBorderTop}px`,
                        borderRightWidth: `${headerBorderRight}px`,
                        borderBottomWidth: `${headerBorderBottom}px`,
                        borderLeftWidth: `${headerBorderLeft}px`,
                        borderColor: `${headerStyles[0].borderColor}`,
                        borderRadius: `${headerStyles[0].borderRadius}px`,
                    }}>
                        <h3 className={`premium-modal-box-modal-title`} style={{
                            color: headerStyles[0].color,
                            fontFamily: headerStyles[0].headerFamily,
                            fontStyle: headerStyles[0].headerStyle,
                            letterSpacing: headerStyles[0].headerSpacing,
                            fontWeight: headerStyles[0].headerWeight,
                            fontSize: `${headerFontSize}${headerStyles[0].headerSizeUnit}`
                        }}>
                            {contentStyles[0].iconType === "icon" && <i className={contentStyles[0].contentIcon} style={{ fontSize: `${headerIconSize}${contentStyles[0].iconSizeUnit}` }} ></i>}
                            {contentStyles[0].iconType === "image" && <img src={contentStyles[0].contentImgURL} style={{
                                width: `${headerIconSize}${contentStyles[0].iconSizeUnit}`,
                                height: `${headerIconSize}${contentStyles[0].iconSizeUnit}`
                            }}></img>}
                            {contentStyles[0].iconType === "lottie" && <Lottie
                                options={{
                                    loop: contentStyles[0].loopLottie,
                                    path: contentStyles[0].lottieURL,
                                    rendererSettings: {
                                        preserveAspectRatio: 'xMidYMid',
                                        className: "premium-lottie-inner"
                                    }
                                }}
                                isClickToPauseDisabled={true}
                                direction={(contentStyles[0].reverseLottie) ? -1 : 1}
                            />}

                            {contentStyles[0].titleText}
                        </h3>
                        {contentStyles[0].showUpperClose && contentStyles[0].showHeader && (<div className="premium-modal-box-close-button-container" style={{
                            backgroundColor: `${upperStyles[0].backColor}`,
                            borderStyle: `${upperStyles[0].borderType}`,
                            borderTopWidth: `${upperBorderTop}px`,
                            borderRightWidth: `${upperBorderRight}px`,
                            borderBottomWidth: `${upperBorderBottom}px`,
                            borderLeftWidth: `${upperBorderLeft}px`,
                            borderColor: `${upperStyles[0].borderColor}`,
                            borderRadius: `${upperStyles[0].borderRadius}px`,
                            paddingTop: `${upperPaddingTop}px`,
                            paddingRight: `${upperPaddingRight}px`,
                            paddingBottom: `${upperPaddingBottom}px`,
                            paddingLeft: `${upperPaddingLeft}px`
                        }}>
                            <button type="button" className="premium-modal-box-modal-close" ref={closeButton}
                                style={{
                                    fontSize: `${upperStyles[0].iconWidth}${upperStyles[0].iconWidthUnit}`,
                                    color: `${upperStyles[0].color}`,

                                }} data-dismiss="premium-modal" >×</button>
                        </div>)}
                    </div>}
                    <div className={`premium-modal-box-modal-body`} style={{
                        background: modalStyles[0].textBackColor,
                        paddingTop: `${modalPaddingTop}px`,
                        paddingRight: `${modalPaddingRight}px`,
                        paddingBottom: `${modalPaddingBottom}px`,
                        paddingLeft: `${modalPaddingLeft}px`
                    }}>
                        {modalStyles[0].contentType === "text" ? <p style={{
                            fontSize: `${modalFontSize}${modalStyles[0].modalSizeUnit}`,
                            color: modalStyles[0].textColor,
                            fontWeight: modalStyles[0].modalWeight,
                            fontFamily: modalStyles[0].modalFamily,
                            letterSpacing: modalStyles[0].modalSpacing,
                            fontStyle: modalStyles[0].modalStyle,
                        }} >{modalStyles[0].contentText}</p> : <InnerBlocks />}

                    </div>
                    {contentStyles[0].showLowerClose && (<div className={`premium-modal-box-modal-footer`} style={{
                        backgroundColor: modalStyles[0].footerBackColor
                    }}>
                        <button className={`premium-modal-box-modal-lower-close`} role="button" data-dismiss="premium-modal"
                            ref={closeButton}
                            style={{
                                fontStyle: lowerStyles[0].lowerStyle,
                                fontWeight: lowerStyles[0].lowerWeight,
                                letterSpacing: lowerStyles[0].lowerSpacing,
                                fontSize: `${lowerFontSize}${lowerStyles[0].lowerSizeUnit}`,
                                width: `${lowerStyles[0].iconWidth}${lowerStyles[0].iconWidthUnit}`,
                                color: `${lowerStyles[0].color}`,
                                backgroundColor: `${lowerStyles[0].backColor}`,
                                borderStyle: `${lowerStyles[0].borderType}`,
                                borderTopWidth: `${lowerBorderTop}px`,
                                borderRightWidth: `${lowerBorderRight}px`,
                                borderBottomWidth: `${lowerBorderBottom}px`,
                                borderLeftWidth: `${lowerBorderLeft}px`,
                                borderColor: `${lowerStyles[0].borderColor}`,
                                borderRadius: `${lowerStyles[0].borderRadius}px`,
                                paddingTop: `${lowerPaddingTop}px`,
                                paddingRight: `${lowerPaddingRight}px`,
                                paddingBottom: `${lowerPaddingBottom}px`,
                                paddingLeft: `${lowerPaddingLeft}px`
                            }}
                        >
                            {contentStyles[0].lowerCloseText}
                        </button>
                    </div>)}
                </div>
            </div>
        </div >
    ];
};
export default withSelect((select, props) => {
    const { __experimentalGetPreviewDeviceType = null } = select('core/edit-post');
    let deviceType = __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;

    return {
        deviceType: deviceType
    }
})(edit)