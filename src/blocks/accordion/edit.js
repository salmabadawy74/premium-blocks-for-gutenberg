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
import { generateBlockId } from '../../components/HelperFunction';

const { Component, Fragment } = wp.element;
const { __ } = wp.i18n;
const { withSelect } = wp.data
const { PanelBody, SelectControl } = wp.components;
const { InspectorControls, RichText, InnerBlocks } = wp.blockEditor;

let isAccUpdated = null;

class PremiumAccordion extends Component {
    constructor() {
        super(...arguments);
        this.initAccordion = this.initAccordion.bind(this);
        this.accordionRef = React.createRef();
    }

    componentDidMount() {
        const { attributes, setAttributes, clientId } = this.props;
        if (!attributes.blockId) {
            setAttributes({ blockId: "premium-accordion-" + generateBlockId(clientId) });
        }
        this.initAccordion();
    }

    componentDidUpdate(prevProps, prevState) {
        clearTimeout(isAccUpdated);
        isAccUpdated = setTimeout(this.initAccordion, 500);
    }

    initAccordion() {
        if (!this.props.attributes.blockId) return null;
        let title = this.accordionRef.current.getElementsByClassName("premium-accordion__title_wrap")[0];
        title.addEventListener("click", () => {
            title
                .getElementsByClassName("premium-accordion__icon")[0]
                .classList.toggle("premium-accordion__closed");
            title.nextSibling.classList.toggle("premium-accordion__desc_close");
        });
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
            textShadowColor,
            textShadowBlur,
            textShadowHorizontal,
            textShadowVertical,
            titleBorder,
            titlePadding,
            descPadding,
            descBorder,
            titleTypography,
            descTypography,
            descAlign
        } = this.props.attributes;

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

        const onAccordionChange = (attr, value, index) => {
            const items = repeaterItems;
            return items.map(function (item, currIndex) {
                if (index == currIndex) {
                    item[attr] = value;
                }
                return item;
            });
        };

        const titlePaddingTop = titlePadding[this.props.deviceType].top;
        const titlePaddingRight = titlePadding[this.props.deviceType].right;
        const titlePaddingBottom = titlePadding[this.props.deviceType].bottom;
        const titlePaddingLeft = titlePadding[this.props.deviceType].left;
        const descPaddingTop = descPadding[this.props.deviceType].top;
        const descPaddingRight = descPadding[this.props.deviceType].right;
        const descPaddingBottom = descPadding[this.props.deviceType].bottom;
        const descPaddingLeft = descPadding[this.props.deviceType].left;
        const mainClasses = classnames(className, "premium-accordion");

