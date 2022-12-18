const isInViewport = function (elem) {
    var distance = elem.getBoundingClientRect();
    return (
        distance.top >= 0 &&
        distance.left >= 0 &&
        distance.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
        distance.right <=
        (window.innerWidth || document.documentElement.clientWidth)
    );
};

const animate = function ({ duration, draw, timing }) {
    console.log('animate', duration, timing, draw)
    let start = performance.now();

    requestAnimationFrame(function animate(time) {
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) timeFraction = 1;

        let progress = timing(timeFraction);

        draw(progress);

        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }
    });
};

window.addEventListener("DOMContentLoaded", function (event) {
    var progressbars = document.querySelectorAll(".premium-progress-bar");
    if (!progressbars) return;

    // function 'debounce' is used here for better performance when scroll event fires
    function debounce(func) {
        var wait =
            arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
        var immediate =
            arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
        var timeout;
        return function () {
            var context = this,
                args = arguments;

            function later() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            }

            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }

    progressbars.forEach(function (progressbar) {
        var showedElement = false;
        var layout = progressbar.getAttribute("data-type");
        var count = progressbar.getAttribute("data-progress");
        var duration = progressbar.getAttribute("data-speed");
        console.log(progressbar.offsetWidth, count, layout, duration)
        function handleAnimationOnScroll() {
            setTimeout(function () {
                if (!showedElement && isInViewport(progressbar)) {
                    animate({
                        duration: duration * 1000,
                        draw: function (progress) {
                            var counter = Math.floor(progress * 100);
                            if (counter <= count) {
                                if (layout === "line") {
                                    console.log(counter)
                                    progressbar.querySelector(
                                        ".premium-progress-bar-bar"
                                    ).style.width = counter + "%";
                                }
                                else if (layout === "circle") {
                                    var rotate = counter * 3.6;
                                    progressbar.querySelector(
                                        ".premium-progressbar-circle-left"
                                    ).style.transform = "rotate(" + rotate + "deg)";
                                    if (rotate > 180) {
                                        progressbar.querySelector(
                                            ".premium-progressbar-circle"
                                        ).style.clipPath = "inset(0)";
                                        progressbar.querySelector(
                                            ".premium-progressbar-circle-right"
                                        ).style.visibility = "visible";
                                    }
                                }
                                else if (
                                    layout === "half-circle"
                                ) {
                                    var rotate = counter * 1.8;
                                    progressbar.querySelector(
                                        ".premium-progressbar-hf-circle-progress"
                                    ).style.transform = "rotate(" + rotate + "deg)";
                                }
                                else if (layout === "dots") {
                                    var dots = progressbar.querySelector(".premium-progressbar-dots");
                                    var circles = dots.getAttribute("data-circles");
                                    var totalFill = dots.getAttribute("data-total-fill");
                                    var partialFill = dots.getAttribute("data-partial-fill");
                                    console.log(dots, circles, totalFill, partialFill)

                                }
                            }
                        },
                        timing: function (timeFraction) {
                            return timeFraction;
                        },
                    });
                    showedElement = true;
                }
            }, 20);
        }

        if (isInViewport(progressbar)) {
            handleAnimationOnScroll();
        }

        window.addEventListener("scroll", debounce(handleAnimationOnScroll));
    });
});
