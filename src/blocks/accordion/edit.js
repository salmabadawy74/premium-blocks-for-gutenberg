import classnames from "classnames";
import PremiumBorder from "../../components/premium-border";
import SpacingComponent from "../../components/premium-responsive-spacing";
import PremiumTypo from "../../components/premium-typo";
import PremiumShadow from "../../components/PremiumShadow";
import AdvancedPopColorControl from '../../components/Color Control/ColorComponent'
import RadioComponent from '../../components/radio-control';
import MultiButtonsControl from '../../components/responsive-radio';
import ResponsiveSingleRangeControl from "../../components/RangeControl/single-range-control";
import InspectorTabs from '../../components/inspectorTabs';
import InspectorTab from '../../components/inspectorTab';
import Icons from "../../components/icons";
import { generateBlockId, generateCss } from '../../components/HelperFunction';
import PremiumResponsiveTabs from "../../components/premium-responsive-tabs";
import {
    createBlock,
} from '@wordpress/blocks';
import { store as blockEditorStore } from '@wordpress/block-editor';
const { Component, Fragment } = wp.element;
const { __ } = wp.i18n;
const { withSelect, withDispatch } = wp.data
const { PanelBody, SelectControl } = wp.components;
const { InspectorControls, RichText, InnerBlocks } = wp.blockEditor;
import { compose } from '@wordpress/compose';

class PremiumAccordion extends Component {
    constructor() {
        super(...arguments);
        this.accordionRef = React.createRef();
    }

    componentDidMount() {
        const { attributes, setAttributes, clientId } = this.props;
        if (!attributes.blockId) {
            setAttributes({ blockId: "premium-accordion-" + generateBlockId(clientId) });
        }

        if (this.props.attributes.repeaterItems) {
            this.props.insertOnlyAllowedBlock();
        }
    }

