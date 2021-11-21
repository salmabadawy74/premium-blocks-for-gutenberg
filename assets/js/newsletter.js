jQuery(document).ready(function ($) {
    $(".premium-newsletter-button-submit").on("click", function (e) {
        e.preventDefault();
        var email = $("#pa_news_email").val();
        console.log(email);
        if (checkEmail(email)) {
            $.ajax({
                url: settings.ajaxurl,
                type: "POST",
                data: {
                    action: "subscribe_newsletter",
                    security: settings.nonce,
                    email: email,
                },
                success: function (response) {
                    swal({
                        title: "Thanks for subscribing!",
                        text: "Click OK to continue",
                        type: "success",
                    });

                    console.log(response);
                },
                error: function (err) {
                    console.log("err", err);
                },
            });
        } else {
            swal({
                type: "error",
                title: "Invalid Email Address...",
                text: "Please enter a valid email address!",
            });
        }
    });
    function checkEmail(emailAddress) {
        var pattern = new RegExp(
            /^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i
        );
        return pattern.test(emailAddress);
    }
});
