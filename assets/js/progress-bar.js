// jQuery(document).ready(function ($) {

//     const $bars = $(".premium-progress-bar");

//     if (!$bars.length)
//         return;

//     $bars.map((index, progressBar) => {

//         let $progressBar = $(progressBar),
//             $toggleprogressBar = $progressBar.find(`.premium-progress-bar-bar`);

//         //Get bar width
//         let barWidth = $progressBar.data('score');
//         let speed = $progressBar.data('speed');
//         let type = $progressBar.data('type');

//         if (!barWidth)
//             return;

//         const waypoint = new Waypoint({
//             element: $progressBar,
//             handler: function () {
//                 console.log(barWidth, type);

//                 if ("line" === type) {

//                     var $toggleprogressBar = $progressBar.find(`.premium-progress-bar-bar`);
//                     console.log($toggleprogressBar)
//                     $($toggleprogressBar).animate({
//                         width: barWidth + "%"
//                     }, speed * 1000);
//                     // $toggleprogressBar.animate({
//                     //     width: barWidth + "%"
//                     // }, speed * 1000);
//                 }

//                 // $toggleprogressBar.animate({
//                 //     width: barWidth + '%'
//                 // }, speed * 1000);
//             },
//             // offset: Waypoint.viewportHeight() - 150,
//             // triggerOnce: true
//         });

//     })
// });


// setTimeout(() => {
//     const accordions = document.querySelectorAll(".premium-progress-bar");

//     if (accordions.length) {
//         accordions.forEach((accordion) => {
//             let barWidth = accordion.dataset.score;
//             let speed = accordion.dataset.speed;
//             let type = accordion.dataset.type;

//             const accordionItems = accordion.querySelectorAll(
//                 ".premium-progress-bar-bar"
//             );
//             console.log(accordion.getAttribute("data-type"))
//             if (type == "line") {
//                 accordionItems[0].style.width = "unset";
//             }
//             // else if (type === "circle") {
//             //     circle_half_left.current.style.transform = "rotate(0deg)";
//             //     circle_pie.current.style.clipPath = "";
//             //     circle_half_right.current.style.visibility = "";
//             // } else if (type === "half-circle") {
//             //     circle_half.current.style.transform = "rotate(0deg)";
//             //     circle_half.current.style.transition = "none";
//             // }
//             // else if (type === "dots") {
//             //     setAttributes({
//             //         numberOfTotalFill: 0,
//             //         fillPercent: 0
//             //     });
//             // }
//             let id = "";
//             const changeWidthEffect = () => {
//                 var i = 0;
//                 if (i == 0) {
//                     i = 1;
//                     var width = 0;
//                     var value = barWidth;
//                     // if (progressType === "circle") {
//                     //     value = progress * 3.6;
//                     // } else if (progressType === "half-circle") {
//                     //     value = progress * 1.8;
//                     // }

//                     id = setInterval(ebChangeframe, 10);
//                     function ebChangeframe() {
//                         // if (progressType === "circle") {
//                         //     if (width > 180) {
//                         //         circle_pie.current.style.clipPath = "inset(0)";
//                         //         circle_half_right.current.style.visibility = "visible";
//                         //     } else {
//                         //         circle_pie.current.style.clipPath = "";
//                         //         circle_half_right.current.style.visibility = "";
//                         //     }
//                         // }
//                         if (width >= value) {
//                             clearInterval(id);
//                             i = 0;
//                         } else {
//                             width++;
//                             // console.log('width', width)
//                             if (type == "line") {
//                                 accordionItems[0].style.width = width + "%";
//                             }
//                             // if (progressType === "circle") {
//                             //     circle_half_left.current.style.transform =
//                             //         "rotate(" + width + "deg)";
//                             // } else if (progressType === "half-circle") {
//                             //     circle_half.current.style.transform = "rotate(" + width + "deg)";
//                             // }
//                             // else if (progressType == "dots") {
//                             //     let dots = []
//                             //     var offsetWidth = contentRef.current.offsetWidth,
//                             //         dotsSize = attributes.dotSize[deviceType] || 25,
//                             //         dotsSpacing = attributes.dotSpacing[deviceType] || 10,
//                             //         length = width,
//                             //         numberOfCircles = Math.ceil(offsetWidth / (dotsSize + dotsSpacing)),
//                             //         circlesToFill = numberOfCircles * (length / 100),
//                             //         numberOfTotalFill = Math.floor(circlesToFill),
//                             //         fillPercent = 100 * (circlesToFill - numberOfTotalFill);
//                             //     for (var dot = 0; dot < numberOfCircles; dot++) {
//                             //         dots.push(dot)
//                             //     }
//                             //     // console.log(offsetWidth, dotsSize, dotsSpacing, numberOfCircles, circlesToFill, numberOfTotalFill, fillPercent, dots)
//                             //     setAttributes({
//                             //         numberOfCircles: dots,
//                             //         numberOfTotalFill: numberOfTotalFill,
//                             //         fillPercent: fillPercent
//                             //     });
//                             // }
//                         }
//                     }
//                 }
//             };
//             const progressSetTimeout = setTimeout(changeWidthEffect, 500);

//             return () => {
//                 clearInterval(id);
//                 clearTimeout(progressSetTimeout);
//             };
//         });
//     }
// }, 200)
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
        var count = progressbar.getAttribute("data-progress_bar");
        var duration = progressbar.getAttribute("data-speed");
        console.log(count, layout, duration)
        function handleAnimationOnScroll() {
            setTimeout(function () {
                if (!showedElement && isInViewport(progressbar)) {
                    animate({
                        duration: duration,
                        timing: function (timeFraction) {
                            return timeFraction;
                        },
                        draw: function (progress) {
                            var counter = Math.floor(progress * 100);
                            console.log(counter, count, progress)
                            if (counter <= count) {
                                if (layout === "line") {
                                    progressbar.querySelector(
                                        ".premium-progress-bar-bar"
                                    ).style.width = counter + "%";
                                }
                                //  else if (layout === "circle") {
                                //     var rotate = counter * 3.6;
                                //     progressbar.querySelector(
                                //         ".eb-progressbar-circle-half-left"
                                //     ).style.transform = "rotate(" + rotate + "deg)";
                                //     if (rotate > 180) {
                                //         progressbar.querySelector(
                                //             ".eb-progressbar-circle-pie"
                                //         ).style.clipPath = "inset(0)";
                                //         progressbar.querySelector(
                                //             ".eb-progressbar-circle-half-right"
                                //         ).style.visibility = "visible";
                                //     }
                                // } else if (
                                //     layout === "half_circle"
                                // ) {
                                //     var rotate = counter * 1.8;
                                //     progressbar.querySelector(
                                //         ".eb-progressbar-circle-half"
                                //     ).style.transform = "rotate(" + rotate + "deg)";
                                // } else if (layout === "box") {
                                //     progressbar.querySelector(
                                //         ".eb-progressbar-box-fill"
                                //     ).style.height = counter + "%";
                                // }
                                // if (progressbar.querySelector(".eb-progressbar-count")) {
                                //     progressbar.querySelector(".eb-progressbar-count").innerText =
                                //         counter;
                                // }
                            }
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
