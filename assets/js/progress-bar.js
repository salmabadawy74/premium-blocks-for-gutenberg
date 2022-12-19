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
    console.log(progressbars)
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
                            // console.log(counter)
                            if (counter <= count) {
                                if (layout === "line") {
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
                                    console.log("dotssssssssssssssssssssssssss")
                                    var dots = progressbar.querySelector(".premium-progressbar-dots");
                                    // var circles = $video.attr("src");
                                    // var circles = dots.getAttribute("data-circles");
                                    // var totalFill = dots.getAttribute("data-total-fill");
                                    // var partialFill = dots.getAttribute("data-partial-fill");
                                    // console.log(dots, circles, totalFill, partialFill, progressbar.getAttribute('numberOfTotalFill'))

                                    var offsetWidth = progressbar.offsetWidth,
                                        dotsSize = dots.getAttribute("data-size"),
                                        dotsSpacing = dots.getAttribute("data-spacing"),
                                        length = count,
                                        numberOfCircles = Math.ceil(offsetWidth / (parseInt(dotsSize) + parseInt(dotsSpacing))),
                                        circlesToFill = numberOfCircles * (length / 100),
                                        numberOfTotalFill = Math.floor(circlesToFill),
                                        fillPercent = 100 * (circlesToFill - numberOfTotalFill);
                                    // for (var dot = 0; dot < numberOfCircles; dot++) {
                                    //     dots.push(dot)
                                    // }
                                    console.log(numberOfCircles, circlesToFill, numberOfTotalFill, dotsSize, dotsSpacing, count, Math.ceil(dotsSize + dotsSpacing))
                                    // var className = "progress-segment";
                                    // for (var i = 0; i < numberOfCircles; i++) {
                                    //     console.log('iuygf')
                                    //     className = "progress-segment";
                                    //     var innerHTML = '';

                                    //     if (i < numberOfTotalFill) {
                                    //         innerHTML = "<div class='segment-inner'></div>";
                                    //     }
                                    //     // else if (i === numberOfTotalFill) {

                                    //     //     innerHTML = "<div class='segment-inner'></div>";
                                    //     // }
                                    //     dots.innerHTML += "<div class='" + className + "'>" + innerHTML + "</div>"
                                    //     // dots.append("<div class='" + className + "'>" + innerHTML + "</div>");

                                    // }
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
