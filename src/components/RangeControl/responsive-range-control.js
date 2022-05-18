
const { useSelect, useDispatch } = wp.data;
const { useState } = wp.element;
const { __ } = wp.i18n;
import PremiumSizeUnits from '../premium-size-units';
import ResponsiveSingleRangeControl from './single-range-control';

export default function ResponsiveRangeControl({
    label,
    onChange,
    value,
    step = 1,
    max = 100,
    min = 0,
    unit = '',
    showUnit = false,
    units = ['px', 'em', 'rem'],
    defaultValue
}) {
    let defaultValues = {
        'Desktop': '',
        'Tablet': '',
        'Mobile': '',
        unit: 'px'

    }
    value = value ? { ...defaultValues, ...value } : defaultValues;
    const [state, setState] = useState(value)
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
    const onChangeValue = (value, device) => {
        const updatedState = { ...state }
        updatedState[device] = value
        setState(updatedState)
        onChange(updatedState)
    }
    const onChangeUnit = (value) => {
        const updatedState = { ...state }
        updatedState['unit'] = value
        setState(updatedState)
        onChange(updatedState)
    }
    const output = {};
    output.Mobile = (
        <ResponsiveSingleRangeControl
            device={'mobile'}
            value={state['Mobile']}
            onChange={(size) => onChangeValue(size, 'Mobile')}
            min={min}
            max={max}
            step={(state['unit'] === "em" || state['unit'] === "rem") ? .1 : 1}
            showUnit={false}
            defaultValue={defaultValue}
        />
    );
    output.Tablet = (
        <ResponsiveSingleRangeControl
            device={'tablet'}
            value={state['Tablet']}
            onChange={(size) => onChangeValue(size, 'Tablet')}
            min={min}
            max={max}
            step={(state['unit'] === "em" || state['unit'] === "rem") ? .1 : 1}
            showUnit={false}
            defaultValue={defaultValue}
        />
    );
    output.Desktop = (
        <ResponsiveSingleRangeControl
            device={'desktop'}
            value={state['Desktop']}
            onChange={(size) => onChangeValue(size, "Desktop")}
            min={min}
            max={max}
            step={(state['unit'] === "em" || state['unit'] === "rem") ? .1 : 1}
            showUnit={false}
            defaultValue={defaultValue}
        />
    );
    return [
        onChange && (
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
                            activeUnit={state['unit']}
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
