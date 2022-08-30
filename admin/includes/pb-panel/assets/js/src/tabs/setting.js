import { useState } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import AdvancedSwitcher from "../common/AdvancedSwitcher";
import Container from "../common/Container";
const { Dashicon } = wp.components;
import { store as coreStore, useEntityProp, useEntityRecords } from '@wordpress/core-data';
import { useDispatch } from '@wordpress/data';

const Setting = () => {
    const [data, setData] = useState(PremiumBlocksPanelData.apiData);
    const { saveEntityRecord } = useDispatch(coreStore);
    const onChangeData = async (key, value) => {
        const updatedData = { ...data };
        updatedData[key] = value;
        setData(updatedData);
        await saveEntityRecord('root', 'site', {
            'pbg_maps_settings': updatedData
        });
    };
    return <Container>
        <h2 className="pb-section-title"><span className='icon'><Dashicon icon="edit" /></span>{__('Setting', "premium-blocks-for-gutenberg")}</h2>
        <div className="pb-settings">
            <div className="pb-api-settings">
                <div className="pb-advanced-input">
                    <label>{__('Google Maps API Key:', 'premium-blocks-for-gutenberg')}</label>
                    <input type='text' value={data?.['premium-map-key']} onChange={e => onChangeData('premium-map-key', e.target.value)} placeholder={__('API Key', 'premium-blocks-for-gutenberg')} />
                </div>
            </div>
            <div className="pb-setting-options">
                <AdvancedSwitcher label={__('Enable Maps API JS File', 'premium-blocks-for-gutenberg')} onChange={checked => onChangeData('premium-map-api', checked)} checked={data?.['premium-map-api']} />
                <AdvancedSwitcher label={__('Enable Font Awesome Icons', 'premium-blocks-for-gutenberg')} onChange={checked => onChangeData('premium-fa-css', checked)} checked={data?.['premium-fa-css']} />
                <AdvancedSwitcher label={__('Allow JSON Uploads', 'premium-blocks-for-gutenberg')} onChange={checked => onChangeData('premium-upload-json', checked)} checked={data?.['premium-upload-json']} />
            </div>
        </div>
    </Container >
}

export default Setting