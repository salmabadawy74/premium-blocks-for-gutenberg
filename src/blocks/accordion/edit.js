import classnames from "classnames";
import PremiumBorder from "../../components/premium-border";
import PremiumTypo from "../../components/premium-typo";
import PremiumTextShadow from "../../components/premium-text-shadow";
import PremiumResponsivePadding from '../../components/Premium-Responsive-Padding';
import PremiumResponsiveTabs from "../../components/premium-responsive-tabs";
import styling from './styling';


const { Component, Fragment } = wp.element;

const { __ } = wp.i18n;

const {
    Toolbar,
    PanelBody,
    SelectControl,
    RangeControl,
    Dropdown,
    Button
} = wp.components;

const { InspectorControls, RichText, InnerBlocks, ColorPalette } = wp.blockEditor;

const CONTENT = [
    ["core/paragraph", { content: __("Insert Your Content Here") }]
];

let isAccUpdated = null;

class PremiumAccordion extends Component {
    constructor() {
        super(...arguments);

        this.initAccordion = this.initAccordion.bind(this);
    }

    componentDidMount() {
        const { attributes, setAttributes, clientId } = this.props;
        setAttributes({ block_id: clientId })
        if (!attributes.accordionId) {
            setAttributes({ accordionId: "premium-accordion-" + clientId });
        }
        this.props.setAttributes({ classMigrate: true });
        // Pushing Style tag for this block css.
        const $style = document.createElement("style");
        $style.setAttribute(
            "id",
            "premium-style-accordion-" + this.props.clientId.substr(0, 6)
        );
        document.head.appendChild($style);
        this.initAccordion();
    }

    componentDidUpdate(prevProps, prevState) {
        clearTimeout(isAccUpdated);
        isAccUpdated = setTimeout(this.initAccordion, 500);
    }

    initAccordion() {
        const { accordionId } = this.props.attributes;
        if (!this.props.attributes.accordionId) return null;
        let title = document
            .getElementById(accordionId)
            .getElementsByClassName("premium-accordion__title_wrap")[0];
        title.addEventListener("click", () => {
            title
                .getElementsByClassName("premium-accordion__icon")[0]
                .classList.toggle("premium-accordion__closed");
            title.nextSibling.classList.toggle("premium-accordion__desc_close");
        });
    }

    render() {
        const { isSelected, setAttributes, clientId, className } = this.props;

        const {
            block_id,
            accordionId,
            repeaterItems,
            direction,
            titleTag,
            titleColor,
            titleSize,
            titleLine,
            titleLetter,
            titleStyle,
            titleUpper,
            titleWeight,
            titleBorder,
            titleBorderWidth,
            titleBorderTop,
            titleBorderRight,
            titleBorderBottom,
            titleBorderLeft,
            titleBorderColor,
            titleBorderRadius,
            titleBack,
            titleShadowBlur,
            titleShadowColor,
            titleShadowHorizontal,
            titleShadowVertical,
            titlePaddingT,
            titlePaddingR,
            titlePaddingB,
            titlePaddingL,
            titlePaddingTTablet,
            titlePaddingRTablet,
            titlePaddingBTablet,
            titlePaddingLTablet,
            titlePaddingTMobile,
            titlePaddingRMobile,
            titlePaddingBMobile,
            titlePaddingLMobile,
            arrowColor,
            arrowBack,
            arrowPos,
            arrowPaddingT,
            arrowPaddingR,
            arrowPaddingB,
            arrowPaddingL,
            arrowPaddingTTablet,
            arrowPaddingRTablet,
            arrowPaddingBTablet,
            arrowPaddingLTablet,
            arrowPaddingTMobile,
            arrowPaddingRMobile,
            arrowPaddingBMobile,
            arrowPaddingLMobile,
            arrowRadius,
            arrowSize,
            contentType,
            descAlign,
            descColor,
            descBack,
            descBorder,
            descBorderColor,
            descBorderRadius,
            descBorderWidth,
            descBorderTop,
            descBorderRight,
            descBorderBottom,
            descBorderLeft,
            descSize,
            descLine,
            descLetter,
            descStyle,
            descUpper,
            descWeight,
            textShadowBlur,
            textShadowColor,
            textShadowHorizontal,
            textShadowVertical,
            descPaddingT,
            descPaddingR,
            descPaddingB,
            descPaddingL,
            descPaddingTTablet,
            descPaddingRTablet,
            descPaddingBTablet,
            descPaddingLTablet,
            descPaddingTMobile,
            descPaddingRMobile,
            descPaddingBMobile,
            descPaddingLMobile,
            titleBorderUpdated,
            descBorderUpdated,
            hideDesktop,
            hideTablet,
            hideMobile
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
                label: __("In")
            },
            {
                value: "out",
                label: __("Out")
            }
        ];

