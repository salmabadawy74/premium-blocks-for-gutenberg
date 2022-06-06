/**
 * WordPress dependencies
 */
import { Button, ButtonGroup } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
/**
 * Import Css
 */
import React, { useLayoutEffect, useState } from 'react';
import { select } from '@wordpress/data';
import RadioComponent from './radio-control';
import Responsive from './responsive';

const MultiButtonsControl = ({ choices, label, options, showIcons, onChange, value }) => {
    const defaultValue = {
        'Desktop': '',
        'Tablet': '',
        'Mobile': ''
    }
    const [state, setState] = useState(value ? value : defaultValue)
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
        <div className={`components-base-control premium-blocks__base-control `}>
            <header>
                {label && <span className="premium-control-title">{label}</span>}
                <Responsive onChange={(newDevice) => setDevice(newDevice)} />
            </header>
            { output[device] ? output[device] : output.Desktop}
        </div>
    );
};

export default MultiButtonsControl;
