import { PanelBody, ToggleControl } from '@wordpress/components';
import { createHigherOrderComponent } from '@wordpress/compose';
import { Fragment } from '@wordpress/element';
import { InspectorAdvancedControls, InspectorControls } from '@wordpress/block-editor';
import { AdvancedRangeControl, RadioComponent, ResponsiveSingleRangeControl } from '@pbg/components';
import { __ } from '@wordpress/i18n';
import { addFilter } from '@wordpress/hooks';
import { floatingEffectDefaults } from './helpers/defaults';

const FloatingEffect = ({ value, onChange }) => {
    const floatingEffectValue = { ...floatingEffectDefaults, ...value };
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
        disableOnSafari
    } = floatingEffectValue;

    const changeHandler = (value) => {
        const newValue = { ...floatingEffectValue, ...value };

        onChange(newValue);
    }

    const onChangeEffect = (effect, value) => {
        const newEffectValue = { ...floatingEffectValue[effect], ...value };
        console.log(newEffectValue, effect, { [effect]: newEffectValue });
        changeHandler({ [effect]: newEffectValue });
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
                                <AdvancedRangeControl
                                    label={__("Translate X", "premium-blocks-for-gutenberg")}
                                    value={translate.x}
                                    min={-100}
                                    max={100}
                                    onChange={(value) => onChangeEffect('translate', { x: value })}
                                />
                                <AdvancedRangeControl
                                    label={__("Translate Y", "premium-blocks-for-gutenberg")}
                                    value={translate.y}
                                    min={-100}
                                    max={100}
                                    onChange={(value) => onChangeEffect('translate', { y: value })}
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
                                <AdvancedRangeControl
                                    label={__("Rotate X", "premium-blocks-for-gutenberg")}
                                    value={rotate.x}
                                    min={-100}
                                    max={100}
                                    onChange={(value) => onChangeEffect('rotate', { x: value })}
                                />
                                <AdvancedRangeControl
                                    label={__("Rotate Y", "premium-blocks-for-gutenberg")}
                                    value={rotate.y}
                                    min={-100}
                                    max={100}
                                    onChange={(value) => onChangeEffect('rotate', { y: value })}
                                />
                                <AdvancedRangeControl
                                    label={__("Rotate Z", "premium-blocks-for-gutenberg")}
                                    value={rotate.z}
                                    min={-100}
                                    max={100}
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
                    </>
                )}
            </>
        )}

    </PanelBody>
}

export default FloatingEffect

const FloatingEffectControl = createHigherOrderComponent((BlockEdit) => {
    return (props) => {
        const { attributes, setAttributes, isSelected } = props;
        const { floatingEffect = {} } = attributes;
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

addFilter(
    'editor.BlockEdit',
    'pbg/floating-effect-attribute',
    FloatingEffectControl
);

const addFloatingAttribute = (settings, name) => {
    if (typeof settings.attributes !== 'undefined') {
        settings.attributes = Object.assign(settings.attributes, {
            floatingEffect: {
                type: 'object',
                default: {}
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