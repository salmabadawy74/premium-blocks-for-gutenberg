const { Component } = wp.element;
const { Button, Popover, ColorIndicator, ColorPicker } = wp.components;
import { Icon, closeSmall } from '@wordpress/icons';
const { __ } = wp.i18n;

class AdvancedColorControl extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            isVisible: false,
            colors: [],
            currentColor: "",
            defaultColor: "",
        };
    }
    componentDidMount() {
        if ("transparent" === this.props.colorDefault) {
            this.setState({
                currentColor:
                    undefined === this.props.colorValue ||
                        "" === this.props.colorValue ||
                        "transparent" === this.props.colorValue
                        ? ""
                        : this.props.colorValue,
            });
            this.setState({ defaultColor: "" });
        } else {
            this.setState({
                currentColor:
                    undefined === this.props.colorValue ||
                        "" === this.props.colorValue
                        ? this.props.colorDefault
                        : this.props.colorValue,
            });
            this.setState({ defaultColor: this.props.colorDefault });
        }
    }

    render() {
        const { skipModal, isDefault, onRemove, onChangeName, name, slug, resetPalette, handleColorReset } = this.props;
        const toggleVisible = () => {
            if (skipModal) {
                return;
            }
            if ("transparent" === this.props.colorDefault) {
                this.setState({
                    currentColor:
                        undefined === this.props.colorValue ||
                            "" === this.props.colorValue ||
                            "transparent" === this.props.colorValue
                            ? ""
                            : this.props.colorValue,
                });
            } else {
                this.setState({
                    currentColor:
                        undefined === this.props.colorValue ||
                            "" === this.props.colorValue
                            ? this.props.colorDefault
                            : this.props.colorValue,
                });
            }
            this.setState({ isVisible: true });
        };

        const toggleClose = () => {
            if (skipModal) {
                return;
            }
            if (this.state.isVisible === true) {
                this.setState({ isVisible: false });
            }
        };

        const isNew = wp.components.GradientPicker;

        return (
            <div className={`premium-global-color-Wrapper`}>
                <div className="premium-global-advanced-color-container">
                    <div className="premium-global-color-wrapper">
                        {(!skipModal && this.state.isVisible) && (
                            <Popover
                                position="bottom left"
                                className="premium-global-popover-color"
                                onClose={toggleClose}
                            >
                                <div
                                    className={
                                        isNew
                                            ? "premium-global-gutenberg-color-picker-new"
                                            : "premium-global-gutenberg-color-picker"
                                    }
                                >
                                    <ColorPicker
                                        color={
                                            undefined ===
                                                this.props.colorValue ||
                                                "" === this.props.colorValue ||
                                                "transparent" ===
                                                this.props.colorValue
                                                ? this.state.defaultColor
                                                : this.props.colorValue
                                        }
                                        onChangeComplete={(color) => {
                                            this.setState({
                                                currentColor: color.hex,
                                            });
                                            if (color.rgb) {
                                                this.props.onColorChange(
                                                    color.rgb.a != 1
                                                        ? "rgba(" +
                                                        color.rgb.r +
                                                        "," +
                                                        color.rgb.g +
                                                        "," +
                                                        color.rgb.b +
                                                        "," +
                                                        color.rgb.a +
                                                        ")"
                                                        : color.hex
                                                );
                                            }
                                        }}
                                    />
                                </div>
                                {!isDefault && (
                                    <div className="premium-color-name-value">
                                        <label>{__('Name', 'premium-blocks-for-gutenberg')}</label>
                                        <input
                                            onChange={({
                                                target: { value: name },
                                            }) => {
                                                onChangeName(name);
                                            }}
                                            value={name}
                                            type="text"
                                        />
                                    </div>
                                )}
                                {resetPalette && (
                                    <div className={`premium-reset-palette__Wrapper`}>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                handleColorReset();
                                            }}
                                            className=" premium-btn-reset__color is-secondary is-small"
                                        >
                                            {__("Reset", "premium-blocks-for-gutenberg")}
                                        </button>
                                        <p className={`premium-reset__description`}>{__(`This will reset the current color to the default one.`, "premium-blocks-for-gutenberg")}</p>
                                    </div>
                                )}
                            </Popover>
                        )}
                        {this.state.isVisible && (
                            <Button
                                className={`premium-global-color-picker-single ${"" === this.props.colorDefault
                                    ? "premium-global-has-alpha"
                                    : "premium-global-no-alpha"
                                    }`}
                                onClick={toggleClose}
                                data-tip={name}
                                data-for='pbg-color-preview'
                            >
                                <ColorIndicator
                                    className="premium-global-advanced-color-indicate"
                                    colorValue={
                                        "transparent" ===
                                            this.props.colorValue ||
                                            undefined ===
                                            this.props.colorValue ||
                                            "" === this.props.colorValue
                                            ? this.props.colorDefault
                                            : this.props.colorValue
                                    }
                                />
                            </Button>
                        )}
                        {!this.state.isVisible && (
                            <Button
                                className={`premium-global-color-picker-single ${"" === this.props.colorDefault
                                    ? "premium-global-has-alpha"
                                    : "premium-global-no-alpha"
                                    }`}
                                onClick={toggleVisible}
                                data-tip={name}
                                data-for='pbg-color-preview'
                            >
                                <ColorIndicator
                                    className="premium-global-advanced-color-indicate"
                                    colorValue={
                                        "transparent" ===
                                            this.props.colorValue ||
                                            undefined ===
                                            this.props.colorValue ||
                                            "" === this.props.colorValue
                                            ? this.props.colorDefault
                                            : this.props.colorValue
                                    }
                                />
                            </Button>
                        )}
                    </div>
                    {!isDefault && <span className="premium-remove-color" onClick={() => onRemove(slug)}>
                        <Icon icon={closeSmall} />
                    </span>}
                </div>
            </div>
        );
    }
}

export default AdvancedColorControl;
