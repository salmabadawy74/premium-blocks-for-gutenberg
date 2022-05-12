import { Component } from "react";
import ResponsiveSingleRangeControl from "./RangeControl/single-range-control";
const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { SelectControl } = wp.components;
import AdvancedColorControl from './Color Control/ColorComponent'
import PremiumSpacing from './premium-spacing';

export default class PremiumBorder extends Component {

    constructor(props) {
        super(props);



    }


    render() {
        const {
            borderType,
            borderColor,
            borderRadius,
            valueTop,
            valueRight,
            valueBottom,
            valueLeft,
            setAttributes,
            onChangeType = () => { },
            onChangeColor = () => { },
            onChangeRadius = () => { },
        } = this.props;

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

        const defaultValues = {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
        }

        return (
            <div className="premium-control-toggle">
                <Fragment>
                    <SelectControl
                        label={__("Border Type", 'premium-blocks-for-gutneberg')}
                        options={BORDER}
                        value={borderType}
                        onChange={onChangeType}
                    />
                    {"none" != borderType && (
                        <PremiumSpacing
                            label={__("Border Width ")}
                            topValue={valueTop}
                            rightValue={valueRight}
                            bottomValue={valueBottom}
                            leftValue={valueLeft}
                            setAttributes={setAttributes}
                            showUnits={false}
                            device={"desktop"}

                        />
                        // <div className={`premium-spacing-responsive`}>
                        //     <header className="premium-control-label-container">
                        //         <div className={`premium-control-label`}>
                        //             <strong>{__("Border Width ")}</strong>
                        //         </div>
                        //     </header>
                        //     <div className={`premium-spacing-responsive-outer-wrapper`}>
                        //         <div className={`input-wrapper premium-spacing-responsive-wrapper`}>
                        //             <ul className={`premium-spacing-wrapper`}>
                        //                 <li className={`premium-spacing-input-item`}>
                        //                     <input
                        //                         className={`premium-spacing-input`}
                        //                         type="number"
                        //                         name="top"
                        //                         value={top}
                        //                         onChange={this.onChangeInput}
                        //                     />
                        //                     <span className={`premium-spacing-title`}>{__(`Top`, 'premium-blocks-for-gutenberg')}</span>
                        //                 </li>
                        //                 <li className={`premium-spacing-input-item`}>
                        //                     <input
                        //                         className={`premium-spacing-input`}
                        //                         type="number"
                        //                         name="right"
                        //                         value={right}
                        //                         onChange={this.onChangeInput}
                        //                     />
                        //                     <span className={`premium-spacing-title`}>{__(`Right`, 'premium-blocks-for-gutenberg')}</span>
                        //                 </li>
                        //                 <li className={`premium-spacing-input-item`}>
                        //                     <input
                        //                         className={`premium-spacing-input`}
                        //                         type="number"
                        //                         name="bottom"
                        //                         value={bottom}
                        //                         onChange={this.onChangeInput}
                        //                     />
                        //                     <span className={`premium-spacing-title`}>{__(`Bottom`, 'premium-blocks-for-gutenberg')}</span>
                        //                 </li>
                        //                 <li className={`premium-spacing-input-item`}>
                        //                     <input
                        //                         className={`premium-spacing-input`}
                        //                         type="number"
                        //                         name="left"
                        //                         value={left}
                        //                         onChange={this.onChangeInput}
                        //                     />
                        //                     <span className={`premium-spacing-title`}>{__(`Right`, 'premium-blocks-for-gutenberg')}</span>
                        //                 </li>
                        //                 <li>
                        //                     <button
                        //                         className={`linked-btn components-button is-button dashicons dashicons-${isLinked ? "admin-links" : "editor-unlink"}`}
                        //                         onClick={this.onButtonClick}
                        //                     />
                        //                 </li>
                        //             </ul>
                        //         </div>
                        //         <div className="premium-spacing-btn-reset-wrap">
                        //             <button
                        //                 className="premium-reset-btn "
                        //                 disabled={JSON.stringify(this.state) === JSON.stringify(this.defaultValue)}
                        //                 onClick={(e) => {
                        //                     e.preventDefault();
                        //                     this.setState({ ...defaultValues })
                        //                     this.props.onChangeWidth({ ...defaultValues });

                        //                 }}
                        //             ></button>
                        //         </div>
                        //     </div>
                        // </div>
                    )}
                    {"none" != borderType && (
                        <Fragment>
                            <AdvancedColorControl
                                label={__("Border Color", 'premium-blocks-for-gutenberg')}
                                colorValue={borderColor}
                                colorDefault={''}
                                onColorChange={onChangeColor}
                            />
                        </Fragment>
                    )}

                    <ResponsiveSingleRangeControl
                        label={__("Border Radius", 'premium-blocks-for-gutenberg')}
                        value={borderRadius}
                        defaultValue={0}
                        onChange={onChangeRadius}
                        showUnit={false}
                    />
                </Fragment>
            </div>
        );
    }
}
