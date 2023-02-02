import { registerPlugin } from '@wordpress/plugins';
import { PluginSidebar, PluginSidebarMoreMenuItem } from '@wordpress/edit-post';
import { Fragment } from '@wordpress/element';
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

const SidebarIconItem = () => {
    return <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 294.56 280.18"><title>pg-font-icon</title><path class="cls-1" d="M205.05,181.22l92.23-64.28-111.82,2.2a2.88,2.88,0,0,1-2.77-1.47L150,9.91l-32.47,107a2.89,2.89,0,0,1-2.27,2.21L2.72,116.94,94.64,181a2.71,2.71,0,0,1,1.22,2.7L59,290.09l89.3-67.6a2.73,2.73,0,0,1,3.1-.29L241,290.09,204.41,184.45A2.85,2.85,0,0,1,205.05,181.22ZM189,158.88c-3.39,4.1-6.89,6.56-11.06,7.85-3.28,1-4.33,2.49-4.33,6.1,0,1,0,1.94,0,2.91,0,1.79.07,3.65,0,5.48-.38,12.44-8.72,21.2-21.23,22.3a33.14,33.14,0,0,1-3.4.16c-15.71,0-26.65-10.13-28.92-27.1a80.48,80.48,0,0,1-.76-11.74A88.92,88.92,0,0,1,121,148.66c2.75-15.39,18.35-23.32,31.21-21.87a25.7,25.7,0,0,1,16.13,7.55,17.72,17.72,0,0,1,5,10.54c.37,3.15-1.38,4.36-2.9,4.83-2.21.67-3.93-.11-5.11-2.33-.34-.61-.64-1.22-1-1.84s-.71-1.44-1.1-2.13c-3.83-6.92-9.13-10-16.24-9.25-8.17.79-13.52,4.74-16.36,12-1.49,3.82-2,8.22-1.68,13.81.18,2.8.13,5.62.08,8.36a79.79,79.79,0,0,0,.31,10.7,19.49,19.49,0,0,0,30.48,13.75c4.17-2.86,4.91-7,4.77-12.27a59.37,59.37,0,0,1,.19-7,3.5,3.5,0,0,0-1.08-3.34c-.87-.62-2.18-.57-3.7.13a16.66,16.66,0,0,0-7.52,6.75l-.24.42c-.65,1.1-1.36,2.33-2.65,2.62a3.48,3.48,0,0,1-2.78-.76,3.94,3.94,0,0,1-1.88-2.6c-.17-1.2.33-2.52,1.59-4.15,5.22-6.76,11.65-10.19,19.67-10.46,7.24-.26,13.09-2.93,17.39-7.92a4.9,4.9,0,0,1,3.19-2,3.39,3.39,0,0,1,2.55,1C191.83,155.45,190.12,157.52,189,158.88Z" transform="translate(-2.72 -9.91)" /></svg>
};
const SidebarIcon = () => {
    return <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="294.56" height="280.18" viewBox="0 0 294.56 280.18"><title>pg-font-icon</title><path class="cls-1" d="M205.05,181.22l92.23-64.28-111.82,2.2a2.88,2.88,0,0,1-2.77-1.47L150,9.91l-32.47,107a2.89,2.89,0,0,1-2.27,2.21L2.72,116.94,94.64,181a2.71,2.71,0,0,1,1.22,2.7L59,290.09l89.3-67.6a2.73,2.73,0,0,1,3.1-.29L241,290.09,204.41,184.45A2.85,2.85,0,0,1,205.05,181.22ZM189,158.88c-3.39,4.1-6.89,6.56-11.06,7.85-3.28,1-4.33,2.49-4.33,6.1,0,1,0,1.94,0,2.91,0,1.79.07,3.65,0,5.48-.38,12.44-8.72,21.2-21.23,22.3a33.14,33.14,0,0,1-3.4.16c-15.71,0-26.65-10.13-28.92-27.1a80.48,80.48,0,0,1-.76-11.74A88.92,88.92,0,0,1,121,148.66c2.75-15.39,18.35-23.32,31.21-21.87a25.7,25.7,0,0,1,16.13,7.55,17.72,17.72,0,0,1,5,10.54c.37,3.15-1.38,4.36-2.9,4.83-2.21.67-3.93-.11-5.11-2.33-.34-.61-.64-1.22-1-1.84s-.71-1.44-1.1-2.13c-3.83-6.92-9.13-10-16.24-9.25-8.17.79-13.52,4.74-16.36,12-1.49,3.82-2,8.22-1.68,13.81.18,2.8.13,5.62.08,8.36a79.79,79.79,0,0,0,.31,10.7,19.49,19.49,0,0,0,30.48,13.75c4.17-2.86,4.91-7,4.77-12.27a59.37,59.37,0,0,1,.19-7,3.5,3.5,0,0,0-1.08-3.34c-.87-.62-2.18-.57-3.7.13a16.66,16.66,0,0,0-7.52,6.75l-.24.42c-.65,1.1-1.36,2.33-2.65,2.62a3.48,3.48,0,0,1-2.78-.76,3.94,3.94,0,0,1-1.88-2.6c-.17-1.2.33-2.52,1.59-4.15,5.22-6.76,11.65-10.19,19.67-10.46,7.24-.26,13.09-2.93,17.39-7.92a4.9,4.9,0,0,1,3.19-2,3.39,3.39,0,0,1,2.55,1C191.83,155.45,190.12,157.52,189,158.88Z" transform="translate(-2.72 -9.91)" /></svg>
};
const loadGlobalStyles = (globalStyle) => {
    const { colorPalette, globalColors, globalTypography, deviceType, applyColorsToDefault, applyTypographyToDefault, layoutSettings } = globalStyle;
    const css = loadStyles(colorPalette, globalColors, globalTypography, applyColorsToDefault, applyTypographyToDefault, deviceType, layoutSettings);

    return css;
};

