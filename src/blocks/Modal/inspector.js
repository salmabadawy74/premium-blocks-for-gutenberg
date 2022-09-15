import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import iconsList from "../../components/premium-icons-list";
import AdvancedPopColorControl from '../../components/Color Control/ColorComponent';
import PremiumBorder from "../../components/premium-border"
import ResponsiveSingleRangeControl from "../../components/RangeControl/single-range-control";
import PremiumTypo from "../../components/premium-typo";
import PremiumMediaUpload from "../../components/premium-media-upload"
import PremiumShadow from "../../components/PremiumShadow"
import ResponsiveRangeControl from "../../components/RangeControl/responsive-range-control";
import PremiumBackgroundControl from '../../components/Premium-Background-Control'
import PremiumFilters from "../../components/premium-filters";
import { JsonUploadEnabled } from "../../../assets/js/settings";
import ResponsiveRadioControl from "../../components/responsive-radio";
import PremiumResponsiveTabs from "../../components/premium-responsive-tabs";
import SpacingControl from "../../components/premium-responsive-spacing";
import Icons from "../../components/icons";
import InspectorTabs from '../../components/inspectorTabs';
import InspectorTab from '../../components/inspectorTab';
import InsideTabs from "../../components/InsideTabs";
import InsideTab from "../../components/InsideTab";

const { __ } = wp.i18n;
const {
    PanelBody,
    SelectControl,
    ToggleControl,
    TextControl,
    ExternalLink
} = wp.components;
const { InspectorControls } = wp.blockEditor;
const { Fragment } = wp.element;

