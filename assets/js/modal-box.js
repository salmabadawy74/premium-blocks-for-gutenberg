jQuery(document).ready(function ($) {
    let $modals = $(".premium-modal-box-container");
    $modals.map((index, modal) => {

        let settings = modal.data("settings");
        let $modal = modal.find(".premium-modal-box-modal-dialog");
        console.log($modal, settings, modal, "hello");
        if (!settings) {
            return;
        }

        if (settings.trigger === "pageload") {
            $(document).ready(function ($) {
                setTimeout(function () {
                    $modalElem.find(".premium-modal-box-modal").modal();
                }, settings.delay * 1000);
            });
        }

        if ($modal.data("modal-animation") && " " != $modal.data("modal-animation")) {
            var animationDelay = $modal.data('delay-animation');
            new Waypoint({
                element: $modal,
                handler: function () {
                    setTimeout(function () {
                        $modal.css("opacity", "1").addClass("animated " + $modal.data("modal-animation"));
                    }, animationDelay * 1000);
                    this.destroy();
                },
                offset: Waypoint.viewportHeight() - 150,
            });
        }
    })

});


