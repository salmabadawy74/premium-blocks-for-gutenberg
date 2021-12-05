jQuery(function ($) {
    var premium_blocks_form = {
        init: function () {
            $('form.pbg-form').on('submit', this.submit);
        },
        submit: function (e) {
            e.preventDefault();
            $('body').trigger('pbg-form-start-submit', $(this));
            var form = $(this),
                submitButton = form.find('.pbg-forms-submit'),

                form_data = premium_blocks_form.validateForm(form);

            if (form_data) {

                // send the request.
                form.parent('.wp-block-premium-form').find('.premium-blocks-form-message').slideUp('fast', function () {
                    $(this).remove();
                });
                form.append('<div class="pbg-form-loading"><div class="pbg-form-loading-spin"><div></div><div></div><div></div><div></div></div></div>');
                submitButton.attr('disabled', 'disabled').addClass('button-primary-disabled');

                $.post(settings.ajaxurl, form_data, function (res) {

                    if (res.success) {
                        $('body').trigger('pbg-form-success', res);
                        if (res.redirect) {
                            window.location = res.redirect;
                        } else {
                            form.after(res.html);
                            focus
                            $('html, body').animate({
                                scrollTop: $('.premium-blocks-form-message').offset().top - 100
                            }, 'fast');

                            premium_blocks_form.clearForm(form);
                        }
                    } else {


                        form.after(res.data.html);
                        if (res.data.required) {
                            if (form.find('#' + res.data.required).length > 0) {
                                premium_blocks_form.markError(form.find('#' + res.data.required), 'required');
                            }
                        }


                        submitButton.removeAttr('disabled');
                    }
                    submitButton.removeClass('button-primary-disabled');
                    form.find('.pbg-form-loading').remove();
                });
            }
        },
        removeErrors: function (item) {
            $(item).parents('.pbg-form').removeClass('pbg-form-has-error');
            $(item).find('.has-error').removeClass('has-error');
            $('.pbg-form-error-msg').remove();
        },
        isValidEmail: function (email) {
            var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
            return pattern.test(email);
        },
        removeErrorNotice: function (form) {
            $(form).find('.pbg-form-errors').remove();
        },
        markError: function (item, error_type) {
            var error_string = '';
            $(item).parents('.pbg-form').addClass('pbg-form-has-error');
            $(item).addClass('has-error');

            if (error_type) {
                error_string = $(item).data('label');

                if ('' === error_string || undefined === error_string) {
                    error_string = settings['item'];
                }
                switch (error_type) {
                    case 'required':
                        error_string = error_string + ' ' + settings[error_type];
                        break;
                    case 'mismatch':
                        error_string = error_string + ' ' + settings[error_type];
                        break;
                    case 'validation':
                        error_string = error_string + ' ' + settings[error_type];
                        break
                }
                $(item).siblings('.pbg-form-error-msg').remove();
                if ($(item).hasClass('pbg-checkbox-style')) {
                    $(item).parent('.premium-blocks-form-field').append('<div class="pbg-form-error-msg premium-blocks-form-warning" role="alert">' + error_string + '</div>');
                } else {
                    $(item).after('<div class="pbg-form-error-msg premium-blocks-form-warning">' + error_string + '</div>');
                }
            }

            $(item).focus();
        },
        /**
         *
         * @param form
         * @param position (value = bottom or end) end if form is onepare, bottom, if form is multistep
         */
        clearForm: function (form) {
            $(form)[0].reset();
        },
        /**
         *
         * @param form
         * @param position (value = bottom or end) end if form is onepare, bottom, if form is multistep
         */
        addErrorNotice: function (form) {
            $(form).after('<div class="premium-blocks-form-message premium-blocks-form-warning">' + settings.error_message + '</div>');
        },

        isValidURL: function (url) {
            var urlregex = new RegExp("^(http:\/\/www.|https:\/\/www.|ftp:\/\/www.|www.|http:\/\/|https:\/\/){1}([0-9A-Za-z]+\.)");
            return urlregex.test(url);
        },
        isValidTel: function (tel) {
            var telregex = new RegExp("/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im");
            return telregex.test(tel);
        },
        validateForm: function (self) {

            var temp,
                temp_val = '',
                error = false,
                error_items = [];
            error_type = '';

            // remove all initial errors if any
            premium_blocks_form.removeErrors(self);
            premium_blocks_form.removeErrorNotice(self);

            // ===== Validate: Text and Textarea ========
            var required = self.find('[data-required="yes"]:visible');

            required.each(function (i, item) {

                var data_type = $(item).data('type')
                val = '';

                switch (data_type) {
                    case 'textarea':
                    case 'text':

                        val = $.trim($(item).val());

                        if (val === '') {
                            error = true;
                            error_type = 'required';

                            // make it warn collor
                            premium_blocks_form.markError(item, error_type);
                        }
                        break;
                    case 'tel':
                        val = $.trim($(item).val());
                        if (val === '') {
                            error = true;
                            error_type = 'required';

                            // make it warn collor
                            premium_blocks_form.markError(item, error_type);
                        }
                        break;
                    case 'accept':
                        if ($(item).prop("checked") == false) {
                            error = true;
                            error_type = 'required';

                            // make it warn collor
                            premium_blocks_form.markError(item, error_type);
                        }
                        break;

                    case 'select':
                        val = $(item).val();

                        if ($(item).prop('multiple')) {
                            if (val === null || val.length === 0) {
                                error = true;
                                error_type = 'required';

                                // make it warn collor
                                premium_blocks_form.markError(item, error_type);
                            }
                        } else {
                            if (!val || val === '-1') {
                                error = true;
                                error_type = 'required';

                                // make it warn collor
                                premium_blocks_form.markError(item, error_type);
                            }
                        }
                        break;

                    case 'radio':
                        var length = $(item).find('input:checked').length;

                        if (!length) {
                            error = true;
                            error_type = 'required';

                            // make it warn collor
                            premium_blocks_form.markError(item, error_type);
                        }
                        break;

                    case 'checkbox':
                        var length = $(item).find('input:checked').length;

                        if (!length) {
                            error = true;
                            error_type = 'required';

                            // make it warn collor
                            premium_blocks_form.markError(item, error_type);
                        }
                        break;

                    case 'email':
                        var val = $(item).val();

                        if (val !== '') {
                            //run the validation
                            if (!premium_blocks_form.isValidEmail(val)) {
                                error = true;
                                error_type = 'validation';

                                premium_blocks_form.markError(item, error_type);
                            }
                        } else if (val === '') {
                            error = true;
                            error_type = 'required';

                            premium_blocks_form.markError(item, error_type);
                        }
                        break;
                    case 'url':
                        var val = $(item).val();

                        if (val !== '') {
                            //run the validation
                            if (!premium_blocks_form.isValidURL(val)) {
                                error = true;
                                error_type = 'validation';

                                premium_blocks_form.markError(item, error_type);
                            }
                        }
                        break;

                };

            });

            // if already some error found, bail out
            if (error) {
                // add error notice
                premium_blocks_form.addErrorNotice(self);

                return false;
            }
            var form_data = self.serialize();
            form_data = form_data + '&_pbg_form_verify=' + settings.nonce;
            return form_data;
        },
    };
    premium_blocks_form.init()
});
