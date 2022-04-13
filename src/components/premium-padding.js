import PremiumSizeUnits from "./premium-size-units";
const { __ } = wp.i18n;
import React, { Component } from "react";

class PremiumPadding extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLinked: false,
            top: this.props.paddingTop || '',
            right: this.props.paddingRight || '',
            bottom: this.props.paddingBottom || '',
            left: this.props.paddingLeft || '',

        };
        this.defaultValue = {
            isLinked: false,
            top: '',
            right: '',
            bottom: '',
            left: '',
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
        this.changeFunction = this.changeFunction.bind(this);
    }
    onButtonClick() {
        this.setState({ isLinked: !this.state.isLinked });
    }
    changeFunction(value) {
        let { top, right, bottom, left } = value;
        this.props.onChangePadTop(top);
        this.props.onChangePadRight(right);
        this.props.onChangePadBottom(bottom);
        this.props.onChangePadLeft(left);
    }

    onInputChange(event) {
        let { isLinked, top, right, bottom, left } = this.state;
        let { name, value } = event.target;
        if (isLinked) {
            top = right = bottom = left = parseInt(value) || 0;
            this.setState({ top, right, bottom, left }, () => {
                this.changeFunction(this.state);
            });
        } else {
            this.setState({ [name]: parseInt(value) || 0 }, () => {
                this.changeFunction(this.state);
            });
        }
    }

    render() {
        const { top, right, bottom, left, isLinked } = this.state;
        const { onChangePadSizeUnit = () => { }, selectedUnit } = this.props;

        return (
            <div className={`premium-spacing-responsive`}>
                {  this.props.label && <header className="premium-control-label-container">
                    <div className={`premium-slider-title-wrap`}>
                        {__("Padding", 'premium-blocks-for-gutenberg')}
                    </div>
                    {this.props.showUnits && (
                        <PremiumSizeUnits
                            activeUnit={selectedUnit}
                            onChangeSizeUnit={newValue =>
                                onChangePadSizeUnit(newValue)
                            }
                        />
                    )}
                </header>}
                <div className={`premium-spacing-responsive-outer-wrapper`}>
                    <div className={`input-wrapper premium-spacing-responsive-wrapper`}>
                        <ul className={`premium-spacing-wrapper`}>
                            <li className={`premium-spacing-input-item`}>
                                <input
                                    type="number"
                                    name="top"
                                    value={top}
                                    onChange={this.onInputChange}
                                    className={`premium-spacing-input`}
                                />
                                <span className={`premium-spacing-title`}>{__(`Top`)}</span>
                            </li>
                            <li className={`premium-spacing-input-item`}>
                                <input
                                    type="number"
                                    name="right"
                                    value={right}
                                    onChange={this.onInputChange}
                                    className={`premium-spacing-input`}
                                />
                                <span className={`premium-spacing-title`}>{__('Right')}</span>
                            </li>
                            <li className={`premium-spacing-input-item`}>
                                <input
                                    type="number"
                                    name="bottom"
                                    value={bottom}
                                    onChange={this.onInputChange}
                                    className={`premium-spacing-input`}
                                />
                                <span className={`premium-spacing-title`}>{__('Bottom')}</span>
                            </li>
                            <li className={`premium-spacing-input-item`}>
                                <input
                                    type="number"
                                    name="left"
                                    value={left}
                                    onChange={this.onInputChange}
                                    className={`premium-spacing-input`}
                                />
                                <span className={`premium-spacing-title`}>{__('Left')}</span>
                            </li>
                            <li>
                                <button
                                    className={`linked-btn is-button dashicons dashicons-${isLinked ? "admin-links connected" : "editor-unlink disconnected"
                                        }`}
                                    onClick={this.onButtonClick}
                                />
                            </li>
                        </ul>
                    </div>
                    <div className="premium-spacing-btn-reset-wrap">
                        <button
                            className="premium-reset-btn "
                            disabled={
                                JSON.stringify(this.state) ===
                                JSON.stringify(this.defaultValue)
                            }
                            onClick={(e) => {
                                e.preventDefault();
                                this.setState({ ...this.state, ...this.defaultValue })
                                this.changeFunction(this.defaultValue)
                            }}
                        ></button>
                    </div>
                </div>

            </div>
        );
    }
}
export default PremiumPadding;