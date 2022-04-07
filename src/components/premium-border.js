import { Component } from "react";
import ResponsiveSingleRangeControl from "./RangeControl/single-range-control";
const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { Tooltip } = wp.components;


const { SelectControl, ColorPicker } = wp.components;
import AdvancedColorControl from './Color Control/ColorComponent'

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


        const defauultValues = {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
        }

        return (
            <Fragment >
                <div className="premium-blocks-border__control " style={{ display: "flex" }}>
                    <div>
                        {this.props.label ? this.props.label : __('Border', 'premium-blocks-for-gutenberg')}
                    </div>

                    <div className="premium-blocks-border-button-list ">
                        {[['none', __("None")], ['solid', __('Solid')], ['dotted', __('Dotted')], ['dashed', __('Dashed')], ['double', __('Double')]].map((data, index) => {
                            return (
                                <Tooltip text={data[1]}>
                                    <button className={(borderType == data[0] ? 'active' : '') + ' premium-border-button'} key={index} onClick={() => onChangeType(data[0])}>
                                        <span className={`premium-blocks-border-type premium-blocks-border-type-${data[0]}`} />
                                    </button>
                                </Tooltip>
                            )
                        })
                        }
                    </div>
                    {("none" != borderType) &&
                        <Tooltip text={__('Clear')}>
                            <div className="premium-blocks-border-clear__container">
                                <span className="premium-blocks-border-clear" onClick={() => onChangeType("none")} role="button"><i className="fas fa-undo" /></span>
                            </div>
                        </Tooltip>
                    }
                </div >
                {"none" != borderType && (
                    <AdvancedColorControl
                        label={__("Border Color", 'premium-blocks-for-gutenberg')}
                        colorValue={borderColor}
                        colorDefault={''}
                        onColorChange={onChangeColor}
                    />
                )}
                {"none" != borderType && (
                    <div className={`premium-spacing-responsive`}>
                        <header className="premium-control-label-container">
                            <div className={`premium-control-label`}>
                                {__("Border Width ", 'premium-blocks-for-gutenberg')}
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
                                        <span className={`premium-spacing-title`}>{__(`Top`, 'premium-blocks-for-gutenberg')}</span>
                                    </li>
                                    <li className={`premium-spacing-input-item`}>
                                        <input
                                            className={`premium-spacing-input`}
                                            type="number"
                                            name="right"
                                            value={right}
                                            onChange={this.onChangeInput}

                                        />
                                        <span className={`premium-spacing-title`}>{__(`Right`, 'premium-blocks-for-gutenberg')}</span>
                                    </li>
                                    <li className={`premium-spacing-input-item`}>
                                        <input
                                            className={`premium-spacing-input`}
                                            type="number"
                                            name="bottom"
                                            value={bottom}
                                            onChange={this.onChangeInput}

                                        />
                                        <span className={`premium-spacing-title`}>{__(`Bottom`, 'premium-blocks-for-gutenberg')}</span>
                                    </li>
                                    <li className={`premium-spacing-input-item`}>
                                        <input
                                            className={`premium-spacing-input`}
                                            type="number"
                                            name="left"
                                            value={left}
                                            onChange={this.onChangeInput}

                                        />
                                        <span className={`premium-spacing-title`}>{__(`Right`, 'premium-blocks-for-gutenberg')}</span>
                                    </li>
                                    <li>
                                        <button
                                            className={`linked-btn components-button is-button dashicons dashicons-${isLinked ? "admin-links" : "editor-unlink"}`}
                                            onClick={this.onButtonClick}
                                        />
                                    </li>
                                </ul>
                            </div>
                            <div className="premium-spacing-btn-reset-wrap">
                                <button
                                    className="premium-reset-btn "
                                    disabled={JSON.stringify(this.state) === JSON.stringify(this.defaultValue)}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        this.setState({ ...defauultValues })
                                        const { top = 0, right, bottom, left } = this.state;
                                        this.props.onChangeWidth({ ...defauultValues });
                                    }}
                                ></button>
                            </div>
                        </div>
                    </div>
                )}
                <hr />
                < ResponsiveSingleRangeControl
                    label={__("Border Radius", 'premium-blocks-for-gutenberg')}
                    value={borderRadius}
                    defaultValue={0}
                    onChange={onChangeRadius}
                    showUnit={false}
                />
                <hr />
            </Fragment >
        );
    }
}
