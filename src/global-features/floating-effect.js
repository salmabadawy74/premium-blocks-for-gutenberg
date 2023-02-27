import { PanelBody, ToggleControl, SelectControl, __experimentalNumberControl as NumberControl, TextControl } from '@wordpress/components';
import { createHigherOrderComponent } from '@wordpress/compose';
import { Fragment, useRef, useEffect } from '@wordpress/element';
import { InspectorControls } from '@wordpress/block-editor';
import { AdvancedRangeControl, RadioComponent, ResponsiveSingleRangeControl, AdvancedColorControl as AdvancedPopColorControl } from '@pbg/components';
import { __ } from '@wordpress/i18n';
import { addFilter } from '@wordpress/hooks';
import { floatingEffectDefaults } from './helpers/defaults';
import { checkSafariBrowser, checkSelector, getAnimationObj } from './helpers/helpers';
import anime from 'animejs/lib/anime.es.js';
import ResponsiveAdvancedRangeControl from './../components/RangeControl/responsive-advanced-range-control';
import { useSelect } from '@wordpress/data';
import { useState } from '@wordpress/element';
import { isPremiumBlock } from './helpers/helpers';

const FloatingEffect = ({ value, onChange }) => {
    const {
        enable,
        type,
        translate,
        rotate,
        scale,
        skew,
        opacity,
        background,
        blur,
        contrast,
        grayscale,
        hue,
        brightness,
        saturation,
        direction,
        loop,
        customNumber,
        easing,
        disableOnSafari,
        steps,
        customSelector
    } = value;

    const changeHandler = (newVal) => {
        const newValue = { ...value, ...newVal };

        onChange(newValue);
    }

    const onChangeEffect = (effect, newVal) => {
        const newEffectValue = value[effect];
        changeHandler({ [effect]: { ...newEffectValue, ...newVal } });
    }

    return <PanelBody
        title={__("Floating Effects", 'premium-blocks-for-gutenberg')}
        className="premium-panel-body"
        initialOpen={false}
    >
        <ToggleControl
            label={__("Floating Effects", "premium-blocks-for-gutenberg")}
            checked={enable}
            onChange={value => changeHandler({ enable: value })}
        />
        {enable && (
            <>
                <TextControl
                    label={__('Custom CSS Selector', "premium-blocks-for-gutenberg")}
                    value={customSelector}
                    onChange={value => changeHandler({ customSelector: value })}
                    help={__('Set this option if you want to apply floating effects on specfic selector inside your Block. For example, .premium-dheading-block__first', "premium-blocks-for-gutenberg")}
                />
                <RadioComponent
                    choices={[
                        {
                            value: "motion",
                            label: __(
                                "Motion",
                                "premium-blocks-for-gutenberg"
                            ),
                        },
                        {
                            value: "style",
                            label: __(
                                "Style",
                                "premium-blocks-for-gutenberg"
                            ),
                        },
                        {
                            value: "filters",
                            label: __(
                                "Filters",
                                "premium-blocks-for-gutenberg"
                            ),
                        },
                    ]}
                    value={type}
                    onChange={(newValue) =>
                        changeHandler({ type: newValue })
                    }
                    showIcons={false}
                />
                {type === 'motion' && (
                    <>
                        <ToggleControl
                            label={__("Translate", "premium-blocks-for-gutenberg")}
                            checked={translate.enable}
                            onChange={value => onChangeEffect('translate', { enable: value })}
                        />
                        {translate.enable && (
                            <>
                                <ResponsiveAdvancedRangeControl
                                    label={__("Translate X", "premium-blocks-for-gutenberg")}
                                    value={translate.x}
                                    min={-150}
                                    max={150}
                                    onChange={(value) => onChangeEffect('translate', { x: value })}
                                />
                                <ResponsiveAdvancedRangeControl
                                    label={__("Translate Y", "premium-blocks-for-gutenberg")}
                                    value={translate.y}
                                    min={-150}
                                    max={150}
                                    onChange={(val) => onChangeEffect('translate', { y: val })}
                                />
                                <ResponsiveSingleRangeControl
                                    label={__("Duration", 'premium-blocks-for-gutenberg')}
                                    value={translate.duration}
                                    onChange={newValue => onChangeEffect('translate', { duration: newValue })}
                                    showUnit={false}
                                    defaultValue={1000}
                                    max={10000}
                                    step={1}
                                />
                                <ResponsiveSingleRangeControl
                                    label={__("Delay", 'premium-blocks-for-gutenberg')}
                                    value={translate.delay}
                                    onChange={newValue => onChangeEffect('translate', { delay: newValue })}
                                    showUnit={false}
                                    defaultValue={0}
                                    max={10000}
                                    step={1}
                                />
                            </>
                        )}
                        <ToggleControl
                            label={__("Rotate", "premium-blocks-for-gutenberg")}
                            checked={rotate.enable}
                            onChange={value => onChangeEffect('rotate', { enable: value })}
                        />
                        {rotate.enable && (
                            <>
                                <ResponsiveAdvancedRangeControl
                                    label={__("Rotate X", "premium-blocks-for-gutenberg")}
                                    value={rotate.x}
                                    min={-180}
                                    max={180}
                                    onChange={(value) => onChangeEffect('rotate', { x: value })}
                                />
                                <ResponsiveAdvancedRangeControl
                                    label={__("Rotate Y", "premium-blocks-for-gutenberg")}
                                    value={rotate.y}
                                    min={-180}
                                    max={180}
                                    onChange={(value) => onChangeEffect('rotate', { y: value })}
                                />
                                <ResponsiveAdvancedRangeControl
                                    label={__("Rotate Z", "premium-blocks-for-gutenberg")}
                                    value={rotate.z}
                                    min={-180}
                                    max={180}
                                    onChange={(value) => onChangeEffect('rotate', { z: value })}
                                />
                                <ResponsiveSingleRangeControl
                                    label={__("Duration", 'premium-blocks-for-gutenberg')}
                                    value={rotate.duration}
                                    onChange={newValue => onChangeEffect('rotate', { duration: newValue })}
                                    showUnit={false}
                                    defaultValue={1000}
                                    max={10000}
                                    step={1}
                                />
                                <ResponsiveSingleRangeControl
                                    label={__("Delay", 'premium-blocks-for-gutenberg')}
                                    value={rotate.delay}
                                    onChange={newValue => onChangeEffect('rotate', { delay: newValue })}
                                    showUnit={false}
                                    defaultValue={0}
                                    max={10000}
                                    step={1}
                                />
                            </>
                        )}
                        <ToggleControl
                            label={__("Scale", "premium-blocks-for-gutenberg")}
                            checked={scale.enable}
                            onChange={value => onChangeEffect('scale', { enable: value })}
                        />
                        {scale.enable && (
                            <>
                                <ResponsiveAdvancedRangeControl
                                    label={__("Scale X", "premium-blocks-for-gutenberg")}
                                    value={scale.x}
                                    min={0}
                                    max={2}
                                    step={0.1}
                                    onChange={(value) => onChangeEffect('scale', { x: value })}
                                />
                                <ResponsiveAdvancedRangeControl
                                    label={__("Scale Y", "premium-blocks-for-gutenberg")}
                                    value={scale.y}
                                    min={0}
                                    max={2}
                                    step={0.1}
                                    onChange={(value) => onChangeEffect('scale', { y: value })}
                                />
                                <ResponsiveSingleRangeControl
                                    label={__("Duration", 'premium-blocks-for-gutenberg')}
                                    value={scale.duration}
                                    onChange={newValue => onChangeEffect('scale', { duration: newValue })}
                                    showUnit={false}
                                    defaultValue={1000}
                                    max={10000}
                                    step={1}
                                />
                                <ResponsiveSingleRangeControl
                                    label={__("Delay", 'premium-blocks-for-gutenberg')}
                                    value={scale.delay}
                                    onChange={newValue => onChangeEffect('scale', { delay: newValue })}
                                    showUnit={false}
                                    defaultValue={0}
                                    max={10000}
                                    step={1}
                                />
                            </>
                        )}
                        <ToggleControl
                            label={__("Skew", "premium-blocks-for-gutenberg")}
                            checked={skew.enable}
                            onChange={value => onChangeEffect('skew', { enable: value })}
                        />
                        {skew.enable && (
                            <>
                                <ResponsiveAdvancedRangeControl
                                    label={__("Skew X", "premium-blocks-for-gutenberg")}
                                    value={skew.x}
                                    min={-180}
                                    max={180}
                                    onChange={(value) => onChangeEffect('skew', { x: value })}
                                />
                                <ResponsiveAdvancedRangeControl
                                    label={__("Skew Y", "premium-blocks-for-gutenberg")}
                                    value={skew.y}
                                    min={-180}
                                    max={180}
                                    onChange={(value) => onChangeEffect('skew', { y: value })}
                                />
                                <ResponsiveSingleRangeControl
                                    label={__("Duration", 'premium-blocks-for-gutenberg')}
                                    value={skew.duration}
                                    onChange={newValue => onChangeEffect('skew', { duration: newValue })}
                                    showUnit={false}
                                    defaultValue={1000}
                                    max={10000}
                                    step={1}
                                />
                                <ResponsiveSingleRangeControl
                                    label={__("Delay", 'premium-blocks-for-gutenberg')}
                                    value={skew.delay}
                                    onChange={newValue => onChangeEffect('skew', { delay: newValue })}
                                    showUnit={false}
                                    defaultValue={0}
                                    max={10000}
                                    step={1}
                                />
                            </>
                        )}
                    </>
                )}
                {type === 'style' && (
                    <>
                        <ToggleControl
                            label={__("Opacity", "premium-blocks-for-gutenberg")}
                            checked={opacity.enable}
                            onChange={value => onChangeEffect('opacity', { enable: value })}
                        />
                        {opacity.enable && (
                            <>
                                <AdvancedRangeControl
                                    label={__("Opacity", "premium-blocks-for-gutenberg")}
                                    value={opacity.value}
                                    min={0}
                                    max={100}
                                    onChange={(value) => onChangeEffect('opacity', { value: value })}
                                />
                                <ResponsiveSingleRangeControl
                                    label={__("Duration", 'premium-blocks-for-gutenberg')}
                                    value={opacity.duration}
                                    onChange={newValue => onChangeEffect('opacity', { duration: newValue })}
                                    showUnit={false}
                                    defaultValue={1000}
                                    max={10000}
                                    step={1}
                                />
                                <ResponsiveSingleRangeControl
                                    label={__("Delay", 'premium-blocks-for-gutenberg')}
                                    value={opacity.delay}
                                    onChange={newValue => onChangeEffect('opacity', { delay: newValue })}
                                    showUnit={false}
                                    defaultValue={0}
                                    max={10000}
                                    step={1}
                                />
                            </>
                        )}
                        <ToggleControl
                            label={__("Background", "premium-blocks-for-gutenberg")}
                            checked={background.enable}
                            onChange={value => onChangeEffect('background', { enable: value })}
                        />
                        {background.enable && (
                            <>
                                <AdvancedPopColorControl
                                    label={__("From", "premium-blocks-for-gutenberg")}
                                    colorValue={background.value.from}
                                    colorDefault={""}
                                    onColorChange={(value) => onChangeEffect('background', { value: { ...background.value, from: value } })}
                                />
                                <AdvancedPopColorControl
                                    label={__("To", "premium-blocks-for-gutenberg")}
                                    colorValue={background.value.to}
                                    colorDefault={""}
                                    onColorChange={(value) => onChangeEffect('background', { value: { ...background.value, to: value } })}
                                />
                                <ResponsiveSingleRangeControl
                                    label={__("Duration", 'premium-blocks-for-gutenberg')}
                                    value={background.duration}
                                    onChange={newValue => onChangeEffect('background', { duration: newValue })}
                                    showUnit={false}
                                    defaultValue={1000}
                                    max={10000}
                                    step={1}
                                />
                                <ResponsiveSingleRangeControl
                                    label={__("Delay", 'premium-blocks-for-gutenberg')}
                                    value={background.delay}
                                    onChange={newValue => onChangeEffect('background', { delay: newValue })}
                                    showUnit={false}
                                    defaultValue={0}
                                    max={10000}
                                    step={1}
                                />
                            </>
                        )}
                    </>
                )}
                {type === 'filters' && (
                    <>
                        <ToggleControl
                            label={__("Blur", "premium-blocks-for-gutenberg")}
                            checked={blur.enable}
                            onChange={value => onChangeEffect('blur', { enable: value })}
                        />
                        {blur.enable && (
                            <>
                                <AdvancedRangeControl
                                    label={__("Value", "premium-blocks-for-gutenberg")}
                                    value={blur.value}
                                    min={0}
                                    max={3}
                                    step={0.1}
                                    onChange={(value) => onChangeEffect('blur', { value: value })}
                                />
                                <ResponsiveSingleRangeControl
                                    label={__("Duration", 'premium-blocks-for-gutenberg')}
                                    value={blur.duration}
                                    onChange={newValue => onChangeEffect('blur', { duration: newValue })}
                                    showUnit={false}
                                    defaultValue={1000}
                                    max={10000}
                                    step={1}
                                />
                                <ResponsiveSingleRangeControl
                                    label={__("Delay", 'premium-blocks-for-gutenberg')}
                                    value={blur.delay}
                                    onChange={newValue => onChangeEffect('blur', { delay: newValue })}
                                    showUnit={false}
                                    defaultValue={0}
                                    max={10000}
                                    step={1}
                                />
                            </>
                        )}
                        <ToggleControl
                            label={__("Contrast", "premium-blocks-for-gutenberg")}
                            checked={contrast.enable}
                            onChange={value => onChangeEffect('contrast', { enable: value })}
                        />
                        {contrast.enable && (
                            <>
                                <AdvancedRangeControl
                                    label={__("Value", "premium-blocks-for-gutenberg")}
                                    value={contrast.value}
                                    min={0}
                                    max={200}
                                    onChange={(value) => onChangeEffect('contrast', { value: value })}
                                />
                                <ResponsiveSingleRangeControl
                                    label={__("Duration", 'premium-blocks-for-gutenberg')}
                                    value={contrast.duration}
                                    onChange={newValue => onChangeEffect('contrast', { duration: newValue })}
                                    showUnit={false}
                                    defaultValue={1000}
                                    max={10000}
                                    step={1}
                                />
                                <ResponsiveSingleRangeControl
                                    label={__("Delay", 'premium-blocks-for-gutenberg')}
                                    value={contrast.delay}
                                    onChange={newValue => onChangeEffect('contrast', { delay: newValue })}
                                    showUnit={false}
                                    defaultValue={0}
                                    max={10000}
                                    step={1}
                                />
                            </>
                        )}
                        <ToggleControl
                            label={__("Grayscale", "premium-blocks-for-gutenberg")}
                            checked={grayscale.enable}
                            onChange={value => onChangeEffect('grayscale', { enable: value })}
                        />
                        {grayscale.enable && (
                            <>
                                <AdvancedRangeControl
                                    label={__("Value", "premium-blocks-for-gutenberg")}
                                    value={grayscale.value}
                                    min={0}
                                    max={100}
                                    onChange={(value) => onChangeEffect('grayscale', { value: value })}
                                />
                                <ResponsiveSingleRangeControl
                                    label={__("Duration", 'premium-blocks-for-gutenberg')}
                                    value={grayscale.duration}
                                    onChange={newValue => onChangeEffect('grayscale', { duration: newValue })}
                                    showUnit={false}
                                    defaultValue={1000}
                                    max={10000}
                                    step={1}
                                />
                                <ResponsiveSingleRangeControl
                                    label={__("Delay", 'premium-blocks-for-gutenberg')}
                                    value={grayscale.delay}
                                    onChange={newValue => onChangeEffect('grayscale', { delay: newValue })}
                                    showUnit={false}
                                    defaultValue={0}
                                    max={10000}
                                    step={1}
                                />
                            </>
                        )}
                        <ToggleControl
                            label={__("Hue", "premium-blocks-for-gutenberg")}
                            checked={hue.enable}
                            onChange={value => onChangeEffect('hue', { enable: value })}
                        />
                        {hue.enable && (
                            <>
                                <AdvancedRangeControl
                                    label={__("Value", "premium-blocks-for-gutenberg")}
                                    value={hue.value}
                                    min={0}
                                    max={360}
                                    onChange={(value) => onChangeEffect('hue', { value: value })}
                                />
                                <ResponsiveSingleRangeControl
                                    label={__("Duration", 'premium-blocks-for-gutenberg')}
                                    value={hue.duration}
                                    onChange={newValue => onChangeEffect('hue', { duration: newValue })}
                                    showUnit={false}
                                    defaultValue={1000}
                                    max={10000}
                                    step={1}
                                />
                                <ResponsiveSingleRangeControl
                                    label={__("Delay", 'premium-blocks-for-gutenberg')}
                                    value={hue.delay}
                                    onChange={newValue => onChangeEffect('hue', { delay: newValue })}
                                    showUnit={false}
                                    defaultValue={0}
                                    max={10000}
                                    step={1}
                                />
                            </>
                        )}
                        <ToggleControl
                            label={__("Brightness", "premium-blocks-for-gutenberg")}
                            checked={brightness.enable}
                            onChange={value => onChangeEffect('brightness', { enable: value })}
                        />
                        {brightness.enable && (
                            <>
                                <AdvancedRangeControl
                                    label={__("Value", "premium-blocks-for-gutenberg")}
                                    value={brightness.value}
                                    min={0}
                                    max={200}
                                    onChange={(value) => onChangeEffect('brightness', { value: value })}
                                />
                                <ResponsiveSingleRangeControl
                                    label={__("Duration", 'premium-blocks-for-gutenberg')}
                                    value={brightness.duration}
                                    onChange={newValue => onChangeEffect('brightness', { duration: newValue })}
                                    showUnit={false}
                                    defaultValue={1000}
                                    max={10000}
                                    step={1}
                                />
                                <ResponsiveSingleRangeControl
                                    label={__("Delay", 'premium-blocks-for-gutenberg')}
                                    value={brightness.delay}
                                    onChange={newValue => onChangeEffect('brightness', { delay: newValue })}
                                    showUnit={false}
                                    defaultValue={0}
                                    max={10000}
                                    step={1}
                                />
                            </>
                        )}
                        <ToggleControl
                            label={__("Saturation", "premium-blocks-for-gutenberg")}
                            checked={saturation.enable}
                            onChange={value => onChangeEffect('saturation', { enable: value })}
                        />
                        {saturation.enable && (
                            <>
                                <AdvancedRangeControl
                                    label={__("Value", "premium-blocks-for-gutenberg")}
                                    value={saturation.value}
                                    min={0}
                                    max={200}
                                    onChange={(value) => onChangeEffect('saturation', { value: value })}
                                />
                                <ResponsiveSingleRangeControl
                                    label={__("Duration", 'premium-blocks-for-gutenberg')}
                                    value={saturation.duration}
                                    onChange={newValue => onChangeEffect('saturation', { duration: newValue })}
                                    showUnit={false}
                                    defaultValue={1000}
                                    max={10000}
                                    step={1}
                                />
                                <ResponsiveSingleRangeControl
                                    label={__("Delay", 'premium-blocks-for-gutenberg')}
                                    value={saturation.delay}
                                    onChange={newValue => onChangeEffect('saturation', { delay: newValue })}
                                    showUnit={false}
                                    defaultValue={0}
                                    max={10000}
                                    step={1}
                                />
                            </>
                        )}
                    </>
                )}
                <span class="premium-control-title" style={{
                    fontWeight: 700,
                    marginBottom: 10,
                    display: 'inline-block'
                }}>{__('General Settings', 'premium-blocks-for-gutenberg')}</span>
                <SelectControl
                    label={__(
                        "Direction",
                        "premium-blocks-for-gutenberg"
                    )}
                    value={direction}
                    onChange={(newValue) =>
                        changeHandler({ direction: newValue })
                    }
                    options={[
                        {
                            value: "normal",
                            label: __("Normal", "premium-blocks-for-gutenberg"),
                        },
                        {
                            value: "reverse",
                            label: __("Reverse", "premium-blocks-for-gutenberg"),
                        },
                        {
                            value: "alternate",
                            label: __("Alternate", "premium-blocks-for-gutenberg"),
                        },
                    ]}
                />
                <SelectControl
                    label={__(
                        "Loop",
                        "premium-blocks-for-gutenberg"
                    )}
                    value={loop}
                    onChange={(newValue) =>
                        changeHandler({ loop: newValue })
                    }
                    options={[
                        {
                            value: "infinite",
                            label: __("Infinite", "premium-blocks-for-gutenberg"),
                        },
                        {
                            value: "custom",
                            label: __("Custom", "premium-blocks-for-gutenberg"),
                        },
                    ]}
                />
                {loop === 'custom' && (
                    <div className='premium-blocks__base-control'>
                        <span className='premium-control-title'>{__('Custom Number', 'premium-blocks-pro')}</span>
                        <NumberControl value={customNumber} onChange={value => changeHandler({ customNumber: value })} />
                    </div>
                )}
                <SelectControl
                    label={__(
                        "Easing",
                        "premium-blocks-for-gutenberg"
                    )}
                    value={easing}
                    onChange={(newValue) =>
                        changeHandler({ easing: newValue })
                    }
                    options={[
                        {
                            value: "linear",
                            label: __("Linear", "premium-blocks-for-gutenberg"),
                        },
                        {
                            value: "easeInOutSine",
                            label: __("easeInOutSine", "premium-blocks-for-gutenberg"),
                        },
                        {
                            value: "easeInOutExpo",
                            label: __("easeInOutExpo", "premium-blocks-for-gutenberg"),
                        },
                        {
                            value: "easeInOutQuart",
                            label: __("easeInOutQuart", "premium-blocks-for-gutenberg"),
                        },
                        {
                            value: "easeInOutCirc",
                            label: __("easeInOutCirc", "premium-blocks-for-gutenberg"),
                        },
                        {
                            value: "easeInOutBack",
                            label: __("easeInOutBack", "premium-blocks-for-gutenberg"),
                        },
                        {
                            value: "steps",
                            label: __("Steps", "premium-blocks-for-gutenberg"),
                        },
                        {
                            value: "easeInElastic(1, .6)",
                            label: __("Elastic In", "premium-blocks-for-gutenberg"),
                        },
                        {
                            value: "easeOutElastic(1, .6)",
                            label: __("Elastic Out", "premium-blocks-for-gutenberg"),
                        },
                        {
                            value: "easeInOutElastic(1, .6)",
                            label: __("Elastic In Out", "premium-blocks-for-gutenberg"),
                        },
                    ]}
                />
                {easing === 'steps' && (
                    <div className='premium-blocks__base-control'>
                        <span className='premium-control-title'>{__('Steps', 'premium-blocks-pro')}</span>
                        <NumberControl value={steps} onChange={value => changeHandler({ steps: value })} />
                    </div>
                )}
                <ToggleControl
                    label={__("Disable Floating Effects On Safari", "premium-blocks-for-gutenberg")}
                    checked={disableOnSafari}
                    onChange={value => changeHandler({ disableOnSafari: value })}
                />
            </>
        )}
    </PanelBody>
}

