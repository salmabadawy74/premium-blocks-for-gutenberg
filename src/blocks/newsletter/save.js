import React from "react";

export function save() {
    return (
        <form className="premium-newsletter-form" action="" method="post">
            <div className="premium-newsletter__wrapper">
                <div className="premium-newsletter-input__wrapper">
                    <label
                        for="form-field-email"
                        className=" premium-newsletter__label"
                    >
                        Email
                    </label>
                    <input
                        className={`premium-newsletter-input`}
                        type="email"
                        name="form_fields[email]"
                        id="pa_news_email"
                        className=""
                        placeholder="Email"
                        required="required"
                        aria-required="true"
                    />{" "}
                </div>
                <div className="premium-newsletter-button__wrapper">
                    <button
                        type="submit"
                        className="premium-newsletter-button-submit"
                        id="submit-newsletter"
                    >
                        <span className="">Submit</span>
                    </button>
                </div>
            </div>
        </form>
    );
}
