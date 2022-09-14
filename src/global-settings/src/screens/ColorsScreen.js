import { __ } from '@wordpress/i18n';
import ScreenHeader from "../components/header"
import { useContext, useEffect } from "@wordpress/element";
import SettingsContext from '../store/settings-store';
import defaults from '../helpers/defaults';
import {
    select, dispatch, useSelect,
} from '@wordpress/data'
import PalettePreview from '../components/color-palettes/PalettePreview';
import { ToggleControl } from '@wordpress/components';
import ReactTooltip from 'react-tooltip';

const ColorsScreen = props => {
    const { settings, setSettings } = useContext(SettingsContext);
    const { colorSettings: defaultValues } = defaults;
    const colorValues = settings.colors && Object.keys(JSON.parse(settings.colors)).length !== 0 ? JSON.parse(settings.colors) : defaultValues;
    const _colors = useSelect(select => select('core/block-editor').getSettings().colors) || [];
    const themeColors = {};
    _colors.map((color) => {
        themeColors[color.slug] = {
            title: color.name,
            value: color.color,
            skipModal: true,
            default: true
        }
    });

    console.log(colorValues);
    const handleRemove = (id) => {
        let newValue = { ...colorValues };
        if (colorValues.defaultPallet === 'theme') {
            delete newValue.theme[id];
        }
        if (colorValues.defaultPallet === 'pbg') {
            delete newValue.pbg[id];
        }
        setSettings('colors', JSON.stringify(newValue));
    }
    const handleToggleChange = () => {
        let newValue = { ...colorValues };
        newValue.defaultPallet = colorValues.defaultPallet === 'theme' ? 'pbg' : 'theme';
        setSettings('colors', JSON.stringify(newValue));
    }

    const handleChange = (value, id) => {
        let newValue = { ...colorValues };
        if (colorValues.defaultPallet === 'theme') {
            newValue.theme[id].value = value;
        }
        if (colorValues.defaultPallet === 'pbg') {
            newValue.pbg[id].value = value;
        }
        setSettings('colors', JSON.stringify(newValue));
    }

    const handleAddNewColor = (colorData, id) => {
        let newValue = { ...colorValues };
        if (colorValues.defaultPallet === 'theme') {
            newValue.theme[id] = colorData;
        }
        if (colorValues.defaultPallet === 'pbg') {
            newValue.pbg[id] = colorData;
        }
        setSettings('colors', JSON.stringify(newValue));
    }

    return <>
        <ScreenHeader
            title={__('Colors')}
            description={__(
                'Manage palettes and the default color of different global elements on the site.'
            )}
        />
        <div className='premium-global-colors-type'>
            <label>{__('Theme')}</label>
            <ToggleControl
                checked={colorValues.defaultPallet !== 'theme'}
                onChange={handleToggleChange}
            />
            <label>{__('Premium Block')}</label>
        </div>
        {colorValues.defaultPallet === 'theme' &&
            <div className={`premium-palettes-preview`}>
                <PalettePreview
                    onClick={() => { }}
                    value={{ ...themeColors, ...colorValues.theme }}
                    onChange={(v, id) => handleChange(v, id)}
                    skipModal={false}
                    handleClickReset={(val) => console.log(val)}
                    addNewColor={handleAddNewColor}
                    onRemove={handleRemove}
                />
            </div>
        }
        {colorValues.defaultPallet === 'pbg' &&
            <div className={`premium-palettes-preview`}>
                <PalettePreview
                    onClick={() => { }}
                    value={colorValues.pbg}
                    onChange={(v, id) => handleChange(v, id)}
                    skipModal={false}
                    handleClickReset={(val) => console.log(val)}
                    addNewColor={handleAddNewColor}
                    onRemove={handleRemove}
                />
            </div>
        }
    </>
}

export default ColorsScreen