const loadStyles = (colorPalette, globalColors, globalTypography, applyColorsToDefault, applyTypographyToDefault, deviceType, layoutSettings) => {
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
    // Block Spacing
    styles['.editor-styles-wrapper .is-layout-constrained > * + *, .editor-styles-wrapper > .block-editor-block-list__layout.is-root-container > .wp-block + .wp-block'] = {
        'margin-block-start': `${layoutSettings?.block_spacing + 'px' }`,
        'margin-top': `${layoutSettings?.block_spacing + 'px' }`,
    };
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

        styles['.wp-block-button > div, .wp-block-button > .wp-block-button__link'] = {
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
        <PluginSidebarMoreMenuItem target="premium-sidebar" icon={<SidebarIconItem />}>
            {__('Premium Blocks')}
        </PluginSidebarMoreMenuItem>
        <PluginSidebar name="premium-sidebar" icon={<SidebarIcon />} title={__('Premium Blocks', "premium-blocks-for-gutenberg")}>
            <PremiumSidebar />
        </PluginSidebar>
    </Fragment>
}

const PluginSidebarEditSite = () => {
    return <Fragment>
        <EditSitePluginSidebarMoreMenuItem target="premium-sidebar" icon={<SidebarIconItem />}>
            {__('Premium Blocks')}
        </EditSitePluginSidebarMoreMenuItem>
        <EditSitePluginSidebar name="premium-sidebar" icon={<SidebarIcon />} title={__('Premium Blocks', "premium-blocks-for-gutenberg")}>
            <PremiumSidebar />
        </EditSitePluginSidebar>
    </Fragment >
};

const PremiumGlobalStyles = () => {
    const { globalColors, colorPalette, globalTypography, deviceType, applyColorsToDefault, applyTypographyToDefault, layoutSettings } = useSelect(
        (select) => {
            const { __experimentalGetPreviewDeviceType = null } = select('core/edit-site');
            let deviceType = __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;
            const { getEditedEntityRecord } = select(coreStore);
            const pbgGlobalColors = getEditedEntityRecord('root', 'site')?.pbg_global_colors || [];
            const pbgDefaultPalette = getEditedEntityRecord('root', 'site')?.pbg_global_color_palette || 'theme';
            const globalTypography = getEditedEntityRecord('root', 'site')?.pbg_global_typography || [];
            const applyColorsToDefault = getEditedEntityRecord('root', 'site')?.pbg_global_colors_to_default || false;
            const applyTypographyToDefault = getEditedEntityRecord('root', 'site')?.pbg_global_typography_to_default || false;
            const pbgLayoutSettings = getEditedEntityRecord('root', 'site')?.pbg_global_layout || false;

            return {
                globalColors: pbgGlobalColors,
                colorPalette: pbgDefaultPalette,
                globalTypography: globalTypography,
                deviceType,
                applyColorsToDefault,
                applyTypographyToDefault,
                layoutSettings: pbgLayoutSettings
            };
        },
        []
    );

    useEffect(() => {
        const loadStyleSheet = (editorDom) => {
            const css = loadGlobalStyles({ globalColors, colorPalette, globalTypography, deviceType, applyColorsToDefault, applyTypographyToDefault, layoutSettings });
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
    }, [globalColors, colorPalette, globalTypography, deviceType, applyColorsToDefault, applyTypographyToDefault, layoutSettings]);

    return null
}

registerPlugin('plugin-premium-blocks-styles', { render: PremiumGlobalStyles });
registerPlugin('plugin-premium-blocks', { render: PluginSidebarPostEditor });
if (pbgGlobalSettings.apiData?.['enable-site-editor-sidebar'] && pbgGlobalSettings.isBlockTheme) {
    registerPlugin('plugin-premium-blocks-edit-site', { render: PluginSidebarEditSite });
}