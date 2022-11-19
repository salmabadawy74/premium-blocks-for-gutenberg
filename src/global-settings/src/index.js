import { registerPlugin } from '@wordpress/plugins';
import { PluginSidebar, PluginSidebarMoreMenuItem } from '@wordpress/edit-post';
import { Fragment, render } from '@wordpress/element';
import GlobalStylesUI from './ui';
const { __ } = wp.i18n;
import './styles/index.scss';
import { SettingsProvider } from './store/settings-store';
import { PluginSidebar as EditSitePluginSidebar, PluginSidebarMoreMenuItem as EditSitePluginSidebarMoreMenuItem } from '@wordpress/edit-site';
import { useSelect } from '@wordpress/data'
import { store as coreStore } from '@wordpress/core-data';
import { generateCss } from '../../components/HelperFunction';
import WebFont from "webfontloader";
import { useEffect } from "@wordpress/element";

const SidebarIcon = () => {
    return <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 271.92 258.62"><title>font-icon</title><path d="M197,158.57c12.92,39.76,25.75,79.26,38.6,118.77l-.57.38q-5.34-3.86-10.68-7.72l-57.08-41.49c-1.9-1.38-3.85-2.7-5.79-4-1.79-1.22-2.25-2.93-1.1-4.65,1.27-1.91,2.8-1.05,4.31,0q29.06,21.23,58.16,42.4c.66.48,1.31,1,2,1.49l.63-.37c-.7-2.32-1.36-4.65-2.11-6.95-5.48-16.77-11-33.53-16.47-50.3-4.73-14.53-9.27-29.12-14.18-43.59a6.45,6.45,0,0,1-.22-.83l-9.73,6.78a1.69,1.69,0,0,0-.38,1.92l21.78,62.81-35.4-26.8L67.54,279.31c10.14-30.78,20-60.83,30-91.08a27,27,0,0,0,2.83,1.81c1.5.7,1.69,1.52,1.15,3.13-4.28,12.75-8.42,25.55-12.63,38.33C85.47,241.86,82,252.2,78.6,262.56c-.25.76-.33,1.58-.66,3.22l3.27-2.35,82.84-59.66.59-.42-13.83-10.47a1.62,1.62,0,0,0-1.84.17l-53.1,40.19,14.71-42.41L14,120.69h96.19c-.49,1.73-.91,3.24-1.42,5H31.62l-.33.9q40.5,29.43,81.11,59l5.41-15.6a1.63,1.63,0,0,0-.72-1.61L62.43,130.29l50.89,1L149,20.69c10.1,30.8,19.95,60.85,29.87,91.13a25.21,25.21,0,0,0-3.35.21c-1.62.32-2.26-.22-2.79-1.84-4.11-12.8-8.37-25.56-12.55-38.35-3.4-10.36-6.75-20.74-10.14-31.11-.25-.76-.67-1.47-1.38-3-.57,1.75-.9,2.79-1.24,3.83q-14.48,44.91-28.94,89.81l10.91.22a1.74,1.74,0,0,0,1.35-1.31L150,66.66,165.58,118H286L208.38,174.4a26.75,26.75,0,0,0-1.23-3.12c-.81-1.45-.49-2.22.89-3.22,10.93-7.84,21.77-15.81,32.65-23.71q13.25-9.61,26.51-19.2a32.25,32.25,0,0,0,2.41-2.22H167.06l2.37,7.81a1.73,1.73,0,0,0,1.65.87l66.49-1.31Z" transform="translate(-14.04 -20.69)" /></svg>
};
const loadGlobalStyles = (globalStyle) => {
    const { colorPalette, globalColors, globalTypography, deviceType, applyColorsToDefault, applyTypographyToDefault } = globalStyle;
    const css = loadStyles(colorPalette, globalColors, globalTypography, applyColorsToDefault, applyTypographyToDefault, deviceType);

    return css;
};

