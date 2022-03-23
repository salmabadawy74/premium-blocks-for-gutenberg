
const { useSelect, useDispatch } = wp.data;
const { useState } = wp.element;
const { __ } = wp.i18n;
import PremiumSizeUnits from '../premium-size-units';
import ResponsiveSingleRangeControl from './single-range-control';

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
    let customSetPreviewDeviceType = (device) => {
        setDeviceType(device);
    };
    if (wp.data.select('core/edit-post')) {
        const theDevice = useSelect((select) => {
            const {
                __experimentalGetPreviewDeviceType = null,
            } = select('core/edit-post');
            return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : 'Desktop';
        }, []);
        if (theDevice !== deviceType) {
            setDeviceType(theDevice);
        }
        const {
            __experimentalSetPreviewDeviceType = null,
        } = useDispatch('core/edit-post');
        customSetPreviewDeviceType = (device) => {
            __experimentalSetPreviewDeviceType(device);
            setDeviceType(device);
        };
    }
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
            <div className={`premium-blocks-range-control`}>
                <header>
                    <div className={`premium-slider-title-wrap`}>
                        {label && (
                            <span className="customize-control-title premium-control-title">{label}</span>
                        )}
                        <ul className="premium-responsive-control-btns premium-responsive-slider-btns">
                            {devices.map((device, key) => {
                                const activeClass = device === deviceType ? ' active' : '';
                                const icon = device.toLowerCase() === 'mobile' ? 'smartphone' : device.toLowerCase();
                                return <li key={key} className={`${device}${activeClass}`}>
                                    <button type="button" className={`preview-${device}${activeClass}`} data-device={device}>
                                        <i class={`dashicons dashicons-${icon}`} onClick={() => {
                                            const nextDevice = key + 1 > devices.length - 1 ? devices[0] : devices[key + 1];
                                            customSetPreviewDeviceType(nextDevice);
                                        }} ></i>
                                    </button>
                                </li>
                            })}
                        </ul>
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
                { (output[deviceType] ? output[deviceType] : output.Desktop)}
            </div >
        ),
    ];
}
