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
        <div className=" premium-blocks__base-control">
            <Fragment>
                <div className="premium-blocks-border__control " style={{ display: "flex" }}>
                    <span>
                        {props.label ? props.label : __('Border', 'premium-blocks-for-gutenberg')}
                    </span>
                    <div className="premium-blocks-border-button-list ">
                        {[['solid', __('Solid')], ['dotted', __('Dotted')], ['dashed', __('Dashed')], ['double', __('Double')]].map((data, index) => {
                            return (
                                <Tooltip text={data[1]}>
                                    <button className={(borderType == data[0] ? 'active' : '') + ' premium-border-button is-tertiary"'} key={index} onClick={() => onChangeBorder("borderType", data[0])}>
                                        <span className={`premium-blocks-border-type premium-blocks-border-type-${data[0]}`} />
                                    </button>
                                </Tooltip>
                            )
                        })}
                    </div>

                    <div className="premium-btn-reset-wrap">
                        <button
                            className="premium-reset-btn "
                            disabled={"none" === borderType}

                            onClick={() => onChangeBorder("borderType", 'none')}

                        ></button>
                    </div>

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
        </div >
    );

}
export default PremiumBorder