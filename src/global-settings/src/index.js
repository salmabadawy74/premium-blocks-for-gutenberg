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

const loadGlobalStyles = (globalStyle) => {
    const { colorPallet, globalColors, globalTypography, deviceType, applyColorsToDefault, applyTypographyToDefault } = globalStyle;
    const css = loadStyles(colorPallet, globalColors, globalTypography, applyColorsToDefault, applyTypographyToDefault, deviceType);

    return css;
};

const loadStyles = (colorPallet, globalColors, globalTypography, applyColorsToDefault, applyTypographyToDefault, deviceType) => {
    if (!colorPallet || !globalColors?.colors) {
        return '';
    }
    const { heading1, heading2, heading3, heading4, heading5, heading6, button, paragraph } = globalTypography;

    const styles = {};

    let css = '';

    // Colors
    if (colorPallet !== 'theme') {
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

        styles[`[class*="wp-block-premium"] .premium-button, [class*="wp-block-premium"] .premium-pricing-table__button_link, [class*="wp-block-premium"] .premium-modal-box-modal-lower-close`] = {
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

            styles[`.editor-styles-wrapper .wp-block-button > div`] = {
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

        styles['.editor-styles-wrapper .wp-block-button > div'] = {
            'font-size': `${button?.fontSize?.[deviceType]}${button?.fontSize?.unit}`,
            'font-style': button?.fontStyle,
            'font-family': button?.fontFamily,
            'font-weight': button?.fontWeight,
            'letter-spacing': `${button?.letterSpacing?.[deviceType]}${button?.letterSpacing?.unit}`,
            'text-decoration': button?.textDecoration,
            'text-transform': button?.textTransform,
            'line-height': `${button?.lineHeight?.[deviceType]}${button?.lineHeight?.unit}`,
        };

        styles['.editor-styles-wrapper p[data-type^="core/"]'] = {
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
        <PluginSidebarMoreMenuItem target="premium-sidebar">
            {__('Premium Blocks For Gutenberg')}
        </PluginSidebarMoreMenuItem>
        <PluginSidebar name="premium-sidebar" title={__('Premium Blocks For Gutenberg', "premium-blocks-for-gutenberg")}>
            <PremiumSidebar />
        </PluginSidebar>
    </Fragment>
}

const PluginSidebarEditSite = () => {
    return <Fragment>
        <EditSitePluginSidebarMoreMenuItem target="premium-sidebar">
            {__('Premium Blocks For Gutenberg')}
        </EditSitePluginSidebarMoreMenuItem>
        <EditSitePluginSidebar name="premium-sidebar" title={__('Premium Blocks For Gutenberg', "premium-blocks-for-gutenberg")}>
            <PremiumSidebar />
        </EditSitePluginSidebar>
    </Fragment>
};

const PremiumGlobalStyles = () => {
    const { globalColors, colorPallet, globalTypography, deviceType, applyColorsToDefault, applyTypographyToDefault } = useSelect(
        (select) => {
            const { __experimentalGetPreviewDeviceType = null } = select('core/edit-site');
            let deviceType = __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;
            const { getEditedEntityRecord } = select(coreStore);
            const pbgGlobalColors = getEditedEntityRecord('root', 'site')?.pbg_global_colors || [];
            const pbgDefaultPallet = getEditedEntityRecord('root', 'site')?.pbg_global_color_pallet || 'theme';
            const globalTypography = getEditedEntityRecord('root', 'site')?.pbg_global_typography || [];
            const applyColorsToDefault = getEditedEntityRecord('root', 'site')?.pbg_global_colors_to_default || false;
            const applyTypographyToDefault = getEditedEntityRecord('root', 'site')?.pbg_global_typography_to_default || false;

            return {
                globalColors: pbgGlobalColors,
                colorPallet: pbgDefaultPallet,
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
            const css = loadGlobalStyles({ globalColors, colorPallet, globalTypography, deviceType, applyColorsToDefault, applyTypographyToDefault });
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

        if (siteEditorDom) {
            const editorBody = siteEditorDom.contentDocument.body;
            loadFonts(globalTypography, siteEditorDom.contentWindow);
            loadStyleSheet(editorBody);
        } else {
            interval = setInterval(() => {
                siteEditorDom = document.querySelector(`iframe[name="editor-canvas"]`);
                if (siteEditorDom) {
                    const editorBody = siteEditorDom.contentDocument.body;
                    if (editorBody) {
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
    }, [globalColors, colorPallet, globalTypography, deviceType, applyColorsToDefault, applyTypographyToDefault]);

    return null
}
registerPlugin('plugin-premium-blocks-styles', { render: PremiumGlobalStyles });
registerPlugin('plugin-premium-blocks', { render: PluginSidebarPostEditor });
registerPlugin('plugin-premium-blocks-edit-site', { render: PluginSidebarEditSite });