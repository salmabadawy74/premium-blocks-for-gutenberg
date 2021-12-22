import PremiumSizeUnits from './premium-size-units'
const {
    RangeControl,
} = wp.components;

const { useInstanceId } = wp.compose;
/**
 * Build the Measure controls
 * @returns {object} Measure settings.
 */
export default function PremiumRangeControl({
    label,
    onChange,
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
    showUnit
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
    const id = useInstanceId(PremiumRangeControl, 'inspector-premium-range');
    return (
        <div className={`premium-blocks-range-control`}>
            <header>
                <div className={`kmt-slider-title-wrap`}>
                    <span className="customize-control-title kmt-control-title">{label}</span>
                </div>
                {showUnit && (<ul className="kmt-slider-units">
                    <PremiumSizeUnits
                        onChangeSizeUnit={newValue =>
                            onChangeUnit(newValue)
                        }
                    />
                </ul>)}
            </header>
            <div className={'kadence-range-control-inner'}>
                <RangeControl
                    className={'kadence-range-control-range'}
                    beforeIcon={beforeIcon}
                    value={value}
                    onChange={(newVal) => onChange(newVal)}
                    min={min}
                    max={max}
                    step={step}
                    help={help}
                    withInputField={false}
                />
                <div className="components-base-control kt-range-number-input">
                    <div className="components-base-control__field">
                        <input
                            value={value}
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
                <button className="kmt-slider-reset" disabled={value === defaultValue} onClick={e => {
                    e.preventDefault()
                    onChange(defaultValue)
                }}>
                </button>
            </div>
        </div>
    )

}