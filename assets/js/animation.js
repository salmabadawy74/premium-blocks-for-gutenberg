$(document).on('inview', '[data-premiumanimation]', function (event, visible, visiblePartX, visiblePartY) {
    var $this = $(this);
    if (visible) {
        let animation = $this.data('premiumanimation');
        if (animation && typeof animation.name != 'undefined' && animation.openAnimation != 0) {
            setTimeout(() => {
                $this.css({ opacity: 1 })
            }, parseInt(animation.delay) + 100)
            $this.css({
                'animation-name': animation.name,
                'animation-timing-function': animation.curve,
                'animation-duration': animation.duration + 'ms',
                'animation-delay': animation.delay + 'ms',
                'animation-iteration-count': animation.repeat === 'once' ? 1 : 'infinite'
            })
        }
    }
    $this.unbind('inview');
});
