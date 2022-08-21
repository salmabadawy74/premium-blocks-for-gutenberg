import { useState } from '@wordpress/element';
//import { Dashicon, ToggleControl } from '@wordpress/components';
//const { Dashicon, ToggleControl } = wp.components;
const {
    PanelBody,
    Dashicon,
    ToggleControl,
} = wp.components;
const { __ } = wp.i18n;

function classNames( ...classes ) {
    return classes.filter( Boolean ).join( ' ' )
}

const SingleOption = ( props ) => {
    const [value, setValue] = useState(props.value);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = async () => {
        setIsLoading(true);

        let newValue = !value
        const body = new FormData()
        body.append('action', 'pb-panel-update-option')
        body.append('nonce', PremiumBlocksPanelData.nonce)
        body.append('option', props.id)
        body.append('value', newValue)

        try {
            const response = await fetch(PremiumBlocksPanelData.ajaxurl, {
                method: 'POST',
                body,
            })
            if (response.status === 200) {
                const { success, data } = await response.json()
                if (success && data.values) {
                    setValue(newValue);
                    props.onChange(data.values);
                }
            }
        } catch (e) {
            console.log(e);
        }
        setIsLoading(false)
    };

    let checked = value === true ? true : false
    const btnClasses = value === true ? 'secondary' : 'primary';
    return <div id={props.id}>
        <label>
            <span className="customize-control-title pb-control-title">{props.params.label}</span>
            <div className="description customize-control-description">{props.params.description}</div>
            {isLoading && (
                <Dashicon className='pb-loading' icon='update' />
            )}
        </label>
        <div className="option-actions">
        <ToggleControl
            label={__('Hide in Desktop')}
            checked={checked}
            onChange={() => {
                handleChange()
            }}
        />
            </div>

    </div>
}

export default SingleOption