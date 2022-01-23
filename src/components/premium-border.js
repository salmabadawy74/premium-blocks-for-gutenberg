import { Component } from "react";
import PremiumRangeControl from './premium-range-control';

const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { SelectControl, ColorPicker } = wp.components;

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

        const defauultValues = {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
        }

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
                        <div className={`premium-spacing-responsive`}>
                            <header className="premium-control-label-container">
                                <div className={`premium-control-label`}>
                                    <strong>{__("Border Width ")}</strong>
                                </div>
                            </header>
                            <div className={`premium-spacing-responsive-outer-wrapper`}>
                                <div className={`input-wrapper premium-spacing-responsive-wrapper`}>
                                    <ul className={`premium-spacing-wrapper`}>
                                        <li className={`premium-spacing-input-item`}>
                                            <input
                                                className={`premium-spacing-input`}
                                                type="number"
                                                name="top"
                                                value={top}
                                                onChange={this.onChangeInput}
                                            />
                                            <span className={`premium-spacing-title`}>Top</span>
                                        </li>
                                        <li className={`premium-spacing-input-item`}>
                                            <input
                                                className={`premium-spacing-input`}
                                                type="number"
                                                name="right"
                                                value={right}
                                                onChange={this.onChangeInput}
                                            />
                                            <span className={`premium-spacing-title`}>Right</span>
                                        </li>
                                        <li className={`premium-spacing-input-item`}>
                                            <input
                                                className={`premium-spacing-input`}
                                                type="number"
                                                name="bottom"
                                                value={bottom}
                                                onChange={this.onChangeInput}
                                            />
                                            <span className={`premium-spacing-title`}>Bottom</span>
                                        </li>
                                        <li className={`premium-spacing-input-item`}>
                                            <input
                                                className={`premium-spacing-input`}
                                                type="number"
                                                name="left"
                                                value={left}
                                                onChange={this.onChangeInput}
                                            />
                                            <span className={`premium-spacing-title`}>Right</span>
                                        </li>
                                        <li>
                                            <button
                                                className={`linked-btn components-button is-button dashicons dashicons-${isLinked ? "admin-links" : "editor-unlink"
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
                                            this.setState({ ...defauultValues })
                                            const { top = 0, right, bottom, left } = this.state;
                                            this.props.onChangeWidth({ ...defauultValues });
                                            console.log(this.state)
                                        }}
                                    ></button>
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

                    <PremiumRangeControl
                        label={__("Border Radius")}
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