const Inspector = ({
    attributes,
    setAttributes
}) => {
    const {
        contentStyles,
        triggerSettings,
        triggerStyles,
        triggerBorder,
        triggerBorderH,
        triggerPadding,
        headerStyles,
        headerBorder,
        upperStyles,
        upperBorder,
        upperPadding,
        lowerStyles,
        lowerBorder,
        lowerPadding,
        modalStyles,
        modalBackground,
        triggerShadow,
        modalBorder,
        modalMargin,
        modalPadding,
        modalShadow,
        triggerTextShadow,
        triggerTypography,
        headerTypography,
        lowerTypography,
        modalTypography,
        iconSize,
        imageWidth,
        modalWidth,
        modalHeight,
        triggerIconSize,
        align,
        upperIconWidth,
        lowerIconWidth,
        hideDesktop,
        hideTablet,
        hideMobile,
        triggerFilter,
        triggerHoverFilter
    } = attributes;

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
        const newUpdate = triggerSettings.map((item, indx) => {
            if (0 === indx) {
                item = { ...item, ...value };
            }
            return item;
        });
        setAttributes({
            triggerSettings: newUpdate,
        });
    }

    const saveTriggerStyles = (value) => {
        const newUpdate = triggerStyles.map((item, indexx) => {
            if (0 === indexx) {
                item = { ...item, ...value };
            }
            return item;
        });
        setAttributes({
            triggerStyles: newUpdate,
        });
    }

    const saveHeaderStyles = (value) => {
        const newUpdate = headerStyles.map((item, headerIndex) => {
            if (0 === headerIndex) {
                item = { ...item, ...value };
            }
            return item;
        });
        setAttributes({
            headerStyles: newUpdate,
        });
    }

    const saveUpperStyles = (value) => {
        const newUpdate = upperStyles.map((item, upperIndex) => {
            if (0 === upperIndex) {
                item = { ...item, ...value };
            }
            return item;
        });
        setAttributes({
            upperStyles: newUpdate,
        });
    }

    const saveLowerStyles = (value) => {
        const newUpdate = lowerStyles.map((item, lowerIndex) => {
            if (0 === lowerIndex) {
                item = { ...item, ...value };
            }
            return item;
        });
        setAttributes({
            lowerStyles: newUpdate,
        });
    }

    const saveModalStyles = (value) => {
        const newUpdate = modalStyles.map((item, modalIndex) => {
            if (0 === modalIndex) {
                item = { ...item, ...value };
            }
            return item;
        });
        setAttributes({
            modalStyles: newUpdate,
        });
    }

    return (
        <InspectorControls key={"inspector"}>
            <InspectorTabs tabs={['layout', 'style', 'advance']}>
                <InspectorTab key={'layout'}>
                    <PanelBody
                        title={__("Trigger", 'premium-blocks-for-gutenberg')}
                        className="premium-panel-body"
                        initialOpen={true}
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
                                                    [{ label: __("Before", "premium-blocks-for-gutenberg"), value: 'before' },
                                                    { label: __("After", "premium-blocks-for-gutenberg"), value: 'after' }
                                                    ]}
                                                onChange={(newValue) => saveTriggerSettings({ iconPosition: newValue })}
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
                                {JsonUploadEnabled == 1 ? '' : <p>{__('Make Sure that allow "JSON file Upload " from ', 'premium-blocks-for-gutenberg')} <ExternalLink href={window.PremiumBlocksSettings.settingPath}>plugin Settings</ExternalLink></p>}
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
                            <ResponsiveRadioControl
                                label={__("Alignment", "premium-blocks-for-gutenberg")}
                                choices={[
                                    { value: "left", label: __("Left", "premium-block-for-gutenberg"), icon: Icons.alignLeft },
                                    { value: "center", label: __("Center", "premium-block-for-gutenberg"), icon: Icons.alignCenter },
                                    { value: "right", label: __("Right", "premium-block-for-gutenberg"), icon: Icons.alignRight },
                                ]}
                                value={align}
                                onChange={(newValue) => setAttributes({ align: newValue })}
                                showIcons={true}
                            />
                        )}
                    </PanelBody>
                    <PanelBody
                        title={__("Content", 'premium-blocks-for-gutenberg')}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <ToggleControl
                            label={__('Header', 'premium-blocks-for-gutenberg')}
                            checked={contentStyles[0].showHeader}
                            onChange={(value) => saveContentStyle({ showHeader: value })}
                        />
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
                        <SelectControl
                            label={__(`Content to Show`, 'premium-blocks-for-gutenberg')}
                            value={modalStyles[0].contentType}
                            onChange={(value) => saveModalStyles({ contentType: value })}
                            options={
                                [
                                    { value: "text", label: __("Text", 'premium-blocks-for-gutenberg') },
                                    { value: "block", label: __("Gutenberg Block", 'premium-blocks-for-gutenberg') }
                                ]
                            }
                        />
                        <SelectControl
                            label={__("Animation", 'premium-blocks-for-gutenberg')}
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
                                { value: "rollIn", label: __("Roll In", 'premium-blocks-for-gutenberg') }
                            ]}
                        />
                        <SelectControl
                            label={__("Animation Duration", 'premium-blocks-for-gutenberg')}
                            value={contentStyles[0].animationSpeed}
                            options={[
                                { label: __("Fast", 'premium-blocks-for-gutenberg'), value: "fast" },
                                { label: __("Normal", 'premium-blocks-for-gutenberg'), value: "normal" },
                                { label: __("Slow", 'premium-blocks-for-gutenberg'), value: 'slow' }
                            ]}
                            onChange={(value) => saveContentStyle({ animationSpeed: value })}
                        />
                    </PanelBody>
                    {contentStyles[0].showHeader &&
                        <PanelBody
                            title={__("Header", 'premium-blocks-for-gutenberg')}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <TextControl
                                label={__("Title", 'premium-blocks-for-gutenberg')}
                                value={contentStyles[0].titleText}
                                onChange={(value) => saveContentStyle({ titleText: value })}
                            />
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
                            {contentStyles[0].iconType === "image" && (
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
                                    {JsonUploadEnabled == 1 ? '' : <p>{__('Make Sure that allow "JSON file Upload " from ', 'premium-blocks-for-gutenberg')} <ExternalLink href={window.PremiumBlocksSettings.settingPath}>plugin Settings</ExternalLink></p>}
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
                        </PanelBody>
                    }
                    {contentStyles[0].showLowerClose &&
                        <PanelBody
                            title={__("Lower Close Button", 'premium-blocks-for-gutenberg')}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <TextControl
                                label={__("Lower Text", 'premium-blocks-for-gutenberg')}
                                value={contentStyles[0].lowerCloseText}
                                onChange={(value) => saveContentStyle({ lowerCloseText: value })}
                            />
                        </PanelBody>
                    }
                </InspectorTab>
                <InspectorTab key={'style'}>
                    {triggerSettings[0].triggerType !== "load" &&
                        <PanelBody
                            title={__("Triger", 'premium-blocks-for-gutenberg')}
                            className="premium-panel-body"
                            initialOpen={true}
                        >
                            {triggerSettings[0].triggerType === "button" && triggerSettings[0].showIcon && (
                                <Fragment>
                                    <ResponsiveRangeControl
                                        label={__("Icon Size", "premium-blocks-for-gutenberg")}
                                        value={triggerIconSize}
                                        onChange={(value) => setAttributes({ triggerIconSize: value })}
                                        min={1}
                                        max={100}
                                        step={1}
                                        showUnit={true}
                                        units={["px", "em", "rem"]}
                                        defaultValue={20}
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
                            )}
                            {(triggerSettings[0].triggerType === "image" || triggerSettings[0].triggerType === "lottie") && (
                                <ResponsiveRangeControl
                                    label={__("Size", 'premium-blocks-for-gutenberg')}
                                    value={imageWidth}
                                    onChange={newValue => setAttributes({ imageWidth: newValue })}
                                    units={['px', 'em', '%']}
                                    showUnit={true}
                                    min="1"
                                    max="800"
                                    defaultValue={0}
                                />
                            )}
                            {(triggerSettings[0].triggerType === "button" || triggerSettings[0].triggerType === 'text') && (
                                <PremiumTypo
                                    value={triggerTypography}
                                    onChange={newValue => setAttributes({ triggerTypography: newValue })}
                                />
                            )}
                            {triggerSettings[0].triggerType === "button" &&
                                <InsideTabs>
                                    <InsideTab tabTitle={__("Normal", 'premium-blocks-for-gutenberg')}>
                                        <Fragment>
                                            <AdvancedPopColorControl
                                                label={__("Color", 'premium-blocks-for-gutenberg')}
                                                colorValue={triggerStyles[0].color}
                                                colorDefault={''}
                                                onColorChange={(newValue) => saveTriggerStyles({ color: newValue })}
                                            />
                                            <AdvancedPopColorControl
                                                label={__("Icon Color", 'premium-blocks-for-gutenberg')}
                                                colorValue={triggerStyles[0].iconColor}
                                                colorDefault={''}
                                                onColorChange={(newValue) => saveTriggerStyles({ iconColor: newValue })}
                                            />
                                            <AdvancedPopColorControl
                                                label={__("Background Color", 'premium-blocks-for-gutenberg')}
                                                colorValue={triggerStyles[0].triggerBack}
                                                colorDefault={''}
                                                onColorChange={newValue => saveTriggerStyles({ triggerBack: newValue || "transparent", })}
                                            />
                                            <PremiumBorder
                                                label={__("Border", "premium-blocks-for-gutenberg")}
                                                value={triggerBorder}
                                                onChange={(value) => setAttributes({ triggerBorder: value })}
                                            />
                                        </Fragment>
                                    </InsideTab>
                                    <InsideTab tabTitle={__("Hover", 'premium-blocks-for-gutenberg')}>
                                        <Fragment>
                                            <AdvancedPopColorControl
                                                label={__("Hover Color", 'premium-blocks-for-gutenberg')}
                                                colorValue={triggerStyles[0].hoverColor}
                                                colorDefault={''}
                                                onColorChange={(newValue) => saveTriggerStyles({ hoverColor: newValue })}
                                            />
                                            <AdvancedPopColorControl
                                                label={__("Icon Hover Color", 'premium-blocks-for-gutenberg')}
                                                colorValue={triggerStyles[0].iconHoverColor}
                                                colorDefault={''}
                                                onColorChange={(newValue) => saveTriggerStyles({ iconHoverColor: newValue })}
                                            />
                                            <AdvancedPopColorControl
                                                label={__("Background Hover Color", 'premium-blocks-for-gutenberg')}
                                                colorValue={triggerStyles[0].triggerHoverBack}
                                                colorDefault={''}
                                                onColorChange={newValue => saveTriggerStyles({ triggerHoverBack: newValue || "transparent", })}
                                            />
                                            <PremiumBorder
                                                label={__("Border", "premium-blocks-for-gutenberg")}
                                                value={triggerBorderH}
                                                onChange={(value) => setAttributes({ triggerBorderH: value })}
                                            />
                                        </Fragment>
                                    </InsideTab>
                                </InsideTabs>
                            }
                            {triggerSettings[0].triggerType === 'text' &&
                                <InsideTabs>
                                    <InsideTab tabTitle={__("Normal", 'premium-blocks-for-gutenberg')}>
                                        <AdvancedPopColorControl
                                            label={__("Color", 'premium-blocks-for-gutenberg')}
                                            colorValue={triggerStyles[0].color}
                                            colorDefault={''}
                                            onColorChange={(newValue) => saveTriggerStyles({ color: newValue })}
                                        />
                                        <PremiumBorder
                                            label={__("Border", "premium-blocks-for-gutenberg")}
                                            value={triggerBorder}
                                            onChange={(value) => setAttributes({ triggerBorder: value })}
                                        />
                                    </InsideTab>
                                    <InsideTab tabTitle={__("Hover", 'premium-blocks-for-gutenberg')}>
                                        <AdvancedPopColorControl
                                            label={__("Hover Color", 'premium-blocks-for-gutenberg')}
                                            colorValue={triggerStyles[0].hoverColor}
                                            colorDefault={''}
                                            onColorChange={(newValue) => saveTriggerStyles({ hoverColor: newValue })}
                                        />
                                        <PremiumBorder
                                            label={__("Border", "premium-blocks-for-gutenberg")}
                                            value={triggerBorderH}
                                            onChange={(value) => setAttributes({ triggerBorderH: value })}
                                        />
                                    </InsideTab>
                                </InsideTabs>
                            }
                            {triggerSettings[0].triggerType === 'image' &&
                                <InsideTabs>
                                    <InsideTab tabTitle={__("Normal", 'premium-blocks-for-gutenberg')}>
                                        <PremiumBorder
                                            label={__("Border", "premium-blocks-for-gutenberg")}
                                            value={triggerBorder}
                                            onChange={(value) => setAttributes({ triggerBorder: value })}
                                        />
                                    </InsideTab>
                                    <InsideTab tabTitle={__("Hover", 'premium-blocks-for-gutenberg')}>
                                        <PremiumBorder
                                            label={__("Border", "premium-blocks-for-gutenberg")}
                                            value={triggerBorderH}
                                            onChange={(value) => setAttributes({ triggerBorderH: value })}
                                        />
                                    </InsideTab>
                                </InsideTabs>
                            }
                            {triggerSettings[0].triggerType === 'lottie' &&
                                <InsideTabs>
                                    <InsideTab tabTitle={__("Normal", 'premium-blocks-for-gutenberg')}>
                                        <PremiumFilters
                                            value={triggerFilter}
                                            onChange={(value) => setAttributes({ triggerFilter: value })}
                                        />
                                    </InsideTab>
                                    <InsideTab tabTitle={__("Hover", 'premium-blocks-for-gutenberg')}>
                                        <PremiumFilters
                                            value={triggerHoverFilter}
                                            onChange={(value) => setAttributes({ triggerHoverFilter: value })}
                                        />
                                    </InsideTab>
                                </InsideTabs>
                            }
                            {(triggerSettings[0].triggerType === "image" || triggerSettings[0].triggerType === "button") && (
                                <PremiumShadow
                                    value={triggerShadow}
                                    onChange={(value) => setAttributes({ triggerShadow: value })}
                                />
                            )}
                            {triggerSettings[0].triggerType === "text" &&
                                <PremiumShadow
                                    label={__("Text Shadow", 'premium-blocks-for-gutenberg')}
                                    value={triggerTextShadow}
                                    onChange={(value) => setAttributes({ triggerTextShadow: value })}
                                />
                            }
                            {(triggerSettings[0].triggerType === "button" || triggerSettings[0].triggerType === 'text') && (
                                <SpacingControl
                                    label={__("Padding", "premium-blocks-for-gutenberg")}
                                    value={triggerPadding}
                                    onChange={(value) => setAttributes({ triggerPadding: value })}
                                    showUnits={true}
                                    responsive={true}
                                />
                            )}
                        </PanelBody>
                    }
                    {contentStyles[0].showHeader &&
                        <PanelBody
                            title={__("Header", 'premium-blocks-for-gutenberg')}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            {contentStyles[0].iconType !== "none" && (
                                <ResponsiveRangeControl
                                    label={__("Size", 'premium-blocks-for-gutenberg')}
                                    value={iconSize}
                                    onChange={newValue => setAttributes({ iconSize: newValue })}
                                    units={['px', 'em', '%']}
                                    showUnit={true}
                                />)
                            }
                            <PremiumTypo
                                value={headerTypography}
                                onChange={newValue => setAttributes({ headerTypography: newValue })}
                            />
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
                            <PremiumBorder
                                label={__("Border", "premium-blocks-for-gutenberg")}
                                value={headerBorder}
                                onChange={(value) => setAttributes({ headerBorder: value })}
                            />
                        </PanelBody>
                    }
                    {contentStyles[0].showUpperClose && contentStyles[0].showHeader &&
                        <PanelBody
                            title={__("Upper Close Button", 'premium-blocks-for-gutenberg')}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <ResponsiveRangeControl
                                label={__("Width", "premium-blocks-for-gutenberg")}
                                value={upperIconWidth}
                                onChange={(value) => setAttributes({ upperIconWidth: value })}
                                min={1}
                                max={100}
                                step={1}
                                showUnit={true}
                                units={["px", "em", "%"]}
                                defaultValue={0}
                            />
                            <AdvancedPopColorControl
                                label={__("Color", 'premium-blocks-for-gutenberg')}
                                colorValue={upperStyles[0].color}
                                colorDefault={''}
                                onColorChange={newValue => saveUpperStyles({ color: newValue || "transparent" })}
                            />
                            <AdvancedPopColorControl
                                label={__(`Background Color`, 'premium-blocks-for-gutenberg')}
                                colorValue={upperStyles[0].backColor}
                                onColorChange={newvalue => saveUpperStyles({ backColor: newvalue })}
                                colorDefault={``}
                            />
                            <PremiumBorder
                                label={__("Border", "premium-blocks-for-gutenberg")}
                                value={upperBorder}
                                onChange={(value) => setAttributes({ upperBorder: value })}
                            />
                            <hr />
                            <SpacingControl
                                label={__("Padding", "premium-blocks-for-gutenberg")}
                                value={upperPadding}
                                onChange={(value) => setAttributes({ upperPadding: value })}
                                showUnits={true}
                                responsive={true}
                            />
                        </PanelBody>
                    }
                    {contentStyles[0].showLowerClose &&
                        <PanelBody
                            title={__("Lower Close Button", 'premium-blocks-for-gutenberg')}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <ResponsiveRangeControl
                                label={__("Width", "premium-blocks-for-gutenberg")}
                                value={lowerIconWidth}
                                onChange={(value) => setAttributes({ lowerIconWidth: value })}
                                min={1}
                                max={500}
                                step={1}
                                showUnit={true}
                                units={["px", "em", "%"]}
                                defaultValue={0}
                            />
                            <PremiumTypo
                                value={lowerTypography}
                                onChange={newValue => setAttributes({ lowerTypography: newValue })}
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
                                label={__("Border", "premium-blocks-for-gutenberg")}
                                value={lowerBorder}
                                onChange={(value) => setAttributes({ lowerBorder: value })}
                            />
                            <hr />
                            <SpacingControl
                                label={__("Padding", "premium-blocks-for-gutenberg")}
                                value={lowerPadding}
                                onChange={(value) => setAttributes({ lowerPadding: value })}
                                showUnits={true}
                                responsive={true}
                            />
                        </PanelBody>
                    }
                    <PanelBody
                        title={__("Modal Body", 'premium-blocks-for-gutenberg')}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <ResponsiveRangeControl
                            label={__("Width", 'premium-blocks-for-gutenberg')}
                            value={modalWidth}
                            onChange={newValue => setAttributes({ modalWidth: newValue })}
                            units={['px', 'em', '%']}
                            showUnit={true}
                            max={1500}
                        />
                        <ResponsiveRangeControl
                            label={__("Max Height", 'premium-blocks-for-gutenberg')}
                            value={modalHeight}
                            onChange={newValue => setAttributes({ modalHeight: newValue })}
                            units={['px', 'em', '%']}
                            showUnit={true}
                            max={500}
                        />
                        {"text" == modalStyles[0].contentType && (
                            <Fragment>
                                <PremiumTypo
                                    value={modalTypography}
                                    onChange={newValue => setAttributes({ modalTypography: newValue })}
                                />
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
                            </Fragment>
                        )}
                        <AdvancedPopColorControl
                            label={__("Footer Background Color", 'premium-blocks-for-gutenberg')}
                            colorValue={modalStyles[0].footerBackColor}
                            colorDefault={''}
                            onColorChange={(newValue) => saveModalStyles({ footerBackColor: newValue })}
                        />
                        <PremiumBackgroundControl
                            value={modalBackground}
                            onChange={(value) => setAttributes({ modalBackground: value })}
                        />
                        <PremiumShadow
                            value={modalShadow}
                            onChange={(value) => setAttributes({ modalShadow: value })}
                        />
                        <hr />
                        <PremiumBorder
                            label={__("Border", "premium-blocks-for-gutenberg")}
                            value={modalBorder}
                            onChange={(value) => setAttributes({ modalBorder: value })}
                        />
                        <hr />
                        <SpacingControl
                            label={__("Margin", "premium-blocks-for-gutenberg")}
                            value={modalMargin}
                            onChange={(value) => setAttributes({ modalMargin: value })}
                            showUnits={true}
                            responsive={true}
                        />
                        <SpacingControl
                            label={__("Padding", "premium-blocks-for-gutenberg")}
                            value={modalPadding}
                            onChange={(value) => setAttributes({ modalPadding: value })}
                            showUnits={true}
                            responsive={true}
                        />
                    </PanelBody>
                </InspectorTab>
                <InspectorTab key={'advance'} >
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
        </InspectorControls >
    )
}
export default Inspector;