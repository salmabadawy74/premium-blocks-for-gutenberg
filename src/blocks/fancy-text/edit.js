import classnames from "classnames";
import PremiumTypo from "../../components/premium-typo";
import PremiumTextShadow from "../../components/premium-text-shadow";
import Typed from "typed.js";
import PremiumBackground from "../../components/premium-background";
import PremiumResponsiveTabs from "../../components/premium-responsive-tabs";
import hexToRgba from "../../components/hex-to-rgba";

import {
    SortableContainer,
    SortableElement,
    arrayMove,
} from "react-sortable-hoc";

const { __ } = wp.i18n;
const { withSelect } = wp.data


const { Component, Fragment } = wp.element;

const {
    BlockControls,
    AlignmentToolbar,
    InspectorControls,
    ColorPalette,
} = wp.blockEditor;

const {
    PanelBody,
    SelectControl,
    TextControl,
    ToggleControl,
    Toolbar,
} = wp.components;

const SortableItem = SortableElement(
    ({ edit, removeItem, newIndex, value, changeFancyValue, items }) => (
        <div className="premium-repeater-item">
            <div className={`premium-repeater-item__container ${newIndex}`}>
                <span className="premium-repeater-item__dragHandle"></span>
                <div
                    className="premium-repeater-item__content"
                    onClick={() => edit(newIndex)}
                >
                    {value.title}{" "}
                </div>

                {items.length != 1 ? (
                    <button
                        className="premium-repeater-item__trashicon fa fa-trash"
                        onClick={() => removeItem(newIndex, value)}
                    ></button>
                ) : (
                    ""
                )}
            </div>
            <div
                className={`premium-repeater-item-controls ${value.edit ? "editable" : ""
                    }`}
            >
                <TextControl
                    label={__("Fancy String")}
                    value={value.title}
                    onChange={(newText) => changeFancyValue(newText, newIndex)}
                />
            </div>
        </div>
    )
);

const SortableList = SortableContainer(
    ({ items, removeItem, edit, changeFancyValue }) => {
        return (
            <div>
                {" "}
                {items.map((value, index) => (
                    <SortableItem
                        key={`item-${value}`}
                        index={index}
                        newIndex={index}
                        value={value}
                        removeItem={removeItem}
                        edit={edit}
                        changeFancyValue={changeFancyValue}
                        items={items}
                    />
                ))}{" "}
            </div>
        );
    }
);

class edit extends Component {

    constructor() {
        super(...arguments);
        this.renderFancyText = this.renderFancyText.bind(this);
        this.getPreviewSize = this.getPreviewSize.bind(this);
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

        // Assigning id in the attribute.
        this.props.setAttributes({ block_id: this.props.clientId.substr(0, 6) });

        this.props.setAttributes({ classMigrate: true });

        // Pushing Style tag for this block css.


        this.renderFancyText();
    }

    componentDidUpdate() {
        const { effect } = this.props.attributes;

        if (effect == "typing" && this.typed != undefined) {
            this.typed.destroy();
        }
        this.renderFancyText();
    }

    renderFancyText() {
        const {
            repeaterFancyText,
            loop,
            cursorShow,
            cursorMark,
            typeSpeed,
            backSpeed,
            startdelay,
            backdelay,
            effect,
        } = this.props.attributes;

        if (!repeaterFancyText) return null;

        let txt = repeaterFancyText.map((item) => {
            return item.title;
        });

        if (effect === "typing") {
            const options = {
                strings: txt,
                typeSpeed: typeSpeed,
                backSpeed: backSpeed,
                backDelay: backdelay,
                startDelay: startdelay,
                loop: loop,
                showCursor: cursorShow,
                cursorChar: cursorMark,
            };
            this.typed = new Typed(this.el, options);
        }
    }

    componentWillUnmount() {
        const { effect } = this.props.attributes;
        // Make sure to destroy Typed instance on unmounting
        // to prevent memory leaks
        effect === "typing" ? this.typed.destroy() : "";
    }

