import { Component } from "react";
import ResponsiveSingleRangeControl from "./RangeControl/single-range-control";
const { __ } = wp.i18n;
const { SelectControl } = wp.components;
import AdvancedColorControl from './Color Control/ColorComponent'
import SpacingControl from './premium-responsive-spacing'
const { Fragment, useState } = wp.element;


export default class PremiumBorder extends Component {

    constructor(props) {
        super(props);
        let value = this.props.value
        let defaultValues = {
            'borderType': 'none',
            'borderColor': '',
            'borderWidth': {
                'top': '',
                'right': '',
                'bottom': '',
                'left': ''
            },
            'borderRadius': ''
        }
        let actualValue = value ? { ...defaultValues, ...value } : defaultValues
        this.state = {
            borderValue: actualValue,
        }
    }


    render() {
        const {

            onChange
        } = this.props;
        const { borderColor, borderType, borderWidth, borderRadius } = this.state.borderValue

        const BORDER = [
            {
                value: "none",
                label: __("None", 'premium-blocks-for-gutenberg'),
            },
            {
                value: "solid",
                label: __("Solid", 'premium-blocks-for-gutenberg'),
            },
            {
                value: "double",
                label: __("Double", 'premium-blocks-for-gutenberg'),
            },
            {
                value: "dotted",
                label: __("Dotted", 'premium-blocks-for-gutenberg'),
            },
            {
                value: "dashed",
                label: __("Dashed", 'premium-blocks-for-gutenberg'),
            },
            {
                value: "groove",
                label: __("Groove", 'premium-blocks-for-gutenberg'),
            },
        ];


        const onChangeBorder = (item, value) => {
            const inialState = { ...this.state.borderValue }

            inialState[item] = value;
            onChange(inialState)
            this.setState({ borderValue: inialState })

        }
        return (
            <div className="premium-control-toggle">
                <Fragment>
                    <SelectControl
                        label={__("Border Type", 'premium-blocks-for-gutneberg')}
                        options={BORDER}
                        value={borderType}
                        onChange={(value) => onChangeBorder('borderType', value)}
                    />
                    {"none" != borderType && (
                        <SpacingControl
                            label={__("Border Width ")}
                            value={borderWidth}
                            responsive={false}
                            showUnits={false}
                            onChange={(value) => onChangeBorder('borderWidth', { ...value })}

                        />

                    )}
                    {"none" != borderType && (
                        <Fragment>
                            <AdvancedColorControl
                                label={__("Border Color", 'premium-blocks-for-gutenberg')}
                                colorValue={borderColor}
                                colorDefault={''}
                                onColorChange={(value) => onChangeBorder('borderColor', value)}
                            />
                        </Fragment>
                    )}

                    <ResponsiveSingleRangeControl
                        label={__("Border Radius", 'premium-blocks-for-gutenberg')}
                        value={borderRadius}
                        defaultValue={0}
                        onChange={(value) => onChangeBorder('borderRadius', value)}
                        showUnit={false}
                    />
                </Fragment>
            </div>
        );
    }
}
