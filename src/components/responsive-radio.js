
import React from 'react';
const { useState } = wp.element;
import RadioComponent from './radio-control';
import Responsive from './responsive';

const ResponsiveRadio = ({ choices, label, showIcons, onChange, value }) => {
    let defaultValue = {
        'Desktop': '',
        'Tablet': '',
        'Mobile': ''
    }
    const [state, setState] = useState(value ? { ...defaultValue, ...value } : defaultValue)
    const [device, setDevice] = useState("Desktop");

    const output = {};


    const handleChange = (val, dev) => {
        const updatedState = { ...state };
        updatedState[dev] = val;
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