export default FloatingEffect

const Test = (props) => {
    const { attributes, setAttributes, isSelected } = props;
    const { floatingEffect = {} } = attributes;

    return <FloatingEffect value={floatingEffect} onChange={(value) => setAttributes({ floatingEffect: value })} />
}

addFilter(
    'Pbg.AdvancedTab',
    'pbg/entrance-animation-attribute',
    Test
);


const TestContent = (content, props) => {
    const { attributes, setAttributes, isSelected } = props;
    const { floatingEffect = {} } = attributes;
    const deviceType = useSelect((select) => {
        const { __experimentalGetPreviewDeviceType = null } = select(
            "core/edit-post"
        );
        return __experimentalGetPreviewDeviceType
            ? __experimentalGetPreviewDeviceType()
            : "Desktop";
    }, []);
    const blockRef = useRef(null);
    useEffect(() => {
        if (!floatingEffect?.enable) {
            return;
        }
        if (floatingEffect?.disableOnSafari && checkSafariBrowser()) {
            return;
        }
        const animeSettings = {
            targets: [blockRef.current],
            loop: floatingEffect.loop === 'infinite' ? true : floatingEffect.customNumber,
            direction: floatingEffect.direction,
            easing: floatingEffect.easing !== 'steps' ? floatingEffect.easing : `steps(${floatingEffect?.steps || 5})`,
        };
        const animeObj = getAnimationObj(floatingEffect, deviceType);
        let animationInstance = null;
        if (Object.keys(animeObj).length) {
            animationInstance = anime({ ...animeSettings, ...animeObj });
        }
        return () => {
            if (animationInstance) {
                animationInstance.reset();
            }
        };
    }, [isSelected, floatingEffect, deviceType]);

    return <div className='pbg-floating-effect' ref={blockRef}>
        {content}
    </div>;
}
addFilter(
    'Pbg.BlockContent',
    'pbg/entrance-animation-attribute',
    TestContent
);