    render() {
        const { attributes, setAttributes, isSelected, className } = this.props;

        const {
            block_id,
            classMigrate,
            align,
            prefix,
            suffix,
            repeaterFancyText,
            effect,
            cursorColor,
            loop,
            cursorShow,
            cursorMark,
            typeSpeed,
            backdelay,
            startdelay,
            backSpeed,
            animationSpeed,
            pauseTime,
            hoverPause,
            fancyalign,
            hideDesktop,
            hideTablet,
            hideMobile,
            fancyStyles,
            PreStyles
        } = attributes;

        const ALIGNS = ["left", "center", "right"];
        const EFFECT = [
            {
                label: __("Typing"),
                value: "typing",
            },
            {
                label: __("Slide"),
                value: "slide",
            },
        ];



        const onResetClickfancyTextTypo = () => {
            setAttributes({
                fancyTextWeight: 600,
                fancyTextfontSizeUnit: "px",
                fancyTextfontSize: "20",
                fancyTextfontSizeMobile: "20",
                fancyTextfontSizeTablet: "20",
                fancyTextStyle: "normal",
                fancyTextLetter: "0",
                fancyTextUpper: false,
            });
        };

        const onResetClickTextTypo = () => {
            setAttributes({
                textWeight: 600,
                textfontSizeUnit: "px",
                textfontSize: "20",
                textfontSizeMobile: "20",
                textfontSizeTablet: "20",
                textStyle: "normal",
                textLetter: "0",
                textUpper: false,
            });
        };

        const onResetClickLabelTextShadow = () => {
            setAttributes({
                shadowColor: "",
                shadowBlur: "0",
                shadowHorizontal: "0",
                shadowVertical: "0",
            });
        };

        const changeFancyValue = (newText, newIndex) => {
            setAttributes({
                repeaterFancyText: onRepeaterChange("title", newText, newIndex),
            });
        };

        const onSortEndSingle = ({ oldIndex, newIndex }) => {
            let arrayItem = repeaterFancyText.map((cont) => cont);

            const sortedArray = arrayMove(arrayItem, oldIndex, newIndex);

            setAttributes({
                repeaterFancyText: sortedArray,
            });
        };

        const shouldCancelStart = (e) => {
            // Prevent sorting from being triggered if target is input or button
            if (
                ["button", "div", "input", "textarea", "i"].indexOf(
                    e.target.tagName.toLowerCase()
                ) !== -1
            ) {
                return true; // Return true to cancel sorting
            }
        };

        const onRepeaterChange = (attr, value, index) => {

            return repeaterFancyText.map(function (item, currIndex) {
                if (index == currIndex) {
                    item[attr] = value;
                }
                return item;
            });
        };

        const edit = (index) => {
            return repeaterFancyText.map((item, i) => {
                if (index == i) {
                    setAttributes({
                        repeaterFancyText: onRepeaterChange(
                            "edit",
                            item.edit ? false : true,
                            index
                        ),
                    });
                } else {
                    setAttributes({
                        repeaterFancyText: onRepeaterChange("edit", false, i),
                    });
                }
            });
        };

        const removeItem = (index, item) => {
            let array = repeaterFancyText
                .map((cont, currIndex) => {
                    return cont;
                })
                .filter((f, i) => i != index);
            setAttributes({
                repeaterFancyText: array,
            });
        };

        const addNewFancyText = () => {
            setAttributes({
                repeaterFancyText: repeaterFancyText.concat([
                    {
                        title: __("Title"),
                        edit: true,
                    },
                ]),
            });
        };
        const saveFancyStyle = (value) => {
            const newUpdate = fancyStyles.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({
                fancyStyles: newUpdate,
            });
        }
        const savePrefixStyle = (value) => {
            const newUpdate = PreStyles.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({
                PreStyles: newUpdate,
            });
        }

        const fancyTextFontSize = this.getPreviewSize(this.props.deviceType, fancyStyles[0].fancyTextfontSize, fancyStyles[0].fancyTextfontSizeTablet, fancyStyles[0].fancyTextfontSizeMobile);;
        const PrefixFontSize = this.getPreviewSize(this.props.deviceType, PreStyles[0].textfontSize, PreStyles[0].textfontSizeTablet, PreStyles[0].textfontSizeMobile);

        const renderCss = (<style>
            { `
            .premium-fancy-text-title {
            font-size:${fancyTextFontSize}${fancyStyles[0].fancyTextfontSizeUnit};
            color: ${fancyStyles[0].fancyTextColor};
            font-weight: ${fancyStyles[0].fancyTextWeight};
            letter-spacing: ${fancyStyles[0].fancyTextLetter}px;
            text-transform: ${fancyStyles[0].fancyTextUpper ? "uppercase" : "none"};
            font-style: ${fancyStyles[0].fancyTextStyle};
            background-color: ${fancyStyles[0].fancyTextBGColor
                    ? hexToRgba(fancyStyles[0].fancyTextBGColor, fancyStyles[0].fancyTextBGOpacity)
                    : "transparent"};
            text-shadow: ${fancyStyles[0].shadowHorizontal}px ${fancyStyles[0].shadowVertical}px ${fancyStyles[0].shadowBlur}px ${fancyStyles[0].shadowColor};
        }
        .premium-fancy-text-title-slide {
            font-size:${fancyTextFontSize}${fancyStyles[0].fancyTextfontSizeUnit};
            color: ${fancyStyles[0].fancyTextColor},
            font-weight: ${fancyStyles[0].fancyTextWeight};
            letter-spacing: ${fancyStyles[0].fancyTextLetter} + "px";
            text-transform: ${fancyStyles[0].fancyTextUpper ? "uppercase" : "none"};
            font-style: ${fancyStyles[0].fancyTextStyle};
            background-color: ${fancyStyles[0].fancyTextBGColor
                    ? hexToRgba(fancyStyles[0].fancyTextBGColor, fancyStyles[0].fancyTextBGOpacity)
                    : "transparent"};
            text-shadow: ${fancyStyles[0].shadowHorizontal}px ${fancyStyles[0].shadowVertical}px ${fancyStyles[0].shadowBlur}px ${fancyStyles[0].shadowColor};
        }
         .typed-cursor {
            color: ${cursorColor};
        }
         .premium-fancy-text-prefix-text {
            font-size:${PrefixFontSize}${PreStyles[0].textfontSizeUnit};
            color: ${PreStyles[0].textColor};
            font-weight: ${PreStyles[0].textWeight};
            letter-spacing: ${PreStyles[0].textLetter}px;
            text-transform: ${PreStyles[0].textUpper ? "uppercase" : "none"};
            font-style: ${PreStyles[0].textStyle};
            background-color: ${PreStyles[0].textBGColor
                    ? hexToRgba(PreStyles[0].textBGColor, PreStyles[0].textBGOpacity)
                    : "transparent"};
        }
         .premium-fancy-text-suffix-text{
            font-size:${PrefixFontSize}${PreStyles[0].textfontSizeUnit};
            color: ${PreStyles[0].textColor};
            font-weight: ${PreStyles[0].textWeight};
            letter-spacing: ${PreStyles[0].textLetter}px;
            text-transform: ${PreStyles[0].textUpper ? "uppercase" : "none"};
            font-style: ${PreStyles[0].textStyle};
            background-color: ${PreStyles[0].textBGColor
                    ? hexToRgba(PreStyles[0].textBGColor, PreStyles[0].textBGOpacity)
                    : "transparent"};
        }
            `}
        </style>)

        return [
            renderCss,
            isSelected && [
                < BlockControls >
                    <AlignmentToolbar
                        value={align}
                        onChange={value =>
                            setAttributes({ align: value })
                        }
                    />
                </BlockControls >
            ],

            isSelected && (
                <InspectorControls>
                    <PanelBody
                        title={__("General Settings")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <TextControl
                            label={__("Prefix Text")}
                            value={prefix}
                            onChange={(newText) =>
                                setAttributes({ prefix: newText })
                            }
                        />
                        <Fragment>
                            <div className="premium-fancy-text-control-content">
                                <label>
                                    <span className="premium-fancy-text-control-title">
                                        {" "}
                                        Fancy Strings{" "}
                                    </span>
                                </label>
                                <SortableList
                                    items={repeaterFancyText}
                                    onSortEnd={(oldIndex, newIndex) => onSortEndSingle(oldIndex, newIndex)}
                                    removeItem={(value) => removeItem(value)}
                                    edit={(value) => edit(value)}
                                    shouldCancelStart={shouldCancelStart}
                                    changeFancyValue={changeFancyValue}
                                    helperClass="premium-fancy-text__sortableHelper"
                                />
                                <div className="premium-repeater-btn__wrap">
                                    <button
                                        className={"premium-repeater-btn"}
                                        onClick={() => addNewFancyText()}
                                    >
                                        <i className="dashicons dashicons-plus premium-repeater__icon" />
                                        <span>{__('Add New Item')}</span>
                                    </button>
                                </div>
                            </div>
                            <br />
                        </Fragment>
                        <TextControl
                            label={__("Suffix Text")}
                            value={suffix}
                            onChange={(newText) =>
                                setAttributes({ suffix: newText })
                            }
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Advanced Settings")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <SelectControl
                            label={__("Effect")}
                            options={EFFECT}
                            value={effect}
                            onChange={(newValue) =>
                                setAttributes({ effect: newValue })
                            }
                        />
                        {"typing" === effect ? (
                            <Fragment>
                                <TextControl
                                    label={__("Type Speed")}
                                    type="Number"
                                    value={typeSpeed}
                                    onChange={(newValue) =>
                                        setAttributes({
                                            typeSpeed: parseInt(newValue),
                                        })
                                    }
                                    help={__('Set typing effect speed in milliseconds.')}
                                />
                                <TextControl
                                    label={__("Back Speed")}
                                    type="Number"
                                    value={backSpeed}
                                    onChange={(newValue) =>
                                        setAttributes({
                                            backSpeed: parseInt(newValue),
                                        })
                                    }
                                    help={__('Set a speed for backspace effect in milliseconds.')}
                                />
                                <TextControl
                                    label={__("Start Delay")}
                                    type="Number"
                                    value={startdelay}
                                    onChange={(newValue) =>
                                        setAttributes({
                                            startdelay: parseInt(newValue),
                                        })
                                    }
                                    help={__('If you set it on 5000 milliseconds, the first word/string will appear after 5 seconds.')}
                                />
                                <TextControl
                                    label={__("Back Delay")}
                                    type="Number"
                                    value={backdelay}
                                    onChange={(newValue) =>
                                        setAttributes({
                                            backdelay: parseInt(newValue),
                                        })
                                    }
                                    help={__(
                                        "If you set it on 5000 milliseconds, the word/string will remain visible for 5 seconds before backspace effect."
                                    )}
                                />
                                <ToggleControl
                                    label={__("Loop")}
                                    checked={loop}
                                    onChange={(newCheck) =>
                                        setAttributes({ loop: newCheck })
                                    }
                                />
                                <ToggleControl
                                    label={__("Show Cursor")}
                                    checked={cursorShow}
                                    onChange={(newCheck) =>
                                        setAttributes({ cursorShow: newCheck })
                                    }
                                />
                                {cursorShow && (
                                    <TextControl
                                        label={__("Cursor Mark")}
                                        value={cursorMark}
                                        onChange={(newCheck) =>
                                            setAttributes({
                                                cursorMark: newCheck,
                                            })
                                        }
                                    />
                                )}
                            </Fragment>
                        ) : (
                            <Fragment>
                                <p className="premium-notice">
                                    Please note that Slide effect works only on
                                    frontend
                                </p>
                                <TextControl
                                    label={__("Animation Speed")}
                                    value={animationSpeed}
                                    type="Number"
                                    onChange={(newValue) =>
                                        setAttributes({
                                            animationSpeed: parseInt(newValue),
                                        })
                                    }
                                    help={__(
                                        "Set a duration value in milliseconds for slide effect."
                                    )}
                                />
                                <TextControl
                                    label={__("Pause Time")}
                                    value={pauseTime}
                                    type="Number"
                                    onChange={(newValue) =>
                                        setAttributes({
                                            pauseTime: parseInt(newValue),
                                        })
                                    }
                                    help={__(
                                        "How long should the word/string stay visible? Set a value in milliseconds."
                                    )}
                                />
                                <ToggleControl
                                    label={__("Pause on Hover")}
                                    checked={hoverPause}
                                    onChange={(newCheck) =>
                                        setAttributes({ hoverPause: newCheck })
                                    }
                                    help={__(
                                        "If you enabled this option, the slide will be paused when mouseover."
                                    )}
                                />
                                <p>{__("Fancy Strings Alignment")}</p>
                                <Toolbar
                                    controls={ALIGNS.map((contentAlign) => ({
                                        icon: "editor-align" + contentAlign,
                                        isActive: contentAlign === fancyalign,
                                        onClick: () =>
                                            setAttributes({
                                                fancyalign: contentAlign,
                                            }),
                                    }))}
                                />
                            </Fragment>
                        )}
                    </PanelBody>
                    <PanelBody
                        title={__("Fancy Text Style")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <p>{__("Color")}</p>
                        <ColorPalette
                            value={fancyStyles[0].fancyTextColor}
                            onChange={(newValue) =>
                                saveFancyStyle({
                                    fancyTextColor: newValue,
                                })
                            }
                            allowReset={true}
                        />
                        <PremiumTypo
                            components={[
                                "responsiveSize",
                                "weight",
                                "style",
                                "upper",
                                "spacing",
                            ]}
                            setAttributes={saveFancyStyle}
                            fontSizeType={{
                                value: fancyStyles[0].fancyTextfontSizeUnit,
                                label: __("fancyTextfontSizeUnit"),
                            }}
                            fontSize={{
                                value: fancyStyles[0].fancyTextfontSize,
                                label: __("fancyTextfontSize"),
                            }}
                            fontSizeMobile={{
                                value: fancyStyles[0].fancyTextfontSizeMobile,
                                label: __("fancyTextfontSizeMobile"),
                            }}
                            fontSizeTablet={{
                                value: fancyStyles[0].fancyTextfontSizeTablet,
                                label: __("fancyTextfontSizeTablet"),
                            }}
                            weight={fancyStyles[0].fancyTextWeight}
                            style={fancyStyles[0].fancyTextStyle}
                            spacing={fancyStyles[0].fancyTextLetter}
                            upper={fancyStyles[0].fancyTextUpper}
                            onChangeWeight={newWeight =>
                                saveFancyStyle({
                                    fancyTextWeight: newWeight || 500,
                                })
                            }
                            onChangeStyle={newStyle =>
                                saveFancyStyle({ fancyTextStyle: newStyle })
                            }
                            onChangeSpacing={newValue =>
                                saveFancyStyle({ fancyTextLetter: newValue })
                            }
                            onChangeUpper={check =>
                                saveFancyStyle({ fancyTextUpper: check })
                            }
                            onResetClick={onResetClickfancyTextTypo}
                        />
                        <p>{__("Background Color")}</p>
                        <PremiumBackground
                            type="color"
                            colorValue={fancyStyles[0].fancyTextBGColor}
                            onChangeColor={newvalue =>
                                saveFancyStyle({ fancyTextBGColor: newvalue })
                            }
                            opacityValue={fancyStyles[0].fancyTextBGOpacity}
                            onChangeOpacity={value =>
                                saveFancyStyle({ fancyTextBGOpacity: value })
                            }
                        />
                        <PremiumTextShadow
                            color={fancyStyles[0].shadowColor}
                            blur={fancyStyles[0].shadowBlur}
                            horizontal={fancyStyles[0].shadowHorizontal}
                            vertical={fancyStyles[0].shadowVertical}
                            onChangeColor={(newColor) =>
                                saveFancyStyle({ shadowColor: newColor.hex })
                            }
                            onChangeBlur={(newBlur) =>
                                saveFancyStyle({ shadowBlur: newBlur })
                            }
                            onChangehHorizontal={(newValue) =>
                                saveFancyStyle({ shadowHorizontal: newValue })
                            }
                            onChangeVertical={(newValue) =>
                                saveFancyStyle({ shadowVertical: newValue })
                            }
                            onResetClick={onResetClickLabelTextShadow}
                        />
                        {effect == "typing" && cursorShow && (
                            <Fragment>
                                <p>{__("Cursor Color")}</p>
                                <ColorPalette
                                    value={fancyStyles[0].cursorColor}
                                    onChange={(newValue) =>
                                        saveFancyStyle({
                                            cursorColor: newValue,
                                        })
                                    }
                                    allowReset={true}
                                />
                            </Fragment>
                        )}
                    </PanelBody>
                    <PanelBody
                        title={__("Prefix & Suffix Style")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <p>{__("Color")}</p>
                        <ColorPalette
                            value={PreStyles[0].textColor}
                            onChange={(newValue) =>
                                savePrefixStyle({
                                    textColor: newValue,
                                })
                            }
                            allowReset={true}
                        />
                        <PremiumTypo
                            components={[
                                "responsiveSize",
                                "weight",
                                "style",
                                "upper",
                                "spacing",
                            ]}
                            setAttributes={savePrefixStyle}
                            fontSizeType={{
                                value: PreStyles[0].textfontSizeUnit,
                                label: __("textfontSizeUnit"),
                            }}
                            fontSize={{
                                value: PreStyles[0].textfontSize,
                                label: __("textfontSize"),
                            }}
                            fontSizeMobile={{
                                value: PreStyles[0].textfontSizeMobile,
                                label: __("textfontSizeMobile"),
                            }}
                            fontSizeTablet={{
                                value: PreStyles[0].textfontSizeTablet,
                                label: __("textfontSizeTablet"),
                            }}
                            weight={PreStyles[0].textWeight}
                            style={PreStyles[0].textStyle}
                            spacing={PreStyles[0].textLetter}
                            upper={PreStyles[0].textUpper}
                            onChangeWeight={(newWeight) =>
                                savePrefixStyle({ textWeight: newWeight || 500 })
                            }
                            onChangeStyle={(newStyle) =>
                                savePrefixStyle({ textStyle: newStyle })
                            }
                            onChangeSpacing={(newValue) =>
                                savePrefixStyle({ textLetter: newValue })
                            }
                            onChangeUpper={(check) =>
                                savePrefixStyle({ textUpper: check })
                            }
                            onResetClick={onResetClickTextTypo}
                        />
                        <p>{__("Background Color")}</p>
                        <PremiumBackground
                            type="color"
                            colorValue={PreStyles[0].textBGColor}
                            onChangeColor={newvalue =>
                                savePrefixStyle({ textBGColor: newvalue })
                            }
                            opacityValue={PreStyles[0].textBGOpacity}
                            onChangeOpacity={value =>
                                savePrefixStyle
                                    ({ textBGOpacity: value })
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
                </InspectorControls>
            ),
            <div
                className={classnames(className, `premium-block-${block_id} ${hideDesktop} ${hideTablet} ${hideMobile}`)}
                style={{
                    textAlign: align,
                }}
            >
                {effect === "typing" ? (
                    <div
                        id={`premium-fancy-text-${block_id}`}
                        className={`premium-fancy-text`}
                        style={{
                            textAlign: align,
                        }}
                        data-effect={`${effect}`}
                        data-strings={`${repeaterFancyText.map(
                            (item, index) => {
                                return item.title;
                            }
                        )}`}
                        data-typespeed={`${typeSpeed}`}
                        data-backspeed={`${backSpeed}`}
                        data-startdelay={`${startdelay}`}
                        data-backdelay={`${backdelay}`}
                        data-loop={`${loop}`}
                        data-cursorshow={`${cursorShow}`}
                        data-cursormark={`${cursorMark}`}
                    >
                        <span className={`premium-fancy-text-prefix-text`}>
                            {prefix}{" "}
                        </span>
                        <span
                            className={`premium-fancy-text-title`}
                            ref={(el) => {
                                this.el = el;
                            }}
                        >
                            {" "}
                        </span>
                        <span className={`premium-fancy-text-suffix-text`}>
                            {" "}
                            {suffix}
                        </span>
                    </div>
                ) : (
                    <div
                        className={`premium-fancy-text premium-fancy-slide`}
                        style={{
                            textAlign: align,
                        }}
                        data-effect={`${effect}`}
                        data-strings={`${repeaterFancyText.map(
                            (item, index) => {
                                return item.title;
                            }
                        )}`}
                        data-animationspeed={`${animationSpeed}`}
                        data-pausetime={`${pauseTime}`}
                        data-hoverpause={`${hoverPause}`}
                    >
                        <span className={`premium-fancy-text-prefix-text`}>
                            {prefix}{" "}
                        </span>
                        <div
                            className={`premium-fancy-text-title-slide`}
                            style={{
                                textAlign: fancyalign,
                            }}
                        >
                            <ul
                                className={`premium-fancy-text-title-slide-list`}
                            >
                                {repeaterFancyText.map((item, index) => {
                                    return <li>{item.title}</li>;
                                })}
                            </ul>
                        </div>
                        <span className={`premium-fancy-text-suffix-text`}>
                            {" "}
                            {suffix}
                        </span>
                    </div>
                )}
            </div>,
        ];
    }
}

export default withSelect((select, props) => {
    const { __experimentalGetPreviewDeviceType = null } = select('core/edit-post');
    let deviceType = __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;

    return {
        deviceType: deviceType
    }
})(edit)