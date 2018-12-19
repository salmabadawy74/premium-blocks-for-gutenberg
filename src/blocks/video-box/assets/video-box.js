jQuery(document).ready(function($) {
  const $videoBoxes = $(".premium-video-box");
  $videoBoxes.map((index, videoBox) => {
    let $videoBox = $(videoBox);
    $videoBox.on("click", () => {
      $videoBox.toggleClass("video-overlay-false");
      let $video = $videoBox.find("iframe"),
        src = $video.attr("src");
      setTimeout(() => {
        $video.attr("src", src.replace("autoplay=0", "autoplay=1"));
      }, 300);
    });
  });
});
