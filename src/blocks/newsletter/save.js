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
        <div className={`wp-block-kadence-form kadence-form-${block_id} kb-form-wrap`}>
            <form className="kb-form" action="" method="post">
                <div className="kadence-blocks-form-field kb-field-desk-width-100 kb-input-size-standard">
                    <label for="kb_field__e0cc2d-b0_0">Name</label>
                    <input name="kb_field_0" id="kb_field__e0cc2d-b0_0" data-label="Name" type="text" placeholder="" value="" data-type="text" className="kb-field kb-text-style-field kb-text-field kb-field-0" />
                </div>
                <div className="kadence-blocks-form-field kb-form-field-1 kb-field-desk-width-100 kb-input-size-standard">
                    <label for="kb_field__e0cc2d-b0_1">Email<span className="required">*</span></label><input name="kb_field_1" id="kb_field__e0cc2d-b0_1" data-label="Email" type="email" placeholder="" value="" data-type="email" className="kb-field kb-text-style-field kb-email-field kb-field-1" data-required="yes" />
                </div><div className="kadence-blocks-form-field kb-form-field-2 kb-field-desk-width-100 kb-input-size-standard">
                    <label for="kb_field__e0cc2d-b0_2">Message<span className="required">*</span></label>
                    <textarea name="kb_field_2" id="kb_field__e0cc2d-b0_2" data-label="Message" type="textarea" placeholder="" data-type="textarea" className="kb-field kb-text-style-field kb-textarea-field kb-field-2" rows="4" data-required="yes"></textarea>
                </div><input type="hidden" name="_kb_form_id" value={block_id} />
                <input type="hidden" name="_kb_form_post_id" value={block_id} /><input type="hidden" name="action" value="kb_process_ajax_submit" /><input className="kadence-blocks-field verify" type="text" name="_kb_verify_email" autocomplete="off" aria-hidden="true" placeholder="Email" tabindex="-1" />
                <div className="kadence-blocks-form-field kb-submit-field kb-field-desk-width-100">
                    <button className="kb-forms-submit button kb-button-size-standard kb-button-width-auto">Submit</button>
                </div>
            </form>
        </div>
    );
}
