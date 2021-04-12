import PremiumSizeUnits from "./premium-size-units";

const { __ } = wp.i18n;

import React, { Component } from "react";

class PremiumPadding extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLinked: false,
            top: this.props.paddingTop || 0,
            right: this.props.paddingRight || 0,
            bottom: this.props.paddingBottom || 0,
            left: this.props.paddingLeft || 0,
            showUnits: this.props.showUnits || false,
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
        this.changeFunction = this.changeFunction.bind(this);
    }

    onButtonClick() {
        this.setState({ isLinked: !this.state.isLinked });
    }
    changeFunction() {
        let { top, right, bottom, left } = this.state;
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
                this.changeFunction();
            });
        } else {
            this.setState({ [name]: parseInt(value) || 0 }, () => {
                this.changeFunction();
            });
        }
    }

    render() {
        // console.log(this.props)
        const { top, right, bottom, left, showUnits, isLinked } = this.state;

        const { onChangePadSizeUnit = () => { }, selectedUnit } = this.props;

        return (
            <div className={`premium-control-group`}>
                <div className="premium-control-label-container">
                    <div className={`premium-control-label`}>
                        <strong>{__("Padding")}</strong>
                    </div>
                    <div className={`premium-control-units`}>
                        {showUnits && (
                            <PremiumSizeUnits
                                activeUnit={selectedUnit}
                                onChangeSizeUnit={onChangePadSizeUnit}
                            />
                        )}
                    </div>
                </div>
                <div className={`premium-controls-container`}>
                    <div className={`premium-control-wrapper`}>
                        <input
                            type="number"
                            name="top"
                            value={top || 0}
                            onChange={this.onInputChange}
                        />
                        <label className={`premium-control-label`}>Top</label>
                    </div>
                    <div className={`premium-control-wrapper`}>
                        <input
                            type="number"
                            name="right"
                            value={right || 0}
                            onChange={this.onInputChange}
                        />
                        <label className={`premium-control-label`}>Right</label>
                    </div>
                    <div className={`premium-control-wrapper`}>
                        <input
                            type="number"
                            name="bottom"
                            value={bottom || 0}
                            onChange={this.onInputChange}
                        />
                        <label className={`premium-control-label`}>Bottom</label>
                    </div>
                    <div className={`premium-control-wrapper`}>
                        <input
                            type="number"
                            name="left"
                            value={left || 0}
                            onChange={this.onInputChange}
                        />
                        <label className={`premium-control-label`}>Left</label>
                    </div>
                    <div>
                        <button
                            className={`linked-btn components-button is-button dashicons dashicons-${isLinked ? "admin-links" : "editor-unlink"
                                }`}
                            onClick={this.onButtonClick}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
export default PremiumPadding;

