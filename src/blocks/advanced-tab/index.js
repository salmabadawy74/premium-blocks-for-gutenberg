const {
    SelectControl
} = wp.components

const { __ } = wp.i18n

const AdvancedAnimationControls = wp.compose.createHigherOrderComponent((BlockEdit) => {

    return (props) => {
        const { Fragment } = wp.element;
        const { InspectorAdvancedControls } = wp.blockEditor;
        const { attributes, setAttributes, isSelected } = props;
        const blocks_name = props.name;
        const block_type = ['premium/accordion', 'premium/banner', 'premium/button', 'premium/countup', "premium/dheading-block", "premium/fancy-text", 'premium/lottie', 'premium/icon', 'premium/icon-box', 'premium/maps', "premium/pricing-table", "premium/container", "premium/testimonial", "premium/video-box"];

        return (
            <Fragment>
                <BlockEdit {...props} />
                {isSelected && block_type.includes(blocks_name) &&
                    <InspectorAdvancedControls>
                        <span className="components-base-control__help">
                            {__("This setting will only take effect once you are on the live page, and not while you're editing.")}
                        </span>
                        <SelectControl
                            label={__("Animation")}
                            value={attributes.animationType}
                            onChange={(value) => setAttributes({ animationType: value })}
                            options={[
                                { value: "none", label: __("None") },
                                { value: "fadeInDown", label: __("Fade In Down") },
                                { value: "fadeInUp", label: __("Fade In Up") },
                                { value: "fadeIn", label: __("Fade In") },
                                { value: "fadeInLeft", label: __("Fade In Left") },
                                { value: "fadeInRight", label: __("Fade In Right") },
                                { value: "lightSpeedIn", label: __("Light Speed In") },
                                { value: "slideInDown", label: __("Slide In Down") },
                                { value: "slideInLeft", label: __("Slide In Left") },
                                { value: "slideInRight", label: __("Slide In Right") },
                                { value: "slideInUp", label: __("Slide In Up") },
                                { value: "bounceIn", label: __("Bounce In") },
                                { value: "bounceDown", label: __("Bounce Down") },
                                { value: "bounceLeft", label: __("Bounce Left") },
                                { value: "bounceInRight", label: __("Bounce In Right") },
                                { value: "bounceInUp", label: __("Bounce In Up") },
                                { value: "rotateIn", label: __("Rotate In") },
                                { value: "rotateInDownLeft", label: __("Rotate In Down Left") },
                            ]}
                        />
                        <SelectControl
                            label={__("Animation Duration")}
                            value={attributes.animationSpeed}
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

                    </InspectorAdvancedControls>
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
        animationhoverType,
        animationSpeed
    } = attributes;

    if (animationType && 'none' !== animationType) {
        extraProps.className = extraProps.className + ' animation-' + animationType + "  advanced-animation";
        extraProps.className = extraProps.className + ' animation-' + animationSpeed;
    }

    // if (animationhoverType && 'none' !== animationhoverType) {
    //     extraProps.className = extraProps.className + ' hover-animation-' + animationhoverType;
    // }

    return extraProps;
}

wp.hooks.addFilter(
    'blocks.getSaveContent.extraProps',
    'premium-blocks-for-gutenberg/apply-animation-class',
    ApplyAnimateClass,
);