        const TYPE = [
            {
                value: "text",
                label: __("Text")
            },
            {
                value: "block",
                label: __("Gutenberg Block")
            }
        ];

        let element = document.getElementById(
            "premium-style-accordion-" + clientId.substr(0, 6)
        );
        if (null != element && "undefined" != typeof element) {
            element.innerHTML = styling(this.props);
        }

        const ALIGNS = ["left", "center", "right"];

        const onAccordionChange = (attr, value, index) => {
            const items = repeaterItems;

            return items.map(function (item, currIndex) {
                if (index == currIndex) {
                    item[attr] = value;
                }

                return item;
            });
        };


        const mainClasses = classnames(className, "premium-accordion");

        const accordionItems = repeaterItems.map((item, index) => {
            return (
                <div
                    id={`premium-accordion__layer${index}`}
                    className={`premium-accordion__content_wrap`}
                >
                    <div
                        className={`premium-accordion__title_wrap premium-accordion__${direction} premium-accordion__${arrowPos}`}
                        style={{
                            backgroundColor: titleBack,
                            borderStyle: titleBorder,
                            borderWidth: titleBorderUpdated
                                ? `${titleBorderTop}px ${titleBorderRight}px ${titleBorderBottom}px ${titleBorderLeft}px`
                                : titleBorderWidth + "px",
                            borderRadius: titleBorderRadius + "px",
                            borderColor: titleBorderColor,
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
                                placeholder={__("Awesome Title")}
                                value={item.titleText}
                                style={{
                                    color: titleColor,
                                    fontSize: titleSize + "px",
                                    letterSpacing: titleLetter + "px",
                                    textTransform: titleUpper ? "uppercase" : "none",
                                    fontStyle: titleStyle,
                                    fontWeight: titleWeight,
                                    textShadow: `${titleShadowHorizontal}px ${titleShadowVertical}px ${titleShadowBlur}px ${titleShadowColor}`,
                                    lineHeight: titleLine + "px"
                                }}
                            />
                        </div>
                        <div className={`premium-accordion__icon_wrap`}>
                            <svg
                                className={`premium-accordion__icon`}
                                role="img"
                                focusable="false"
                                xmlns="http://www.w3.org/2000/svg"
                                width={arrowSize}
                                height={arrowSize}
                                viewBox="0 0 20 20"
                                style={{
                                    fill: arrowColor,
                                    backgroundColor: arrowBack,
                                    borderRadius: arrowRadius + "px"
                                }}
                            >
                                <polygon points="16.7,3.3 10,10 3.3,3.4 0,6.7 10,16.7 10,16.6 20,6.7 " />
                            </svg>
                        </div>
                    </div>
                    <div
                        className={`premium-accordion__desc_wrap`}
                        style={{
                            textAlign: descAlign,
                            backgroundColor: descBack,
                            borderStyle: descBorder,
                            borderWidth: descBorderUpdated
                                ? `${descBorderTop}px ${descBorderRight}px ${descBorderBottom}px ${descBorderLeft}px`
                                : descBorderWidth + "px",
                            borderRadius: descBorderRadius + "px",
                            borderColor: descBorderColor
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
                                    color: descColor,
                                    fontSize: descSize + "px",
                                    letterSpacing: descLetter + "px",
                                    textTransform: descUpper ? "uppercase" : "none",
                                    textShadow: `${textShadowHorizontal}px ${textShadowVertical}px ${textShadowBlur}px ${textShadowColor}`,
                                    fontStyle: descStyle,
                                    fontWeight: descWeight,
                                    lineHeight: descLine + "px"
                                }}
                            />
                        )}
                        {"block" === contentType && <InnerBlocks template={CONTENT} />}
                    </div>
                </div>
            );
        });
        return [
            isSelected && (
                <InspectorControls key="inspector">
                    <PanelBody
                        title={__("Title")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <p>{__("Title Tag")}</p>
                        <Toolbar
                            controls={"123456".split("").map(tag => ({
                                icon: "heading",
                                isActive: "H" + tag === titleTag,
                                onClick: () => setAttributes({ titleTag: "H" + tag }),
                                subscript: tag
                            }))}
                        />
                        <SelectControl
                            label={__("Direction")}
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
                            size={titleSize}
                            weight={titleWeight}
                            style={titleStyle}
                            spacing={titleLetter}
                            line={titleLine}
                            upper={titleUpper}
                            onChangeSize={newSize => setAttributes({ titleSize: newSize })}
                            onChangeWeight={newWeight =>
                                setAttributes({ titleWeight: newWeight })
                            }
                            onChangeStyle={newStyle =>
                                setAttributes({ titleStyle: newStyle })
                            }
                            onChangeSpacing={newValue =>
                                setAttributes({ titleLetter: newValue })
                            }
                            onChangeLine={newValue => setAttributes({ titleLine: newValue })}
                            onChangeUpper={check => setAttributes({ titleUpper: check })}
                        />

                        <div className="premium-control-toggle">
                            <strong>{__("Colors")}</strong>
                            <Dropdown
                                className="premium-control-toggle-btn"
                                contentClassName="premium-control-toggle-content"
                                position="bottom right"
                                renderToggle={({ isOpen, onToggle }) => (
                                    <Button isSmall onClick={onToggle} aria-expanded={isOpen}>
                                        <i className="dashicons dashicons-edit" />
                                    </Button>
                                )}
                                renderContent={() => (
                                    <Fragment>
                                        <p>{__("Text Color")}</p>
                                        <ColorPalette
                                            value={titleColor}
                                            onChange={newValue =>
                                                setAttributes({
                                                    titleColor: newValue
                                                })
                                            }
                                            allowReset={true}
                                        />
                                        <p>{__("Background Color")}</p>
                                        <ColorPalette
                                            value={titleBack}
                                            onChange={newValue =>
                                                setAttributes({
                                                    titleBack: newValue
                                                })
                                            }
                                            allowReset={true}
                                        />
                                    </Fragment>
                                )}
                            />
                        </div>
                        <PremiumBorder
                            borderType={titleBorder}
                            borderWidth={titleBorderWidth}
                            top={titleBorderTop}
                            right={titleBorderRight}
                            bottom={titleBorderBottom}
                            left={titleBorderLeft}
                            borderColor={titleBorderColor}
                            borderRadius={titleBorderRadius}
                            onChangeType={(newType) =>
                                setAttributes({ titleBorder: newType })
                            }
                            onChangeWidth={({ top, right, bottom, left }) =>
                                setAttributes({
                                    titleBorderUpdated: true,
                                    titleBorderTop: top,
                                    titleBorderRight: right,
                                    titleBorderBottom: bottom,
                                    titleBorderLeft: left,
                                })
                            }
                            onChangeColor={(colorValue) =>
                                setAttributes({ titleBorderColor: colorValue.hex })
                            }
                            onChangeRadius={(newrRadius) =>
                                setAttributes({ titleBorderRadius: newrRadius })
                            }
                        />
                        <PremiumTextShadow
                            color={titleShadowColor}
                            blur={titleShadowBlur}
                            horizontal={titleShadowHorizontal}
                            vertical={titleShadowVertical}
                            onChangeColor={newColor =>
                                setAttributes({ titleShadowColor: newColor.hex })
                            }
                            onChangeBlur={newBlur =>
                                setAttributes({ titleShadowBlur: newBlur })
                            }
                            onChangehHorizontal={newValue =>
                                setAttributes({ titleShadowHorizontal: newValue })
                            }
                            onChangeVertical={newValue =>
                                setAttributes({ titleShadowVertical: newValue })
                            }
                        />
                        <PremiumResponsivePadding
                            paddingT={titlePaddingT}
                            paddingR={titlePaddingR}
                            paddingB={titlePaddingB}
                            paddingL={titlePaddingL}
                            paddingTTablet={titlePaddingTTablet}
                            paddingRTablet={titlePaddingRTablet}
                            paddingBTablet={titlePaddingBTablet}
                            paddingLTablet={titlePaddingLTablet}
                            paddingTMobile={titlePaddingTMobile}
                            paddingRMobile={titlePaddingRMobile}
                            paddingBMobile={titlePaddingBMobile}
                            paddingLMobile={titlePaddingLMobile}
                            onChangePaddingTop={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ titlePaddingT: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ titlePaddingTTablet: newValue })
                                    } else {
                                        setAttributes({ titlePaddingTMobile: newValue })
                                    }
                                }
                            }
                            onChangePaddingRight={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ titlePaddingR: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ titlePaddingRTablet: newValue })
                                    } else {
                                        setAttributes({ titlePaddingRMobile: newValue })
                                    }
                                }
                            }
                            onChangePaddingBottom={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ titlePaddingB: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ titlePaddingBTablet: newValue })
                                    } else {
                                        setAttributes({ titlePaddingBMobile: newValue })
                                    }
                                }
                            }
                            onChangePaddingLeft={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ titlePaddingL: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ titlePaddingLTablet: newValue })
                                    } else {
                                        setAttributes({ titlePaddingLMobile: newValue })
                                    }
                                }
                            }
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Arrow")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <SelectControl
                            label={__("Position")}
                            options={ARROW}
                            value={arrowPos}
                            onChange={newEffect => setAttributes({ arrowPos: newEffect })}
                        />
                        <RangeControl
                            label={__("Size ")}
                            value={arrowSize}
                            onChange={newValue => setAttributes({ arrowSize: newValue })}
                        />
                        <div className="premium-control-toggle">
                            <strong>{__("Colors")}</strong>
                            <Dropdown
                                className="premium-control-toggle-btn"
                                contentClassName="premium-control-toggle-content"
                                position="bottom right"
                                renderToggle={({ isOpen, onToggle }) => (
                                    <Button isSmall onClick={onToggle} aria-expanded={isOpen}>
                                        <i className="dashicons dashicons-edit" />
                                    </Button>
                                )}
                                renderContent={() => (
                                    <Fragment>
                                        <p>{__("Arrow Color")}</p>
                                        <ColorPalette
                                            value={arrowColor}
                                            onChange={newValue =>
                                                setAttributes({
                                                    arrowColor: newValue
                                                })
                                            }
                                            allowReset={true}
                                        />
                                        <p>{__("Background Color")}</p>
                                        <ColorPalette
                                            value={arrowBack}
                                            onChange={newValue =>
                                                setAttributes({
                                                    arrowBack: newValue
                                                })
                                            }
                                            allowReset={true}
                                        />
                                    </Fragment>
                                )}
                            />
                        </div>
                        <RangeControl
                            label={__("Border Radius (PX)")}
                            value={arrowRadius}
                            onChange={newValue =>
                                setAttributes({
                                    arrowRadius: newValue === undefined ? 0 : newValue
                                })
                            }
                        />
                        <PremiumResponsivePadding
                            paddingTop={arrowPaddingT}
                            paddingRight={arrowPaddingR}
                            paddingBottom={arrowPaddingB}
                            paddingLeft={arrowPaddingL}
                            paddingTopTablet={arrowPaddingTTablet}
                            paddingRightTablet={arrowPaddingRTablet}
                            paddingBottomTablet={arrowPaddingBTablet}
                            paddingLeftTablet={arrowPaddingLTablet}
                            paddingTopMobile={arrowPaddingTMobile}
                            paddingRightMobile={arrowPaddingRMobile}
                            paddingBottomMobile={arrowPaddingBMobile}
                            paddingLeftMobile={arrowPaddingLMobile}
                            onChangePaddingTop={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ arrowPaddingT: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ arrowPaddingTTablet: newValue })
                                    } else {
                                        setAttributes({ arrowPaddingTMobile: newValue })
                                    }
                                }
                            }
                            onChangePaddingRight={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ arrowPaddingR: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ arrowPaddingRTablet: newValue })
                                    } else {
                                        setAttributes({ arrowPaddingRMobile: newValue })
                                    }
                                }
                            }
                            onChangePaddingBottom={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ arrowPaddingB: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ arrowPaddingBTablet: newValue })
                                    } else {
                                        setAttributes({ arrowPaddingBMobile: newValue })
                                    }
                                }
                            }
                            onChangePaddingLeft={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ arrowPaddingL: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ arrowPaddingLTablet: newValue })
                                    } else {
                                        setAttributes({ arrowPaddingLMobile: newValue })
                                    }
                                }
                            }
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Content")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <SelectControl
                            label={__("Type")}
                            options={TYPE}
                            value={contentType}
                            onChange={newType => setAttributes({ contentType: newType })}
                            help={__("Gutenberg Block works only with single accordion item")}
                        />
                        <Toolbar
                            controls={ALIGNS.map(align => ({
                                icon: "editor-align" + align,
                                isActive: align === descAlign,
                                onClick: () => setAttributes({ descAlign: align })
                            }))}
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
                                    size={descSize}
                                    weight={descWeight}
                                    style={descStyle}
                                    spacing={descLetter}
                                    line={descLine}
                                    upper={descUpper}
                                    onChangeSize={newSize => setAttributes({ descSize: newSize })}
                                    onChangeWeight={newWeight =>
                                        setAttributes({ descWeight: newWeight })
                                    }
                                    onChangeStyle={newStyle =>
                                        setAttributes({ descStyle: newStyle })
                                    }
                                    onChangeSpacing={newValue =>
                                        setAttributes({ descLetter: newValue })
                                    }
                                    onChangeLine={newValue =>
                                        setAttributes({ descLine: newValue })
                                    }
                                    onChangeUpper={check => setAttributes({ descUpper: check })}
                                />
                                <div className="premium-control-toggle">
                                    <strong>{__("Colors")}</strong>
                                    <Dropdown
                                        className="premium-control-toggle-btn"
                                        contentClassName="premium-control-toggle-content"
                                        position="bottom right"
                                        renderToggle={({ isOpen, onToggle }) => (
                                            <Button isSmall onClick={onToggle} aria-expanded={isOpen}>
                                                <i className="dashicons dashicons-edit" />
                                            </Button>
                                        )}
                                        renderContent={() => (
                                            <Fragment>
                                                <p>{__("Text Color")}</p>
                                                <ColorPalette
                                                    value={descColor}
                                                    onChange={newValue =>
                                                        setAttributes({
                                                            descColor: newValue
                                                        })
                                                    }
                                                    allowReset={true}
                                                />
                                                <p>{__("Background Color")}</p>
                                                <ColorPalette
                                                    value={descBack}
                                                    onChange={newValue =>
                                                        setAttributes({
                                                            descBack: newValue
                                                        })
                                                    }
                                                    allowReset={true}
                                                />
                                            </Fragment>
                                        )}
                                    />
                                </div>
                            </Fragment>
                        )}

                        <PremiumBorder
                            borderType={descBorder}
                            borderWidth={descBorderWidth}
                            top={descBorderTop}
                            right={descBorderRight}
                            bottom={descBorderBottom}
                            left={descBorderLeft}
                            borderColor={descBorderColor}
                            borderRadius={descBorderRadius}
                            onChangeType={(newType) => setAttributes({ descBorder: newType })}
                            onChangeWidth={({ top, right, bottom, left }) =>
                                setAttributes({
                                    descBorderUpdated: true,
                                    descBorderTop: top,
                                    descBorderRight: right,
                                    descBorderBottom: bottom,
                                    descBorderLeft: left,
                                })
                            }
                            onChangeColor={(colorValue) =>
                                setAttributes({ descBorderColor: colorValue.hex })
                            }
                            onChangeRadius={(newrRadius) =>
                                setAttributes({ descBorderRadius: newrRadius })
                            }
                        />

                        {"text" === contentType && (
                            <PremiumTextShadow
                                color={textShadowColor}
                                blur={textShadowBlur}
                                horizontal={textShadowHorizontal}
                                vertical={textShadowVertical}
                                onChangeColor={newColor =>
                                    setAttributes({
                                        textShadowColor:
                                            newColor === undefined ? "transparent" : newColor.hex
                                    })
                                }
                                onChangeBlur={newBlur =>
                                    setAttributes({
                                        textShadowBlur: newBlur === undefined ? 0 : newBlur
                                    })
                                }
                                onChangehHorizontal={newValue =>
                                    setAttributes({
                                        textShadowHorizontal: newValue === undefined ? 0 : newValue
                                    })
                                }
                                onChangeVertical={newValue =>
                                    setAttributes({
                                        textShadowVertical: newValue === undefined ? 0 : newValue
                                    })
                                }
                            />
                        )}

                        <PremiumResponsivePadding
                            paddingTop={descPaddingT}
                            paddingRight={descPaddingR}
                            paddingBottom={descPaddingB}
                            paddingLeft={descPaddingL}
                            paddingTopTablet={descPaddingTTablet}
                            paddingRightTablet={descPaddingRTablet}
                            paddingBottomTablet={descPaddingBTablet}
                            paddingLeftTablet={descPaddingLTablet}
                            paddingTopMobile={descPaddingTMobile}
                            paddingRightMobile={descPaddingRMobile}
                            paddingBottomMobile={descPaddingBMobile}
                            paddingLeftMobile={descPaddingLMobile}
                            onChangePaddingTop={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ descPaddingT: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ descPaddingTTablet: newValue })
                                    } else {
                                        setAttributes({ descPaddingTMobile: newValue })
                                    }
                                }
                            }
                            onChangePaddingRight={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ descPaddingR: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ descPaddingRTablet: newValue })
                                    } else {
                                        setAttributes({ descPaddingRMobile: newValue })
                                    }
                                }
                            }
                            onChangePaddingBottom={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ descPaddingB: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ descPaddingBTablet: newValue })
                                    } else {
                                        setAttributes({ descPaddingBMobile: newValue })
                                    }
                                }
                            }
                            onChangePaddingLeft={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ descPaddingL: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ descPaddingLTablet: newValue })
                                    } else {
                                        setAttributes({ descPaddingLMobile: newValue })
                                    }
                                }
                            }
                        />

                    </PanelBody>
                    <PremiumResponsiveTabs
                        Desktop={hideDesktop}
                        Tablet={hideTablet}
                        Mobile={hideMobile}
                        onChangeDesktop={(value) => setAttributes({ hideDesktop: value ? " premium-desktop-hidden" : "" })}
                        onChangeTablet={(value) => setAttributes({ hideTablet: value ? " premium-tablet-hidden" : "" })}
                        onChangeMobile={(value) => setAttributes({ hideMobile: value ? " premium-mobile-hidden" : "" })}
                    />

                </InspectorControls >
            ),
            <Fragment>
                <div id={`${accordionId}`} className={`${mainClasses}  premium-accordion-${block_id} ${hideDesktop} ${hideTablet} ${hideMobile}`}>
                    {accordionItems}
                    <div className={"premium-repeater"}>
                        <button
                            className={"premium-repeater-btn"}
                            onClick={() => {
                                return setAttributes({
                                    repeaterItems: repeaterItems.concat([
                                        {
                                            titleText: __("Awesome Title"),
                                            descText: __("Cool Description"),
                                        },
                                    ]),
                                });
                            }}
                        >
                            <i className="dashicons dashicons-plus premium-repeater-icon" />
                            {__("Add New Item")}
                        </button>
                        <p>{__("Add the items you need then reload the page")}</p>
                    </div>
                </div>
            </Fragment>
        ];
    }
}

export default PremiumAccordion;
