import { __ } from '@wordpress/i18n';
import PremiumTypo from '../../../components/premium-typo';
import ScreenHeader from "../components/header"
import defaults from '../helpers/defaults';
import { useContext } from "@wordpress/element";
import SettingsContext from '../store/settings-store';
import { typographyCss } from '../../../components/HelperFunction';
import WebfontLoader from '../../../components/typography/fontLoader';

const TypographyScreen = props => {
    const { globalTypography, setGlobalTypography } = useContext(SettingsContext);
    const { typography: defaultValues } = defaults;
    const getElementValue = (element) => {
        const value = globalTypography?.[element] || defaultValues?.[element];

        return value;
    };
    const changeHandler = (element, value) => {
        const updatedTypography = { ...globalTypography };
        updatedTypography[element] = value;
        setGlobalTypography(updatedTypography);
    }

    const LoadElementGoogleFont = (props) => {
        const { typography } = props;

        if (typography?.fontFamily === 'Default') {
            return '';
        }

        const config = {
            google: {
                families: [typography.fontFamily]
            }
        }

        return <WebfontLoader config={config}>
        </WebfontLoader>;
    };

    return <>
        <ScreenHeader
            title={__('Typography')}
            description={__('Manage the typography settings for different elements.')}
        />
        <div className='premium-typography-screen'>
            <div className='premium-element-typography'>
                <h1
                    style={{
                        ...typographyCss(getElementValue('heading1'), 'Desktop')
                    }}
                    className='premium-element-typography-title'
                >
                    {__('Heading 1')}
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
                    {__('Heading 2')}
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
                    {__('Heading 3')}
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
                    {__('Heading 4')}
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
                    {__('Heading 5')}
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
                    {__('Heading 6')}
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
                    {__('Buttons')}
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
                    {__('Paragraphs')}
                </p>
                <PremiumTypo value={getElementValue('paragraph')} title={false} onChange={(newValue => changeHandler('paragraph', newValue))} />
            </div>
        </div>
        <LoadElementGoogleFont typography={getElementValue('heading1')} />
        <LoadElementGoogleFont typography={getElementValue('heading2')} />
        <LoadElementGoogleFont typography={getElementValue('heading3')} />
        <LoadElementGoogleFont typography={getElementValue('heading4')} />
        <LoadElementGoogleFont typography={getElementValue('heading5')} />
        <LoadElementGoogleFont typography={getElementValue('heading6')} />
        <LoadElementGoogleFont typography={getElementValue('button')} />
        <LoadElementGoogleFont typography={getElementValue('paragraph')} />
    </>
}

export default TypographyScreen