const loadStyles = (colorPalette, globalColors, globalTypography, applyColorsToDefault, applyTypographyToDefault, deviceType) => {
    if (!colorPalette || !globalColors?.colors) {
        return '';
    }
    const { heading1, heading2, heading3, heading4, heading5, heading6, button, paragraph } = globalTypography;

    const styles = {};

    let css = '';

    // Colors
    if (colorPalette !== 'theme') {
        styles[':root'] = {};
        globalColors.colors.map((item, index) => {
            styles[':root'][`--pbg-global-${item.slug}`] = item.color;
            return item;
        });
        styles[`[class*="wp-block-premium"]`] = {
            'color': `var(--pbg-global-color3)`,
        };

        styles[`[class*="wp-block-premium"] h1, [class*="wp-block-premium"] h2, [class*="wp-block-premium"] h3,[class*="wp-block-premium"] h4,[class*="wp-block-premium"] h5,[class*="wp-block-premium"] h6, [class*="wp-block-premium"] a:not([class*="button"])`] = {
            'color': `var(--pbg-global-color2)`,
        };

        styles[`[class*="wp-block-premium"] .premium-button, [class*="wp-block-premium"] .premium-button a, [class*="wp-block-premium"] .premium-modal-box-modal-lower-close`] = {
            'color': `#ffffff`,
            'background-color': `var(--pbg-global-color1)`,
            'border-color': `var(--pbg-global-color4)`,
        };

        styles[`[class*="wp-block-premium"] a:not([class*="button"]):hover`] = {
            'color': `var(--pbg-global-color1)`,
        };

        // Core Blocks Styles
        if (applyColorsToDefault) {
            styles[`.editor-styles-wrapper [data-type^="core/"]`] = {
                'color': `var(--pbg-global-color3)`,
            };

            styles[`.editor-styles-wrapper h1[data-type^="core/"], .editor-styles-wrapper h2[data-type^="core/"], .editor-styles-wrapper h3[data-type^="core/"],.editor-styles-wrapper h4[data-type^="core/"],.editor-styles-wrapper h5[data-type^="core/"],.editor-styles-wrapper h6[data-type^="core/"], .editor-styles-wrapper [data-type^="core/"] a:not([class*="button"])`] = {
                'color': `var(--pbg-global-color2)`,
            };

            styles[`.editor-styles-wrapper .wp-block-button > div, .editor-styles-wrapper .wp-block-button > .wp-block-button__link`] = {
                'color': `#ffffff`,
                'background-color': `var(--pbg-global-color1)`,
                'border-color': `var(--pbg-global-color4)`,
            };

            styles[`.editor-styles-wrapper [data-type^="core/"] a:not([class*="button"]):hover`] = {
                'color': `var(--pbg-global-color1)`,
            };
        }

        css += generateCss(styles);
    }
    // Typography
    styles[`div[class*="wp-block-premium"] h1`] = {
        'font-size': `${heading1?.fontSize?.[deviceType]}${heading1?.fontSize?.unit}`,
        'font-style': heading1?.fontStyle,
        'font-family': heading1?.fontFamily,
        'font-weight': heading1?.fontWeight,
        'letter-spacing': `${heading1?.letterSpacing?.[deviceType]}${heading1?.letterSpacing?.unit}`,
        'text-decoration': heading1?.textDecoration,
        'text-transform': heading1?.textTransform,
        'line-height': `${heading1?.lineHeight?.[deviceType]}${heading1?.lineHeight?.unit}`,
    };

    styles[`div[class*="wp-block-premium"] h2`] = {
        'font-size': `${heading2?.fontSize?.[deviceType]}${heading2?.fontSize?.unit}`,
        'font-style': heading2?.fontStyle,
        'font-family': heading2?.fontFamily,
        'font-weight': heading2?.fontWeight,
        'letter-spacing': `${heading2?.letterSpacing?.[deviceType]}${heading2?.letterSpacing?.unit}`,
        'text-decoration': heading2?.textDecoration,
        'text-transform': heading2?.textTransform,
        'line-height': `${heading2?.lineHeight?.[deviceType]}${heading2?.lineHeight?.unit}`,
    };

    styles[`div[class*="wp-block-premium"] h3`] = {
        'font-size': `${heading3?.fontSize?.[deviceType]}${heading3?.fontSize?.unit}`,
        'font-style': heading3?.fontStyle,
        'font-family': heading3?.fontFamily,
        'font-weight': heading3?.fontWeight,
        'letter-spacing': `${heading3?.letterSpacing?.[deviceType]}${heading3?.letterSpacing?.unit}`,
        'text-decoration': heading3?.textDecoration,
        'text-transform': heading3?.textTransform,
        'line-height': `${heading3?.lineHeight?.[deviceType]}${heading3?.lineHeight?.unit}`,
    };

    styles[`div[class*="wp-block-premium"] h4`] = {
        'font-size': `${heading4?.fontSize?.[deviceType]}${heading4?.fontSize?.unit}`,
        'font-style': heading4?.fontStyle,
        'font-family': heading4?.fontFamily,
        'font-weight': heading4?.fontWeight,
        'letter-spacing': `${heading4?.letterSpacing?.[deviceType]}${heading4?.letterSpacing?.unit}`,
        'text-decoration': heading4?.textDecoration,
        'text-transform': heading4?.textTransform,
        'line-height': `${heading4?.lineHeight?.[deviceType]}${heading4?.lineHeight?.unit}`,
    };

    styles[`div[class*="wp-block-premium"] h5`] = {
        'font-size': `${heading5?.fontSize?.[deviceType]}${heading5?.fontSize?.unit}`,
        'font-style': heading5?.fontStyle,
        'font-family': heading5?.fontFamily,
        'font-weight': heading5?.fontWeight,
        'letter-spacing': `${heading5?.letterSpacing?.[deviceType]}${heading5?.letterSpacing?.unit}`,
        'text-decoration': heading5?.textDecoration,
        'text-transform': heading5?.textTransform,
        'line-height': `${heading5?.lineHeight?.[deviceType]}${heading5?.lineHeight?.unit}`,
    };

    styles[`div[class*="wp-block-premium"] h6`] = {
        'font-size': `${heading6?.fontSize?.[deviceType]}${heading6?.fontSize?.unit}`,
        'font-style': heading6?.fontStyle,
        'font-family': heading6?.fontFamily,
        'font-weight': heading6?.fontWeight,
        'letter-spacing': `${heading6?.letterSpacing?.[deviceType]}${heading6?.letterSpacing?.unit}`,
        'text-decoration': heading6?.textDecoration,
        'text-transform': heading6?.textTransform,
        'line-height': `${heading6?.lineHeight?.[deviceType]}${heading6?.lineHeight?.unit}`,
    };

    styles[`[class*="wp-block-premium"] .premium-button, [class*="wp-block-premium"] .premium-pricing-table__button_link, [class*="wp-block-premium"] .premium-modal-box-modal-lower-close`] = {
        'font-size': `${button?.fontSize?.[deviceType]}${button?.fontSize?.unit}`,
        'font-style': button?.fontStyle,
        'font-family': button?.fontFamily,
        'font-weight': button?.fontWeight,
        'letter-spacing': `${button?.letterSpacing?.[deviceType]}${button?.letterSpacing?.unit}`,
        'text-decoration': button?.textDecoration,
        'text-transform': button?.textTransform,
        'line-height': `${button?.lineHeight?.[deviceType]}${button?.lineHeight?.unit}`,
    };

    styles[`[class*="wp-block-premium"] p`] = {
        'font-size': `${paragraph?.fontSize?.[deviceType]}${paragraph?.fontSize?.unit}`,
        'font-style': paragraph?.fontStyle,
        'font-family': paragraph?.fontFamily,
        'font-weight': paragraph?.fontWeight,
        'letter-spacing': `${paragraph?.letterSpacing?.[deviceType]}${paragraph?.letterSpacing?.unit}`,
        'text-decoration': paragraph?.textDecoration,
        'text-transform': paragraph?.textTransform,
        'line-height': `${paragraph?.lineHeight?.[deviceType]}${paragraph?.lineHeight?.unit}`,
    };

    // Core Blocks Styles
    if (applyTypographyToDefault) {
        styles['.editor-styles-wrapper h1[data-type^="core/"]'] = {
            'font-size': `${heading1?.fontSize?.[deviceType]}${heading1?.fontSize?.unit}`,
            'font-style': heading1?.fontStyle,
            'font-family': heading1?.fontFamily,
            'font-weight': heading1?.fontWeight,
            'letter-spacing': `${heading1?.letterSpacing?.[deviceType]}${heading1?.letterSpacing?.unit}`,
            'text-decoration': heading1?.textDecoration,
            'text-transform': heading1?.textTransform,
            'line-height': `${heading1?.lineHeight?.[deviceType]}${heading1?.lineHeight?.unit}`,
        };

        styles['.editor-styles-wrapper h2[data-type^="core/"]'] = {
            'font-size': `${heading2?.fontSize?.[deviceType]}${heading2?.fontSize?.unit}`,
            'font-style': heading2?.fontStyle,
            'font-family': heading2?.fontFamily,
            'font-weight': heading2?.fontWeight,
            'letter-spacing': `${heading2?.letterSpacing?.[deviceType]}${heading2?.letterSpacing?.unit}`,
            'text-decoration': heading2?.textDecoration,
            'text-transform': heading2?.textTransform,
            'line-height': `${heading2?.lineHeight?.[deviceType]}${heading2?.lineHeight?.unit}`,
        };

        styles['.editor-styles-wrapper h3[data-type^="core/"]'] = {
            'font-size': `${heading3?.fontSize?.[deviceType]}${heading3?.fontSize?.unit}`,
            'font-style': heading3?.fontStyle,
            'font-family': heading3?.fontFamily,
            'font-weight': heading3?.fontWeight,
            'letter-spacing': `${heading3?.letterSpacing?.[deviceType]}${heading3?.letterSpacing?.unit}`,
            'text-decoration': heading3?.textDecoration,
            'text-transform': heading3?.textTransform,
            'line-height': `${heading3?.lineHeight?.[deviceType]}${heading3?.lineHeight?.unit}`,
        };

        styles['.editor-styles-wrapper h4[data-type^="core/"]'] = {
            'font-size': `${heading4?.fontSize?.[deviceType]}${heading4?.fontSize?.unit}`,
            'font-style': heading4?.fontStyle,
            'font-family': heading4?.fontFamily,
            'font-weight': heading4?.fontWeight,
            'letter-spacing': `${heading4?.letterSpacing?.[deviceType]}${heading4?.letterSpacing?.unit}`,
            'text-decoration': heading4?.textDecoration,
            'text-transform': heading4?.textTransform,
            'line-height': `${heading4?.lineHeight?.[deviceType]}${heading4?.lineHeight?.unit}`,
        };

        styles['.editor-styles-wrapper h5[data-type^="core/"]'] = {
            'font-size': `${heading5?.fontSize?.[deviceType]}${heading5?.fontSize?.unit}`,
            'font-style': heading5?.fontStyle,
            'font-family': heading5?.fontFamily,
            'font-weight': heading5?.fontWeight,
            'letter-spacing': `${heading5?.letterSpacing?.[deviceType]}${heading5?.letterSpacing?.unit}`,
            'text-decoration': heading5?.textDecoration,
            'text-transform': heading5?.textTransform,
            'line-height': `${heading5?.lineHeight?.[deviceType]}${heading5?.lineHeight?.unit}`,
        };

        styles['.editor-styles-wrapper h6[data-type^="core/"]'] = {
            'font-size': `${heading6?.fontSize?.[deviceType]}${heading6?.fontSize?.unit}`,
            'font-style': heading6?.fontStyle,
            'font-family': heading6?.fontFamily,
            'font-weight': heading6?.fontWeight,
            'letter-spacing': `${heading6?.letterSpacing?.[deviceType]}${heading6?.letterSpacing?.unit}`,
            'text-decoration': heading6?.textDecoration,
            'text-transform': heading6?.textTransform,
            'line-height': `${heading6?.lineHeight?.[deviceType]}${heading6?.lineHeight?.unit}`,
        };

        styles['.editor-styles-wrapper .wp-block-button > div, .editor-styles-wrapper .wp-block-button > .wp-block-button__link'] = {
            'font-size': `${button?.fontSize?.[deviceType]}${button?.fontSize?.unit}`,
            'font-style': button?.fontStyle,
            'font-family': button?.fontFamily,
            'font-weight': button?.fontWeight,
            'letter-spacing': `${button?.letterSpacing?.[deviceType]}${button?.letterSpacing?.unit}`,
            'text-decoration': button?.textDecoration,
            'text-transform': button?.textTransform,
            'line-height': `${button?.lineHeight?.[deviceType]}${button?.lineHeight?.unit}`,
        };

        styles['.editor-styles-wrapper p[data-type^="core/"], .editor-styles-wrapper [data-type^="core/"] p'] = {
            'font-size': `${paragraph?.fontSize?.[deviceType]}${paragraph?.fontSize?.unit}`,
            'font-style': paragraph?.fontStyle,
            'font-family': paragraph?.fontFamily,
            'font-weight': paragraph?.fontWeight,
            'letter-spacing': `${paragraph?.letterSpacing?.[deviceType]}${paragraph?.letterSpacing?.unit}`,
            'text-decoration': paragraph?.textDecoration,
            'text-transform': paragraph?.textTransform,
            'line-height': `${paragraph?.lineHeight?.[deviceType]}${paragraph?.lineHeight?.unit}`,
        };
    }

    css += generateCss(styles);

    return css;
}

