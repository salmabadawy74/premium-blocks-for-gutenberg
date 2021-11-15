import React from 'react'

export function edit() {
    return (
        <div class="elementor-form-fields-wrapper elementor-labels-">
            <div class="elementor-field-type-email elementor-field-group elementor-column elementor-field-group-email elementor-col-66 elementor-sm-66 elementor-field-required">
                <label for="form-field-email" class="elementor-field-label elementor-screen-only">Email</label>
                <input size="1" type="email" name="form_fields[email]" id="pa_news_email" class="elementor-field elementor-size-md  elementor-field-textual" placeholder="Email" required="required" aria-required="true" />				</div>
            <div class="elementor-field-group elementor-column elementor-field-type-submit elementor-col-25 e-form__buttons elementor-sm-25">
                <button type="submit" class="elementor-button elementor-size-md pa-news-form">
                    <span>
                        <span class=" elementor-button-icon">
                        </span>
                        <span class="elementor-button-text">Submit</span>
                    </span>
                </button>
            </div>
        </div>

    )
}
