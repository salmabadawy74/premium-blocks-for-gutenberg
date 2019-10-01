jQuery(document).ready(function ($) {
    setTimeout(() => {

        var spinnerElement = $(".style20");

        spinnerElement.on("click", function () {
            $(".block-editor-page .style20 .premium-ihover__spinner").css("z-index", "0");
        });
        spinnerElement.on("mouseleave", function () {
            $(".block-editor-page .style20 .premium-ihover__spinner").css("z-index", "1");
        });

    }, 2000);
});