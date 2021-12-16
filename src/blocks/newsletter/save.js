import React from "react";
const { __ } = wp.i18n;
export function save(props) {
    const { attributes: { block_id,
        columnGap,
        rowGap,
        eMail,
        inputStyles,
        btnStyles,
        postID } } = props;
    return (
        <div
            className={`wp-block-premium-form premium-newsLetter-${block_id} pbg-form-wrap`}
        >
            <form className="pbg-form premium-newsletter__wrapper " action="" method="post">
                <div className={`premium-blocks-form-field premium-newsletter-input__wrapper pbg-form-field-1 col-${inputStyles[0].inputColumnWidth}`} style={{
                    paddingRight: `calc(${columnGap}px / 2)`,
                    paddingLeft: `calc(${columnGap}px / 2)`,
                    marginBottom: `${rowGap}px`,
                }}>
                    {inputStyles[0].showLabel ? (
                        <label for={`pbg_field__${block_id}`} className={`premium-newsletter__label`}>
                            {inputStyles[0].label}<span className="required">*</span>
                        </label>
                    ) : null}
                    < input
                        name="pbg_field_1"
                        id={`pbg_field__${block_id}`}
                        data-label="Email"
                        type="email"
                        placeholder={inputStyles[0].placeholder}
                        value={eMail}
                        data-type="email"
                        className=" pbg-field-1 premium-newsletter-input  "
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

                <input type="hidden" name="_pbg_form_id" value={block_id} />
                <input type="hidden" name="_pbg_form_post_id" value={postID} />
                <input
                    type="hidden"
                    name="action"
                    value="pb_process_ajax_submit"
                />
                <div className={`premium-blocks-form-field pbg-submit-field  premium-newsletter-button__wrapper  col-${btnStyles[0].btnColumn}`} style={{
                    paddingRight: `calc(${columnGap}px / 2)`,
                    paddingLeft: `calc(${columnGap}px / 2)`,
                    marginBottom: `${rowGap}px`,
                }}>
                    <button className="pbg-forms-submit button  premium-newsletter-button-submit"
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
                        {__('Submit', 'premium-block-for-gutenberg')}
                    </button>
                </div>
            </form>
        </div>
    );
}
