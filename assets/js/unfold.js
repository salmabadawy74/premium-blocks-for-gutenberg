jQuery(document).ready(function ($) {
    setTimeout(PremiumUnfoldHandler, 100)
})
function PremiumUnfoldHandler($) {

    var $unfoldElem = $.find(".premium-unfold-wrap"),
        contentHeight = parseInt($unfoldElem.find(".premium-unfold-content-wrap").outerHeight());


    $unfoldElem.on('click', '.premium-button', function (e) {

        e.preventDefault();

        var text = $unfoldElem.find(".premium-unfold-content").hasClass("toggled") ? settings.unfoldText : settings.foldText,
            removeClass = $unfoldElem.find(".premium-unfold-content").hasClass("toggled") ? settings.buttonUnfoldIcon : settings.buttonIcon,
            addClass = $unfoldElem.find(".premium-unfold-content").hasClass("toggled") ? settings.buttonIcon : settings.buttonUnfoldIcon;

        $unfoldElem.find(".premium-unfold-button-text").text(text);

        if ($unfoldElem.find(".premium-unfold-content").hasClass("toggled")) {

            contentHeight = parseInt($unfoldElem.find(".premium-unfold-content-wrap").outerHeight());

            $unfoldElem.find(".premium-unfold-content").animate({ height: contentHeight }, settings.unfoldDur, settings.unfoldEase).removeClass("toggled");

        } else {
            $unfoldElem.find(".premium-unfold-content").animate({ height: foldHeight }, settings.foldDur, settings.foldEase).addClass("toggled");
        }

        $unfoldElem.find(".premium-unfold-gradient").toggleClass("toggled");
        $unfoldElem.find(".premium-button i").removeClass(removeClass).addClass(addClass);
    });
};