const loadFonts = (globalTypography, editorDom = '') => {
    if (globalTypography && Object.keys(globalTypography).length) {
        Object.values(globalTypography).map(value => {
            if (value?.fontFamily && value?.fontFamily !== 'Default') {
                WebFont.load({
                    google: {
                        families: [value?.fontFamily]
                    },
                    context: editorDom || ''
                });
            }
        })
    }
};

const PremiumSidebar = () => {
    return <SettingsProvider>
        <GlobalStylesUI />
    </SettingsProvider>
};

const PluginSidebarPostEditor = () => {
    return <Fragment>
        <PluginSidebarMoreMenuItem target="premium-sidebar" icon={<SidebarIcon />}>
            {__('Premium Blocks For Gutenberg')}
        </PluginSidebarMoreMenuItem>
        <PluginSidebar name="premium-sidebar" icon={<SidebarIcon />} title={__('Premium Blocks For Gutenberg', "premium-blocks-for-gutenberg")}>
            <PremiumSidebar />
        </PluginSidebar>
    </Fragment>
}

const PluginSidebarEditSite = () => {
    return <Fragment>
        <EditSitePluginSidebarMoreMenuItem target="premium-sidebar" icon={<SidebarIcon />}>
            {__('Premium Blocks For Gutenberg')}
        </EditSitePluginSidebarMoreMenuItem>
        <EditSitePluginSidebar name="premium-sidebar" icon={<SidebarIcon />} title={__('Premium Blocks For Gutenberg', "premium-blocks-for-gutenberg")}>
            <PremiumSidebar />
        </EditSitePluginSidebar>
    </Fragment >
};

