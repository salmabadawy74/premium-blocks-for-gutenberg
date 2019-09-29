jQuery(document).ready(function ($) {
    setTimeout(() => {

        var spinnerElement = $(".style20");

        // $(".style20").prepend("<div class='premium-ihover__spinner'></div>");
        // $(".style20").prepend("<div class='premium-ihover-spinner' style='z-index: 1;'></div>");

        spinnerElement.on("click", function () {
            $(".block-editor-page .style20 .premium-ihover__spinner").css("z-index", "0");
        });
        spinnerElement.on("mouseleave", function () {
            $(".block-editor-page .style20 .premium-ihover__spinner").css("z-index", "1");
        });

    }, 2000);
});