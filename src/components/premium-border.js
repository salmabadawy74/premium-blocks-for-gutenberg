 import { Component } from "react";

const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { SelectControl, RangeControl, ColorPicker } = wp.components;

export default class PremiumBorder extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLinked: false,
            top: this.props.top || 0,
            right: this.props.right || 0,
            bottom: this.props.bottom || 0,
            left: this.props.left || 0,
        };

        this.onChangeInput = this.onChangeInput.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onChangeInput(event) {

        let { top, right, bottom, left, isLinked } = this.state;

        let { name, value } = event.target;

        if (isLinked) {
            top = right = bottom = left = parseInt(value) || 0;
            this.setState({ top, right, bottom, left }, () => {
                const { top, right, bottom, left } = this.state;
                this.props.onChangeWidth({ top, right, bottom, left });
            });
        } else {
            this.setState({ [name]: parseInt(value) || 0 }, () => {
                this.props.onChangeWidth({ top, right, bottom, left });
            });
        }

    }

    onButtonClick() {
        this.setState({ isLinked: !this.state.isLinked });
    }

    render() {
        const {
            borderType,
            borderColor,
            borderRadius,
            onChangeType = () => { },
            onChangeColor = () => { },
            onChangeRadius = () => { },
        } = this.props;

        const { top, right, bottom, left, isLinked } = this.state;

        const BORDER = [
            {
                value: "none",
                label: "None",
            },
            {
                value: "solid",
                label: "Solid",
            },
            {
                value: "double",
                label: "Double",
            },
            {
                value: "dotted",
                label: "Dotted",
            },
            {
                value: "dashed",
                label: "Dashed",
            },
            {
                value: "groove",
                label: "Groove",
            },
        ];

        return (
            <div className="premium-control-toggle">
                <Fragment>
                    <SelectControl
                        label={__("Border Type")}
                        options={BORDER}
                        value={borderType}
                        onChange={onChangeType}
                    />
                    {"none" != borderType && (
                        <div className={`premium-control-group`}>
                            <div className="premium-control-label-container">
                                <div className={`premium-control-label`}>
                                    <strong>{__("Border Width ")}</strong>
                                </div>
                            </div>
                            <div className={`premium-controls-container`}>
                                <div className={`premium-control-wrapper`}>
                                    <input
                                        type="number"
                                        name="top"
                                        value={top}
                                        onChange={this.onChangeInput}
                                    />
                                    <label className={`premium-control-label`}>Top</label>
                                </div>

                                <div className={`premium-control-wrapper`}>
                                    <input
                                        type="number"
                                        name="right"
                                        value={right}
                                        onChange={this.onChangeInput}
                                    />
                                    <label className={`premium-control-label`}>Right</label>
                                </div>

                                <div className={`premium-control-wrapper`}>
                                    <input
                                        type="number"
                                        name="bottom"
                                        value={bottom}
                                        onChange={this.onChangeInput}
                                    />
                                    <label className={`premium-control-label`}>Bottom</label>
                                </div>

                                <div className={`premium-control-wrapper`}>
                                    <input
                                        type="number"
                                        name="left"
                                        value={left}
                                        onChange={this.onChangeInput}
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
                    )}
                    {"none" != borderType && (
                        <Fragment>
                            <p>{__("Border Color")}</p>
                            <ColorPicker
                                color={borderColor}
                                onChangeComplete={onChangeColor}
                                disableAlpha
                            />
                        </Fragment>
                    )}
                    <RangeControl
                        label={__("Border Radius")}
                        value={borderRadius}
                        min="0"
                        max="150"
                        onChange={onChangeRadius}
                    />
                </Fragment>
            </div>
        );
    }
}
