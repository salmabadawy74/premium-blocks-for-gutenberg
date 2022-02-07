/**
 * Range Control
 *
 */

/**
 * Internal block libraries
 */
const {
    RangeControl,
} = wp.components;

/**
 * Build the Measure controls
 * @returns {object} Measure settings.
 */
export default function PremiumRange({
    onChange,
    value = '',
    step = 1,
    max = 100,
    min = 0,
    beforeIcon = '',
    help = '',
    defaultValue
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
    return [
        onChange && (
            <div className={'wrapper'}>
                <div className={`input-field-wrapper active`}>
                    <RangeControl
                        className={'premium-range-value-input'}
                        beforeIcon={beforeIcon}
                        value={value}
                        onChange={(newVal) => onChange(newVal)}
                        min={min}
                        max={max}
                        step={step}
                        help={help}
                        withInputField={false}
                    />
                    <div className="kemet_range_value">
                        <input
                            value={value}
                            onChange={onChangInput}
                            min={min}
                            max={max}

                            step={step}
                            type="number"
                            className="components-text-control__input"
                        />
                    </div>
                </div>
                <button className="premium-slider-reset" disabled={value == defaultValue} onClick={e => {
                    e.preventDefault()
                    onChange(defaultValue)
                }}>
                </button>
            </div>
        ),
    ];
}
