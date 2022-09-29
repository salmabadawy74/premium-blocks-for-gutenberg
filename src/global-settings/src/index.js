import { registerPlugin } from '@wordpress/plugins';
import { PluginSidebar, PluginSidebarMoreMenuItem } from '@wordpress/edit-post';
import { Fragment } from '@wordpress/element';
import GlobalStylesUI from './ui';
const { __ } = wp.i18n;
import './style.scss';
import { SettingsProvider } from './store/settings-store';
import { compose } from '@wordpress/compose'
import { withSelect } from '@wordpress/data'
import { store as coreStore } from '@wordpress/core-data';
import { generateCss } from '../../components/HelperFunction';
import WebFont from "webfontloader";
import { useEffect } from "@wordpress/element";

const PluginSidebarTest = ({ colorPallet, globalColors, customColors, globalTypography }) => {

    useEffect(() => {
        if (globalTypography && Object.keys(globalTypography).length) {
            Object.values(globalTypography).map(value => {
                if (value?.fontFamily && value?.fontFamily !== 'Default') {
                    WebFont.load({
                        google: {
                            families: [value?.fontFamily]
                        }
                    });
                }
            })
        }
    }, [globalTypography]);

    const loadStyles = () => {
        const { heading1, heading2, heading3, heading4, heading5, heading6, button, paragraph } = globalTypography;

        const styles = {};

        let css = '';

        // Colors
        if (colorPallet !== 'theme') {

            styles[`[class*="wp-block-premium"]`] = {
                'color': `var(--pbg-global-color3)`,
            };

            styles[`[class*="wp-block-premium"] h1, [class*="wp-block-premium"] h2, [class*="wp-block-premium"] h3,[class*="wp-block-premium"] h4,[class*="wp-block-premium"] h5,[class*="wp-block-premium"] h6, [class*="wp-block-premium"] a:not([class*="button"])`] = {
                'color': `var(--pbg-global-color2)`,
            };

            styles[`[class*="wp-block-premium"] .premium-button, [class*="wp-block-premium"] .premium-pricing-table__button_link, [class*="wp-block-premium"] .premium-modal-box-modal-lower-close`] = {
                'color': `#ffffff`,
                'background-color': `var(--pbg-global-color1)`,
                'border-color': `var(--pbg-global-color4)`,
            };

            styles[`[class*="wp-block-premium"] a:not([class*="button"]):hover`] = {
                'color': `var(--pbg-global-color1)`,
            };

            css += generateCss(styles);
        }
        // Typography
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

        css += generateCss(styles);

        return css;
    }

    useEffect(() => {
        if (!colorPallet) {
            return;
        }
        if (colorPallet === 'theme') {
            globalColors.colors.map((item, index) => {
                document.documentElement.style.removeProperty(`--pbg-global-${item.slug}`);
                return item;
            });
        } else {
            globalColors.colors.map((item, index) => {
                document.documentElement.style.setProperty(
                    `--pbg-global-${item.slug}`,
                    item.color
                );
                return item;
            });
        }
        const css = loadStyles();
        const styleSheet = document.querySelector('#premium-style-preview-css');
        if (styleSheet) {
            if (styleSheet.styleSheet) {
                styleSheet.styleSheet.cssText = css;
            } else {
                styleSheet.innerHTML = css;
            }
        } else {
            const head = document.head || document.getElementsByTagName('head')[0];
            const style = document.createElement('style');
            style.setAttribute('id', 'premium-style-preview-css');
            head.appendChild(style);
            style.type = 'text/css';
            if (style.styleSheet) {
                style.styleSheet.cssText = css;
            } else {
                style.appendChild(document.createTextNode(css));
            }
        }
    }, [colorPallet, globalColors, globalTypography]);

    return <Fragment>
        <PluginSidebarMoreMenuItem target="premium-sidebar">
            {__('Premium Blocks For Gutenberg')}
        </PluginSidebarMoreMenuItem>
        <PluginSidebar name="premium-sidebar" title={__('Premium Blocks For Gutenberg')}>
            <SettingsProvider>
                <GlobalStylesUI />
            </SettingsProvider>
        </PluginSidebar>
    </Fragment>
};

const TestComposed = compose(
    withSelect((select) => {
        const { __experimentalGetPreviewDeviceType = null } = select('core/edit-post');
        let deviceType = __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;
        const { getEditedEntityRecord } = select(coreStore);
        const pbgGlobalColors = getEditedEntityRecord('root', 'site')?.pbg_global_colors || [];
        const pbgDefaultPallet = getEditedEntityRecord('root', 'site')?.pbg_global_color_pallet || 'theme';
        const customColors = getEditedEntityRecord('root', 'site')?.pbg_custom_colors || [];
        const globalTypography = getEditedEntityRecord('root', 'site')?.pbg_global_typography || [];

        return {
            globalColors: pbgGlobalColors,
            colorPallet: pbgDefaultPallet,
            customColors,
            globalTypography: globalTypography,
            deviceType
        };
    }),
)(PluginSidebarTest);

registerPlugin('plugin-premium-blocks', { render: TestComposed });
