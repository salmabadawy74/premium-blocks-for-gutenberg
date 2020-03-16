jQuery(document).ready(function ($) {
  const $progressBar = $(".premium-progress-bar");

  $progressBar.map((index, progressBar) => {
    let $progressBar = $(progressBar);

    let $toggleprogressBar = $progressBar.find(`.premium-progress-bar-progress-bar`);

    if (!$toggleprogressBar.length)
      return;


    const waypoint = new Waypoint({
      element: $toggleprogressBar,
      handler: function () {
        let width = $toggleprogressBar.data('score');
        $toggleprogressBar.animate({ width: width + '%' }, 700);
      },
      offset: Waypoint.viewportHeight() - 150,
      triggerOnce: true
    });

  })
});