const FloatingEffectControl = createHigherOrderComponent((BlockEdit) => {
    return (props) => {
        if (!PremiumFloatingEffect.allBlocks && !isPremiumBlock(props.name)) {
            return <BlockEdit {...props} />;
        }
        const { attributes, setAttributes, isSelected } = props;
        const { floatingEffect = {} } = attributes;
        const deviceType = useSelect((select) => {
            const { __experimentalGetPreviewDeviceType = null } = select(
                "core/edit-post"
            );
            return __experimentalGetPreviewDeviceType
                ? __experimentalGetPreviewDeviceType()
                : "Desktop";
        }, []);
        const [editorElement, setEditorElement] = useState(null);

        useEffect(() => {
            const postEditorDom = document.querySelector(`.editor-styles-wrapper`);
            if (postEditorDom) {
                setEditorElement(postEditorDom);
                return;
            }

            let interval = null;
            let siteEditorDom = document.querySelector(`iframe[name="editor-canvas"]`);

            if (siteEditorDom && siteEditorDom.contentDocument?.body?.childNodes?.length !== 0) {
                const editorBody = siteEditorDom.contentDocument.body;
                setEditorElement(editorBody);
            } else {
                interval = setInterval(() => {
                    siteEditorDom = document.querySelector(`iframe[name="editor-canvas"]`);
                    if (siteEditorDom) {
                        const editorBody = siteEditorDom.contentDocument.body;
                        if (editorBody && editorBody?.childNodes?.length !== 0) {
                            setEditorElement(editorBody);
                        }
                    }
                }, 200)
            }

            return () => {
                clearInterval(interval)
            }
        }, [isSelected, floatingEffect, deviceType]);

        useEffect(() => {
            if (!floatingEffect?.enable || !editorElement) {
                return;
            }
            if (floatingEffect?.disableOnSafari && checkSafariBrowser()) {
                return;
            }
            let blockElement = editorElement.querySelectorAll(`[data-effect="${floatingEffect.clientId}"]`);

            let targets;
            if (floatingEffect.customSelector && checkSelector(floatingEffect.customSelector)) {
                anime.remove(blockElement);
                blockElement = editorElement.querySelector(`[data-effect="${floatingEffect.clientId}"]`);
                targets = blockElement.querySelectorAll(floatingEffect.customSelector);
            } else {
                anime.remove(blockElement[0].querySelectorAll('*'));
            }
            const animeSettings = {
                targets: targets?.length > 0 ? targets : blockElement,
                loop: floatingEffect.loop === 'infinite' ? true : floatingEffect.customNumber,
                direction: floatingEffect.direction,
                easing: floatingEffect.easing !== 'steps' ? floatingEffect.easing : `steps(${floatingEffect?.steps || 5})`,
            };
            const animeObj = getAnimationObj(floatingEffect, deviceType);
            let animationInstance = null;
            if (Object.keys(animeObj).length) {
                animationInstance = anime({ ...animeSettings, ...animeObj });
            }
            return () => {
                if (animationInstance) {
                    animationInstance.pause();
                    animationInstance.reset();
                }
            };
        }, [isSelected, floatingEffect, deviceType, editorElement]);

        return (
            <Fragment>
                <BlockEdit {...props} />
                {isSelected &&
                    <InspectorControls>
                        <FloatingEffect value={floatingEffect} onChange={(value) => setAttributes({ floatingEffect: value })} />
                    </InspectorControls>
                }
            </Fragment>
        );
    };
}, 'FloatingEffectControl');

