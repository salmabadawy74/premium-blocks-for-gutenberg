import { __ } from '@wordpress/i18n';
import PremiumTypo from '../../../components/premium-typo';
import ScreenHeader from "../components/header"
import defaults from '../helpers/defaults';
import { useContext, useEffect } from "@wordpress/element";
import SettingsContext from '../store/settings-store';
import { typographyCss } from '../../../components/HelperFunction';
import { CheckboxControl } from '@wordpress/components';
import WebFont from "webfontloader";

const TypographyScreen = props => {
    const { globalTypography, setGlobalTypography, applyTypographyToDefault, setApplyTypographyToDefault } = useContext(SettingsContext);
    const { typography: defaultValues } = defaults;
    const getElementValue = (element) => {
        let value = globalTypography?.[element] || defaultValues?.[element];
        return value;
    };

    useEffect(() => {
        const typography = getElementValue('heading1');

        if (typography?.fontFamily === 'Default') {
            return;
        }

        WebFont.load({
            google: {
                families: [typography?.fontFamily]
            }
        });

    }, [globalTypography]);

    const toString = (object) => {
        object = { ...object, Desktop: object.Desktop.toString(), Tablet: object.Tablet.toString(), Mobile: object.Mobile.toString() };
        return object;
    }

    const changeHandler = (element, value) => {
        // Convert values to string.
        Object.keys(value).forEach(function (key, index) {
            value[key] = typeof value[key] === 'object' ? toString(value[key]) : value[key];
        });
        const updatedTypography = { ...globalTypography };
        updatedTypography[element] = value;
        setGlobalTypography(updatedTypography);
    }

    return <>
        <ScreenHeader
            title={__('Typography', "premium-blocks-for-gutenberg")}
            description={__('Manage the typography settings for different elements.', "premium-blocks-for-gutenberg")}
        />
        <div className='premium-typography-screen'>
            <div className='premium-element-typography'>
                <h1
                    style={{
                        ...typographyCss(getElementValue('heading1'), 'Desktop')
                    }}
                    className='premium-element-typography-title'
                >
                    {__('Heading 1', "premium-blocks-for-gutenberg")}
                </h1>
                <PremiumTypo value={getElementValue('heading1')} title={false} onChange={(newValue => changeHandler('heading1', newValue))} />
            </div>
            <div className='premium-element-typography'>
                <h2
                    style={{
                        ...typographyCss(getElementValue('heading2'), 'Desktop')
                    }}
                    className='premium-element-typography-title'
                >
                    {__('Heading 2', "premium-blocks-for-gutenberg")}
                </h2>
                <PremiumTypo value={getElementValue('heading2')} title={false} onChange={(newValue => changeHandler('heading2', newValue))} />
            </div>
            <div className='premium-element-typography'>
                <h3
                    style={{
                        ...typographyCss(getElementValue('heading3'), 'Desktop')
                    }}
                    className='premium-element-typography-title'
                >
                    {__('Heading 3', "premium-blocks-for-gutenberg")}
                </h3>
                <PremiumTypo value={getElementValue('heading3')} title={false} onChange={(newValue => changeHandler('heading3', newValue))} />
            </div>
            <div className='premium-element-typography'>
                <h4
                    style={{
                        ...typographyCss(getElementValue('heading4'), 'Desktop')
                    }}
                    className='premium-element-typography-title'
                >
                    {__('Heading 4', "premium-blocks-for-gutenberg")}
                </h4>
                <PremiumTypo value={getElementValue('heading4')} title={false} onChange={(newValue => changeHandler('heading4', newValue))} />
            </div>
            <div className='premium-element-typography'>
                <h5
                    style={{
                        ...typographyCss(getElementValue('heading5'), 'Desktop')
                    }}
                    className='premium-element-typography-title'
                >
                    {__('Heading 5', "premium-blocks-for-gutenberg")}
                </h5>
                <PremiumTypo value={getElementValue('heading5')} title={false} onChange={(newValue => changeHandler('heading5', newValue))} />
            </div>
            <div className='premium-element-typography'>
                <h6
                    style={{
                        ...typographyCss(getElementValue('heading6'), 'Desktop')
                    }}
                    className='premium-element-typography-title'
                >
                    {__('Heading 6', "premium-blocks-for-gutenberg")}
                </h6>
                <PremiumTypo value={getElementValue('heading6')} title={false} onChange={(newValue => changeHandler('heading6', newValue))} />
            </div>
            <div className='premium-element-typography'>
                <span
                    style={{
                        ...typographyCss(getElementValue('button'), 'Desktop')
                    }}
                    className='premium-element-typography-title'
                >
                    {__('Buttons', "premium-blocks-for-gutenberg")}
                </span>
                <PremiumTypo value={getElementValue('button')} title={false} onChange={(newValue => changeHandler('button', newValue))} />
            </div>
            <div className='premium-element-typography'>
                <p
                    style={{
                        ...typographyCss(getElementValue('paragraph'), 'Desktop')
                    }}
                    className='premium-element-typography-title'
                >
                    {__('Paragraphs', "premium-blocks-for-gutenberg")}
                </p>
                <PremiumTypo value={getElementValue('paragraph')} title={false} onChange={(newValue => changeHandler('paragraph', newValue))} />
            </div>
            <CheckboxControl
                label={__('Apply to Native Blocks', "premium-blocks-for-gutenberg")}
                checked={applyTypographyToDefault}
                onChange={() => setApplyTypographyToDefault(!applyTypographyToDefault)}
            />
        </div>
    </>
}

export default TypographyScreen