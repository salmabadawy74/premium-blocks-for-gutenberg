import React from 'react'
import classnames from "classnames";

const { InspectorControls, ColorPalette } = wp.blockEditor;
const { PanelBody, SelectControl, RangeControl, ToggleControl, TextControl } = wp.components;
const { __ } = wp.i18n;
import PremiumTypo from "../../components/premium-typo";
import PremiumBorder from "../../components/premium-border";
import FONTS from "../../components/premium-fonts";
const { withSelect } = wp.data

function edit(props) {
    const { isSelected, setAttributes, clientId, className, attributes, } = props
    const {
        block_id,
        api,
        list_id,
        successMessage,
        errorMessage,
        columnGap,
        rowGap,
        eMail,
        inputStyles,
        btnStyles,
        messageStyle,
    } = attributes;
    const COLUMNS = [

        {
            value: "20",
            label: "20%"
        },
        {
            value: "25",
            label: "25%"
        },
        {
            value: "30",
            label: "30%"
        },
        {
            value: "33",
            label: "33%"
        },
        {
            value: "40",
            label: "40%"
        },
        {
            value: "50",
            label: "50%"
        },
        {
            value: "60",
            label: "60%"
        },
        {
            value: "66",
            label: "66%"
        },
        {
            value: "70",
            label: "70%"
        },
        {
            value: "75",
            label: '75%'
        },
        {
            value: "80",
            label: "80%"
        },

        {
            value: "100",
            label: "100%"
        }
    ];

    const saveInputStyle = (value) => {
        const newUpdate = inputStyles.map((item, index) => {
            if (0 === index) {
                item = { ...item, ...value };
            }
            return item;
        });
        setAttributes({
            inputStyles: newUpdate,
        });
    }
    const saveButtonStyle = value => {
        const newUpdate = btnStyles.map((item, index) => {
            if (0 === index) {
                item = { ...item, ...value };
            }
            return item;
        });
        setAttributes({
            btnStyles: newUpdate,
        });
    }
    const saveMessageStyle = value => {
        const newUpdate = messageStyle.map((item, index) => {
            if (0 === index) {
                item = { ...item, ...value };
            }
            return item;
        });
        setAttributes({
            messageStyle: newUpdate,
        });
    }
    return [
        isSelected && <InspectorControls key="inspector">
            <PanelBody
                title={__("General")}
                className="premium-panel-body"
                initialOpen={true}
            >
                <TextControl
                    label={__(`Mailchimp Api Key`)}
                    value={api}
                    onChange={newURL => setAttributes({ api: newURL })}
                />
                <TextControl
                    label={__(`List Id`)}
                    value={list_id}
                    onChange={newURL => setAttributes({ list_id: newURL })}
                />
                <TextControl
                    label={__(`Message Success`)}
                    value={successMessage}
                    onChange={newURL => setAttributes({ successMessage: newURL })}
                />
                <TextControl
                    label={__(`Message Error`)}
                    value={errorMessage}
                    onChange={newURL => setAttributes({ errorMessage: newURL })}
                />
                <RangeControl
                    label={__("Column Gap")}
                    value={columnGap}
                    onChange={newValue => setAttributes({ columnGap: newValue })}

                />
                <RangeControl
                    label={__("Row Gap")}
                    value={rowGap}
                    onChange={newValue => setAttributes({ rowGap: newValue })}
                />
            </PanelBody>
            <PanelBody
                title={__("Input Style")}
                className="premium-panel-body"
                initialOpen={false}
            >
                <ToggleControl
                    label={__(`Label`)}
                    checked={inputStyles[0].showLabel}
                    onChange={value => saveInputStyle({ showLabel: value })}
                />
                <TextControl
                    label={__(`Label`)}
                    value={inputStyles[0].label}
                    onChange={newURL => saveInputStyle({ url: newURL })}
                />
                <TextControl
                    label={__(`Placeholder`)}
                    value={inputStyles[0].placeholder}
                    onChange={newURL => saveInputStyle({ placeholder: newURL })}
                />
                <ToggleControl
                    label={__(`Required`)}
                    checked={inputStyles[0].required}
                    onChange={value => saveInputStyle({ required: value })}
                />
                <SelectControl
                    label={__(`Column Width`)}
                    options={COLUMNS}
                    value={inputStyles[0].inputColumnWidth}
                    onChange={value => saveInputStyle({ inputColumnWidth: value })}
                />
                <p>{__("Text Color")}</p>
                <ColorPalette
                    value={inputStyles[0].textColor}
                    onChange={newValue => saveInputStyle({ textColor: newValue })}
                />
                <SelectControl
                    label={__("Font Family")}
                    value={inputStyles[0].textFontFamily}
                    options={FONTS}
                    onChange={(value) => saveInputStyle({ textFontFamily: value })}
                />
                <PremiumTypo
                    components={["responsiveSize", "weight", "line", "style", "upper", "spacing"]}
                    setAttributes={saveInputStyle}
                    fontSizeType={{
                        value: inputStyles[0].textSizeUnit,
                        label: __("textSizeUnit"),
                    }}
                    fontSize={{
                        value: inputStyles[0].textSize,
                        label: __("textSize"),
                    }}
                    fontSizeMobile={{
                        value: inputStyles[0].textSizeMobile,
                        label: __("textSizeMobile"),
                    }}
                    fontSizeTablet={{
                        value: inputStyles[0].textSizeTablet,
                        label: __("textSizeTablet"),
                    }}
                    weight={inputStyles[0].textWeight}
                    style={inputStyles[0].textStyle}
                    spacing={inputStyles[0].textLetter}
                    upper={inputStyles[0].textUpper}
                    line={inputStyles[0].textLine}
                    onChangeSize={newSize => saveInputStyle({ textSize: newSize })}
                    onChangeSizeTablet={newSize => saveInputStyle({ textSizeTablet: newSize })}
                    onChangeSizeMobile={newSize => saveInputStyle({ textSizeMobile: newSize })}
                    onChangeWeight={newWeight =>
                        saveInputStyle({ textWeight: newWeight })
                    }
                    onChangeLine={newValue => saveInputStyle({ textLine: newValue })}
                    onChangeSize={newSize => saveInputStyle({ textSize: newSize })}
                    onChangeStyle={newStyle => saveInputStyle({ textStyle: newStyle })}
                    onChangeSpacing={newValue =>
                        saveInputStyle({ textLetter: newValue })
                    }
                    onChangeUpper={check => saveInputStyle({ textUpper: check })}
                />
                <p>{__(`Background Color`)}</p>
                <ColorPalette
                    value={inputStyles[0].textBackColor}
                    onChange={(newValue) => saveInputStyle({ textBackColor: newValue })}
                />

                <PremiumBorder
                    borderType={inputStyles[0].textBorderType}
                    top={inputStyles[0].textBorderTop}
                    right={inputStyles[0].textBorderRight}
                    bottom={inputStyles[0].textBorderBottom}
                    left={inputStyles[0].textBorderLeft}
                    borderColor={inputStyles[0].textBorderColor}
                    borderRadius={inputStyles[0].textBorderRadius}
                    onChangeType={(newType) => saveInputStyle({ textBorderType: newType })}
                    onChangeWidth={({ top, right, bottom, left }) =>
                        saveInputStyle({
                            textBorderTop: top,
                            textBorderRight: right,
                            textBorderBottom: bottom,
                            textBorderLeft: left,
                        })
                    }
                    onChangeColor={(colorValue) =>
                        saveInputStyle({ textBorderColor: colorValue.hex })
                    }
                    onChangeRadius={(newRadius) =>
                        saveInputStyle({ textBorderRadius: newRadius })
                    }
                />
            </PanelBody>
            <PanelBody
                title={__("Button")}
                className="premium-panel-body"
                initialOpen={false}
            >
                <p>{__("Text Color")}</p>
                <ColorPalette
                    value={btnStyles[0].btnColor}
                    onChange={newValue => saveButtonStyle({ btnColor: newValue })}
                />
                <p>{__(`Background Color`)}</p>
                <ColorPalette
                    value={btnStyles[0].btnBackColor}
                    onChange={(newValue) => saveButtonStyle({ btnBackColor: newValue })}
                />
                <SelectControl
                    label={__("Font Family")}
                    value={btnStyles[0].btnFontFamily}
                    options={FONTS}
                    onChange={(value) => saveButtonStyle({ btnFontFamily: value })}
                />
                <PremiumTypo
                    components={["responsiveSize", "weight", "line", "style", "upper", "spacing"]}
                    setAttributes={saveButtonStyle}
                    fontSizeType={{
                        value: btnStyles[0].btnSizeUnit,
                        label: __("textSizeUnit"),
                    }}
                    fontSize={{
                        value: btnStyles[0].btnSize,
                        label: __("textSize"),
                    }}
                    fontSizeMobile={{
                        value: btnStyles[0].btnSizeMobile,
                        label: __("textSizeMobile"),
                    }}
                    fontSizeTablet={{
                        value: btnStyles[0].btnSizeTablet,
                        label: __("textSizeTablet"),
                    }}
                    weight={btnStyles[0].btnWeight}
                    style={btnStyles[0].btnStyle}
                    spacing={btnStyles[0].btnLetter}
                    upper={btnStyles[0].btnUpper}
                    line={btnStyles[0].btnLine}
                    onChangeSize={newSize => saveButtonStyle({ btnSize: newSize })}
                    onChangeSizeTablet={newSize => saveButtonStyle({ btnSizeTablet: newSize })}
                    onChangeSizeMobile={newSize => saveButtonStyle({ btnSizeMobile: newSize })}
                    onChangeWeight={newWeight =>
                        saveButtonStyle({ btnWeight: newWeight })
                    }
                    onChangeLine={newValue => saveButtonStyle({ btnLine: newValue })}
                    onChangeSize={newSize => saveButtonStyle({ btnSize: newSize })}
                    onChangeStyle={newStyle => saveButtonStyle({ btnStyle: newStyle })}
                    onChangeSpacing={newValue =>
                        saveButtonStyle({ btnLetter: newValue })
                    }
                    onChangeUpper={check => saveButtonStyle({ btnUpper: check })}
                />
                <PremiumBorder
                    borderType={btnStyles[0].btnBorderType}
                    top={btnStyles[0].btnBorderTop}
                    right={btnStyles[0].btnBorderRight}
                    bottom={btnStyles[0].btnBorderBottom}
                    left={btnStyles[0].btnBorderLeft}
                    borderColor={btnStyles[0].btnBorderColor}
                    borderRadius={btnStyles[0].btnBorderRadius}
                    onChangeType={(newType) => saveButtonStyle({ borderType: newType })}
                    onChangeWidth={({ top, right, bottom, left }) =>
                        saveButtonStyle({
                            btnBorderTop: top,
                            btnBorderRight: right,
                            btnBorderBottom: bottom,
                            btnBorderLeft: left,
                        })
                    }
                    onChangeColor={(colorValue) =>
                        saveButtonStyle({ btnBorderColor: colorValue.hex })
                    }
                    onChangeRadius={(newRadius) =>
                        saveButtonStyle({ btnBorderRadius: newRadius })
                    }
                />

            </PanelBody>
            <PanelBody
                title={__("Message Style")}
                className="premium-panel-body"
                initialOpen={false}
            >
                <SelectControl
                    label={__("Font Family")}
                    value={messageStyle[0].msgFontFamily}
                    options={FONTS}
                    onChange={(value) => saveMessageStyle({ msgFontFamily: value })}
                />
                <PremiumTypo
                    components={["responsiveSize", "weight", "line", "style", "upper", "spacing"]}
                    setAttributes={saveMessageStyle}
                    fontSizeType={{
                        value: messageStyle[0].msgSizeUnit,
                        label: __("textSizeUnit"),
                    }}
                    fontSize={{
                        value: messageStyle[0].msgSize,
                        label: __("textSize"),
                    }}
                    fontSizeMobile={{
                        value: messageStyle[0].msgSizeMobile,
                        label: __("textSizeMobile"),
                    }}
                    fontSizeTablet={{
                        value: messageStyle[0].msgSizeTablet,
                        label: __("textSizeTablet"),
                    }}
                    weight={messageStyle[0].msgWeight}
                    style={messageStyle[0].msgStyle}
                    spacing={messageStyle[0].msgLetter}
                    upper={messageStyle[0].msgUpper}
                    line={messageStyle[0].msgLine}
                    onChangeSize={newSize => saveMessageStyle({ msgSize: newSize })}
                    onChangeSizeTablet={newSize => saveMessageStyle({ msgSizeTablet: newSize })}
                    onChangeSizeMobile={newSize => saveMessageStyle({ msgSizeMobile: newSize })}
                    onChangeWeight={newWeight =>
                        saveMessageStyle({ msgWeight: newWeight })
                    }
                    onChangeLine={newValue => saveMessageStyle({ msgLine: newValue })}
                    onChangeSize={newSize => saveMessageStyle({ msgSize: newSize })}
                    onChangeStyle={newStyle => saveMessageStyle({ msgStyle: newStyle })}
                    onChangeSpacing={newValue =>
                        saveMessageStyle({ msgLetter: newValue })
                    }
                    onChangeUpper={check => saveMessageStyle({ msgUpper: check })}
                />
                <p>{__("Message Success Color")}</p>
                <ColorPalette
                    value={messageStyle[0].msgSuccessColor}
                    onChange={newValue => setAttributes({ msgSuccessColor: newValue })}
                />
                <p>{__(`Message Error Color`)}</p>
                <ColorPalette
                    value={messageStyle[0].msgErrorColor}
                    onChange={(newValue) => setAttributes({ msgErrorColor: newValue })}
                />
            </PanelBody>
        </InspectorControls>,
        <form onSubmit={() => {
            props.handleClick()
        }}>
            <div
                id={`premium-newsLetter-${block_id}`}
                className={classnames(className, "premium-newsletter__wrapper")}>
                <div className={classnames("premium-newsletter-input__wrapper", `col-${inputStyles[0].inputColumnWidth}`)}
                    style={{
                        paddingRight: `calc(${columnGap}px / 2)`,
                        paddingLeft: `calc(${columnGap}px / 2)`,
                        marginBottom: `${rowGap}px`,

                    }}
                >
                    {inputStyles[0].showLabel ? <label for="form-field-email" className="premium-newsletter__label" >{inputStyles[0].label}</label>
                        : null}
                    <input className={`premium-newsletter-input`} type="email" value={eMail} name="form_fields[email]" id="pa_news_email" className="" onChange={({ target: { value } }) => setAttributes({ eMail: value })} placeholder={inputStyles[0].placeholder} aria-required="true" style={{
                        color: inputStyles[0].textColor,
                        fontFamily: inputStyles[0].textFontFamily,
                        fontSize: inputStyles[0].textSize,
                        fontWeight: inputStyles[0].textWeight,
                        fontStyle: inputStyles[0].textStyle,
                        letterSpacing: inputStyles[0].textLetter,
                        textTransform: inputStyles[0].textUpper ? "uppercase" : "none",
                        lineHeight: inputStyles[0].textLine,
                        backgroundColor: inputStyles[0].textBackColor,
                        borderStyle: inputStyles[0].textBorderType,
                        borderColor: inputStyles[0].textBorderColor,
                        borderRadius: inputStyles[0].textBorderRadius,
                    }} />
                </div>
                <div className="premium-newsletter-button__wrapper" style={{
                    paddingRight: `calc(${columnGap}px / 2)`,
                    paddingLeft: `calc(${columnGap}px / 2)`,
                    marginBottom: `${rowGap}px`,

                }}>
                    <button type="submit" className="premium-newsletter-button-submit" id="submit-newsletter"
                        style={{
                            color: btnStyles[0].btnColor,
                            backgroundColor: btnStyles[0].btnBackColor,
                            fontFamily: btnStyles[0].btnFontFamily,
                            fontWeight: btnStyles[0].btnWeight,
                            fontStyle: btnStyles[0].btnStyle,
                            letterSpacing: btnStyles[0].btnLetter,
                            textTransform: btnStyles[0].btnUpper ? "uppercase" : "none",
                            lineHeight: btnStyles[0].btnLine,
                            borderStyle: btnStyles[0].btnBorderType,
                            borderColor: btnStyles[0].btnBorderColor,
                            borderRadius: btnStyles[0].btnBorderRadius,
                        }}
                        onClick={() => {
                            props.handleClick()
                        }}
                    >
                        <span className="">Submit</span>
                    </button>
                </div>
            </div >
        </form>, <div>{successMessage}</div>



    ]
}
export default withSelect((select, props) => {
    const {
        successMessage,
        errorMessage,
        inputStyles
    } = props.attributes;
    console.log(props.attributes)
    let data;
    const { setAttributes } = props;
    function handleClick() {
        jQuery.ajax({
            url: PremiumSettings.ajaxurl,
            data: {
                action: 'subscribe_newsletter',
                attributes: props.attributes,
                nonce: PremiumSettings.nonce,
            },

            type: "POST",
            success: function (data) {
                data = __('Thank you for adding Your Email')
                setAttributes({ successMessage: data })

            },
            error: function (err) {
                let error_data = __('you are Wrong')
                setAttributes({ successMessage: error_data })
            },
        });
    }
    return {
        handleClick: handleClick,
    };

})(edit);