jQuery(document).ready(function ($) {
    function getAnimation() {

        var animationElems = $('.advanced-animation');

        animationElems.map((index, animationElem) => {
            let $animationElem = $(animationElem),
                viewport = getViewPort($animationElem[0]);
            if (viewport) {
                $animationElem.addClass('tab-animation')

            }
        })

    }
    $(window).on(' scroll', getAnimation);
    $(document).ready(getAnimation);
})



/**
 * Get View Port
 */
function getViewPort(el) {

    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

