import React from 'react';
const { useState } = wp.element;
import RadioComponent from './radio-control';
import Responsive from './responsive';

const ResponsiveRadio = ({ choices, label, options, showIcons, onChange, value }) => {
    const defaultValue = {
        'Desktop': '',
        'Tablet': '',
        'Mobile': ''
    }
    const [state, setState] = useState(value ? { ...defaultValue, ...value } : defaultValue)
    const [device, setDevice] = useState("Desktop");

    const output = {};


    const handleChange = (value, device) => {
        const updatedState = { ...state };
        updatedState[device] = value;
        setState(updatedState)
        onChange(updatedState)
    }

    output.Desktop = (
        <RadioComponent
            choices={choices}
            showIcons={showIcons}
            label={false}
            onChange={(newValue) => handleChange(newValue, 'Desktop')}
            value={state['Desktop']}
        />
    );
    output.Tablet = (
        <RadioComponent
            choices={choices}
            showIcons={showIcons}
            label={false}
            onChange={(newValue) => handleChange(newValue, 'Tablet')}
            value={state['Tablet']}
        />
    );
    output.Mobile = (
        <RadioComponent
            choices={choices}
            showIcons={showIcons}
            label={false}
            onChange={(newValue) => handleChange(newValue, 'Mobile')}
            value={state['Mobile']}
        />
    );

    return (
        <div className={`premium-blocks-responsive-radio components-base-control premium-blocks__base-control `}>
            <header>
                {label && <span className="premium-control-title">{label}</span>}
                <Responsive deviceType={device} onChange={(newDevice) => setDevice(newDevice)} />
            </header>
            { output[device] ? output[device] : output.Desktop}
        </div>
    );
};

export default ResponsiveRadio;