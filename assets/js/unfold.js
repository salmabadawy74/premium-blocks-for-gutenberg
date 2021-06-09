jQuery(document).ready(function ($) {
    setTimeout(function () {
        var $unfoldElem = $(".premium-unfold-wrap"),
            foldText = $unfoldElem.data("foldtext"),
            unfoldText = $unfoldElem.data("unfoldtext"),
            foldIcon = $unfoldElem.data("buttonicon"),
            unfoldIcon = $unfoldElem.data("buttonunfoldicon"),
            foldSelect = $unfoldElem.data("foldselect"),
            foldHeight = $unfoldElem.data("foldheight"),
            foldDur = $unfoldElem.data("folddur"),
            unfoldDur = $unfoldElem.data("unfolddur"),
            foldEasing = $unfoldElem.data("foldeasing"),
            unfoldEasing = $unfoldElem.data("unfoldeasing"),
            contentHeight = parseInt($unfoldElem.find(".premium-unfold-content-wrap").outerHeight());
        if (foldSelect === "percent") {
            foldHeight = (foldHeight / 100) * contentHeight;
        }

        $unfoldElem.find(".premium-unfold-button-text").text(unfoldText);

        $unfoldElem.find(".premium-unfold-content").css('height', foldHeight);

        $unfoldElem.find(".premium-button i").addClass(unfoldIcon);

        $unfoldElem.on('click', '.premium-button', function (e) {

            e.preventDefault();
            var text = $unfoldElem.find(".premium-unfold-content").hasClass("toggled") ? foldText : unfoldText,
                removeClass = $unfoldElem.find(".premium-unfold-content").hasClass("toggled") ? unfoldIcon : foldIcon,
                addClass = $unfoldElem.find(".premium-unfold-content").hasClass("toggled") ? foldIcon : unfoldIcon;

            $unfoldElem.find(".premium-unfold-button-text").text(text);

            if ($unfoldElem.find(".premium-unfold-content").hasClass("toggled")) {

                contentHeight = parseInt($unfoldElem.find(".premium-unfold-content-wrap").outerHeight());

                $unfoldElem.find(".premium-unfold-content").animate({ height: contentHeight }, foldDur, unfoldEasing).removeClass("toggled");

            } else {
                $unfoldElem.find(".premium-unfold-content").animate({ height: foldHeight }, unfoldDur, foldEasing).addClass("toggled");
            }

            $unfoldElem.find(".premium-unfold-gradient").toggleClass("toggled");
            $unfoldElem.find(".premium-button i").removeClass(removeClass).addClass(addClass);
        });
    }, 500)
})
