const { __ } = wp.i18n;
const { Tooltip } = wp.components;
import AdvancedColorControl from './Color Control/ColorComponent'
import SpacingControl from './premium-responsive-spacing'
const { Fragment, useState, useEffect } = wp.element;

const PremiumBorder = (props) => {
    let value = props.value
    let directions = {
        'top': '',
        'right': '',
        'bottom': '',
        'left': ''
    }
    let defaultValues = {
        'borderType': 'none',
        'borderColor': '',
        'borderWidth': {
            Desktop: directions,
            Tablet: directions,
            Mobile: directions,
        },
        'borderRadius': {
            Desktop: directions,
            Tablet: directions,
            Mobile: directions,
        }
    }
    value = value ? { ...defaultValues, ...value } : defaultValues
    const [borderValue, setBorderValue] = useState(value)
    const { onChange } = props;
    const { borderColor, borderType, borderWidth, borderRadius } = borderValue
    useEffect(() => {
        if (borderValue !== value) {
            setBorderValue(value);
        }
    }, [props]);

    const onChangeBorder = (item, value) => {
        const inialState = { ...borderValue }
        inialState[item] = value;
        onChange(inialState)
        setBorderValue(inialState)

    }
    return (
        <div className="premium-control-toggle">
            <Fragment>
                <div className="premium-blocks-border__control " style={{ display: "flex" }}>
                    <div>
                        {props.label ? props.label : __('Border', 'premium-blocks-for-gutenberg')}
                    </div>
                    <div className="premium-blocks-border-button-list ">
                        {[['none', __("None")], ['solid', __('Solid')], ['dotted', __('Dotted')], ['dashed', __('Dashed')], ['double', __('Double')]].map((data, index) => {
                            return (
                                <Tooltip text={data[1]}>
                                    <button className={(borderType == data[0] ? 'active' : '') + ' premium-border-button'} key={index} onClick={() => onChangeBorder("borderType", data[0])}>
                                        <span className={`premium-blocks-border-type premium-blocks-border-type-${data[0]}`} />
                                    </button>
                                </Tooltip>
                            )
                        })}
                    </div>
                    {("none" != borderType) &&
                        <Tooltip text={__('Clear')}>
                            <div className="premium-blocks-border-clear__container">
                                <span className="premium-blocks-border-clear" onClick={() => onChangeBorder("borderType", 'none')} role="button"><i className="fas fa-undo" /></span>
                            </div>
                        </Tooltip>
                    }
                </div >
                {"none" != borderType && (
                    <SpacingControl
                        label={__("Border Width ")}
                        value={borderWidth}
                        responsive={true}
                        showUnits={false}
                        onChange={(value) => onChangeBorder('borderWidth', { ...value })}

                    />
                )}
                {"none" != borderType && (
                    <Fragment>
                        <AdvancedColorControl
                            label={__("Border Color", 'premium-blocks-for-gutenberg')}
                            colorValue={borderColor}
                            colorDefault={''}
                            onColorChange={(value) => onChangeBorder('borderColor', value)}
                        />
                    </Fragment>
                )}

                <SpacingControl
                    label={__("Border Radius")}
                    value={borderRadius}
                    responsive={true}
                    showUnits={false}
                    onChange={(value) => onChangeBorder('borderRadius', { ...value })}
                />
            </Fragment>
        </div>
    );

}
export default PremiumBorder