        const accordionItems = repeaterItems.map((item, index) => {
            return (
                <div
                    id={`premium-accordion__layer${index}`}
                    className={`premium-accordion__content_wrap`}
                >
                    <div
                        className={`premium-accordion__title_wrap premium-accordion__${direction} premium-accordion__${arrowStyles[0].arrowPos}`}
                        style={{
                            backgroundColor: titleStyles[0].titleBack,
                            paddingTop: titlePaddingTop && `${titlePaddingTop}${titlePadding.unit}`,
                            paddingRight: titlePaddingRight && `${titlePaddingRight}${titlePadding.unit}`,
                            paddingBottom: titlePaddingBottom && `${titlePaddingBottom}${titlePadding.unit}`,
                            paddingLeft: titlePaddingLeft && `${titlePaddingLeft}${titlePadding.unit}`,
                            borderStyle: titleBorder && titleBorder.borderType,
                            borderTopWidth: titleBorder && titleBorder.borderWidth[this.props.deviceType].top,
                            borderRightWidth: titleBorder && titleBorder.borderWidth[this.props.deviceType].right,
                            borderBottomWidth: titleBorder && titleBorder.borderWidth[this.props.deviceType].bottom,
                            borderLeftWidth: titleBorder && titleBorder.borderWidth[this.props.deviceType].left,
                            borderColor: titleBorder && titleBorder.borderColor,
                            borderTopLeftRadius: `${titleBorder && titleBorder.borderRadius[this.props.deviceType].top || 0}px`,
                            borderTopRightRadius: `${titleBorder && titleBorder.borderRadius[this.props.deviceType].right || 0}px`,
                            borderBottomLeftRadius: `${titleBorder && titleBorder.borderRadius[this.props.deviceType].bottom || 0}px`,
                            borderBottomRightRadius: `${titleBorder && titleBorder.borderRadius[this.props.deviceType].left || 0}px`,
                        }}
                    >
                        <div className={`premium-accordion__title`}>
                            <RichText
                                tagName={titleTag.toLowerCase()}
                                className={`premium-accordion__title_text`}
                                onChange={newText =>
                                    setAttributes({
                                        repeaterItems: onAccordionChange(
                                            "titleText",
                                            newText,
                                            index
                                        )
                                    })
                                }
                                placeholder={__("Awesome Title", 'premium-blocks-for-gutenberg')}
                                value={item.titleText}
                                style={{
                                    color: titleStyles[0].titleColor,
                                    fontSize: `${titleTypography.fontSize[this.props.deviceType]}${titleTypography.fontSize.unit}`,
                                    fontStyle: titleTypography.fontStyle,
                                    fontFamily: titleTypography.fontFamily,
                                    fontWeight: titleTypography.fontWeight,
                                    letterSpacing: titleTypography.letterSpacing,
                                    textDecoration: titleTypography.textDecoration,
                                    textTransform: titleTypography.textTransform,
                                    lineHeight: `${titleTypography.lineHeight}px`,
                                }}
                            />
                        </div>
                        <div className={`premium-accordion__icon_wrap`}>
                            <svg
                                className={`premium-accordion__icon`}
                                role="img"
                                focusable="false"
                                xmlns="http://www.w3.org/2000/svg"
                                width={arrowStyles[0].arrowSize}
                                height={arrowStyles[0].arrowSize}
                                viewBox="0 0 20 20"
                                style={{
                                    fill: arrowStyles[0].arrowColor,
                                    backgroundColor: arrowStyles[0].arrowBack,
                                    padding: arrowStyles[0].arrowPadding + "px",
                                    borderRadius: arrowStyles[0].arrowRadius + "px"
                                }}
                            >
                                <polygon points="16.7,3.3 10,10 3.3,3.4 0,6.7 10,16.7 10,16.6 20,6.7 " />
                            </svg>
                        </div>
                    </div>
                    <div
                        className={`premium-accordion__desc_wrap`}
                        style={{
                            textAlign: descAlign?.[this.props.deviceType],
                            backgroundColor: descStyles[0].descBack,
                            paddingTop: descPaddingTop && `${descPaddingTop}${descPadding.unit}`,
                            paddingRight: descPaddingRight && `${descPaddingRight}${descPadding.unit}`,
                            paddingBottom: descPaddingBottom && `${descPaddingBottom}${descPadding.unit}`,
                            paddingLeft: descPaddingLeft && `${descPaddingLeft}${descPadding.unit}`,
                            borderStyle: descBorder && descBorder.borderType,
                            borderTopWidth: descBorder && descBorder.borderWidth[this.props.deviceType].top,
                            borderRightWidth: descBorder && descBorder.borderWidth[this.props.deviceType].right,
                            borderBottomWidth: descBorder && descBorder.borderWidth[this.props.deviceType].bottom,
                            borderLeftWidth: descBorder && descBorder.borderWidth[this.props.deviceType].left,
                            borderColor: descBorder && descBorder.borderColor,
                            borderTopLeftRadius: `${descBorder && descBorder.borderRadius[this.props.deviceType].top || 0}px`,
                            borderTopRightRadius: `${descBorder && descBorder.borderRadius[this.props.deviceType].right || 0}px`,
                            borderBottomLeftRadius: `${descBorder && descBorder.borderRadius[this.props.deviceType].bottom || 0}px`,
                            borderBottomRightRadius: `${descBorder && descBorder.borderRadius[this.props.deviceType].left || 0}px`,
                        }}
                    >
                        {"text" === contentType && (
                            <RichText
                                tagName="p"
                                className={`premium-accordion__desc`}
                                onChange={newText =>
                                    setAttributes({
                                        repeaterItems: onAccordionChange("descText", newText, index)
                                    })
                                }
                                value={item.descText}
                                style={{
                                    color: descStyles[0].descColor,
                                    fontSize: `${descTypography.fontSize[this.props.deviceType]}${descTypography.fontSize.unit}`,
                                    fontStyle: descTypography.fontStyle,
                                    fontFamily: descTypography.fontFamily,
                                    fontWeight: descTypography.fontWeight,
                                    letterSpacing: descTypography.letterSpacing,
                                    textDecoration: descTypography.textDecoration,
                                    textTransform: descTypography.textTransform,
                                    lineHeight: `${descTypography.lineHeight}px`,
                                }}
                            />
                        )}
                        {"block" === contentType && <InnerBlocks templateLock={false} />}
                    </div>
                </div>
            );
        });

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
                        </InspectorTab>
                        <InspectorTab key={'style'}>
                            <PanelBody
                                title={__("Title", 'premium-blocks-for-gutenberg')}
                                className="premium-panel-body"
                                initialOpen={true}
                            >
                                <RadioComponent
                                    choices={[{ value: 'ltr', label: __('LTR') }, { value: 'rtl', label: __('RTL') }]}
                                    value={direction}
                                    onChange={newEffect => setAttributes({ direction: newEffect })}
                                    label={__("Direction", 'premium-blocks-for-gutenberg')}
                                />
                                <hr />
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
                                    label={__("Text Shadow", "premium-blocks-for-gutenberg")}
                                    color={titleStyles[0].titleShadowColor}
                                    blur={titleStyles[0].titleShadowBlur}
                                    horizontal={titleStyles[0].titleShadowHorizontal}
                                    vertical={titleStyles[0].titleShadowVertical}
                                    onChangeColor={newColor => saveTitleStyles({ titleShadowColor: newColor })}
                                    onChangeBlur={newBlur => saveTitleStyles({ titleShadowBlur: newBlur })}
                                    onChangehHorizontal={newValue => saveTitleStyles({ titleShadowHorizontal: newValue })}
                                    onChangeVertical={newValue => saveTitleStyles({ titleShadowVertical: newValue })}
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
                                            label={__("Text Shadow ", "premium-blocks-for-gutenberg")}
                                            color={textShadowColor}
                                            blur={textShadowBlur}
                                            horizontal={textShadowHorizontal}
                                            vertical={textShadowVertical}
                                            onChangeColor={newColor => setAttributes({ textShadowColor: newColor === undefined ? "transparent" : newColor })}
                                            onChangeBlur={newBlur => setAttributes({ textShadowBlur: newBlur === undefined ? 0 : newBlur })}
                                            onChangehHorizontal={newValue => setAttributes({ textShadowHorizontal: newValue === undefined ? 0 : newValue })}
                                            onChangeVertical={newValue => setAttributes({ textShadowVertical: newValue === undefined ? 0 : newValue })}
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
                        </InspectorTab>
                        <InspectorTab key={'advance'} />
                    </InspectorTabs>
                </InspectorControls >
            ),
            <Fragment>
                <div ref={this.accordionRef} className={`${mainClasses} ${blockId}`}>
                    {accordionItems}
                </div>
                <div className={"premium-repeater"}>
                    <button
                        className={"premium-repeater-btn"}
                        onClick={() => {
                            return setAttributes({
                                repeaterItems: repeaterItems.concat([
                                    {
                                        titleText: __("Awesome Title", 'premium-blocks-for-gutenberg'),
                                        descText: __("Cool Description", 'premium-blocks-for-gutenberg')
                                    }
                                ])
                            });
                        }}
                    >
                        <i className="dashicons dashicons-plus premium-repeater-icon" />
                        {__("Add New Item", 'premium-blocks-for-gutenberg')}
                    </button>
                    <p>{__("Add the items you need then reload the page", 'premium-blocks-for-gutenberg')}</p>
                </div>
            </Fragment>
        ];

    }
}

export default withSelect((select, props) => {
    const { __experimentalGetPreviewDeviceType = null } = select('core/edit-post');
    let deviceType = __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;

    return {
        deviceType: deviceType
    }
})(PremiumAccordion)