// addFilter(
//     'editor.BlockEdit',
//     'pbg/floating-effect-attribute',
//     FloatingEffectControl
// );

const addFloatingAttribute = (settings, name) => {
    if (!PremiumFloatingEffect.allBlocks && !isPremiumBlock(name)) {
        return settings;
    }
    if (typeof settings.attributes !== 'undefined') {
        settings.attributes = Object.assign(settings.attributes, {
            floatingEffect: {
                type: 'object',
                default: floatingEffectDefaults
            }
        });
    }
    return settings;
}

addFilter(
    'blocks.registerBlockType',
    'pbg/floating-effect-attribute',
    addFloatingAttribute
);

const withClientId = createHigherOrderComponent(
    (BlockListBlock) => {
        return (props) => {
            if (!PremiumFloatingEffect.allBlocks && !isPremiumBlock(props.name)) {
                return <BlockListBlock {...props} />;
            }
            const { attributes, isSelected } = props;
            const wrapperProps = {
                ...props.wrapperProps,
                'data-effect': props.clientId,
            };
            if (attributes?.floatingEffect?.enable) {
                attributes.floatingEffect.clientId = props.clientId;
                wrapperProps['data-effect'] = props.clientId;
            }

            return <BlockListBlock {...props} wrapperProps={wrapperProps} />;
        };
    },
    'withClientId'
);

addFilter(
    'editor.BlockListBlock',
    'pbg/client-id',
    withClientId
);
