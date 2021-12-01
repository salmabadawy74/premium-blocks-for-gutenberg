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
        postID,
        mailchimp
    } = attributes;
    return (
        <div
            className={`wp-block-kadence-form kadence-form-${block_id} kb-form-wrap`}
        >
            <form className="kb-form" action="" method="post">
                <div className={`kadence-blocks-form-field kb-form-field-1 kb-field-desk-width-100 kb-input-size-standard col-${inputStyles[0].inputColumnWidth}`} style={{
                    paddingRight: `calc(${columnGap}px / 2)`,
                    paddingLeft: `calc(${columnGap}px / 2)`,
                    marginBottom: `${rowGap}px`,
                }}>
                    {inputStyles[0].showLabel ? (
                        <label for="kb_field__e0cc2d-b0_1">
                            {inputStyles[0].label}<span className="required">*</span>
                        </label>
                    ) : null}
                    < input
                        name="kb_field_1"
                        id="kb_field__e0cc2d-b0_1"
                        data-label="Email"
                        type="email"
                        placeholder={inputStyles[0].placeholder}
                        value={eMail}
                        data-type="email"
                        className="kb-field kb-text-style-field kb-email-field kb-field-1"
                        data-required="yes"
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

                <input type="hidden" name="_kb_form_id" value={block_id} />
                <input type="hidden" name="_kb_form_post_id" value={postID} />
                <input
                    type="hidden"
                    name="action"
                    value="pb_process_ajax_submit"
                />
                <input
                    className="kadence-blocks-field verify"
                    type="text"
                    name="_kb_verify_email"
                    autocomplete="off"
                    aria-hidden="true"
                    placeholder="Email"
                    tabindex="-1"
                />
                <div className={`kadence-blocks-form-field kb-submit-field kb-field-desk-width-100 col-${btnStyles[0].btnColumn}`} style={{
                    paddingRight: `calc(${columnGap}px / 2)`,
                    paddingLeft: `calc(${columnGap}px / 2)`,
                    marginBottom: `${rowGap}px`,
                }}>
                    <button className="kb-forms-submit button kb-button-size-standard kb-button-width-auto"
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
                    >
                        {__('Submit')}
                    </button>
                </div>
            </form>
        </div>
    );
}
