import classnames from "classnames";
import PremiumBorder from "../../components/premium-border";
import PremiumPadding from "../../components/premium-padding";
import PremiumTypo from "../../components/premium-typo";
import PremiumTextShadow from "../../components/premium-text-shadow";

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
            accordionId,
            repeaterItems,
            direction,
            titleTag,
            arrowPos,
            contentType,
            textShadowBlur,
            textShadowColor,
            textShadowHorizontal,
            textShadowVertical,
            titleBorderUpdated,
            titleStyles,
            arrowStyles,
            descStyles
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
            setAttributes({
                arrowStyles: newUpdate,
            });
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
                            backgroundColor: titleStyles[0].titleBack,
                            borderStyle: titleStyles[0].titleBorder,
                            borderWidth: titleStyles[0].titleBorderUpdated
                                ? `${titleBorderTop}px ${titleBorderRight}px ${titleBorderBottom}px ${titleBorderLeft}px`
                                : titleBorderWidth + "px",
                            borderRadius: titleStyles[0].titleBorderRadius + "px",
                            borderColor: titleStyles[0].titleBorderColor,
                            paddingTop: titleStyles[0].titlePaddingT,
                            paddingRight: titleStyles[0].titlePaddingR,
                            paddingBottom: titleStyles[0].titlePaddingB,
                            paddingLeft: titleStyles[0].titlePaddingL
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
                            borderWidth: descStyles[0].descBorderUpdated
                                ? `${descStyles[0].descBorderTop}px ${descStyles[0].descBorderRight}px ${descStyles[0].descBorderBottom}px ${descStyles[0].descBorderLeft}px`
                                : descStyles[0].descBorderWidth + "px",
                            borderRadius: descStyles[0].descBorderRadius + "px",
                            borderColor: descStyles[0].descBorderColor,
                            paddingTop: descStyles[0].descPaddingT,
                            paddingRight: descStyles[0].descPaddingR,
                            paddingBottom: descStyles[0].descPaddingB,
                            paddingLeft: descStyles[0].descPaddingL
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
                            size={titleStyles[0].titleSize}
                            weight={titleStyles[0].titleWeight}
                            style={titleStyles[0].titleStyle}
                            spacing={titleStyles[0].titleLetter}
                            line={titleStyles[0].titleLine}
                            upper={titleStyles[0].titleUpper}
                            onChangeSize={newSize => saveTitleStyles({ titleSize: newSize })}
                            onChangeWeight={newWeight =>
                                saveTitleStyles({ titleWeight: newWeight })
                            }
                            onChangeStyle={newStyle =>
                                saveTitleStyles({ titleStyle: newStyle })
                            }
                            onChangeSpacing={newValue =>
                                saveTitleStyles({ titleLetter: newValue })
                            }
                            onChangeLine={newValue => saveTitleStyles({ titleLine: newValue })}
                            onChangeUpper={check => saveTitleStyles({ titleUpper: check })}
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
                                            value={titleStyles[0].titleColor}
                                            onChange={newValue =>
                                                saveTitleStyles({
                                                    titleColor: newValue
                                                })
                                            }
                                            allowReset={true}
                                        />
                                        <p>{__("Background Color")}</p>
                                        <ColorPalette
                                            value={titleStyles[0].titleBack}
                                            onChange={newValue =>
                                                saveTitleStyles({
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
                            borderType={titleStyles[0].titleBorder}
                            borderWidth={titleStyles[0].titleBorderWidth}
                            top={titleStyles[0].titleBorderTop}
                            right={titleStyles[0].titleBorderRight}
                            bottom={titleStyles[0].titleBorderBottom}
                            left={titleStyles[0].titleBorderLeft}
                            borderColor={titleStyles[0].titleBorderColor}
                            borderRadius={titleStyles[0].titleBorderRadius}
                            onChangeType={(newType) =>
                                saveTitleStyles({ titleBorder: newType })
                            }
                            onChangeWidth={({ top, right, bottom, left }) =>
                                saveTitleStyles({
                                    titleBorderUpdated: true,
                                    titleBorderTop: top,
                                    titleBorderRight: right,
                                    titleBorderBottom: bottom,
                                    titleBorderLeft: left,
                                })
                            }
                            onChangeColor={(colorValue) =>
                                saveTitleStyles({ titleBorderColor: colorValue.hex })
                            }
                            onChangeRadius={(newrRadius) =>
                                saveTitleStyles({ titleBorderRadius: newrRadius })
                            }
                        />
                        <PremiumTextShadow
                            color={titleStyles[0].titleShadowColor}
                            blur={titleStyles[0].titleShadowBlur}
                            horizontal={titleStyles[0].titleShadowHorizontal}
                            vertical={titleStyles[0].titleShadowVertical}
                            onChangeColor={newColor =>
                                saveTitleStyles({ titleShadowColor: newColor.hex })
                            }
                            onChangeBlur={newBlur =>
                                saveTitleStyles({ titleShadowBlur: newBlur })
                            }
                            onChangehHorizontal={newValue =>
                                saveTitleStyles({ titleShadowHorizontal: newValue })
                            }
                            onChangeVertical={newValue =>
                                saveTitleStyles({ titleShadowVertical: newValue })
                            }
                        />

                        <PremiumPadding
                            paddingTop={titleStyles[0].titlePaddingT}
                            paddingRight={titleStyles[0].titlePaddingR}
                            paddingBottom={titleStyles[0].titlePaddingB}
                            paddingLeft={titleStyles[0].titlePaddingL}
                            onChangePadTop={value =>
                                saveTitleStyles({
                                    titlePaddingT: value === undefined ? 0 : value
                                })
                            }
                            onChangePadRight={value =>
                                saveTitleStyles({
                                    titlePaddingR: value === undefined ? 0 : value
                                })
                            }
                            onChangePadBottom={value =>
                                saveTitleStyles({
                                    titlePaddingB: value === undefined ? 0 : value
                                })
                            }
                            onChangePadLeft={value =>
                                saveTitleStyles({
                                    titlePaddingL: value === undefined ? 0 : value
                                })
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
                            value={arrowStyles[0].arrowPos}
                            onChange={newEffect => saveArrowStyles({ arrowPos: newEffect })}
                        />
                        <RangeControl
                            label={__("Size ")}
                            value={arrowStyles[0].arrowSize}
                            onChange={newValue => saveArrowStyles({ arrowSize: newValue })}
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
                                            value={arrowStyles[0].arrowColor}
                                            onChange={newValue =>
                                                saveArrowStyles({
                                                    arrowColor: newValue
                                                })
                                            }
                                            allowReset={true}
                                        />
                                        <p>{__("Background Color")}</p>
                                        <ColorPalette
                                            value={arrowStyles[0].arrowBack}
                                            onChange={newValue =>
                                                saveArrowStyles({
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
                            value={arrowStyles[0].arrowRadius}
                            onChange={newValue =>
                                saveArrowStyles({
                                    arrowRadius: newValue === undefined ? 0 : newValue
                                })
                            }
                        />
                        <RangeControl
                            label={__("Padding (PX)")}
                            value={arrowStyles[0].arrowPadding}
                            onChange={newValue =>
                                saveArrowStyles({
                                    arrowPadding: newValue === undefined ? 0 : newValue
                                })
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
                                isActive: align === descStyles[0].descAlign,
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
                                    size={descStyles[0].descSize}
                                    weight={descStyles[0].descWeight}
                                    style={descStyles[0].descStyle}
                                    spacing={descStyles[0].descLetter}
                                    line={descStyles[0].descLine}
                                    upper={descStyles[0].descUpper}
                                    onChangeSize={newSize => setAttributes({ descSize: newSize })}
                                    onChangeWeight={newWeight =>
                                        SaveDescStyles({ descWeight: newWeight })
                                    }
                                    onChangeStyle={newStyle =>
                                        SaveDescStyles({ descStyle: newStyle })
                                    }
                                    onChangeSpacing={newValue =>
                                        SaveDescStyles({ descLetter: newValue })
                                    }
                                    onChangeLine={newValue =>
                                        SaveDescStyles({ descLine: newValue })
                                    }
                                    onChangeUpper={check => SaveDescStyles({ descUpper: check })}
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
                                                    value={descStyles[0].descColor}
                                                    onChange={newValue =>
                                                        SaveDescStyles({
                                                            descColor: newValue
                                                        })
                                                    }
                                                    allowReset={true}
                                                />
                                                <p>{__("Background Color")}</p>
                                                <ColorPalette
                                                    value={descStyles[0].descBack}
                                                    onChange={newValue =>
                                                        SaveDescStyles({
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
                            borderType={descStyles[0].descBorder}
                            borderWidth={descStyles[0].descBorderWidth}
                            top={descStyles[0].descBorderTop}
                            right={descStyles[0].descBorderRight}
                            bottom={descStyles[0].descBorderBottom}
                            left={descStyles[0].descBorderLeft}
                            borderColor={descStyles[0].descBorderColor}
                            borderRadius={descStyles[0].descBorderRadius}
                            onChangeType={(newType) => SaveDescStyles({ descBorder: newType })}
                            onChangeWidth={({ top, right, bottom, left }) =>
                                SaveDescStyles({
                                    descBorderUpdated: true,
                                    descBorderTop: top,
                                    descBorderRight: right,
                                    descBorderBottom: bottom,
                                    descBorderLeft: left,
                                })
                            }
                            onChangeColor={(colorValue) =>
                                SaveDescStyles({ descBorderColor: colorValue.hex })
                            }
                            onChangeRadius={(newrRadius) =>
                                SaveDescStyles({ descBorderRadius: newrRadius })
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
                        <PremiumPadding
                            paddingTop={descStyles[0].descPaddingT}
                            paddingRight={descStyles[0].descPaddingR}
                            paddingBottom={descStyles[0].descPaddingB}
                            paddingLeft={descStyles[0].descPaddingL}
                            onChangePadTop={value =>
                                setAttributes({
                                    descPaddingT: value === undefined ? 0 : value
                                })
                            }
                            onChangePadRight={value =>
                                setAttributes({
                                    descPaddingR: value === undefined ? 0 : value
                                })
                            }
                            onChangePadBottom={value =>
                                setAttributes({
                                    descPaddingB: value === undefined ? 0 : value
                                })
                            }
                            onChangePadLeft={value =>
                                setAttributes({
                                    descPaddingL: value === undefined ? 0 : value
                                })
                            }
                        />
                    </PanelBody>
                </InspectorControls>
            ),
            <Fragment>
                <div id={accordionId} className={`${mainClasses}`}>
                    {accordionItems}
                </div>
                <div className={"premium-repeater"}>
                    <button
                        className={"premium-repeater-btn"}
                        onClick={() => {
                            return setAttributes({
                                repeaterItems: repeaterItems.concat([
                                    {
                                        titleText: __("Awesome Title"),
                                        descText: __("Cool Description")
                                    }
                                ])
                            });
                        }}
                    >
                        <i className="dashicons dashicons-plus premium-repeater-icon" />
                        {__("Add New Item")}
                    </button>
                    <p>{__("Add the items you need then reload the page")}</p>
                </div>
            </Fragment>
        ];
    }
}

export default PremiumAccordion;
