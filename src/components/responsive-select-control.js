const { useSelect, useDispatch } = wp.data;
const { useState } = wp.element;
const { __ } = wp.i18n;
import Responsive from "./responsive";
import AdvancedSelect from "react-select";

export default function ResponsiveSelectControl({
    label,
    onChange,
    value,
    options
}) {
    let defaultValues = {
        Desktop: "",
        Tablet: "",
        Mobile: "",
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
    const findNestedOption = (options, optionValue) => {
        for (let option of options) {
            if (option.value === optionValue) {
                return option;
            } else if (option.options) {
                const nestedOption = findNestedOption(option.options, optionValue);
                if (nestedOption) {
                    return nestedOption;
                }
            }
        }
        return null;
    }

    output.Mobile = (
        <AdvancedSelect
            value={findNestedOption(options, value['Mobile'])}
            options={options}
            onChange={(option) => onChangeValue(option.value, "Mobile")}
        />
    );
    output.Tablet = (
        <AdvancedSelect
            value={findNestedOption(options, value['Tablet'])}
            options={options}
            onChange={(option) => onChangeValue(option.value, "Tablet")}
        />
    );

    output.Desktop = (
        <AdvancedSelect
            value={findNestedOption(options, value['Desktop'])}
            options={options}
            onChange={(option) => onChangeValue(option.value, "Desktop")}
        />
    );
    return [
        onChange && (
            <div
                className={`premium-blocks-range-control premium-blocks__base-control`}
            >
                <header>
                    <div
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
                <div className="premium-blocks__base-control">
                    {output[deviceType] ? output[deviceType] : output.Desktop}
                </div>
            </div>
        ),
    ];
}
