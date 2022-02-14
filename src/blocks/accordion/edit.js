import classnames from "classnames";
import PremiumBorder from "../../components/premium-border";
import PremiumPadding from "../../components/premium-padding";
import PremiumTypo from "../../components/premium-typo";
import PremiumTextShadow from "../../components/premium-text-shadow";
import AdvancedPopColorControl from '../../components/Color Control/ColorComponent'
import RadioComponent from '../../components/radio-control';
import ResponsiveSingleRangeControl from "../../components/RangeControl /single-range-control";

const { Component, Fragment } = wp.element;

const { __ } = wp.i18n;

const {
    PanelBody,
    SelectControl,
} = wp.components;

const { InspectorControls, RichText, InnerBlocks } = wp.blockEditor;

const CONTENT = [
    ["core/paragraph", { content: __("Insert Your Content Here", 'premium-block-for-gutenberg') }]
];

let isAccUpdated = null;

class PremiumAccordion extends Component {
    constructor() {
        super(...arguments);
        this.initAccordion = this.initAccordion.bind(this);
        this.myRef = React.createRef();
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
        if (!accordionId) return null;
        console.log(accordionId)
        let title = this.myRef.current
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
            titlePaddingT,
            titlePaddingR,
            titlePaddingB,
            titlePaddingL,
            descBorderWidth,
            descBorderUpdated,
            descBorderTop,
            descBorderRight,
            descBorderBottom,
            descBorderLeft,
            descPaddingT,
            descPaddingR,
            descPaddingB,
            descPaddingL,
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
                label: __("In", 'premium-block-for-gutenberg')
            },
            {
                value: "out",
                label: __("Out", 'premium-block-for-gutenberg')
            }
        ];

        const TYPE = [
            {
                value: "text",
                label: __("Text", 'premium-block-for-gutenberg')
            },
            {
                value: "block",
                label: __("Gutenberg Block", 'premium-block-for-gutenberg')
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
                        ref={this.myRef}
                        className={`premium-accordion__title_wrap premium-accordion__${direction} premium-accordion__${arrowStyles[0].arrowPos}`}
                        style={{
                            backgroundColor: titleStyles[0].titleBack,
                            borderStyle: titleStyles[0].titleBorder,
                            borderWidth: titleBorderUpdated
                                ? `${titleBorderTop}px ${titleBorderRight}px ${titleBorderBottom}px ${titleBorderLeft}px`
                                : titleBorderWidth + "px",
                            borderRadius: titleStyles[0].titleBorderRadius + "px",
                            borderColor: titleStyles[0].titleBorderColor,
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
                                placeholder={__("Awesome Title", 'premium-block-for-gutenberg')}
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
                        title={__("Title", 'premium-block-for-gutenberg')}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <RadioComponent
                            choices={['H1', 'H2', 'H3', 'H4', 'H5', 'H6']}
                            value={titleTag}
                            onChange={(newValue) => setAttributes({ titleTag: newValue })}
                            label={__("Title Tag", 'premium-block-for-gutenberg')}
                        />
                        <SelectControl
                            label={__("Direction", 'premium-block-for-gutenberg')}
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
                        <AdvancedPopColorControl
                            label={__("Text Color", 'premium-block-for-gutenberg')}
                            colorValue={titleStyles[0].titleColor}
                            colorDefault={''}
                            onColorChange={value =>
                                saveTitleStyles({
                                    titleColor: value
                                })
                            }
                        />
                        <AdvancedPopColorControl
                            label={__("Background Color", 'premium-block-for-gutenberg')}
                            colorValue={titleStyles[0].titleBack}
                            colorDefault={''}
                            onColorChange={value =>
                                saveTitleStyles({
                                    titleBack: value
                                })
                            }
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
                            onChangeType={(newType) =>
                                saveTitleStyles({ titleBorder: newType })
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
                                saveTitleStyles({ titleBorderColor: colorValue })
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
                                saveTitleStyles({ titleShadowColor: newColor })
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
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Arrow", 'premium-block-for-gutenberg')}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <SelectControl
                            label={__("Position", 'premium-block-for-gutenberg')}
                            options={ARROW}
                            value={arrowStyles[0].arrowPos}
                            onChange={newEffect => saveArrowStyles({ arrowPos: newEffect })}
                        />

                        <ResponsiveSingleRangeControl
                            label={__("Size", 'premium-block-for-gutenberg')}
                            value={arrowStyles[0].arrowSize}
                            onChange={newValue => saveArrowStyles({ arrowSize: newValue })}
                            showUnit={false}
                            defaultValue={20}
                        />
                        <AdvancedPopColorControl
                            label={__("Arrow Color", 'premium-block-for-gutenberg')}
                            colorValue={arrowStyles[0].arrowColor}
                            colorDefault={''}
                            onColorChange={newValue =>
                                saveArrowStyles({
                                    arrowColor: newValue
                                })
                            }
                        />
                        <AdvancedPopColorControl
                            label={__("Background Color", 'premium-block-for-gutenberg')}
                            colorValue={arrowStyles[0].arrowBack}
                            colorDefault={''}
                            onColorChange={newValue =>
                                saveArrowStyles({
                                    arrowBack: newValue
                                })
                            }
                        />
                        <ResponsiveSingleRangeControl
                            label={__("Border Radius", 'premium-block-for-gutenberg')}
                            value={arrowStyles[0].arrowRadius}
                            onChange={newValue =>
                                saveArrowStyles({
                                    arrowRadius: newValue === undefined ? 0 : newValue
                                })
                            }
                            unit={'px'}
                            units={['px']}
                            defaultValue={0}
                            showUnit={false}
                        />
                        <ResponsiveSingleRangeControl
                            label={__("Padding", 'premium-block-for-gutenberg')}
                            value={arrowStyles[0].arrowPadding}
                            onChange={newValue =>
                                saveArrowStyles({
                                    arrowPadding: newValue === undefined ? 0 : newValue
                                })
                            }
                            unit={'px'}
                            units={['px']}
                            defaultValue={0}
                            showUnit={false}
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Content", 'premium-block-for-gutenberg')}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <SelectControl
                            label={__("Type", 'premium-block-for-gutenberg')}
                            options={TYPE}
                            value={contentType}
                            onChange={newType => setAttributes({ contentType: newType })}
                            help={__("Gutenberg Block works only with single accordion item", 'premium-block-for-gutenberg')}
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
                                <AdvancedPopColorControl
                                    label={__("Text Color", 'premium-block-for-gutenberg')}
                                    colorValue={descStyles[0].descColor}
                                    colorDefault={''}
                                    onColorChange={value =>
                                        SaveDescStyles({
                                            descColor: value
                                        })
                                    }
                                />
                                <AdvancedPopColorControl
                                    label={__("Background Color", 'premium-block-for-gutenberg')}
                                    colorValue={descStyles[0].descBack}
                                    colorDefault={''}
                                    onColorChange={value =>
                                        SaveDescStyles({
                                            descBack: value
                                        })
                                    }
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
                            onChangeColor={(colorValue) =>
                                SaveDescStyles({ descBorderColor: colorValue })
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
                                            newColor === undefined ? "transparent" : newColor
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
                                        titleText: __("Awesome Title", 'premium-block-for-gutenberg'),
                                        descText: __("Cool Description", 'premium-block-for-gutenberg')
                                    }
                                ])
                            });
                        }}
                    >
                        <i className="dashicons dashicons-plus premium-repeater-icon" />
                        {__("Add New Item", 'premium-block-for-gutenberg')}
                    </button>
                    <p>{__("Add the items you need then reload the page", 'premium-block-for-gutenberg')}</p>
                </div>
            </Fragment>
        ];
    }
}

export default PremiumAccordion;
