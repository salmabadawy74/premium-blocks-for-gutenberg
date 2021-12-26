import React, { Component } from "react";

import PremiumSizeUnits from "./premium-size-units";

const { __ } = wp.i18n;

class PremiumMargin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLinked: false,
            top: this.props.marginTop || 0,
            right: this.props.marginRight || 0,
            bottom: this.props.marginBottom || 0,
            left: this.props.marginLeft || 0,
            directions: this.props.directions,
            showUnits: this.props.showUnits || false,
        };
        this.defaultValue = {
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

    changeFunction() {
        let { top, right, bottom, left, directions } = this.state;
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
                this.changeFunction();
            });
        } else {
            this.setState({ [name]: parseInt(value) || 0 }, () => {
                this.changeFunction();
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
        } = this.state;

        const { onChangeMarSizeUnit = () => { }, selectedUnit } = this.props;

        return (
            <div className={`kmt-spacing-responsive`}>
                <header className="premium-control-label-container">
                    <div className={`premium-control-label`}>
                        <strong>{__("Margin")}</strong>
                    </div>
                    <div className={`premium-control-units`}>
                        {showUnits && (
                            <PremiumSizeUnits
                                activeUnit={selectedUnit}
                                onChangeSizeUnit={onChangeMarSizeUnit}
                            />
                        )}
                    </div>
                </header>
                <div className={`kmt-spacing-responsive-outer-wrapper`}>
                    <div className={`input-wrapper kmt-spacing-responsive-wrapper`}>
                        <ul className={`kmt-spacing-wrapper`}>
                            {(directions.includes("all") || directions.includes("top")) && (
                                <li className={`kmt-spacing-input-item`}>
                                    <input
                                        type="number"
                                        name="top"
                                        value={top || 0}
                                        onChange={this.onInputChange}
                                        className={`kmt-spacing-input`}
                                    />
                                    <span className={`kmt-spacing-title`}>Top</span>
                                </li>
                            )}
                            {(directions.includes("all") || directions.includes("right")) && (
                                <li className={`kmt-spacing-input-item`}>
                                    <input
                                        type="number"
                                        name="right"
                                        value={right || 0}
                                        onChange={this.onInputChange}
                                        className={`kmt-spacing-input`}
                                    />
                                    <span className={`kmt-spacing-title`}>Right</span>
                                </li>
                            )}
                            {(directions.includes("all") || directions.includes("bottom")) && (
                                <li className={`kmt-spacing-input-item`}>
                                    <input
                                        type="number"
                                        name="bottom"
                                        value={bottom || 0}
                                        onChange={this.onInputChange}
                                        className={`kmt-spacing-input`}
                                    />
                                    <span className={`kmt-spacing-title`}>Bottom</span>
                                </li>
                            )}
                            {(directions.includes("all") || directions.includes("left")) && (
                                <li className={`kmt-spacing-input-item`}>
                                    <input
                                        type="number"
                                        name="left"
                                        value={left || 0}
                                        onChange={this.onInputChange}
                                        className={`kmt-spacing-input`}
                                    />
                                    <span className={`kmt-spacing-title`}>Left</span>
                                </li>
                            )}
                            {(directions.length > 1 || directions.includes("all")) && (
                                <li>
                                    <button
                                        className={`linked-btn components-button is-button dashicons dashicons-${isLinked ? "admin-links" : "editor-unlink"
                                            }`}
                                        onClick={this.onButtonClick}
                                    />
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className="kmt-spacing-btn-reset-wrap">
                        <button
                            className="kmt-reset-btn "
                            disabled={
                                JSON.stringify(this.state) ===
                                JSON.stringify(this.defaultValue)
                            }
                            onClick={(e) => {
                                e.preventDefault();
                                this.setState({ ...this.state, ...this.defaultValue })
                            }}
                        ></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default PremiumMargin;
