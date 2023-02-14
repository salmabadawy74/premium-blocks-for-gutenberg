const { useSelect, useDispatch } = wp.data;
const { useState } = wp.element;
const { __ } = wp.i18n;
import Responsive from "../responsive";
import AdvancedRangeControl from './advanced-range-control';

export default function ResponsiveAdvancedRangeControl({
    label,
    onChange,
    value,
    step = 1,
    max = 100,
    min = 0,
}) {
    let defaultValues = {
        Desktop: "",
        Tablet: "",
        Mobile: "",
        unit: "px",
    };
    value = value ? { ...defaultValues, ...value } : defaultValues;
    const [state, setState] = useState(value);
    const [deviceType, setDeviceType] = useState("Desktop");
    let customSetPreviewDeviceType = (device) => {
        setDeviceType(device);
    };
    if (wp.data.select("core/edit-post")) {
        const theDevice = useSelect((select) => {
            const { __experimentalGetPreviewDeviceType = null } = select(
                "core/edit-post"
            );
            return __experimentalGetPreviewDeviceType
                ? __experimentalGetPreviewDeviceType()
                : "Desktop";
        }, []);
        if (theDevice !== deviceType) {
            setDeviceType(theDevice);
        }
        const { __experimentalSetPreviewDeviceType = null } = useDispatch(
            "core/edit-post"
        );
        customSetPreviewDeviceType = (device) => {
            __experimentalSetPreviewDeviceType(device);
            setDeviceType(device);
        };
    }

    const onChangeValue = (value, device) => {
        const updatedState = { ...state };
        updatedState[device] = value;
        setState(updatedState);
        onChange(updatedState);
    };
    const output = {};
    output.Mobile = (
        <AdvancedRangeControl
            value={state["Mobile"]}
            onChange={(size) => onChangeValue(size, "Mobile")}
            min={min}
            max={max}
            step={step}
        />
    );
    output.Tablet = (
        <AdvancedRangeControl
            value={state["Tablet"]}
            onChange={(size) => onChangeValue(size, "Tablet")}
            min={min}
            max={max}
            step={step}
        />
    );
    output.Desktop = (
        <AdvancedRangeControl
            value={state["Desktop"]}
            onChange={(size) => onChangeValue(size, "Desktop")}
            min={min}
            max={max}
            step={step}
        />
    );
    return [
        onChange && (
            <div
                className={`premium-blocks-range-control premium-blocks__base-control`}
            >
                <header>
                    <div
                        className={`premium-slider-title-wrap`}
                        style={{ display: "flex", alignItems: "center" }}
                    >
                        {label && (
                            <span className=" premium-control-title">
                                {label}
                            </span>
                        )}
                        <Responsive
                            onChange={(newDevice) => setDeviceType(newDevice)}
                        />
                    </div>
                </header>
                {output[deviceType] ? output[deviceType] : output.Desktop}
            </div>
        ),
    ];
}
