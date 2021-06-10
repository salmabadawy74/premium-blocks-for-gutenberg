const {
    PanelBody,
    SelectControl,
    RangeControl
} = wp.components
const { InspectorControls } = wp.blockEditor;

const { __ } = wp.i18n

const AdvancedAnimationControls = wp.compose.createHigherOrderComponent((BlockEdit) => {

    return (props) => {
        const { Fragment } = wp.element;
        const { InspectorAdvancedControls } = wp.blockEditor;
        const { attributes, setAttributes, isSelected } = props;
        const { animationType, animationSpeed } = attributes;
        const blocks_name = props.name;
        const block_type = ['premium/accordion', 'premium/banner', 'premium/button', 'premium/countup', "premium/dheading-block", "premium/fancy-text", 'premium/lottie', 'premium/icon', 'premium/icon-box', 'premium/maps', "premium/pricing-table", "premium/container", "premium/testimonial", "premium/video-box"];

        return (
            <Fragment>
                <BlockEdit {...props} />
                {isSelected && block_type.includes(blocks_name) &&
                    <InspectorControls>
                        <PanelBody
                            title={__("Premium Animation")}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <SelectControl
                                label={__("Animation")}
                                value={animationType}
                                onChange={(value) => setAttributes({ animationType: value })}
                                options={[
                                    { value: "none", label: __("None") },
                                    { value: "fadeInDown", label: __("Fade In Down") },
                                    { value: "fadeInUp", label: __("Fade In Up") },
                                    { value: "fadeIn", label: __("Fade In") },
                                    { value: "fadeInLeft", label: __("Fade In Left") },
                                    { value: "fadeInRight", label: __("Fade In Right") },
                                    { value: "zoomInDown", label: __("Zoom In Down") },
                                    { value: "zoomInUp", label: __("Zoom In Up") },
                                    { value: "zoomIn", label: __("Zoom In") },
                                    { value: "zoomInLeft", label: __("Zoom In Left") },
                                    { value: "zoomInRight", label: __("Zoom In Right") },
                                    { value: "bounceInDown", label: __("Bouncing In Down") },
                                    { value: "bounceInUp", label: __("Bouncing In Up") },
                                    { value: "bounceIn", label: __("Bouncing In") },
                                    { value: "bounceInLeft", label: __("Bouncing In Left") },
                                    { value: "bounceInRight", label: __("Bouncing In Right") },
                                    { value: "slideInUp", label: __("Slide In Up") },
                                    { value: "slideInLeft", label: __("Slide In Left") },
                                    { value: "slideInRight", label: __("Slide In Right") },
                                    { value: "slideInDown", label: __("Slide In Down") },
                                    { value: "rotateInUpLeft", label: __("Rotating Up Left") },
                                    { value: "rotateInUpRight", label: __("Rotating Up Right") },
                                    { value: "rotateIn", label: __("Rotating In") },
                                    { value: "rotateInDownLeft", label: __("Rotating In Left") },
                                    { value: "rotateInDownRight", label: __("Rotating In Right") },
                                    { value: "bounce", label: __("Bounce") },
                                    { value: "flash", label: __("Flash") },
                                    { value: "pulse", label: __("Pulse") },
                                    { value: "rubberBand", label: __("Rubber Band") },
                                    { value: "headShake", label: __("Head Shake") },
                                    { value: "swing", label: __("Swing") },
                                    { value: "tada", label: __("Tada") },
                                    { value: "wobble", label: __("Wobble") },
                                    { value: "jello", label: __("Jolle") },
                                    { value: "lightSpeedIn", label: __("Light Speed") },
                                    { value: "rollIn", label: __("Roll In") },

                                ]}
                            />
                            <span className="components-base-control__help">
                                {__("This setting will only take effect once you are on the live page, and not while you're editing.")}
                            </span>
                            <SelectControl
                                label={__("Animation Duration")}
                                value={animationSpeed}
                                options={[{
                                    label: __("Fast"),
                                    value: "fast"
                                }, {
                                    label: __("Normal"),
                                    value: "normal"
                                }, {
                                    label: __("Slow"),
                                    value: 'slow'
                                }]}
                                onChange={(value) => setAttributes({ animationSpeed: value })}
                            />
                        </PanelBody>
                    </InspectorControls>
                }
            </Fragment>
        );
    };
}, 'AdvancedAnimationControls');

wp.hooks.addFilter(
    'editor.BlockEdit',
    'premium-blocks-for-gutenberg/advanced-animation-control',
    AdvancedAnimationControls
);

function ApplyAnimateClass(extraProps, blockType, attributes) {

    const {
        animationType,
        animationSpeed,
    } = attributes;

    if (animationType && 'none' !== animationType) {
        extraProps.className = extraProps.className + ' animation-' + animationType + "  advanced-animation";
        extraProps.className = extraProps.className + ' animation-' + animationSpeed;
    }
    return extraProps;
}


wp.hooks.addFilter(
    'blocks.getSaveContent.extraProps',
    'premium/apply-animation-class',
    ApplyAnimateClass,
);
