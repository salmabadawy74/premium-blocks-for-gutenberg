
import { withSelect } from '@wordpress/data';
import { useEffect } from 'react';
import {
    InspectorControls, useBlockProps
} from "@wordpress/block-editor";
import { Fragment } from 'react';
import classnames from "classnames";
import { __ } from '@wordpress/i18n';
import {
    PanelBody,
    TextControl,
    __experimentalNumberControl as NumberControl,
    SelectControl,
    ToggleControl
} from '@wordpress/components';
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import {
    InspectorTabs,
    InspectorTab,
    Icons,
    PremiumBorder,
    PremiumResponsiveTabs,
    PremiumBackgroundControl,
    AdvancedColorControl as AdvancedPopColorControl,
    PremiumShadow,
    WebfontLoader,
    PremiumTypo,
    SpacingComponent,
    ResponsiveRangeControl,
    AdvancedRangeControl,
    ResponsiveSingleRangeControl,
    RadioComponent
} from "@pbg/components";
import { generateBlockId, generateCss, typographyCss, borderCss, paddingCss, marginCss, gradientBackground } from '@pbg/helpers';

function Edit({ clientId, attributes, setAttributes, deviceType }) {
    const {
        blockId,
        hideDesktop,
        hideTablet,
        hideMobile,
        color,
        boxShadow,
        typography,
        border,
        padding,
        background,
        textShadow,
        text,
        style,
        enableIcon,
        iconType,
        icon,
        imageID,
        imageURL,
        jsonURL,
        loop,
        reverse,
        floatingEffects,
        rotate,
        translate,
        opacity,
        blur,
        grayscale,
        translateX,
        translateY,
        translateSpeed,
        rotateX,
        rotateY,
        rotateZ,
        rotateSpeed,
        opacityValue,
        opacitySpeed,
        blurValue,
        blurSpeed,
        grayscaleValue,
        grayscaleSpeed,
        disableOnSafari,
        hPosition,
        vPosition,
        vOffset,
        hOffset,
        rotateDegrees,
        size,
        zIndex,
        backgroundColor,
        iconColor,
        display
    } = attributes;

    useEffect(() => {
        // Set block id.
        setAttributes({
            blockId:
                "premium-my-block-" + generateBlockId(clientId),
        });
    }, []);

    const blockProps = useBlockProps({
        className: classnames(blockId, {
            ['premium-desktop-hidden']: hideDesktop,
            ['premium-tablet-hidden']: hideTablet,
            ['premium-mobile-hidden']: hideMobile,
        }),
        // style: {
        //     color: color,
        //     boxShadow: `${boxShadow?.horizontal}px ${boxShadow?.vertical}px ${boxShadow?.blur}px ${boxShadow?.color} ${boxShadow?.position}`,
        //     ...typographyCss(typography, deviceType),
        //     ...borderCss(border, deviceType),
        //     ...paddingCss(padding, deviceType),
        //     ...marginCss(margin, deviceType),
        //     ...gradientBackground(background)
        // }
    });

    let loadGoogleFonts;
    if (typography?.fontFamily !== 'Default') {
        const fontConfig = {
            google: {
                families: [typography?.fontFamily],
            },
        }
        loadGoogleFonts = (
            <WebfontLoader config={fontConfig}>
            </WebfontLoader>
        )
    }

    const loadStyles = () => {
        const styles = {};

        return generateCss(styles);
    };

    return <Fragment>
        <InspectorControls>
            <InspectorTabs tabs={["layout", "style", "advance"]}>
                <InspectorTab key={"layout"}>
                    <PanelBody
                        title={__("Display Options", 'premium-blocks-for-gutenberg')}
                        className="premium-panel-body"
                        initialOpen={true}
                    >
                        <AdvancedRangeControl
                            label={__("Value", "premium-blocks-for-gutenberg")}
                            value={opacityValue}
                            min={0}
                            max={100}
                            onChange={(value) => setAttributes({ opacityValue: value })}
                        />
                        <div className='premium-blocks__base-control'>
                            <TextControl
                                label={__('Text', 'premium-block-pro')}
                                className='pbg-tags-input'
                                value={text}
                                onChange={(val) => setAttributes({ text: val })}
                            />
                        </div>
                        <RadioComponent
                            choices={[
                                {
                                    value: "inline",
                                    label: __(
                                        "Inline",
                                        "premium-blocks-for-gutenberg"
                                    ),
                                },
                                {
                                    value: "block",
                                    label: __(
                                        "Block",
                                        "premium-blocks-for-gutenberg"
                                    ),
                                },
                            ]}
                            value={hPosition}
                            onChange={(newEffect) => setAttributes({ hPosition: newEffect })}
                            label={__(
                                "Display",
                                "premium-blocks-for-gutenberg"
                            )}
                        />
                        <RadioComponent
                            choices={[
                                {
                                    value: "left",
                                    label: __(
                                        "Left",
                                        "premium-blocks-for-gutenberg"
                                    ),
                                    icon: Icons.arrowLeft,
                                },
                                {
                                    value: "right",
                                    label: __(
                                        "Right",
                                        "premium-blocks-for-gutenberg"
                                    ),
                                    icon: Icons.arrowRight,
                                },
                            ]}
                            value={hPosition}
                            onChange={(newEffect) => setAttributes({ hPosition: newEffect })}
                            label={__(
                                "Horizontal Position",
                                "premium-blocks-for-gutenberg"
                            )}
                            showIcons={true}
                        />
                        <div className='premium-blocks__base-control'>
                            <SelectControl
                                label={__("Style", "premium-blocks-for-gutenberg")}
                                options={[
                                    {
                                        label: __("Stripe", 'premium-blocks-for-gutenberg'),
                                        value: "stripe"
                                    },
                                    {
                                        label: __("Flag", 'premium-blocks-for-gutenberg'),
                                        value: "flag"
                                    },
                                    {
                                        label: __("Triangle", 'premium-blocks-for-gutenberg'),
                                        value: "triangle"
                                    },
                                    {
                                        label: __("Circle", 'premium-blocks-for-gutenberg'),
                                        value: "circle"
                                    },
                                    {
                                        label: __("Bookmark", 'premium-blocks-for-gutenberg'),
                                        value: "bookmark"
                                    },
                                    {
                                        label: __("Custom Layout", 'premium-blocks-for-gutenberg'),
                                        value: "custom-layout"
                                    }
                                ]}
                                value={style}
                                onChange={newValue => setAttributes({ style: newValue })}
                            />
                        </div>
                        <ToggleControl
                            label={__("Icon", "premium-blocks-for-gutenberg")}
                            checked={enableIcon}
                            onChange={value => setAttributes({ enableIcon: value })}
                        />
                        {enableIcon && (
                            <>
                                <SelectControl
                                    label={__("Icon Type", 'premium-blocks-for-gutenberg')}
                                    options={[
                                        {
                                            label: __("Icon", 'premium-blocks-for-gutenberg'), value: "icon"
                                        },
                                        {
                                            label: __("Image", 'premium-blocks-for-gutenberg'), value: "image"
                                        },
                                        {
                                            label: __("Lottie", 'premium-blocks-for-gutenberg'), value: "lottie"
                                        }
                                    ]}
                                    value={iconType}
                                    onChange={newType => setAttributes({ iconType: newType })}
                                />
                                {iconType === 'icon' && (
                                    <div className='premium-blocks__base-control'>
                                        <span className='premium-control-title'>{__("Icon", 'premium-blocks-for-gutenberg')}</span>
                                        <FontIconPicker
                                            icons={iconsList}
                                            value={icon}
                                            onChange={valueIcon => setAttributes({ icon: valueIcon })}
                                            isMulti={false}
                                            noSelectedPlaceholder={__("Select Icon", 'premium-blocks-for-gutenberg')}
                                        />
                                    </div>
                                )}
                                {iconType === 'image' && (
                                    <PremiumMediaUpload
                                        type="image"
                                        imageID={imageID}
                                        imageURL={imageURL}
                                        onSelectMedia={media => selectImage(media)}
                                        onRemoveImage={() => removeImage()}
                                    />
                                )}
                                {iconType === 'lottie' && (
                                    <>
                                        <div className='premium-blocks__base-control'>
                                            <TextControl
                                                label={__('Animation JSON URL', 'premium-block-pro')}
                                                value={jsonURL}
                                                onChange={(val) => setAttributes({ jsonURL: val })}
                                            />
                                            <span className='pbg-lottie-description'>
                                                <span>{__('Get JSON code URL from', 'premium-blocks-for-gutenberg')}</span>
                                                <a href='https://lottiefiles.com/' target="_blank">{__('here', 'premium-blocks-for-gutenberg')}</a>
                                            </span>
                                        </div>
                                        <ToggleControl
                                            label={__("Loop", "premium-blocks-for-gutenberg")}
                                            checked={loop}
                                            onChange={value => setAttributes({ loop: value })}
                                        />
                                        <ToggleControl
                                            label={__("Reverse", "premium-blocks-for-gutenberg")}
                                            checked={reverse}
                                            onChange={value => setAttributes({ reverse: value })}
                                        />
                                    </>
                                )}
                            </>
                        )}
                    </PanelBody>
                    <PanelBody
                        title={__("Floating Effects", 'premium-blocks-for-gutenberg')}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <ToggleControl
                            label={__("Floating Effects", "premium-blocks-for-gutenberg")}
                            checked={floatingEffects}
                            onChange={value => setAttributes({ floatingEffects: value })}
                        />
                        {floatingEffects && (
                            <>
                                <ToggleControl
                                    label={__("Translate", "premium-blocks-for-gutenberg")}
                                    checked={translate}
                                    onChange={value => setAttributes({ translate: value })}
                                />
                                {translate && (
                                    <>
                                        <AdvancedRangeControl
                                            label={__("Translate X", "premium-blocks-for-gutenberg")}
                                            value={translateX}
                                            min={-100}
                                            max={100}
                                            onChange={(value) => setAttributes({ translateX: value })}
                                        />
                                        <AdvancedRangeControl
                                            label={__("Translate Y", "premium-blocks-for-gutenberg")}
                                            value={translateY}
                                            min={-100}
                                            max={100}
                                            onChange={(value) => setAttributes({ translateY: value })}
                                        />
                                        <ResponsiveSingleRangeControl
                                            label={__("Speed", 'premium-blocks-for-gutenberg')}
                                            value={translateSpeed}
                                            onChange={newValue => setAttributes({ translateSpeed: newValue })}
                                            showUnit={false}
                                            defaultValue={1}
                                            max={10}
                                            step={0.1}
                                        />
                                        <hr />
                                    </>
                                )}
                                <ToggleControl
                                    label={__("Rotate", "premium-blocks-for-gutenberg")}
                                    checked={rotate}
                                    onChange={value => setAttributes({ rotate: value })}
                                />
                                {rotate && (
                                    <>
                                        <AdvancedRangeControl
                                            label={__("Rotate X", "premium-blocks-for-gutenberg")}
                                            value={rotateX}
                                            min={-180}
                                            max={180}
                                            onChange={(value) => setAttributes({ rotateX: value })}
                                        />
                                        <AdvancedRangeControl
                                            label={__("Rotate Y", "premium-blocks-for-gutenberg")}
                                            value={rotateY}
                                            min={-180}
                                            max={180}
                                            onChange={(value) => setAttributes({ rotateY: value })}
                                        />
                                        <AdvancedRangeControl
                                            label={__("Rotate Z", "premium-blocks-for-gutenberg")}
                                            value={rotateZ}
                                            min={-180}
                                            max={180}
                                            onChange={(value) => setAttributes({ rotateZ: value })}
                                        />
                                        <ResponsiveSingleRangeControl
                                            label={__("Speed", 'premium-blocks-for-gutenberg')}
                                            value={rotateSpeed}
                                            onChange={newValue => setAttributes({ rotateSpeed: newValue })}
                                            showUnit={false}
                                            defaultValue={1}
                                            max={10}
                                            step={0.1}
                                        />
                                        <hr />
                                    </>
                                )}
                                <ToggleControl
                                    label={__("Opacity", "premium-blocks-for-gutenberg")}
                                    checked={opacity}
                                    onChange={value => setAttributes({ opacity: value })}
                                />
                                {opacity && (
                                    <>
                                        <AdvancedRangeControl
                                            label={__("Value", "premium-blocks-for-gutenberg")}
                                            value={opacityValue}
                                            min={0}
                                            max={100}
                                            onChange={(value) => setAttributes({ opacityValue: value })}
                                        />
                                        <ResponsiveSingleRangeControl
                                            label={__("Speed", 'premium-blocks-for-gutenberg')}
                                            value={opacitySpeed}
                                            onChange={newValue => setAttributes({ opacitySpeed: newValue })}
                                            showUnit={false}
                                            defaultValue={1}
                                            max={10}
                                            step={0.1}
                                        />
                                        <hr />
                                    </>
                                )}
                                <ToggleControl
                                    label={__("Blur", "premium-blocks-for-gutenberg")}
                                    checked={blur}
                                    onChange={value => setAttributes({ blur: value })}
                                />
                                {opacity && (
                                    <>
                                        <AdvancedRangeControl
                                            label={__("Value", "premium-blocks-for-gutenberg")}
                                            value={blurValue}
                                            min={0}
                                            max={3}
                                            onChange={(value) => setAttributes({ blurValue: value })}
                                            step={0.1}
                                        />
                                        <ResponsiveSingleRangeControl
                                            label={__("Speed", 'premium-blocks-for-gutenberg')}
                                            value={blurSpeed}
                                            onChange={newValue => setAttributes({ blurSpeed: newValue })}
                                            showUnit={false}
                                            defaultValue={1}
                                            max={10}
                                            step={0.1}
                                        />
                                        <hr />
                                    </>
                                )}
                                <ToggleControl
                                    label={__("Grayscale", "premium-blocks-for-gutenberg")}
                                    checked={grayscale}
                                    onChange={value => setAttributes({ grayscale: value })}
                                />
                                {opacity && (
                                    <>
                                        <AdvancedRangeControl
                                            label={__("Value", "premium-blocks-for-gutenberg")}
                                            value={grayscaleValue}
                                            min={0}
                                            max={100}
                                            onChange={(value) => setAttributes({ grayscaleValue: value })}
                                            step={1}
                                        />
                                        <ResponsiveSingleRangeControl
                                            label={__("Speed", 'premium-blocks-for-gutenberg')}
                                            value={grayscaleSpeed}
                                            onChange={newValue => setAttributes({ grayscaleSpeed: newValue })}
                                            showUnit={false}
                                            defaultValue={1}
                                            max={10}
                                            step={0.1}
                                        />
                                        <hr />
                                    </>
                                )}
                                <ToggleControl
                                    label={__("Disable Floating Effects On Safari", "premium-blocks-for-gutenberg")}
                                    checked={disableOnSafari}
                                    onChange={value => setAttributes({ disableOnSafari: value })}
                                />
                            </>
                        )}
                    </PanelBody>
                </InspectorTab>
                <InspectorTab key={"style"}>
                    <PanelBody
                        title={__("General Styles", 'premium-blocks-for-gutenberg')}
                        className="premium-panel-body"
                        initialOpen={true}
                    >
                        <PremiumTypo
                            components={["responsiveSize", "weight", "family", "spacing", "style", "Upper", "line", "Decoration"]}
                            value={typography}
                            onChange={newValue => setAttributes({ typography: newValue })}
                        />
                        <AdvancedPopColorControl
                            label={__("Color", "premium-blocks-for-gutenberg")}
                            colorValue={color}
                            colorDefault={""}
                            onColorChange={(value) => setAttributes({ color: value })}
                        />
                        <AdvancedPopColorControl
                            label={__("Background Color", "premium-blocks-for-gutenberg")}
                            colorValue={backgroundColor}
                            colorDefault={""}
                            onColorChange={(value) => setAttributes({ backgroundColor: value })}
                        />
                        <PremiumBackgroundControl
                            value={background}
                            onChange={(value) =>
                                setAttributes({
                                    background: value,
                                })
                            }
                        />
                        <PremiumShadow
                            label={__("Text Shadow", "premium-blocks-for-gutenberg")}
                            value={textShadow}
                            onChange={(value) => setAttributes({ textShadow: value })}
                        />
                        <PremiumShadow
                            label={__("Box Shadow", "premium-blocks-for-gutenberg")}
                            value={boxShadow}
                            onChange={(value) => setAttributes({ boxShadow: value })}
                            boxShadow={true}
                        />
                        <PremiumBorder
                            label={__("Border")}
                            value={border}
                            onChange={(value) => setAttributes({ border: value })}
                        />
                        <div className='premium-blocks__base-control'>
                            <span className='premium-control-title'>{__('Autoplay Speed', 'premium-blocks-pro')}</span>
                            <NumberControl value={zIndex} onChange={(num => setAttributes({ zIndex: Number(num) }))} />
                            <span className='pbg-description'>{__('Default is 5', 'premium-blocks-pro')}</span>
                        </div>
                        <SpacingComponent value={padding} responsive={true} showUnits={true} label={__("Padding")} onChange={(value) => setAttributes({ padding: value })} />
                    </PanelBody>
                    {enableIcon && (
                        <PanelBody
                            title={__("Icon", 'premium-blocks-for-gutenberg')}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <AdvancedPopColorControl
                                label={__("Color", "premium-blocks-for-gutenberg")}
                                colorValue={iconColor}
                                colorDefault={""}
                                onColorChange={(value) => setAttributes({ iconColor: value })}
                            />
                            <ResponsiveRangeControl
                                label={__("Size", 'premium-blocks-for-gutenberg')}
                                value={size}
                                units={['px', '%']}
                                onChange={newValue => setAttributes({ size: newValue })}
                                showUnit={true}
                                min={1}
                                max={1000}
                            />
                        </PanelBody>
                    )}
                </InspectorTab>
                <InspectorTab key={"advance"}>
                    <PremiumResponsiveTabs
                        Desktop={hideDesktop}
                        Tablet={hideTablet}
                        Mobile={hideMobile}
                        onChangeDesktop={(value) =>
                            setAttributes({
                                hideDesktop: value,
                            })
                        }
                        onChangeTablet={(value) =>
                            setAttributes({
                                hideTablet: value,
                            })
                        }
                        onChangeMobile={(value) =>
                            setAttributes({
                                hideMobile: value,
                            })
                        }
                    />
                </InspectorTab>
            </InspectorTabs>
        </InspectorControls>
        <div {...blockProps}>
            <style>{loadStyles()}</style>
            <p>Hello world (from the editor)</p>
            {loadGoogleFonts}
        </div>
    </Fragment>;
}

export default withSelect((select, props) => {
    const { __experimentalGetPreviewDeviceType = null } = select('core/edit-post');
    let deviceType = __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;

    return {
        // Editor preview device.
        deviceType: deviceType
    }
})(Edit)


