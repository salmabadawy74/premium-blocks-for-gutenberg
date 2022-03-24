import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import iconsList from "../../components/premium-icons-list";
import AdvancedPopColorControl from '../../components/Color Control/ColorComponent';
import PremiumBorder from "../../components/premium-border"
import PremiumResponsivePadding from '../../components/Premium-Responsive-Padding';
import ResponsiveSingleRangeControl from "../../components/RangeControl/single-range-control";
import RadioComponent from '../../components/radio-control';
import classnames from "classnames";
const { __ } = wp.i18n;

const { Button, Modal } = wp.components;
const { useState, Fragment, useEffect } = wp.element;
const { InnerBlocks } = wp.blockEditor;
const {
    PanelBody,
    SelectControl,
    ToggleControl,
    TextControl
} = wp.components;

const { InspectorControls, URLInput } = wp.blockEditor;
const edit = props => {
    const [isOpen, setOpen] = useState(false);
    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);
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
        upperStyles,
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
                                    onChange={(value) => saveContentStyle({ iconSize: (value !== "") ? value : 200 })}
                                    tabletValue={contentStyles[0].iconSizeTablet}
                                    onChangeTablet={(value) => saveContentStyle({ iconSizeTablet: (value !== "") ? value : 200 })}
                                    mobileValue={contentStyles[0].iconSizeMobile}
                                    onChangeMobile={(value) => saveContentStyle({ iconSizeMobile: (value !== "") ? value : 200 })}
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
                    <ToggleControl
                        label={__("Upper Close Button", 'premium-blocks-for-gutenberg')}
                        checked={contentStyles[0].showUpperClose}
                        onChange={(value) => saveContentStyle({ showUpperClose: value })}
                    />
                    <ToggleControl
                        label={__("Lower Close Button", 'premium-blocks-for-gutenberg')}
                        checked={contentStyles[0].showLowerClose}
                        onChange={(value) => saveContentStyle({ showLowerClose: value })}
                    />
                    {contentStyles[0].showLowerClose && (
                        <TextControl
                            label={__("Text", 'premium-blocks-for-gutenberg')}
                            checked={contentStyles[0].lowerCloseText}
                            onChange={(value) => saveContentStyle({ lowerCloseText: value })}
                        />)
                    }
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
                                value={triggerSettings[0].showIcon}
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
                            <RadioComponent
                                choices={["right", "center", "left"]}
                                value={triggerSettings[0].align}
                                onChange={newValue => saveTriggerSettings({ align: newValue })}
                                label={__("Align", 'premium-blocks-for-gutenberg')}
                            />
                        </Fragment>
                    )}
                    {triggerSettings[0].triggerType === "load" && (
                        <ResponsiveSingleRangeControl
                            label={__("Delay in Popup Display (Sec)", 'premium-blocks-for-gutenberg')}
                            value={triggerSettings[0].delayTime}
                            min="1"
                            max="100"
                            onChange={newValue => saveTriggerSettings({ delayTime: newValue })}
                            defaultValue={0}
                            showUnit={false}
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
                            label: __("titleSizeUnit", 'premium-blocks-for-gutenberg'),
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
                                            borderWidth={triggerStyles[0].borderWidth}
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
                <PanelBody
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
                            label: __("titleSizeUnit", 'premium-blocks-for-gutenberg'),
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
                </PanelBody>
                <PanelBody
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
                </PanelBody>
                <PanelBody
                    title={__("Lower Close Button", 'premium-blocks-for-gutenberg')}
                    className="premium-panel-body"
                    initialOpen={false}
                >
                    <PremiumTypo
                        components={["responsiveSize", "weight", "spacing", "style"]}
                        setAttributes={saveLowerStyles}
                        fontSizeType={{
                            value: lowerStyles[0].lowerSizeUnit,
                            label: __("titleSizeUnit", 'premium-blocks-for-gutenberg'),
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
                            saveIconStyle({ iconWidthUnit: newValue })
                        }
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
                </PanelBody>
                <PanelBody
                    title={__("Modal Body", 'premium-blocks-for-gutenberg')}
                    className="premium-panel-body"
                    initialOpen={false}
                >
                    <AdvancedPopColorControl
                        label={__("Text Color", 'premium-blocks-for-gutenberg')}
                        colorValue={modalStyles[0].textColor}
                        colorDefault={''}
                        onColorChange={(newValue) => saveModalStyles({ color: newValue })}
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
                            label: __("titleSizeUnit", 'premium-blocks-for-gutenberg'),
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
                    <ResponsiveRangeControl
                        label={__('Width', 'premium-blocks-for-gutenberg')}
                        value={modalStyles[0].modalWidth}
                        onChange={(value) => saveModalStyles({ modalWidth: (value !== "") ? value : 200 })}
                        tabletValue={modalStyles[0].modalWidthTablet}
                        onChangeTablet={(value) => saveModalStyles({ modalWidthTablet: (value !== "") ? value : 200 })}
                        mobileValue={modalStyles[0].modalWidthMobile}
                        onChangeMobile={(value) => saveModalStyles({ modalWidthMobile: (value !== "") ? value : 200 })}
                        min={0}
                        max={100}
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
                        max={100}
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
        <div id={`premium-modal-box-${block_id}`} className={classnames(className, "premium-modal-box")} >
            <Button variant="secondary" onClick={openModal}>
                Open Modal
            </Button>
            {isOpen && (
                <Modal title="This is my modal" >
                    <Button variant="secondary" onClick={closeModal}>
                        <InnerBlocks templateLock={false} />
                    </Button>
                </Modal>
            )}
        </div>
    ];
};
export default edit