
const { __ } = wp.i18n;
import PremiumRange from './range-control';
const { Fragment } = wp.element;

/**
 * Build the Measure controls
 * @returns {object} Measure settings.
 */
export default function ResponsiveSingleRangeControl({
    device = 'device',
    onChange,
    value,
    step = 1,
    max = 100,
    min = 0,
    unit = '',
    onUnit,
    showUnit = false,
    units = ['px', 'em', 'rem'],
    className = '',
    label,
    defaultValue
}) {


    return [
        onChange && (
            <div className={`premium-blocks-range-control`}>
                {label && <header>
                    <div className={`premium-slider-title-wrap`}>
                        {label && (
                            <span className="customize-control-title premium-control-title">{label}</span>
                        )}

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
                </header>}
                <PremiumRange
                    value={(undefined !== value ? value : '')}
                    onChange={(size) => onChange(size)}
                    min={min}
                    max={max}
                    step={step}
                    defaultValue={defaultValue}
                />
            </div>
        ),
    ];
}
