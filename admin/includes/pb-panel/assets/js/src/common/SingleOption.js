import { useState } from '@wordpress/element';
const { Dashicon, ToggleControl } = wp.components;
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

    let btnText = value === true ? __('Deactivate', 'premium-gutenberg') : __('Activate', 'premium-gutenberg')
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
            <button className={`pb-button ${btnClasses}`} onClick={() => {
                handleChange()
            }} disabled={isLoading}>{btnText}</button>
            {value && props.params.url && <a className='pb-button' href={props.params.url}>{__('Customize', 'premium-gutenberg')}</a>}
        </div>
    </div>
}

export default SingleOption