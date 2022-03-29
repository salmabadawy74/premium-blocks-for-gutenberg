jQuery(function ($) {
    const $modals = $(".premium-modal-box");
    $modals.map((index, modal) => {
        const $modalElem = modal;
        let settings = modal.dataset.trigger;
        let $modal = modal.querySelector(".premium-popup__modal_wrap");

        if (!settings) {
            return;
        }
        if (settings === "button") {
            $(document).ready(function ($) {
                $modalElem.find(".premium-modal-box-modal").modal();

            })

        };

        if (settings === "load") {
            $(document).ready(function ($) {
                setTimeout(function () {
                    $modal.style.display = "flex"
                }, settings.delay * 1000);
            });
        }

        if ($modal.dataset.animation && " " != $modal.dataset.animation) {
            var animationDelay = $modal.dataset.delay;
            new Waypoint({
                element: $modal,
                handler: function () {
                    setTimeout(function () {
                        $modal.style.display = "flex"
                    }, animationDelay * 1000);
                    this.destroy();
                },
                offset: Waypoint.viewportHeight() - 150,
            });
        }
    })


})


