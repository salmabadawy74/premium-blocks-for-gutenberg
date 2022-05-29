
const { useSelect, useDispatch } = wp.data;
const { useState } = wp.element;
const { __ } = wp.i18n;
import PremiumSizeUnits from '../premium-size-units';
import ResponsiveSingleRangeControl from './single-range-control';

import Responsive from '../responsive'
export default function ResponsiveRangeControl({
    label,
    onChange,
    onChangeTablet,
    onChangeMobile,
    mobileValue,
    tabletValue,
    value,
    step = 1,
    max = 100,
    min = 0,
    unit = '',
    onChangeUnit,
    showUnit = false,
    units = ['px', 'em', 'rem'],
    defaultValue
}) {
    const [deviceType, setDeviceType] = useState('Desktop');

    const devices = ['Desktop', 'Tablet', 'Mobile'];
    const output = {};
    output.Mobile = (
        <ResponsiveSingleRangeControl
            device={'mobile'}
            value={(undefined !== mobileValue ? mobileValue : '')}
            onChange={(size) => onChangeMobile(size)}
            min={min}
            max={max}
            step={unit === "em" ? .1 : 1}
            unit={unit}
            onChangeUnit={onChangeUnit}
            showUnit={false}
            units={units}
            defaultValue={defaultValue}
        />
    );
    output.Tablet = (
        <ResponsiveSingleRangeControl
            device={'tablet'}
            value={(undefined !== tabletValue ? tabletValue : '')}
            onChange={(size) => onChangeTablet(size)}
            min={min}
            max={max}
            step={unit === "em" ? .1 : 1}
            unit={unit}
            onChangeUnit={onChangeUnit}
            showUnit={false}
            units={units}
            defaultValue={defaultValue}
        />
    );
    output.Desktop = (
        <ResponsiveSingleRangeControl
            device={'desktop'}
            value={(undefined !== value ? value : '')}
            onChange={(size) => onChange(size)}
            min={min}
            max={max}
            step={unit === "em" ? .1 : 1}
            unit={unit}
            onChangeUnit={onChangeUnit}
            showUnit={false}
            units={units}
            defaultValue={defaultValue}
        />
    );
    return [
        onChange && onChangeTablet && onChangeMobile && (
            <div className={`premium-blocks-range-control premium-blocks-field`}>
                <header>
                    <div className={`premium-slider-title-wrap`} style={{ display: 'flex' }}>
                        {label && (
                            <span className="customize-control-title premium-control-title">{label}</span>
                        )}
                        <Responsive onChange={(newDevice) => setDeviceType(newDevice)} />
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
                {(output[deviceType] ? output[deviceType] : output.Desktop)}
            </div >
        ),
    ];
}
