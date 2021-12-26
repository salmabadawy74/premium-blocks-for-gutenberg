import ColorComponent from './Color';
import { useEffect, useState } from 'react';
import Responsive from '../common/responsive'
import { isObject } from 'underscore';
const { __ } = wp.i18n;

const PremiumColorControl = props => {
    let value = props.value;

    let responsiveBaseDefault = {
        'desktop': {},
        'tablet': {},
        'mobile': {}
    }
    let { pickers, responsive } = props.params;
    let baseDefault = responsive ? responsiveBaseDefault : {};
    let predefined = props.params.predefined ? props.params.predefined : false;
    pickers.map(({ id }) => {
        if (responsive) {
            baseDefault['desktop'][id] = '';
            baseDefault['tablet'][id] = '';
            baseDefault['mobile'][id] = '';
        } else {
            baseDefault[id] = '';
        }
    })
    baseDefault = props.params.default ? props.params.default : baseDefault;

    let defaultValue = props.params.default ? props.params.default : baseDefault;
    value = value ? value : defaultValue;
    const [state, setState] = useState(value);
    const [device, setDevice] = useState('desktop');
    const renderOperationButtons = () => {
        return <>
            <div className="kmt-color-btn-reset-wrap">
                <button
                    className="kmt-reset-btn"
                    disabled={(JSON.stringify(state) === JSON.stringify(defaultValue))}
                    onClick={e => {
                        e.preventDefault();
                        let value = JSON.parse(JSON.stringify(defaultValue));
                        if (undefined === value || '' === value) {
                            value = 'unset';
                        }
                        setState(value)
                        props.onChange({ ...value, flag: props.value ? !props.value.flag : !props.value });
                    }}>
                </button>
            </div>
        </>;
    };

    const handleChangeComplete = (color, id) => {

        let colorValue = responsive ? state[device] : state;
        if (typeof color === 'string') {
            colorValue[`${id}`] = color;
        } else if (undefined !== color.rgb && undefined !== color.rgb.a && 1 !== color.rgb.a) {
            colorValue[`${id}`] = `rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a})`;
        } else {
            colorValue[`${id}`] = color.hex;
        }
        setState({ ...value, ...colorValue })
        props.onChange({ ...value, ...colorValue, flag: props.value ? !props.value.flag : !props.value });
    };



    let responsiveHtml = responsive ? <Responsive
        onChange={(currentDevice) => setDevice(currentDevice)}
    /> : null;

    const renderInputHtml = (device) => Object.entries(pickers).map(([key, picker]) =>
        responsive ? <ColorComponent
            value={state[device]}
            picker={picker}
            predefined={predefined}
            onChangeComplete={(color) => handleChangeComplete(color, picker[`id`])} />
            : <ColorComponent
                value={state}
                picker={picker}
                onChangeComplete={(color) => handleChangeComplete(color, picker[`id`])}
            />
    );
    let optionsHtml = responsive ? <>{renderInputHtml(device, 'active')} </> :
        <>
            {renderInputHtml('')}
        </>;


    const {
        label,
        description
    } = props.params;
    let labelHtml = label ?
        <span className="customize-control-title kmt-control-title">{label}</span>
        : null;
    let descriptionHtml =
        description !== "" && description ? (
            <span className="description kmt-color-description customize-control-description">
                {description}
            </span>
        ) : null;

    return <div className="kmt-control-wrap kmt-color-control-wrap">
        <div className={`kmt-color-container`}>
            <header>
                {labelHtml}
                {responsiveHtml}
            </header>
            <div className={`kmt-color-picker-container`}>
                {optionsHtml}
                {renderOperationButtons()}
            </div>
        </div>
        {descriptionHtml}
    </div>;
}
export default PremiumColorControl;