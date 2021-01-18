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

const { InspectorControls, RichText, InnerBlocks, ColorPalette } = wp.editor;

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
            titleColor,
            titleSize,
            titleLine,
            titleLetter,
            titleStyle,
            titleUpper,
            titleWeight,
            titleBorder,
            titleBorderWidth,
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
            arrowColor,
            arrowBack,
            arrowPos,
            arrowPadding,
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
            descPaddingL
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
        const onResetClickTitleBorder = () => {
            setAttributes({
                titleBorder: "none",
                titleBorderWidth: "1",
                titleBorderColor: "",
                titleBorderRadius: "0",
            });
        }
        const onResetClickDescBorder = () => {
            setAttributes({
                descBorder: "none",
                descBorderWidth: "1",
                descBorderColor: "",
                descBorderRadius: "0",
            });
        }
        const onResetClickTitlePadding = () => {
            setAttributes({
                titlePaddingT: "0",
                titlePaddingR: "0",
                titlePaddingB: "0",
                titlePaddingL: "0",
            });
        }
        const onResetClickDescPadding = () => {
            setAttributes({
                descPaddingT: "0",
                descPaddingR: "0",
                descPaddingB: "0",
                descPaddingL: "0",
            });
        }
        const onResetClickTitleTypo = () => {
            setAttributes({
                titleSize: "",
                titleWeight: 500,
                titleStyle: "normal",
                titleLetter: "",
                titleLine: "",
                titleUpper: false
            });
        }
        const onResetClickDescTypo = () => {
            setAttributes({
                descSize: "",
                descWeight: 500,
                descStyle: "normal",
                descLetter: "",
                descLine: "",
                descUpper: false
            });
        }
        const onResetClickTitleTextShadow = () => {
            setAttributes({
                titleShadowColor: "",
                titleShadowBlur: "0",
                titleShadowHorizontal: "0",
                titleShadowVertical: "0"
            });
        }
        const onResetClickDescTextShadow = () => {
            setAttributes({
                textShadowColor: "",
                textShadowBlur: "0",
                textShadowHorizontal: "0",
                textShadowVertical: "0"
            });
        }

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
                            border: titleBorder,
                            borderWidth: titleBorderWidth + "px",
                            borderRadius: titleBorderRadius + "px",
                            borderColor: titleBorderColor,
                            paddingTop: titlePaddingT,
                            paddingRight: titlePaddingR,
                            paddingBottom: titlePaddingB,
                            paddingLeft: titlePaddingL
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
                                    padding: arrowPadding + "px",
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
                            border: descBorder,
                            borderWidth: descBorderWidth + "px",
                            borderRadius: descBorderRadius + "px",
                            borderColor: descBorderColor,
                            paddingTop: descPaddingT,
                            paddingRight: descPaddingR,
                            paddingBottom: descPaddingB,
                            paddingLeft: descPaddingL
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
                            onResetClick={onResetClickTitleTypo}
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
                            borderColor={titleBorderColor}
                            borderRadius={titleBorderRadius}
                            onChangeType={newType => setAttributes({ titleBorder: newType })}
                            onChangeWidth={newWidth =>
                                setAttributes({ titleBorderWidth: newWidth })
                            }
                            onChangeColor={colorValue =>
                                setAttributes({ titleBorderColor: colorValue.hex })
                            }
                            onChangeRadius={newrRadius =>
                                setAttributes({ titleBorderRadius: newrRadius })
                            }
                            onResetClick={onResetClickTitleBorder}
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
                            onResetClick={onResetClickTitleTextShadow}
                        />

                        <PremiumPadding
                            paddingTop={titlePaddingT}
                            paddingRight={titlePaddingR}
                            paddingBottom={titlePaddingB}
                            paddingLeft={titlePaddingL}
                            onChangePadTop={value =>
                                setAttributes({
                                    titlePaddingT: value === undefined ? 0 : value
                                })
                            }
                            onChangePadRight={value =>
                                setAttributes({
                                    titlePaddingR: value === undefined ? 0 : value
                                })
                            }
                            onChangePadBottom={value =>
                                setAttributes({
                                    titlePaddingB: value === undefined ? 0 : value
                                })
                            }
                            onChangePadLeft={value =>
                                setAttributes({
                                    titlePaddingL: value === undefined ? 0 : value
                                })
                            }
                            onResetClick={onResetClickTitlePadding}
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
                        <RangeControl
                            label={__("Padding (PX)")}
                            value={arrowPadding}
                            onChange={newValue =>
                                setAttributes({
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
                                    onResetClick={onResetClickDescTypo}
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
                            borderColor={descBorderColor}
                            borderRadius={descBorderRadius}
                            onChangeType={newType => setAttributes({ descBorder: newType })}
                            onChangeWidth={newWidth =>
                                setAttributes({ descBorderWidth: newWidth })
                            }
                            onChangeColor={colorValue =>
                                setAttributes({ descBorderColor: colorValue.hex })
                            }
                            onChangeRadius={newrRadius =>
                                setAttributes({ descBorderRadius: newrRadius })
                            }
                            onResetClick={onResetClickDescBorder}
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
                                onResetClick={onResetClickDescTextShadow}
                            />
                        )}
                        <PremiumPadding
                            paddingTop={descPaddingT}
                            paddingRight={descPaddingR}
                            paddingBottom={descPaddingB}
                            paddingLeft={descPaddingL}
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
                            onResetClick={onResetClickDescPadding}
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
