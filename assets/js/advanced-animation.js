function getAnimation() {

    var animationElements = document.getElementsByClassName('advanced-animation');

    for (var item = 0; item < animationElements.length; item++) {

        var viewport = getViewPort(animationElements[item]);

        if (viewport) {
            animationElements[item].classList.add('tab-animation');
        }
    }
}
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

document.addEventListener('scroll', function () {
    getAnimation();
});

getAnimation();