import get from 'lodash/get';
import map from 'lodash/map';
import classnames from "classnames";
const { __, sprintf } = wp.i18n;
const { Component } = wp.element;
const { Button, Popover, ColorIndicator, ColorPicker, Tooltip } = wp.components;
const { withSelect } = wp.data;
import { colord } from 'colord'


class AdvancedColorControl extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            isVisible: false,
            colors: [],
            currentColor: '',
            defaultColor: '',
        };
    }
    componentDidMount() {
        if ('transparent' === this.props.colorDefault) {
            this.setState({ currentColor: (undefined === this.props.colorValue || '' === this.props.colorValue || 'transparent' === this.props.colorValue ? '' : this.props.colorValue) });
            this.setState({ defaultColor: '' });
        } else {
            this.setState({ currentColor: (undefined === this.props.colorValue || '' === this.props.colorValue ? this.props.colorDefault : this.props.colorValue) });
            this.setState({ defaultColor: this.props.colorDefault });
        }
    }

    render() {

        const toggleVisible = () => {
            if ('transparent' === this.props.colorDefault) {
                this.setState({ currentColor: (undefined === this.props.colorValue || '' === this.props.colorValue || 'transparent' === this.props.colorValue ? '' : this.props.colorValue) });
            } else {
                this.setState({ currentColor: (undefined === this.props.colorValue || '' === this.props.colorValue ? this.props.colorDefault : this.props.colorValue) });
            }
            this.setState({ isVisible: true });
        };

        const toggleClose = () => {
            if (this.state.isVisible === true) {
                this.setState({ isVisible: false });
            }
        };

        const normalizeColor = (color) => {
            const parsedColor = colord(color)

            if (!parsedColor.parsed) {
                return color
            }

            if (parsedColor.rgba.a === 1) {
                return parsedColor.toHex()
            }

            return parsedColor.toRgbString()
        }

        const isNew = wp.components.GradientPicker;

        return (
            <div className="premium-color-popover-container">
                <div className="premium-advanced-color-container">
                    {this.props.label && (
                        <h2 className="premium-color-label">{this.props.label}</h2>
                    )}
                    <div className="premium-color-wrapper">
                        {this.state.isVisible && (
                            <Popover position="bottom left" className="premium-popover-color" onClose={toggleClose}>

                                <div className={isNew
                                    ? 'premium-gutenberg-color-picker-new'
                                    : 'premium-gutenberg-color-picker'}>
                                    {!this.props.disableCustomColors && (
                                        <ColorPicker
                                            color={(undefined === this.props.colorValue || '' === this.props.colorValue || 'transparent' === this.props.colorValue ? this.state.defaultColor : this.props.colorValue)}
                                            onChangeComplete={(color) => {
                                                this.setState({ currentColor: color.hex })
                                                if (color.rgb) {
                                                    this.props.onColorChange(color.rgb.a != 1 ? 'rgba(' + color.rgb.r + ',' + color.rgb.g + ',' + color.rgb.b + ',' + color.rgb.a + ')' : color.hex)
                                                }

                                            }}
                                        />
                                    )}

                                    <div className="premium-color-picker-value">
                                        <input
                                            onChange={({ target: { value: color } }) => {
                                                this.props.onColorChange(normalizeColor(color))
                                                this.setState({ currentColor: color })
                                            }}
                                            value={normalizeColor(this.state.currentColor)}
                                            type="text"
                                        />
                                    </div>
                                </div>
                                {this.props.colors && (
                                    <div className={`premium-color-picker-top`}>
                                        <ul className="premium-color-picker-skins">
                                            {map(this.props.colors, ({ color, slug, name }) => {
                                                return (
                                                    <li key={color} className={classnames('premium-color-picker-single', {
                                                        'active': this.props.colorValue === color
                                                    })}
                                                        style={{ backgroundColor: color }}
                                                        onClick={() => {
                                                            this.setState({ currentColor: color })
                                                            this.props.onColorChange(color);


                                                        }}
                                                    >
                                                        <div className={`premium-tooltip-top`}>
                                                            {name ||
                                                                sprintf(__('Color code: %s'), color)}
                                                        </div>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                )}
                            </Popover>
                        )}
                        {this.state.isVisible && (
                            <Tooltip text={__('Select Color')}>
                                <Button className={`premium-color-picker-single ${('' === this.props.colorDefault ? 'Premium-has-alpha' : 'Premium-no-alpha')}`} onClick={toggleClose}>
                                    <ColorIndicator className="premium-advanced-color-indicate" colorValue={('transparent' === this.props.colorValue || undefined === this.props.colorValue || '' === this.props.colorValue ? this.props.colorDefault : this.props.colorValue)} />
                                </Button>
                            </Tooltip>
                        )}
                        {!this.state.isVisible && (
                            <Tooltip text={__('Select Color')}>
                                <Button className={`premium-color-picker-single ${('' === this.props.colorDefault ? 'Premium-has-alpha' : 'Premium-no-alpha')}`} onClick={toggleVisible}>
                                    <ColorIndicator className="premium-advanced-color-indicate" colorValue={('transparent' === this.props.colorValue || undefined === this.props.colorValue || '' === this.props.colorValue ? this.props.colorDefault : this.props.colorValue)} />
                                </Button>
                            </Tooltip>
                        )}
                    </div>

                    {!this.props.disableReset && <div className="premium-color-btn-reset-wrap">
                        <button
                            className="premium-reset-btn"
                            disabled={this.state.currentColor === this.props.colorDefault}
                            onClick={() => {
                                this.setState({ currentColor: this.props.colorDefault });
                                this.props.onColorChange(undefined);

                            }}>
                        </button>
                    </div>}
                </div>
            </div >
        );
    }
}

export default withSelect((select, ownProps) => {
    const settings = select('core/block-editor').getSettings();
    const colors = get(settings, ['colors'], []);
    const disableCustomColors = ownProps.disableCustomColors === undefined ? settings.disableCustomColors : ownProps.disableCustomColors;
    return {
        colors,
        disableCustomColors,
    };
})(AdvancedColorControl);