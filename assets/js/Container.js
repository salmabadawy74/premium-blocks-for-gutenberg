(function ($) {
    setTimeout(() => {

        const $rootContainers = $(`.premium-is-root-container:not(.alignwide)`);
        $rootContainers.map((index, rootContainer) => {
            let $rootContainer = $(rootContainer)
            if (rootContainer) {
                const rootContainerFullWidth = $rootContainer.innerWidth();
                const innerContentCustomWidth = ($rootContainer).css('--inner-content-custom-width'); // eslint-disable-line no-undef

                $rootContainer.css('--inner-content-custom-width-final', `min(${rootContainerFullWidth}px,${innerContentCustomWidth})`);
                $rootContainer.css('--root-container-full-width', `${rootContainerFullWidth}px`);

                if (rootContainerFullWidth <= parseInt(innerContentCustomWidth)) {
                    $rootContainer.css('padding-left', `calc( ( var(--root-container-full-width) - var( --inner-content-custom-width-final ) ) / 2 + var(--padding-left) )`);
                    $rootContainer.css('padding-right', `calc( ( var(--root-container-full-width) - var( --inner-content-custom-width-final ) ) / 2 + var(--padding-right) )`);
                } else {
                    $rootContainer.css('padding-left', `calc( ( var(--root-container-full-width) - var( --inner-content-custom-width-final ) ) / 2 )`);
                    $rootContainer.css('padding-right', `calc( ( var(--root-container-full-width) - var( --inner-content-custom-width-final ) ) / 2 )`);
                }
            }
        })
    }, 1000)


})(jQuery);