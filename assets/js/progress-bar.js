jQuery(document).ready(function ($) {

  const $progressBar = $(".premium-progress-bar-progress-bar");

  if( ! $progressBar.length )
    return;
  

    const waypoint = new Waypoint({
      element: $progressBar,
      handler: function() {
        const width = $progressBar.data('score');
        $progressBar.animate( { width: width + '%' }, 700 );
      },
      offset: Waypoint.viewportHeight() - 150,
      triggerOnce: true
    });


});