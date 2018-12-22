jQuery(document).ready(function($) {
  const $videoBoxes = $(".premium-video-box");
  $videoBoxes.map((index, videoBox) => {
    let $videoBox = $(videoBox),
      type = $videoBox.data("type");

    $videoBox.on("click", () => {
      $videoBox.toggleClass("video-overlay-false");
      let $video = $videoBox.find("iframe, video"),
        src = $video.attr("src");
      setTimeout(() => {
        if ("self" === type) {
          $($video)
            .get(0)
            .play();
        } else {
          $video.attr("src", src.replace("autoplay=0", "autoplay=1"));
        }
      }, 300);
    });
  });
});
