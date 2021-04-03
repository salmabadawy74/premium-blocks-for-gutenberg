jQuery(document).ready(function ($) {
    var lottieHandler = function (element, settings, lottieInstance) {
        var scrollSpeed = settings.scrollSpeed,
            startEvent = settings.bottom,
            endEvent = settings.bottom,
            trigger = settings.trigger;
        var animateSettings = {
            animate: {
                speed: trigger === 'viewport' ? "viewport" : scrollSpeed,
                range: {
                    start: startEvent,
                    end: endEvent
                }
            },
            effects: ['animate']
        };
        animateInstance = new premiumEffects(lottieContainer, animateSettings, animation);

        animateInstance.init();

    }
    window.premiumEffects = function (element, settings, lottieInstance) {

        var self = this,
            $el = $(element),
            elementSettings = settings;
        self.elementRules = {};

        self.init = function () {

            $(window).on('scroll load', self.initScroll)

        };
        self.getPercents = function () {

            var dimensions = self.getDimensions();

            elementTopWindowPoint = dimensions.elementTop - pageYOffset,
                elementEntrancePoint = elementTopWindowPoint - innerHeight;

            passedRangePercents = 100 / dimensions.range * (elementEntrancePoint * -1);

            return passedRangePercents;

        };

        self.initScroll = function () {

            self.initScrollEffects();

        };

        self.initScrollEffects = function () {

            var percents = self.getPercents();


            if (elementSettings.effects.includes('animate')) {
                self.animate(percents);
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

        self.animate = function (percents) {

            var stopFrame = lottieInstance.totalFrames;

            if (startEvent && endEvent) {

                if (startEvent > percents) {
                    percents = startEvent;
                }

                if (endEvent < percents) {
                    percents = endEvent;
                }

            }

            var currframe = ((percents) / 100) * (stopFrame);

            //Check if element is visible
            if (trigger === "viewport") {
                if (startEvent !== percents && endEvent !== percents) {
                    lottieInstance.play();
                } else {
                    lottieInstance.pause();
                }
            } else {
                lottieInstance.goToAndStop(currframe, true);
            }

        };


    };


})
