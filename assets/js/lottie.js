jQuery(document).ready(function ($) {
    setTimeout(() => {
        var $lottieIcons = $(".premium-lottie-animation");

        if (!$lottieIcons.length)
            return;

        $lottieIcons.each(function (index, item) {
            var $item = $(item)
            console.log($item)


            const instance = new premiumLottieAnimations($item);
            instance.init();

        })
    }, 100)

    window.premiumLottieAnimations = function ($elem) {

        var self = this,
            $lottie = null;

        if ($elem.hasClass("premium-lottie-animation")) {
            $lottie = $elem;
        } else {
            $lottie = $elem.find(".premium-lottie-animation");
        }

        self.init = function () {
            var loop = $lottie.data("loop"),
                reverse = $lottie.data("reverse"),
                trigger = $lottie.data("trigger"),
                render = $lottie.data("render"),
                lottieURL = $lottie.data('lottieurl'),
                scrollSpeed = $lottie.data('scrollSpeed'),
                speed = $lottie.data("speed");

            var animItem = bodymovin.loadAnimation({
                container: $lottie[0],
                renderer: render || 'svg',
                loop: loop ? true : false,
                path: lottieURL,
                autoplay: trigger === "none" ? true : false,
            });

            if (reverse) {
                animItem.setDirection(-1);
            }

            if (speed && 1 !== speed) {
                animItem.setSpeed(speed);
            }
            if ('scroll' === trigger || 'viewport' === trigger) {
                animItem.pause();
                var animateSettings = {
                    animate: {
                        speed: trigger === 'viewport' ? "viewport" : scrollSpeed,
                        range: {
                            start: $lottie.data('start'),
                            end: $lottie.data('end')
                        },
                    },

                    effects: ['animate']
                };

                animateInstance = new premiumEffects($lottie[0], animateSettings, animItem);

                animateInstance.init();
            }

            if (trigger === "hover") {
                animItem.pause();
                $elem.hover(function () {
                    animItem.play();
                }, function () {
                    animItem.pause();
                });
            }

        }
    }
    window.premiumEffects = function (element, settings, lottieInstance) {
        var self = this,
            $el = $(element),
            elementSettings = settings;
        self.elementRules = {};

        self.getPercents = function () {

            var dimensions = self.getDimensions();

            elementTopWindowPoint = dimensions.elementTop - pageYOffset,
                elementEntrancePoint = elementTopWindowPoint - innerHeight;

            passedRangePercents = 100 / dimensions.range * (elementEntrancePoint * -1);
            return passedRangePercents;

        };

        self.init = function () {

            $(window).on(' scroll', self.initScroll);
            $(document).ready(self.initScroll);


        };
        self.initScroll = function () {

            self.initScrollEffects();

        };

        self.initScrollEffects = function () {

            var percents = self.getPercents();

            if (elementSettings.effects.includes('animate')) {
                self.animate(percents, elementSettings.animate);
            }

        };
        self.getDimensions = function () {

            var elementOffset = $el.offset();

            var dimensions = {
                elementHeight: $el.outerHeight(),
                elementTop: elementOffset.top,
                elementLeft: elementOffset.left
            };

            dimensions.range = dimensions.elementHeight + innerHeight;

            return dimensions;

        };

        self.animate = function (percents, data) {
            var stopFrame = lottieInstance.totalFrames;

            if (data.range) {
                console.log(data.range, percents)

                if (data.range.start > percents) {
                    percents = data.range.start;
                }

                if (data.range.end < percents) {
                    percents = data.range.end;
                }

            }
            var currframe = ((percents) / 100) * (stopFrame);


            if (data.speed === "viewport") {
                if (data.range.start !== percents && data.range.end !== percents) {
                    lottieInstance.play();
                } else {

                    lottieInstance.pause();
                }
            } else {
                lottieInstance.goToAndStop(currframe, true);
            }

        };


    };
});

