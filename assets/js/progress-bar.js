jQuery(document).ready(function ($) {

    const $bars = $(".premium-progress-bar");

    if (!$bars.length)
        return;

    $bars.map((index, progressBar) => {

        let $progressBar = $(progressBar),
            $toggleprogressBar = $progressBar.find(`.premium-progress-bar-progress-bar`);

        //Get bar width
        let barWidth = $toggleprogressBar.data('score');

        if (!barWidth)
            return;

        const waypoint = new Waypoint({
            element: $toggleprogressBar,
            handler: function () {
                $toggleprogressBar.animate({
                    width: barWidth + '%'
                }, 700);
            },
            offset: Waypoint.viewportHeight() - 150,
            triggerOnce: true
        });

    })
});