jQuery(document).ready(function ($) {

    const $bars = $(".premium-progress-bar");

    if (!$bars.length)
        return;

    $bars.map((index, progressBar) => {

        let $progressBar = $(progressBar),
            $toggleprogressBar = $progressBar.find(`.premium-progress-bar-progress-bar`);

        //Get bar width
        let barWidth = $toggleprogressBar.data('score');
        // var settings = $toggleprogressBar.data("settings"),
        // barWidth = settings["progress_length"],
        // speed = settings["speed"];
        let speed = $toggleprogressBar.data('speed')
        if (!barWidth)
            return;

        const waypoint = new Waypoint({
            element: $toggleprogressBar,
            handler: function () {
                console.log(barWidth);

                $toggleprogressBar.animate({
                    width: barWidth + '%'
                }, speed * 1000);
            },
            offset: Waypoint.viewportHeight() - 150,
            triggerOnce: true
        });

    })
});