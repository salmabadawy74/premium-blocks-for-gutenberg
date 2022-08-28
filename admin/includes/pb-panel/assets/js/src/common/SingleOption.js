import { useState } from '@wordpress/element'
import PBG_Block_Icons from './block-icons'
//import { Dashicon, ToggleControl } from '@wordpress/components';
//const { Dashicon, ToggleControl } = wp.components;
const {
    PanelBody,
    Dashicon,
    ToggleControl,
} = wp.components;
const { __ } = wp.i18n;

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const SingleOption = (props) => {
    const [value, setValue] = useState(props.value);
    const [isLoading, setIsLoading] = useState(false);
    console.log(props, value, "value")
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

    return <div id={props.id} className="pb-option-element">
        <label>
            <span className="customize-control-icon pb-control-icon">{PBG_Block_Icons[props.id]}</span>
            <span className="customize-control-title pb-control-title">{props.params.label}</span>
            <div className="live-preview customize-control-live-preview"><a href={`https://premiumblocks.io/gutenberg-blocks/${props.id}`} target="_blank" rel="noreferrer">{__('live Preview', 'premium-blocks-for-gutenberg')}</a></div>
            <div className="guidelines customize-control-guidelines"><a href={`https://premiumblocks.io/docs/${props.id}`} target="_blank" rel="noreferrer">{__('Guidelines', 'premium-blocks-for-gutenberg')} </a></div>

            {isLoading && (
                <Dashicon className='pb-loading' icon='update' />
            )}
        </label>
        <div className="option-actions">
            <ToggleControl
                checked={checked}
                onChange={() => {
                    handleChange()
                }}
            />
        </div>

    </div>
}

export default SingleOption