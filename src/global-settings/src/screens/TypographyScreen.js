import { __ } from '@wordpress/i18n';
import PremiumTypo from '../../../components/premium-typo';
import ScreenHeader from "../components/header"
import defaults from '../helpers/defaults';
import { useContext, useEffect } from "@wordpress/element";
import SettingsContext from '../store/settings-store';
import { typographyCss } from '../../../components/HelperFunction';
import WebfontLoader from '../../../components/typography/fontLoader';
import { generateCss } from '../../../components/HelperFunction';
import { useSelect, withSelect } from '@wordpress/data';

const TypographyScreen = props => {
    const { globalTypography, setGlobalTypography } = useContext(SettingsContext);
    const { typography: defaultValues } = defaults;
    const getElementValue = (element) => {
        let value = globalTypography?.[element] || defaultValues?.[element];
        return value;
    };

    const toString = (object) => {
        object = { ...object, Desktop: object.Desktop.toString(), Tablet: object.Tablet.toString(), Mobile: object.Mobile.toString() };
        return object;
    }

    const loadStyles = () => {
        const { heading1, heading2, heading3, heading4, heading5, heading6, button, paragraph } = globalTypography;
        const styles = {};

        styles[`div[class*="wp-block-premium"] h1`] = {
            'font-size': `${heading1?.fontSize?.[props.deviceType]}${heading1?.fontSize?.unit}`,
            'font-style': heading1?.fontStyle,
            'font-family': heading1?.fontFamily,
            'font-weight': heading1?.fontWeight,
            'letter-spacing': `${heading1?.letterSpacing?.[props.deviceType]}${heading1?.letterSpacing?.unit}`,
            'text-decoration': heading1?.textDecoration,
            'text-transform': heading1?.textTransform,
            'line-height': `${heading1?.lineHeight?.[props.deviceType]}${heading1?.lineHeight?.unit}`,
        };

        styles[`div[class*="wp-block-premium"] h2`] = {
            'font-size': `${heading2?.fontSize?.[props.deviceType]}${heading2?.fontSize?.unit}`,
            'font-style': heading2?.fontStyle,
            'font-family': heading2?.fontFamily,
            'font-weight': heading2?.fontWeight,
            'letter-spacing': `${heading2?.letterSpacing?.[props.deviceType]}${heading2?.letterSpacing?.unit}`,
            'text-decoration': heading2?.textDecoration,
            'text-transform': heading2?.textTransform,
            'line-height': `${heading2?.lineHeight?.[props.deviceType]}${heading2?.lineHeight?.unit}`,
        };

        styles[`div[class*="wp-block-premium"] h3`] = {
            'font-size': `${heading3?.fontSize?.[props.deviceType]}${heading3?.fontSize?.unit}`,
            'font-style': heading3?.fontStyle,
            'font-family': heading3?.fontFamily,
            'font-weight': heading3?.fontWeight,
            'letter-spacing': `${heading3?.letterSpacing?.[props.deviceType]}${heading3?.letterSpacing?.unit}`,
            'text-decoration': heading3?.textDecoration,
            'text-transform': heading3?.textTransform,
            'line-height': `${heading3?.lineHeight?.[props.deviceType]}${heading3?.lineHeight?.unit}`,
        };

        styles[`div[class*="wp-block-premium"] h4`] = {
            'font-size': `${heading4?.fontSize?.[props.deviceType]}${heading4?.fontSize?.unit}`,
            'font-style': heading4?.fontStyle,
            'font-family': heading4?.fontFamily,
            'font-weight': heading4?.fontWeight,
            'letter-spacing': `${heading4?.letterSpacing?.[props.deviceType]}${heading4?.letterSpacing?.unit}`,
            'text-decoration': heading4?.textDecoration,
            'text-transform': heading4?.textTransform,
            'line-height': `${heading4?.lineHeight?.[props.deviceType]}${heading4?.lineHeight?.unit}`,
        };

        styles[`div[class*="wp-block-premium"] h5`] = {
            'font-size': `${heading5?.fontSize?.[props.deviceType]}${heading5?.fontSize?.unit}`,
            'font-style': heading5?.fontStyle,
            'font-family': heading5?.fontFamily,
            'font-weight': heading5?.fontWeight,
            'letter-spacing': `${heading5?.letterSpacing?.[props.deviceType]}${heading5?.letterSpacing?.unit}`,
            'text-decoration': heading5?.textDecoration,
            'text-transform': heading5?.textTransform,
            'line-height': `${heading5?.lineHeight?.[props.deviceType]}${heading5?.lineHeight?.unit}`,
        };

        styles[`div[class*="wp-block-premium"] h6`] = {
            'font-size': `${heading6?.fontSize?.[props.deviceType]}${heading6?.fontSize?.unit}`,
            'font-style': heading6?.fontStyle,
            'font-family': heading6?.fontFamily,
            'font-weight': heading6?.fontWeight,
            'letter-spacing': `${heading6?.letterSpacing?.[props.deviceType]}${heading6?.letterSpacing?.unit}`,
            'text-decoration': heading6?.textDecoration,
            'text-transform': heading6?.textTransform,
            'line-height': `${heading6?.lineHeight?.[props.deviceType]}${heading6?.lineHeight?.unit}`,
        };

        styles[`[class*="wp-block-premium"] .premium-button, [class*="wp-block-premium"] .premium-pricing-table__button_link, [class*="wp-block-premium"] .premium-modal-box-modal-lower-close`] = {
            'font-size': `${button?.fontSize?.[props.deviceType]}${button?.fontSize?.unit}`,
            'font-style': button?.fontStyle,
            'font-family': button?.fontFamily,
            'font-weight': button?.fontWeight,
            'letter-spacing': `${button?.letterSpacing?.[props.deviceType]}${button?.letterSpacing?.unit}`,
            'text-decoration': button?.textDecoration,
            'text-transform': button?.textTransform,
            'line-height': `${button?.lineHeight?.[props.deviceType]}${button?.lineHeight?.unit}`,
        };

        styles[`[class*="wp-block-premium"] p`] = {
            'font-size': `${paragraph?.fontSize?.[props.deviceType]}${paragraph?.fontSize?.unit}`,
            'font-style': paragraph?.fontStyle,
            'font-family': paragraph?.fontFamily,
            'font-weight': paragraph?.fontWeight,
            'letter-spacing': `${paragraph?.letterSpacing?.[props.deviceType]}${paragraph?.letterSpacing?.unit}`,
            'text-decoration': paragraph?.textDecoration,
            'text-transform': paragraph?.textTransform,
            'line-height': `${paragraph?.lineHeight?.[props.deviceType]}${paragraph?.lineHeight?.unit}`,
        };

        return generateCss(styles);
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

    useEffect(() => {
        const css = loadStyles();
        const styleSheet = document.querySelector('#premiun-typography-preview-css');
        if (styleSheet) {
            if (styleSheet.styleSheet) {
                styleSheet.styleSheet.cssText = css;
            } else {
                styleSheet.innerHTML = css;
            }
        } else {
            const head = document.head || document.getElementsByTagName('head')[0];
            const style = document.createElement('style');
            style.setAttribute('id', 'premiun-typography-preview-css');
            head.appendChild(style);
            style.type = 'text/css';
            if (style.styleSheet) {
                style.styleSheet.cssText = css;
            } else {
                style.appendChild(document.createTextNode(css));
            }
        }
    }, [globalTypography]);

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

export default withSelect((select, props) => {
    const { __experimentalGetPreviewDeviceType = null } = select('core/edit-post');
    let deviceType = __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;

    return {
        deviceType: deviceType
    }
})(TypographyScreen)