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
    InspectorControls
} from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { PanelBody, CustomSelectControl, TextControl, Dashicon, TabPanel } from '@wordpress/components';
/**
 * Internal dependencies
 */
import AdvancedPopColorControl from '../../components/Color Control/ColorComponent';
import SpacingComponent from '../../components/premium-responsive-spacing';
import PremiumResponsivePadding from '../../components/Premium-Responsive-Padding';
import PremiumResponsiveMargin from '../../components/Premium-Responsive-Margin';
import PremiumTypo from "../../components/premium-typo"

export default function Edit({ attributes, setAttributes, context: { postType, postId } }) {
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
    const defaultSize = {
        desktop: "",
        tablet: "",
        mobile: "",
        unit: "px"
    };
    const categoryName = hasPostTerms ? postTerms[0].name : __('Post Category');
    const { textAlign, colors, spacing, typography, breadcrumbsStyle } = attributes;
    let margin = spacing.margin ? spacing.margin : {};
    let padding = spacing.padding ? spacing.padding : {};
    let itemPadding = spacing.itemPadding ? spacing.itemPadding : {};

    const fontSize = typography.size ? typography.size : defaultSize;
    const blockProps = useBlockProps({
        className: classnames({
            [`has-text-align-${textAlign}`]: textAlign
        }),
        style: {
            marginTop: `${margin?.Desktop?.top}${margin?.unit}`,
            marginRight: `${margin?.Desktop?.right}${margin?.unit}`,
            marginBottom: `${margin?.Desktop?.bottom}${margin?.unit}`,
            marginLeft: `${margin?.Desktop?.left}${margin?.unit}`,
            paddingTop: `${padding?.Desktop?.top}${padding?.unit}`,
            paddingRight: `${padding?.Desktop?.right}${padding?.unit}`,
            paddingBottom: `${padding?.Desktop?.bottom}${padding?.unit}`,
            paddingLeft: `${padding?.Desktop?.left}${padding?.unit}`,
            color: colors.text,
            backgroundColor: colors.background,
            fontSize: `${fontSize.desktop}${fontSize.unit}`,
            fontFamily: typography.family,
            fontWeight: typography.weight,
            letterSpacing: typography.letterSpacing,
            textDecoration: typography.textDecoration,
            textTransform: typography.textTransform,
            lineHeight: `${typography.lineHeight}px`
        }
    });

    const type = templateType || postType;
    const divider = attributes.divider ? attributes.divider : "»";
    const prefix = attributes.prefix;
    const separator = <span class="breadcrumb-sep" style={{ padding: '0 .4em' }}>{divider}</span>;
    const homeItemType = attributes.homeItemType === 'text' ? __('Home') : <Dashicon style={{ lineHeight: 'inherit' }} icon='admin-home' />;
    const selectOptions = [
        {
            key: 'text',
            name: __('Text', 'premium-blocks-for-gutenberg'),
        },
        {
            key: 'icon',
            name: __('Icon', 'premium-blocks-for-gutenberg'),
        },
    ];
    const StylesSelectOptions = [
        {
            key: 'normal',
            name: __('Normal', 'premium-blocks-for-gutenberg'),
        },
        {
            key: 'advanced',
            name: __('Advanced', 'premium-blocks-for-gutenberg'),
        },
    ];
    const setColor = (color, value) => {
        const newColors = { ...colors };
        newColors[color] = value;
        setAttributes({ colors: newColors });
    }

    const onChangeSpacing = (value) => {
        const newSpacing = { ...spacing, ...value };
        setAttributes({ spacing: newSpacing });
    }

    const onChangeFontSize = (value, device) => {
        const newSize = { ...fontSize };
        newSize[device] = value;
        setAttributes({ typography: { ...typography, size: newSize } });
    }

    const onChangeFont = (value, attr) => {
        setAttributes({ typography: { ...typography, [attr]: value } });
    }

    const getSecondPart = (str) => {
        return str.split(':')[1];
    }

    let styleArry = [
        `#${blockProps.id} a {`,
        `color: ${colors.link};`,
        `font-family: ${typography.family};`,
        `font-weight: ${typography.weight};`,
        `font-size: ${fontSize.desktop}${fontSize.unit};`,
        `text-decoration: ${typography.textDecoration};`,
        `font-style: ${typography.style || 'normal'};`,
        "}",
        `#${blockProps.id} a:hover {`,
        `color: ${colors.linkHover};`,
        "}",
        `#${blockProps.id} .pbg-breadcrumbs-advanced .pbg-breadcrumbs-item {`,
        `display: inline-flex;`,
        `overflow: hidden;`,
        `position: relative;`,
        `padding-right: 30px;`,
        `align-items: center;`,
        `--item-bg-color: ${colors.item};`,
        `--separator-color: ${colors.separator};`,
        `}`,
        `#${blockProps.id} .pbg-breadcrumbs-advanced .pbg-breadcrumbs-item > * {`,
        `line-height: 26px;`,
        `}`,
        `#${blockProps.id} .pbg-breadcrumbs-advanced .pbg-breadcrumbs-item:last-child > * {`,
        `line-height: 36px;`,
        `}`,
        `#${blockProps.id} .pbg-breadcrumbs-advanced .pbg-breadcrumbs-item > *{`,
        `background-color: var(--item-bg-color, hsla(34,85%,35%,1));`,
        `padding-top: ${itemPadding?.Desktop?.top}${itemPadding?.unit};`,
        `padding-right: ${itemPadding?.Desktop?.right}${itemPadding?.unit};`,
        `padding-bottom: ${itemPadding?.Desktop?.bottom}${itemPadding?.unit};`,
        `padding-left: ${itemPadding?.Desktop?.left}${itemPadding?.unit};`,
        `}`,
        `#${blockProps.id} .pbg-breadcrumbs-advanced .pbg-breadcrumbs-item::before {`,
        `content: " ";`,
        `display: inline-block;`,
        `width: auto;`,
        `height: auto;`,
        `border-top: 50px solid transparent;`,
        `border-bottom: 50px solid transparent;`,
        `border-left: 30px solid var(--separator-color, #a5630cbf);`,
        `z-index: 1;`,
        `position: absolute;`,
        `left: calc(100% - 30px);`,
        `}`,
    ];

    styleArry = styleArry.filter(styleLine => {
        const notAllowed = ['px;', 'undefined;', ';'];
        const style = getSecondPart(styleLine) ? getSecondPart(styleLine).replace(/\s/g, '') : styleLine;
        if (!notAllowed.includes(style)) {
            return style;
        }
    }).join('\n')

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
                <style
                    dangerouslySetInnerHTML={{
                        __html: styleArry
                    }}
                />
                <div className={`pbg-breadcrumbs pbg-breadcrumbs-${breadcrumbsStyle}`} style={{ display: breadcrumbsStyle === 'normal' ? 'flex' : '' }}>
                    {prefix && <span className='prefix' style={{ padding: '0 .4em' }}>{prefix}</span>}
                    <div className='pbg-breadcrumbs-item'>
                        <a
                            href="#home-pseudo-link"
                            onClick={(event) => event.preventDefault()}
                        >
                            {homeItemType}
                            {separator}
                        </a>
                    </div>
                    {(type === 'post' || type === 'single') && <>
                        <div className='pbg-breadcrumbs-item'>
                            <a
                                href="#category-pseudo-link"
                                onClick={(event) => event.preventDefault()}
                            >
                                {categoryName}
                                {separator}
                            </a>
                        </div>
                    </>}
                    <div className='pbg-breadcrumbs-item'>
                        <span>{fullTitle || __('Post Title')}</span>
                    </div>
                </div>
            </div>
            <InspectorControls>
                <PanelBody
                    title={__('General Settings', 'premium-blocks-for-gutenberg')}
                    initialOpen={true}
                >
                    <CustomSelectControl
                        label={__('Breadcrumbs Styles', 'premium-blocks-for-gutenberg')}
                        options={StylesSelectOptions}
                        onChange={({ selectedItem }) => setAttributes({ breadcrumbsStyle: selectedItem.key })}
                        value={StylesSelectOptions.find((option) => option.key === attributes.breadcrumbsStyle)}
                    />
                    <TextControl
                        label={__('Breadcrumbs Prefix Text', 'premium-blocks-for-gutenberg')}
                        value={attributes.prefix}
                        onChange={(val) => setAttributes({ prefix: val })}
                    />
                    <TextControl
                        label={__('Custom Levels Divider', 'premium-blocks-for-gutenberg')}
                        value={attributes.divider}
                        onChange={(val) => setAttributes({ divider: val })}
                    />
                    <CustomSelectControl
                        label={__('Home Item', 'premium-blocks-for-gutenberg')}
                        options={selectOptions}
                        onChange={({ selectedItem }) => setAttributes({ homeItemType: selectedItem.key })}
                        value={selectOptions.find((option) => option.key === attributes.homeItemType)}
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
                <PanelBody
                    title={__("Typography", 'premium-blocks-for-gutenberg')}
                    className="premium-panel-body"
                    initialOpen={false}
                >
                    <PremiumTypo
                        components={["responsiveSize", "weight", "family", "spacing", "style", "Upper", "line", "Decoration"]}
                        setAttributes={value => onChangeFontSize(value.SizeUnit, 'unit')}
                        fontSizeType={{
                            value: fontSize.unit,
                            label: __("SizeUnit", 'premium-blocks-for-gutenberg'),
                        }}
                        fontSize={fontSize.desktop}
                        fontSizeMobile={fontSize.mobile}
                        fontSizeTablet={fontSize.tablet}
                        onChangeSize={newSize => onChangeFontSize(newSize, 'desktop')}
                        onChangeTabletSize={newSize => onChangeFontSize(newSize, 'tablet')}
                        onChangeMobileSize={newSize => onChangeFontSize(newSize, 'mobile')}
                        fontFamily={typography.family}
                        weight={typography.weight}
                        onChangeWeight={newWeight =>
                            onChangeFont(newWeight, 'weight')
                        }
                        onChangeFamily={(fontFamily) => onChangeFont(fontFamily, 'family')}
                        line={typography.lineHeight}
                        onChangeLine={(lineHeight) => onChangeFont(lineHeight, 'lineHeight')}
                        style={typography.style}
                        onChangeStyle={(newStyle) => onChangeFont(newStyle, 'style')}
                        spacing={typography.letterSpacing}
                        onChangeSpacing={(letterSpacing) => onChangeFont(letterSpacing, 'letterSpacing')}
                        textTransform={typography.textTransform}
                        onChangeTextTransform={(textTransform) => onChangeFont(textTransform, 'textTransform')}
                        textDecoration={typography.textDecoration}
                        onChangeTextDecoration={(textDecoration) => onChangeFont(textDecoration, 'textDecoration')}
                    />
                </PanelBody>
            </InspectorControls>
        </>
    )
}

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