    render() {
        const { isSelected, setAttributes, className } = this.props;
        const {
            blockId,
            repeaterItems,
            direction,
            titleTag,
            titleStyles,
            arrowStyles,
            descStyles,
            contentType,
            textShadow,
            titleTextShadow,
            titleBorder,
            titlePadding,
            descPadding,
            descBorder,
            titleTypography,
            descTypography,
            descAlign,
            hideDesktop,
            hideTablet,
            hideMobile,
        } = this.props.attributes;

        const INNER_BLOCKS_TEMPLATE = [
            [
                'premium/accordion-item',
                {
                    title: __('Awesome Title'),
                    placeholder: __("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),
                },
            ],
            [
                'premium/accordion-item',
                {
                    title: __('Awesome Title'),
                    placeholder: __("Cool Description."),
                },
            ],
        ];

        const saveTitleStyles = (value) => {
            const newUpdate = titleStyles.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({
                titleStyles: newUpdate,
            });

        };

        const saveArrowStyles = (value) => {
            const newUpdate = arrowStyles.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({ arrowStyles: newUpdate });
        }

        const SaveDescStyles = (value) => {
            const newUpdate = descStyles.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({
                descStyles: newUpdate,
            });
        }

        const titlePaddingTop = titlePadding[this.props.deviceType].top;
        const titlePaddingRight = titlePadding[this.props.deviceType].right;
        const titlePaddingBottom = titlePadding[this.props.deviceType].bottom;
        const titlePaddingLeft = titlePadding[this.props.deviceType].left;
        const descPaddingTop = descPadding[this.props.deviceType].top;
        const descPaddingRight = descPadding[this.props.deviceType].right;
        const descPaddingBottom = descPadding[this.props.deviceType].bottom;
        const descPaddingLeft = descPadding[this.props.deviceType].left;
        const mainClasses = classnames(className, "premium-accordion");

        const loadStyles = () => {
            const styles = {};

            styles[`.${blockId} .premium-accordion__title_wrap`] = {
                'background-color': titleStyles[0].titleBack,
                'padding-top': titlePaddingTop && `${titlePaddingTop}${titlePadding.unit}`,
                'padding-right': titlePaddingRight && `${titlePaddingRight}${titlePadding.unit}`,
                'padding-bottom': titlePaddingBottom && `${titlePaddingBottom}${titlePadding.unit}`,
                'padding-left': titlePaddingLeft && `${titlePaddingLeft}${titlePadding.unit}`,
                'border-style': titleBorder && titleBorder.borderType,
                'border-top-width': titleBorder && titleBorder.borderWidth[this.props.deviceType].top,
                'border-right-width': titleBorder && titleBorder.borderWidth[this.props.deviceType].right,
                'border-bottom-width': titleBorder && titleBorder.borderWidth[this.props.deviceType].bottom,
                'border-left-width': titleBorder && titleBorder.borderWidth[this.props.deviceType].left,
                'border-color': titleBorder && titleBorder.borderColor,
                'border-top-left-radius': `${titleBorder && titleBorder.borderRadius[this.props.deviceType].top || 0}px`,
                'border-top-right-radius': `${titleBorder && titleBorder.borderRadius[this.props.deviceType].right || 0}px`,
                'border-bottom-left-radius': `${titleBorder && titleBorder.borderRadius[this.props.deviceType].bottom || 0}px`,
                'border-bottom-right-radius': `${titleBorder && titleBorder.borderRadius[this.props.deviceType].left || 0}px`,
            };

            styles[`.${blockId} .premium-accordion__icon_wrap svg.premium-accordion__icon`] = {
                fill: arrowStyles[0].arrowColor,
                'background-color': arrowStyles[0].arrowBack,
                padding: arrowStyles[0].arrowPadding + "px",
                'border-radius': arrowStyles[0].arrowRadius + "px",
                width: `${arrowStyles[0].arrowSize}px`,
                height: `${arrowStyles[0].arrowSize}px`
            };

            styles[`.${blockId} .premium-accordion__title_wrap .premium-accordion__title_text`] = {
                color: titleStyles[0].titleColor,
                'font-size': `${titleTypography.fontSize[this.props.deviceType]}${titleTypography.fontSize.unit}`,
                'font-style': titleTypography.fontStyle,
                'font-family': titleTypography.fontFamily,
                'font-weight': titleTypography.fontWeight,
                'letter-spacing': titleTypography.letterSpacing,
                'text-decoration': titleTypography.textDecoration,
                'text-transform': titleTypography.textTransform,
                'line-height': `${titleTypography.lineHeight}px`,
                'text-shadow': `${titleTextShadow.horizontal}px ${titleTextShadow.vertical}px ${titleTextShadow.blur}px ${titleTextShadow.color}`
            };

            styles[`.${blockId} .premium-accordion__desc_wrap`] = {
                'text-align': descAlign?.[this.props.deviceType],
                'background-color': descStyles[0].descBack,
                'padding-top': descPaddingTop && `${descPaddingTop}${descPadding.unit}`,
                'padding-right': descPaddingRight && `${descPaddingRight}${descPadding.unit}`,
                'padding-bottom': descPaddingBottom && `${descPaddingBottom}${descPadding.unit}`,
                'padding-left': descPaddingLeft && `${descPaddingLeft}${descPadding.unit}`,
                'border-style': descBorder && descBorder.borderType,
                'border-top-width': descBorder && descBorder.borderWidth[this.props.deviceType].top,
                'border-right-width': descBorder && descBorder.borderWidth[this.props.deviceType].right,
                'border-bottom-width': descBorder && descBorder.borderWidth[this.props.deviceType].bottom,
                'border-left-width': descBorder && descBorder.borderWidth[this.props.deviceType].left,
                'border-color': descBorder && descBorder.borderColor,
                'border-top-left-radius': `${descBorder && descBorder.borderRadius[this.props.deviceType].top || 0}px`,
                'border-top-right-radius': `${descBorder && descBorder.borderRadius[this.props.deviceType].right || 0}px`,
                'border-bottom-left-radius': `${descBorder && descBorder.borderRadius[this.props.deviceType].bottom || 0}px`,
                'border-bottom-right-radius': `${descBorder && descBorder.borderRadius[this.props.deviceType].left || 0}px`,
                'text-shadow': `${textShadow.horizontal}px ${textShadow.vertical}px ${textShadow.blur}px ${textShadow.color}`
            };

            styles[`.${blockId} .premium-accordion__desc_wrap .premium-accordion__desc`] = {
                color: descStyles[0].descColor,
                'font-size': `${descTypography.fontSize[this.props.deviceType]}${descTypography.fontSize.unit}`,
                'font-style': descTypography.fontStyle,
                'font-family': descTypography.fontFamily,
                'font-weight': descTypography.fontWeight,
                'letter-spacing': descTypography.letterSpacing,
                'text-decoration': descTypography.textDecoration,
                'text-transform': descTypography.textTransform,
                'line-height': `${descTypography.lineHeight}px`,
                'text-shadow': `${textShadow.horizontal}px ${textShadow.vertical}px ${textShadow.blur}px ${textShadow.color}`
            };

            return generateCss(styles);
        }

        return [
            isSelected && (
                <InspectorControls key="inspector">
                    <InspectorTabs tabs={['layout', 'style', 'advance']}>
                        <InspectorTab key={'layout'}>
                            <PanelBody
                                title={__("Title", 'premium-blocks-for-gutenberg')}
                                className="premium-panel-body"
                                initialOpen={true}
                            >
                                <RadioComponent
                                    choices={[{ value: 'h1', label: __('H1') }, { value: 'h2', label: __('H2') }, { value: 'h3', label: __('H3') }, { value: 'h4', label: __('H4') }, { value: 'h5', label: __('H5') }, { value: 'h6', label: __('H6') }]}
                                    value={titleTag}
                                    onChange={(newValue) => setAttributes({ titleTag: newValue })}
                                    label={__("Title Tag", 'premium-blocks-for-gutenberg')}
                                />
                                <hr />
                                <RadioComponent
                                    choices={[{ value: 'ltr', label: __('LTR'), icon: Icons.leftArrow }, { value: 'rtl', label: __('RTL'), icon: Icons.rightArrow }]}
                                    value={direction}
                                    onChange={newEffect => setAttributes({ direction: newEffect })}
                                    label={__("Direction", 'premium-blocks-for-gutenberg')}
                                    showIcons={true}
                                />
                            </PanelBody>
                            <PanelBody
                                title={__("Content", 'premium-blocks-for-gutenberg')}
                                className="premium-panel-body"
                                initialOpen={false}
                            >
                                <RadioComponent
                                    choices={[{ value: 'text', label: __('Text') }, { value: 'block', label: __('Block') }]}
                                    value={contentType}
                                    onChange={newType => setAttributes({ contentType: newType })}
                                    label={__("Type", 'premium-blocks-for-gutenberg')}
                                />
                            </PanelBody>
                            <PanelBody
                                title={__("Arrow", 'premium-blocks-for-gutenberg')}
                                className="premium-panel-body"
                                initialOpen={false}
                            >
                                <RadioComponent
                                    choices={[{ value: 'in', label: __('In') }, { value: 'out', label: __('Out') }]}
                                    value={arrowStyles[0].arrowPos}
                                    onChange={(newValue) => saveArrowStyles({ arrowPos: newValue })}
                                    label={__("Position", 'premium-blocks-for-gutenberg')}
                                />
                            </PanelBody>
                        </InspectorTab>
                        <InspectorTab key={'style'}>
                            <PanelBody
                                title={__("Title", 'premium-blocks-for-gutenberg')}
                                className="premium-panel-body"
                                initialOpen={true}
                            >
                                <PremiumTypo
                                    components={["responsiveSize", "weight", "family", "spacing", "style", "Upper", "line", "Decoration"]}
                                    value={titleTypography}
                                    onChange={newValue => setAttributes({ titleTypography: newValue })}
                                />
                                <hr />
                                <AdvancedPopColorControl
                                    label={__("Text Color", 'premium-blocks-for-gutenberg')}
                                    colorValue={titleStyles[0].titleColor}
                                    colorDefault={''}
                                    onColorChange={value => saveTitleStyles({ titleColor: value })}
                                />
                                <AdvancedPopColorControl
                                    label={__("Background Color", 'premium-blocks-for-gutenberg')}
                                    colorValue={titleStyles[0].titleBack}
                                    colorDefault={''}
                                    onColorChange={value => saveTitleStyles({ titleBack: value })}
                                />
                                <hr />
                                <PremiumShadow
                                    label={__("Text Shadow", 'premium-blocks-for-gutenberg')}
                                    boxShadow={false}
                                    value={titleTextShadow}
                                    onChange={(value) => setAttributes({ titleTextShadow: value })}
                                />
                                <hr />
                                <PremiumBorder
                                    label={__("Border")}
                                    value={titleBorder}
                                    borderType={titleBorder.borderType}
                                    borderColor={titleBorder.borderColor}
                                    borderWidth={titleBorder.borderWidth}
                                    borderRadius={titleBorder.borderRadius}
                                    onChange={(value) => setAttributes({ titleBorder: value })}
                                />
                                <hr />
                                <SpacingComponent value={titlePadding} responsive={true} showUnits={true} label={__("Padding")} onChange={(value) => setAttributes({ titlePadding: value })} />
                            </PanelBody>
                            <PanelBody
                                title={__("Content", 'premium-blocks-for-gutenberg')}
                                className="premium-panel-body"
                                initialOpen={false}
                            >
                                <MultiButtonsControl
                                    choices={[{ value: 'left', label: __('Left'), icon: Icons.alignLeft }, { value: 'center', label: __('Center'), icon: Icons.alignCenter }, { value: 'right', label: __('Right'), icon: Icons.alignRight }]}
                                    value={descAlign}
                                    onChange={(align) => setAttributes({ descAlign: align })}
                                    label={__("Align Content", "premium-blocks-for-gutenberg")}
                                    showIcons={true} />
                                <hr />
                                {"text" === contentType && (
                                    <Fragment>
                                        <PremiumTypo
                                            components={["responsiveSize", "weight", "family", "spacing", "style", "Upper", "line", "Decoration"]}
                                            value={descTypography}
                                            onChange={newValue => setAttributes({ descTypography: newValue })}
                                        />
                                        <hr />
                                        <AdvancedPopColorControl
                                            label={__("Text Color", 'premium-blocks-for-gutenberg')}
                                            colorValue={descStyles[0].descColor}
                                            colorDefault={''}
                                            onColorChange={value => SaveDescStyles({ descColor: value })}
                                        />
                                        <AdvancedPopColorControl
                                            label={__("Background Color", 'premium-blocks-for-gutenberg')}
                                            colorValue={descStyles[0].descBack}
                                            colorDefault={''}
                                            onColorChange={value => SaveDescStyles({ descBack: value })}
                                        />
                                        <hr />
                                    </Fragment>
                                )}
                                {"text" === contentType && (
                                    <Fragment>
                                        <PremiumShadow
                                            label={__("Text Shadow", 'premium-blocks-for-gutenberg')}
                                            boxShadow={false}
                                            value={textShadow}
                                            onChange={(value) => setAttributes({ textShadow: value })}
                                        />
                                        <hr />
                                    </Fragment>
                                )}
                                <PremiumBorder
                                    label={__("Border")}
                                    value={descBorder}
                                    borderType={descBorder.borderType}
                                    borderColor={descBorder.borderColor}
                                    borderWidth={descBorder.borderWidth}
                                    borderRadius={descBorder.borderRadius}
                                    onChange={(value) => setAttributes({ descBorder: value })}
                                />
                                <hr />
                                <SpacingComponent value={descPadding} responsive={true} showUnits={true} label={__("Padding")} onChange={(value) => setAttributes({ descPadding: value })} />
                            </PanelBody>
                            <PanelBody
                                title={__("Arrow", 'premium-blocks-for-gutenberg')}
                                className="premium-panel-body"
                                initialOpen={false}
                            >
                                <ResponsiveSingleRangeControl
                                    label={__("Size", 'premium-blocks-for-gutenberg')}
                                    value={arrowStyles[0].arrowSize}
                                    onChange={newValue => saveArrowStyles({ arrowSize: newValue })}
                                    showUnit={false}
                                    defaultValue={20}
                                />
                                <hr />
                                <AdvancedPopColorControl
                                    label={__("Arrow Color", 'premium-blocks-for-gutenberg')}
                                    colorValue={arrowStyles[0].arrowColor}
                                    colorDefault={''}
                                    onColorChange={newValue => saveArrowStyles({ arrowColor: newValue })}
                                />
                                <AdvancedPopColorControl
                                    label={__("Background Color", 'premium-blocks-for-gutenberg')}
                                    colorValue={arrowStyles[0].arrowBack}
                                    colorDefault={''}
                                    onColorChange={newValue => saveArrowStyles({ arrowBack: newValue })}
                                />
                                <hr />
                                <ResponsiveSingleRangeControl
                                    label={__("Border Radius", 'premium-blocks-for-gutenberg')}
                                    value={arrowStyles[0].arrowRadius}
                                    onChange={newValue => saveArrowStyles({ arrowRadius: newValue === undefined ? 0 : newValue })}
                                    defaultValue={0}
                                    showUnit={false}
                                />
                                <hr />
                                <ResponsiveSingleRangeControl
                                    label={__("Padding", 'premium-blocks-for-gutenberg')}
                                    value={arrowStyles[0].arrowPadding}
                                    onChange={newValue => saveArrowStyles({ arrowPadding: newValue === undefined ? 0 : newValue })}
                                    defaultValue={0}
                                    showUnit={false}
                                />
                            </PanelBody>
                        </InspectorTab>
                        <InspectorTab key={'advance'}>
                            <PremiumResponsiveTabs
                                Desktop={hideDesktop}
                                Tablet={hideTablet}
                                Mobile={hideMobile}
                                onChangeDesktop={(value) => setAttributes({ hideDesktop: value ? " premium-desktop-hidden" : "" })}
                                onChangeTablet={(value) => setAttributes({ hideTablet: value ? " premium-tablet-hidden" : "" })}
                                onChangeMobile={(value) => setAttributes({ hideMobile: value ? " premium-mobile-hidden" : "" })}
                            />
                        </InspectorTab>
                    </InspectorTabs>
                </InspectorControls >
            ),
            <Fragment>
                <div ref={this.accordionRef} className={`${mainClasses} ${blockId}`}>
                    <style
                        dangerouslySetInnerHTML={{ __html: loadStyles() }}
                    />
                    <InnerBlocks
                        template={INNER_BLOCKS_TEMPLATE}
                        templateLock={false}
                        allowedBlocks={['premium/accordion-item']}
                    />
                </div>
            </Fragment>
        ];

    }
}

export default compose([
    withSelect((select) => {
        const { __experimentalGetPreviewDeviceType = null } = select('core/edit-post');
        let deviceType = __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;

        return {
            deviceType: deviceType
        }
    }),
    withDispatch((dispatch, ownProps, { select }) => {
        return {
            insertOnlyAllowedBlock() {
                const {
                    attributes,
                    clientId,
                    setAttributes
                } = ownProps;
                const { insertBlock } = dispatch(blockEditorStore);
                const repeaterItems = [...attributes.repeaterItems];

                attributes.repeaterItems.map((item, index) => {
                    const insertedBlock = createBlock(
                        "premium/accordion-item",
                        { title: item.titleText, description: item.descText },
                    );
                    insertBlock(
                        insertedBlock,
                        index + 1,
                        clientId
                    );

                    repeaterItems.splice(index - 1, 1);

                    if (repeaterItems.length === 0) {
                        setAttributes({ repeaterItems: [] })
                        return;
                    }
                })
            },
        };
    }),
])(PremiumAccordion);