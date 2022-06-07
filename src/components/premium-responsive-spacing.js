const { __ } = wp.i18n;
const { useState, useEffect, Fragment } = wp.element;
const { useSelect, useDispatch } = wp.data;
import PremiumSizeUnits from "./premium-size-units";
import Responsive from "./responsive";
const SpacingComponent = (props) => {
    let { value, responsive, showUnits, label } = props;
    const [device, setDevice] = useState("Desktop");
    let defaultValue = {
        value: {
            top: "",
            right: "",
            bottom: "",
            left: "",
        },
        unit: 'px'

    };
    let ResDefaultParam = {
        Desktop: defaultValue.value,
        Tablet: defaultValue.value,
        Mobile: defaultValue.value,
        unit: defaultValue.unit

    };
    let defaultValues = responsive ? ResDefaultParam : defaultValue.value
    value = value ? { ...defaultValues, ...value } : defaultValues;
    const [state, setState] = useState(value);
    const [link, setLink] = useState(false)

    useEffect(() => {
        if (state !== value) {
            setState(value);
        }
    }, [props]);

    const onSpacingChange = (v, choiceID) => {
        let updateState = { ...state };
        let deviceUpdateState = responsive ? { ...updateState[device] } : { ...updateState };
        if (link) {
            deviceUpdateState['top'] = v
            deviceUpdateState['right'] = v
            deviceUpdateState['bottom'] = v
            deviceUpdateState['left'] = v
        } else {
            deviceUpdateState[choiceID] = v
        }
        responsive
            ? (updateState[device] = deviceUpdateState)
            : (updateState = deviceUpdateState);
        props.onChange(updateState);
        setState(updateState);
    };

    const onLinkClickHandler = () => {
        let linkValue = responsive ? state[device]['top'] : state['top'];
        let updateState = { ...state };
        let deviceUpdateState = responsive ? { ...updateState[device] } : { ...updateState };
        const choices = ['top', 'right', 'bottom', "left"];
        for (let choice in choices) {
            deviceUpdateState[choices[choice]] = linkValue;
        }
        responsive ? (updateState[device] = deviceUpdateState) : (updateState = deviceUpdateState);
        props.onChange(updateState);
        setState(updateState);
    };

    const renderInputHtml = (device, active = "") => {
        let htmlChoices
        htmlChoices = ['top', 'right', 'bottom', 'left'].map((side) => {
            let inputValue = responsive ? state[device][side] : state[side];
            return (<li
                key={side}
                className={`premium-spacing-input-item`}
            >
                <input
                    type="number"
                    className={`premium-spacing-input`}
                    value={inputValue}
                    onChange={({ target: { value } }) => onSpacingChange(Number(value), side)}
                    data-id={side}
                    disabled={inputValue === "disabled" ? true : false}
                />

                <span className={`premium-spacing-title`}>
                    {
                        {
                            top: __('Top', 'premium-blocks-for-gutenberg'),
                            bottom: __('Bottom', 'premium-blocks-for-gutenberg'),
                            left: __('Left', 'premium-blocks-for-gutenberg'),
                            right: __('Right', 'premium-blocks-for-gutenberg'),
                        }[side]
                    }
                </span>
            </li>)
        })
        let linkHtml = '';
        if (link) {
            linkHtml = (
                <li className={`premium-spacing-input-item`}>
                    <button
                        className="linked-btn is-button dashicons dashicons-admin-links connected "
                        onClick={() => {
                            setLink(false)
                        }}
                    ></button>
                </li>
            );


        } else {
            linkHtml = (
                <li className={`premium-spacing-input-item`}>
                    <button
                        className="linked-btn is-button dashicons dashicons-editor-unlink disconnected"
                        onClick={() => {
                            onLinkClickHandler();
                            setLink(true)
                        }}
                    ></button>
                </li >
            );
        };
        return (
            <ul
                className={`premium-spacing-wrapper ${device} ${active}`}
            >
                {htmlChoices}
                {linkHtml}
            </ul>
        );
    };

    let inputHtml = null;

    inputHtml = <Fragment>{renderInputHtml(device, "active")}</Fragment>;

    const onUnitChange = (unitValue) => {
        let updateState = { ...state };
        updateState[`unit`] = unitValue;
        props.onChange(updateState);
        setState(updateState);
    }

    return (
        <div className="premium-spacing-responsive premium-blocks__base-control">
            <header>
                <div className={`premium-title-wrap`} style={{ display: "flex" }}>
                    <span className=" premium-control-title">  {label}</span>
                    {responsive && <Responsive deviceType={device} onChange={(newValue) => setDevice(newValue)} />}
                </div>
                {showUnits && (
                    <PremiumSizeUnits
                        activeUnit={state[`unit`]}
                        onChangeSizeUnit={(unitKey) => onUnitChange(unitKey)}
                    />
                )}
            </header>
            <div className={`premium-spacing-responsive-outer-wrapper`}>
                <div className={`input-wrapper premium-spacing-responsive-wrapper`}>
                    {inputHtml}
                </div>
                <div className="premium-btn-reset-wrap">
                    <button
                        className="premium-reset-btn "
                        disabled={JSON.stringify(state) === JSON.stringify(defaultValues)}
                        onClick={(e) => {
                            e.preventDefault();
                            props.onChange(defaultValues);
                            setState(defaultValues);
                        }}
                    ></button>
                </div>
            </div>
        </div>
    );
};


export default SpacingComponent;