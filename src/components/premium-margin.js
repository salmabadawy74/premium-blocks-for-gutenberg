import React, { Component } from "react";

import PremiumSizeUnits from "./premium-size-units";

const { __ } = wp.i18n;

class PremiumMargin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLinked: false,
            top: this.props.marginTop || '',
            right: this.props.marginRight || '',
            bottom: this.props.marginBottom || '',
            left: this.props.marginLeft || '',
            directions: this.props.directions,
            showUnits: this.props.showUnits || false,

        };
        this.defaultValue = {
            isLinked: false,
            top: '',
            right: '',
            bottom: '',
            left: '',
            directions: this.props.directions,
            showUnits: this.props.showUnits || false
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
        this.changeFunction = this.changeFunction.bind(this);
    }

    onButtonClick() {
        this.setState({ isLinked: !this.state.isLinked });
    }

    changeFunction(value) {
        let { top, right, bottom, left, directions } = value;
        if (directions.includes("all") || directions.includes("top")) {
            this.props.onChangeMarTop(top);
        }
        if (directions.includes("all") || directions.includes("right")) {
            this.props.onChangeMarRight(right);
        }
        if (directions.includes("all") || directions.includes("bottom")) {
            this.props.onChangeMarBottom(bottom);
        }
        if (directions.includes("all") || directions.includes("left")) {
            this.props.onChangeMarLeft(left);
        }
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
        const {
            top,
            right,
            bottom,
            left,
            directions,
            showUnits,
            isLinked,
            unit,
            label,
        } = this.state;

        const { onChangeMarSizeUnit = () => { }, selectedUnit } = this.props;

        return (
            <div className={`premium-spacing-responsive`}>
                {this.props.label && <header className="premium-control-label-container">
                    <div className={`premium-slider-title-wrap`}>
                        {__("Margin", 'premium-blocks-for-gutenberg')}
                    </div>
                    {showUnits && (
                        <PremiumSizeUnits
                            activeUnit={selectedUnit}
                            onChangeSizeUnit={newValue =>
                                onChangeMarSizeUnit(newValue)
                            }
                        />
                    )}
                </header>}
                <div className={`premium-spacing-responsive-outer-wrapper`}>
                    <div className={`input-wrapper premium-spacing-responsive-wrapper`}>
                        <ul className={`premium-spacing-wrapper`}>
                            {(directions.includes("all") || directions.includes("top")) && (
                                <li className={`premium-spacing-input-item`}>
                                    <input
                                        type="number"
                                        name="top"
                                        value={top}
                                        onChange={this.onInputChange}
                                        className={`premium-spacing-input`}
                                    />
                                    <span className={`premium-spacing-title`}>Top</span>
                                </li>
                            )}
                            {(directions.includes("all") || directions.includes("right")) && (
                                <li className={`premium-spacing-input-item`}>
                                    <input
                                        type="number"
                                        name="right"
                                        value={right}
                                        onChange={this.onInputChange}
                                        className={`premium-spacing-input`}
                                    />
                                    <span className={`premium-spacing-title`}>Right</span>
                                </li>
                            )}
                            {(directions.includes("all") || directions.includes("bottom")) && (
                                <li className={`premium-spacing-input-item`}>
                                    <input
                                        type="number"
                                        name="bottom"
                                        value={bottom}
                                        onChange={this.onInputChange}
                                        className={`premium-spacing-input`}
                                    />
                                    <span className={`premium-spacing-title`}>Bottom</span>
                                </li>
                            )}
                            {(directions.includes("all") || directions.includes("left")) && (
                                <li className={`premium-spacing-input-item`}>
                                    <input
                                        type="number"
                                        name="left"
                                        value={left}
                                        onChange={this.onInputChange}
                                        className={`premium-spacing-input`}
                                    />
                                    <span className={`premium-spacing-title`}>Left</span>
                                </li>
                            )}
                            {(directions.length > 1 || directions.includes("all")) && (
                                <li>
                                    <button
                                        className={`linked-btn  is-button dashicons dashicons-${isLinked ? "admin-links" : "editor-unlink"
                                            }`}
                                        onClick={this.onButtonClick}
                                    />
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className="premium-spacing-btn-reset-wrap">
                        <button
                            className="premium-reset-btn "
                            disabled={
                                JSON.stringify(this.state) ==
                                JSON.stringify(this.defaultValue)
                            }
                            onClick={(e) => {
                                e.preventDefault();
                                this.setState({ ...this.defaultValue })
                                this.changeFunction(this.defaultValue);
                            }}
                        ></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default PremiumMargin;
