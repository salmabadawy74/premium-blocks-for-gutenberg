/**
 * External dependencies
 */
import classnames from 'classnames';

/**
* WordPress dependencies
*/
import { useEntityProp, store as coreStore } from '@wordpress/core-data';
import {
    AlignmentControl,
    BlockControls,
    useBlockProps,
    InspectorControls,
    RichText
} from '@wordpress/block-editor';
import { useSelect, withSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { PanelBody, ToggleControl, TextControl, Dashicon, TabPanel } from '@wordpress/components';
import { useEffect } from '@wordpress/element';

/**
 * Internal dependencies
 */
import AdvancedPopColorControl from '../../components/Color Control/ColorComponent';
import SpacingComponent from '../../components/premium-responsive-spacing';
import PremiumTypo from "../../components/premium-typo"
import InspectorTabs from '../../components/inspectorTabs';
import InspectorTab from '../../components/inspectorTab';
import RadioComponent from '../../components/radio-control';
import PremiumResponsiveTabs from "../../components/premium-responsive-tabs";
import { generateBlockId, generateCss, typographyCss, paddingCss, marginCss } from '../../components/HelperFunction';
import WebfontLoader from "../../components/typography/fontLoader";


function Edit({ clientId, attributes, setAttributes, context: { postType, postId }, deviceType }) {
    const [fullTitle] = useEntityProp('postType', postType, 'title', postId);
    const selectedTerm = useSelect(
        (select) => {
            const { getTaxonomy } = select(coreStore);
            const taxonomy = getTaxonomy('category');
            return taxonomy?.visibility?.publicly_queryable ? taxonomy : {};
        },
        ['category']
    );
    const templateType = useSelect((select) => {
        if (!select('core/edit-site')) {
            return;
        }
        const { getEditedPostType, getEditedPostId } = select('core/edit-site');
        const {
            getEditedEntityRecord,
        } = select(coreStore);
        const getEntityArgs = [
            'postType',
            getEditedPostType(),
            getEditedPostId(),
        ];
        const entityRecord = getEditedEntityRecord(...getEntityArgs);
        const type = entityRecord?.area || entityRecord?.slug;
        return type;
    }, []);
    const { postTerms, hasPostTerms } = usePostTerms({
        postId,
        postType,
        term: selectedTerm,
    });

    const categoryName = hasPostTerms ? postTerms[0].name : __('Post Category');
    const { textAlign, colors, spacing, typography, breadcrumbsStyle, enablePrefix, blockId, hideDesktop, hideTablet, hideMobile, homeItemType } = attributes;
    let loadGoogleFonts;
    if (typography?.fontFamily !== 'Default') {
        const fontConfig = {
            google: {
                families: [typography.fontFamily],
            },
        }
        loadGoogleFonts = (
            <WebfontLoader config={fontConfig}>
            </WebfontLoader>
        )
    }

    let margin = spacing.margin ? spacing.margin : {};
    let padding = spacing.padding ? spacing.padding : {};
    let itemPadding = spacing.itemPadding ? spacing.itemPadding : {};

    const fontSize = typography.size ? typography.size : {};
    const blockProps = useBlockProps({
        className: classnames(blockId, {
            [`has-text-align-${textAlign}`]: textAlign,
            ['premium-desktop-hidden']: hideDesktop,
            ['premium-tablet-hidden']: hideTablet,
            ['premium-mobile-hidden']: hideMobile,
        }),
        style: {
            color: colors.text,
            backgroundColor: colors.background,
            ...typographyCss(typography, deviceType),
            ...paddingCss(padding, deviceType),
            ...marginCss(margin, deviceType)
        }
    });

    const type = templateType || postType;
    const divider = attributes.divider ? attributes.divider : "»";
    const prefix = attributes.prefix;
    const separator = <span class="breadcrumb-sep" style={{ padding: '0 .4em' }}>{divider}</span>;
    const setColor = (color, value) => {
        const newColors = { ...colors };
        newColors[color] = value;
        setAttributes({ colors: newColors });
    }

    useEffect(() => {
        setAttributes({ blockId: "premium-breadcrumbs-" + generateBlockId(clientId) });
    })

    const onChangeSpacing = (value) => {
        const newSpacing = { ...spacing, ...value };
        setAttributes({ spacing: newSpacing });
    }

    const loadStyles = () => {
        const styles = {};

        styles[`.${blockId} a`] = {
            'color': colors?.link,
            'font-family': typography?.fontFamily,
            'font-weight': typography?.fontWeight,
            'font-size': `${fontSize?.[deviceType]}${fontSize?.unit}`,
            'font-decoration': typography?.textDecoration,
            'font-style': typography?.fontStyle,
        }

        styles[`.${blockId} a:hover`] = {
            'color': colors?.linkHover
        }

        styles[`.${blockId} .premium-breadcrumbs-advanced .premium-breadcrumbs-item`] = {
            'display': 'inline-flex',
            'overflow': 'hidden',
            'position': 'relative',
            'padding-right': '30px',
            'align-items': 'center',
            '--item-bg-color': colors?.item,
            '--separator-color': colors?.separator,
        }

        styles[`.${blockId} .premium-breadcrumbs-advanced .premium-breadcrumbs-item > *`] = {
            'line-height': '26px'
        }

        styles[`.${blockId} .premium-breadcrumbs-advanced .premium-breadcrumbs-item:last-child > *`] = {
            'line-height': '26px'
        }

        styles[`.${blockId} .premium-breadcrumbs-advanced .premium-breadcrumbs-item > *`] = {
            'background-color': 'var(--item-bg-color, rgb(242, 242, 242))',
            'padding-top': `${itemPadding?.[deviceType]?.top}${itemPadding?.unit}`,
            'padding-right': `${itemPadding?.[deviceType]?.right}${itemPadding?.unit}`,
            'padding-bottom': `${itemPadding?.[deviceType]?.bottom}${itemPadding?.unit}`,
            'padding-left': `${itemPadding?.[deviceType]?.left}${itemPadding?.unit}`,
        }

        styles[`.${blockId} .premium-breadcrumbs-advanced .premium-breadcrumbs-item::before`] = {
            'content': '" "',
            'display': 'inline-block',
            'width': 'auto',
            'height': 'auto',
            'border-top': '50px solid transparent',
            'border-bottom': '50px solid transparent',
            'border-left': '30px solid var(--separator-color, #f2f2f2)',
            'z-index': '1',
            'position': 'absolute',
            'left': 'calc(100% - 30px)',
        }

        return generateCss(styles);
    }

    return (
        <>

<BlockControls group="block">
                <AlignmentControl
                    value={textAlign}
                    onChange={(nextAlign) => {
                        setAttributes({ textAlign: nextAlign });
                    }}
                />
            </BlockControls>
            <div {...blockProps}>
                <style>{loadStyles()}</style>
                <div className={`premium-breadcrumbs premium-breadcrumbs-${breadcrumbsStyle}`} style={{ display: breadcrumbsStyle === 'normal' ? 'flex' : '' }}>
                    {enablePrefix && <RichText
                        tagName="span"
                        className={`prefix`}
                        placeholder={__('You Are Here: ')}
                        value={prefix}
                        isSelected={false}
                        onChange={newText => setAttributes({ prefix: newText })}
                        style={{ padding: '0 .4em' }}
                    />}
                    <div className='premium-breadcrumbs-item'>
                        <a
                            href="#home-pseudo-link"
                            onClick={(event) => event.preventDefault()}
                        >
                            {attributes.homeItemType === 'text' ? __('Home') : <Dashicon style={{ lineHeight: 'normal' }} icon='admin-home' />}
                            {separator}
                        </a>
                    </div>
                    {(type === 'post' || type === 'single') && <>
                        <div className='premium-breadcrumbs-item'>
                            <a
                                href="#category-pseudo-link"
                                onClick={(event) => event.preventDefault()}
                            >
                                {categoryName}
                                {separator}
                            </a>
                        </div>
                    </>}
                    <div className='premium-breadcrumbs-item'>
                        <span>{fullTitle || __('Post Title')}</span>
                    </div>
                </div>
                {loadGoogleFonts && loadGoogleFonts}
            </div>
            <InspectorControls>
                <InspectorTabs tabs={['layout', 'style', 'advance']}>
                    <InspectorTab key={'layout'}>
                        <PanelBody
                            title={__('General Settings', 'premium-blocks-for-gutenberg')}
                            initialOpen={true}
                        >
                            <ToggleControl
                                label={__("Enable Breadcrumbs Prefix", 'premium-blocks-for-gutenberg')}
                                checked={enablePrefix}
                                onChange={check => setAttributes({ enablePrefix: check })}
                            />
                            <TextControl
                                label={__('Custom Levels Divider', 'premium-blocks-for-gutenberg')}
                                value={attributes.divider}
                                onChange={(val) => setAttributes({ divider: val })}
                            />
                            <RadioComponent
                                choices={[{ label: __('Icon'), value: 'icon' }, { label: __('Text'), value: 'text' }]}
                                value={homeItemType}
                                onChange={newValue => setAttributes({ homeItemType: newValue })}
                                label={__("Home Item", 'premium-blocks-for-gutenberg')}
                            />
                        </PanelBody>
                    </InspectorTab>
                    <InspectorTab key={'style'}>
                        <PanelBody
                            title={__('General Styles', 'premium-blocks-for-gutenberg')}
                            initialOpen={true}
                        >
                            <RadioComponent
                                choices={[{ label: __('Normal'), value: 'normal' }, { label: __('Advanced'), value: 'advanced' }]}
                                value={breadcrumbsStyle}
                                onChange={newValue => setAttributes({ breadcrumbsStyle: newValue })}
                                label={__("Breadcrumbs Style", 'premium-blocks-for-gutenberg')}
                            />
                        </PanelBody>
                        <PanelBody
                            title={__("Typography", 'premium-blocks-for-gutenberg')}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <PremiumTypo
                                components={["responsiveSize", "weight", "family", "spacing", "style", "Upper", "line", "Decoration"]}
                                value={typography}
                                onChange={newValue => setAttributes({ typography: newValue })}
                            />
                        </PanelBody>
                        <PanelBody
                            title={__('Colors', 'premium-blocks-for-gutenberg')}
                            initialOpen={true}
                        >
                            <TabPanel
                                className="premium-color-tabpanel"
                                activeClass="active-tab"
                                tabs={[
                                    {
                                        name: "normal",
                                        title: "Normal",
                                        className: "premium-tab",
                                    },
                                    {
                                        name: "hover",
                                        title: "Hover",
                                        className: "premium-tab",
                                    },
                                ]}
                            >
                                {(tab) => {
                                    if ("normal" === tab.name) {
                                        return (
                                            <Fragment>
                                                <AdvancedPopColorControl
                                                    label={__("Text Color", 'premium-blocks-for-gutenberg')}
                                                    colorValue={colors.text}
                                                    colorDefault={''}
                                                    onColorChange={newValue => setColor('text', newValue)}
                                                />
                                                <AdvancedPopColorControl
                                                    label={__(`Background Color`, 'premium-blocks-for-gutenberg')}
                                                    colorValue={colors.background}
                                                    onColorChange={newValue => setColor('background', newValue)}
                                                    colorDefault={''}
                                                />
                                                <AdvancedPopColorControl
                                                    label={__(`Links Color`, 'premium-blocks-for-gutenberg')}
                                                    colorValue={colors.link}
                                                    onColorChange={newValue => setColor('link', newValue)}
                                                    colorDefault={''}
                                                />
                                                {breadcrumbsStyle === 'advanced' && (
                                                    <>
                                                        <AdvancedPopColorControl
                                                            label={__(`Separator Color`, 'premium-blocks-for-gutenberg')}
                                                            colorValue={colors.separator}
                                                            onColorChange={newValue => setColor('separator', newValue)}
                                                            colorDefault={''}
                                                        />
                                                        <AdvancedPopColorControl
                                                            label={__(`Item Background Color`, 'premium-blocks-for-gutenberg')}
                                                            colorValue={colors.item}
                                                            onColorChange={newValue => setColor('item', newValue)}
                                                            colorDefault={''}
                                                        />
                                                    </>
                                                )}
                                            </Fragment>
                                        );
                                    }
                                    if ("hover" === tab.name) {
                                        return (
                                            <Fragment>
                                                <AdvancedPopColorControl
                                                    label={__(`Links Hover Color`, 'premium-blocks-for-gutenberg')}
                                                    colorValue={colors.linkHover}
                                                    onColorChange={newValue => setColor('linkHover', newValue)}
                                                    colorDefault={''}
                                                />
                                            </Fragment>
                                        );
                                    }
                                }}
                            </TabPanel>
                        </PanelBody>
                        <PanelBody
                            title={__('Spacing', 'premium-blocks-for-gutenberg')}
                            initialOpen={false}
                        >
                            <SpacingComponent value={margin} responsive={true} showUnits={true} label={__('Margin')} onChange={(value) => onChangeSpacing({ margin: value })} />
                            <SpacingComponent value={padding} responsive={true} showUnits={true} label={__('Padding')} onChange={(value) => onChangeSpacing({ padding: value })} />
                            {breadcrumbsStyle === 'advanced' && (
                                <SpacingComponent value={itemPadding} responsive={true} showUnits={true} label={__('Item Padding')} onChange={(value) => onChangeSpacing({ itemPadding: value })} />
                            )}
                        </PanelBody>
                    </InspectorTab>
                    <InspectorTab key={"advance"}>
                        <PremiumResponsiveTabs
                            Desktop={hideDesktop}
                            Tablet={hideTablet}
                            Mobile={hideMobile}
                            onChangeDesktop={(value) =>
                                setAttributes({
                                    hideDesktop: value,
                                })
                            }
                            onChangeTablet={(value) =>
                                setAttributes({
                                    hideTablet: value,
                                })
                            }
                            onChangeMobile={(value) =>
                                setAttributes({
                                    hideMobile: value,
                                })
                            }
                        />
                    </InspectorTab>
                </InspectorTabs>
            </InspectorControls>
        </>
    )
}

export default withSelect((select, props) => {
    const { __experimentalGetPreviewDeviceType = null } = select('core/edit-post');
    let deviceType = __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;

    return {
        deviceType: deviceType
    }
})(Edit)

export function usePostTerms({ postId, postType, term }) {
    const { rest_base: restBase, slug } = term;
    const [termIds] = useEntityProp('postType', postType, restBase, postId);
    return useSelect(
        (select) => {
            const visible = term?.visibility?.publicly_queryable;
            if (!visible) {
                return {
                    postTerms: [],
                    _isLoading: false,
                    hasPostTerms: false,
                };
            }
            if (!termIds) {
                // Waiting for post terms to be fetched.
                return { isLoading: term?.postTerms?.includes(postType) };
            }
            if (!termIds.length) {
                return { isLoading: false };
            }
            const { getEntityRecords, isResolving } = select(coreStore);
            const taxonomyArgs = [
                'taxonomy',
                slug,
                {
                    include: termIds,
                    context: 'view',
                },
            ];
            const terms = getEntityRecords(...taxonomyArgs);
            const _isLoading = isResolving('getEntityRecords', taxonomyArgs);
            return {
                postTerms: terms,
                isLoading: _isLoading,
                hasPostTerms: !!terms?.length,
            };
        },
        [termIds, term?.visibility?.publicly_queryable]
    );
}
