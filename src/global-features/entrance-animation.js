import { PanelBody, ToggleControl, SelectControl, __experimentalNumberControl as NumberControl, TextControl } from '@wordpress/components';
import { createHigherOrderComponent } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';
import { addFilter } from '@wordpress/hooks';
import { entranceAnimationDefaults } from "./helpers/defaults";
import { useSelect } from '@wordpress/data';
import { Fragment, useState, useEffect } from '@wordpress/element';
import { InspectorControls } from '@wordpress/block-editor';
import ResponsiveSelectControl from "../components/responsive-select-control";
import { ResponsiveSingleRangeControl } from '@pbg/components';
import './animation.scss';
import { isPremiumBlock } from './helpers/helpers';

const EntranceAnimation = ({ value, onChange, deviceType }) => {
    const {
        animation,
        duration,
        delay,
        curve
    } = value;

    const changeHandler = (newVal) => {
        const newValue = { ...value, ...newVal };

        onChange(newValue);
    }

    const options = [
        {
            label: 'None',
            value: '',
        },
        {
            label: 'Fading',
            options: [
                { label: 'Fade In', value: 'pbg-fade-in' },
                { label: 'Fade In Down', value: 'pbg-fade-in-down' },
                { label: 'Fade In Left', value: 'pbg-fade-in-left' },
                { label: 'Fade In Right', value: 'pbg-fade-in-right' },
                { label: 'Fade In Up', value: 'pbg-fade-in-up' },
            ],
        },
        {
            label: 'Zooming',
            options: [
                { label: 'Zoom In', value: 'pbg-zoom-in' },
                { label: 'Zoom In Down', value: 'pbg-zoom-in-down' },
                { label: 'Zoom In Left', value: 'pbg-zoom-in-left' },
                { label: 'Zoom In Right', value: 'pbg-zoom-in-right' },
                { label: 'Zoom In Up', value: 'pbg-zoom-in-up' },
            ],
        },
        {
            label: 'Bouncing',
            options: [
                { label: 'Bounce In', value: 'pbg-bounce-in' },
                { label: 'Bounce In Down', value: 'pbg-bounce-in-down' },
                { label: 'Bounce In Left', value: 'pbg-bounce-in-left' },
                { label: 'Bounce In Right', value: 'pbg-bounce-in-right' },
                { label: 'Bounce In Up', value: 'pbg-bounce-in-up' },
            ],
        },
        {
            label: 'Sliding',
            options: [
                { label: 'Slide In Down', value: 'pbg-slide-in-down' },
                { label: 'Slide In Left', value: 'pbg-slide-in-left' },
                { label: 'Slide In Right', value: 'pbg-slide-in-right' },
                { label: 'Slide In Up', value: 'pbg-slide-in-up' },
            ],
        },
        {
            label: 'Rotating',
            options: [
                { label: 'Rotate In', value: 'pbg-rotate-in' },
                { label: 'Rotate In Down Left', value: 'pbg-rotate-in-down-left' },
                { label: 'Rotate In Down Right', value: 'pbg-rotate-in-down-right' },
                { label: 'Rotate In Up Left', value: 'pbg-rotate-in-up-left' },
                { label: 'Rotate In Up Right', value: 'pbg-rotate-in-up-right' },
            ],
        },
        {
            label: 'Attention Seekers',
            options: [
                { label: 'Bounce', value: 'pbg-bounce' },
                { label: 'Flash', value: 'pbg-flash' },
                { label: 'Pulse', value: 'pbg-pulse' },
                { label: 'Rubber Band', value: 'pbg-rubber-band' },
                { label: 'Shake', value: 'pbg-shake' },
                { label: 'Head Shake', value: 'pbg-head-shake' },
                { label: 'Swing', value: 'pbg-swing' },
                { label: 'Tada', value: 'pbg-tada' },
                { label: 'Wobble', value: 'pbg-wobble' },
                { label: 'Jello', value: 'pbg-jello' },
            ]
        },
        {
            label: 'Light Speed',
            options: [
                { label: 'Light Speed In', value: 'pbg-light-speed-in' },
            ]
        },
        {
            label: 'Specials',
            options: [
                { label: 'Roll In', value: 'pbg-roll-in' },
            ]
        }
    ];
    return <PanelBody
        title={__("Entrance Animation", 'premium-blocks-for-gutenberg')}
        className="premium-panel-body"
        initialOpen={false}
    >
        <ResponsiveSelectControl
            value={animation}
            label={__(
                "Animation",
                "premium-blocks-for-gutenberg"
            )}
            options={options}
            onChange={(option) => changeHandler({ animation: option })}
        />
        {animation?.[deviceType] && (
            <>
                <SelectControl
                    label={__(
                        "Easing",
                        "premium-blocks-for-gutenberg"
                    )}
                    value={curve}
                    onChange={(newValue) =>
                        changeHandler({ curve: newValue })
                    }
                    options={[
                        { value: 'ease-in-out', label: 'ease-in-out' },
                        { value: 'ease', label: 'ease' },
                        { value: 'ease-in', label: 'ease-in' },
                        { value: 'ease-out', label: 'ease-out' },
                        { value: 'linear', label: 'linear' },
                    ]}
                />
                <ResponsiveSingleRangeControl
                    label={__("Duration", 'premium-blocks-for-gutenberg')}
                    value={duration}
                    onChange={newValue => changeHandler({ duration: newValue })}
                    showUnit={false}
                    defaultValue={0}
                    max={10000}
                    step={1}
                />
                <ResponsiveSingleRangeControl
                    label={__("Delay", 'premium-blocks-for-gutenberg')}
                    value={delay}
                    onChange={newValue => changeHandler({ delay: newValue })}
                    showUnit={false}
                    defaultValue={0}
                    max={10000}
                    step={1}
                />
            </>
        )}

    </PanelBody>
}