const PremiumGlobalStyles = () => {
    const { globalColors, colorPalette, globalTypography, deviceType, applyColorsToDefault, applyTypographyToDefault } = useSelect(
        (select) => {
            const { __experimentalGetPreviewDeviceType = null } = select('core/edit-site');
            let deviceType = __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;
            const { getEditedEntityRecord } = select(coreStore);
            const pbgGlobalColors = getEditedEntityRecord('root', 'site')?.pbg_global_colors || [];
            const pbgDefaultPalette = getEditedEntityRecord('root', 'site')?.pbg_global_color_palette || 'theme';
            const globalTypography = getEditedEntityRecord('root', 'site')?.pbg_global_typography || [];
            const applyColorsToDefault = getEditedEntityRecord('root', 'site')?.pbg_global_colors_to_default || false;
            const applyTypographyToDefault = getEditedEntityRecord('root', 'site')?.pbg_global_typography_to_default || false;

            return {
                globalColors: pbgGlobalColors,
                colorPalette: pbgDefaultPalette,
                globalTypography: globalTypography,
                deviceType,
                applyColorsToDefault,
                applyTypographyToDefault
            };
        },
        []
    );

    useEffect(() => {
        const loadStyleSheet = (editorDom) => {
            if (editorDom) {
                console.log(editorDom);
            }
            const css = loadGlobalStyles({ globalColors, colorPalette, globalTypography, deviceType, applyColorsToDefault, applyTypographyToDefault });
            const styleSheet = editorDom.querySelector('#premium-style-preview-css');

            if (styleSheet) {
                if (styleSheet.styleSheet) {
                    styleSheet.styleSheet.cssText = css;
                } else {
                    styleSheet.innerHTML = css;
                }
            } else {
                const style = document.createElement('style');
                style.setAttribute('id', 'premium-style-preview-css');
                editorDom.appendChild(style);
                style.type = 'text/css';
                if (style.styleSheet) {
                    style.styleSheet.cssText = css;
                } else {
                    style.appendChild(document.createTextNode(css));
                }
            }
        };
        const postEditorDom = document.querySelector(`.editor-styles-wrapper`);
        if (postEditorDom) {
            loadFonts(globalTypography);
            loadStyleSheet(postEditorDom);
            return;
        }

        let interval = null;
        let siteEditorDom = document.querySelector(`iframe[name="editor-canvas"]`);

        if (siteEditorDom && siteEditorDom.contentDocument?.body?.childNodes?.length !== 0) {
            const editorBody = siteEditorDom.contentDocument.body;
            loadFonts(globalTypography, siteEditorDom.contentWindow);
            loadStyleSheet(editorBody);
        } else {
            interval = setInterval(() => {
                siteEditorDom = document.querySelector(`iframe[name="editor-canvas"]`);
                if (siteEditorDom) {
                    const editorBody = siteEditorDom.contentDocument.body;
                    if (editorBody && editorBody?.childNodes?.length !== 0) {
                        clearInterval(interval);
                        loadFonts(globalTypography, siteEditorDom.contentWindow);
                        loadStyleSheet(editorBody);
                    }
                }
            }, 200)
        }

        return () => {
            clearInterval(interval)
        }
    }, [globalColors, colorPalette, globalTypography, deviceType, applyColorsToDefault, applyTypographyToDefault]);

    return null
}

registerPlugin('plugin-premium-blocks-styles', { render: PremiumGlobalStyles });
registerPlugin('plugin-premium-blocks', { render: PluginSidebarPostEditor });
if (pbgGlobalSettings.apiData?.['enable-site-editor-sidebar'] && pbgGlobalSettings.isBlockTheme) {
    registerPlugin('plugin-premium-blocks-edit-site', { render: PluginSidebarEditSite });
}