jQuery(function ($) {
    const $contentSwitcher = $(".premium-content-switcher");

    $contentSwitcher.map((index, contentSwitcher) => {
        let $contentSwitcher = $(contentSwitcher);

        let $toggleBox = $contentSwitcher.find(`.premium-content-switcher-toggle-switch-label input`);

        $toggleBox.on('change', function () {
            if ($(this).is(':checked')) {
                let $switch = $contentSwitcher.find(".premium-content-switcher-first-list");
                $switch
                    .removeClass("premium-content-switcher-is-visible")
                    .addClass("premium-content-switcher-is-hidden");

                let $switchsecond = $contentSwitcher.find(".premium-content-switcher-second-list");
                $switchsecond
                    .removeClass("premium-content-switcher-is-hidden")
                    .addClass("premium-content-switcher-is-visible");
            }
            else {
                let $switch = $contentSwitcher.find(".premium-content-switcher-first-list");
                $switch
                    .removeClass("premium-content-switcher-is-hidden")
                    .addClass("premium-content-switcher-is-visible");

                let $switchsecond = $contentSwitcher.find(".premium-content-switcher-second-list");
                $switchsecond
                    .removeClass("premium-content-switcher-is-visible")
                    .addClass("premium-content-switcher-is-hidden");
            }
        });
    });
});