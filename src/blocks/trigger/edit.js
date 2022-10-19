import { __ } from '@wordpress/i18n';
import classnames from "classnames";
import {
    useBlockProps,
    InnerBlocks,
    InspectorControls
} from '@wordpress/block-editor';
import {
    Fragment,
    useEffect,
    useState
} from '@wordpress/element';
import { withSelect } from '@wordpress/data'
import { PanelBody, TextControl, ToggleControl, SelectControl } from '@wordpress/components';
import {
    AdvancedColorControl as AdvancedPopColorControl,
    RadioComponent,
    InspectorTabs,
    InspectorTab,
    PremiumResponsiveTabs,
    PremiumBorder,
    SpacingComponent,
    ResponsiveRadioControl,
    Icons,
    ResponsiveRangeControl,
    ResponsiveSingleRangeControl,
    WebfontLoader,
    InsideTabs,
    InsideTab,
    PremiumTypo
} from '@pbg/components';
import {
    borderCss,
    generateBlockId,
    generateCss,
    paddingCss,
    typographyCss,
} from '@pbg/helpers';
//import GoogleFontLoader from "react-google-font-loader";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */


function Edit(props) {

    const [isEditing, setEditing] = useState(false);
    const { attributes, setAttributes, className, clientId, deviceType } = props;

    useEffect(() => {
        setAttributes({ blockId: "premium-trigger-" + generateBlockId(clientId) })
    }, [])

    const {
        triggerLabel,
        iconSize,
        iconAlignment,
        displayTriggerLabel,
        displayFloat,
        floatPosition,
        blockId,
        triggerStyles,
        canvasStyles,
        triggerSpacing,
        triggerBorder,
        vOffset,
        hOffset,
        hideDesktop,
        hideTablet,
        hideMobile,
        labelTypography
    } = attributes;

    const onChangeText = (newText) => {
        setAttributes({ triggerLabel: newText });
    };

    const setTriggerStyles = (style, value) => {
        const newTStyles = { ...triggerStyles };
        newTStyles[style] = value;
        setAttributes({ triggerStyles: newTStyles });
    }
    const setCanvasStyles = (color, value) => {
        const newCStyles = { ...canvasStyles };
        newCStyles[color] = value;
        setAttributes({ canvasStyles: newCStyles });
    };

    const loadStyles = () => {
        const styles = {};

        styles[`.${blockId} .toggle-button:hover`] = {
            'background-color': (triggerStyles?.iconBgHoverColor) + '!important',
        }
        styles[`.${blockId} .toggle-button:hover svg`] = {
            'background-color': triggerStyles?.iconHoverColor + '!important',
        }
        styles[`.${blockId} .toggle-button:hover svg`] = {
            'fill': triggerStyles?.iconHoverColor + '!important',
        }
        styles[`.${blockId} .toggle-button:hover .trigger-label`] = {
            'color': triggerStyles?.labelHoverColor + '!important',
        }
        styles[`.${blockId} .toggle-button[data-style="solid"]`] = {
            'background-color': triggerStyles?.iconBgColor + '!important',
        }
        styles[`.${blockId} .toggle-button[data-style="outline"]:hover]`] = {
            'border-color': triggerStyles?.borderHoverColor + '!important',
        }
        styles[`.${blockId} .toggle-button[data-style="solid"]:hover`] = {
            'border-color': triggerStyles?.borderHoverColor + '!important',
            'background-color': (triggerStyles?.iconBgHoverColor) + '!important',
        }
        styles[`.${blockId}.float-position-topright`] = {
            'top': (vOffset[props.deviceType] || 20) + vOffset.unit,
            'right': (hOffset[props.deviceType] || 20) + hOffset.unit,
        }
        styles[`.${blockId}.float-position-topleft`] = {
            'top': (vOffset[props.deviceType] || 20) + vOffset.unit,
            'left': (hOffset[props.deviceType] || 20) + hOffset.unit,
        }
        styles[`.${blockId}.float-position-bottomright`] = {
            'bottom': (vOffset[props.deviceType] || 20) + vOffset.unit,
            'right': (hOffset[props.deviceType] || 20) + hOffset.unit,
        }
        styles[`.${blockId}.float-position-bottomleft`] = {
            'bottom': (vOffset[props.deviceType] || 20) + vOffset.unit,
            'left': (hOffset[props.deviceType] || 20) + hOffset.unit,
        }
        styles[`.${blockId} .premium-trigger-canvas-container[data-layout="right"] .premium-popup-content`] = {
            'width': (canvasStyles?.width) + 'px',
        }
        styles[`.${blockId} .premium-trigger-canvas-container[data-layout="left"] .premium-popup-content`] = {
            'width': (canvasStyles?.width) + 'px',
        }

        return generateCss(styles);
    };

    let loadLabelGoogleFonts;

    if (labelTypography?.fontFamily !== 'Default') {
        const labelConfig = {
            google: {
                families: [labelTypography.fontFamily],
            }
        }
        loadLabelGoogleFonts = (
            <WebfontLoader config={labelConfig}>
            </WebfontLoader>
        )
    }

    return (
        <Fragment>
            <InspectorControls>
                <InspectorTabs tabs={['layout', 'style', 'advance']}>
                    <InspectorTab key={'layout'}>
                        <PanelBody
                            title={__('Trigger', 'premium-blocks-for-gutenberg')}
                            initialOpen={true}
                        >
                            <ToggleControl
                                label={__("Display Label", 'premium-blocks-for-gutenberg')}
                                checked={displayTriggerLabel}
                                onChange={value => setAttributes({ displayTriggerLabel: value })}
                            />

                            {attributes.displayTriggerLabel && (
                                <Fragment>
                                    <TextControl
                                        label={__('Trigger Label', 'premium-blocks-for-gutenberg')}
                                        value={attributes.triggerLabel}
                                        onChange={(val) => setAttributes({ triggerLabel: val })}
                                    />
                                    <RadioComponent
                                        label={__("Label Alignment", 'premium-blocks-for-gutenberg')}
                                        choices={[
                                            { value: 'left', label: __('Left', "premium-blocks-for-gutenberg"), icon: Icons.alignLeft },
                                            { value: 'right', label: __('Right', "premium-blocks-for-gutenberg"), icon: Icons.alignRight }
                                        ]}
                                        value={triggerStyles.labelPosition}
                                        onChange={newValue => setTriggerStyles('labelPosition', newValue)}
                                        showIcons={true}
                                    />
                                </Fragment>
                            )}
                            <RadioComponent
                                label={__("Icon Style", 'premium-blocks-for-gutenberg')}
                                choices={[
                                    { value: 'simple', label: __('Simple', "premium-blocks-for-gutenberg") },
                                    { value: 'outline', label: __('Outline', "premium-blocks-for-gutenberg") },
                                    { value: 'solid', label: __('Solid', "premium-blocks-for-gutenberg") }
                                ]}
                                value={triggerStyles.style}
                                onChange={newValue => setTriggerStyles('style', newValue)}
                            />
                            <ResponsiveRadioControl
                                label={__("Alignment", "premium-blocks-for-gutenberg")}
                                choices={[
                                    { value: "left", label: __("Left", "premium-blocks-for-gutenberg"), icon: Icons.alignLeft },
                                    { value: "center", label: __("Center", "premium-blocks-for-gutenberg"), icon: Icons.alignCenter },
                                    { value: "right", label: __("Right", "premium-blocks-for-gutenberg"), icon: Icons.alignRight },
                                ]}
                                value={iconAlignment}
                                onChange={(newValue) => setAttributes({ iconAlignment: newValue })}
                                showIcons={true}
                            />

                            <ToggleControl
                                label={__("Float", 'premium-blocks-for-gutenberg')}
                                checked={displayFloat}
                                onChange={value => setAttributes({ displayFloat: value })}
                            />

                            {attributes.displayFloat && (
                                <fragment>
                                    <SelectControl
                                        label={__('Position', 'premium-blocks-for-gutenberg')}
                                        value={floatPosition}
                                        onChange={newValue => setAttributes({ floatPosition: newValue })}
                                        options={[
                                            { label: __("Top Right", "premium-blocks-for-gutenberg"), value: "topright" },
                                            { label: __("Top Left", "premium-blocks-for-gutenberg"), value: "topleft" },
                                            { label: __("Bottom Right", "premium-blocks-for-gutenberg"), value: "bottomright" },
                                            { label: __("Bottom Left", "premium-blocks-for-gutenberg"), value: "bottomleft" }
                                        ]}


                                    />
                                    <ResponsiveRangeControl
                                        label={__('Vertical Offset', 'premium-blocks-for-gutenberg')}
                                        value={vOffset}
                                        onChange={value => setAttributes({ vOffset: value })}
                                        min={0}
                                        max={200}
                                        step={1}
                                        showUnit={true}
                                        units={['px', '%']}
                                        defaultValue={20}
                                    />
                                    <ResponsiveRangeControl
                                        label={__('Horizontal Offset', 'premium-blocks-for-gutenberg')}
                                        value={hOffset}
                                        onChange={value => setAttributes({ hOffset: value })}
                                        min={0}
                                        max={200}
                                        step={1}
                                        showUnit={true}
                                        units={['px', '%']}
                                        defaultValue={20}
                                    />
                                </fragment>
                            )}
                        </PanelBody>
                        <PanelBody
                            title={__('Canvas', 'premium-blocks-for-gutenberg')}
                            initialOpen={false}
                        >
                            <RadioComponent
                                choices={[
                                    { value: 'left', label: __('Left', "premium-blocks-for-gutenberg"), icon: Icons.triggerLeft },
                                    { value: 'right', label: __('Right', "premium-blocks-for-gutenberg"), icon: Icons.triggerRight },
                                    { value: 'full', label: __('Full', "premium-blocks-for-gutenberg"), icon: Icons.triggerFull }
                                ]}
                                value={canvasStyles.layout}
                                onChange={newValue => setCanvasStyles('layout', newValue)}
                                label={__("Layout style", 'premium-blocks-for-gutenberg')}
                                showIcons={true}
                            />
                        </PanelBody>
                    </InspectorTab>
                    <InspectorTab key={'style'}>
                        <PanelBody
                            title={__('Trigger', 'premium-blocks-for-gutenberg')}
                            initialOpen={true}
                        >
                            <ResponsiveRangeControl
                                label={__('Icon Size', 'premium-blocks-for-gutenberg')}
                                value={iconSize}
                                onChange={value => setAttributes({ iconSize: value })}
                                min={0}
                                max={100}
                                step={1}
                                showUnit={true}
                                units={['px']}
                                defaultValue={20}
                            />
                            <InsideTabs>
                                <InsideTab tabTitle={__("Normal", "premium-block-for-gutenberg")}>
                                    <Fragment>
                                        <AdvancedPopColorControl
                                            label={__("Icon Color", 'premium-blocks-for-gutenberg')}
                                            colorValue={triggerStyles.iconColor}
                                            colorDefault={''}
                                            onColorChange={(newValue) => setTriggerStyles('iconColor', newValue)}
                                        />
                                        {triggerStyles.style === 'solid' &&
                                            <AdvancedPopColorControl
                                                label={__("Background Color", 'premium-blocks-for-gutenberg')}
                                                colorValue={triggerStyles.iconBgColor}
                                                colorDefault={''}
                                                onColorChange={newValue => setTriggerStyles('iconBgColor', newValue)}
                                            />
                                        }
                                        <hr />
                                        {(triggerStyles.style === 'outline' || triggerStyles.style === 'solid') &&
                                            <PremiumBorder
                                                label={__('Border', 'premium-blocks-for-gutenberg')}
                                                value={triggerBorder}
                                                onChange={(value) => setAttributes({ triggerBorder: value })}
                                            />
                                        }
                                    </Fragment>
                                </InsideTab>
                                <InsideTab tabTitle={__("Hover", "premium-block-for-gutenberg")}>
                                    <Fragment>
                                        <AdvancedPopColorControl
                                            label={__("Icon Hover Color", 'premium-blocks-for-gutenberg')}
                                            colorValue={triggerStyles.iconHoverColor}
                                            colorDefault={''}
                                            onColorChange={newValue => setTriggerStyles('iconHoverColor', newValue)}
                                        />
                                        {triggerStyles.style === 'solid' &&
                                            <AdvancedPopColorControl
                                                label={__("Background Hover Color", 'premium-blocks-for-gutenberg')}
                                                colorValue={triggerStyles.iconBgHoverColor}
                                                colorDefault={''}
                                                onColorChange={newValue => setTriggerStyles('iconBgHoverColor', newValue)}
                                            />
                                        }
                                        {(triggerStyles.style === 'outline' || triggerStyles.style === 'solid') &&
                                            <AdvancedPopColorControl
                                                label={__("Border Hover Color", 'premium-blocks-for-gutenberg')}
                                                colorValue={triggerStyles.borderHoverColor}
                                                colorDefault={''}
                                                onColorChange={(newValue) => setTriggerStyles('borderHoverColor', newValue)}
                                            />
                                        }
                                    </Fragment>
                                </InsideTab>
                            </InsideTabs>
                        </PanelBody>
                        {attributes.displayTriggerLabel && (
                            <PanelBody
                                title={__('Label', 'premium-blocks-for-gutenberg')}
                                initialOpen={false}
                            >
                                <PremiumTypo
                                    value={labelTypography}
                                    onChange={(newValue) =>
                                        setAttributes({
                                            labelTypography: newValue,
                                        })
                                    }
                                />
                                <InsideTabs>
                                    <InsideTab tabTitle={__("Normal", "premium-block-for-gutenberg")}>
                                        <Fragment>
                                            <AdvancedPopColorControl
                                                label={__("Label Color", 'premium-blocks-for-gutenberg')}
                                                colorValue={triggerStyles.labelColor}
                                                colorDefault={''}
                                                onColorChange={newValue => setTriggerStyles('labelColor', newValue)}
                                            />
                                        </Fragment>
                                    </InsideTab>
                                    <InsideTab tabTitle={__("Hover", "premium-block-for-gutenberg")}>
                                        <Fragment>
                                            <AdvancedPopColorControl
                                                label={__("Label Hover Color", 'premium-blocks-for-gutenberg')}
                                                colorValue={triggerStyles.labelHoverColor}
                                                colorDefault={''}
                                                onColorChange={newValue => setTriggerStyles('labelHoverColor', newValue)}
                                            />
                                        </Fragment>
                                    </InsideTab>
                                </InsideTabs>
                            </PanelBody>
                        )}
                        <PanelBody
                            title={__('Canvas Area', 'premium-blocks-for-gutenberg')}
                            initialOpen={false}
                        >
                            <AdvancedPopColorControl
                                label={__("Background Canvas Area", 'premium-blocks-for-gutenberg')}
                                colorValue={canvasStyles.canvasBgColor}
                                colorDefault={''}
                                onColorChange={newValue => setCanvasStyles('canvasBgColor', newValue)}
                            />
                            <AdvancedPopColorControl
                                label={__("Overlay Background", 'premium-blocks-for-gutenberg')}
                                colorValue={canvasStyles.overlayBgColor}
                                colorDefault={''}
                                onColorChange={newValue => setCanvasStyles('overlayBgColor', newValue)}
                            />
                            <AdvancedPopColorControl
                                label={__("Close Icon Color", 'premium-blocks-for-gutenberg')}
                                colorValue={canvasStyles.closeIconColor}
                                colorDefault={''}
                                onColorChange={newValue => setCanvasStyles('closeIconColor', newValue)}
                            />
                            {(canvasStyles.layout === 'right' || canvasStyles.layout === 'left') &&
                                (<ResponsiveSingleRangeControl
                                    label={__("Canvas Width", 'premium-blocks-for-gutenberg')}
                                    value={canvasStyles.width}
                                    onChange={newValue => setCanvasStyles('width', newValue)}
                                    min={0}
                                    max={700}
                                    step={1}
                                    showUnit={true}
                                    units={['px']}
                                    defaultValue={400}
                                />)
                            }
                            <SpacingComponent
                                label={__('Padding', 'premium-blocks-for-gutenberg')}
                                value={triggerSpacing}
                                onChange={(value) => setAttributes({ triggerSpacing: value })}
                                showUnits={true}
                                responsive={true}
                            />
                        </PanelBody>
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

            <style
                dangerouslySetInnerHTML={{
                    __html: loadStyles()
                }}
            />

            <div {...useBlockProps({
                className: classnames(
                    className,
                    "premium-trigger",
                    `${blockId} ${isEditing ? "active" : ""} ${attributes.displayFloat ? ` float-position-${floatPosition}` : ""} ${hideDesktop} ${hideTablet} ${hideMobile}`
                ),
            })}>
                <div className={`premium-trigger-container`}>
                    <div className={`premium-trigger-icon-container`}
                        style={{
                            textAlign: iconAlignment[props.deviceType]
                        }}>
                        <a className={`toggle-button ${isEditing ? "toggled" : ""}`}
                            data-style={triggerStyles.style}
                            data-label={triggerStyles.labelPosition}
                            onClick={() => setEditing(true)
                            }
                            style={{
                                ...borderCss(triggerBorder, props.deviceType)
                            }}>
                            {triggerLabel && displayTriggerLabel &&
                                (<span
                                    className={`trigger-label`}
                                    onChange={onChangeText}
                                    value={triggerLabel}
                                    placeholder={__('Menu', 'premium-blocks-for-gutenberg')}
                                    style={{
                                        color: triggerStyles.labelColor,
                                        ...typographyCss(
                                            labelTypography,
                                            props.deviceType
                                        ),
                                    }}
                                >{triggerLabel}</span>)}
                            <svg style={{ fontSize: (iconSize[props.deviceType] || 20) + iconSize.unit, fill: `${triggerStyles.iconColor}` }} height="1.5em" viewBox="0 -53 384 384" width="1.5em" xmlns="http://www.w3.org/2000/svg">
                                <path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"></path>
                                <path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"></path>
                                <path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"></path></svg>

                        </a>
                    </div>
                    {isEditing && (
                        <div className="premium-trigger-canvas-container" role="dialog" data-layout={canvasStyles.layout} >
                            <div role="presentation" className="premium-popup-overlay" onClick={() => setEditing(false)} style={{
                                backgroundColor: `${canvasStyles.overlayBgColor}`,
                            }}></div>
                            <div className="premium-popup-content"
                                style={{
                                    ...paddingCss(triggerSpacing, deviceType),
                                    backgroundColor: `${canvasStyles.canvasBgColor}`,
                                }}>
                                <div className="premium-popup-header">
                                    <a id="premium-toggle-button-close" className="toggle-button-close">
                                        <span className="premium-close-icon" onClick={() => setEditing(false)} style={{
                                            fill: `${canvasStyles.closeIconColor}`,
                                        }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" role="img" aria-hidden="true" focusable="false"><path d="M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"></path></svg></span>
                                    </a>
                                    <div className="premium-popup-body-content">
                                        <InnerBlocks />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                {loadLabelGoogleFonts}
            </div>
        </Fragment>
    )
}
export default withSelect((select) => {
    const { __experimentalGetPreviewDeviceType = null } = select('core/edit-post');
    let deviceType = __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;

    return {
        deviceType: deviceType
    }
})(Edit)