jQuery(document).ready(function($) {
  const $counters = $(".premium-countup__increment");
  $counters.map((index, counter) => {
    let $counter = $(counter);
    let time = $counter.data("interval");
    let delay = $counter.data("delay");
    $counter.counterUp({
      delay: delay,
      time: time
    });
  });
});
