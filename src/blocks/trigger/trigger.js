jQuery(function ($) {
    const $modals = $(".wp-block-premium-trigger");
    
    $modals.map((index, modal) => {
        let $modal = $(modal);
        const triggers = $modal.find('.toggle-button');
        const wrapClass = $modal.find('.gpb-popup-content')
        const closes = wrapClass.find('.toggle-button-close');
        const overlays = $modal.find('.gpb-popup-overlay')
        function ShowModal() {
            $modal.addClass("active");
            $modal.find(".toggle-button").addClass("toggled");
        }
        function hideModal() {
            $modal.removeClass("active");
            $modal.find(".toggle-button").removeClass("toggled");
        }
        closes.map((index, close) => {
            let closeButton = $(close)
            closeButton.click(hideModal)
        })
        triggers.map((index, trigger) => {
            let triggerIcon = $(trigger)
            triggerIcon.click(ShowModal)
        })

        overlays.map((index, overlay) => {
            let divOverlay = $(overlay)
            divOverlay.click(hideModal)
        })
    })
})