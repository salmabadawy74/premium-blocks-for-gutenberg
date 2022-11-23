import { __ } from '@wordpress/i18n';
import PremiumTypo from '../../../components/premium-typo';
import ScreenHeader from "../components/header"
import defaults from '../helpers/defaults';
import { useContext, useEffect } from "@wordpress/element";
import SettingsContext from '../store/settings-store';
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
        const allTypography = [
            getElementValue('heading1'),
            getElementValue('heading2'),
            getElementValue('heading3'),
            getElementValue('heading4'),
            getElementValue('heading5'),
            getElementValue('heading6'),
            getElementValue('button'),
            getElementValue('paragraph')
        ];
        const googleFonts = allTypography.filter(typography => typography?.fontFamily !== 'Default').map(typography => typography.fontFamily);
        if (googleFonts.length > 0) {
            WebFont.load({
                google: {
                    families: googleFonts
                }
            });
        }
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
                        fontFamily: getElementValue('heading1')?.fontFamily,
                        fontSize: '38px'
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
                        fontFamily: getElementValue('heading2')?.fontFamily,
                        fontSize: '30px'
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
                        fontFamily: getElementValue('heading3')?.fontFamily,
                        fontSize: '25px'
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
                        fontFamily: getElementValue('heading4')?.fontFamily,
                        fontSize: '20px'
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
                        fontFamily: getElementValue('heading5')?.fontFamily,
                        fontSize: '18px'
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
                        fontFamily: getElementValue('heading6')?.fontFamily,
                        fontSize: '15px'
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
                        fontFamily: getElementValue('button')?.fontFamily
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
                        fontFamily: getElementValue('paragraph')?.fontFamily
                    }}
                    className='premium-element-typography-title'
                >
                    {__('Paragraphs', "premium-blocks-for-gutenberg")}
                </p>
                <PremiumTypo value={getElementValue('paragraph')} title={false} onChange={(newValue => changeHandler('paragraph', newValue))} />
            </div>
            <CheckboxControl
                label={__('Apply to Native Gutenberg Blocks', "premium-blocks-for-gutenberg")}
                checked={applyTypographyToDefault}
                onChange={() => setApplyTypographyToDefault(!applyTypographyToDefault)}
            />
        </div>
    </>
}

export default TypographyScreen