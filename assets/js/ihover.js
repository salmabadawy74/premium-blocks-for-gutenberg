jQuery(document).ready(function ($) {
    setTimeout(() => {

        var spinnerElement = $(".style20");

        $(".style20").prepend("<div class='premium-ihover__spinner'></div>");

        spinnerElement.on("click", function () {
            $(".style20 .premium-ihover__spinner").css("z-index", "0");
        });
        spinnerElement.on("mouseleave", function () {
            $(".style20 .premium-ihover__spinner").css("z-index", "1");
        });

    }, 2000);
});