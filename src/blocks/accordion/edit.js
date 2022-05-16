import classnames from "classnames";
import PremiumBorder from "../../components/premium-border";
import PremiumResponsivePadding from '../../components/Premium-Responsive-Padding';
import SpacingComponent from "../../components/premium-responsive-spacing";
import PremiumTypo from "../../components/premium-typo";
import PremiumShadow from "../../components/PremiumShadow";
import AdvancedPopColorControl from '../../components/Color Control/ColorComponent'
import RadioComponent from '../../components/radio-control';
import ResponsiveSingleRangeControl from "../../components/RangeControl/single-range-control";
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
        this.getPreviewSize = this.getPreviewSize.bind(this);
        this.accordionRef = React.createRef();
    }

    getPreviewSize(device, desktopSize, tabletSize, mobileSize) {
        if (device === 'Mobile') {
            if (undefined !== mobileSize && '' !== mobileSize) {
                return mobileSize;
            } else if (undefined !== tabletSize && '' !== tabletSize) {
                return tabletSize;
            }
        } else if (device === 'Tablet') {
            if (undefined !== tabletSize && '' !== tabletSize) {
                return tabletSize;
            }
        }
        return desktopSize;
    }

    componentDidMount() {
        const { attributes, setAttributes, clientId } = this.props;
        if (!attributes.accordionId) {
            setAttributes({ accordionId: "premium-accordion-" + clientId });
        }
        this.initAccordion();
    }

    componentDidUpdate(prevProps, prevState) {
        clearTimeout(isAccUpdated);
        isAccUpdated = setTimeout(this.initAccordion, 500);
    }

    initAccordion() {
        const { accordionId } = this.props.attributes;
        if (!this.props.attributes.accordionId) return null;
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
            accordionId,
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
            titleBorderWidth,
            titleBorderTop,
            titleBorderRight,
            titleBorderBottom,
            titleBorderLeft,
            titleBorderUpdated,
            titlePadding,
            descPadding,
            descBorderWidth,
            descBorderUpdated,
            descBorderTop,
            descBorderRight,
            descBorderBottom,
            descBorderLeft,
        } = this.props.attributes;

        const DIRECTION = [
            {
                value: "ltr",
                label: "LTR"
            },
            {
                value: "rtl",
                label: "RTL"
            }
        ];

        const ARROW = [
            {
                value: "in",
                label: __("In", 'premium-blocks-for-gutenberg')
            },
            {
                value: "out",
                label: __("Out", 'premium-blocks-for-gutenberg')
            }
        ];

        const TYPE = [
            {
                value: "text",
                label: __("Text", 'premium-blocks-for-gutenberg')
            },
            {
                value: "block",
                label: __("Gutenberg Block", 'premium-blocks-for-gutenberg')
            }
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

        const onAccordionChange = (attr, value, index) => {
            const items = repeaterItems;
            return items.map(function (item, currIndex) {
                if (index == currIndex) {
                    item[attr] = value;
                }
                return item;
            });
        };

        const titlePaddingTop = this.getPreviewSize(this.props.deviceType, titlePadding.Desktop.top, titlePadding.Tablet.top, titlePadding.Mobile.top);
        const titlePaddingRight = this.getPreviewSize(this.props.deviceType, titlePadding.Desktop.right, titlePadding.Tablet.right, titlePadding.Mobile.right);
        const titlePaddingBottom = this.getPreviewSize(this.props.deviceType, titlePadding.Desktop.bottom, titlePadding.Tablet.bottom, titlePadding.Mobile.bottom);
        const titlePaddingLeft = this.getPreviewSize(this.props.deviceType, titlePadding.Desktop.left, titlePadding.Tablet.left, titlePadding.Mobile.left);
        const descPaddingTop = this.getPreviewSize(this.props.deviceType, descPadding.Desktop.top, descPadding.Tablet.top, descPadding.Mobile.top);
        const descPaddingRight = this.getPreviewSize(this.props.deviceType, descPadding.Desktop.right, descPadding.Tablet.right, descPadding.Mobile.right);
        const descPaddingBottom = this.getPreviewSize(this.props.deviceType, descPadding.Desktop.bottom, descPadding.Tablet.bottom, descPadding.Mobile.bottom);
        const descPaddingLeft = this.getPreviewSize(this.props.deviceType, descPadding.Desktop.left, descPadding.Tablet.left, descPadding.Mobile.left);

        // console.log(titlePadding);

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
                            borderStyle: titleStyles[0].titleBorder,
                            borderWidth: titleBorderUpdated
                                ? `${titleBorderTop}px ${titleBorderRight}px ${titleBorderBottom}px ${titleBorderLeft}px`
                                : titleBorderWidth + "px",
                            borderRadius: titleStyles[0].titleBorderRadius + "px",
                            borderColor: titleStyles[0].titleBorderColor,
                            paddingTop: `${titlePaddingTop}${titlePadding.unit}`,
                            paddingRight: `${titlePaddingRight}${titlePadding.unit}`,
                            paddingBottom: `${titlePaddingBottom}${titlePadding.unit}`,
                            paddingLeft: `${titlePaddingLeft}${titlePadding.unit}`
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
                                    fontSize: titleStyles[0].titleSize + "px",
                                    letterSpacing: titleStyles[0].titleLetter + "px",
                                    textTransform: titleStyles[0].titleUpper ? "uppercase" : "none",
                                    fontStyle: titleStyles[0].titleStyle,
                                    fontWeight: titleStyles[0].titleWeight,
                                    textShadow: `${titleStyles[0].titleShadowHorizontal}px ${titleStyles[0].titleShadowVertical}px ${titleStyles[0].titleShadowBlur}px ${titleStyles[0].titleShadowColor}`,
                                    lineHeight: titleStyles[0].titleLine + "px"
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
                            textAlign: descStyles[0].descAlign,
                            backgroundColor: descStyles[0].descBack,
                            borderStyle: descStyles[0].descBorder,
                            borderWidth: descBorderUpdated
                                ? `${descBorderTop}px ${descBorderRight}px ${descBorderBottom}px ${descBorderLeft}px`
                                : descBorderWidth + "px",
                            borderRadius: descStyles[0].descBorderRadius + "px",
                            borderColor: descStyles[0].descBorderColor,
                            paddingTop: `${descPaddingTop}${descPadding.unit}`,
                            paddingRight: `${descPaddingRight}${descPadding.unit}`,
                            paddingBottom: `${descPaddingBottom}${descPadding.unit}`,
                            paddingLeft: `${descPaddingLeft}${descPadding.unit}`
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
                                    fontSize: descStyles[0].descSize + "px",
                                    letterSpacing: descStyles[0].descLetter + "px",
                                    textTransform: descStyles[0].descUpper ? "uppercase" : "none",
                                    textShadow: `${textShadowHorizontal}px ${textShadowVertical}px ${textShadowBlur}px ${textShadowColor}`,
                                    fontStyle: descStyles[0].descStyle,
                                    fontWeight: descStyles[0].descWeight,
                                    lineHeight: descStyles[0].descLine + "px"
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
                    <PanelBody
                        title={__("Title", 'premium-blocks-for-gutenberg')}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <RadioComponent
                            choices={['H1', 'H2', 'H3', 'H4', 'H5', 'H6']}
                            value={titleTag}
                            onChange={(newValue) => setAttributes({ titleTag: newValue })}
                            label={__("Title Tag", 'premium-blocks-for-gutenberg')}
                        />
                        <SelectControl
                            label={__("Direction", 'premium-blocks-for-gutenberg')}
                            options={DIRECTION}
                            value={direction}
                            onChange={newEffect => setAttributes({ direction: newEffect })}
                        />

                        <PremiumTypo
                            components={[
                                "size",
                                "weight",
                                "style",
                                "upper",
                                "spacing",
                                "line"
                            ]}
                            size={titleStyles[0].titleSize}
                            weight={titleStyles[0].titleWeight}
                            style={titleStyles[0].titleStyle}
                            spacing={titleStyles[0].titleLetter}
                            line={titleStyles[0].titleLine}
                            upper={titleStyles[0].titleUpper}
                            onChangeSize={newSize => saveTitleStyles({ titleSize: newSize })}
                            onChangeWeight={newWeight => saveTitleStyles({ titleWeight: newWeight })}
                            onChangeStyle={newStyle => saveTitleStyles({ titleStyle: newStyle })}
                            onChangeSpacing={newValue => saveTitleStyles({ titleLetter: newValue })}
                            onChangeLine={newValue => saveTitleStyles({ titleLine: newValue })}
                            onChangeUpper={check => saveTitleStyles({ titleUpper: check })}
                        />
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
                        <PremiumBorder
                            borderType={titleStyles[0].titleBorder}
                            borderWidth={titleBorderWidth}
                            top={titleBorderTop}
                            right={titleBorderRight}
                            bottom={titleBorderBottom}
                            left={titleBorderLeft}
                            borderColor={titleStyles[0].titleBorderColor}
                            borderRadius={titleStyles[0].titleBorderRadius}
                            onChangeType={(newType) => saveTitleStyles({ titleBorder: newType })}
                            onChangeWidth={({ top, right, bottom, left }) =>
                                setAttributes({
                                    titleBorderUpdated: true,
                                    titleBorderTop: top,
                                    titleBorderRight: right,
                                    titleBorderBottom: bottom,
                                    titleBorderLeft: left,
                                })
                            }
                            onChangeColor={(colorValue) => saveTitleStyles({ titleBorderColor: colorValue })}
                            onChangeRadius={(newrRadius) => saveTitleStyles({ titleBorderRadius: newrRadius })}
                        />
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
                        <SpacingComponent value={titlePadding} responsive={true} showUnits={true} label={__("Padding")} onChange={(value) => setAttributes({ titlePadding: value })} />
                    </PanelBody>
                    <PanelBody
                        title={__("Arrow", 'premium-blocks-for-gutenberg')}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <SelectControl
                            label={__("Position", 'premium-blocks-for-gutenberg')}
                            options={ARROW}
                            value={arrowStyles[0].arrowPos}
                            onChange={newEffect => saveArrowStyles({ arrowPos: newEffect })}
                        />
                        <ResponsiveSingleRangeControl
                            label={__("Size", 'premium-blocks-for-gutenberg')}
                            value={arrowStyles[0].arrowSize}
                            onChange={newValue => saveArrowStyles({ arrowSize: newValue })}
                            showUnit={false}
                            defaultValue={20}
                        />
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

                        <ResponsiveSingleRangeControl
                            label={__("Border Radius", 'premium-blocks-for-gutenberg')}
                            value={arrowStyles[0].arrowRadius}
                            onChange={newValue => saveArrowStyles({ arrowRadius: newValue === undefined ? 0 : newValue })}
                            defaultValue={0}
                            showUnit={false}
                        />

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
                        <SelectControl
                            label={__("Type", 'premium-blocks-for-gutenberg')}
                            options={TYPE}
                            value={contentType}
                            onChange={newType => setAttributes({ contentType: newType })}
                            help={__("Gutenberg Block works only with single accordion item", 'premium-blocks-for-gutenberg')}
                        />
                        <RadioComponent
                            choices={["left", "center", "right"]}
                            label={__(`Align Content `)}
                            onChange={(align) => SaveDescStyles({ descAlign: align })}
                            value={descStyles[0].descAlign}
                        />
                        {"text" === contentType && (
                            <Fragment>
                                <PremiumTypo
                                    components={[
                                        "size",
                                        "weight",
                                        "style",
                                        "upper",
                                        "spacing",
                                        "line"
                                    ]}
                                    size={descStyles[0].descSize}
                                    weight={descStyles[0].descWeight}
                                    style={descStyles[0].descStyle}
                                    spacing={descStyles[0].descLetter}
                                    line={descStyles[0].descLine}
                                    upper={descStyles[0].descUpper}
                                    onChangeSize={newSize => SaveDescStyles({ descSize: newSize })}
                                    onChangeWeight={newWeight => SaveDescStyles({ descWeight: newWeight })}
                                    onChangeStyle={newStyle => SaveDescStyles({ descStyle: newStyle })}
                                    onChangeSpacing={newValue => SaveDescStyles({ descLetter: newValue })}
                                    onChangeLine={newValue => SaveDescStyles({ descLine: newValue })}
                                    onChangeUpper={check => SaveDescStyles({ descUpper: check })}
                                />
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
                            </Fragment>
                        )}
                        <PremiumBorder
                            borderType={descStyles[0].descBorder}
                            borderWidth={descBorderWidth}
                            top={descBorderTop}
                            right={descBorderRight}
                            bottom={descBorderBottom}
                            left={descBorderLeft}
                            borderColor={descStyles[0].descBorderColor}
                            borderRadius={descStyles[0].descBorderRadius}
                            onChangeType={(newType) => SaveDescStyles({ descBorder: newType })}
                            onChangeWidth={({ top, right, bottom, left }) =>
                                setAttributes({
                                    descBorderUpdated: true,
                                    descBorderTop: top,
                                    descBorderRight: right,
                                    descBorderBottom: bottom,
                                    descBorderLeft: left,
                                })
                            }
                            onChangeColor={(colorValue) => SaveDescStyles({ descBorderColor: colorValue })}
                            onChangeRadius={(newrRadius) => SaveDescStyles({ descBorderRadius: newrRadius })}
                        />
                        {"text" === contentType && (
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
                        )}
                        <SpacingComponent value={descPadding} responsive={true} showUnits={true} label={__("Padding")} onChange={(value) => setAttributes({ descPadding: value })} />
                    </PanelBody>
                </InspectorControls >
            ),
            <Fragment>
                <div ref={this.accordionRef} id={accordionId} className={`${mainClasses}`}>
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