export default EntranceAnimation

const EntranceAnimationControl = createHigherOrderComponent((BlockEdit) => {
    return (props) => {
        if (!PremiumAnimation.allBlocks && !isPremiumBlock(props.name)) {
            return <BlockEdit {...props} />;
        }
        const { attributes, setAttributes, isSelected } = props;
        const { entranceAnimation = {} } = attributes;
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
        }, [isSelected, entranceAnimation, deviceType]);

        useEffect(() => {
            if (!entranceAnimation?.animation[deviceType] || !editorElement) {
                return;
            }
            let blockElement = editorElement.querySelector(`[data-animation="${entranceAnimation.clientId}"]`);
            blockElement.style.animationTimingFunction = entranceAnimation.curve;
            blockElement.style.animationDuration = entranceAnimation.duration ? `${entranceAnimation.duration}ms` : '';
            blockElement.style.animationDelay = entranceAnimation.delay ? `${entranceAnimation.delay}ms` : '';
        }, [isSelected, entranceAnimation, deviceType, editorElement]);

        return (
            <Fragment>
                <BlockEdit {...props} />
                {isSelected &&
                    <InspectorControls>
                        <EntranceAnimation value={entranceAnimation} deviceType={deviceType} onChange={(value) => setAttributes({ entranceAnimation: value })} />
                    </InspectorControls>
                }
            </Fragment>
        );
    };
}, 'EntranceAnimationControl');

addFilter(
    'editor.BlockEdit',
    'pbg/entrance-animation-attribute',
    EntranceAnimationControl
);

const addEntranceAnimationAttribute = (settings, name) => {
    if (!PremiumAnimation.allBlocks && !isPremiumBlock(name)) {
        return settings;
    }
    if (typeof settings.attributes !== 'undefined') {
        settings.attributes = Object.assign(settings.attributes, {
            entranceAnimation: {
                type: 'object',
                default: entranceAnimationDefaults
            }
        });
    }
    return settings;
}

addFilter(
    'blocks.registerBlockType',
    'pbg/entrance-animation-attribute',
    addEntranceAnimationAttribute
);

const withClientId = createHigherOrderComponent(
    (BlockListBlock) => {
        return (props) => {
            if (!PremiumAnimation.allBlocks && !isPremiumBlock(props.name)) {
                return <BlockListBlock {...props} />;
            }
            const { attributes, isSelected } = props;
            const wrapperProps = {
                ...props.wrapperProps,
            };
            const deviceType = useSelect((select) => {
                const { __experimentalGetPreviewDeviceType = null } = select(
                    "core/edit-post"
                );
                return __experimentalGetPreviewDeviceType
                    ? __experimentalGetPreviewDeviceType()
                    : "Desktop";
            }, []);
            if (attributes?.entranceAnimation && attributes.entranceAnimation.animation?.[deviceType]) {
                attributes.entranceAnimation.clientId = props.clientId.split("-")[4];
                wrapperProps['data-animation'] = attributes.entranceAnimation.clientId;
                const animationClass = attributes.entranceAnimation.animation?.[deviceType];
                if (animationClass) {
                    props.className += ` ${animationClass}`;
                }
            }

            return <BlockListBlock {...props} wrapperProps={wrapperProps} />;
        };
    },
    'withClientId'
);

addFilter(
    'editor.BlockListBlock',
    'pbg/entrance-animation-client-id',
    withClientId
);