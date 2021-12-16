/* global settings */
(function () {
    'use strict';
    window.PremiumForm = {
        error_item: 1,
        clearForm(form) {
            form.reset();
        },
        insertAfter(newNode, referenceNode) {
            referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
        },
        markError(item, error_type, form) {
            var error_string = '';
            if (!form.classList.contains('pbg-form-has-error')) {
                form.classList.add('pbg-form-has-error');
            }
            item.classList.add('has-error');
            if (error_type) {
                switch (error_type) {
                    case 'required':
                        error_string = item.getAttribute('data-required-message');
                        if (!error_string || '' === error_string || undefined === error_string) {
                            error_string = item.getAttribute('data-label');
                            if (!error_string || '' === error_string || undefined === error_string) {
                                error_string = settings['item'];
                            }
                            error_string = error_string + ' ' + settings[error_type];
                        }
                        break;
                    case 'mismatch':
                        error_string = item.getAttribute('data-mismatch-message');
                        if (!error_string || '' === error_string || undefined === error_string) {
                            error_string = item.getAttribute('data-label');
                            if (!error_string || '' === error_string || undefined === error_string) {
                                error_string = settings['item'];
                            }
                            error_string = error_string + ' ' + settings[error_type];
                        }
                        break;
                    case 'validation':
                        error_string = item.getAttribute('data-validation-message');
                        if (!error_string || '' === error_string || undefined === error_string) {
                            error_string = item.getAttribute('data-label');
                            if (!error_string || '' === error_string || undefined === error_string) {
                                error_string = settings['item'];
                            }
                            error_string = error_string + ' ' + settings[error_type];
                        }
                        break
                }
                var next = item.parentNode.querySelector('.pbg-form-error-msg');
                if (next) {
                    next.remove();
                }
                var error_id = item.getAttribute('name') + '-error';
                item.setAttribute('aria-describedby', error_id);
                item.setAttribute('aria-invalid', 'true');
                var el = document.createElement('div');
                el.id = error_id;
                el.classList.add('pbg-form-error-msg');
                el.classList.add('premium-blocks-form-warning');
                el.setAttribute('role', 'alert');
                el.innerHTML = error_string;
                if (item.classList.contains('pbg-checkbox-style')) {
                    item.parentNode.append(el);
                } else {
                    window.PremiumForm.insertAfter(el, item);
                }
            }
            if (1 === window.PremiumForm.error_item) {
                item.focus();
            }
            window.PremiumForm.error_item++;
        },
        addErrorNotice(form) {
            var error_message = form.getAttribute('data-error-message');
            if (!error_message || '' === error_message || undefined === error_message) {
                error_message = settings.error_message;
            }
            var el = document.createElement('div');
            el.classList.add('premium-blocks-form-message');
            el.classList.add('premium-blocks-form-warning');
            el.innerHTML = error_message;
            window.PremiumForm.insertAfter(el, form);
        },
        isValidEmail(email) {
            var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
            return pattern.test(email);
        },
        isValidURL(url) {
            var urlregex = new RegExp("^(http:\/\/www.|https:\/\/www.|ftp:\/\/www.|www.|http:\/\/|https:\/\/){1}([0-9A-Za-z]+\.)");
            return urlregex.test(url);
        },

        removeErrors(item) {
            if (item.classList.contains('pbg-form-has-error')) {
                item.classList.remove('pbg-form-has-error');
            }
            var errors = item.querySelectorAll('.has-error');
            if (errors.length) {
                for (var n = 0; n < errors.length; n++) {
                    errors[n].classList.remove('has-error');
                    errors[n].removeAttribute('aria-describedby');
                    errors[n].removeAttribute('aria-invalid');
                    var next = errors[n].parentNode.querySelector('.pbg-form-error-msg');
                    if (next) {
                        next.remove();
                    }
                }
            }
            var message = document.querySelectorAll('.premium-blocks-form-message');
            if (message.length) {
                for (var n = 0; n < message.length; n++) {
                    message[n].remove();
                }
            }
            var notices = item.querySelectorAll('.pbg-form-errors');
            if (notices.length) {
                for (var n = 0; n < notices.length; n++) {
                    notices[n].remove();
                }
            }
        },
        serialize(data) {
            var obj = {};
            for (var [key, value] of data) {
                if (obj[key] !== undefined) {
                    if (!Array.isArray(obj[key])) {
                        obj[key] = [obj[key]];
                    }
                    obj[key].push(value);
                } else {
                    obj[key] = value;
                }
            }
            return obj;
        },
        validateForm(self) {
            var error = false,
                error_type = '';
            // remove all initial errors if any.
            window.PremiumForm.removeErrors(self);
            // ===== Validate: Text and Textarea ========
            var required = self.querySelectorAll('[data-required="yes"]');
            if (required.length) {
                for (var n = 0; n < required.length; n++) {
                    var data_type = required[n].getAttribute('data-type'),
                        val = '';
                    switch (data_type) {
                        case 'text':

                            val = required[n].value.trim();

                            if (val === '') {
                                error = true;
                                error_type = 'required';

                                // mark the error in the field.
                                window.PremiumForm.markError(required[n], error_type, self);
                            }
                            break;
                        case 'email':
                            var val = required[n].value.trim();

                            if (val !== '') {
                                //run the validation
                                if (!window.PremiumForm.isValidEmail(val)) {
                                    error = true;
                                    error_type = 'validation';

                                    // mark the error in the field.
                                    window.PremiumForm.markError(required[n], error_type, self);
                                }
                            } else if (val === '') {
                                error = true;
                                error_type = 'required';

                                // mark the error in the field.
                                window.PremiumForm.markError(required[n], error_type, self);
                            }
                            break;
                    };
                }

            }

            // if already some error found, bail out
            if (error) {
                // add error notice
                window.PremiumForm.addErrorNotice(self);

                return false;
            }
            var form_data = new FormData(self);
            form_data.set('_pbg_form_verify', settings.nonce);
            form_data = new URLSearchParams(form_data);
            return form_data;
        },
        createElementFromHTML(htmlString) {
            var div = document.createElement('div');
            div.innerHTML = htmlString;

            // Change this to div.childNodes to support multiple top-level nodes
            return div.firstChild;
        },
        submit(e, form) {
            e.preventDefault();
            var event = new Event('pbg-form-start-submit');
            window.document.body.dispatchEvent(event);
            var submitButton = form.querySelector('.pbg-forms-submit ');
            var form_data = window.PremiumForm.validateForm(form);
            if (form_data) {
                var el = document.createElement('div');
                el.classList.add('pbg-form-loading');
                el.innerHTML = '<div class="pbg-form-loading-spin"><div></div><div></div><div></div><div></div></div>';
                form.append(el);
                submitButton.setAttribute('disabled', 'disabled')
                submitButton.classList.add('button-primary-disabled');
                var request = new XMLHttpRequest();
                request.open('POST', settings.ajaxurl, true);
                request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                request.onload = function () {
                    if (this.status >= 200 && this.status < 400) {
                        var response = JSON.parse(this.response);

                        if (response.success) {
                            var event = new Event('pbg-form-success', {
                                formID: form.id,
                            });
                            // Dispatch the event.
                            window.document.body.dispatchEvent(event);

                            if (response.data) {
                                window.PremiumForm.insertAfter(window.PremiumForm.createElementFromHTML(response.data.html), form);
                                if (response.data.required) {
                                    if (form.querySelector('[name="' + response.data.required + '"]')) {
                                        window.PremiumForm.markError(form.querySelector('[name="' + response.data.required + '"]'), 'required', form);
                                    }
                                }
                            }

                        }
                    }

                    submitButton.removeAttribute('disabled');
                    submitButton.classList.remove('button-primary-disabled');

                };
                request.onerror = function () {
                    // Connection error
                };
                request.send(form_data.toString());
            }

        },
        checkParentClass(element, classname) {
            if (element.className.split(' ').indexOf(classname) >= 0) return element.id;
            return element.parentNode && window.PremiumForm.checkParentClass(element.parentNode, classname);
        },
        verifySource(form) {
            var input = form.querySelector('input[name="_kb_form_post_id"]');
            if (!input) {
                return;
            }

        },
        initForms() {
            var forms = document.querySelectorAll('form.pbg-form');
            if (!forms.length) {
                return;
            }
            var click_function = function (form) {
                return function curried_func(e) {
                    window.PremiumForm.submit(e, form);
                }
            }
            for (var n = 0; n < forms.length; n++) {
                window.PremiumForm.verifySource(forms[n]);
                forms[n].addEventListener('submit', click_function(forms[n]));
            }
        },
        init: function () {
            if (typeof settings === 'undefined') {
                return false;
            }
            window.PremiumForm.initForms();
        }
    }
    if ('loading' === document.readyState) {
        // The DOM has not yet been loaded.
        document.addEventListener('DOMContentLoaded', window.PremiumForm.init);
    } else {
        // The DOM has already been loaded.
        window.PremiumForm.init();
    }
}());
