const { useState } = wp.element;
import Responsive from './Common/responsive';
import PremiumSizeUnits from './premium-size-units'
const {
    RangeControl,
} = wp.components;

const { useInstanceId } = wp.compose;

export default function PremiumRangeControl({
    label,
    onChange,
    onChangeTablet,
    onChangeMobile,
    value = '',
    className = '',
    step = 1,
    max = 100,
    min = 0,
    units = ['px', 'em', 'rem'],
    beforeIcon = '',
    help = '',
    unit = 'px',
    defaultValue,
    onChangeUnit,
    showUnit,
    responsive,

}) {
    const onChangInput = (event) => {
        if (event.target.value === '') {
            onChange(undefined);
            return;
        }
        const newValue = Number(event.target.value);
        if (newValue === '') {
            onChange(undefined);
            return;
        }
        if (min < -0.1) {
            if (newValue > max) {
                onChange(max);
            } else if (newValue < min && newValue !== '-') {
                onChange(min);
            } else {
                onChange(newValue);
            }
        } else {
            if (newValue > max) {
                onChange(max);
            } else if (newValue < -0.1) {
                onChange(min);
            } else {
                onChange(newValue);
            }
        }
    };
    const [device, setDevice] = useState('desktop');
    const sliderValue = responsive ? value[device] : value;

    const updateValue = (value) => {
        device === "desktop" ? onChange(value) : device === "tablet" ? onChangeTablet(value) : onChangeMobile(value)
    }

    const id = useInstanceId(PremiumRangeControl, 'inspector-premium-range');
    return (
        <div className={`premium-blocks-range-control`}>
            <header>
                <div className={`premium-slider-title-wrap`}>
                    {responsive ? <Responsive label={label} onChange={(value) => setDevice(value)} /> : <span className="customize-control-title premium-control-title">{label}</span>}
                </div>
                {showUnit && (
                    <PremiumSizeUnits
                        units={units}
                        activeUnit={unit}
                        onChangeSizeUnit={newValue =>
                            onChangeUnit(newValue)
                        }
                    />
                )}
            </header>
            <div className={'wrapper'}>
                <div className={`input-field-wrapper active`}>
                    <RangeControl
                        beforeIcon={beforeIcon}
                        value={sliderValue}
                        onChange={(newVal) => updateValue(newVal)}
                        min={min}
                        max={max}
                        step={step}
                        help={help}
                        withInputField={false}
                        className={'premium-range-value-input'}
                    />
                    <div className="kemet_range_value">
                        <input
                            value={sliderValue}
                            onChange={onChangInput}
                            min={min}
                            max={max}
                            id={id}
                            step={step}
                            type="number"
                            className="components-text-control__input"
                        />
                    </div>
                </div>
                <button className="premium-slider-reset" disabled={value === defaultValue} onClick={e => {
                    e.preventDefault()
                    onChange(defaultValue)
                }}>
                </button>
            </div>
        </div>
    )

}