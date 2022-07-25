const { __ } = wp.i18n;
import PremiumSizeUnits from '../premium-size-units';
import PremiumRange from './range-control';
const { Fragment } = wp.element;
export default function ResponsiveSingleRangeControl({
    onChange,
    value,
    step = 1,
    max = 100,
    min = 0,
    unit = '',
    onChangeUnit,
    showUnit = false,
    units = ['px', 'em', 'rem'],
    className = '',
    label,
    defaultValue,
}) {
    return [
        onChange && (
            <div className={`premium-blocks-range-control premium-blocks__base-control`}>
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