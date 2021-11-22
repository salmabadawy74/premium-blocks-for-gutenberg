import React from "react";
import classnames from "classnames";
const { __ } = wp.i18n;
export function save(props) {
    const { isSelected, setAttributes, clientId, className, attributes } =
        props;
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
    return (
        <form className="kb-form" action="" method="post" >
            <div
                id={`premium-newsLetter-${block_id}`}
                className={classnames(className,
                    "premium-newsletter__wrapper",
                    `premium-newsletter-has-${btnStyles[0].buttonSize}`
                )}
            >
                <div
                    className={classnames(
                        "premium-newsletter-input__wrapper",
                        `col-${inputStyles[0].inputColumnWidth}`
                    )}
                    style={{
                        paddingRight: `calc(${columnGap}px / 2)`,
                        paddingLeft: `calc(${columnGap}px / 2)`,
                        marginBottom: `${rowGap}px`,
                    }}
                >
                    {inputStyles[0].showLabel ? (
                        <label
                            for="form-field-email"
                            className="premium-newsletter__label"
                        >
                            {inputStyles[0].label}
                        </label>
                    ) : null}
                    <input
                        className={`premium-newsletter-input`}
                        type="email"
                        value={eMail}
                        name="form_fields[email]"
                        id="pa_news_email"
                        className=""
                        placeholder={inputStyles[0].placeholder}
                        aria-required="true"
                        autoComplete="off"
                        readOnly
                        style={{
                            color: inputStyles[0].textColor,
                            fontFamily: inputStyles[0].textFontFamily,
                            fontSize: inputStyles[0].textSize,
                            fontWeight: inputStyles[0].textWeight,
                            fontStyle: inputStyles[0].textStyle,
                            letterSpacing: inputStyles[0].textLetter,
                            textTransform: inputStyles[0].textUpper
                                ? "uppercase"
                                : "none",
                            lineHeight: inputStyles[0].textLine,
                            backgroundColor: inputStyles[0].textBackColor,
                            borderStyle: inputStyles[0].textBorderType,
                            borderColor: inputStyles[0].textBorderColor,
                            borderRadius: inputStyles[0].textBorderRadius,
                        }}
                    />
                </div>
                <div
                    className={`premium-newsletter-button__wrapper col-${btnStyles[0].btnColumn}`}
                    style={{
                        paddingRight: `calc(${columnGap}px / 2)`,
                        paddingLeft: `calc(${columnGap}px / 2)`,
                        marginBottom: `${rowGap}px`,
                    }}
                >
                    <button
                        type="submit"
                        className="premium-newsletter-button-submit"
                        id="submit-newsletter"
                        style={{
                            paddingRight: `calc(${columnGap}px / 2)`,
                            paddingLeft: `calc(${columnGap}px / 2)`,
                            marginBottom: `${rowGap}px`,
                            color: btnStyles[0].btnColor,
                            backgroundColor: btnStyles[0].btnBackColor,
                            fontFamily: btnStyles[0].btnFontFamily,
                            fontWeight: btnStyles[0].btnWeight,
                            fontStyle: btnStyles[0].btnStyle,
                            letterSpacing: btnStyles[0].btnLetter,
                            textTransform: btnStyles[0].btnUpper
                                ? "uppercase"
                                : "none",
                            lineHeight: btnStyles[0].btnLine,
                            borderStyle: btnStyles[0].btnBorderType,
                            borderColor: btnStyles[0].btnBorderColor,
                            borderRadius: btnStyles[0].btnBorderRadius,
                        }}
                        onClick={(e) => {
                            e.preventDefault();
                        }}
                    >
                        <span className="">Submit</span>
                    </button>
                </div>
            </div>
        </form>
    );
}
