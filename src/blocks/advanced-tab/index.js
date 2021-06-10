
import hexToRgba from "hex-to-rgba";
const {
    PanelBody,
    SelectControl,
    RangeControl, ToggleControl, TextControl
} = wp.components
const { InspectorControls, ColorPalette } = wp.blockEditor;

import {
    SortableContainer,
    SortableElement,
    arrayMove,
} from "react-sortable-hoc";



const { __ } = wp.i18n

const SortableItem = SortableElement(
    ({ edit, removeItem, newIndex, value, changeColorValue, items, repeaterColor }) => (
        <div className="premium-repeater-item">
            <div className={`premium-repeater-item__container ${newIndex}`}>
                <span className="premium-repeater-item__dragHandle"></span>
                <div
                    className="premium-repeater-item__content"
                    onClick={() => edit(newIndex)}
                >
                    {value.colorValue}{" "}
                </div>

                {items.length != 1 ? (
                    <button
                        className="premium-repeater-item__trashicon fa fa-trash"
                        onClick={() => removeItem(newIndex, value)}
                    ></button>
                ) : (
                    ""
                )}
            </div>
            <div
                className={`premium-repeater-item-controls ${value.edit ? "editable" : ""
                    }`}
            >
                <ColorPalette
                    label={__("Fancy String")}
                    value={value.colorValue}
                    onChange={(newText) => changeColorValue(newText, newIndex)}
                />
            </div>
        </div>
    )
);

const SortableList = SortableContainer(
    ({ items, removeItem, edit, changeColorValue }) => {
        return (
            <div>
                {" "}
                {items.map((value, index) => (
                    <SortableItem
                        key={`item-${value}`}
                        index={index}
                        newIndex={index}
                        value={value}
                        removeItem={removeItem}
                        edit={edit}
                        changeColorValue={changeColorValue}
                        items={items}
                    />
                ))}{" "}
            </div>
        );
    }
);




const AdvancedAnimationControls = wp.compose.createHigherOrderComponent((BlockEdit) => {

    return (props) => {
        const { Fragment } = wp.element;
        const { attributes, setAttributes, isSelected } = props;
        const { animationType, animationSpeed, showAnimation, gradSpeed, gradAngle, repeaterColor, waveEffect } = attributes;
        const blocks_name = props.name;
        const block_type = ['premium/accordion', 'premium/banner', 'premium/button', 'premium/countup', "premium/dheading-block", "premium/fancy-text", 'premium/lottie', 'premium/icon', 'premium/icon-box', 'premium/maps', "premium/pricing-table", "premium/container", "premium/testimonial", "premium/video-box"];
        const onSortEndSingle = ({ oldIndex, newIndex }) => {

            let arrayItem = repeaterColor.map((cont) => cont);

            const sortedArray = arrayMove(arrayItem, oldIndex, newIndex);

            setAttributes({
                repeaterColor: sortedArray,
            });
        };


        const edit = (index) => {
            return repeaterColor.map((item, i) => {
                if (index == i) {
                    setAttributes({
                        repeaterColor: onRepeaterChange(
                            "edit",
                            item.edit ? false : true,
                            index
                        ),
                    });
                } else {
                    setAttributes({
                        repeaterColor: onRepeaterChange("edit", false, i),
                    });
                }
            });
        };

        const shouldCancelStart = (e) => {
            // Prevent sorting from being triggered if target is input or button
            if (
                ["button", "div", "input", "textarea", "i"].indexOf(
                    e.target.tagName.toLowerCase()
                ) !== -1
            ) {
                return true; // Return true to cancel sorting
            }
        };

        const changeColorValue = (newText, newIndex) => {
            setAttributes({
                repeaterColor: onRepeaterChange("colorValue", newText, newIndex),
            });
        };

        const removeItem = (index, item) => {
            let array = repeaterColor
                .map((cont, currIndex) => {
                    return cont;
                })
                .filter((f, i) => i != index);
            setAttributes({
                repeaterColor: array,
            });
        };

        const onRepeaterChange = (attr, value, index) => {

            return repeaterColor.map(function (item, currIndex) {
                if (index == currIndex) {
                    item[attr] = value;
                }
                return item;
            });
        };

        const addNewColor = () => {
            setAttributes({
                repeaterColor: repeaterColor.concat([
                    {
                        colorValue: __("Select Color"),
                        edit: true,
                    },
                ]),
            });
        };

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
                            <ToggleControl
                                label={__(`Animation Gradient`)}
                                checked={showAnimation}
                                onChange={(value) => setAttributes({ showAnimation: value })}
                            />
                            <SortableList
                                items={repeaterColor}
                                onSortEnd={(oldIndex, newIndex) => onSortEndSingle(oldIndex, newIndex)}
                                removeItem={(value) => removeItem(value)}
                                edit={(value) => edit(value)}
                                shouldCancelStart={shouldCancelStart}
                                changeColorValue={changeColorValue}
                                helperClass="premium-fancy-text__sortableHelper"
                            />

                            <div className="premium-repeater-btn__wrap">
                                <button
                                    className={"premium-repeater-btn"}
                                    onClick={() => addNewColor()}
                                >
                                    <i className="dashicons dashicons-plus premium-repeater__icon" />
                                    <span>{__('Add New Item')}</span>
                                </button>
                            </div>
                            <ToggleControl
                                label={__("Enable Wave Effect")}
                                checked={waveEffect}
                                onChange={(value) => setAttributes({ waveEffect: value })}

                            />
                            <RangeControl
                                label={__("Animation Speed")}
                                value={gradSpeed}
                                onChange={(value) => setAttributes({ gradSpeed: value })}
                            />
                            <RangeControl
                                label={__("Gradient Angle")}
                                value={gradAngle}
                                onChange={(value) => setAttributes({ gradAngle: value })}
                            />
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
        waveEffect, showAnimation
    } = attributes;

    if (animationType && 'none' !== animationType) {
        extraProps.className = extraProps.className + ' animation-' + animationType + "  advanced-animation";
        extraProps.className = extraProps.className + ' animation-' + animationSpeed;
    }
    if (showAnimation) {
        extraProps.className = extraProps.className + 'premium-gradient-yes';
    }
    if (waveEffect) {
        extraProps.className = extraProps.className + 'premium-gradient-wave-yes';

    }
    return extraProps;
}
function addBackgroundColorStyle(extraProps, blockType, attributes) {
    const { repeaterColor, gradAngle, gradSpeed, showAnimation } = attributes;
    const Colors = repeaterColor.map((color, index) => {
        return color.colorValue
    })
    if (showAnimation) {
        return lodash.assign(extraProps, {
            style: {
                background: `linear-gradient(${gradAngle}deg, ${Colors.join(',')})`,
                textAlign: `center`,
                animationDuration: `${gradSpeed}s`,
            }
        });
    }
}


wp.hooks.addFilter(
    'blocks.getSaveContent.extraProps',
    'premium/apply-animation-class',
    ApplyAnimateClass,
);
wp.hooks.addFilter(
    'blocks.getSaveContent.extraProps',
    'premium/apply-animation-style',
    addBackgroundColorStyle
);
